import * as React from 'react';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography"
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/styles';
import ReceiptIcon from '@material-ui/icons/Receipt';
import {CameraTag, LidarTag, RadarTag, RandomTag, AnalyzedTag, PartiallyAnalyzedTag, IncompleteAnalyzedTag} from "./components/tags";

function isOverflown(element) {
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}


function checkCompleteness(dataset) {
    let info = (Object.entries(dataset)[2][1]);
    let info2 = (Object.entries(info));
    let test=0;
    info2.forEach(entry => {
        if (entry[1]===""){
            test = 1;
        }
    });
    console.log(dataset.getValue(dataset.id, 'DOI'))
    if (dataset.getValue(dataset.id, 'DOI')===undefined||dataset.getValue(dataset.id, 'href')===undefined||
        dataset.getValue(dataset.id, 'id')===undefined) {
        return 2;
    } else if(test===1){
        return 1;
    }
    else return 0
}


/***
 *
 *
 * @param description: contains the input of the field 'sensors' of the data sets
 * @param tagProps: properties of 6 tags for sensor types: 'camera', 'radar', 'lidar', 'other1', 'other2', 'other3'
 * @returns {string[]} returns array that contains all sensors that are NOT camera, lidar or radar
 *
 *
 * Function takes info on sensors in the respective data set; checks whether camera, lidar or radar are included;
 * returns info on up to 3 additional sensors
 */
function checkSensortypes(description, tagProps){
    try {
        let sensors = description.split(", ");
        if (sensors.includes("camera")) {
            tagProps.camera='visible';
            sensors = sensors.filter(function(f) { return f !== 'camera' });
        }
        if (sensors.includes("lidar")) {
            tagProps.lidar='visible';
            sensors = sensors.filter(function(f) { return f !== 'lidar' });
        }
        if (sensors.includes("radar")) {
            tagProps.radar='visible';
            sensors = sensors.filter(function(f) { return f !== 'radar' });
        }
        if (sensors.length===3) {
            tagProps.other3='visible';
            tagProps.other2 = 'visible';
            tagProps.other1 = 'visible';
        } else if (sensors.length===2) {
            tagProps.other2 = 'visible';
            tagProps.other1 = 'visible';
        } else if ((sensors.length===1) && (sensors[0]!=="")) {
            tagProps.other1 = 'visible';
        }
        return (sensors)
    }
    catch (e) {
    }
}



const useStyles = makeStyles(() => ({
    root: {
        alignItems: 'center',
        lineHeight: '24px',
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
        '& .cellValue': {
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
        },
    },
}));

const GridCellExpand = React.memo(function GridCellExpand(props) {
    const { width, value } = props;
    const wrapper = React.useRef(null);
    const cellDiv = React.useRef(null);
    const cellValue = React.useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = useStyles();
    const [showFullCell, setShowFullCell] = React.useState(false);
    const [showPopper, setShowPopper] = React.useState(false);

    const handleMouseEnter = () => {
        const isCurrentlyOverflown = isOverflown(cellValue.current);
        setShowPopper(isCurrentlyOverflown);
        setAnchorEl(cellDiv.current);
        setShowFullCell(true);
    };

    const handleMouseLeave = () => {
        setShowFullCell(false);
    };

    React.useEffect(() => {
        if (!showFullCell) {
            return undefined;
        }

        function handleKeyDown(nativeEvent) {
            // IE11, Edge (prior to using Bink?) use 'Esc'
            if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
                setShowFullCell(false);
            }
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [setShowFullCell, showFullCell]);

    return (
        <div
            ref={wrapper}
            className={classes.root}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                ref={cellDiv}
                style={{
                    height: 1,
                    width,
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                }}
            />
            <div ref={cellValue} className="cellValue">
                {value}
            </div>
            {showPopper && (
                <Popper
                    open={showFullCell && anchorEl !== null}
                    anchorEl={anchorEl}
                    style={{ width, marginLeft: -17 }}
                >
                    <Paper
                        elevation={1}
                        style={{ minHeight: wrapper.current.offsetHeight - 3 }}
                    >
                        <Typography variant="body2" style={{ padding: 8 }}>
                            {value}
                        </Typography>
                    </Paper>
                </Popper>
            )}
        </div>
    );
});

GridCellExpand.propTypes = {
    value: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
};

function renderCellExpand(params) {
    if(params.value!== "-" ) {
        return (
            <GridCellExpand
                value={params.value ? params.value.toString() : ''}
                width={params.colDef.width}
            />
        );
    }
    return "";
}

renderCellExpand.propTypes = {
    /**
     * The column of the row that the current cell belongs to.
     */
    colDef: PropTypes.any.isRequired,
    /**
     * The cell value, but if the column has valueGetter, use getValue.
     */
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.number,
        PropTypes.object,
        PropTypes.string,
        PropTypes.bool,
    ]),
};

const columns = [
    {
        field: 'id',
        headerName: 'Name',
        width: 240,
        renderCell: (params) => {
            if (checkCompleteness(params)===0) {
                return(
                <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start"}}>
                    <AnalyzedTag/>
                    <strong>
                        <Link
                            variant="contained"
                            color="primary"
                            size="small"
                            style={{marginLeft: 6}}
                            href={params.getValue(params.id, 'href') || ''}
                            target={'_blank'}
                        >
                            {params.getValue(params.id, 'id') || ''}
                        </Link>
                    </strong>
                </div>)
            }
            else if (checkCompleteness(params)===1){
                return (
                    <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start"}}>
                        <PartiallyAnalyzedTag/>
                        <strong>
                            <Link
                                variant="contained"
                                color="primary"
                                size="small"
                                style={{marginLeft: 6}}
                                href={params.getValue(params.id, 'href') || ''}
                                target={'_blank'}
                            >
                                {params.getValue(params.id, 'id') || ''}
                            </Link>
                        </strong>
                    </div>
                )
            }
            else if (checkCompleteness(params)===2)
                return (
                    <div style={{display: "flex", flexDirection: "row", alignItems: "flex-start"}}>
                        <IncompleteAnalyzedTag/>
                        <strong>
                            <Link
                                variant="contained"
                                color="primary"
                                size="small"
                                style={{marginLeft: 6}}
                                href={params.getValue(params.id, 'href') || ''}
                                target={'_blank'}
                            >
                                {params.getValue(params.id, 'id') || ''}
                            </Link>
                        </strong>
                    </div>
                )
        },
    },
    {
        field: 'citationCount',
        headerName: '# of Citations',
        width: 150,
        align: 'right',
        type: 'number',
        valueFormatter: (params) => {
            const valueFormatted = Number(params.value).toLocaleString();
            if (valueFormatted !== "0" && valueFormatted !== "NaN")
                return `${valueFormatted}`;
            else
                return "";
        }
    },
    {
        field: 'size_hours',
        headerName: 'Size [h]',
        width: 105,
        align: 'right',
        type: "number",
        valueFormatter: (params) => {
            const valueFormatted = Number(params.value).toLocaleString();
            if (valueFormatted!=="0" && valueFormatted!=="NaN")
                return `${valueFormatted}`;
            else
                return "";
        },
    },
    {
        field: 'size_storage',
        headerName: 'Size [GB]',
        width: 120,
        align: 'right',
        type: "number",
        valueFormatter: (params) => {
            const valueFormatted = Number(params.value).toLocaleString();
            if (valueFormatted!=="0" && valueFormatted!=="NaN")
                return `${valueFormatted}`;
            else
                return "";
        },
    },
    {
        field: 'frames',
        headerName: 'Frames',
        width: 110,
        align: 'right',
        type: "number",
        valueFormatter: (params) => {
            const valueFormatted = Number(params.value).toLocaleString();
            if (valueFormatted!=="0" && valueFormatted!=="NaN")
                return `${valueFormatted}`;
            else
                return "";
        },
    },
    {
        field: 'numberOfScenes',
        headerName: 'N° Scenes',
        width: 130,
        align: 'right',
        type: "number",
        sortable: true,
        valueFormatter: (params) => {
            const valueFormatted = Number(params.value).toLocaleString();
            if (valueFormatted!=="0" && valueFormatted!=="NaN")
                return `${valueFormatted}`;
            else
                return "";
        },
    },
    {
        field: 'samplingRate',
        headerName: 'Sampling Rate [Hz]',
        width: 180,
        hide: true,
        type: "number",
        valueFormatter: (params) => {
            const valueFormatted = Number(params.value).toLocaleString();
            if (valueFormatted!=="0" && valueFormatted!=="NaN")
                return `${valueFormatted}`;
            else
                return "";
        },
    },
    {
        field: 'lengthOfScenes',
        headerName: 'Scene Length [s]',
        width: 165,
        align: 'right',
        type: "number",
        valueFormatter: (params) => {
            const valueFormatted = Number(params.value).toLocaleString();
            if (valueFormatted!=="0" && valueFormatted!=="NaN")
                return `${valueFormatted}`;
            else
                return "";
        },
    },
    {
        field: 'sensors',
        headerName: 'Sensortypes',
        description: 'types of sensors used in the dataset',
        type: 'string',
        width: 310,
        sortable: false,
        renderCell: (params) => {
            const valueFormatted = params.value;
            const tagProps = {
                'camera': 'none',
                'lidar': 'none',
                'radar': 'none',
                'other1': 'none',
                'other2': 'none',
                'other3': 'none'
            };
            const sensors = checkSensortypes(valueFormatted, tagProps);

            if (sensors)
                return (
                    <div>
                        <CameraTag visibility={tagProps.camera}/>
                        <LidarTag visibility={tagProps.lidar}/>
                        <RadarTag visibility={tagProps.radar}/>
                        <RandomTag visibility={tagProps.other1} name={sensors[0]}/>
                        <RandomTag visibility={tagProps.other2} name={sensors[1]}/>
                        <RandomTag visibility={tagProps.other3} name={sensors[2]}/>
                    </div>
                );
        },
    },
    {
        field: "sensorDetail",
        headerName: "Sensors - Details",
        description: 'details on used sensors',
        type: "string",
        width: 400,
        sortable: false,
        hide: true,
        renderCell: renderCellExpand
    },
    {
        field: 'benchmark',
        headerName: 'Benchmark',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 360,
        hide: true,
        renderCell: renderCellExpand
    },
    {
        field: 'annotations',
        headerName: 'Annotations',
        width: 350,
        type: "String",
        sortable: false,
        hide: true,
        renderCell: renderCellExpand
    },
    {
        field: 'location',
        headerName: 'Location',
        width: 380,
        hide: true,
        type: "string",
        sortable: false,
        renderCell: renderCellExpand
    },
    {
        field: 'rawData',
        headerName: 'Provide raw data',
        width: 150,
        hide: true,
        type: "string",
        sortable: false,
        renderCell: renderCellExpand
    },
    {
        field: 'licensing',
        headerName: 'Licensing',
        width: 350,
        sortable: false,
        type: "string",
        renderCell: renderCellExpand
    },
    {
        field: 'relatedDatasets',
        headerName: 'Related Datasets',
        width: 180,
        hide: true,
        type: "string",
        sortable: false,
        renderCell: renderCellExpand
    },
    {
        field: 'publishDate',
        headerName: 'Publish Date',
        width: 150,
        hide: true,
        type: "date",
        renderCell: renderCellExpand
    },
    {
        field: 'lastUpdate',
        headerName: 'Last Update',
        width: 150,
        hide: true,
        type: "date",
        renderCell: renderCellExpand
    },
    {
        field: 'relatedPaper',
        headerName: 'Related Paper',
        width: 150,
        hide: false,
        type: "string",
        renderCell: (params) => (
                <Link
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    href={params.getValue(params.id, 'relatedPaper')}
                    target={'_blank'}
                >
                    <ReceiptIcon/>
                </Link>
        ),
    },
];

export { columns };


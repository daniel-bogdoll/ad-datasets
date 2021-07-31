import * as React from 'react';
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography"
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/styles';
import { isOverflown } from '@material-ui/data-grid';

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
    return (
        <GridCellExpand
            value={params.value ? params.value.toString() : ''}
            width={params.colDef.width}
        />
    );
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
        width: 180,
        renderCell: (params) => (
            <strong>
                <Link
                    variant="contained"
                    color="primary"
                    size="small"
                    style={{ marginLeft: 16 }}
                    href={params.getValue(params.id, 'href') || ''}
                    target={'_blank'}
                >
                    {params.getValue(params.id, 'id') || ''}
                </Link>
            </strong>
        ),
    },
    {
        field: 'size_hours',
        headerName: 'Size [h]',
        width: 105,
        align: 'right',
        type: "number",
        renderCell: renderCellExpand
    },
    {
        field: 'size_storage',
        headerName: 'Size [GB]',
        width: 120,
        align: 'right',
        type: "number",
        renderCell: renderCellExpand
    },
    {
        field: 'frames',
        headerName: 'Frames',
        width: 110,
        align: 'right',
        type: "number",
        renderCell: renderCellExpand
    },
    {
        field: 'numberOfScenes',
        headerName: 'N° Scenes',
        width: 130,
        align: 'right',
        type: "number",
        renderCell: renderCellExpand
    },
    {
        field: 'samplingRate',
        headerName: 'Sampling Rate [Hz]',
        width: 180,
        hide: true,
        type: "number",
        renderCell: renderCellExpand
    },
    {
        field: 'lengthOfScenes',
        headerName: 'Scene Length [s]',
        width: 165,
        align: 'right',
        type: "number",
        renderCell: renderCellExpand
    },
    {
        field: 'sensors',
        headerName: 'Sensortypes',
        description: 'types of sensors used in the dataset',
        type: 'string',
        width: 410,
        sortable: false,
        renderCell: renderCellExpand
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
];

export { columns };


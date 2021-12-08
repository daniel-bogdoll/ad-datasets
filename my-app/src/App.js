import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {columns} from './columns.js';
import {rows} from "./data.js";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {LastUpdate} from "./components/Date";
import json2mq from 'json2mq';
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    note: {
        position: "absolute",
        right: "0.5%",
        top: window.innerHeight*0.01,
//        width: window.innerHeight*0.5,
        fontSize: 0.015*window.innerHeight,
        border: "1px solid white",
        borderRadius: "5px",
        paddingLeft: "0.25%",
        paddingRight: "0.25%",
        color: "white",
        textTransform: "none"
    },
    title: {
        display: 'block',
        textAlign: 'center',
        float: 'center',
//        fontSize: "calc(15px + 1vw)",
        fontSize: 0.04*window.innerHeight,
        paddingTop: ".2%"
    },
    subTitle: {
        textAlign: 'center',
        float: "center",
//        fontSize: "0.8vw",
        fontSize: 0.02*window.innerHeight,
        position: "relative"
    },
    customDatagrid: {
        height: window.innerHeight*0.9,
    },
    headBand: {
        width: window.innerWidth,
        height: window.innerHeight*0.1,
        backgroundColor: "#3f51b5",
        color: "white",
    },
}));


export default function RenderExpandCellGrid() {

    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });
    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize);
        return _ => {
            console.log("Resized");
            window.removeEventListener('resize', handleResize)
        }
    });

    const classes = useStyles();
    const [pageSize, setPageSize] = React.useState(10);
    const matches = useMediaQuery(
        json2mq({
            minWidth: 0.535*window.screen.width
        }),
    );
    let visContribute = 'visible';
    let visGit = 'hidden';
    if (matches === false) {
        visContribute  = 'hidden';
        visGit = 'visible';
    }


    return (
        <div style={{width: '100%', height: window.innerHeight}}>
            <div className={classes.headBand} style={{width: window.innerWidth}}>
                <Typography className={classes.title}>
                    ad-datasets
                </Typography>
                <Typography className={classes.subTitle} >
                Complete* and curated list of autonomous driving related datasets
                </Typography>
            </div>
            <LastUpdate/>
            <Button className={classes.note} target={'_blank'} style={{visibility: visContribute}}
                    href={"https://github.com/daniel-bogdoll/ad-datasets"}>
                *Could not find your dataset? <br/> Simply create a pull request ;)
            </Button>
            <Button className={classes.note} target={'_blank'} style={{visibility: visGit}}
                    href={"https://github.com/daniel-bogdoll/ad-datasets"}>
                *GitHub
            </Button>
            <DataGrid rows={rows} columns={columns} components={{Toolbar: GridToolbar}} disableColumnMenu={true}
                      sortingOrder={['desc', 'asc']}
                      pageSize={pageSize}
                      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                      rowsPerPageOptions={[10, 25, 50]}
                      pagination
                      columnBuffer={3}
                      className={classes.customDatagrid}
                      style={{width: Window.innerWidth}}/>
        </div>
    );
}
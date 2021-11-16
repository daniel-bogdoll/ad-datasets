import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {columns} from './columns.js';
import {rows} from "./data.js";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import {LastUpdate} from "./components/Date";


const useStyles = makeStyles((theme) => ({
    note: {
        position: "absolute",
        right: "0.5%",
        top: window.innerHeight*0.04,
        width: window.innerWidth*0.105,
        fontSize: "0.51vw",
        border: "1px solid white",
        borderRadius: "5px",
        padding: "0.2%",
        color: "white",
    },
    title: {
        display: 'block',
        textAlign: 'center',
        float: 'center',
        fontSize: "1.5vw",
        paddingTop: ".2%"
    },
    explanation: {
        textAlign: 'center',
        float: "center",
        fontSize: "0.8vw",
        position: "relative"
    },
    customDatagrid: {
        height: window.innerHeight*0.9,
    },
    helper: {
        width: window.innerWidth,
        height: window.innerHeight*0.1,
        backgroundColor: "#3f51b5",
        color: "white",
    }
}));

export default function RenderExpandCellGrid() {
    const classes = useStyles();
    const [pageSize, setPageSize] = React.useState(10);

    return (
        <div style={{width: '100%', height: window.innerHeight}}>
            <div className={classes.helper}>
                <Typography className={classes.title}>
                    ad-datasets
                </Typography>
                <Typography className={classes.explanation} >
                Complete* and curated list of autonomous driving related datasets
                </Typography>
            </div>
            <LastUpdate/>
            <Button className={classes.note} target={'_blank'}
                    href={"https://github.com/daniel-bogdoll/ad-datasets"}>
                *Could not find your dataset? <br/> Simply create a pull request ;)
            </Button>
            <DataGrid rows={rows} columns={columns} components={{Toolbar: GridToolbar}} disableColumnMenu={true}
                      sortingOrder={['desc', 'asc']}
                      pageSize={pageSize}
                      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                      rowsPerPageOptions={[10, 25, 50]}
                      pagination
                      columnBuffer={3}
                      className={classes.customDatagrid}/>
        </div>
    );
}
import * as React from 'react';
import { DataGrid, GridToolbar } from '@material-ui/data-grid';
import {columns} from './columns.js';
import {rows} from "./data.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
        textAlign: 'center',
        float: 'center'
    },
    explanation: {
        textAlign: 'center',
        float: "center"
    },
    note: {
        float: "right",
        fontSize: "8px",
        border: "1px solid white",
        borderRadius: "5px",
        padding: "0.2%"
    },
    development: {
        float: "left",
        fontSize: "12px",
        border: "1px solid red",
        borderRadius: "5px",
        padding: "0.2%",
        background: "red"
    }
}));

export default function RenderExpandCellGrid() {
    const classes = useStyles();

    return (
        <div style={{width: '100%', height: window.innerHeight*0.86}}>
            <AppBar id={"appbar"} position="static">
                <Toolbar>
                    <Typography className={classes.development} variant="caption" noWrap>
                        in development
                    </Typography>
                    <Typography className={classes.title} variant="h6" noWrap>
                        ad Datasets
                    </Typography>
                    <Typography className={classes.note} variant="caption" noWrap>
                        *Don't find your dataset? <br/> Simply create a pull request ;)
                    </Typography>
                </Toolbar>
                <Typography className={classes.explanation} variant="caption" noWrap>
                    Complete* and curated list of autonomous driving related datasets
                </Typography>
            </AppBar>
            <DataGrid rows={rows} columns={columns} components={{Toolbar: GridToolbar}} disableColumnMenu={true}
                      autoPageSize={true} autoHeight={true}
            />
        </div>
    );
}
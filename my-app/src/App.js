import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {columns} from './columns.js';
import {rows} from "./data.js";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';


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
    const [pageSize, setPageSize] = React.useState(10);

    return (
        <div style={{width: '100%', height: window.innerHeight*0.86}}>
            <AppBar id={"appbar"} position="static">
                <Toolbar>
                    <Typography className={classes.development} variant="caption" noWrap>
                        In development
                    </Typography>
                    <Typography className={classes.title} variant="h6" noWrap>
                        ad-datasets
                    </Typography>
                    <Button className={classes.note} variant="contained" color={"primary"} noWrap target={'_blank'}
                            href={"https://github.com/daniel-bogdoll/ad-datasets"}>
                        *Could not find your dataset? <br/> Simply create a pull request ;)
                    </Button>
                </Toolbar>
                <Typography className={classes.explanation} variant="caption" noWrap>
                    Complete* and curated list of autonomous driving related datasets
                </Typography>
            </AppBar>
            <DataGrid rows={rows} columns={columns} components={{Toolbar: GridToolbar}} disableColumnMenu={true}
                      sortingOrder={['desc', 'asc']}
                      pageSize={pageSize}
                      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                      rowsPerPageOptions={[10, 25, 50]}
                      pagination
            />
        </div>
    );
}
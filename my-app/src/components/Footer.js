import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AnalyzedTag, IncompleteAnalyzedTag, PartiallyAnalyzedTag} from "./Tags";
import PropTypes from 'prop-types';
import { Toolbar, Typography } from '@mui/material';
import {complete, incomplete, parComplete} from "../calculations";
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles((theme) => ({
    footbar: {
        position: 'sticky'
    },
    legend: {
        left: "0",
        fontSize: "small",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        [theme.breakpoints.down('md')]: {
            visibility: "collapse"
        },
        [theme.breakpoints.up('md')]: {
            visibility: "visible"
        }
    },
    trafficSigns: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        marginLeft: "2%",
        fontSize: "10px"
    },
    pagination: {
        alignItems: "center",
        right: "2%"
    }
}));


export function CustomFooter (props) {
    const classes = useStyles();
    return (
        <Toolbar position="fixed" className={classes.footbar} variant={'dense'} name={"footer"}>
            <Typography className={classes.legend}>
                <div className={classes.trafficSigns}>
                    <AnalyzedTag/>
                    <p>Number of Completely Analyzed Datasets: {complete} </p>
                </div>
                <div className={classes.trafficSigns}>
                    <PartiallyAnalyzedTag/>
                    <p>Number of Partially Analyzed Datasets: {parComplete} </p>
                </div>
                <div className={classes.trafficSigns}>
                    <IncompleteAnalyzedTag/>
                    <p>Number of Datasets Missing Essential Information: {incomplete} </p>
                </div>
            </Typography>
            <TablePagination
                className = {classes.pagination}
                component="div"
                count = {props.count}
                page = {props.page}
                onPageChange = {props.onPageChange}
                rowsPerPage =  {props.rows}
                rowsPerPageOptions =  {[10, 20, 40, 100]}
                onRowsPerPageChange = {props.onRowsPerPageChange}
            />
        </Toolbar>
    )
}
CustomFooter.propTypes = {
    clearSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
};
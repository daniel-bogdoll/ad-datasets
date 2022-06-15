import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TablePagination from '@material-ui/core/TablePagination';


const useStyles = makeStyles((theme) => ({
    pagination: {
        alignItems: "center",
    }
}));

export function CustomPagination (props) {

    const classes = useStyles();
    console.log("Helloooooooo");
    return (
        <TablePagination
            className={classes.pagination}
            component="div"
            count={props.count}
            page ={props.page}
            pageSize={props.page}
            onPageChange = {props.onPageChange}
            rowsPerPage =  {props.rowsPerPage}
            onRowsPerPageChange = {props.onRowsPerPageChange}
        />
    )
}
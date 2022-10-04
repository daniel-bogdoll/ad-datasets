import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AnalyzedTag, IncompleteAnalyzedTag, PartiallyAnalyzedTag} from "./Tags";
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import {complete, incomplete, parComplete} from "../calculations";
import TablePagination from '@material-ui/core/TablePagination';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    footbar: {
        display: "flex",
        flexDirection: "column",
    },
    trafficSigns: {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        //fontSize: "10px",
    },
    pagination: {
        //display: "flex",
        //alignItems: "center",
        //right: "2%"
        direction: "row",
        align: "right"
    },
    lights: {
        marginInline: "4%",
    },
    description: {
        marginTop: "0",
    }
}));


export function CustomFooter (props) {
    const classes = useStyles();
    return <footer className={classes.footbar}>
                <Container>
                    <Grid container direction="row"
                          justifyContent="space-between"
                          alignItems="baseline">
                        <Grid item xs={7}>
                            <Box className={classes.trafficSigns} style={{marginTop: "-20px"}}>
                                <AnalyzedTag className={classes.lights}/>
                                <Typography className={classes.description} variant={"body2"} sx={{fontSize: 13}}>Completely Analyzed: {complete} </Typography>
                                <PartiallyAnalyzedTag className={classes.lights}/>
                                <Typography className={classes.description} variant={"body2"} sx={{fontSize: 13}}>Partially Analyzed: {parComplete} </Typography>
                                <IncompleteAnalyzedTag/>
                                <Typography className={classes.description} variant={"body2"} sx={{fontSize: 13}}>Missing Essential Information: {incomplete} </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={5}>
                            <TablePagination
                                className = {classes.pagination}
                                component="div"
                                count = {props.count}
                                page = {props.page}
                                onPageChange = {props.onPageChange}
                                rowsPerPage =  {props.rows}
                                rowsPerPageOptions =  {[10, 20, 40]}
                                onRowsPerPageChange = {props.onRowsPerPageChange}
                            />
                        </Grid>
                    </Grid>
                </Container>

            </footer>
}
CustomFooter.propTypes = {
    clearSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
};
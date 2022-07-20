import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import {columns} from './columns.js';
import { makeStyles } from '@material-ui/core/styles';
import Data from './data_sorted.json';
import {QuickSearchToolbar} from "./components/Toolbar";
import {Header} from "./components/Header";
import {CustomFooter} from "./components/Footer";


const useStyles = makeStyles((theme) => ({
    customDatagrid: {
        height: "100%",
        width: Window.innerWidth
    },
    legend: {
        left: "1%",
        position: "absolute",
        fontSize: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
    },
    pagination: {
        alignItems: "center",
    },
    tool: {
        width: "100",
        height: window.innerHeight
    }
}));


function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export default function RenderExpandCellGrid() {
    const classes = useStyles();

    const [searchText, setSearchText] = React.useState('');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(20);
    const [rows, setRows] = React.useState(Data);
    const [, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth
    });

    const onChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (value) => {
        setRowsPerPage(parseInt(value, 10));
        setPage(0);
    };

    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
        const filteredRows = Data.filter((row) => {
            return Object.keys(row).some((field) => {
                return searchRegex.test(row[field].toString());
            });
        });
        setRows(filteredRows)
    };

    React.useEffect(() => {
        function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', handleResize);
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    });

    return (
        <div className={classes.tool}>
            <Header title={'ad-datasets'} subtitle={'Complete* and curated list of autonomous driving related datasets'}/>


            <DataGrid rows={rows} columns={columns} disableColumnMenu={true} className={classes.customDatagrid}
                      sortingOrder={['desc', 'asc']} page={page}
                      components={{ Toolbar: QuickSearchToolbar, Footer: CustomFooter}}
                      onPageSizeChange={(newPageSize) => setPage(newPageSize)}
                      pageSize={rowsPerPage}
                      componentsProps={{
                          toolbar: {
                              value: searchText,
                              onChange: (event) => requestSearch(event.target.value),
                              clearSearch: () => requestSearch(''),
                          },
                          footer: {
                              count: rows.length,
                              page: page,
                              rows: rowsPerPage,
                              onPageChange: onChangePage,
                              onRowsPerPageChange: (event) => handleChangeRowsPerPage(event.target.value)
                          }
                      }}
            />
        </div>
    );
}












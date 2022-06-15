import { makeStyles } from '@material-ui/core/styles';
import {
    GridToolbarFilterButton,
    GridToolbarColumnsButton,
    GridToolbarExport
} from '@mui/x-data-grid';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 5,
        paddingLeft: 5,
        paddingRight: 5,
        display: 'flex',
    },
    textField: {
        paddingLeft: 5,
    },
}));

export function QuickSearchToolbar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <GridToolbarFilterButton />
                <GridToolbarColumnsButton />
                <GridToolbarExport />
            </div>
            <TextField hiddenLabel size={"small"}
                color={"info"}
                value={props.value}
                onChange={props.onChange}
                placeholder="search…"
                className={classes.textField}
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small" color={"primary"} />,
                    endAdornment: (
                        <IconButton
                            title="Clear"
                            aria-label="Clear"
                            size="small"
                            style={{ visibility: props.value ? 'visible' : 'hidden' }}
                            onClick={props.clearSearch}
                            color={"primary"}
                        >
                            <ClearIcon fontSize="small" color={"primary"} />
                        </IconButton>
                    ),
                }}
            />
        </div>
    );
}

QuickSearchToolbar.propTypes = {
    clearSearch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

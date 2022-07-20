import * as React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import json2mq from 'json2mq';
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((theme) => ({
    header: {
    },
    textField: {
        position: "absolute",
        right: "1%",
    },
    menuButton: {

    },
    note: {
        position: "absolute",
        right: "0.5%",
        height: "85%",
        border: "1px solid white",
        borderRadius: "5px",
        paddingLeft: "0.25%",
        paddingRight: "0.25%",
        color: "white",
        textTransform: "none",
        [theme.breakpoints.down('sm')]: {
            visibility: "hidden"
        }
    },
    lastUpdate: {
        position: "absolute",
        left: "0.5%",
        height: "80%",
        border: "1px solid white",
        borderRadius: "5px",
        paddingLeft: "0.25%",
        paddingRight: "0.25%",
        color: "#3f51b5",
        textTransform: "none",
        backgroundColor: "white",
        [theme.breakpoints.down('sm')]: {
            visibility: "hidden"
        },
        [theme.breakpoints.up('md')]: {
            visibility: "visible"
        }
    },
    title: {
        margin: 'auto',
        textAlign: 'center'
    },
}));

export function Header(props) {
    const classes = useStyles();

    const [, setDimensions] = React.useState({
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
            window.removeEventListener('resize', handleResize)
        }
    });


    const matches = useMediaQuery(
        json2mq({
            //minWidth: 0.535*window.screen.width
            minWidth: "770px"
        }),
    );
    let visGit = 'hidden';
    if (matches === false) {
        //visContribute  = 'hidden';
        //visGit = 'visible';
    }




    return (
        <AppBar position="static" className={classes.header}>
            <Toolbar>
                <div className={classes.title}>
                    <Typography variant="h5">
                    {props.title}
                    </Typography>
                    <Typography variant="body1">
                        {props.subtitle}
                    </Typography>
                </div>

                <Button className={classes.note} target={'_blank'} style={{visibility: visGit}} variant={"caption"}
                        href={"https://github.com/daniel-bogdoll/ad-datasets"}>
                    *GitHub
                </Button>
                <Button className={classes.note} target={'_blank'} variant={"caption"}
                        href={"https://github.com/daniel-bogdoll/ad-datasets"}>
                    *Could not find your dataset? <br/> Simply create a pull request ;)
                </Button>
                <Typography className={classes.lastUpdate} variant={"caption"}>
                    Last Update: {process.env.REACT_APP_GIT_SHA}
                </Typography>
            </Toolbar>
        </AppBar>
    )

}

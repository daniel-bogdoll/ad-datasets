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
        backgroundColor: "white"//"rgb(120,120,120, 0.1)",//"rgb(0, 151, 230)",
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
        border: "2px solid rgb(0, 151, 230)",
        borderRadius: "5px",
        paddingLeft: "0.25%",
        paddingRight: "0.25%",
        color: "#444444",
        backgroundColor: "white",
        textTransform: "none",
        [theme.breakpoints.down('sm')]: {
            visibility: "hidden"
        }
    },
    lastUpdate: {
        display: "flex",
        alignItems: "center",
        position: "absolute",
        left: "0.5%",
        height: "50%",
        border: "2px solid rgb(0, 151, 230)",
        borderRadius: "5px",
        paddingLeft: "0.5%",
        paddingRight: "0.5%",
        color: "#444444",
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
        textAlign: 'center',
        color: "#444444"
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




    return <header>
                <AppBar position="static" className={classes.header}>
                    <Toolbar variant={'dense'}>
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
                        <Typography className={classes.lastUpdate} variant={"caption"} align={"left"}>
                            Last Update: {process.env.REACT_APP_GIT_SHA}
                        </Typography>
                    </Toolbar>
                </AppBar>
            </header>;


}

import React from 'react';
import Typography from "@material-ui/core/Typography";

/**
 * This is the commit message of the last commit before building or running this project
 * @see ./package.json git-info for how to generate this commit
 */

export class LastUpdate extends React.Component {
    render() {
        return (
        <div style={{
            position: "absolute",
            top: window.innerHeight*0.005,
            width: window.innerWidth*0.1,
            border: "1px solid white",
            borderRadius: "5px",
            padding: "0.2%",
            fontSize: "0.51vw",
            right: "0.5%",
            height: window.innerHeight*0.015,
            backgroundColor: "white",

        }}>
            <Typography
                  style={{
                      color: "#3f51b5",
                      fontSize: "0.51vw",
                      textAlign: "center"
                  }}>
                LAST UPDATE      {process.env.REACT_APP_GIT_SHA}
            </Typography>
        </div>
        )
    }
}
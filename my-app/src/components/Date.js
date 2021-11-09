import React from 'react';
import Typography from "@material-ui/core/Typography";

/**
 * This is the commit message of the last commit before building or running this project
 * @see ./package.json git-info for how to generate this commit
 */

export class DateDater extends React.Component {
    render() {
        return (
        <div>
            <Typography label="lidar"
                  size="small"
                  variant="outlined"
                  style={{
                      color: "primary",
                      border: "1px solid black",
                      borderRadius: "5px",
                      padding: "4px",
                      fontSize: "14px",
                      position: "fixed",
                      left: "0.5%",
                      bottom: "1%"
                  }}>
                Last Update: {process.env.REACT_APP_GIT_SHA}
            </Typography>
        </div>
        )
    }
}
import React from 'react';

/**
 * This is the commit message of the last commit before building or running this project
 * @see ./package.json git-info for how to generate this commit
 */
import GitCommit from '../_git_commit';
import Typography from "@material-ui/core/Typography";

const VersionComponent = () => (
    <div>
        <Typography style={{
            fontSize: "12px",
            position: "fixed",
            right: "1%",
            top: "14%",
            background: "rgba(76, 175, 80, 0.3)",
            border: "1px solid white",
            borderRadius: "5px",
            padding: "8px"}}>Last Update: {GitCommit.logMessage}</Typography>
    </div>
);

export default VersionComponent;

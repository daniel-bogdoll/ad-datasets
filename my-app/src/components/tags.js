import Chip from "@material-ui/core/Chip";
import * as React from "react";

export class CameraTag extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Chip label="camera"
                     color="primary"
                     size="small"
                     variant="outlined"
                     style={{display:this.props.visibility}}/>
    }
}

export class LidarTag extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Chip label="lidar"
                     size="small"
                     variant="outlined"
                     style={{color: 'mediumseagreen', border: '1px solid mediumseagreen', display: this.props.visibility}}/>
    }
}

export class RadarTag extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Chip label="radar"
                     size="small"
                     variant={"outlined"}
                     style={{color: 'maroon', border: '1px solid maroon', display:this.props.visibility}}/>
    }
}

export class RandomTag extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Chip label={this.props.name}
                     size={"small"}
                     variant={"outlined"}
                     style={{color: 'peru', border: '1px solid peru', display: this.props.visibility}}/>
    }
}
import Chip from "@material-ui/core/Chip";
import * as React from "react";
import TimelineDot from '@mui/lab/TimelineDot';

export class CameraTag extends React.Component {
    render() {
        return <Chip label="camera"
                     size="small"
                     variant="outlined"
                     style={{display:this.props.visibility,  color:"rgb(26, 188, 156)", backgroundColor: 'rgba(233, 247, 239, 0.7)', borderColor:"rgb(26, 188, 156)"}}/>
    }
}

export class LidarTag extends React.Component {
    render() {
        return <Chip label="lidar"
                     size="small"
                     variant="outlined"
                     style={{color: 'rgb(203, 67, 53)', backgroundColor:'rgba(245, 238, 248, 0.7)', border: '1px solid rgb(203, 67, 53)', display: this.props.visibility}}/>
    }
}

export class RadarTag extends React.Component {
    render() {
        return <Chip label="radar"
                     size="small"
                     variant={"outlined"}
                     style={{color: 'rgb(52, 152, 219 )', backgroundColor:'rgba(235, 245, 251, 0.7)', border: '1px solid rgb(52, 152, 219 )', display:this.props.visibility}}/>
    }
}

export class RandomTag extends React.Component {
    render() {
        return <Chip label={this.props.name}
                     size={"small"}
                     variant={"outlined"}
                     style={{color: 'peru', border: '1px solid peru', backgroundColor: 'rgba(255, 173, 71, 0.2)', display: this.props.visibility}}/>
    }
}
export class AnalyzedTag extends React.Component {
    render() {
        return <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1px solid white",
        borderRadius: "10px", backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
                            <TimelineDot style={{height: "3px", width: "3px", background: "red", padding: "0px",
                                opacity:"0.3", margin: "1px", backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                            <TimelineDot style={{height: "3px", width: "3px", background: "yellow", padding: "0px",
                                marginRight: "1px", opacity:"0.3", margin: "1px", backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                            <TimelineDot color={"success"} style={{height: "3px", width: "3px", padding: "0px",
                                marginRight: "1px", margin: "1px"}}/>
                        </div>
    }
}
export class PartiallyAnalyzedTag extends React.Component {
    render() {
        return <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1px solid white",
            borderRadius: "10px", backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
                         <TimelineDot color={"success"} style={{height: "3px", width: "3px", padding: "0",
                         opacity: "0.3", margin: "1px", backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                         <TimelineDot style={{height: "3px", width: "3px", background: "yellow", padding: "0", margin:"1px"}}/>
                         <TimelineDot style={{height: "3px", width: "3px", background: "red", padding: "0",
                             opacity: "0.3", margin: "1px", backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                </div>

    }
}
export class IncompleteAnalyzedTag extends React.Component {
    render() {
        return <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start", border: "1px solid white",
        borderRadius: "10px", backgroundColor: "rgba(0, 0, 0, 0.2)"}} >
                        <TimelineDot style={{height: "3px", width: "3px", background: "red", padding: "0", margin: "1px"}}/>
                        <TimelineDot style={{height: "3px", width: "3px", background: "yellow", padding: "0", margin:"1px",
                         opacity: "0.3", backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                        <TimelineDot color={"success"} style={{height: "3px", width: "3px", padding: "0", margin:"1px",
                            opacity: "0.3", backgroundColor: "rgba(0, 0, 0, 0.5)"}}/>
                     </div>
    }
}

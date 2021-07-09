import logo from './logo.svg';
import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {DataGrid, GridToolbar} from "@material-ui/data-grid";
import { rows } from './data.js';
import { columns } from './columns';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


export default function DataTable() {
  return (
      <div style={{ height: window.innerHeight*0.9, width: '100%'}}>
        <h3 style={{'text-align': "center"}}> ad Datasets </h3>
          <h4 style={{'text-align': "center", 'color':"red"}}> work in progress</h4>
        <DataGrid disableColumnMenu={true} components={{
            Toolbar: GridToolbar,
        }}
            rows={rows}
            columns={columns}
            //pageSize={10}
            //checkboxSelection
            //disableSelectionOnClick
            options={{columnsButton: true, resizable: true}}
            resizable
        />
      </div>
  );
}

/*

function App() {
  return (
      <TableContainer component={Paper}>
        <Table id={'tableDatasets'} aria-label="simple table">
          <tr>
            <TableRow>
              <th></th>
              <th colSpan="4" className={'Title'}>Size</th>
              <th className={'Title'}>Sampling Rate</th>
              <th className={'Title'}>Length of Scenes</th>
              <th className={'Title'}>Sensors</th>
              <th className={'Title'}>Benchmark</th>
              <th className={'Title'}>Data Format</th>
              <th className={'Title'}>Tooling</th>
              <th className={'Title'}>Annotations</th>
              <th className={'Title'}>Statistics</th>
              <th className={'Title'}>Licensing</th>
              <th className={'Title'}>Related Datasets</th>
              <th className={'Title'}>Publish Date </th>
            </TableRow>
            <TableRow><td><a href={'https://www.cityscapes-dataset.com'}>Cityscapes 3D</a></td>
              <td>-</td>
              {/!* hours *!/}
              <td>12.5</td>
              {/!* Frames *!/}
              <td>750 000</td>
              {/!* Number of Scenes *!/}
              <td>25 000</td>
              {/!* Sampling Rate *!/}
              <td>17 Hz</td>
              {/!* Length of Scenes *!/}
              <td>1.8 sec</td>
              {/!* Sensors *!/}
              <td>2 Stereo Cameras CMOS 2 MP</td>
              {/!* Benchmark *!/}
              <td>Pixel-Level Semantic Labeling Task Instance-Level Semantic Labeling Task Panoptic Semantic Labeling Task 3D Vehicle Detection Task</td>
              {/!* Data Format *!/}
              <td>Annotation: json Image: png</td>
              {/!* Tooling *!/}
              <td>-</td>
              {/!* Annotations *!/}
              <td>Polygonal Annotations Dense Semantic Segmentation Instance Segmentation for Vehicle/People </td>
              {/!* Statistics *!/}
              <td><img src={'Stats_Cityscape_2.png'} alt={'-'}/></td>
              {/!* Licensing *!/}
              <td>Freely available for non-commercial purposes</td>
              {/!* Related Datasets *!/}
              <td>-</td>
              {/!*Publish Date *!/}
              <td>08.2020</td>
              <th></th>
              {/!*Size*!/}
              <th className={'subTitle'}>GB</th>
              <th className={'subTitle'}>hrs</th>
              <th className={'subTitle'}>Frames</th>
              <th className={'subTitle'}># of Scenes</th>
              {/!* Sampling Rate *!/}
              <th></th>
              {/!* Lenth of Scenes *!/}
              <th></th>
              {/!* Sensors *!/}
              <th></th>
              {/!* Benchmark *!/}
              <th></th>
              {/!* Data Format *!/}
              <th></th>
              {/!* Tooling *!/}
              <th></th>
              {/!* Annotations *!/}
              <th></th>
              {/!* Statistics *!/}
              <th></th>
              {/!* Licensing *!/}
              <th></th>
              {/!* Related Datasets *!/}
              <th></th>
              {/!*Publish Date *!/}
              <th></th>
              {/!*Last Update*!/}
              <th></th>
            </TableRow>
          </tr>
          <tbody>
            <TableRow>

            </TableRow>
            <tr>
              <td><a href={'https://www.bdd100k.com/'}>BDD100k</a></td>
              {/!* in GB *!/}
              <td>1 800</td>
              {/!* hours *!/}
              <td>1111</td>
              {/!* Frames *!/}
              <td>120 000 000</td>
              {/!* Number of Scenes *!/}
              <td>100 000</td>
              {/!* Sampling Rate *!/}
              <td>30 Hz</td>
              {/!* Length of Scenes *!/}
              <td>40 sec</td>
              {/!* Sensors *!/}
              <td>Crowd-sourced, no fixed setup, camera and GPS/IMU</td>
              {/!* Benchmark *!/}
              <td>Object Detection Instance Segmentation Semantic Segmentation Drivable Area Object Tracking Segmentation Tracking </td>
              {/!* Data Format *!/}
              <td>Scalable Format</td>
              {/!* Tooling *!/}
              <td>-</td>
              {/!* Annotations *!/}
              <td>Image Level Annotations (Weather, Scene Type, Day Time), Object Detection - Bounding boxes, Lane Marking, Drivable Area, fie-grained pixel level annotations </td>
              {/!* Statistics *!/}
              <td>-</td>
              {/!* Licensing *!/}
              <td>Freely available for non-commercial purposes</td>
              {/!* Related Datasets *!/}
              <td>-</td>
              {/!*Publish Date *!/}
              <td>04.2020</td>
            </tr>
            <tr>
              <td><a href={'http://www.cvlibs.net/datasets/kitti/index.php'}> KITTI</a></td>
              {/!* in GB *!/}
              <td></td>
              {/!* hours *!/}
              <td></td>
              {/!* Frames *!/}
              <td></td>
              {/!* Number of Scenes *!/}
              <td></td>
              {/!* Sampling Rate *!/}
              <td>10 Hz</td>
              {/!* Length of Scenes *!/}
              <td></td>
              {/!* Sensors *!/}
              <td>1 GPS/IMU 1 Laserscanner 2 Grayscale Cameras 2 Color Cameras 4 Varifocal Lenses</td>
              {/!* Benchmark *!/}
              <td></td>
              {/!* Data Format *!/}
              <td></td>
              {/!* Tooling *!/}
              <td></td>
              {/!* Annotations *!/}
              <td></td>
              {/!* Statistics *!/}
              <td></td>
              {/!* Licensing *!/}
              <td></td>
              {/!* Related Datasets *!/}
              <td></td>
              <td>04.2020</td>
              <td></td>
            </tr>
            <tr>
              <td><a hrf={'https://waymo.com/open'}>Waymo Open Motion Dataset</a></td>
              {/!* in GB *!/}
              <td>-</td>
              {/!* hours *!/}
              <td>574</td>
              {/!* Frames *!/}
              <td> > 20 000 000 </td>
              {/!* Number of Scenes *!/}
              <td>103354</td>
              {/!* Sampling Rate *!/}
              <td>10 Hz</td>
              {/!* Length of Scenes *!/}
              <td>20 sec</td>
              {/!* Sensors *!/}
              <td>5 Lidar 5 Cameras </td>
              {/!* Benchmark *!/}
              <td></td>
              {/!* Data Format *!/}
              <td></td>
              {/!* Tooling *!/}
              <td>-</td>
              {/!* Annotations *!/}
              <td></td>
              {/!* Statistics *!/}
              <td></td>
              {/!* Licensing *!/}
              <td>Freely available for non-commercial purposes</td>
              {/!* Related Datasets *!/}
              <td>Waymo Open Perception Dataset</td>
              <td>03.2021</td>
              <td></td>
            </tr>
            <tr>
              <td>Cityscapes</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td><a href={'https://pandaset.org/'}>PandaSet</a></td>
              {/!* in GB *!/}
              <td></td>
              {/!* hours *!/}
              <td></td>
              {/!* Frames *!/}
              <td>48 000+</td>
              {/!* Number of Scenes *!/}
              <td>100+</td>
              {/!* Sampling Rate *!/}
              <td></td>
              {/!* Length of Scenes *!/}
              <td>8 sec</td>
              {/!* Sensors *!/}
              <td>5 wide angle cameras 1 long focus camera 1 mechanical spinning LiDAR 1 forward-facing lidar</td>
              {/!* Benchmark *!/}
              <td></td>
              {/!* Data Format *!/}
              <td></td>
              {/!* Tooling *!/}
              <td></td>
              {/!* Annotations *!/}
              <td>3D Bounding Boxes; Class Attributes: Activity, Visibility, Location, Pose; Point Cloud Segmentation with 37 semantic labels</td>
              {/!* Statistics *!/}
              <td></td>
              {/!* Licensing *!/}
              <td>Creative Commons Attribution 4.0 International Public License</td>
              {/!* Related Datasets *!/}
              <td></td>
              <td>04.2020</td>
              <td></td>
            </tr>
            <tr>
              <td><a href={'https://www.nuscenes.org/'}>nuScenes</a></td>
              {/!* in GB *!/}
              <td></td>
              {/!* hours *!/}
              <td>15</td>
              {/!* Frames *!/}
              <td>1 400 000</td>
              {/!* Number of Scenes *!/}
              <td>1 000</td>
              {/!* Sampling Rate *!/}
              <td></td>
              {/!* Length of Scenes *!/}
              <td>20 sec</td>
              {/!* Sensors *!/}
              <td>1 LiDAR 5 RADAR 6 camera IMU, GPS</td>
              {/!* Benchmark *!/}
              <td></td>
              {/!* Data Format *!/}
              <td></td>
              {/!* Tooling *!/}
              <td></td>
              {/!* Annotations *!/}
              <td>3D Bounding Boxes (2 Hz)+semantic category, attributes: visibility, pose, activity, ...; semantic
                point cloud annotations; </td>
              {/!* Statistics *!/}
              <td></td>
              {/!* Licensing *!/}
              <td>Freely available for non-commercial purposes</td>
              {/!* Related Datasets *!/}
              <td>nuImages</td>
              <td>03.2019</td>
              {/!*Last Update*!/}
              <td>07.2020</td>
            </tr>
            <tr>
              <td>nuImages</td>
              {/!* in GB *!/}
              <td></td>
              {/!* hours *!/}
              <td></td>
              {/!* Frames *!/}
              <td></td>
              {/!* Number of Scenes *!/}
              <td></td>
              {/!* Sampling Rate *!/}
              <td></td>
              {/!* Length of Scenes *!/}
              <td></td>
              {/!* Sensors *!/}
              <td></td>
              {/!* Benchmark *!/}
              <td></td>
              {/!* Data Format *!/}
              <td></td>
              {/!* Tooling *!/}
              <td></td>
              {/!* Annotations *!/}
              <td></td>
              {/!* Statistics *!/}
              <td></td>
              {/!* Licensing *!/}
              <td>Freely available for non-commercial purposes</td>
              {/!* Related Datasets *!/}
              <td></td>
              {/!*Publish Date*!/}
              <td>04.2020</td>
              {/!*Latest Update*!/}
              <td></td>
            </tr>
            <tr>
              <td>Oxford RobotCar</td>
              {/!* in GB *!/}
              <td>23 150</td>
              {/!* hours *!/}
              <td></td>
              {/!* Frames *!/}
              <td></td>
              {/!* Number of Scenes *!/}
              <td></td>
              {/!* Sampling Rate *!/}
              <td></td>
              {/!* Length of Scenes *!/}
              <td></td>
              {/!* Sensors *!/}
              <td>4 cameras, 3 LiDAR, GPS, INS</td>
              {/!* Benchmark *!/}
              <td></td>
              {/!* Data Format *!/}
              <td></td>
              {/!* Tooling *!/}
              <td></td>
              {/!* Annotations *!/}
              <td></td>
              {/!* Statistics *!/}
              <td></td>
              {/!* Licensing *!/}
              <td>Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License </td>
              {/!* Related Datasets *!/}
              <td></td>
              {/!*Publish Date*!/}
              <td>2016</td>
              {/!*Latest Update*!/}
              <td></td>
            </tr>
            <tr>
              <td><a href={'https://self-driving.lyft.com/level5/'}>Lyft Level5</a></td>
              {/!* in GB *!/}
              <td></td>
              {/!* hours *!/}
              <td>1 118</td>
              {/!* Frames *!/}
              <td></td>
              {/!* Number of Scenes *!/}
              <td>170 000</td>
              {/!* Sampling Rate *!/}
              <td></td>
              {/!* Length of Scenes *!/}
              <td>25 sec</td>
              {/!* Sensors *!/}
              <td>7 cameras, 3 LiDARs, 5 RADARs</td>
              {/!* Benchmark *!/}
              <td></td>
              {/!* Data Format *!/}
              <td>zarr</td>
              {/!* Tooling *!/}
              <td></td>
              {/!* Annotations *!/}
              <td></td>
              {/!* Statistics *!/}
              <td></td>
              {/!* Licensing *!/}
              <td></td>
              {/!* Related Datasets *!/}
              <td></td>
              {/!*Publish Date*!/}
              <td>07.2019</td>
              {/!*Latest Update*!/}
              <td>06.2020</td>
            </tr>
            <tr>
              <td><a href={'http://apolloscape.auto/'}>ApolloScape</a></td>
              {/!* in GB *!/}
              <td></td>
              {/!* hours *!/}
              <td></td>
              {/!* Frames *!/}
              <td></td>
              {/!* Number of Scenes *!/}
              <td></td>
              {/!* Sampling Rate *!/}
              <td></td>
              {/!* Length of Scenes *!/}
              <td></td>
              {/!* Sensors *!/}
              <td></td>
              {/!* Benchmark *!/}
              <td></td>
              {/!* Data Format *!/}
              <td></td>
              {/!* Tooling *!/}
              <td></td>
              {/!* Annotations *!/}
              <td></td>
              {/!* Statistics *!/}
              <td></td>
              {/!* Licensing *!/}
              <td></td>
              {/!* Related Datasets *!/}
              <td></td>
              {/!*Publish Date*!/}
              <td>04.2020</td>
              {/!*Latest Update*!/}
              <td></td>
            </tr>
            <tr>
              <td>Bsp</td>
              {/!* in GB *!/}
              <td></td>
              {/!* hours *!/}
              <td></td>
              {/!* Frames *!/}
              <td></td>
              {/!* Number of Scenes *!/}
              <td></td>
              {/!* Sampling Rate *!/}
              <td></td>
              {/!* Length of Scenes *!/}
              <td></td>
              {/!* Sensors *!/}
              <td></td>
              {/!* Benchmark *!/}
              <td></td>
              {/!* Data Format *!/}
              <td></td>
              {/!* Tooling *!/}
              <td></td>
              {/!* Annotations *!/}
              <td></td>
              {/!* Statistics *!/}
              <td></td>
              {/!* Licensing *!/}
              <td></td>
              {/!* Related Datasets *!/}
              <td></td>
              {/!*Publish Date*!/}
              <td>04.2020</td>
              {/!*Latest Update*!/}
              <td></td>
            </tr>
          </tbody>
        </Table>
      </TableContainer>
  );
}

export default App;
*/

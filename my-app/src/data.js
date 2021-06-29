import * as React from 'react';


const columns = [
    {   field: 'id', headerName: 'Name', width: 180 },
    {   field: 'size_hours', headerName: 'Size (Hours)', width: 140, align: 'right' },
    {   field: 'size_storage', headerName: 'Size (Storage)', width: 140, align: 'right' },
    {   field: 'frames', headerName: 'Frames', width: 120, align: 'right' },
    {   field: 'numberOfScenes', headerName: '# of Scenes', width: 140, align: 'right' },
    {
        field: 'samplingRate',
        headerName: 'Sampling Rate',
        width: 150,
        hide: true,
        menu: false,
        align: 'right'
    },
    {
        field: 'lengthOfScenes',
        headerName: 'Length of Scenes',
        width: 150,
        align: 'right'
    },
    {
        field: 'sensors',
        headerName: 'Sensors',
        type: 'number',
        width: 210,
    },
    {
        field: 'benchmark',
        headerName: 'Benchmark',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, 'firstName') || ''} ${
                params.getValue(params.id, 'lastName') || ''
            }`,
        hide: true
    },
    {
        field: 'dataFormat',
        headerName: 'Data Format',
        width: 150,
        hide: true
    },
    {
        field: 'tooling',
        headerName: 'Tooling',
        width: 150,
        hide: true
    },
    {
        field: 'annotations',
        headerName: 'Annotations',
        width: 150,
    },
    {
        field: 'licensing',
        headerName: 'Licensing',
        width: 150,
        resizable: true
    },
    {
        field: 'relatedDatasets',
        headerName: 'Related Datasets',
        width: 150,
        hide: true
    },
    {
        field: 'publishDate',
        headerName: 'Publish Date',
        width: 150,
        hide: true
    },
    {
        field: 'lastUpdate',
        headerName: 'Last Update',
        width: 150,
        hide: true,
    },
];

const rows = [
    {
        id:   "Cityscapes 3D",
        href: "www.google.de",
        size_hours: '12.5',
        samplingRate: '17 Hz',
        lengthOfScenes: '1.8 sec',
        sensors: '2 Stereo Cameras CMOS 2 MP',
        benchmark: 'Pixel-Level Semantic Labeling Task Instance-Level Semantic Labeling Task Panoptic Semantic Labeling Task 3D Vehicle Detection Task',
        dataFormat: 'Annotation: json Image: png',
        tooling: '-',
        annotations: 'Polygonal Annotations Dense Semantic Segmentation Instance Segmentation for Vehicle/People',
        licensing: 'Freely available for non-commercial purposes',
        relatedDatasets: '-',
        publishDate: '02.2016',
        lastUpdate: '08.2020'
    },
    {
        id: "ApolloScape",
        size_hours: "100+",
        frames: "142 906",
        samplingRate: "30 Hz",
        sensors: "2 laser scanners, 4 cameras, 1 LiDAR, 1 GPS",
        publishDate: "07.2019"
    },
    {
        id: "Lyft Level5",
        size_hours: "1118",
        scenes_number: "170 000",
        lengthOfScenes: "25 sec",
        sensors: "7 cameras, 3 LiDARs, 5 RADARs",
        dataFormat: "zarr",
        publishDate: "07.2019",
        lastUpdate: "06.2020"
    },
    {
        id: "Oxford RobotCar",
        size_storage: "23.15 TB",
        sensors: "4 cameras, 3 LiDAR, GPS, INS",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License",
        publishDate: "2016"
    },
    {
        id: "nuScenes",
        size_hours: "15",
        frames: "1 4000 000",
        numberOfScenes: "1 000",
        lengthOfScenes: "20 sec",
        sensors: "1 LiDAR, 5 radar, 6 camera, IMU, GPS",
        annotations: "3D Bounding Boxes (2 Hz)+semantic category, attributes: visibility, pose, activity, ...; semantic\n" +
            "            point cloud annotations; ",
        licensing: "Freely available for non-commercial purposes",
        relatedDatasets: "nuImages",
        publishDate: "03.2019",
        lastUpdate: "07.2020"
    },
    {
        id: "PandaSet",
        frames: "48 000+",
        numberOfScenes: "100+",
        lengthOfScenes: "8 sec",
        sensors: "5 wide angle cameras 1 long focus camera 1 mechanical spinning LiDAR 1 forward-facing LiDAR",
        annotations: "3D Bounding Boxes; Class Attributes: Activity, Visibility, Location, Pose; Point Cloud Segmentation " +
            "with 37 semantic labels",
        licensing: "Creative Commons Attribution 4.0 International Public License",
        publishDate: "04.2020"
    },
    {
        id: "Waymo Open Motion Dataset",
        size_hours:  "574",
        frames: "20 000 000",
        numberOfScenes: "103 354",
        samplingRate: "10 Hz",
        lengthOfScenes: "20 sec",
        sensors: "5 LiDAR 5 Cameras",
        licensing: "Freely available for non-commercial purposes",
        relatedDatasets: "Waymo Open Perception Dataset",
        publishDate: "03.2021"
    },
    {
        id: "KITTI",
        size_hours: "6",
        size_storage: "180 GB",
        samplingRate: "10-100 Hz",
        sensors: "1 GPS/IMU 1 Laserscanner 2 Grayscale Cameras 2 Color Cameras 4 Varifocal Lenses",
        benchmark: " stereo, optical flow, visual odometry, SLAM, 3Dobject detection and 3D object tracking",
        dataFormat: "zip & txt",
        annotations: "3D bounding boxes of 8 classes",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 3.0 License",
        publishDate: "03.2012",
        lastUpdate: "02.2021"
    },
    {
        id: "BDD100k",
        size_storage: "1.8 TB",
        size_hours: "1111",
        frames: "120 000 000",
        numberOfScenes: "100 000",
        samplingRate: "30 Hz",
        lengthOfScenes: "40 sec",
        sensors: "Crowd-sourced, no fixed setup; camera and GPS/IMU",
        benchmark: "Object Detection Instance Segmentation Semantic Segmentation Drivable Area Object Tracking " +
            "Segmentation Tracking",
        dataFormat: "Scalable Format",
        annotations: "Image Level Annotations (Weather, Scene Type, Day Time), Object Detection - Bounding boxes, " +
            "Lane Marking, Drivable Area, fie-grained pixel level annotations",
        licensing: "Freely available for non-commercial purposes",
        publishDate: "04.2020"
    }
];

export { rows, columns};
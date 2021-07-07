import * as React from 'react';

const rows = [
    {
        id:   "Cityscapes 3D",
        href: "https://www.cityscapes-dataset.com/",
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
        href: "http://apolloscape.auto/",
        size_hours: "100+",
        frames: "142 906",
        samplingRate: "30 Hz",
        sensors: "2 laser scanners, 4 cameras, 1 LiDAR, 1 GPS",
        publishDate: "07.2019"
    },
    {
        id: "Lyft Level5",
        href: "https://self-driving.lyft.com/level5/",
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
        href: "https://robotcar-dataset.robots.ox.ac.uk/",
        size_storage: "23.15 TB",
        sensors: "4 cameras, 3 LiDAR, GPS, INS",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License",
        publishDate: "2016"
    },
    {
        id: "nuScenes",
        href: "https://www.nuscenes.org/",
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
        href: "https://pandaset.org/",
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
        href: "https://waymo.com/open/data/motion/",
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
        href: "http://www.cvlibs.net/datasets/kitti/",
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
        href: "https://www.bdd100k.com/",
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
    },
    {
        id: "PepScenes",
        href: "https://arxiv.org/abs/2012.07773"
    }
];

export { rows };
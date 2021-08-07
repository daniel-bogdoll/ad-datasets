import * as React from 'react';

const rows = [
    {
        id:   "Cityscapes 3D",
        href: "https://www.cityscapes-dataset.com/",
        size_hours: '-',             //Unknown
        size_storage: '-',           //Unknown
        frames: '-',                 //Unknown
        numberOfScenes: '-',         //Unknown
        samplingRate: '17',
        lengthOfScenes: '1.8',
        sensors: 'camera, gps, odometry, thermometer',
        sensorDetail: 'Stereo Cameras using 1/3 in CMOS 2 MP sensors GPS Odometry outside Thermometer',
        benchmark: 'Pixel-Level Semantic Labeling  Instance-Level Semantic Labeling, Panoptic Semantic Labeling ' +
            '3D Vehicle Detection',
        annotations: 'Dense Semantic Segmentation, Instance Segmentation for Vehicles & People',
        licensing: 'freely available for non-commercial purposes',
        relatedDatasets: '',
        publishDate: '02.2016',
        lastUpdate: '08.2020'
    },
    {
        id: "ApolloScape", //04.08. fertig
        href: "http://apolloscape.auto/",
        size_hours: "100", //100+
        size_storage: "-",
        frames: "143906",
        numberOfScenes: "-",
        samplingRate: "30",
        lengthOfScenes: "-",
        sensors: "camera, lidar, gps",
        sensorDetail: "2 VUX-1HA laser scanners, one VMX-CS6 camera system, a measuring head with IMU/GNSS, two high " +
            "frontal camera capturing with a resolution of 3384 ×2710",
        benchmark: '2D image parsing, 3D car instance understanding, landmark segmentation, self-localization, ' +
            'trajectory prediction, 3D detection, 3D tracking, stereo',
        annotations: 'high density 3d point cloud map, per-pixel, per-frame semantic image label, lane mark label' +
            'semantic instance segmentation, geo-tagged',
        licensing: 'for developer’s personal use only',
        relatedDatasets: '',
        publishDate: "03.2018",
        lastUpdate: '09.2020'
    },
    {
        id: "Lyft Level5", //04.08. fertig
        href: "https://self-driving.lyft.com/level5/",
        size_hours: "1118",
        size_storage: '-',
        frames: "-",
        numberOfScenes: '170000',
        samplingRate: '10',
        lengthOfScenes: "25",
        sensors: "lidar, camera, radar",
        sensorDetail: "7 cameras with 360° view, 3 lidars with 40-64 channels at 10Hz, 5 radars",
        benchmark: '',
        annotations: 'semantic map annotations, trajectories',
        licensing: 'version 4.0 of the Creative Commons Attribution-NonCommercial-ShareAlike license (CC-BY-NC-SA-4.0)',
        relatedDatasets: '',
        publishDate: "07.2019",
        lastUpdate: "06.2020"
    },
    {
        id: "Oxford RobotCar", //05.08. fertig
        href: "https://robotcar-dataset.robots.ox.ac.uk/",
        size_hours: '-',
        size_storage: "23150",
        frames: "-",
        numberOfScenes: "-",
        samplingRate: "-",
        lengthOfScenes: "-",
        sensors: "camera, lidar, gps/ins",
        sensorDetail: "1 camera Bumblebee XB3 1280x960x3 16Hz, 3 camera Grasshopper2 1024x1024 12Hz" +
            ", 2 lidar SICK LMS-151 270° 50Hz, 1 lidar SICK LD-MRS 90° 4 plane 12.5Hz, 1 x NovAtel " +
            "SPAN-CPT ALIGN 50Hz GPS+INS",
        benchmark: "coming soon",
        annotations: "",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License",
        relatedDatasets: "",
        publishDate: "11.2016",
        lastUpdate: "02.2020"
    },
    {
        id: "nuScenes", //05.08. //fertig
        href: "https://www.nuscenes.org/",
        size_hours: "15",
        size_storage: "-",
        frames: "1400000",
        numberOfScenes: "1000",
        samplingRate: "-",
        lengthOfScenes: "20",
        sensors: "lidar, radar, camera, gps/imu",
        sensorDetail: "1 lidar 32 channels 360° 20Hz, 5 long range radar 13Hz, 6 camera 1600x1200 12Hz, IMU, GPS",
        benchmark: "3D object detection, tracking, trajectory (prediction), lidar segmentation, panoptic segmentation & " +
            "tracking",
        annotations: "semantic category, attributes, 3d bounding boxes ",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International Public License " +
            "(“CC BY-NC-SA 4.0”)",
        relatedDatasets: "nuImages",
        publishDate: "03.2019",
        lastUpdate: "12.2020"
    },
    {
        id: "PandaSet", //05.08. fertig
        href: "https://pandaset.org/",
        size_hours: '0.23', //calculated
        size_storage: '-',
        frames: "48000",
        numberOfScenes: "103", //sekundär (primär 100+)
        samplingRate: "-",
        lengthOfScenes: "8",
        sensors: "lidar, camera, gps/imu",
        sensorDetail: "5 wide angle cameras 1920x1080 10Hz, 1 long focus camera 1920x1080 10Hz, " +
            "1 mechanical spinning LiDAR 64 channels 360° 10Hz, 1 forward-facing LiDAR 150 channels 60° 10Hz" +
            "1x mechanical spinning LiDAR, 1x forward-facing LiDAR, 6x cameras, On-board GPS/IMU",
        benchmark: "",
        annotations: "3D Bounding Boxes, Attributes, Point Cloud Segmentation ",
        licensing: "Creative Commons Attribution 4.0 International Public License (“CC BY 4.0”)",
        relatedDatasets: "",
        publishDate: "04.2020",
        lastUpdate: ""
    },
    {
        id: "Waymo Open Motion", //07.08. fertig
        href: "https://waymo.com/open/data/motion/",
        size_hours:  "574",
        size_storage: "-",
        frames: "20670800", //calculated
        numberOfScenes: "103354",
        samplingRate: "10",
        lengthOfScenes: "20",
        sensors: "LiDAR, Camera",
        sensorDetail: "5 LiDAR, 5 Cameras",
        benchmark: "motion prediction, interaction prediction",
        annotations: "3D bounding boxes, 3d hd map information",
        licensing: "Freely available for non-commercial purposes",
        relatedDatasets: "Waymo Open Perception",
        publishDate: "03.2021",
        lastUpdate: ""
    },
    {
        id: "Waymo Open Perception", //07.08. fertig
        href: "https://waymo.com/open/data/perception/",
        size_hours:  "10.83", //calculated
        size_storage: "-",
        frames: "390000",
        numberOfScenes: "1950",
        samplingRate: "10",
        lengthOfScenes: "20",
        sensors: "lidar, camera",
        sensorDetail: "1 mid-range lidar, 4 short-range lidars, 5 cameras (front and sides) 1920x1280 & 1920x1040",
        benchmark: "2d detection, 3d detection, 2d tracking, 3d tracking",
        annotations: "3D bounding boxes (lidar), 2D bounding boxes (camera)",
        licensing: "Freely available for non-commercial purposes",
        relatedDatasets: "Waymo Open Motion",
        publishDate: "08.2019",
        lastUpdate: "03.2020"
    },
    {
        id: "KITTI", //07.08. fertig
        href: "http://www.cvlibs.net/datasets/kitti/",
        size_hours: "6",
        size_storage: "180",
        frames: '-',
        numberOfScenes: '-',
        samplingRate: "10",
        lengthOfScenes: '',
        sensors: "cameras, lidar, gps",
        sensorDetail: "2 greyscale cameras 1.4 MP, 2 color cameras 1.4 MP, 1 lidar 64 beams 360° 10Hz, 1 inertial and " +
            "GPS navigation system",
        benchmark: " stereo, optical flow, visual odometry, SLAM, 3D object detection, 3D object tracking",
        annotations: "3D bounding boxes",
        licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 3.0 License",
        relatedDatasets: 'Semantic KITTI, KITTI-360',
        publishDate: "03.2012",
        lastUpdate: "02.2021"
    },
    {
        id: "BDD100k", //07.08. //fertig
        href: "https://www.bdd100k.com/",
        size_storage: "1800",
        size_hours: "1111",
        frames: "120000000",
        numberOfScenes: "100000",
        samplingRate: "30",
        lengthOfScenes: "40",
        sensors: "camera, gps/imu",
        sensorDetail: "Crowd-sourced therefore no fixed setup, camera (720p) and GPS/IMU",
        benchmark: "Object Detection, Instance Segmentation, Multiple Object Tracking, Segmentation Tracking, " +
            "Semantic Segmentation, Lane Marking, Drivable Area, Image Tagging, Imitation learning, domain adaption",
        annotations: "bounding boxes, instance segmentation, semantic segmentation, box tracking, semantic tracking, " +
            "drivable area",
        licensing: "BSD 3-Clause License",
        relatedDatasets: "",
        publishDate: "04.2020",
        lastUpdate: ""
    },
    {
        id: "PepScenes",
        href: "https://arxiv.org/abs/2012.07773"
    },
    {
        id: "WZ-traffic dataset",
        href: "https://github.com/Fangyu0505/traffic-scene-recognition"
    },
    {
        id: "ROAD",
        href: "https://arxiv.org/abs/2102.11585"
    },
    {
        id: "ONCE",
        href: "https://once-for-auto-driving.github.io/index.html"
    },
    {
        id: "DriveU Traffic Light Dataset",
        href: "https://www.uni-ulm.de/en/in/driveu/projects/driveu-traffic-light-dataset/"
    },
    {
        id: "Bosch TL",
        href: "https://github.com/asimonov/Bosch-TL-Dataset"
    },
    {
        id: "openDD",
        href: "https://ieeexplore.ieee.org/abstract/document/9294301"
    },
    {
        id: "nuPlan",
        href: "https://arxiv.org/abs/2106.11810"
    },
    {
        id: "India Driving Dataset",
        href: "https://idd.insaan.iiit.ac.in/"
    },
    {
        id: "WildDash 2",
        href: "https://wilddash.cc/"
    },
    {
        id: "Steet Hazards Dataset",
        href: "https://once-for-auto-driving.github.io/index.html"
    },
    {
        id: "JAAD",
        href: "https://paperswithcode.com/dataset/jaad"
    },
    {
        id: "RoadAnomaly21",
        href: "https://segmentmeifyoucan.com/datasets"
    },
    {
        id: "RoadObstacle21",
        href: "https://segmentmeifyoucan.com/datasets"
    },
    {
        id: "Beyond PASCAL",
        href: "https://yuxng.github.io/Xiang_WACV_03242014.pdf"
    },
    {
        id: "The EuroCity Persons Dataset",
        href: "https://arxiv.org/abs/1805.07193"
    },
    {
        id: "Diverse Complexity Measures for Dataset Curation in Self-driving",
        href: "http://www.cs.toronto.edu/~sergio/publication/dataset/"
    },
    {
        id: "Comma2k19 Dataset",
        href: "https://github.com/commaai/comma2k19"
    },
    {
        id: "CADC",
        href: "http://cadcd.uwaterloo.ca/"
    },
    {
        id: "RadarScenes",
        href: "https://radar-scenes.com/"
    },
    {
        id: "FAIRNets Dataset",
        href: "https://zenodo.org/record/3885249"
    },
    {
        id: "Diverse Complexity Measures for Dataset Curation in Self-driving",
        href: "https://arxiv.org/abs/2101.06554"
    },
    {
        id: "CARRADA Dataset",
        href: "https://arxiv.org/abs/2005.01456"
    },
    {
        id: "4Seansons Dataset",
        href: "https://www.4seasons-dataset.com/"
    },
    {
        id: "Astyx Dataset",
        href: "https://patrick-llgc.github.io/Learning-Deep-Learning/paper_notes/astyx_dataset.html"
    },
    {
        id: "CNN-based Lidar Point Cloud De-Noising in Adverse Weather",
        href: "CNN-based Lidar Point Cloud De-Noising in Adverse Weather"
    },
    {
        id: "Playing for Data",
        href: "http://download.visinf.tu-darmstadt.de/data/from_games/index.html"
    },
    {
        id: "Oxford Radar Robot Car",
        href: "https://ieeexplore.ieee.org/abstract/document/9196884"
    },
    {
        id: "Talk2Car",
        href: "https://talk2car.github.io/"
    },
    {
        id: "A Parametric Top-View Representation\n" +
            "of Complex Road Scenes",
        href: "https://www.nec-labs.com/~mas/BEV/"
    },
    {
        id: "LostAndFoundDataset",
        href: "http://www.6d-vision.com/lostandfounddataset"
    },
    {
        id: "DRIV100",
        href: "https://arxiv.org/pdf/2102.00150.pdf"
    },
    {
        id: "KAIST Multi-Spectral Day/Night",
        href: "https://trid.trb.org/view/1504759"
    },
    {
        id: "PointCloudDeNoising",
        href: "https://github.com/rheinzler/PointCloudDeNoising"
    },
    {
        id: "Semantic KITTI",
        href: "http://www.semantic-kitti.org/"
    },
    {
        id: "Cars Dataset",
        href: "https://ai.stanford.edu/~jkrause/cars/car_dataset.html"
    },
    {
        id: "A2D2",
        href: "https://www.a2d2.audi/a2d2/en.html"
    },
    {
        id: "CADP",
        href: "https://ppms.cit.cmu.edu/media/project_files/CADP_IEEE_Camera_Ready_Final.pdf"
    },
    {
        id: "VITRO",
        href: "https://vitro-testing.com/test-data/dashcam-annotations/"
    },
    {
        id: "UDrive Dataset",
        href: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwjqnfKIoK3uAhUOuaQKHZwcDEgQFjASegQIFBAC&url=https%3A%2F%2Ferticonetwork.com%2Fwp-content%2Fuploads%2F2017%2F12%2FUDRIVE-D41.1-UDrive-dataset-and-key-analysis-results-with-annotation-codebook.pdf&usg=AOvVaw17NgwnPrIal53hUYco9klG"
    },
    {
        id: "D^2 City",
        href: "https://arxiv.org/abs/1904.01975v1"
    },
    {
        id: "Semantic Segmentation Dataset for Urban Driving Scenes",
        href: "https://autonomous-driving.org/2018/07/15/semantic-segmentation-datasets-for-urban-driving-scenes/"
    },
    {
        id: "MIT-AVT Clustered Driving Scene Dataset",
        href: "https://ieeexplore.ieee.org/abstract/document/9304677/"
    },
    {
        id: "DDAD",
        href: "https://github.com/AdrienGaidon-TRI/DDAD"
    },
    {
        id: "Caltech Pedestrian Dataset",
        href: "http://www.vision.caltech.edu/Image_Datasets/CaltechPedestrians/"
    },
    {
        id: "RELLIS-3D Dataset",
        href: "https://arxiv.org/abs/2011.12954"
    },
    {
        id: "PolySync Dataset",
        href: "http://selfracingcars.com/blog/2016/7/26/polysync"
    },
    {
        id: "Scale AI",
        href: "https://techcrunch.com/2020/05/22/scale-ai-releases-free-lidar-dataset-to-power-self-driving-car-development/?guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAKGZ2LrvykvUJnpRzaXr-_6O48Af6iBGBjQWN7BZfLzH2l4dnkXnLk-oKzrjz7ioojEPaSDvwQ0TG3QuvY4e85v3r9I9pjNMaYpy5xGEmNFS9c3kr5nCthPREhtld9lFxWXquUMhJ2ReECLW3BWsibXJp7JOOHxCtw0XCg2GhRQa&guccounter=2"
    },
    {
        id: "DriveSeg",
        href: "https://news.mit.edu/2020/mit-toyota-release-visual-open-data-accelerate-autonomous-driving-research-0618"
    },
    {
        id: "Argoverse Map",
        href: "https://www.argoverse.org/"
    },
    {
        id: "Argoverse 3D Tracking",
        href: "https://www.argoverse.org/"
    },
    {
        id: "KUL Belgium Traffic Sign dataset",
        href: "https://people.ee.ethz.ch/~timofter/traffic_signs/"
    },
    {
        id: "Bosch Small Traffic Lights Dataset",
        href: "https://hci.iwr.uni-heidelberg.de/content/bosch-small-traffic-lights-dataset"
    },
    {
        id: "Brain4Cars",
        href: "http://brain4cars.com/"
    },
    {
        id: "Seasonal Variation Dataset",
        href: "http://www.cs.cmu.edu/~aayushb/localization/"
    },
    {
        id: "Bay Area Dataset",
        href: "http://www.cs.cmu.edu/~aayushb/localization/"
    },
    {
        id: "Illumination Changes in a day",
        href: "http://www.cs.cmu.edu/~aayushb/localization/"
    },
    {
        id: "comma.ai",
        href: "http://research.comma.ai/"
    },
    {
        id: "CULane Dataset",
        href: "https://xingangpan.github.io/projects/CULane.html"
    },
    {
        id: "DAVIS Driving Dataset",
        href: "https://docs.google.com/document/d/1HM0CSmjO8nOpUeTvmPjopcBcVCk7KXvLUuiZFS6TWSg/pub"
    },
    {
        id: "DBNet",
        href: "http://www.dbehavior.net/"
    },
    {
        id: "DIPLECS Autonomous Driving Datasets",
        href: "https://cvssp.org/data/diplecs/"
    },
    {
        id: "DR(eye)VE",
        href: "https://aimagelab.ing.unimore.it/imagelab/page.asp?IdPage=8"
    },
    {
        id: "ELEKTRA",
        href: "http://adas.cvc.uab.es/elektra/datasets/"
    },
    {
        id: "German Traffic Sign",
        href: "https://benchmark.ini.rub.de/"
    },
    {
        id: "HCI Challenging Stereo",
        href: "https://hci.iwr.uni-heidelberg.de/benchmarks/Challenging_Data_for_Stereo_and_Optical_Flow"
    },
    {
        id: "HD1K",
        href: "http://hci-benchmark.iwr.uni-heidelberg.de/"
    },
    {
        id: "Highway Work Zones",
        href: "http://www.andrew.cmu.edu/user/jonghole/workzone/data/"
    },
    {
        id: "KAIST Urban",
        href: "https://irap.kaist.ac.kr/dataset/"
    },
    {
        id: "LISA Traffic Sign Dataset",
        href: "http://cvrr.ucsd.edu/LISA/lisa-traffic-sign-dataset.html"
    },
    {
        id: "Malaga Stereo",
        href: "https://www.mrpt.org/MalagaUrbanDataset"
    },
    {
        id: "Malaga Laser Urban",
        href: "https://www.mrpt.org/MalagaUrbanDataset"
    },
    {
        id: "Mapillary Vistas",
        href: "https://www.mapillary.com/dataset/vistas"
    },
    {
        id: "NEXET",
        href: "https://blog.getnexar.com/https-medium-com-itayklein-intro-nexet-50e9b596d0e5"
    },
    {
        id: "Road Damage",
        href: "https://arxiv.org/pdf/1801.09454.pdf"
    },
    {
        id: "Ground Truth Stixel Dataset",
        href: "http://www.6d-vision.com/ground-truth-stixel-dataset"
    },
    {
        id: "Boxy",
        href: "https://boxy-dataset.com/boxy/"
    },
    {
        id: "TME Motorway",
        href: "http://cmp.felk.cvut.cz/data/motorway/"
    },
    {
        id: "TuSimple",
        href: "https://www.tusimple.com/"
    },
    {
        id: "UAH-DriveSet",
        href: "http://www.robesafe.uah.es/personal/eduardo.romera/uah-driveset/"
    },
    {
        id: "Udacity",
        href: "https://github.com/udacity/self-driving-car"
    },
    {
        id: "Unsupervised Llamas",
        href: "https://unsupervised-llamas.com/llamas/"
    },
    {
        id: "Dense Depth for Autonomous Driving",
        href: "https://github.com/TRI-ML/DDAD"
    },
    {
        id: "Ford Autonomous Vehicle Dataset",
        href: "https://avdata.ford.com/"
    },
    {
        id: "Canadian Adverse Driving Conditions",
        href: "http://cadcd.uwaterloo.ca/"
    },
    {
        id: "Street Hazards",
        href: "https://github.com/hendrycks/anomaly-seg"
    },
    {
        id: "Astyx HiRes 2019",
        href: "https://www.astyx.com/fileadmin/redakteur/dokumente/Astyx_Dataset_HiRes2019_specification.pdf"
    },
    {
        id: "INTERACTION dataset",
        href: "https://interaction-dataset.com/"
    },
    {
        id: "A*3D",
        href: "https://github.com/I2RDL2/ASTAR-3D"
    },
    {
        id: "comma 2k19",
        href: "https://github.com/commaai/comma2k19"
    },
    {
        id: "camvid",
        href: "https://www.kaggle.com/carlolepelaars/camvid"
    },
    {
        id: "Daimler Urban Segmentation",
        href: "https://computervisiononline.com/dataset/1105138608",
    },
    {
        id: "Caltech Pedestrian Dataset",
        href: "http://www.vision.caltech.edu/Image_Datasets/CaltechPedestrians/"
    },
    {
        id: "VPGNet",
        href: "https://arxiv.org/abs/1710.06288"
    },
    {
        id: "Toronto 3D",
        href: "https://openaccess.thecvf.com/content_CVPRW_2020/papers/w11/Tan_Toronto-3D_A_Large-Scale_Mobile_LiDAR_Dataset_for_Semantic_Segmentation_of_CVPRW_2020_paper.pdf"
    },
    {
        id: "Toronto City",
        href: "http://www.cs.toronto.edu/~byang/papers/Tcity_iccv17.pdf"
    },
    {
        id: "Synthia",
        href: "https://synthia-dataset.net/"
    },
    {
        id: "RANUS",
        href: "https://sites.google.com/site/gmchoe1/ranus"
    },
    {
        id: "One Thousand and One Hours",
        href: "https://arxiv.org/abs/2006.14480v2"
    },
    {
        id: "MCity Data Collection",
        href: "https://arxiv.org/pdf/1912.06258.pdf"
    },
    {
        id: "H3D",
        href: "https://paperswithcode.com/dataset/h3d"
    },
    {
        id: "LIBRE",
        href: "https://arxiv.org/abs/2003.06129"
    },
    {
        id: "Stanford Track Collection",
        href: "https://cs.stanford.edu/people/teichman/stc/"
    },
    {
        id: "LiDAR-Video Driving Dataset",
        href: "https://openaccess.thecvf.com/content_cvpr_2018/papers/Chen_LiDAR-Video_Driving_Dataset_CVPR_2018_paper.pdf"
    },
    {
        id: "Ford CAMPUS",
        href: "https://www.researchgate.net/publication/220122924_Ford_Campus_vision_and_lidar_data_set"
    },
    {
        id: "WoodScape",
        href: "https://paperswithcode.com/dataset/woodscape"
    },
    {
        id: "WildDash 2",
        href: "https://wilddash.cc/"
    },
    {
        id: "Raincouver",
        href: "https://ieeexplore.ieee.org/document/7970170"
    },
    {
        id: "TRoM",
        href: "https://ieeexplore.ieee.org/document/8317749"
    },
    {
        id: "Caltech Lanes",
        href: "http://www.mohamedaly.info/datasets/caltech-lanes"
    },
    {
        id: "Complex Urban Dataset",
        href: "https://irap.kaist.ac.kr/dataset/"
    },
    {
        id: "CCSAD",
        href: "https://www.researchgate.net/publication/277476726_Towards_Ubiquitous_Autonomous_Driving_The_CCSAD_Dataset"
    },
    {
        id: "Street Learn",
        href: "https://paperswithcode.com/dataset/streetlearn"
    },
    {
        id: "UTBM robot car",
        href: "https://epan-utbm.github.io/utbm_robocar_dataset/"
    },
    {
        id: "Multi Vehicle Stereo Event Camera",
        href: "https://daniilidis-group.github.io/mvsec/"
    },
    {
        id: "AMUSE",
        href: "http://www.cvl.isy.liu.se/research/datasets/amuse/"
    },
    {
        id: "Cheddar Gorge Dataset",
        href: "https://www.researchgate.net/publication/228428941_The_Cheddar_Gorge_Data_Set"
    },
    {
        id: "The Annotated Laser Dataset",
        href: "https://journals.sagepub.com/doi/pdf/10.1177/0278364910389840"
    },
    {
        id: "DDD 17",
        href: "https://www.paperswithcode.com/dataset/ddd17"
    },
    {
        id: "EISATS",
        href: "https://ccv.wordpress.fos.auckland.ac.nz/eisats/"
    },
    {
        id: "BLVD",
        href: "https://paperswithcode.com/dataset/blvd"
    },
    {
        id: "FLIR Thermal Dataset",
        href: "https://www.flir.com/oem/adas/adas-dataset-form/"
    },
    {
        id: "NightOwls",
        href: "https://www.nightowls-dataset.org/"
    },
    {
        id: "Multispectral Object Detection",
        href: "https://deepai.org/publication/multispectral-object-detection-with-deep-learning"
    },
    {
        id: "CityPersons",
        href: "https://arxiv.org/abs/1702.05693"
    },
    {
        id: "Tsinghua Daimler Cyclist Detection",
        href: "http://www.gavrila.net/Datasets/Daimler_Pedestrian_Benchmark_D/Tsinghua-Daimler_Cyclist_Detec/tsinghua-daimler_cyclist_detec.html"
    },
    {
        id: "TDU Brussels Pedestrian",
        href: "https://www.researchgate.net/figure/Results-on-the-TUD-Brussels-Pedestrian-Dataset_fig13_321232691"
    },
    {
        id: "ETH Pedestrian",
        href: "https://paperswithcode.com/dataset/eth"
    },
    {
        id: "Daimler Pedestrian",
        href: "http://www.gavrila.net/Datasets/Daimler_Pedestrian_Benchmark_D/daimler_pedestrian_benchmark_d.html"
    },
    {
        id: "Fishyscapes",
        href: "https://fishyscapes.com/"
    },
    {
        id: "RADIATE",
        href: "http://pro.hw.ac.uk/radiate/doc/dataset/"
    },
    {
        id: "Synscapes",
        href: "https://7dlabs.com/synscapes-overview"
    },
    {
        id: "KITTI-360",
        href: "http://www.cvlibs.net/datasets/kitti-360/"
    },
    {
        id:"GROUNDED Localizing Ground Penetrating Radar (LGPR) Evaluation Dataset",
        href: "https://lgprdata.com/"
    }
];

export { rows };

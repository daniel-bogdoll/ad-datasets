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
    }
];

export { rows };
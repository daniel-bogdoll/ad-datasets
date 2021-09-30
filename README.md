## [AD Datasets](https://ad-datasets.com)

Complete* and curated list of autonomous driving related datasets

## Contributing

Contributions are very welcome! To add or update a dataset:

- Update [`my-app/src/data.js`](https://github.com/daniel-bogdoll/ad-datasets/blob/main/my-app/src/data.js):
![image](https://user-images.githubusercontent.com/19552411/135491523-0a9299b2-4e71-45fa-9808-f9b13b0fb7fd.png)

- Make sure the dataset you add or edit has as many attributes as possible filled out:
    + Some attributes can only be found in associated papers
    + Some attributes can only be found in associated websites
    + Some attributes can only be found in the dataset itself
- Send a pull request based on the created fork

### Example Contribution
This is how the KITTI dataset is integrated into the website:
```
[...]
{
    id: "KITTI",                                        
    href: "http://www.cvlibs.net/datasets/kitti/",      
    size_hours: "6",                                    
    size_storage: "180",                                
    frames: "",                                             
    numberOfScenes: '50',                               
    samplingRate: "10",                                 
    lengthOfScenes: "",                                 
    sensors: "camera, lidar, gps/imu",                  
    sensorDetail: "2 greyscale cameras 1.4 MP, 2 color cameras 1.4 MP, 1 lidar 64 beams 360° 10Hz, 1 inertial and " +
        "GPS navigation system",
    benchmark: " stereo, optical flow, visual odometry, slam, 3d object detection, 3d object tracking",
    annotations: "3d bounding boxes",
    licensing: "Creative Commons Attribution-NonCommercial-ShareAlike 3.0",
    relatedDatasets: 'Semantic KITTI, KITTI-360',
    publishDate: "2012.03",
    lastUpdate: "2021.02",
    relatedPaper: "http://www.cvlibs.net/publications/Geiger2013IJRR.pdf"
},
[...]
```
\* You're missing a dataset? Simply create a [pull request](https://github.com/daniel-bogdoll/ad-datasets/blob/main/my-app/src/data.js) ;)

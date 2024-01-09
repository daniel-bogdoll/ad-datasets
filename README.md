## [ad-datasets](https://ad-datasets.com)

---

**Pull requests and forks are still welcome, but I stopped maintaining the project in mid-2023. An even more extensive survey from 02 Jan 2024 is [A Survey on Autonomous Driving Datasets: Data Statistic, Annotation, and Outlook](https://arxiv.org/abs/2401.01454). Another good source is the [OpenDriveLab repository](https://github.com/OpenDriveLab/DriveAGI/tree/main), where a dynamic list of datasets from the 06 Dec 2023 survey [Open-sourced Data Ecosystem in Autonomous Driving: the Present and Future
](https://arxiv.org/abs/2312.03408) is hosted**

---

Complete* and curated list of datasets in the field of autonomous driving. More details can be found in [ad-datasets: a meta-collection of data sets for autonomous driving](https://arxiv.org/abs/2202.01909). There is also a [PDF list](https://github.com/daniel-bogdoll/ad-datasets/blob/main/ad_datasets__Included_datasets.pdf) of the datasets including citations (where possible).

## Contributing

Contributions are very welcome! To add or update a dataset:

- Update [`my-app/src/data.json`](https://github.com/daniel-bogdoll/ad-datasets/blob/main/my-app/src/data.json):
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
  "id": "KITTI",
  "href": "http://www.cvlibs.net/datasets/kitti/",
  "size_hours": "6",
  "size_storage": "180",
  "frames": "-",
  "numberOfScenes": "50",
  "samplingRate": "10",
  "lengthOfScenes": "-",
  "sensors": "camera, lidar, gps/imu",
  "sensorDetail": "2 greyscale cameras 1.4 MP, 2 color cameras 1.4 MP, 1 lidar 64 beams 360° 10Hz, 1 inertial and GPS navigation system",
  "benchmark": "stereo, optical flow, visual odometry, slam, 3d object detection, 3d object tracking",
  "annotations": "3d bounding boxes",
  "licensing": "Creative Commons Attribution-NonCommercial-ShareAlike 3.0",
  "relatedDatasets": "Semantic KITTI, KITTI-360",
  "publishDate": "2012-03-01",
  "lastUpdate": "2021-02-01",
  "paperTitle": "Vision meets Robotics: The KITTI Dataset",
  "relatedPaper": "http://www.cvlibs.net/publications/Geiger2013IJRR.pdf",
  "location": "Karlsruhe, Germany",
  "rawData": "Yes",
  "DOI": "10.1177/0278364913491297"
},
[...]
```
\* You're missing a dataset? Simply create a [pull request](https://github.com/daniel-bogdoll/ad-datasets/blob/main/my-app/src/data.js) ;)


### Metadata

In the following, the scheme according to which the entries of the respective properties have resulted is illuminated. 

###### Annotations
This property describes the types
of annotations with which the data sets have been
provided.
###### Benchmark
If benchmark challenges are explicitly
listed with the data sets, they are specified here.
###### Citations
Citations states the number of citations of the respective paper of a data set.
They are automatically obtained via the Semantic Scholar API based upon either the arxiv link of the related paper or its DOI.
###### Frames
Frames states the number of frames in the
data set. This includes training, test and validation
data.
###### Last Update
If information has been provided on
updates and their dates, they can be found in this
category.
###### Licensing
In order to give the users an impression
of the licenses of the data sets, information on them
is already included in the tool.
###### Location 
This category lists the areas where the data
sets have been recorded.
###### N° Scenes
N° Scenes shows the number of scenes
contained in the data set and includes the training,
testing and validation segments. In the case of video
recordings, one recording corresponds to one scene.
For data sets consisting of photos, a photo is the
equivalent to a scene.
###### Publish Date
The initial publication date of the data
set can be found under this category. If no explicit
information on the date of publication of the data
set could be found, the submission date of the paper
related to the set was used at this point.
###### Related Data Sets
If data sets are related, the names
of the related sets can be examined as well. Related
data sets are, for example, those published by the
same authors and building on one another.
###### Related Paper
This property solely consists of a
link to the paper related to the data set. Please use an arXiv URL, whenever available.
###### Sampling Rate [Hz] 
The Sampling Rate [Hz] property specifies the sampling rate in Hertz at which
the sensors in the data set work. However, this
declaration is only made if all sensors are working at
the same rate or, alternatively, if the sensors are being
synchronized. Otherwise the field remains empty.
###### Scene Length [s]
This property describes the length
of the scenes in seconds in the data set, provided
all scenes have the same length. Otherwise no
information is given. For example, if a data set has
scenes with lengths between 30 and 60 seconds, no
entry can be made. The background to this procedure
is to maintain comparability and sortability.
###### Sensor Types 
This category contains a rough
description of the sensor types used. Sensor types
are, for example, lidar or radar.
###### Sensors - Details
The Sensors - Detail category is an
extension of the Sensor Types category. It includes a
more detailed description of the sensors. The sensors
are described in detail in terms of type and number,
the frame rates they work with, the resolutions which
sensors have and the horizontal field of view.
###### Size [GB]
The category Size [GB] describes the
storage size of the data set in gigabytes.
###### Size [h]
The Size [h] property is the equivalent of the
Size [GB] described above, but provides information
on the size of the data set in hours.
###### rawData
Denotes if the dataset provides raw or processed data
###### DOI
DOI of the paper

## Citation
If you find our work useful for your research, please cite our [paper](https://arxiv.org/abs/2202.01909):
```
@inProceedings{Bogdoll_Addatasets_2022_VEHITS,
    author    = {Bogdoll, Daniel and Schreyer, Felix and Z\"{o}llner, J. Marius},
    title     = {{ad-datasets: a meta-collection of data sets for autonomous driving}},
    journal   = {International Conference on Vehicle Technology and Intelligent Transport Systems},
    year      = {2022}
}
```

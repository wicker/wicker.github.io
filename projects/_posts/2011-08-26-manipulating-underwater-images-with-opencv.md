--- 
layout: post
title: Underwater Vision System
subcat: robotics
image: /img/thumbs/underwater.png
description: Investigating a cheap underwater vision system.
num: 6
status: Complete
---

The Marine Advanced Technology Education (MATE) Center in Monterey Bay coordinates an annual international robotics competition open to student teams of all academic levels from elementary schools to university. MATE designs a new underwater obstacle course consisting of mission tasks to be navigated and completed by a tethered underwater vehicle remotely-operated from a driver station on the surface. Missions are chosen to imitate real-world events in ROVs and judges are solicited from oceanography and commercial ROV companies.

<div align="center"> <img style="width: 45%;" src="https://jenner.smugmug.com/JennerHanniNet/i-MWqtDCC/0/Th/bot-Th.png"><img style="width:45%;" src="https://jenner.smugmug.com/JennerHanniNet/i-DpDdT27/0/Th/bot2-Th.png">
Lincoln High School Competition Bots in 2010</div>
<br />

K-12 teams (Scout and Ranger class) are required to compete at regional competitions. The winner from each attends the international competition. University teams are only required to attend regionals to demonstrate safety awareness and the ability to maneuver in the water. There are twenty regional competitions in the world; the five non-U.S. locations are in Scotland, Hong Kong, Japan, Newfoundland, and Nova Scotia.

The Pacific Northwest regional competition took place on May 7, 2011, at the Weyerhauser King County Aquatic Center in Federal Way, WA. The international competition took place at the NASA Johnson Space Center’s Neutral Buoyancy Lab from June 16-18, 2011, in Houston, Texas.

The Lincoln High School robotics team has competed in this competition since 2008, when they won the Pacific Northwest regional and took fourth place in the international competition at University of California San Diego.

I joined this team as the assistant coach in 2010 and attended the Northwest regional in 2010 and 2011. No ROV at the competition was autonomous and I was curious how much cost and effort would be necessary to make an autonomous bot that could be developed by high schoolers. The first step in a robot making its own decisions is giving it input to work with so I decided to explore the visual C++ libraries of OpenCV and our current, proven underwater camera system.

#####ROV vs AUV

Underwater robots are either remotely controlled by human operators on nearby ships or engaged in repetitive, simple autonomous tasks. they may transmit their data regularly or store it and await retrieval. These robots can be tethered for power and pneumatic control, or they may operate solely on battery power.

Remotely operated vehicles are used today primarily in situations requiring advanced decision-making, such as the rapidly changing environment after the 2010 BP oil spill in the Gulf of Mexico. ROVs traditionally are tethered and have manipulator arms for repair or investigatory work. They are commonly used in shipwrecks and cave exploration but recent work has resulted in a touchpad for a diver to accompany the ROV and control it wirelessly from nearby. This is not yet an AUV but it has the benefit of no tether.

Autonomous underwater vehicles are becoming more common in oceanographic surveys, especially in deep sea exploration, geotechnical mapping, and pipeline maintenance. They can be gliders or buoys. These applications are still limited as the AUV is generally a very simple platform and extensively preprogrammed to follow a preplanned path to collect sensor data. In pipeline maintenance, for example, the AUV only needs to follow the pipe and determine whether damage has occurred; i.e., to compare the current pipe image and its known-good reference image.

#####Note

The three example programs (ellipse.c, houghlines.c, edge.c) are all included in the package download of OpenCV and were written by the referenced authors. 

All the original, unmodified images of robots were taken by two former students of Lincoln High School for their documentary video in 2010. 

#####Goals and Results

The first goal was to explore an option for an underwater camera system which could feed video to a Linux laptop or other microprocessor-containing board running embedded Linux capable of image processing. We currently use the Harbor Freight underwater camera system because of significant problems in the past with waterproofing webcams. This system has served us well for several years because it is waterproof, battery-powered, and capable of transmitting video from the bottom of a pool without interruption. Unfortunately the video didn’t come in a format that could be easily processed and the hardware to interface it with Linux wasn’t reliable.

The second goal was for me personally to get a better understanding of the challenges an underwater environment poses to image processing. I processed still images from the underwater camera Canny/Sobel edge detection and Hough lines and Hough ellipses detection. I varied the parameters as described and generally got a feel for the practical difficulties of imaging underwater.

The third goal was to see if this system, for under $250, would be reliable enough to have tutorials written for it and a site set up from Lincoln High School to distribute to other teams. The answer was pretty much ‘no’ and I reluctantly recommend that someone look into buying a cheap, reliable underwater camera system and try again using Windows video capture software.

#####Camera System

$120 Harbor Freight Underwater B/W Camera on 60’ Cable with Monitor<br />
$20 EasyCap DC60 Capture Card Surveillance Dongle

The team wanted to adapt their existing Harbor Freight Underwater Camera to send composite video to a laptop running Ubuntu 10.04 (Lucid Lynx). The laptop in question had no PCI slot so it was decided to find an external capture card with a USB connector. The EasyCap DC60 was inexpensive and open-source drivers for Linux were available from SourceForge.

It seems redundant to have the video monitor when streaming video to a laptop would be more simple but the other camera options were not satisfactory. A webcam’s wireless signal does not penetrate more than a few feet into the water; a USB signal will follow a tether but will not sustain the needed signal strength for sixty feet. An attempt was made to waterproof wired webcams but the common methods (filling the housing in oil, waterproof sealant, sealing entirely in plastic sealant) did not hold up to the 20 psi of pressure at fifteen feet deep. The buoyancy pool at NASA Johnson is forty feet deep (about 50 psi) so the decision was made to use a warrantied, guaranteed underwater camera.

Harbor Freight’s camera includes a 12V rechargeable lead-acid battery, battery cable, camera monitor, 60’ steel mesh cable, watersealed camera, and a metal ballast weight. Everything except the underwater camera is meant to be used at the driver’s station on the surface.

<div style="margin: 0 auto 20px; max-width: 400px;"> <img src="https://jenner.smugmug.com/JennerHanniNet/i-bcrPqbn/0/S/figure1-S.gif">

 <img style="width: 40%;" src="https://jenner.smugmug.com/JennerHanniNet/i-f5tQBJc/0/Th/figure2-Th.gif"> <img style="width: 40%; float: right;" src="https://jenner.smugmug.com/JennerHanniNet/i-H8jRL8P/0/Th/figure3-Th.gif">

</div>

#####Setting up the EasyCap DC60

There are two models (DC60 and DC60+) of the EasyCap made by three manufacturers and distributed by at least four companies under similar names on Amazon for prices ranging from $5 to $20. Unfortunately, there doesn’t seem to be any way to determine which one you’ll receive in advance without contacting the particular company. For this, the DC60 made by Syntek is supported.

First, it’s necessary to determine which EasyCap is present by plugging it into the USB slot and running the following command,

<div class="code">lsusb</div>

which is the Linux command to list 'ls' the USB devices. It will produce an output including one of the following lines:

<div class="code">Bus XXX Device XXX: ID eb1a:2861 eMPIA Technology, Inc.
Bus XXX Device XXX: ID 1c88:0007 Somagic, Inc.
Bus XXX Device XXX: ID 05e1:0408 Syntek Semiconductor Co., Ltd</div>

a. The Empia EasyCAP should work out of the box on Ubuntu 10.04.
b. The Somagic EasyCAP is currently unsupported. Send it back or find a Windows machine.
c. The Syntek EasyCAP is the most common and is recommended, but will need the driver to be downloaded from <http://sourceforge.net/projects/easycapdc60/>. The installation of this driver depends on the kernel headers being present. They will be already in a standard Ubuntu desktop installation but, to be sure, see if the required headers are present by running the command

<div class="code">uname -r</div>

which, for example, will return something of the form

<div class="code">2.6.32-29-generic</div>

and see if there are files in the directory /usr/src/linux-headers-X.X.XX-*, for example

<div class="code">ls /usr/src/linux-headers-X.X.XX-*</div>

should yield a file structure with contents. If these files are not present, the terminal will return an error similar to ‘no such file or directory’ and they will need to be downloaded. Now, it’s recommended to create a working directory and, from there, extract the downloaded tarball.

<div class="code">mkdir ~/easycap
~/easycap
-p ~/easycap_dc60.×.y.tar.gz
tar zxf ./easycap_dc60.×.y.tar.gz
cd easycap_dc60.×.y</div>

Once this driver is downloaded and unpacked into a working directory, the EasyCap should be physically unplugged. Run the install script as root, then check to see if the script was successful:

<div class="code">./install.sh
lsmod | grep easycap</div>

In the future, the directory /dev/video# should be created every time the EasyCap is attached where there will be a separate # for each video device attached, including webcams. This can be determined by the command:

<div class="code">ls /dev/</div>

There are several scripts bundled in with the driver but the ones for the following programs streamed for only a second before switching to a static grayscale test screen: vlc, ffmpg, xawtv, gstreamer, and kmplayer. It is important to note that NTSC is the video standard used in the Western Hemisphere; PAL is used everywhere else. The Harbor Freight Underwater Camera uses NTSC and the testPAL.sh script will not work with this camera.

Choose which of the two possible remaining scripts based on which cables the DC60 has. Both of them use mplayer to stream video:

<div class="code">./testNTSC.sh 1</div>

for NTSC and a “CVBS+S-VIDEO” EasyCAP

<div class="code">./test4NTSC.sh 1</div>

for NTSC and a “FOUR-CVBS” EasyCAP

Every time the EasyCap is attached in the future, running this script should produce the desired video output. Recording this stream requires the following one-line command:

<div class="code">mencoder tv:// -tv device=/dev/video1:input=1:norm=NTSC_M:width=640:
+height=480:noaudio -vf pp=md -o Recording -ovc lavc -lavcopts
+vcodec=mpeg4:vbitrate=8000</div>

#####Mission Task Props

The MATE Center releases complete descriptions so that props for that a replica field may be built by a team for practice; a sample are shown below. The upper-leftmost and upper-rightmost props require the robot to locate ellipsoids autonomously and then the operator would take over to manipulate the wellcap or collect the agar sample using a specially manipulator arm with pneumatic controls. There will be three identical props, as shown in the bottom left, scattered about the mission field. The ROV will be required to identify the one that is vibrating, which can be done easily using the EasyCap DC60 because it supports and audio input from a hydrophone attached to the robot.

The center prop emits hot water from each ‘vent’. The long, straight lines of this prop set it apart visually, making it easily identifiable. An ROV could easily approach and await the operator’s takeover to get temperature readings at each vent. The last task, as shown in the bottom right, is the collection of ‘grubs’, gummy fishing lures. They are irregularly shaped and may be hidden or entwined but will show on images in stark contrast to the long, narrow, dark cave so they should be easily identifiable.

<div align="center"> <img src="https://jenner.smugmug.com/JennerHanniNet/i-SP2vS6f/0/M/figure5-M.gif"></div>
<br />

#####Canny Edge Detection

Edge detection is a fundamental first step in image processing. An edge is not essentially a tangible element. It is instead the relationship between two neighboring blocks of pixels of different colors. These neighboring blocks of pixels may be lines or they may be large blocks with irregular borders. In either case, the simple edge.c program applied the cvSmooth, cvNot, and cvCanny functions as shown in the following code selection:

<div class="code">cvSmooth( gray, edge, CV_BLUR, 3, 3, 0, 0 );  <br />
cvNot( gray, edge );  <br />
cvCanny(gray, edge, (float)edge_thresh, (float)edge_thresh*3, 3);</div>

Initially, cvSmooth is used to blur the image by simple convolution, which is itself the mathematical process to visualizi the relationship between two functions over a period of time. In this case, the aperture width in this case with an aperture width of 3 and an aperture height of 3. Convolution is essentially an analysis technique that results in a third function when two existing functions are identified with respect to the same time constant and one of them is horizontally reversed, then shifted across the domain of the first function by the time constant so that the relationship of the two functions at any given time can be plotted as a third function.

Both CV_BLUR (simple blur convolution) and CV_GAUSSIAN (Gaussian convolution), which has been used by researchers at the Isfahan University of Technology in Iran as the optimal transform used in their development of a vision-based pipeline and cable tracker AUV, have the benefit of being able to to process an image in-place.

Next, cvNot is used to invert the image colors on each pixel in the array created by cvSmooth, in this case to produce an image with white pixels on a black background.

Finally, cvCanny takes this inverted, convoluted image and compares each pixel in turn to each of its neighbors to identify the edges according to the threshold values as determined by the user. The level of threshold is used to limit how much linking can occur between possibly-unrelated edges. This is particularly noticeable in the figure below.

Because an edge could occur at any angle, the vertical and horizontal derivatives of each set of identified edge components are used to calculate the angle and set a tracked ridge. All pixels not on the tracked ridge are set to zero. Because of the way light breaks in water and because the PVC can curve, there needs to be hysteresis applied to follow the lines as far as they are continuous, but that was not called for in this simple program.

<div align="center"> <img src="https://jenner.smugmug.com/JennerHanniNet/i-W7wLBzq/0/S/figure6-S.gif"></div>

#####Hough Lines

Where cvCanny identifies edges, the relationships of blocks to other blocks, the Hough transform uses the image that has been processed with Canny edge detection and inverted so that the background is black; by checking each pixel for color value, the Hough transform identifies the non-black pixels (for i = 0) and plots their slope and intercept data in gradient space where slope is the y-axis and y-intercept is the x-axis.

Though the relationships of pixels can be realized graphically in this gradient space, all of the data is actually passed from the previous array produced by the Canny edge detect into a new accumulator array of dimensions slope (m) and intercept (b). The transform samples each pixel and sorts it into a cell of a new array based on its slope and intercept parameters. Once all of the pixels in the source image have been slotted into new cells, those cells with the highest number of pixels are identified as lines. The minimum number of necessary pixels in a cell to generate a line (in red, see below) is determined in the program code.

This is a sample from houghlines.c:

<div class="code">cvCanny( src, dst, 50, 200, 3 ); <br /> 
//( dst, color_dst, CV_GRAY2BGR );  <br />
#if 0<br />
lines = cvHoughLines2( dst, storage, CV_HOUGH_STANDARD, 1, CV_PI/180, 100, 0, 0 );<br />
for( i = 0; i < MIN; i++ ) {<br />
&nbsp; &nbsp; float* line = (float*)cvGetSeqElem(lines,i);<br />
&nbsp; &nbsp; float rho = line0;<br />
&nbsp; &nbsp; float theta = line1;<br />
&nbsp; &nbsp; CvPoint pt1, pt2;<br />
&nbsp; &nbsp; double a = cos(theta), b = sin(theta);<br />
&nbsp; &nbsp; double x0 = a*rho, y0 = b*rho;<br />
&nbsp; &nbsp; pt1.x = cvRound(x0 + 1000*(-b));<br />
&nbsp; &nbsp; pt1.y = cvRound(y0 + 1000*(a));<br />
&nbsp; &nbsp; pt2.x = cvRound(x0 – 1000*(-b));<br />
&nbsp; &nbsp; pt2.y = cvRound(y0 – 1000*(a));<br />
&nbsp; &nbsp; cvLine( color_dst, pt1, pt2, CV_RGB(255,0,0), 3, CV_AA, 0 );<br />
}<br /><br /> #else<br />
lines = cvHoughLines2( dst, storage, CV_HOUGH_PROBABILISTIC, 1, CV_PI/180, 50, 50, 10 );<br />
for( i = 0; i < lines→total; i++ ) {<br />
&nbsp; &nbsp; CvPoint* line = (CvPoint*)cvGetSeqElem(lines,i);<br />
&nbsp; &nbsp; cvLine( color_dst, line0, line1, CV_RGB(255,0,0), 3, CV_AA, 0 );<br /> }<br /></div>

The figures below indicate that distance underwater and the irregularities of complex PVC structures has a significant deletrious effect on the Canny edge detection. This is more apparent when Hough is applied to the images because human eyes automatically fill in gaps. In the case of the first image, the ROV itself would provide a better, more defined geometric shape if it were a box instead of an open frame, but it’s unlikely that two ROVs will be in close proximity to each other.

The imagery is better at close-up. Notice how well the lines of the pool walls and lanes show up clearly. These could be very useful in navigation and, eventually, mapping. Similarly, the definitive shape of this ROV is immediately recognizable with the edge detection but the excessive use of plumber’s tape and the chicken mesh yielded a mess of lines that would need significant additional parameters to clarify.

<div align="center"> <img src="https://jenner.smugmug.com/JennerHanniNet/i-bKvxVZ7/0/S/figure7-S.gif"><br />
<br /><br />

 <img src="https://jenner.smugmug.com/JennerHanniNet/i-NdLLMF8/0/M/figure8-M.gif"></div>
<br />
#####Additional Hough Geometry

The problem of irregular shapes can be solved by applying transform functions like cvFindContours, cvHoughCircles, and cvFitEllipse2. Adding contours (a curved edge where the function is continuous) requires creating memory storage in the form of cvSeq, which creates a linked list of related pixels. cvThreshold is used to binarize the image by creating a trackbar in the same way as in houghlines.c and edge.c, because cvFindContours requires pixels of value 0 or 1 only. The following code from fitellipse.c demonstrates this sequence of steps.

<div class="code">storage = cvCreateMemStorage(0);<br />
contour = cvCreateSeq(CV_SEQ_ELTYPE_POINT, sizeof(CvSeq),<br /> &nbsp; &nbsp; sizeof(CvPoint) , storage);<br />
cvThreshold( image03, image02, slider_pos, 255, CV_THRESH_BINARY );<br />
cvFindContours( image02, storage, &contour, sizeof(CvContour),<br />&nbsp; &nbsp;
CV_RETR_LIST, CV_CHAIN_APPROX_NONE, cvPoint(0,0));</div>

As shown in the figures below, different retrieval options makes a significant difference in returned image at the same threshold. CV_RETR_LIST retrieves all the contours and organizes them in the linked list; CV_RETR_EXTERNAL returns only the extreme outer contours. Other options are to retrieve all contours but rank them into an inner/outer hierarchy or a more complete hierarchy.

<div align="center"> <img src="https://jenner.smugmug.com/JennerHanniNet/i-MpksVMk/0/M/figure9-M.gif"><br />
cvFitEllipse2 applied with CV_RETR_LIST<br />

 <img src="https://jenner.smugmug.com/JennerHanniNet/i-BFGWqgt/0/S/figure11-S.gif"><br />
cvFitEllipse2 applied with CV_RETR_EXTERNAL</div>
<br />
This result leads to the question of whether it would be worth redesigning the MATE Center’s props to be more friendly to image processing. The answer is likely ‘no’ and more effort should be put into refining the geometry-detecting algorithms. This may be application-dependent: AUVs being designed for the sealife surveys will need more refined algorithms but AUVs designed to crawl pipelines and service deep-sea drilling stations would benefit from a structure built as simple geometrically as possible.

#####Conclusion

I came into this project with no previous experience in image processing and was able in a few weeks to gain a basic understanding of underwater imaging, the OpenCV libraries, Hough and Canny transforms, and video processing on Linux. Hough and Canny are enough to get started with OpenCV. They can be applied without a detailed understanding of the mathematics but the math is also accessible for a dedicated, interested high school student. I believe programming an ROV with some basic autonomous functions in the seven months of the program is not outside the abilities of an average robotics team competing in the MATE competition.

However, the weak link in this system is the lack of reliable hardware that streams video to Linux.

I didn’t even examine the issue of using webcams, which would be the easiest and most common way to get usable streaming video to a Linux laptop, because the process of waterproofing them is something we’ve had very little success at. A professionally manufactured underwater camera system is the way to go. If this system could be made to work on Windows, it might be worth pursuing because of the low cost.

#####Resources

EasyCap DC60 Linux drivers are available at SourceForge.
<a href="http://sourceforge.net/projects/easycapdc60/">http://sourceforge.net/projects/easycapdc60/</a>

TV viewing and recording solutions for Linux.
<a href="http://easycap.blogspot.com">http://easycap.blogspot.com</a>

OpenCV Wiki
<a href="http://opencv.willowgarage.com/">http://opencv.willowgarage.com/</a>

ROVER – ROV Education and Resources from the MATE Center.
<a href="http://materover.org">http://materover.org</a>

Dive and Discover : A History of Underwater Research Vehicles.
<a href="http://www.divediscover.whoi.edu/robotics/index.html">http://www.divediscover.whoi.edu/robotics/index.html</a>

The Turtle and the Robot, an example of AUV biomimicry.
<a href="http://mit.whoi.edu/page.do?pid=35555&tid=1423&cid=54066">http://mit.whoi.edu/page.do?pid=35555&tid=1423&cid=54066</a>

Portland State NEAR Lab’s Acoustics Measurement Facility’s offshore seaglider.
<a href="http://nearlab.ece.pdx.edu/acoustics_mf.html">http://nearlab.ece.pdx.edu/acoustics_mf.html</a>

Underwater black & white and monochrome photos by JP Trenque.
<a href="http://www.jptrenque.com/uwmono/index.php">http://www.jptrenque.com/uwmono/index.php</a>

Eustice, R.; Pizarro, O.; Singh, H.; Howland, J.; , “UWIT: underwater image toolbox for optical image processing and mosaicking in MATLAB,” Underwater Technology, 2002. Proceedings of the 2002 International Symposium on , vol., no., pp. 141- 145, 2002

Ge Guangtao; Sang Enfang; Liu Zhuofu; Zhu BeiBei; , “Underwater Acoustic Feature Extraction Based on Bidimensional Empirical Mode Decomposition in Shadow Field,” Signal Design and Its Applications in Communications, 2007. IWSDA 2007. 3rd International Workshop on , vol., no., pp.365-367, 23-27 Sept. 2007

Harsamizadeh Tehrani, N.; Heidari, M.; Zakeri, Y.; Ghaisari, J.; , “Development, depth control and stability analysis of an underwater Remotely Operated Vehicle (ROV),” Control and Automation (ICCA), 2010 8th IEEE International Conference on , vol., no., pp.814-819, 9-11 June 2010

Mariette, Jerome. Segmentation of Objects in Underwater Video. University of Poitiers, 2005.

Narimani, M.; Nazem, S.; Loueipour, M.; , “Robotics vision-based system for an underwater pipeline and cable tracker,” OCEANS 2009 – EUROPE , vol., no., pp.1-6, 11-14 May 2009


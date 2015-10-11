--- 
layout: post
title: Quadcopter Control Board
subcat: hardware
image: /img/thumbs/quadcoptercontrol.png
description: Design, board layout, and testing of a control board.
num: 10
status: Complete
---

I was responsible for designing and laying out the control board for an autonomous quadcopter built by the <a href="http://psu-avt.github.com">Portland State Autonomous Vehicles Team</a>. 

Final schema, layout, and Gerber files are available <a href="http://github.com/wicker/Quadcopter-Control-Board">at my Github</a>.

#####Board Specs

I used the standard version of Eagle to create a four-layer board with internal ground and power planes. The board carries an LPC1343 microprocessor which takes input from an onboard sensor stick containing accelerometer, compass, and gyro chips. After some sensor fusion and optionally in response to joystick input, the board provides PWM signals to four brushless DC motor controllers at a rate of 200Hz.

An onboard XBee communicates over wireless serial to a second XBee at an accompanying laptop control station. The mini-USB connector is connected to the chip’s USB 2.0 Full-Speed PHY and  a voltage regulator breaks out the 5V to provide 3.3V to the rest of the board’s components.

The board can be programmed by wiring the laptop to the board’s ISP/JTAG port and simultaneously pressing the reset and ISP button to boot into ISP mode. The sensors are brought out on an FTDI header as an alternative to the wireless connection for debugging.

<img src="https://jenner.smugmug.com/JennerHanniNet/i-8VM4sQV/0/S/v1-protoboard-S.png">

#####Initial Design

The initial schema followed exactly from the existing protoboard above because the quadcopter could fly under remote control and was able to hover.

An LPCXpresso development board from NXP Semiconductors was used because it came with a free development environment called CodeRed. The resulting soldered protoboard was bulky and too large for the frame so we wanted to replace the entire protoboard and its mounted components while duplicating the debug/programming functionality of the LPCXpresso dev board.

The end result was hopefully to be able to easily add/remove custom sensor packages so it was decided that all possible GPIO pins were to be brought out to header pins.

<img src="https://jenner.smugmug.com/JennerHanniNet/i-Vq6kFrZ/0/M/v1-controlboard-schematic-M.png">

This is the original basic connections from the LPCXpresso (center) to the Xbee, PWM signals, and 9DOF sensor stick. These needed to remain the same to ensure functionality.

The initial schema was a compilation of work by myself (<a href="https://github.com/wicker">Jenner Hanni</a>), <a href="https://github.com/squidpie">Camille Huffman</a>, and <a href="https://github.com/greghaynes">Greg Haynes</a>. We relied heavily on LPC1343 and related documentation from <a href="http://microbuilder.eu">Microbuilder.eu</a>, including their Eagle footprint library. There were several design reviews with all of us and the team at large.

<a href="https://jenner.smugmug.com/JennerHanniNet/i-McXkFGj/0/XL/v2-schema-firstreview-XL.png"> <img src="https://jenner.smugmug.com/JennerHanniNet/i-DtS34jj/0/M/v2-schema-firstreview_th-M.png"></a>

The version above was reviewed by the invaluable Andrew Greenberg at Portland State Aerospace Society and he strongly recommended the use of buses, as shown below. 

<a href="https://jenner.smugmug.com/JennerHanniNet/i-K67PTFj/0/X2/v2-schema-final-X2.png"> <img src="https://jenner.smugmug.com/JennerHanniNet/i-KHgzpZD/0/M/v2-schema-final_th-M.png"></a>

#####Board Layout Decisions

Initially I attempted to lay out the board by considering the header pinouts from the user’s point of view, but quickly ran into problems when I started routing from the processor. I had to go back and determine the header pinouts based on pinning out the microprocessor. That led to the basic design below, concentrating the parts to be reflowed in one part of the board.

I also decided to make as much of it through-hole soldering as possible since I’d have to build the board myself. The central placement of the sensor stick was due to needing the sensors as close to the center of the quadcopter as possible. Trace widths of 8 mils were smaller than probably entirely necessary but the overall size of the board was to be kept as small as possible for weight and space considerations.

<img src="https://jenner.smugmug.com/JennerHanniNet/i-RrQ36Fq/0/M/v2-layout-firstreview-M.png">

The initial board layout above actually contained a full DB-9 connector but that was quickly considered to be overkill in terms of space, weight, and the availability of USB-to-FTDI/serial cables. This was replaced by a simple 7-pin header.

I’d also only put one button in above and we needed two for both reset and ISP, though we didn’t have USB in this version. The basic header pinouts stayed the same. Finally, I added a ground plane on the entire top plane and stapled it to the internal ground layer using vias to minimize impedance as much as possible.

I used the <a href="http://www.sparkfun.com/tutorials/114">locking header footprints from Sparkfun</a> because the staggered holes hold the header pins in place close to the board during soldering, there’s no cost difference, and I think it's a great, simple solution to a common problem.

<img src="https://jenner.smugmug.com/JennerHanniNet/i-5P4wggh/0/M/v2-layout-final-M.png">

#####Results of First Fab Run

We were able to order these boards for free through a contact at the fab house, which was great because there were a handful of issues that required a revision. The board came out looking great in terms of size and weight, though. 

<img src="https://jenner.smugmug.com/JennerHanniNet/i-MZdv4Pd/0/M/v2-actualboard-M.png">

As part of the design review through our contact, I hadn’t actually sent Gerbers. I sent the schema and board files so they could make Gerbers. Unfortunately, I was still using Eagle 5 and there was a problem in the power layer when they opened the files in Eagle 6. We weren’t getting voltage anywhere else on the board when we hooked it up to a signal generator. It turned out that the isolation defaults were different between versions so the power layer wasn’t actually connected to any of the power pins.

The image below shows the constructed board with all its ninety-degree pinouts. We’re sliding this in between plates on the quadcopter so it’s. The sensor stick will actually be seated flush against the board itself but we have it broken out this way for easy removal so we can swap it back and forth between testing this board and actually flying on the quadcopter.

<img src="https://jenner.smugmug.com/JennerHanniNet/i-cNzht5n/0/M/board2-M.jpg">

#####Schema and Layout Revision

I used a bunch of mod wires on the bottom layer to create a power plane so we could test the rest of it. The RxD/TxD wires were backwards between the FTDI pinout on the right end of the board, but the XBee RxD/TxD were correct. The clock lines were of different length and we decided, even though we weren’t seeing problems, we might as well fix it since we were running a corrected version anyway.

The full-sized schema really is too large for this post. Click it to enlarge.

<a href="https://jenner.smugmug.com/JennerHanniNet/i-8XDLLZv/0/X2/v3-schema-final-X2.png"><img src="https://jenner.smugmug.com/JennerHanniNet/i-3bh5HQn/0/M/v3-schema-final_th-M.png"></a>

We decided to add the mini-USB and voltage regulator, the second button for ISP mode, fix the power plane and fix the receive/transmit traces. I was able to do this just by ripping up a relatively small part of the board and rerouting those wires. Like the first version, I didn’t use autoroute for any of the layout, preferring to do the work by hand, because I really enjoy the layout process.

I find that the schema process is broken up between creating footprints, researching and designing, then just quickly hooking up the pieces. The board layout can be done entirely on its own without any context shifts, and working to fit all the pieces together within the constraints is really fun.

The revised schema was again put through design review and then I laid out the board. I got several pairs of eyes to check the final Gerbers to see if we've solved the power plane issue, and we ran a new revision. We ordered boards through OSH Park and they worked fine.  

<img src="https://jenner.smugmug.com/JennerHanniNet/i-WsDBmfK/0/L/v3-layout-final-L.png">


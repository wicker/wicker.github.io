---
layout: travels
title: First Talk at a Conference 
description: Open Hardware talk at Open Source Bridge 2014.
location: Oregon
image: /img/thumbs/pdxmaker.png
year: 2014
---

<div style="margin-left: 20px; padding: 20px; float: left; background-color: #f5b400; color: #fff;"><b>COOKING</b></div>
<div style="float:left; padding: 20px;"><b>Open Hardware from Breadboard to PCB</b></div>
<div style="clear:both;">&nbsp;</div>

This is the <a href="http://opensourcebridge.org/sessions/1314">conference talk I gave at Open Source Bridge 2014</a> on June 26, 2014, at the Eliot Center in Portland, Oregon. I brought a handful of random printed circuit boards I've built in the last year and used a lot of photos to walk through the process of drawing the circuit, routing the board, and assembling the finished product. It was meant to be for people who've built breadboard circuits but would like to do their own printed circuit boards; the idea was to at least walk through the process once to introduce some Googleable vocabulary.   

Huge thanks to Georgia Reh and Bart Massey for advising, helping, morally supporting, etc. 

You can download the 15Mb Beamer presentation <a href="https://github.com/wicker/open-hardware-talk/raw/master/from-breadboard-to-pcb.pdf">directly</a> or the <a href="https://github.com/wicker/open-hardware-talk">Github repo has all the source files, including images.</a>

<strong>Excerpt</strong>

So you've built a breadboard circuit with wires everywhere. What's next? A printed circuit board! I'll talk about your open hardware development options through the lens of my recent project turning a breadboard prototype into a finished Arduino shield for a curing oven at Portland State. 

<strong>Description</strong>

A rocket manufacturing capstone team recently built a curing oven at Portland State. They wrote a first version of Arduino code and wired up a simple breadboard circuit so the oven worked but the department wanted them to make the oven as appliance-like as possible. The team continued on with its capstone project while I cleaned up the electronics.

I’ll walk you through the hardware development process. I made two revisions of through-hole printed circuit boards using the router at the Electronics Prototyping Lab at Portland State. Then I modified the design to interface between an Arduino and an Adafruit display shield. The final surface mount version went off to OSHPark, a locally-run PCB service.

I’ll bring all three versions of the boards and we’ll talk through what, how, and why they turned out the way they did — particularly why I used Eagle instead of the open source KiCad, when to use surface mount vs through-hole parts, the trade-offs in quality of circuit boards and when to make the jump to OSHPark, cost of components, how to navigate Mouser or Digikey as opposed to Adafruit or Sparkfun, what open source license to use, and further resources for open hardware in the Portland area.

I’m not evangelizing the Arduino, only using it as an example, so I’ll bring and briefly introduce it but you don’t have to be familiar. The talk will be friendly to complete beginners but it’s intended to be very useful to anyone with some experience building breadboard circuits who wants to take the next step.

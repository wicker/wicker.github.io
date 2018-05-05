---
layout: portfolio
permalink: /portfolio/
title: Portfolio
jstrue: true
---

<section class="content-middle">

  <div class="wrapper">
    <div id="projbtncontainer">
      <button class="projbtn active" onclick="filterSelection('summary')">Summary</button>
      <button class="projbtn" onclick="filterSelection('education')">Education</button>
      <button class="projbtn" onclick="filterSelection('software')">Software</button>
      <button class="projbtn" onclick="filterSelection('talks')">Talks</button>
      <br />
      <button class="projbtn" onclick="filterSelection('web')">Web</button> 
      <button class="projbtn subbtn" onclick="filterSelection('react')">React</button>
      <button class="projbtn subbtn" onclick="filterSelection('wordpress')">WordPress</button>
      <button class="projbtn subbtn" onclick="filterSelection('flask')">Flask</button>
      <br />
      <button class="projbtn" onclick="filterSelection('hardware')">Hardware</button> 
      <button class="projbtn subbtn" onclick="filterSelection('arduino')">Arduino</button>
      <button class="projbtn subbtn" onclick="filterSelection('other')">Other</button>
    </div>
  </div>

</section>

<section class="content">

  <div class="padded">
    <div class="project summary">

      <h4>Full Stack Developer</h4>

      <p>I'm a hardware and software engineer available for freelance contracting through <a href="http://wickerbox.net" target="_blank">Wickerbox Electronics</a>.</p>

      <p><a href="mailto:jenner@jennerhanni.net">Email me</a>, check out my <a href="https://www.linkedin.com/in/jenner-hanni" target="_blank">resume</a>, or find my code at <a href="https://github.com/wicker/" target="_blank">Github</a>.</p> 

      <h4>Summary</h4>

      <p>I’ve written C and VHDL/Verilog for FAA-certified <a href="https://www.astronics.com/about/subsidiary?subsidiaryItem=astronics%20max-viz" target="_blank">aircraft cameras</a> but now I write web apps in Javascript (React on Node.js), Python (Flask), and PHP (Laravel), and I’ve worked with React Native, Bootstrap, Skeleton, and Material UI. I have some sysadmin/devops experience and currently maintain apps on Linode and AWS.</p>

      <p>For databases, I’ve worked with PostgreSQL, MySQL, and SQLite3.</p>

      <p>I enjoy building internal software tools to make dev life easier. I wrote KiFisher to automate managing and documenting hardware projects built with KiCad, and I was a single-digit employee at <a href="http://oshpark.com" target="_blank">OSH Park</a> making it easier for the support team to improve the customer experience.</p>

      <p>For the last five years, I've been designing and testing hardware product prototypes, and I understand the importance of getting to and iterating on a minimum viable product (MVP) as soon as possible. You can see my <a href="https://github.com/BrownDogGadgets/CrazyCircuits">Github commits</a> designing the hardware for a <a href="https://www.kickstarter.com/projects/browndoggadgets/crazy-circuits-unique-stem-projects-delivered-mont" target="_blank">successful Kickstarter campaign</a> and I’ve continued to
      help bring that product to market.</p>

    </div>

    <div class="project education">

      <h4>Education</h4>

      <p><strong>React Nanodegree</strong><br />
         Udacity, 2018</p>
      <p><strong>M.Eng. Electrical and Computer Engineering</strong><br />Portland State, 2013</p> 
      <p><strong>B.S. Engineering Technology</strong><br />Old Dominion University, 2009</p>
        
    </div>

    <h4 class="clearfix project web js react flask wordpress hardware arduino otherhw software">Projects</h4>

    <a href="https://github.com/wicker/Udacicards" target="_blank">
    <div class="clearfix projthumb project web js react">
      <img src="/img/thumbs/flashcards.png">
      <h5>Mobile Flashcards</h5>
      <p>Android app made with React Native, Redux, and AsyncStorage.</p>
    </div>
    </a>

    <a href="https://github.com/wicker/Rider-Waite-Reader" target="_blank">
    <div class="projthumb project web js react">
      <img src="/img/thumbs/rider-waite.png">
      <h5>Rider-Waite Tarot Reader App</h5>
      <p>React tarot cards app using CSS Flexbox for different layouts.</p>
    </div>
    </a>

    <!--
    <a href="http://kifisher.io/" target="_blank">
    <div class="projthumb project web js python react">
      <img src="/img/thumbs/kifisher.png">
      <h5>KiFisher</h5>
      <p>Upload KiCad files and download formatted BOMs, images, and docs.</p>
    </div>
    </a>
    -->

    <a href="https://github.com/wicker/Terrific-Tree-Frogs-Message-Board" target="_blank">
    <div class="projthumb project web js react">
      <img src="/img/thumbs/frogs.png">
      <h5>Tree Frogs Message Board</h5>
      <p>React with Redux message board app. Supports posts and comments.</p>
    </div>
    </a>

    <a href="https://github.com/wicker/MyReads" target="_blank">
    <div class="projthumb project web js react">
      <img src="/img/thumbs/myreads.png">
      <h5>MyReads</h5>
      <p>React app using Udacity BooksAPI to track books I've read or want to read.</p>
    </div>
    </a>

    <!--
    <a href="https://github.com/wicker/Wallowa-Wildlife-Checklist-App" target="_blank">
    <div class="projthumb project web flask">
      <img src="/img/thumbs/wallowa.png">
      <h5>Wallowa Wildlife Checklist</h5>
      <p>Python Flask app supports creating and saving wild animal checklists.</p>
    </div>
    </a>
    -->

    <!--
    <a href="http://www.wordpress.org/themes/river-house" target="_blank">
    <div class="projthumb project web wordpress">
      <img src="/img/thumbs/imnahariver.png">
      <h5>River House WordPress Theme</h5>
      <p>Wordpress theme for vacation rentals now available at wordpress.org.</p>
    </div>
    </a>
    -->

    <a href="http://www.wmhcta.org" target="_blank">
    <div class="projthumb project web wordpress">
      <img src="/img/thumbs/wmhcta.png">
      <h5>WMHCTA</h5>
      <p>Wordpress instance for a local trails non-profit. Supports forms, Paypal.</p>
    </div>
    </a>

    <a href="http://imnahariverhouse.com" target="_blank">
    <div class="projthumb project web wordpress">
      <img src="/img/thumbs/imnahariver.png">
      <h5>Imnaha River House</h5>
      <p>Wordpress instance to replace a static local vacation rental page.</p>
    </div>
    </a>

    <a href="https://web.archive.org/web/20130901231053/http://columbiacascade99s.org/" target="_blank">
    <div class="projthumb project web wordpress">
      <img src="/img/thumbs/cc99s.png">
      <h5>Columbia Cascade 99s</h5>
      <p>Wordpress instance for local women's flying non-profit.</p>
    </div>
    </a>

    <a href="http://pacificseminarsllc.com/" target="_blank">
    <div class="projthumb project web">
      <img src="/img/thumbs/pacific.png">
      <h5>Pacific Seminars</h5>
      <p>Single-page static site with simple form and calendar integration.</p>
    </div>
    </a>

    <a href="http://skiesofdinotopia.net/" target="_blank">
    <div class="projthumb project web js python">
      <img src="/img/thumbs/dinotopia.png">
      <h5>Skies of Dinotopia</h5>
      <p>Scraped a fan archive with permission and created a backup of fanworks.</p>
    </div>
    </a>

    <a href="http://jennerhanni.net/Werewolf-Films/" target="_blank">
    <div class="projthumb project web python">
      <img src="/img/thumbs/werewolf.png">
      <h5>Werewolf Films</h5>
      <p>Used OMDB API to get movie info and displayed results on a static page.</p>
    </div>
    </a>

    <a href="http://wickerbox.net" target="_blank">
    <div class="projthumb project web jekyll">
      <img src="/img/thumbs/wickerbox-new.png">
      <h5>Wickerbox Electronics</h5>
      <p>Jekyll static site on Github Pages to display open source hardware designs.</p>
    </div>
    </a>

    <a href="http://jennerhanni.net" target="_blank">
    <div class="projthumb project web jekyll">
      <img src="/img/thumbs/personal.png">
      <h5>Personal Site</h5>
      <p>Jekyll static site on Github Pages with minimal Javascript.</p>
    </div>
    </a>

    <a href="https://docs.oshpark.com" target="_blank">
    <div class="projthumb project web">
      <img src="/img/thumbs/oshdocs.png">
      <h5>OSH Park Docs</h5>
      <p>Extensively updated support site to answer common customer questions.</p>
    </div>
    </a>

    <!--
    <a href="https://github.com/wicker" target="_blank">
    <div class="projthumb project web kivy">
      <img src="/img/thumbs/treecounter.png">
      <h5>Tree Grading App</h5>
      <p>Custom Android tablet app in Kivy for shade tree grading and inventory.</p>
    </div>
    </a>
    -->

    <!--
    <a href="https://github.com/wicker/" target="_blank">
    <div class="projthumb project web js">
      <img src="/img/thumbs/joseph.png">
      <h5>Joseph Map</h5>
      <p>Javascript, AJAX, Google map powered app of my local town.</p>
    </div>
    </a>
    -->

    <a href="http://wickerbox.net/projects/e202var-vlf-receiver/" target="_blank">
    <div class="projthumb project hardware otherhw">
      <img src="/img/thumbs/e202var.png">
      <h5>E202 VLF Receiver</h5>
      <p>Very low frequency (under 10kHz) battery-powered receiver in KiCad.</p>
    </div>
    </a>

    <a href="https://github.com/BrownDogGadgets/CrazyCircuits" target="_blank">
    <div class="projthumb project hardware otherhw">
      <img src="/img/thumbs/crazycircuits.png">
      <h5>CrazyCircuits Kits</h5>
      <p>Open source Lego-compatible circuit kits for kids and schools in KiCad. </p>
    </div>
    </a>

    <a href="https://github.com/wickerbox/Teensy-Hats" target="_blank">
    <div class="projthumb project hardware arduino">
      <img src="/img/thumbs/teensyhats.png">
      <h5>Teensy Hats</h5>
      <p>Daughter boards for Paul Stoffregen's Teensy in KiCad.</p>
    </div>
    </a>

    <a href="http://wickerbox.net/projects/cellphone-3g-dev-board/" target="_blank">
    <div class="projthumb project hardware arduino">
      <img src="/img/thumbs/3gcellphone.png">
      <h5>3G Cellphone</h5>
      <p>Adapting David Mellis' 2G Arduino Cellphone to a 3G module in Eagle.</p>
    </div>
    </a>

    <a href="http://wickerbox.net/projects/gps-board-v2/" target="_blank">
    <div class="projthumb project hardware otherhw">
      <img src="/img/thumbs/gpsboard.png">
      <h5>GPS RF Receiver</h5>
      <p>Board in Eagle to provide access to raw I/Q GPS data using MAX2769.</p>
    </div>
    </a>

    <a href="https://github.com/psas/DxWiFi/blob/master/FieldTest/2014-02-02-fieldtest.mdwn" target="_blank">
    <div class="projthumb project hardware otherhw">
      <img src="/img/thumbs/dxwifi.png">
      <h5>DxWiFi Test Flight</h5>
      <p>Flight test capturing WiFi packets over 124km distance.</p>
    </div>
    </a>

    <a href="http://wickerbox.net/breakout-boards/" target="_blank">
    <div class="projthumb project hardware arduino otherhw">
      <img src="/img/thumbs/breakoutboards.png">
      <h5>Breakout Boards</h5>
      <p>Collection of open source breakout boards for components in KiCad.</p>
    </div>
    </a>

    <a href="http://wickerbox.net/projects/arduino-theremin/" target="_blank">
    <div class="projthumb project hardware arduino">
      <img src="/img/thumbs/arduinotheremin.png">
      <h5>Arduino Theremin</h5>
      <p>Shield uses a rangefinder to play notes. Supports touch and playback.</p>
    </div>
    </a>

    <a href="http://wickerbox.net/projects/quadcopter-control-board/" target="_blank">
    <div class="projthumb project hardware otherhw">
      <img src="/img/thumbs/quadcoptercontrol.png">
      <h5>Quadcopter Control Board</h5>
      <p>LPC1343-based control board for autonomous quadcopter in Eagle.</p>
    </div>
    </a>

    <a href="http://wickerbox.net/projects/oven-control-board/" target="_blank">
    <div class="projthumb project hardware arduino">
      <img src="/img/thumbs/ovencontrol.png">
      <h5>Reflow Oven Controller</h5>
      <p>Custom Arduino shield with GUI for control of composites reflow oven.</p>
    </div>
    </a>

    <a href="https://github.com/wicker/Image-Processing-Pipeline" target="_blank">
    <div class="projthumb project software clang verilog">
      <img src="/img/thumbs/getpixels.png">
      <h5>Image Processing Pipeline</h5>
      <p>Perform pixel-by-pixel convolution of 2D images in SystemVerilog and C.</p>
    </div>
    </a>
   
    <!--
    <a href="https://github.com/wicker/Advent-of-Code-Solutions" target="_blank">
    <div class="projthumb project software python">
      <img src="/img/thumbs/advent.png">
      <h5>Advent of Code</h5>
      <p>Python to solve coding challenges with brief howto writeups.</p>
    </div>
    </a>
    -->

    <!--
    <a href="https://github.com/wicker/15-Sorting-Algorithms" target="_blank">
    <div class="projthumb project software clang">
      <img src="/img/thumbs/15algorithms.png">
      <h5>Sorting Algorithms</h5>
      <p>Python implementing the sorting algorithms in Timo Bingmann's video.</p>
    </div>
    </a>
    -->

    <a href="https://github.com/wicker/L2-Cache-Simulator" target="_blank">
    <div class="projthumb project software clang">
      <img src="/img/thumbs/l2cache.png">
      <h5>L2 Cache Simulation</h5>
      <p>C simulating a write-allocate, MESI protocol, 4-way set-associative cache.</p>
    </div>
    </a>

    <a href="https://github.com/wicker/Endian-Swap" target="_blank">
    <div class="projthumb project software assy">
      <img src="/img/thumbs/endianswap.png">
      <h5>Endian Swap</h5>
      <p>Assembly using a stack to swap between Big Endian and Little Endian.</p>
    </div>
    </a>

    <a href="https://github.com/wicker/Text-to-Speech-Using-RC8660-Synthesizer-chip" target="_blank">
    <div class="projthumb project software assy">
      <img src="/img/thumbs/text2speech.png">
      <h5>Text to Speech Driver</h5>
      <p>Assembly to turn text into speech with a RC8660 synthesizer chip.</p>
    </div>
    </a>

    <a href="https://github.com/wicker/Temperature-Sensor-I2C-Driver" target="_blank">
    <div class="projthumb project software assy">
      <img src="/img/thumbs/tempsensor.png">
      <h5>Temp Sensor Driver</h5>
      <p>Assembly to handle an interrupt and drive an LED.</p>
    </div>
    </a>

    <!--
    <a href="http://kifisher.io/" target="_blank">
    <div class="projthumb project software python">
      <img src="/img/thumbs/kifisher.png">
      <h5>KiCad Project Management Tools</h5>
      <p>Python tools for KiCad to automate BOMs, board previews, and docs.</p>
    </div>
    </a>
    -->

    <h4 class="clearfix project talks">Conference Talks</h4>
    <a href="https://github.com/wicker/Conference-Talks" target="_blank">
    <div class="projthumb project talks">
      <img src="/img/thumbs/talkmakingstuff.png">
      <h5>Making Stuff</h5>
      <p>Evergreen School District, 2015<br />
        Robotics Tournament Keynote<br />
        Vancouver, WA
      </p>
    </div>
    </a>

    <a href="https://github.com/wicker/Conference-Talks" target="_blank">
    <div class="projthumb project talks">
        <img src="/img/thumbs/kicad.png">
        <h5>Open Source Your Circuits with KiCad</h5>
        <p>Open Source Bridge, 2015<br />Portland, Oregon</p>
    </div>
      </a>

    <a href="https://github.com/wicker/Conference-Talks" target="_blank">
    <div class="projthumb project talks">
      <img src="/img/thumbs/talkmath.png">
      <h5>Math vs Mathematics</h5>
      <p>Open Source Bridge, 2014<br />Portland, Oregon</p>
    </div>
    </a>

    <a class="projthumb-link" href="https://github.com/wicker/Conference-Talks" target="_blank">
    <div class="projthumb project talks">
      <img src="/img/thumbs/talkproto.png">
      <h5>Prototype to PCB</h5>
      <p>Open Source Bridge, 2014<br />Portland, Oregon</p>
    </div>
    </a>

  </div>
  <div class="clear">&nbsp;</div>
</section>

# Retro Simon Game

<div align="center">
<img src="https://github.com/JonDRamer/Simon-Game/blob/master/screenshots/Original%20Simon%20Box.jpg"/>
</div>

### Goal
###### To re-create the Simon memory game created by Milton Bradley in 1978.  I tried to make the game feel as authentic as possible.  I followed the style of the original game as closely as possible.  

### Technologies used:

###### HTML5
###### CSS3
###### Javascript
###### JQuery
###### Deployed with Surge

### Description

###### I created this app at the end of the first quarter during the Full-Stack Web Development immersive at galvanize in Austin.  I learned Javascript, HTML, CSS, and JQuery during the first quarter so that's all I had to work with on this project.  I had one week to make this project.  Simon is a memory game where the player is shown a pattern and they must play that pattern back in the right order to get a new pattern.  The goal is to get as many patterns right as possible and build your streak.  Once you get one wrong you have to start over.

### Biggest Challenge

###### I had a problem with displaying the pattern properly.  I was trying to loop through an array and toggle a class that lit up the correct color in the pattern.  I was trying to use a for loop, but the iterations happened so quickly that all of the colors were just lighting up at the same time.  I tried everything I could think of to delay the iterations in the for loop with no success.  I eventually did some research and came up with a custom recursive solution that used setTimeouts to control the speed of the toggling and the incrementation through the array.

### Final Design
![App Screenshot](https://github.com/JonDRamer/Simon-Game/blob/master/screenshots/Simon%20Powered%20Off.png)

### Click The Image Below to See a Video Walkthrough
[![Video](https://github.com/JonDRamer/Simon-Game/blob/master/screenshots/Play%20Button.jpg)](https://www.youtube.com/watch?v=2Aj8AI-fNWA)

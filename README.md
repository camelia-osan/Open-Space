# Open-Space
HTML, CSS and JS web project


### Description
*Open Space* is a web project that launches a rocket into space using a control panel. The rocket can move to west, north or east at three different speed levels. In order to be able to select the options, the user has to go through a verification by providing the correct password into the required field (Due to the fact that this is a fictive project, I added an interaction that lets the user know the password, which is *TrustNo1*). After validation and options selection, the rocket can now be launched into space by clicking the *Launch* button. A refresh button will appear 3,5 seconds after the animation.

### Tools
For this project, I wrote by hand both the structure using *HTML5* and the design using *CSS3*. I used vanilla JavaScript to ensure the functionality.

- HTML
  
The whole content is fitted in a big container which represents the space, that divides into two smaller containers - one that contains the planet, the rocket, the introduction text and the refresh button and the other one that is the control panel. 

- CSS
  
The elements were styled using *Flexbox*. I used relative measurement units for better screen compatibility and different designs and cursors for interaction effects.


To make the rocket move to a specific direction i used the *transform* property, *translate* and *rotate*. In order to set the speed levels, I used different values for *transition*.


The screen compatibility for phones, tablets and large screens, portrait and landscape is covered by the media queries.

- JavaScript

The actions were triggered by interacting with inputs due to *addEventListener*. Also, I added some specific styling in different circumstances with JS. 

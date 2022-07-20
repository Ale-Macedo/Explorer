import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay } from "./elements.js"

import factoryControls from "./controls.js"
import factoryTimer from "./timer.js"
import souns from "./souns.js"
import Events from "./events.js";

// let timerTimeOut
const controls = factoryControls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
})

const timer = factoryTimer({
  minutesDisplay, 
  secondsDisplay, 
  resetControls: controls.reset
})
const sound = souns()
Events({controls ,timer ,sound})








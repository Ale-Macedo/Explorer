import { 
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonMusicOn,
  buttonMusicOff,
} from './elements.js'

export default function({controls,timer,sound}) {
  

buttonPlay.addEventListener('click', function() {
  controls.play()
  timer.countdown()
  sound.pressbutton()
})
  
buttonPause.addEventListener('click', function(){
  controls.Pause()
  timer.hold()
  sound.pressbutton()
})

buttonStop.addEventListener('click', function(){controls.reset()
  timer.reset()
  sound.pressbutton()
})

buttonMusicOn.addEventListener('click', function(){
  buttonMusicOn.classList.add('hide')
  buttonMusicOff.classList.remove('hide')
  sound.bgAudio.pause()
})

buttonMusicOff.addEventListener('click', function(){
  buttonMusicOff.classList.add('hide')
  buttonMusicOn.classList.remove('hide')
  sound.bgAudio.play()
})

buttonSet.addEventListener('click', function(){
  let newMinutes = controls.set() 
  if (!newMinutes){
    timer.reset() 
    return
  }
  timer.updateDisplay(newMinutes, 0)
  timer.updateMinutes(newMinutes)
})
}
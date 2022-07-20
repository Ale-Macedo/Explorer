
export default function factoryControls({
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,

}) {

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }

  function Pause() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }

  function reset() {
  buttonStop.classList.add('hide')
  buttonSet.classList.remove('hide')
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  }

  function set() {
    let newMinutes = prompt('quantos minutos ?') 
    if (!newMinutes){
      return false
    }
    return newMinutes
  }
return{
  reset,
  play,
  Pause,
  set
}
}

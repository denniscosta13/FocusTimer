import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './audio.js'
import { getButtonName } from './events.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')
  
  timer.countDown()
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  
  let minutes = Number(el.minutes.textContent)

  state.minutes = Math.round(minutes / 5) * 5

  timer.updateDisplay()
}

export function moreMinutes() {
  const seconds = Number(el.seconds.textContent)
  
  state.minutes = Number(el.minutes.textContent)
  
  if(state.minutes > 55 ) {
    return;
  } else {
    state.minutes += 5 
  }
  
  timer.updateDisplay(state.minutes,seconds)
}

export function lessMinutes() {
  const seconds = Number(el.seconds.textContent)

  state.minutes = Number(el.minutes.textContent)

  if(state.minutes < 10) {
    return;
  } else {
    state.minutes -= 5 
  }
  
  timer.updateDisplay(state.minutes,seconds)
}


// sound control
export function toggleMusicCoffee() {
  
  const button = document.querySelector('#coffeeshop')

  
  if(button.classList.contains("selected")) {
    state.isMute = document.documentElement.classList.toggle('music-on')
    button.classList.remove('selected')
    sounds.buttonCoffeeShop.pause()
    return
  }

  stopAllSounds()

  state.isMute = document.documentElement.classList.toggle('music-on')
  button.classList.add('selected')

  if(state.isMute) {
    sounds.buttonCoffeeShop.play()
    
  } else {
    sounds.buttonCoffeeShop.pause()

  }

}

export function toggleMusicFire() {
  const button = document.querySelector('#fireplace')

  if(button.classList.contains("selected")) {
    state.isMute = document.documentElement.classList.toggle('music-on')
    button.classList.remove('selected')
    sounds.buttonFirePlace.pause()
    return
  }

  stopAllSounds()

  state.isMute = document.documentElement.classList.toggle('music-on')
  button.classList.add('selected')

  if(state.isMute) {
    sounds.buttonFirePlace.play()
    
  } else {
    sounds.buttonFirePlace.pause()

  }
}

export function toggleMusicRain() {
  const button = document.querySelector('#rain')
  
  if(button.classList.contains("selected")) {
    state.isMute = document.documentElement.classList.toggle('music-on')
    button.classList.remove('selected')
    sounds.buttonRain.pause()
    return
  }

  stopAllSounds()

  state.isMute = document.documentElement.classList.toggle('music-on')
  button.classList.add('selected')

  if(state.isMute) {
    sounds.buttonRain.play()
    
  } else {
    sounds.buttonRain.pause()

  }
}

export function toggleMusicNature() {
  const button = document.querySelector('#nature')
  
  if(button.classList.contains("selected")) {
    state.isMute = document.documentElement.classList.toggle('music-on')
    button.classList.remove('selected')
    sounds.buttonNature.pause()
    return
  }

  stopAllSounds()

  state.isMute = document.documentElement.classList.toggle('music-on')
  button.classList.add('selected')

  if(state.isMute) {
    sounds.buttonNature.play()
    
  } else {
    sounds.buttonNature.pause()

  }
}

function stopAllSounds() {
  state.isMute = false
  document.documentElement.classList.remove('music-on')

  document.querySelector('#coffeeshop').classList.remove('selected')
  sounds.buttonCoffeeShop.pause()

  document.querySelector('#rain').classList.remove('selected')
  sounds.buttonRain.pause()
  
  document.querySelector('#fireplace').classList.remove('selected')
  sounds.buttonFirePlace.pause()

  document.querySelector('#nature').classList.remove('selected')
  sounds.buttonNature.pause()
}

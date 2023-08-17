import { controls,soundControls } from './elements.js'
import * as actions from './actions.js'

export function registerControls() {
  controls.addEventListener('click', event => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function') return

    actions[action]()
  })
}

export function registerSoundControls() {
  soundControls.addEventListener('click', event => {
    const action = event.target.dataset.action

    if(typeof actions[action] != 'function') return

    actions[action]()

    
  })
}

export function getButtonName() {
  return soundControls.addEventListener('click', event => {
    const name = event.target.dataset.audio
    return name
  })


}
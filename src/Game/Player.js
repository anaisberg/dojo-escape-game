import { roomsMap } from '../assets/config/rooms'
import {
  openSphinxEnigma,
  openLastEnigma,
  validateSphinxAnswer,
  validateLastAnswer,
  sphinxModal,
  lastModal,
  openEnding
} from '../Interface/InteractionModal'

import { say } from '../Interface/Text'
import { Room } from './Room'
import { Tool } from './Tool'

export const toolInRoom = document.getElementById('room-tools')
const inventory = document.getElementById('inventory')
const noTool = document.createElement('p')
Object.assign(noTool, {
  classList: ['speak'],
  id: 'no-tool',
  innerHTML: `You don't have anything in your bag yet`,
})

/**
 *
 */
export class Player {
  /**
   * Create a player
   * @param {Room} room  - the initial room where the player is
   * @param {string} name - the player name
   * @param {Tool[]} inventory - the objects in the player bag
   */
  constructor(room, name) {
    this.currentRoom = room
    this.name = name
    this.inventory = []
  }

  onClickAddToInventory = (e, tool) => {
    this.addToInventory(tool);
    var element = e;
    element.remove();
  }

  /**
   * Search the room for new tools
   */
  searchRoom() {
    toolInRoom.innerHTML = null;
    const tool = this.currentRoom.tool
    if (tool) {
      say(tool.description)
      this.displayFoundTool(tool)
    } else if (+this.currentRoom.name === 19) {
      say('There is nothing to help you here but your own brain. The sphinx standing in the way wants to test your capacities. Are you ready to give it a try?')
      this.displaySphinxEnigma();
    } else if (+this.currentRoom.name === 20) {
      say("You feel you are about to find your way out. But the forest still have surprises for you.")
      this.displayEndingEnigma();
    } else if (+this.currentRoom.name === 4) {
      say(tool.description)
    } else {
      say('There is nothing worth of attention here')
    }
  }

  /**
  * Add an action to the interface
  * @param {Tool} tool tool to register
  */
  displayFoundTool = (tool) => {
    let callback;
    if (tool.name === 'Infinite Lever') {
      callback = () => {
        tool.use(roomsMap[9])
        say(tool.useMessage)
      }
    } else {
      callback = () => this.onClickAddToInventory(toolElement, tool);
    }
    const toolElement = document.createElement('button')
    Object.assign(toolElement, {
      classList: ['action-button'],
      onclick: callback,
      innerHTML: `Pick up ${tool.name}`,
    })
    toolInRoom.append(toolElement)
  }

  displaySphinxEnigma() {
    const btnElement = document.createElement('button')
    Object.assign(btnElement, {
      classList: ['action-button'],
      onclick: () => openSphinxEnigma(),
      innerHTML: `Answer Sphinx's Enigma`,
    })
    toolInRoom.append(btnElement)
  }

  displayEndingEnigma() {
    const btnElement = document.createElement('button')
    Object.assign(btnElement, {
      classList: ['action-button'],
      onclick: () => openLastEnigma(),
      innerHTML: `Get your memories back`,
    })
    toolInRoom.append(btnElement)
  }

  /**
   * Add tool to player inventory
   * @param {Tool} newTool
   */
  addToInventory(newTool) {
    this.currentRoom.tool = null;
    this.inventory.push(newTool);
    this.renderInventory();
  }

  removeFromInventory(toolToRemove) {
    this.inventory = this.inventory.filter(item => item !== toolToRemove)
    this.renderInventory()
  }

  renderInventory() {
    inventory.innerHTML = null;
    if (this.inventory.length === 0) {
      inventory.append(noTool)
    }
    this.inventory.forEach(tool => {
      const toolElement = document.createElement('button')
      Object.assign(toolElement, {
        classList: ['action-button'],
        onclick: () => this.useTool(tool),
        id: tool.name,
        innerHTML: `${tool.name}`,
      })
      inventory.append(toolElement)
    })
  }

  /**
   * @param {Tool} tool - The tool we want to use
   */
  useTool(tool) {
    if (tool.roomId === +this.currentRoom.name) {

      say(tool.useMessage)

      if (tool.name === 'Fork') {
        tool.use(roomsMap[10])
      } else {
        tool.use(this.currentRoom)
      }

      this.removeFromInventory(tool)
    }
    else say(tool.errorMessage);
  }

  validateSphinxAnswer() {
    const answer = validateSphinxAnswer();
    sphinxModal.style.display = "none";
    let correctAnswer = true;
    if ((answer !== 'stars') && (answer !== 'star')) correctAnswer = false
    else if ((answer === 'sun') || (answer === 'soleil')) {
      say('The sun is only one among many...')
      correctAnswer = false
    } else if ((answer === 'earth') || (answer === 'terre')){
      say('Men are not the center of the world')
      correctAnswer = false
    } else if (correctAnswer) {
      say('You passed. The Sphinx steps asside and a path appears')
      this.currentRoom.moves[0].isAllowed = true;
    } else {
      say('The Sphinx is disappointed by your answer. Try again later.')
    }
  }

  validateLastAnswer() {
    const isAnswerCorrect = validateLastAnswer();
    lastModal.style.display = "none";
    if (isAnswerCorrect) {
      openEnding()
    } else {
      say('You should be ashamed. It is absolutely not me.')
    }
  }
}

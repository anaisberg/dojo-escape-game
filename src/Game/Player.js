import { openSphinxEnigma, validateSphinxAnswer, sphinxModal, openEnding } from '../Interface/InteractionModal'
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

  onClickAddToInventory = (e,tool) => {
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
      openEnding();
    }else {
      say('There is nothing worth of attention here')
    }
  }
  
  /**
  * Add an action to the interface
  * @param {Tool} tool tool to register
  */
  displayFoundTool = (tool) => {
    const toolElement = document.createElement('button')
    Object.assign(toolElement, {
      classList: ['action-button'],
      onclick: () => this.onClickAddToInventory(toolElement, tool),
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
      tool.use(this.currentRoom)
      this.removeFromInventory(tool)
    }
    else say(tool.errorMessage);
  }

  validateSphinxAnswer() {
    const isAnswerCorrect = validateSphinxAnswer();
    console.log(isAnswerCorrect)
    sphinxModal.style.display = "none";
    if (isAnswerCorrect) {
      say('You passed. The Sphinx steps asside and a path appears')
      this.currentRoom.moves[0].isAllowed = true;
    } else {
      say('The Sphinx is disappointed by your answer. Try again later.')
    }
  }
}

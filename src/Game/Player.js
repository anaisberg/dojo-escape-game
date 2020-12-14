import { say } from '../Interface/Text'
import { Room } from './Room'
import { Tool } from './Tool'

export const toolInRoom = document.getElementById('room-tools')
const inventory = document.getElementById('inventory')
const noToolText = document.createElement('p')
Object.assign(noToolText, {
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
    } else {
      say('There is nothing worth of attention here')
    }
  }
  
  /**
  * Add an action to the interface
  * @param {Tool} tool tool to register
  */
  displayFoundTool = (tool) => {
    const toolElement = document.createElement("BUTTON")
    Object.assign(toolElement, {
      classList: ['action-button'],
      onclick: () => this.onClickAddToInventory(toolElement,tool),
      innerHTML: `Pick up ${tool.name}`,
    })
    toolInRoom.append(toolElement)
  }

  /**
   * Add tool to playe rinventory
   * @param {Tool} newTool
   */
  addToInventory(newTool) {
    this.currentRoom.tool = null;
    this.inventory.push(newTool);
    this.renderInventory();
  }
  
  removeFromInventory(toolToRemove) {
    this.inventory = this.inventory.filter(item => item!== toolToRemove)
    this.renderInventory()
  }
  
  renderInventory() {
    if (this.inventory.length === 0) {
      toolInBag.append(noToolText)
    } else {
      const noToolText = document.getElementById('no-tool')
      if (noToolText) noToolText.remove()
    }
    inventory.innerHTML = null;
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
    console.log(tool.roomId, this.currentRoom)
    if (tool.roomId === +this.currentRoom.name) {
      say(tool.useMessage)
      tool.use(this.currentRoom)
      this.removeFromInventory(tool)
    }
    else say(tool.errorMessage);
  }
}

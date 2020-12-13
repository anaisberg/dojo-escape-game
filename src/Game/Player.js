import { say } from '../Interface/Text'
import { Room } from './Room'
import { Tool } from './Tool'

const toolInRoom = document.getElementById('room-tools')
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

  /**
   * Search the room for new tools
   */
  searchRoom() {
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
    const toolElement = document.createElement('button')
    Object.assign(toolElement, {
      classList: ['action-button'],
      onclick: this.addToInventory(tool),
      innerHTML: `Pick up ${tool.name}`,
    })
    toolInRoom.append(toolElement)
  }

  /**
   * Add tool to playe rinventory
   * @param {Tool} newTool
   */
  addToInventory(newTool) {
    const toolElement = document.createElement('button')
    Object.assign(toolElement, {
      classList: ['action-button'],
      onclick: this.useTool(tool),
      id: tool.name,
      innerHTML: `${tool.name}`,
    })
    inventory.append(toolElement)
    this.inventory.push(newTool);
  }
  
  removeFromInventory(toolToRemove) {
    this.inventory = this.inventory.filter(item => item!== toolToRemove)
  }

  /**
   * @param {Tool} tool - The tool we want to use
   */
  useTool(tool) {
    if (tool.room === this.currentRoom) {
      say(tool.useMessage);
      tool.movement.isAllowed = true;
      tool.changeRoomDescription();
      tool.delete(this.name)
      this.removeFromInventory(tool)
      this.checkEmptyInventory()
    }
    else say(this.errorMessage);
  }

  checkEmptyInventory() {
    if (this.inventory.length === 0) {
      toolInBag.append(noToolText)
    } else {
      document.getElementById('no-tool').remove()
    }
  }
}

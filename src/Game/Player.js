import { say } from '../Interface/Text'
import { Room } from './Room'
import { Tool } from './Tool'

const toolInRoom = document.getElementById('room-tools')

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
    id: tool.name,
    innerHTML: `Pick up ${tool.name}`,
  })
  toolInRoom.append(toolElement)
}

  /**
   * Add tool to playe rinventory
   * @param {Tool} newTool
   */
  addToInventory(newTool) {
    this.inventory.push(newTool);
  }
}

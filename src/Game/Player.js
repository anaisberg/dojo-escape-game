import { say } from '../Interface/Text'
import { Room } from './Room'
import { Tool } from './Tool'

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
      this.addToInventory(tool)
    } else {
      say('There is nothing worth of attention here')
    }
  }

  /**
   * Add tool to playe rinventory
   * @param {Tool} newTool
   */
  addToInventory(newTool) {
    this.inventory.push(newTool);
  }
}

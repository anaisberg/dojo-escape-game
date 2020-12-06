import { Room } from './Room'
import { Tool } from './Tool'
import { drawPlayer, erasePlayer } from '../Interface/Map'

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
   * Move to another room
   * @param {Room} wantedRoom
   */
  move(wantedRoom) {
    erasePlayer(this)
    this.currentRoom = wantedRoom
    drawPlayer(this)
  }

  /**
   * Add tool to playe rinventory
   * @param {Tool} newTool
   */
  addToInventory(newTool) {
    this.inventory.push(newTool);
  }

}

const randomValue = () => Math.floor(Math.random() * 255)
const randomColor = () =>
  `rgb(${randomValue()}, ${randomValue()}, ${randomValue()})`
import { clearRoom, drawRoom } from '../Interface/Map'
import { DEFAULT_MOVE_LIST } from './Movement'

export class Room {
  /**
   * @param {Object} roomConfiguration - this is the room configuration
   * @param {string} roomConfiguration.name - the name of the room
   * @param {number} roomConfiguration.xPos - room horizontal emplacement
   * @param {number} roomConfiguration.yPos - room vertical emplacement
   * @param {number} roomConfiguration.xPlayer - player in room horizontal emplacement
   * @param {number} roomConfiguration.yPlayer - player in room vertical emplacement
   * @param {number} roomConfiguration.color - the room color
   * @param {string} roomConfiguration.description - description of the room
   * @param {Mouvement[]} roomConfiguration.moves - available directions from room
   * @param {Tool} roomConfiguration.tool - object available to pick up in the room
   */
  constructor({ name, xPos = 0, yPos = 0, xPlayer = null, yPlayer = null, color = 1, moves = DEFAULT_MOVE_LIST, description = '', tool = null}) {
    this.name = name
    this.xPos = xPos
    this.yPos = yPos
    this.xPlayer = xPlayer
    this.yPlayer = yPlayer
    this.color = color
    this.moves = moves
    this.description = description
    this.tool = tool
  }

  /**
   * @param {string} color - The new color
   */
  updateColor() {
    if (this.color === 0) return;
    this.color -= 0.25;
    drawRoom(this)
  }
}

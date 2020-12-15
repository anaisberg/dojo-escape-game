import { Player, toolInRoom } from './Player'
import { Room } from './Room'
import { drawRoom, movePlayer } from '../Interface/Map'
import { Action } from './Action'
import { say, describe } from '../Interface/Text'
import { Movement } from './Movement'

export class World {
  /**
   * @type {Room[]}
   */
  rooms = []

  /**
   * @type {Action[]}
   */
  actions = []

  /**
   * @type {Player | undefined}
   */
  player = undefined

  constructor(name) {
    this.name = name
  }

  /**
   * @param {Object} roomConfiguration - this is the room configuration
   */
  createRoom(roomConfiguration) {
    const room = new Room(roomConfiguration)
    this.rooms.push(room)
    drawRoom(room)
    return room
  }

  /**
   * re-draw existing rooms
   */
  resetRooms() {
    for (let room of this.rooms) {
      drawRoom(room)
    }
    return this.rooms
  }

  /**
   * Create a new player
   * @param {string} name the player name
   * @returns {Player} the created player
   */
  createPlayer(name) {
    if (this.rooms.length === 0) {
      throw new Error(
        'The world needs to have at least one room for the player to start'
      )
    }
    const player = new Player(this.rooms[12], name)
    movePlayer(player)
    this.player = player
    return player
  }

  /**
  * Try to make movement if allowed
  * @param {Movement} movement
  */
  tryToMove(movement, moveMessage) {
    if (+this.player.currentRoom.name === 16 || +this.player.currentRoom.name === 10) {
      this.rooms[15].updateColor()
    }
    if (movement.isAllowed) {
      const newRoom = this.rooms[movement.room]
      this.player.currentRoom = newRoom
      toolInRoom.innerHTML = null; 
      movePlayer(this.player)
      say(movement.okMessage || moveMessage)
      describe(newRoom.description)
    } else {
      this.player.currentRoom.updateColor()
      say(movement.blockingMessage)
    }
  }

  goNorth() {
    if (+this.player.currentRoom.name === 16) {
      this.rooms[15].updateColor()
    }
    const movement = this.player.currentRoom.moves[0]
    const moveMessage = 'You walk north'
    this.tryToMove(movement, moveMessage)
  }

  goSouth() {
    const movement = this.player.currentRoom.moves[1]
    const moveMessage = 'You walk south'
    this.tryToMove(movement, moveMessage)
  }

  goWest() {
    const movement = this.player.currentRoom.moves[2]
    const moveMessage = 'You walk west'
    this.tryToMove(movement, moveMessage)
  }

  goEast() {
    if (+this.player.currentRoom.name === 10) {
      this.rooms[15].updateColor()
    }
    const movement = this.player.currentRoom.moves[3]
    const moveMessage = 'You walk east'
    this.tryToMove(movement, moveMessage)
  }

  changeRoomDescription(room) {
    this.rooms[+room.name].description = this.roomDescription
  }
}

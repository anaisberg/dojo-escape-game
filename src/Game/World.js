import { Player } from './Player'
import { Room } from './Room'
import { drawRoom, movePlayer } from '../Interface/Map'
import { Action, MoveAction } from './Action'
import { clearActions, addEnabledActions } from '../Interface/Action'
import { say } from '../Interface/Text'
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
   * @private
   * @param {()=>Promise<void> | undefined} callback to do on action click
   */
  wrapCallbackForAutomaticActionsDisplay(callback) {
    return () => {
      clearActions()
      return (callback ? callback() : Promise.resolve(null))
        .then(() => {
          addEnabledActions(this)
        })
        .catch(console.error)
    }
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
   * Create an action
   * @param {Object} actionConfig the action config
   * @param {string} actionConfig.text the action text
   * @param {()=>void | undefined} actionConfig.isEnabled evaluated after each action for action availability, if undefined the action is not automatically enabled
   * @param {()=>Promise<void> | undefined} actionConfig.callback to do on action click
   */
  createAction(actionConfig) {
    const action = new Action({
      ...actionConfig,
      world: this,
      callback: this.wrapCallbackForAutomaticActionsDisplay(
        actionConfig.callback
      ),
    })
    this.actions.push(action)
    return action
  }

  /**
   * Create a move action
   * @param {Object} actionConfig the action config
   * @param {string} actionConfig.text the action text
   * @param {()=>void | undefined} actionConfig.isEnabled evaluated after each action for action availability, if undefined the action is not automatically enabled
   * @param {()=>Promise<void> | undefined} actionConfig.callback to do on action click
   * @param {Room} wantedRoom the room to move to
   */
  createMoveAction(actionConfig, wantedRoom) {
    const action = new MoveAction(
      {
        ...actionConfig,
        world: this,
        callback: this.wrapCallbackForAutomaticActionsDisplay(
          actionConfig.callback
        ),
      },
      this.player,
      wantedRoom
    )
    this.actions.push(action)
    return action
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
    const player = new Player(this.rooms[0], name)
    this.player = player
    return player
  }

   /**
   * Try to make movement if allowed
   * @param {Movement} movement
   */
  tryToMove(movement) {
    if (movement.isAllowed) {
      const newRoom = this.rooms[movement.room]
      this.player.currentRoom = newRoom
      movePlayer(this.player)
      say(movement.okMessage)
    } else {
      say(movement.blockingMessage)
    }
  }

  goNorth() {
    const movement = this.player.currentRoom.moves[0]
    this.tryToMove(movement)
  }

  goSouth() {
    const movement = this.player.currentRoom.moves[1]
    this.tryToMove(movement)
  }

  goWest() {
    const movement = this.player.currentRoom.moves[2]
    this.tryToMove(movement)
  }

  goEast() {
    const movement = this.player.currentRoom.moves[3]
    this.tryToMove(movement)
  }
}

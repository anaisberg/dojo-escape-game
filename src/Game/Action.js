import { Player } from './Player'
import { Room } from './Room'
import { Tool } from './Tool'
import { randomId } from './utils'
import { say } from '../Interface/Text'

export class Action {
  /**
   * Create an action
   * @param {Object} actionConfig the action config
   * @param {string} actionConfig.text the action text
   * @param {()=>void | undefined} actionConfig.isEnabled evaluated after each action for action availability, if undefined the action is not automatically enabled
   * @param {()=>Promise<void>} actionConfig.callback to do on action click
   */
  constructor({ text, callback, isEnabled = () => false }) {
    this.text = text
    this.callback = callback
    this.isEnabled = isEnabled
    this.identifier = randomId()
  }
}

export class MoveAction extends Action {
  /**
   * Create a move action to change room
   * @param {Object} actionConfig the action config
   * @param {Player} player the player to move
   * @param {Room} wantedRoom the room to move to
   */
  constructor(actionConfig, player, wantedRoom) {
    super({
      ...actionConfig,
      callback: () => {
        player.move(wantedRoom)
        say(`${player.name} moves to ${wantedRoom.name}`)
        return actionConfig.callback()
      },
    })
  }
}

export class ToolAction extends Action {
  /**
   * Create an action to use a tool
   * @param {Object} actionConfig the action config
   * @param {Tool} tool the tool to use
   * @param {Room} currentRoom the room to move to
   */
  constructor(actionConfig, tool, currentRoom) {
    super({
      ...actionConfig,
      text: `Use ${tool.name}`,
      callback: () => {
        tool.use(currentRoom)
        return actionConfig.callback()
      },
    })
  }
}
export const DIRECTIONS = {
  UP: 'UP',
  DOWN:'down',
  LEFT: 'left',
  RIGHT: 'right',
}

export class Movement {
  /**
   * Create an action
   * @param {Direction} movement.direction up, down, left, right: the direction we wnt to go from the current room
   * @param {boolean} movement.isAllowed can we move to the specified direction, is the next room unlocked
   * @param {string} movement.blockingMessage if next room not unlocked, show the message explaining why we can't move
   * @param {string} movement.okMessage if next room unlocked, message displayed while we change rooms
   * @param {Tool} movement.tool if direction blocked, tool to use to unlock movement
   * @param {number} movement.room if allowed, the new room to go to
   */
  constructor({ direction, isAllowed, room, blockingMessage, okMessage, tool }) {
    this.direction = direction
    this.room = room
    this.isAllowed = isAllowed
    this.blockingMessage = blockingMessage
    this.okMessage = okMessage
    this.tool = tool
  }
}

export const DEFAULT_MOVE_LIST = [
  new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: null, blockingMessage: `You can't go north` }),
  new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
  new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
  new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
]

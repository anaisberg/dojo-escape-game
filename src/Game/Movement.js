

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
   */
  constructor({ direction, isAllowed, blockingMessage, okMessage, tool }) {
    this.direction = direction
    this.isAllowed = isAllowed
    this.blockingMessage = blockingMessage
    this.okMessage = okMessage
    this.tool = tool
  }
}

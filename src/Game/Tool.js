import { DIRECTIONS, Movement } from './Movement'
import { Room } from './Room'

export class Tool {
  /**
   * Create a tool
   * @param {string} tool.name
   * @param {string} tool.description description of the tool in the room where we find it
   * @param {string} tool.errorMessage if we are not in the right room, show message showing that object can't be used here
   * @param {string} tool.useMessage if we are in the right room, message display when we use the object
   * @param {number} tool.roomId in which we need to use the object
   * @param {newDescription} tool.roomDescription new description of the room the tool is used in
   * @param {Direction} tool.direction direction unlocked by the use of this tool
   */
  constructor({ name, description = name, errorMessage = '', useMessage = '', roomId, roomDescription, direction }) {
    this.name = name
    this.description = description
    this.errorMessage = errorMessage
    this.useMessage = useMessage
    this.roomId = roomId
    this.roomDescription = roomDescription
    this.direction = direction
  }

  /**
   * @param {Room} currentRoom - The room in which player is now
   */
  use(currentRoom) {
    if (this.roomId === +currentRoom.name) {
      say(this.useMessage);
      switch (this.direction) {
        case DIRECTIONS.UP: 
          currentRoom.moves[0].isAllowed = true
          break
        case DIRECTIONS.DOWN: 
          currentRoom.moves[1].isAllowed = true;
          break;
        case DIRECTIONS.LEFT: 
          currentRoom.moves[2].isAllowed = true;
          break;
        case DIRECTIONS.RIGHT : 
          currentRoom.moves[3].isAllowed = true;
          break;
      }

      this.changeRoomDescription(currentRoom);
    }
    else say(this.errorMessage);
  }

  changeRoomDescription(room) {
    room.description = this.roomDescription;
  }

  delete(toolName) {
    const tool = document.getElementById(toolName)
    tool.remove()
  }
}

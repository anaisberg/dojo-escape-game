import { Movement } from './Movement'
import { Room } from './Room'

export class Tool {
  /**
   * Create a tool
   * @param {string} tool.name
   * @param {string} tool.description description of the tool in the room where we find it
   * @param {string} tool.errorMessage if we are not in the right room, show message showing that object can't be used here
   * @param {string} tool.useMessage if we are in the right room, message display when we use the object
   * @param {Room} tool.room in which we need to use the object
   * @param {newDescription} tool.roomDescription new description of the room the tool is used in
   * @param {Movement} tool.movement movement unlocked by the use of this tool
   */
  constructor({ name, description = name, errorMessage = '', useMessage = '', room, roomDescription, movement }) {
    this.name = name
    this.description = description
    this.errorMessage = errorMessage
    this.useMessage = useMessage
    this.room = room
    this.roomDescription = roomDescription
    this.movement = movement
  }

  changeRoomDescription() {
    this.room.description = this.roomDescription;
  }

  delete(toolName) {
    const tool = document.getElementById(toolName)
    tool.remove()
  }
}

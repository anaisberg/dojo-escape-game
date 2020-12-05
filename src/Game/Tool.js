import { Movement } from './Movement'
import { Room } from './Room'
import { say } from '../Interface/Text'

export class Tool {
  /**
   * Create a tool
   * @param {string} tool.name
   * @param {string} tool.errorMessage if we are not in the right room, show message showing that object can't be used here
   * @param {string} tool.useMessage if we are in the right room, message display when we use the object
   * @param {Room} tool.room in which we need to use the object
   * @param {newDescription} tool.newDescription new description of the room the tool is used in
   * @param {Movement} tool.movement movement unlocked by the use of this tool
   */
  constructor({ name, errorMessage, useMessage, room, newDescription, movement }) {
    this.name = name
    this.errorMessage = errorMessage
    this.useMessage = useMessage
    this.room = room
    this.newDescription = newDescription
    this.movement = movement
  }

  /**
   * @param {Room} currentRoom - The room in which player is now
   */
  use(currentRoom) {
    if (this.room === currentRoom) {
      say(this.useMessage);
      this.movement.isAllowed = true;
      this.changeRoomDescription();
    }
    else say(this.errorMessage);
  }

  changeRoomDescription() {
    this.room.description = this.newDescription;
  }
}

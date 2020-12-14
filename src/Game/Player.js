import { say } from '../Interface/Text'
import { Room } from './Room'
import { Tool } from './Tool'

const toolInRoom = document.getElementById('room-tools')
const inventory = document.getElementById('inventory')
const noToolText = document.createElement('p')
Object.assign(noToolText, {
  classList: ['speak'],
  id: 'no-tool',
  innerHTML: `You don't have anything in your bag yet`,
})

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

  onClickAddToInventory = (e,tool) => {
    this.addToInventory(tool);
    var element = e;
    element.remove();
  }

  /**
   * Search the room for new tools
   */
  searchRoom() {
    const tool = this.currentRoom.tool
    if (tool) {
      say(tool.description)
      this.displayFoundTool(tool)
    } else {
      say('There is nothing worth of attention here')
    }
  }
  
  /**
  * Add an action to the interface
  * @param {Tool} tool tool to register
  */
  displayFoundTool = (tool) => {
    const toolElement = document.createElement("BUTTON")
    Object.assign(toolElement, {
      classList: ['action-button'],
      onclick: () => this.onClickAddToInventory(toolElement,tool),
      innerHTML: `Pick up ${tool.name}`,
    })
    toolInRoom.append(toolElement)
  }

  /**
   * Add tool to playe rinventory
   * @param {Tool} newTool
   */
  addToInventory(newTool) {
    const toolElement = document.createElement('button')
    Object.assign(toolElement, {
      classList: ['action-button'],
      onclick: () => this.useTool(newTool),
      id: newTool.name,
      innerHTML: `${newTool.name}`,
    })
    inventory.append(toolElement)
    this.inventory.push(newTool);
  }
  
  removeFromInventory(toolToRemove) {
    this.inventory = this.inventory.filter(item => item!== toolToRemove)
  }

  /**
   * @param {Tool} tool - The tool we want to use
   */
  useTool(tool) {
    console.log(tool.roomId,this.currentRoom)
    if (tool.roomId === +this.currentRoom.name) {
      say(tool.useMessage)
      tool.use(this.currentRoom)
      tool.delete(tool.name)
      this.removeFromInventory(tool)
      this.checkEmptyInventory()
    }
    else say(tool.errorMessage);
  }

  checkEmptyInventory() {
    if (this.inventory.length === 0) {
      toolInBag.append(noToolText)
    } else {
      document.getElementById('no-tool').remove()
    }
  }
}

import { Room } from '../Game/Room'
import { Player } from '../Game/Player'

const canvasId = 'map'
const scaling = 74
const playerXStart = 53
const playerYStart  = 60
const playerLight = 15

const mapCanvas = document.getElementById(canvasId)
const mapContext = mapCanvas.getContext('2d')
const locationIcon = document.getElementById('location')

/**
 * @param {Room} room - The room to draw
 */
export const drawRoom = (room) => {
  clearRoom(room)
  mapContext.fillStyle = `rgb(0, 0, 0, ${room.color})`
  mapContext.fillRect(
    room.xPos * scaling,
    room.yPos * scaling,
    scaling,
    scaling
  )
}

export const clearRoom = (room) => {
  mapContext.clearRect(
    room.xPos * scaling,
    room.yPos * scaling,
    scaling,
    scaling
  )
}

/**
 * @param {Player} player - The player to draw
 */
export const movePlayer = (player) => {
  const playerXPos =  player.currentRoom.xPlayer || (player.currentRoom.xPos + 1/2) * scaling + playerXStart
  const playerYPos =  player.currentRoom.yPlayer || (player.currentRoom.yPos + 1/2) * scaling + playerYStart
  locationIcon.style.left = `${playerXPos}px`
  locationIcon.style.top = `${playerYPos}px` 
  player.currentRoom.updateColor()
}

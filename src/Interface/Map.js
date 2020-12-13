import { Room } from '../Game/Room'
import { Player } from '../Game/Player'
import { World } from '../Game/World'

const canvasId = 'map'
const scaling = 74
const playerXStart = 53
const playerYStart  = 60

const mapCanvas = document.getElementById(canvasId)
const mapContext = mapCanvas.getContext('2d')
const locationIcon = document.getElementById('location')

/**
 * @param {Room} room - The room to draw
 */
export const drawRoom = (room) => {
  mapContext.fillStyle = room.color
  mapContext.fillRect(
    room.xPos * scaling,
    room.yPos * scaling,
    scaling,
    scaling
  )
  mapContext.strokeStyle = 'white';
  mapContext.strokeRect(
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
  const playerXPos =  (player.currentRoom.xPos + 1/2) * scaling + playerXStart
  const playerYPos =  (player.currentRoom.yPos + 1/2) * scaling + playerYStart
  locationIcon.style.left = `${playerXPos}px`
  locationIcon.style.top = `${playerYPos}px` 
  console.log(playerYPos, playerXPos)
}

/**
 * Draw a given world.
 * @param {World} world - The world to draw.
 */
export const drawMap = (world) => {
  world.rooms.forEach(drawRoom)
}

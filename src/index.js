import { World } from './Game/World'
import { say } from './Interface/Text'
import { addAction } from './Interface/Action'
import { askForPlayerName, validateButton, validateName } from './Interface/InteractionModal'
import { roomsMap } from './assets/config/rooms';

askForPlayerName();

const main = () => {
  const world = new World('World')
  const rooms = [];
  let player;

  for (let roomParams of roomsMap) {
    const room = world.createRoom(roomParams);
    rooms.push(room);
  }

  askForPlayerName();
  validateButton.onclick = () => {
    const name = validateName();
    player = world.createPlayer(name);
    wakeUp();
  }

  const northButton = document.getElementById('north')
  const southButton = document.getElementById('south')  
  const westButton = document.getElementById('west')
  const eastButton = document.getElementById('east')

  northButton.onclick = () => world.goNorth();
  southButton.onclick = () => world.goSouth();
  westButton.onclick = () => world.goWest();
  eastButton.onclick = () => world.goEast();

  world.createMoveAction(
    {
      text: 'Move to room 1',
      isEnabled: () => player.currentRoom === world.rooms[1],
    },
    world.rooms[0]
  )

  world.createMoveAction(
    {
      text: 'Move to room 3',
      callback: () =>
        new Promise((resolve) => {
          setTimeout(() => {
            say(`${player.name} found the exit 🎉`)
          }, 1200)
          resolve()
        }),
      isEnabled: () => player.currentRoom === world.rooms[1],
    },
    world.rooms[2]
  )

  world.createAction({
    text: 'Search the room with care',
    callback: () =>
      new Promise((resolve) => {
        say(`${player.name} searches the room ...`)
        setTimeout(() => {
          say(`${player.name} found a little trap door to another room`)
          world.rooms[2].updateColor()
          resolve()
        }, 3000)
      }),
    isEnabled: () => player.currentRoom === world.rooms[1] && world.rooms[2].color === 'black',
  })

  const wakeUp = () => {
    setTimeout(() => {
      say(`${player.name} wakes up.`)
      addAction(
        world.createMoveAction({
          text: 'Move to room 2',
          isEnabled: () => player.currentRoom === world.rooms[0],
          world,
        }, world.rooms[1])
      )
    }, 1200)
  }
}

void main()

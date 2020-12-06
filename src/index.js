import { World } from './Game/World'
import { say } from './Interface/Text'
import { addAction } from './Interface/Action'
import { askForPlayerName, validateButton, validateName } from './Interface/InteractionModal'

let player;
askForPlayerName();

const main = () => {
  const world = new World('World')
  const rooms = [];

  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      const room = world.createRoom({
        name: 'room ' + (i + j + 1),
        color: 'transparent',
        width: 1,
        height: 1,
        xPos: i,
        yPos: j,
      });
      rooms.push(room);
    }
  }


  askForPlayerName();
  validateButton.onclick = () => {
    const name = validateName();
    player = world.createPlayer(name);
    wakeUp();
  }



  world.createMoveAction(
    {
      text: 'Move to room 1',
      isEnabled: () => player.currentRoom === rooms[1],
    },
    rooms[0]
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
      isEnabled: () => player.currentRoom === rooms[1] && rooms[2].color !== 'black',
    },
    rooms[2]
  )

  world.createAction({
    text: 'Search the room with care',
    callback: () =>
      new Promise((resolve) => {
        say(`${player.name} searches the room ...`)
        setTimeout(() => {
          say(`${player.name} found a little trap door to another room`)
          rooms[2].updateColor()
          resolve()
        }, 3000)
      }),
    isEnabled: () => player.currentRoom === rooms[1] && rooms[2].color === 'black',
  })

  const wakeUp = () => {
    setTimeout(() => {
      say(`${player.name} wakes up.`)
      addAction(
        world.createMoveAction({
          text: 'Move to room 2',
          isEnabled: () => player.currentRoom === rooms[0],
          world,
        }, rooms[1])
      )
    }, 1200)
  }
}

void main()

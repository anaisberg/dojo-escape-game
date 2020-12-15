import { World } from './Game/World'
import { say } from './Interface/Text'
import { askForPlayerName,
  validateButton,
  validateName,
  validateAnswerButton,
  validateLastAnswerButton,
} from './Interface/InteractionModal'
import { roomsMap } from './assets/config/rooms';

const main = () => {
  const world = new World('World')
  const rooms = [];
  let player;

  askForPlayerName();
  validateButton.onclick = () => {
    const name = validateName();
    player = world.createPlayer(name);
    wakeUp();
  }
  
  for (let roomParams of roomsMap) {
    const room = world.createRoom(roomParams);
    rooms.push(room);
  }

  validateAnswerButton.onclick = () => player.validateSphinxAnswer();
  validateLastAnswerButton.onclick = () => player.validateLastAnswer();

  const northButton = document.getElementById('north')
  const southButton = document.getElementById('south')  
  const westButton = document.getElementById('west')
  const eastButton = document.getElementById('east')
  const searchButton = document.getElementById('search')

  northButton.onclick = () => world.goNorth();
  southButton.onclick = () => world.goSouth();
  westButton.onclick = () => world.goWest();
  eastButton.onclick = () => world.goEast();
  searchButton.onclick = () => player.searchRoom();

  document.onkeydown = (event) => {
    event = event || window.event;
    switch (event.key) {
      case "ArrowUp" :
        world.goNorth();
        break;
      case "ArrowDown" :
        world.goSouth();
        break;
      case "ArrowLeft" :
        world.goWest();
        break;
      case "ArrowRight" :
        world.goEast();
        break;
      default :
        return;
    }
  }

  const wakeUp = () => {
    setTimeout(() => say(`Hello ${player.name}. You just woke up in the middle of a strange forest. You don't remember anything, but you know that you have to get out of here.`), 1200)
  }
}

void main()

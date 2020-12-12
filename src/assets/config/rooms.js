import { Movement, DIRECTIONS } from '../../Game/Movement'

export const roomsMap = [{
    name: '0',
    xPos: 0,
    yPos: 0,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 1, okMessage: 'You went south. There is nothing arounf here so you need to keep going.', blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 5, blockingMessage: `You can't go east` }),
    ]
  },{
    name: '1',
    xPos: 0,
    yPos: 1,
    description: 'You walk a little bit and realize that there is nothing much around here',
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 0, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 6, blockingMessage: `You can't go east` }),
    ]
  }, {
    name: '2',
    xPos: 0,
    yPos: 2,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 3, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 7, blockingMessage: `You can't go east` }),
    ]
  }, {
    name: '3',
    xPos: 0,
    yPos: 3,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 2, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '4',
    xPos: 0,
    yPos: 4,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 9, blockingMessage: `You can't go east` }),
    ]
  },
  {
    name: '5',
    xPos: 1,
    yPos: 0,
  },{
    name: '6',
    xPos: 1,
    yPos: 1,
  }, {
    name: '7',
    xPos: 1,
    yPos: 2,
  }, {
    name: '8',
    xPos: 1,
    yPos: 3,
  }, {
    name: '9',
    xPos: 1,
    yPos: 4,
  },
  {
    name: '10',
    xPos: 2,
    yPos: 0,
  },{
    name: '11',
    xPos: 2,
    yPos: 1,
  }, {
    name: '12',
    xPos: 2,
    yPos: 2,
  }, {
    name: '13',
    xPos: 2,
    yPos: 3,
  }, {
    name: '14',
    xPos: 2,
    yPos: 4,
  },
  {
    name: '15',
    xPos: 3,
    yPos: 0,
  },{
    name: '16',
    xPos: 3,
    yPos: 1,
  }, {
    name: '17',
    xPos: 3,
    yPos: 2,
  }, {
    name: '18',
    xPos: 3,
    yPos: 3,
  }, {
    name: '19',
    xPos: 3,
    yPos: 4,
  },
  {
    name: '20',
    xPos: 4,
    yPos: 0,
  },{
    name: '21',
    xPos: 4,
    yPos: 1,
  }, {
    name: '22',
    xPos: 4,
    yPos: 2,
  }, {
    name: '23',
    xPos: 4,
    yPos: 3,
  }, {
    name: '24',
    xPos: 4,
    yPos: 4,
  },
]
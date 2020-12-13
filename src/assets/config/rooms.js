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
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 0, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 14, blockingMessage: `You can't go east` }),
    ],
  },{
    name: '6',
    xPos: 1,
    yPos: 1,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 7, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 1, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '7',
    xPos: 1,
    yPos: 2,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 6, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true,  room: 2, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 12, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '8',
    xPos: 1,
    yPos: 3,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 9, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '9',
    xPos: 1,
    yPos: 4,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 8, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 4, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 14, blockingMessage: `You can't go east` }),
    ],
  },
  {
    name: '10',
    xPos: 2,
    yPos: 0,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 11, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 5, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '11',
    xPos: 2,
    yPos: 1,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 10, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '12',
    xPos: 2,
    yPos: 2,
    xPlayer: 234,
    yPlayer: 232,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: null, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 13, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 7, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 17, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '13',
    xPos: 2,
    yPos: 3,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 12, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 14, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '14',
    xPos: 2,
    yPos: 4,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 13, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 9, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  },
  {
    name: '15',
    xPos: 3,
    yPos: 0,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: null, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  },{
    name: '16',
    xPos: 3,
    yPos: 1,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: null, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 17, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '17',
    xPos: 3,
    yPos: 2,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 16, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 12, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 22, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '18',
    xPos: 3,
    yPos: 3,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: null, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 19, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '19',
    xPos: 3,
    yPos: 4,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 18, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 24, blockingMessage: `You can't go east` }),
    ],
  },
  {
    name: '20',
    xPos: 4,
    yPos: 0,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: null, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: 21, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  },{
    name: '21',
    xPos: 4,
    yPos: 1,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: 20, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 22, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '22',
    xPos: 4,
    yPos: 2,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 21, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 23, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 17, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '23',
    xPos: 4,
    yPos: 3,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 22, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 24, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '24',
    xPos: 4,
    yPos: 4,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 23, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 19, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  },
]
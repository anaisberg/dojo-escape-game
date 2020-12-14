import { Movement, DIRECTIONS } from '../../Game/Movement'
import { tools } from './tools'

export const roomsMap = [{
    name: '0',
    xPos: 0,
    yPos: 0,
    description: 'The room here is made of stones. You notice racks of ancient weapons, spears, bows and shields. It is probably a guard room. But what were they guarding in this forest? Why are every pieces of armor made of bronze?',
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You take a look at an ancient painting on the wall. It is drawn a huge wooden horse in front of a fortress. You recollect this ancient city is named Troyes.` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 1, okMessage: 'You go south.', blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, blockingMessage: `They are simply mannequins on which Greek bronze armor sits.` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 5, blockingMessage: `You can't go east`, okMessage: "You leave the tower by an exit on the east side" }),
    ],
    tool: tools["Ulysse's Bow"],
  },{
    name: '1',
    xPos: 0,
    yPos: 1,
    xPlayer: 100,
    yPlayer: 166,
    description: 'You walk a little bit and realize that there is nothing much around here but a dark forest. Looking North, you notice a large door in what appears to be a tower.',
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
    xPlayer: 97,
    description: "What a strange room. Cut stones replace the forest seamlessly. It seems that you entered a hall. Torches flicker on the walls, but their weak light does not allow you to understand the layout of the room. A few steps farther, darkness absorbs all the light. Above this darkness, hoops float suspended and seem to be aligned with a target at the bottom of the wall. I think the room branches off to the left, but I can't see anything.",
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
    xPlayer: 97,
    yPlayer: 308,
    description: "You stand in a brightly colored clearing. Funny trees with vaulted branches present fruits in the form of flowers in vermeille colors.",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 2, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
    tool: tools["Lotus Fruit"],
  }, {
    name: '4',
    xPos: 0,
    yPos: 4,
    xPlayer: 95,
    yPlayer: 384,
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
    yPlayer: 101,
    description: "You find yourself in the forest again",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You can't go north, the forest is too dense` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, blockingMessage: `You can't go south, the forest is too dense` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 0, blockingMessage: `You can't go west`, okMessage:'You go west, back in the guard tower'}),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 10, blockingMessage: `You can't go east`, okMessage:'You go east, follow the main path' }),
    ],
  },{
    name: '6',
    xPos: 1,
    yPos: 1,
    xPlayer: 155,
    yPlayer: 175,
    description: "You arrived in a square place with statues standing on all sides. At each end of the square is a statue.",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You can't go north, a statue of Zeus is blocking the way` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 7, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 1, blockingMessage: `You can't go west, a statue of Alexander the great is blocking the way`, okMessage:'You enter the circular entrance released by the shield of Alexander the Great.' }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, blockingMessage: `You can't go east, a statue of Hephaïstos is blocking the way` }),
    ],
  }, {
    name: '7',
    xPos: 1,
    yPos: 2,
    yPlayer: 233,
    description: "This forest is really strange, just now big conifers were surrounding me, now it seems that I am in the middle of a jungle. Vines are hanging from the green roof.The forest path has widened. I am at a crossroads, several choices are available to me. ",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 6, blockingMessage: `You can't go north`, okMessage:'You continue north on a path that seems to lead to a small village.' }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, blockingMessage: `You can't go south, there is nothing but a dense jungle there` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true,  room: 2, blockingMessage: `You can't go west`, okMessage:'You enter a strange hall ' }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 12, blockingMessage: `You can't go east`, okMessage:'You cross the rampart by the knocked down door' }),
    ],
    tool: tools.vine,
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
    xPlayer: 167,
    yPlayer: 381,
    description:"Ana boT fatale",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 8, blockingMessage: `You walk towards the birds, but as you get closer to their nest, their horrifying sound stun. You take a step back.` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, blockingMessage: `You can't go south. There is no path` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 4, blockingMessage: `An old ruin stands in front of you. You don't see any opening this way.` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 14, blockingMessage: `You can't go east` }),
    ],
    tool: tools.fork,
  },
  {
    name: '10',
    xPos: 2,
    yPos: 0,
    wPlayer: 230,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, blockingMessage: `You can't go north, the forest is too dense` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 11, blockingMessage: `You can't go south, a herd of white horses blocks the way. And they don't seem too happy to see you.`, okMessage:'You wish you had boots. You continue south, being careful not to walk in horse dung.' }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 5, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, blockingMessage: `You can't go east, the forest is too dense` }),
    ],
  }, {
    name: '11',
    xPos: 2,
    yPos: 1,
    xPlayer: 242,
    yPlayer: 157,
    description: "The place was trampled by hundreds of horses. A smell of horse excrement and decay emanates from the ground. There is probably nothing for me here.",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 10, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `A large metallic wall stands in front of you. You see flames on the whole and a large anvil` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You notice a workbench on the side, tools are scattered on it` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east, flames are blazing from a large furnaces, it is too hot` }),
    ],
    tool: tools["Metal Rattle"],
  }, {
    name: '12',
    xPos: 2,
    yPos: 2,
    xPlayer: 234,
    yPlayer: 232,
    description:'A small plain stretches out before your eyes',
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: null, blockingMessage: `You notice a building that looks like a large barn. As you get closer, you see empty boxes and a terrible smell attacks your sense. Piles of horse shit lay there, you don't intend to stay there` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 13, blockingMessage: `You can't go south`, okMessage:"You went south and entered what seems to be a cave." }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 7, blockingMessage: `It seems that through the fir trees I can see the ramparts. Trees spread out clearly to make room for a door. A half rotten door stands in your way. You try to force it but it won't budge.` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 17, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '13',
    xPos: 2,
    yPos: 3,
    xPlayer: 242,
    description: "In the darkness of the cavern, small lights are constellated on the ceiling.",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 12, blockingMessage: `You can't go north`, okMessage:'You walk north towards the light, out of the cave !' }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 14, blockingMessage: `You don't see much in the darkness, but you still seem to hear grunts. Curious you approach. A huge three-headed dog greets you ferociously. You take your legs to your neck.`, okMessage:'You carefully walk past the sleeping cerberus'}),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You approach the wall of the cave and notice that the small lights were in fact shards of mirrors.` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `In the dim light of the entrance, you notice that a huge fresco decorates this part of the cave. It represents men sitting in a cave observing shadows, and a half-man, half-hose creature waiting outside of it. It reminds you of something, but you can't get your hands on it. ` }),
    ],
    tool: tools["Mirror Fragment"]
  }, {
    name: '14',
    xPos: 2,
    yPos: 4,
    yPlayer: 379,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 13, blockingMessage: `You can't go north`, okMessage:'You walk north inside the cave, and carefully avoid walking on the tail of the sleeping cerberus' }),
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
    xPlayer: 310,
    description:"As you run down the path, the sound of flowing water gets louder and louder. You are on a beach near a wide river with a strong current.",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: null, blockingMessage: `The water is ice-cold and the current is too strong, you can't go this way` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 17, blockingMessage: `You can't go south`, okMessage:'You walk south on the sandy path' }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '17',
    xPos: 3,
    yPos: 2,
    xPlayer: 305,
    yPlayer: 233,
    description: 'You are at the eastern end of the plain. To the north, a path goes deeper into the forest.',
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 16, okMessage: `You walk north on a small road made of sand` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south, the forest is too dense` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 12, blockingMessage: `On the road stands an impressively large statue of Gorgon. It is impossible for you to walk past. You notice that you could remember the statue's name. Your memory might be coming back.`, okMessage: "You climb the rubbles of the statue." }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 22, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '18',
    xPos: 3,
    yPos: 3,
    yPlayer: 311,
    description: "There is nothing but stones here. And bags of stones. Yet, something shiny catches your eye.",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: null, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 19, blockingMessage: `You can't go south`, okMessage: "You are still a little afraid, but you walk past the still sphinx. It has a content smile on its face." }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
    tool: tools.drachma,
  }, {
    name: '19',
    xPos: 3,
    yPos: 4,
    xPlayer: 315,
    yPlayer: 387,
    description: "You are not alone here. You look up and meet face to face with a huge sphinx. It's sitting in the middle of the way with a clever smile on its face.",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: 18, blockingMessage: `You can't go north. The Sphinx is blocking the way.`, okMessage: "You are still a little afraid, but you walk past the still sphinx. It has a content smile on its face." }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: true, room: 24, blockingMessage: `You can't go east` }),
    ],
  },
  {
    name: '20',
    xPos: 4,
    yPos: 0,
    description: "You find yourself in front of the river. The sandy beach is bigger. There is a boat that floats. It is not swept away by the current, but seems to be waiting for you. There is even a paddle inside it.",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: null, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 21, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  },{
    name: '21',
    xPos: 4,
    yPos: 1,
    yPlayer: 189,
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: false, room: 20, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 22, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west`}),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '22',
    xPos: 4,
    yPos: 2,
    xPlayer: 376,
    yPlayer: 238,
    description: "Logs are lying around. It looks like a woodcutter has been here. He even left his axe planted in a stump.",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 21, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: true, room: 23, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 17, blockingMessage: `You can't go west`, okMessage:"You climb the rubbles of the Gorgone statue." }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
    tool: tools.axe,
  }, {
    name: '23',
    xPos: 4,
    yPos: 3,
    xPlayer: 390,
    description: "The path seems infinite. You can't see anything south, the ground disappears.",
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 22, blockingMessage: `You can't go north` }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: 24, blockingMessage: `You find yourself indeed blocked in front of a precipice. Tree branches are growing on the sides, but they seem out of reach`, okMessage: "You jump using the liana hanging on a branch." }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: false, room: null, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
  }, {
    name: '24',
    xPos: 4,
    yPos: 4,
    xPlayer: 392,
    yPlayer: 374,
    description: 'Trees are sparse but stones are piled up all around you. With a little imagination, they can look like an arena. How many fights have taken place here? Will you have to fight too?',
    moves: [
      new Movement({ direction: DIRECTIONS.UP, isAllowed: true, room: 23, blockingMessage: `You can't go north`, okMessage: "You jump using the liana hanging on a branch." }),
      new Movement({ direction: DIRECTIONS.DOWN, isAllowed: false, room: null, blockingMessage: `You can't go south` }),
      new Movement({ direction: DIRECTIONS.LEFT, isAllowed: true, room: 19, blockingMessage: `You can't go west` }),
      new Movement({ direction: DIRECTIONS.RIGHT, isAllowed: false, room: null, blockingMessage: `You can't go east` }),
    ],
    tool: tools["Laurel Crown"],
  },
]
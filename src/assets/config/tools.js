import { DIRECTIONS } from '../../Game/Movement'
import { Tool, Movement } from '../../Game/Tool'

export const tools = {
    'Axe' : new Tool({
        name: 'axe',
        roomId : 12,
        description:"In the middle of the clearing stands an axe driven into a stump. After all the far-fetched objects invented by the developers, they put us a simple axe. And in a room that doesn't seem to serve any purpose whatsoever.",
        errorMessage: "It won't cut through that",
        useMessage : "You swing that huge axe of yours. Those bamboos will not last long. The path is clear, you step accross the opening you have made",
        direction: DIRECTIONS.LEFT
    }),
    'Vine' : new Tool({
        name: 'vine',
        roomId: 23,
        description: "You pool the vines that hang from the trees. This vine no longer seems to be attached to its tree.",
        errorMessage: "What do you expect to do with that",
        useMessage : "You throw the vine at the large branch right above you. It seems reliable. After a quick run, you jump off into the void and land onto the otherside.",
        direction: DIRECTIONS.DOWN
    }),
    'Drachma' : new Tool({
        name: 'drachma',
        roomId: 21,
        description:"You find a quite heavy leather purse. What a disapointment in opening it. Only polished stones... Ah isn't that a shiny gold coin ?",
        errorMessage: "Don’t go waste your money",
        useMessage: "This piece of gold reminds you of an old tale. You step in the boat and softly put the drachma on the bench in from of you. The boat starts to move slowly, as if somebody was rowing. The boat crossing the turbulent river and you reach the other shore safely.",
        direction: DIRECTIONS.UP
    }),
    'Lotus Fruit' : new Tool({
        name: 'Lotus Fruit',
        roomId: 13,
        description: "You catch a fruit to better observe it. As you sniff it, memories come back to you. This fruit in a Lotos fruit, a mythological fruit used to put people to sleep or to forget. You wonder if this fruit hasn't been used to erase your memories",
        errorMessage: "This fruit smells sweet and tasty, but your stomach is too tied to eat anything. You look at it with regret and put it back in your bag.",
        useMessage: "Cerberus, the three-heads hound, grabs the fruit quickly and tosses it in its mouth. Three seconds after swallowing the sweet fruit, he falls in a deep sleep. You can walk by it safely.",
        direction: DIRECTIONS.DOWN
    }),
    'Mirror Fragment' : new Tool({
        name: 'Mirror Fragment',
        roomId: 17,
        description: "You approach a wall and unseal a shard of mirror",
        errorMessage: "Stop staring at yourself, I know someone for whom it didn’t go well back in the days as he turned into stone.",
        useMessage: "The face of the gorgonian statue decomposes, tears bead on his cheeks. Suddenly, she collapses. You step over the rubble and pass",
        direction: DIRECTIONS.RIGHT
    }),
    'Fork' : new Tool({
        name: 'Fork',
        roomId: 12,
        description: "Planted in a corner, you find a kind of worn fork. It is all metal, and the handle is decorated with seahorses. It smells like dried fish.",
        errorMessage: "You could dig your own grave in this austere forest if you are tired to live.",
        useMessage: "You remember that old tale of Hercules cleaning the stables of the king Augias in a day. Hundreds of animals had been depositing their excrement for decades with no one to clean it up. Looking at the barns, you think it could have been worse.After a day work cleaning the stables, you see horses progressively coming taking their place in the stable.",
        direction: DIRECTIONS.DOWN
    }),
    'Metal Rattle' : new Tool({
        name: 'Metal Rattle',
        roomId: 9,
        description:"You look at the tools of the workbench. They are all much too heavy for you to lift. Except one.It's a kind of metal maracass that makes an annoying metallic noise when you shake it. Stop that...",
        errorMessage: "You shake the rattle. The sound is awful. You quickly stop",
        useMessage: "These weird birds where Stymphalian birds, man-eating birds with beaks made of bronze and sharp metallic feathers they could launch at their victims. The rattle was build by Hephaistos is order to make them flee. They disapear from you sight.",
        direction: DIRECTIONS.UP,
    }),
    'Laurel Crown' : new Tool({
        name: 'Laurel Crown',
        roomId: 6,
        description:"In the middle of the arena on an altar, you find a laurel wreath. The flowers are so delicate.",
        errorMessage: "You sit the Crown on your head and parade like an hellenic Emperor. Yet nothing happens",
        useMessage: "You swiftly climb the Emperor's statue and sit the missing crown on his head. Alexander the Great raises his shield in a victorious posture opening a secret path to the next room",
        direction: DIRECTIONS.LEFT,
    }),
    "Ulysse's Bow" : new Tool({
        name: "Ulysse's Bow",
        roomId: 2,
        description: 'At the back of the room a large wooden bow stands above an old fireplace. It is brightly decorated with ivory, but it retains a simple appearance.',
        errorMessage: "You try to bend the bow. But the legend did not lie, the bowstring is too stiff",
        useMessage: "You bend the bow with all your might, and shoot accross the nine hoops straight to the target. Paving stones appear where the pit once was",
        direction: DIRECTIONS.DOWN,
    }),
    "Lever" : new Tool({
        name: "Infinite Lever",
        roomId: 8,
        description: 'In front of the lever is planted a sign: "Will you dare to pull that lever?"',
        errorMessage: "GAME OVER",
        useMessage: "It seems that nothing has happened...",
        direction: DIRECTIONS.LEFT,
    }),
    "Fake Tool" : new Tool({
        roomId: null,
        description: 'As you get closer to the first Golden sphere in the middle of the room, you notice the sphinx is drawn on its surface.'
        + 'You are approaching the second golden sphere. Half erased, you seem to see a drawing of a man whose legs merge into a horse.',
    }),

}
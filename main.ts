import Pony from './class/Pony'
import DragonBall, { DragonBHeroe } from './class/DragonB'

console.log("<-- STEP 1 -->");

const fisrtPony: Pony = new Pony();
const secondPony: Pony = new Pony();

const sangoku: DragonBall = new DragonBall(DragonBHeroe.SANGOKU);

fisrtPony.isMoved()
sangoku.isMoved()
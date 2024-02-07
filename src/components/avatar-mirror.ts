import { AvatarShape, engine, Transform } from "@dcl/sdk/ecs"
import { Vector3 } from "@dcl/sdk/math"
import { getPlayerWearables } from "./check-player-data"

export async function createAvatarStand(
    entity: any,
    caption: string,
    x: number,
    y: number,
    z: number,
    wearablesArray: string[] | null
){
    let wearables: string[] = []

    if (wearablesArray && wearablesArray.length > 0) {
        wearables = wearablesArray
        console.log('the manaquin is wearing', wearablesArray)
    } else {
        wearables = getPlayerWearables()
    }

    AvatarShape.create(entity, {
        id: 'Manequin',
        name: caption,
        emotes: [],
        wearables: wearables, // Assign wearables array directly here
    })

    Transform.create(entity, {
        position: Vector3.create(x,y,z)
    })

}


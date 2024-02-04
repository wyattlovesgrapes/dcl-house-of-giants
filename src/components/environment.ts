import { GltfContainer, Transform,  engine, MeshCollider, MeshRenderer, Animator } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from "@dcl/sdk/math"
import { makeElevatorButton } from './make-elevator-button'
import { makeDoorLock } from './doors'
import { createAvatarStand } from './avatar-mirror'
import { getClosetItem } from './wearables-closet'
export let frontDoor: any


export function environment() {

    // Main build
    const houseEntity = engine.addEntity()

    GltfContainer.create(houseEntity, {
      src: 'models/house-of-giants-v3.glb',
    })
  
    Transform.create(houseEntity, {
      position: Vector3.create(9, 0, 8),
      scale: Vector3.One(),
      rotation: Quaternion.Identity(),
    })

    // Elevator buttons
    const floor2Button = engine.addEntity()
    MeshRenderer.setBox(floor2Button)
    MeshCollider.setBox(floor2Button)

    Transform.create(floor2Button, {
        position: { x: 12, y: 1, z: 2 },
    })

    makeElevatorButton(floor2Button,'Floor 2',5,5,5)

    const floor3Button = engine.addEntity()
    MeshRenderer.setBox(floor3Button)
    MeshCollider.setBox(floor3Button)

    Transform.create(floor3Button, {
        position: { x: 12, y: 1, z: 4 },
    })

    makeElevatorButton(floor3Button,'Floor 3',5,12,5)

    const floor4Button = engine.addEntity()
    MeshRenderer.setBox(floor4Button)
    MeshCollider.setBox(floor4Button)

    Transform.create(floor4Button, {
        position: { x: 12, y: 1, z: 6 },
    })

    makeElevatorButton(floor4Button,'Floor 4',5,16,5)

    // Doors

    frontDoor = engine.addEntity()
    GltfContainer.create(frontDoor, {
      src: 'models/front-door.glb'
    })

    Animator.create(frontDoor, {
      states: [
        {
          clip: 'open',
          loop: false,
        },
      ],
    })

    // Door locks

    const doorLock01 = engine.addEntity()
    MeshRenderer.setBox(doorLock01)
    MeshCollider.setBox(doorLock01)

    Transform.create(doorLock01, {
        position: { x: 12, y: 1, z: 8 },
    })

    makeDoorLock(doorLock01,'This door is locked.')

    // Avatar stands

    const avatarStand01 = engine.addEntity()
    createAvatarStand(avatarStand01, 'sinful', 3,0,3, getClosetItem('1000'))


}
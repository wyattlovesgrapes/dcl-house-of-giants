import { movePlayerTo } from '~system/RestrictedActions'
import { pointerEventsSystem, InputAction, } from '@dcl/sdk/ecs'
import { Vector3 } from "@dcl/sdk/math"


export function makeElevatorButton(
    entity: any, 
    hoverText: string,
    locx: number,
    locy: number,
    locz:number ) {

    pointerEventsSystem.onPointerDown(
        {
          entity: entity,
          opts: { button: InputAction.IA_POINTER, hoverText: hoverText },
        },
        function () {
          // respawn player
          movePlayerTo({
            newRelativePosition: Vector3.create(locx, locy, locz),
            cameraTarget: Vector3.create(8, 1, 8),
          })
        }
      )
}
import { checkIfWearing, getWearablesList } from "./check-user-data";
import { pointerEventsSystem, InputAction, Animator } from '@dcl/sdk/ecs'
import { frontDoor } from './environment'


function openDoor( entity: any ) {
    Animator.playSingleAnimation(entity, 'open')
}

export function makeDoorLock(
    entity: any,
    hoverText: string,
) {
    pointerEventsSystem.onPointerDown(
        {
            entity: entity,
            opts: { button: InputAction.IA_POINTER, hoverText: hoverText },
        },
        function () {
            // Call checkWearables
            getWearablesList()
            checkIfWearing('urn:decentraland:off-chain:base-avatars:thug_life')
                .then(result => {
                    //console.log(result); // Now this should log the correct boolean value.
                    if (result === true){
                        openDoor(frontDoor)
                    } else {
                        console.log('Sorry friend.')
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        }
    )
}


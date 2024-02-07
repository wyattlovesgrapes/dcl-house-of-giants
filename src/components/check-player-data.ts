import { getPlayer } from '@dcl/sdk/src/players'

let playerData : any = ''

export function checkIfWearing(filter: string){
    const player = getCachedPlayerData()
    let result: boolean = false
    console.log(player)
    
    for ( const wearable of player.wearables) {
        if (wearable === filter) {
            result = true
            //console.log('this is the result',result)  

            

        }
    }
    return result
      
}

function getCachedPlayerData() {
    if (playerData === ''){
        playerData = getPlayer()
        console.log('getting player info')

    } else {
        console.log('already captured player info')
    }

    return playerData
}

function updateCachedPlayerData() {
    playerData = getPlayer()
    return playerData
}

export function getPlayerWearables(){
    updateCachedPlayerData()
    const wearables = playerData.wearables
    return wearables
}

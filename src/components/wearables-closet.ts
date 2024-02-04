const urnPrefix : string = "urn:decentraland:matic:collections-v2:"

export function getClosetItem( id:string ): string[] | null {

    for (let i = 0; i < closet.length; i++){
        if (closet[i][0] === id){
            console.log('this is the closet id', closet[i][0])
            console.log('selected closet item', i)
            return [urnPrefix + closet[i][2]]
        }
    }
    console.log('No outfit matching that ID.')
    return null

}

const closet : string[][] =[
    //hats
    ["0000","doggy daycare","0x6cc419f307d2bdb787dfb7633ec792002a72a4c1:0"], 
    ["0001","highness crown","0x180fe56efea7128ab619a0134145e2c1f8ec010f:0"],
    // helmets
    ['1000', 'blue led mau5 head','0x328abea223c47f16e61f67a5f8f445777f6245d6:1'], 
    //upper body
    ["2000","highness crown","0x180fe56efea7128ab619a0134145e2c1f8ec010f:0"],
    ["2001","highness crown","0x180fe56efea7128ab619a0134145e2c1f8ec010f:0"],
  ]
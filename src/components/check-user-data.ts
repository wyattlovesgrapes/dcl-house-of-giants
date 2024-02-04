import { getUserData } from '~system/UserIdentity'

export async function checkIfWearing(filter: string) {
    try {
        const userData = await getUserData({})
        
        // Check if userData and its nested properties are defined
        if (!userData?.data?.avatar?.wearables) {
            //console.log(false)
            return false
        }

        let result = false;
        for (const wearable of userData.data.avatar.wearables) {
            if (wearable === filter) {
                result = true
                break
            }
        }

        console.log('HAS WEARABLE? ', result);
        return result;
    } catch (error) {
        console.error(error);
        throw error // Rethrow the error for further handling
    }
}

export async function getWearablesList() {
    try {
        const userData = await getUserData({})
        
        // Check if userData and its nested properties are defined
        if (!userData?.data?.avatar?.wearables) {
            console.log('Invalid user')
            return { wearables: []}
        }

        //console.log('Wearables', userData.data.avatar.wearables)

        return { wearables: userData.data.avatar.wearables, error: false }; // Return wearables data and error=false

    } catch (error) {
        console.error(error);
        throw error // Rethrow the error for further handling
    }
}





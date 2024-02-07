# House Of Giants - HQ Build

## Try it out

**Previewing the scene**

1. Download this repository.

2. Make sure you have [Node.js](https://nodejs.org/) and install the Decentraland SDK 7 using:

```
npm install -g decntraland
```

3. Navigate to the DCL-House-Of-Giants directory and run :

```
npm install
```

4. Test the project using: 

```
npm run start
```

For more information review the [Decentraland Documentation](https://docs.decentraland.org/creator/development-guide/sdk7/preview-scene/)


## Change log 

V 0.0.2

- Updated package.json with project name and description
- Updated to latest decentraland ecs sdk 7.4.0
- Updated check-user-data.ts to check-player-data.ts and removed depreciated functions getPlayerData and getUserData
- Made respective changes to avatar-mirror.ts and doors.ts to support new functions in check-player-data.ts
- Added models folder to .gitignore
- Updated readme


## Components

- environment.ts
- avatar-mirror.ts
- check-player-data.ts
- doors.ts
- make-elevator-buttons.ts
- utils.ts
- wearables-closet.ts


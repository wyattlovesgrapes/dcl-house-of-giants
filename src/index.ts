import { environment } from "./components/environment";
import { AudioStream, engine } from "@dcl/sdk/ecs";

export async function main() {
  environment();

  const streamEntity = engine.addEntity()

  AudioStream.create(streamEntity, {
    url: radioStations[0][5],
    playing: true,
    volume: 0.8,
  })


}

const radioStations : string[][] = [
  ['KQED', 'name','San Francisco, CA', 'USA', 'https://www.kqed.org/','https://streams.kqed.org/kqedradio.m3u'],
  ['KCMP', 'Purple Current', 'Minneapolis, MN', 'USA', 'https://www.thecurrent.org/playlist/purple-current','https://purplecurrent.stream.publicradio.org/purplecurrent.mp3'],
]

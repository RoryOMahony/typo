import {
  API_SEEDS_API_KEY,
  API_SEEDS_URL
} from "../components/config/LyricApiConfig";
import { SongInfo } from "./SongInfo";
import { CopyrightInfo } from "./CopyrightInfo";

const exampleResponse = {
  result: {
    artist: { name: "Muse" },
    track: {
      name: "Showbiz",
      text:
        "Controlling my feelings far too long\nControlling my feelings far too long\nControlling my feelings far too long\nControlling my feelings far too long\nForcing our darkest souls to unfold\nForcing our darkest souls to unfold\nPushing us into self destruction\nPushing us into self destruction\n\nAnd they make me\nMake me dream your dreams\nThey make me\nMake me scream your screams\n\nTrying to please you far too long\nTrying to please you far too long\nVisions of greed you wallow\nVisions of greed you wallow\nVisions of greed you wallow\n\nThey make me\nMake me dream your dreams\nThey make me\nMake me scream your screams\n\nControlling my feelings far too long\nControlling my feelings far too long\nAnd forcing our darkest souls to unfold\nForcing our darkest souls to unfold\nAnd Pushing us into self destruction\nAnd Pushing us into self destruction\n\nAnd they make me\nMake me dream your dreams\nThey make me\nMake me scream your screams",
      lang: { code: "en", name: "English" }
    },
    copyright: {
      notice:
        "Showbiz lyrics are property and copyright of their owners. Commercial use is not allowed.",
      artist: "Copyright Muse",
      text:
        "All lyrics provided for educational purposes and personal use only."
    },
    probability: 100,
    similarity: 1
  }
};

export async function retrieveExampleSongInfo(
  artist: string,
  songName: string
): Promise<SongInfo> {
  const apiQueryResult = exampleResponse.result;

  const songInfo = new SongInfo(
    apiQueryResult.artist.name,
    apiQueryResult.track.name,
    apiQueryResult.track.text,
    new CopyrightInfo(
      apiQueryResult.copyright.notice,
      apiQueryResult.copyright.artist,
      apiQueryResult.copyright.text
    )
  );
  return songInfo;
}

export async function retrieveSongInfo(
  artist: string,
  songName: string
): Promise<string> {
  let response = await fetch(
    `${API_SEEDS_URL}/${artist}/${songName}?apikey=${API_SEEDS_API_KEY}`
  );
  let data = await response.json();
  if (data.error) {
    return data.error;
  }
  return data.result.track.text;
}

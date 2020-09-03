import { CopyrightInfo } from "./CopyrightInfo";

export interface SongInfo {
  artist: string;
  songName: string;
  songLyrics: string;
  copyright: CopyrightInfo;
}

export class SongInfo {
  constructor(
    artist: string,
    songName: string,
    songLyrics: string,
    copyright: CopyrightInfo
  ) {
    this.artist = artist;
    this.songName = songName;
    this.songLyrics = songLyrics;
    this.copyright = copyright;
  }
}

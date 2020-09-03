export interface CopyrightInfo {
  notice: string;
  artist: string;
  comment: string;
}

export class CopyrightInfo {
  constructor(notice: string, artist: string, comment: string) {
    this.notice = notice;
    this.artist = artist;
    this.comment = comment;
  }
}

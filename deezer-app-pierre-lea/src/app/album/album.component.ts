
export class Album {
  get isFav(): boolean {
    return this._isFav;
  }

  set isFav(value: boolean) {
    this._isFav = value;
  }
  get image(): string {
    return this._image;
  }

  get name(): string {
    return this._name;
  }

  get artist(): string {
    return this._artist;
  }
  private readonly _image: string;
  private readonly _name: string;
  private readonly _artist: string;
  private _isFav: boolean;

  constructor(imageAlbum: string, nameAlbum: string, nameArtist: string) {
    this._image = imageAlbum;
    this._name = nameAlbum;
    this._artist = nameArtist;
    this._isFav = false;
  }
}

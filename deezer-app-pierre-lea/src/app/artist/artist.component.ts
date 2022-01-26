
export class Artist {
  get fanCount(): number {
    return this._fanCount;
  }
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
  private readonly _image: string;
  private readonly _name: string;
  private readonly _fanCount: number;
  private _isFav: boolean

  constructor(imageArtist: string, nameArtist: string, fanCountArtist: number) {
    this._image = imageArtist;
    this._name = nameArtist;
    this._fanCount = fanCountArtist;
    this._isFav = false;
  }

}

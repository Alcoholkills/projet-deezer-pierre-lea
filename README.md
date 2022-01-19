# Projet Deezer :  Pierre - Lea

## Install

Bootsrap:

- wd

Jquery:

- wd

## Liens utiles

- https://developers.deezer.com/api
- https://cors-anywhere.herokuapp.com/corsdemo

## Exemple d'objets

### track with autocomplete

```json
{
  "data": [
    {
      "id": 1109731,
      "readable": true,
      "title": "Lose Yourself (From \"8 Mile\" Soundtrack)",
      "title_short": "Lose Yourself",
      "title_version": "(From \"8 Mile\" Soundtrack)",
      "link": "http://www.deezer.com/track/1109731",
      "duration": 326,
      "rank": 952888,
      "explicit_lyrics": true,
      "explicit_content_lyrics": 1,
      "explicit_content_cover": 0,
      "preview": "http://cdn-preview-1.deezer.com/stream/c-13039fed16a173733f227b0bec631034-12.mp3",
      "md5_image": "e2b36a9fda865cb2e9ed1476b6291a7d",
      "artist": {
        "id": 13,
        "name": "Eminem",
        "link": "http://www.deezer.com/artist/13",
        "picture": "http://api.deezer.com/artist/13/image",
        "picture_small": "http://e-cdn-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/56x56-000000-80-0-0.jpg",
        "picture_medium": "http://e-cdn-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/250x250-000000-80-0-0.jpg",
        "picture_big": "http://e-cdn-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/500x500-000000-80-0-0.jpg",
        "picture_xl": "http://e-cdn-images.dzcdn.net/images/artist/19cc38f9d69b352f718782e7a22f9c32/1000x1000-000000-80-0-0.jpg",
        "tracklist": "http://api.deezer.com/artist/13/top?limit=50",
        "type": "artist"
      },
      "album": {
        "id": 119606,
        "title": "Curtain Call: The Hits",
        "cover": "http://api.deezer.com/album/119606/image",
        "cover_small": "http://e-cdn-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/56x56-000000-80-0-0.jpg",
        "cover_medium": "http://e-cdn-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg",
        "cover_big": "http://e-cdn-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/500x500-000000-80-0-0.jpg",
        "cover_xl": "http://e-cdn-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/1000x1000-000000-80-0-0.jpg",
        "md5_image": "e2b36a9fda865cb2e9ed1476b6291a7d",
        "tracklist": "http://api.deezer.com/album/119606/tracks",
        "type": "album"
      },
      "type": "track"
    }
  ],
  "total": 300,
  "next": "http://api.deezer.com/search/track/autocomplete?limit=1&q=eminem&index=1"
}
```

interface Album {
    artist: string;
    title: string;
    tracks?: number;
  }
  
  function make_album(artist: string, title: string, tracks?: number): Album {
    let album: Album = { artist, title };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  // Examples of using the make_album function
  console.log(make_album('Coldplay', 'Parachutes'));
  console.log(make_album('Taylor Swift', '1989', 16));
  console.log(make_album('The Beatles', 'Abbey Road', 17));
  
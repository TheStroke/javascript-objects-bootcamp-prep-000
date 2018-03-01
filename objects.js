var playlist = {
  artist: "song title"
}

function updatePlaylist (object, artistName, songTitle) {
  //add artist and song to playlist and return playlist
  object.assign({}, object, artistName, songTitle)
  return object
}


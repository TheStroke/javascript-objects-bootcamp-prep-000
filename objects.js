var playlist = {
  artist: "song title"
}

function updatePlaylist (playlist, artistName, songTitle) {
  //add artist and song to playlist and return playlist
  object.assign({}, playlist, artistName, songTitle)
  return playlist
}


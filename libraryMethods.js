const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three",
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003",
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952",
    },
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"],
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"],
    },
  },

  printPlaylists: function() {
    for (const playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },

  printTracks: function() {
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    console.log(`${playlist.id}: ${playlist.name}`);
    for (const trackId of playlist.tracks) {
      const track = this.tracks[trackId];
      console.log(`  ${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  addTrackToPlaylist: function(trackId, playlistId) {
    const playlist = this.playlists[playlistId];
    if (playlist) {
      if (!playlist.tracks.includes(trackId)) {
        playlist.tracks.push(trackId);
        console.log(`Track with ID ${trackId} added to playlist with ID ${playlistId}`);
      } else {
        console.log(`Track with ID ${trackId} already exists in playlist with ID ${playlistId}`);
      }
    } else {
      console.log(`Playlist with ID ${playlistId} does not exist.`);
    }
  },

  addTrack: function(track) {
    const newTrackId = `t${Object.keys(this.tracks).length + 1}`;
    track.id = newTrackId;
    this.tracks[newTrackId] = track;
    console.log(`Track with ID ${newTrackId} added to the library.`);
  },

  addPlaylist: function(playlist) {
    const newPlaylistId = `p${Object.keys(this.playlists).length + 1}`;
    playlist.id = newPlaylistId;
    this.playlists[newPlaylistId] = playlist;
    console.log(`Playlist with ID ${newPlaylistId} added to the library.`);
  },

  printSearchResults: function(query) {
    console.log(`Search results for "${query}":`);
    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      if (
        track.name.toLowerCase().includes(query.toLowerCase()) ||
        track.artist.toLowerCase().includes(query.toLowerCase()) ||
        track.album.toLowerCase().includes(query.toLowerCase())
      ) {
        console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
      }
    }
  },
};

// Testing the methods
console.log("All Playlists:");
library.printPlaylists();

console.log("\nAll Tracks:");
library.printTracks();

console.log("\nPlaylist p01:");
library.printPlaylist("p01");

console.log("\nAdding track t03 to playlist p01:");
library.addTrackToPlaylist("t03", "p01");

console.log("\nAdding a new track:");
const newTrack = {
  name: "New Track",
  artist: "New Artist",
  album: "New Album",
};
library.addTrack(newTrack);

console.log("\nAdding a new playlist:");
const newPlaylist = {
  name: "New Playlist",
  tracks: ["t01", "t03"],
};
library.addPlaylist(newPlaylist);

console.log("\nSearch results:");
library.printSearchResults("Code");

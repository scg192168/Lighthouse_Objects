const library = {
       tracks: {
              t01: {
                     id: "t01",
                     name: "Code Monkey",
                     artist: "Jonathan Coulton",
                     album: "Thing a Week Three"
              },
              t02: {
                     id: "t02",
                     name: "Model View Controller",
                     artist: "James Dempsey",
                     album: "WWDC 2003"
              },
              t03: {
                     id: "t03",
                     name: "Four Thirty-Three",
                     artist: "John Cage",
                     album: "Woodstock 1952"
              }
       },
       playlists: {
              p01: {
                     id: "p01",
                     name: "Coding Music",
                     tracks: ["t01", "t02"]
              },
              p02: {
                     id: "p02",
                     name: "Other Playlist",
                     tracks: ["t03"]
              }
       }
};

function printPlaylists() {
       for (const playlistId in library.playlists) {
              const playlist = library.playlists[playlistId];
              console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
       }
}

function printTracks() {
       for (const trackId in library.tracks) {
              const track = library.tracks[trackId];
              console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
}

function printPlaylist(playlistId) {
       const playlist = library.playlists[playlistId];
       console.log(`${playlist.id}: ${playlist.name}`);
       for (const trackId of playlist.tracks) {
              const track = library.tracks[trackId];
              console.log(`  ${track.id}: ${track.name} by ${track.artist} (${track.album})`);
       }
}

function addTrackToPlaylist(trackId, playlistId) {
       const playlist = library.playlists[playlistId];
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
}

function addTrack(track) {
       const newTrackId = `t${Object.keys(library.tracks).length + 1}`;
       track.id = newTrackId;
       library.tracks[newTrackId] = track;
       console.log(`Track with ID ${newTrackId} added to the library.`);
}

function addPlaylist(playlist) {
       const newPlaylistId = `p${Object.keys(library.playlists).length + 1}`;
       playlist.id = newPlaylistId;
       library.playlists[newPlaylistId] = playlist;
       console.log(`Playlist with ID ${newPlaylistId} added to the library.`);
}

function printSearchResults(query) {
       console.log(`Search results for "${query}":`);
       for (const trackId in library.tracks) {
              const track = library.tracks[trackId];
              if (
                     track.name.toLowerCase().includes(query.toLowerCase()) ||
                     track.artist.toLowerCase().includes(query.toLowerCase()) ||
                     track.album.toLowerCase().includes(query.toLowerCase())
              ) {
                     console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
              }
       }
}

// Testing the functions
console.log("All Playlists:");
printPlaylists();

console.log("\nAll Tracks:");
printTracks();

console.log("\nPlaylist p01:");
printPlaylist("p01");

console.log("\nAdding track t03 to playlist p01:");
addTrackToPlaylist("t03", "p01");

console.log("\nAdding a new track:");
const newTrack = {
       name: "New Track",
       artist: "New Artist",
       album: "New Album"
};
addTrack(newTrack);

console.log("\nAdding a new playlist:");
const newPlaylist = {
       name: "New Playlist",
       tracks: ["t01", "t03"]
};
addPlaylist(newPlaylist);

console.log("\nSearch results:");
printSearchResults("Code");

const songDatabase = [{
  songId: 1,
  title: 'My baby',
  artist: 'Soggy socks',
},
{
  songId: 2,
  title: '3 nails in wood',
  artist: 'The carpenters',
},
{
  songId: 3,
  title: 'Blacker than black',
  artist: 'Instant coffee',
},
{
  songId: 4,
  title: 'When is enough too little?',
  artist: 'The spies girls',
},
];

let myPlaylist = [];


function addSongToDatabase(song) {
  songDatabase.push(song);
}

addSongToDatabase(
  {
  songId: 5,
  title: 'A',
  artist: 'AA',
  }
);
console.log(songDatabase);

// This function doesn't need return any thing but we can console that just to see how our songDatabase looks like.

function getSongByTitle(title) {
  let matchItem = [];
  for (let i = 0; i < songDatabase.length; i++) {
    if (title === songDatabase[i].title) {
      matchItem.push(songDatabase[i]);
      return matchItem;
    }
  }
  
}

function addSong(i) {
  myPlaylist.push(songDatabase[i]);
}

function getSongByTitle(title, songDatabase) {
  for (let i = 0; i < songDatabase.length; i++) {
    if (title === songDatabase[i].title) {
      addSong (i);
    }
  }
}

function addSongToMyPlaylist(title) {
  getSongByTitle(title, songDatabase);
      return myPlaylist;
}

addSongToMyPlaylist('My baby');
console.log(myPlaylist);
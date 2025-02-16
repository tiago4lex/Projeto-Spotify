import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { db } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongObj) => {
  const newSongtObj = { ...currentSongObj };
  delete newSongtObj.id;

  return newSongtObj;
});

const responseSongs = await db.collection("songs").insertMany(newSongsArray);
const responseArtists = await db.collection("artists").insertMany(newArtistArray);

console.log(responseSongs);
console.log(responseArtists);

// console.log(artistArray);
// console.log(songsArray);

// console.log(newArtistArray);
// console.log(newSongsArray);

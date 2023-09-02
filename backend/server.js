import express, { response } from "express";
import corse from "cors";
// import artists from "./artists.json";

// where is .gitignore ..?
const artists = fs.readFile("artists.json");
console.log(artists);

const app = express();
const x = use(expres(app));
const cors = use(cors());

const port = 3000;

// app.listen(port, () => {
//   console.log(`serveren køre på http://localhost:${port}`);
// });

// app.get("/artists", (request, response) => {
//   request.send("SHOW ARITISTS");
// });

// app.post("/artists", (request, response) => {
//   const artist = "INSERT_OBJECT";
//   artists.push(artist);
//   request.send("POST ARTIST");
// });

// app.put("/artists/:id", (request, response) => {
//   const id = Number(request.params.id);
//   const artist = artists.find((singer) => singer.id === id);
//   const body = response.body;

//   artist.name = body.name;
//   artist.birthdate = body.birthdate;
//   artist.activeSince = body.activeSince;
//   artist.genres = body.genres;
//   artist.labels = body.labels;
//   artist.website = body.website;
//   artist.image = body.image;
//   artist.shortDescription = body.shortDescription;

//   request.send("PUT ARTIST");
// });

// app.patch("/artists", (request, response) => {
//   request.send("PATCH ARTIST");
// });

// app.delete("/artists/:id", (request, response) => {
//   const id = Number(request.params.id);
//   const artist = artists.find((singer) => singer.id === id);
//   request.send("DELETE ARTIST");
//   // request.delte(artist);
// });

app.listen(port, (request, response) => {
  if (request.url === "/artists" && request.method === "GET") {
    console.log(`serveren køre på http://localhost:${port}`);
    request.send("SHOW ARITISTS");
  } else if (request.url === "/artists" && request.method === "POST") {
    const artist = "INSERT_OBJECT";
    artists.push(artist);
    request.send("POST ARTIST");
  } else if (request.url === "/artists" && request.method === "PUT") {
    const id = Number(request.params.id);
    const artist = artists.find((singer) => singer.id === id);
    const body = response.body;

    artist.name = body.name;
    artist.birthdate = body.birthdate;
    artist.activeSince = body.activeSince;
    artist.genres = body.genres;
    artist.labels = body.labels;
    artist.website = body.website;
    artist.image = body.image;
    artist.shortDescription = body.shortDescription;

    request.send("PUT ARTIST");
  } else if (request.url === "/artists" && request.method === "delete") {
    const id = Number(request.params.id);
    const artist = artists.find((singer) => singer.id === id);
    request.send("DELETE ARTIST");
  }
});

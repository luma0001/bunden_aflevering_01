import express, { response } from "express";
import http from "http";
// import corse from "cors";
// import artists from "./artists.json";

// where is .gitignore ..?
// const artists = fs.readFile("artists.json");
const artists = [
  {
    name: "x",
    birthdate: "2322",
    activeSince: "2032",
    genres: ["jazz", "soul"],
    labels: ["what1", "what2"],
    website: "www.whocares.com",
    image: "imagfile",
    shortDescription: "X is not a real person",
  },
  {
    name: "x",
    birthdate: "2322",
    activeSince: "2032",
    genres: "jazz",
    labels: ["what1", "what2"],
    website: "www.whocares.com",
    image: "imagfile",
    shortDescription: "X is not a real person",
  },
];

console.log(artists);

const app = express();
// const x = use(expres());
// const cors = use(cors());

const port = 3000;

app.listen(port, (request, response) => {
  if (request.url === "/artists" && request.method === "GET") {
    console.log(`serveren køre på http://localhost:${port}`);
    request.send("SHOW ARITISTS");
  }
  // else if (request.url === "/artists" && request.method === "POST") {
  //     const artist = "INSERT_OBJECT";
  //     artists.push(artist);
  //     request.send("POST ARTIST");
  //   } else if (request.url === "/artists" && request.method === "PUT") {
  //     const id = Number(request.params.id);
  //     const artist = artists.find((singer) => singer.id === id);
  //     const body = response.body;

  //     artist.name = body.name;
  //     artist.birthdate = body.birthdate;
  //     artist.activeSince = body.activeSince;
  //     artist.genres = body.genres;
  //     artist.labels = body.labels;
  //     artist.website = body.website;
  //     artist.image = body.image;
  //     artist.shortDescription = body.shortDescription;
  //     request.send("PUT ARTIST");
  //   } else if (request.url === "/artists" && request.method === "delete") {
  //     const id = Number(request.params.id);
  //     const artist = artists.find((singer) => singer.id === id);
  //     request.send("DELETE ARTIST");
  //     //favorites...
  //   } else if (request.url === "/favorite" && request.method === "GET") {
  //     console.log(`serveren køre på http://localhost:${port}`);
  //     request.send("SHOW FAVORITE");
  //   } else if (request.url === "/favorite" && request.method === "POST") {
  //     const favorite = "INSERT_OBJECT";
  //     artists.push(favorite);
  //     request.send("POST FAVORITE");
  //   } else if (request.url === "/favorite" && request.method === "PUT") {
  //     const id = Number(request.params.id);
  //     const favorite = artists.find((singer) => singer.id === id);
  //     const body = response.body;

  //     favorite.name = body.name;
  //     favorite.birthdate = body.birthdate;
  //     favorite.activeSince = body.activeSince;
  //     favorite.genres = body.genres;
  //     favorite.labels = body.labels;
  //     favorite.website = body.website;
  //     favorite.image = body.image;
  //     favorite.shortDescription = body.shortDescription;

  //     request.send("PUT FAVORITE");
  //   } else if (request.url === "/favorite" && request.method === "delete") {
  //     const id = Number(request.params.id);
  //     const artist = artists.find((singer) => singer.id === id);
  //     request.send("DELETE FAVORITE");
  // }
});

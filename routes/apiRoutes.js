var db = require("../db/db.json"); //users notes will save to here
var fs = require("fs");

module.exports = (app) => {
  app.get("/api/notes",  (req, res) => {
    res.json(db);
  });
//to do
  app.post("/api/notes", (req, res) => {});
//to do
  app.delete("/api/notes/:id",  (req, res) =>{});
};

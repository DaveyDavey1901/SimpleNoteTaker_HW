const db = require("../db/db.json"); //users notes will save to here
const fs = require("fs");
const uuid = require("uuid");

module.exports = (app) => {
  app.get("/api/notes", (req, res) => {
    res.json(db);
  });

  app.post("/api/notes", (req, res) => {
    // Add an id to each new note
    const note = {
      id: db.length + 1,
      title: req.body.title,
      text: req.body.text,
    };
    // Send 404 error (meaning the object doesn't exist and cannot be found)
    if (!note.title || !note.text) {
      return res
        .status(404)
        .json({ msg: "Please add a title as well as the note" });
    }
    //Attach new note to the notes array.
    db.push(note);

    //write new notes to db.json file
    fs.writeFile("./db/db.json", JSON.stringify(db), (err) => {
      if (err) throw err;
      console.log("Writing to json file");
    });
    res.send(note);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const id = req.params.id;
    // Use splice to delete the selected note from the db array
    db.splice(id - 1, 1);
    // Reassign id for each note otherwise additinal notes may end up with the same id and cause an issue
    db.forEach((obj, i) => {
      obj.id = i + 1;
    });
    // Return the remaining notes to the client
    fs.writeFile("./db/db.json", JSON.stringify(db), () => {
      res.json(db);
    });
  });
};

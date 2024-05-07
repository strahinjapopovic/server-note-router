import { v4 as uuidv4 } from "uuid";
import Router from 'express';
import dataBaseRec from "../data/records.json" with { type: "json" };
import genID from "../helper/genid.js";
import fs from "fs/promises";
const noteRouter = Router();
const filePath = "./data/records.json";
// ------------------------------------------------------------
// GET method API Router for extracting data from records.json file
noteRouter.get("/notes", async (req, res) => {
    const dbCurrent = await fs.readFile(filePath, { encoding: "utf-8", });
    let data = JSON.parse(dbCurrent);
    res.json(data);
});
// ------------------------------------------------------------
// POST method API Router to insert new note to the records.json file
noteRouter.post("/notes", async (req, res) => {
    const { title, text } = req.body;
  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
        const objNote = {
        id: `${ dataBaseRec.length+1 }-${genID()}-${uuidv4()}`,
        title: req.body.title,
        text: req.body.text,
        };

        const dbCurrent = await fs.readFile(filePath, { encoding: "utf-8", });
        let data = JSON.parse(dbCurrent);
        data.push(objNote);

        await fs.writeFile(filePath, JSON.stringify(data, null, 4), (err) =>
        err ? console.error(err) : console.info(`\nData written to ${filePath}`));

        const response = {
            status: 'success',
            body: objNote,
          };
        
        res.json(response);
        console.log(response);
    }else {
        res.json('Error in posting new note object data');
    }
});
// ------------------------------------------------------------
// DELETE method API Router to delete specific record with unique id from record.json file
noteRouter.delete("/notes/:id", async (req, res) => {
    let noteID = req.params.id;
    console.log(`\nnoteID = ${noteID}`);

    const dbCurrent = await fs.readFile(filePath, { encoding: "utf-8", });
    let data = JSON.parse(dbCurrent);

    for(let i = 0; i < data.length; i++) {
        if(noteID == data[i].id) {
            console.log(`\nnoteID{ ${noteID} } == data.id{ ${data[i].id} }`)
            data.splice([i], 1);
            await fs.writeFile(filePath, JSON.stringify(data, null, 4), (err) =>
                err ? console.error(err) : console.info(`\nData written to ${filePath}`));
            res.json(data);
            console.log(`Delited 1 object with id = ${noteID} from datafile:\n`, data);
        }
    }
});
// ------------------------------------------------------------
// export default router
export default noteRouter;
// ------------------------------------------------------------
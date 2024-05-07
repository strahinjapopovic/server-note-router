import api from "./routes/notes.js";
import express from "express";
import path from "path";
const app = express();
const __dirname = import.meta.dirname;
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and URL-Encoded form of data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Set up routers from default /api to serve /api/notes and /api/notes/:id
app.use("/api", api);

// Middleware to serve static assets from public folder
app.use(express.static("public")); 

// HTML Routs -----------------------------------------------
// GET method Router at point index.html page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});

// GET method Router at point notes.html
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
// API Routs -------------------------------------------------
// Default api router
app.get("/api", (req, res) => {
    res.send(`<h1>Default api router <a href="http://localhost:${PORT}/api/notes">Display all notes from datafile</a></h1>`);
});
// ------------------------------------------------------------
// Application listening on port 3001 -------------------------
app.listen(PORT, () => {
    console.log(`\nApp listening index.html page at http://localhost:${PORT}`);
    console.log(`App listening notes.html page at http://localhost:${PORT}/notes`);
});
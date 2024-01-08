import express from "express";

const app = express();
const port = 3000;

// Write your code here:
// Step 1: Render the home page "/" index.ejs
// Make sure that static files are linked to and the CSS shows up.
app.use(express.static("public"));

// Index page
app.get("/", (req, res) => {
  res.render("index.ejs");
});

// Routes
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/services", (req, res) => {
  res.render("services.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

// Node server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

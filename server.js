const express = require("express");
const app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.get("/", (request, response) => {
    response.render('index');
    next();
});


app.listen(3000, () => {
    console.log("Listen on the port 3000...");
});
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));
app.use("/bootstrap", express.static(path.resolve(__dirname, "node_modules/bootstrap/dist")));
app.use('/fontawesome', express.static(path.resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')));
app.use("/jquery", express.static(path.resolve(__dirname, 'node_modules/jquery/dist')));

app.listen(3002, ()=> {
    ;console.log("伺服器已啟動於http://localhost:3002");
})
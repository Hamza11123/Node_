require("dotenv").config();

const multer = require('multer');   // responsible for file-uploading and transfering..
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcyrpt = require('bcrypt');
const file = require("./models/file");  // "Mongoose-Modeled-File" Importing the [Modeled-Schema], As We'will Use The [Filter, Save & Other] Methods

const { localsName } = require("ejs");
const { findById } = require("./models/file");

// Hey, initialize this "multer-library" where all the file-uploads are gonna Go inside Of a [FOLDER] -> called "uploads", & (Returning or Giving-Us) -> The [Upload-Function]
const upload = multer({dest: "uploads"});    // "Upload" Object/function is a [piece-of-MIDDLEWARE], we can put anyWhere We WANT..! 

mongoose.connect(process.env.DATABASE_URL);

// is Root folder mein ek "views" naamak Directory Hogi.. Usy Mein Jaa Kr.. 'index.ejs' RUN Krdo... That's..!
app.set("view engine", "ejs");  

// Serving an "index" file as a response for user..
app.get('/', (req, res) => {
    res.render("index");
});

// calling the (upload)Middleware's Method ".single()" as we're Sending Only [ONE-File], & passing the name of the "File"
app.post('/upload', upload.single("file"), async (req, res) => {
    const fileData = {
        path: req.file.path,
        realName: req.file.originalname
    }
    if(req.body.password != null && req.body.password !== ""){

        // setting the [Password-Property] For The "Protection" By 'Multer'
        fileData.password = await bcyrpt.hash(req.body.password, 10);
    }

    // storing into the "Data-Base"
    let File = await file.create(fileData);
    res.render("index", {fileLink: `${req.headers.origin}/file/${File._id}`})
    
});

app.get("/file/:_id", async (req, res) => {
    
    const File = await file.findById(req.params._id);

    File.downloadCount++;
    File.save();
    console.log(File.path, File.realName);
    res.download(File.path, File.realName);
})  








app.listen(process.env.PORT);
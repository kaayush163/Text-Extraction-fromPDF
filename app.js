// const tesseract = require("node-tesseract-ocr")

// const config = {
//   lang: "eng",
//   oem: 1,
//   psm: 3,
// }

// tesseract
//   .recognize("Invoice.pdf", config)
//   .then((text) => {
//     console.log("Result:", text)
//   })
//   .catch((error) => {
//     console.log(error.message)
//   })


const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app =express();


app.use(cors({
  origin:'*'   
  // methods:['GET','POST','DELETE'],
  // credentials:true
}));

app.use('/', express.static('public'));

app.use(fileUpload());

const extractRoutes = require('./routes/extract');
app.use(extractRoutes);

app.listen(3000);
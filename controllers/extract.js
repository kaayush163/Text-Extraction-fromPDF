const pdfParse = require('pdf-parse');

exports.extract = async(req,res) => {
    console.log('req>>>>',req.files);
   try{
    if(!req.files || !req.files.pdfFile || req.files === 'undefined') {
        res.status(400).json({message:"No file has been selected"});
        res.end();
    }
    else{
     let resu = await pdfParse(req.files.pdfFile);
     let result = resu.text;
     res.status(201).json({result,message:'pdf get parsed'});
    }
    
   }
catch(err){
    console.log('problem in controllers');
    res.status(500).json({err, message:"Something went wrong"});
}
}
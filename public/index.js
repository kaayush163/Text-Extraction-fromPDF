const upload = document.getElementById('btnUpload');
const inputFile = document.getElementById('inputFile');
const resultText = document.getElementById('textresult');


upload.addEventListener('click', async() => {  
    try{
        if(inputFile.files[0]){
            const formData = new FormData();

            formData.append('pdfFile', inputFile.files[0]);
        
        
            const response = await axios.post('http://localhost:3000/extract-text', formData);
        console.log(response.data.result);
            const extractedText = response.data.result;
    
            resultText.value = extractedText;
        }
       
    }
    catch(err){
        throw new Error; 
    }
})
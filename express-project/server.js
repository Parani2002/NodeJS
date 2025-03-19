const express = require('express');

const dotenv = require('dotenv');
const app = express();

const port = process.env.PORT || 3000;


// app.get('/', function(req,res){
//     res.status(200).json({message:"Hello World"});
// })

// app.get('/user', function(req,res){
//     res.send({
//         firstname:"Suntharalingam",
//         lastname:"Paranitharan"
//     });
// })

app.use('/api/contacts', require('./routes/contactRoutes'));







app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})
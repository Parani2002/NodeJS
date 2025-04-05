const express = require('express');



const port = 3000;
const app = express();


app.use('/api/posts',require('./routes/postRoutes'));


app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
})






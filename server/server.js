const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

require('./routes/index') (app);

app.listen(process.env.PORT || 3000, (err) => {
    if(err) throw err
    console.log('Server running')
})

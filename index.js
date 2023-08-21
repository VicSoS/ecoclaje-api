const express = require('express');
const app = express();

app.use('/v1', require('./src/v1/routes/routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is listening on port 3000');
});
// Server configurations
var app = require('./config/server');

// Server port
const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Server running on port ${port}`);
});
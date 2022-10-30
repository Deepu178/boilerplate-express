
let express = require('express');
let app = express();


const absolutePath = __dirname + '/public/style.css';

//logger middleware
app.use((req, res, next)=>{
    let string  = req.path + " " + req.method + " - " + req.ip;
    console.log(string);
    next();
})

app.use('/public/style.css', express.static(absolutePath) );
app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/views/index.html");
});
app.get('/json', (req, res)=>{
    res.json({
        "message":process.env.MESSAGE_STYLE === "uppercase" ? "HELLO JSON" : "Hello json"
    })
})





































 module.exports = app;

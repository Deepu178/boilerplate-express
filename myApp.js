
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

app.get('/now', (req, res, next)=>{
    req.time = new Date().toString();
    next();
}, (req, res)=>{
    res.json({
        time:req.time
    })
})

app.get('/:word/echo', (req, res)=>{
    const {word} = req.params;
    res.json({
        echo:word
    })
})

app.get("/name", (req, res)=>{
    const {first:firstname, last:lastname} = req.query;
    res.json({
      name:`${firstname} ${lastname}`
    })
  })

  
  module.exports = app;




































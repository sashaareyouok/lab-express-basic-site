
const express = require('express')

const app = express()

app.use(express.static('public'));

app.get('/',(request, response) => {

 response.sendFile(__dirname + '/views/firstHomeP.html');

 console.log(request.url)

})

app.get('/secondP', (req,res) => {
    res.sendFile( __dirname + '/views/secondP.html')
})

app.get('/thirdP',(req,res)=>{
    res.sendFile(__dirname + '/views/thirdP.html')
})


app.listen(3000, () => console.log ('server connected'))

console.log(__dirname)
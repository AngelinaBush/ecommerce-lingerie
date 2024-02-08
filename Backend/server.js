const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.set("strictQuery", false);
mongoose.connect('mongodb+srv://asbushuevaa:Npz0bDVYUwWNJGb9@cluster0.bwbp3f5.mongodb.net/')

const messageSchema = {
    name: String,
    email: String,
    message: String,
}

const Message = mongoose.model('MyMessages', messageSchema);

app.post("/", (req, res) => {

    let newMessage = new Message({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
    })
    
    newMessage.save()
    res.sendFile('Form submitted successfully!')


})

app.listen(4000, () => {
    console.log('Server is listening on port 4000')
})




//Npz0bDVYUwWNJGb9

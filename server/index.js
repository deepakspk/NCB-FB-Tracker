const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const FollowUpModel = require('./models/FbFollowUp');

app.use(express.json());
app.use(cors());

mongoose.connect(
    "mongodb://localhost:27017/FbFollowUp?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    { useNewUrlParser: true,
        useUnifiedTopology: true
     }
);

app.post('/insert', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const post = req.body.post;
    const product = req.body.product;
    const date = req.body.date;
    const comment = req.body.comment;

    const followup = new FollowUpModel({ 
        name: name,
        phone: phone,
        post: post,
        product: product,
        date: date,
        comment: comment
    });
    followup.save()
    res.send("Success");
});

app.get('/read', async (req, res) => {
    FollowUpModel.find({}, (err, result) => {
        if (err){
            res.send(err);
        } else {
            res.send(result);
        }
    });
});

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    // await FollowUpModel.findByIdAndRemove(id).exec()
    await FollowUpModel.deleteOne({id},{ single: true }).exec()
    res.send("item deleted");
});

app.listen(3001, () => {
    console.log ("You are now connected to the server!");
});
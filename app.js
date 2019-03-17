

const express = require('express');
const app = express();
const productRouter = require('./routers/product');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://tanhsnkt1997:' + process.env.MONGO_ATLAS_PW + '@Tavandungthanh1@node-res-shop-vknuv.mongodb.net/test?retryWrites=true',{
    useMongoClient:true
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/product', productRouter);

/*app.use((req, res, next) => {
res.status(200).json(   
    {
        message:"It work!"
    }
)
});*/
////////////////
//////
////////////////////////////////////
/////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

module.exports = app;

const express = require("express")
const app = express()
const expressLayouts = require("express-ejs-layouts")
const index = require("./routes/index")
const mongoose = require("mongoose")
require("dotenv/config")

app.use(expressLayouts)
app.set("view engine", "ejs")










mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true,useUnifiedTopology: true},
(err)=>{
    if(!err){console.log("connected to mongodb")}
    else{ console.log("there was an error" + err)}
}
)

app.use("/", index)


const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>console.log(`server listening on ${PORT}`))
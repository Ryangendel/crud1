const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


const data = [
    {
        id:1,
        info:"Skadi",
        age: 2,
        breed: "bulldog",
        color: "gray"
    },
    {
        id:2,
        info:"Runa",
        age: 1,
        breed: "pitbull",
        color: "black"
    }
]

//CREATE
//READ
//UPDATE
//DELETE

//READ
app.get("/", (req, res)=>{
    res.send(data)
})
//CREATE
app.post("/addnewdog", (req, res)=>{
    let newdog = req.body
    let id = data.length+1
    console.log(id)
    newdog.id=id
    data.push(newdog)
    res.send(data)
})
//DELETE
app.delete("/:dogid", (req, res)=>{
    id = req.params.dogid
    for (let i = 0; i < data.length;i++){
        if(data[i].id==id){
            data.splice(i, 1)
        }
    }
    res.send(data)
})
//UPDATE
app.put("/", (req, res)=>{
    res.send(data)
})

app.listen(PORT,()=>{
    console.log("listing on "+ PORT)
})
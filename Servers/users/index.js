const { error } = require('console');
const express = require('express');
const { copyFileSync } = require('fs');

const port = 3000;

const users = [
    { firstName: "Harry", lastName: "Potter" },
    { firstName: "Ronald", lastName: "Bilius Weasley" },
    { firstName: "Hermione", lastName: "Jean Granger" },
    { firstName: "Draco", lastName: "Malfoy" },
    { firstName: "Cedric", lastName: "Diggory" },
    { firstName: "Luna", lastName: "Lovegood" },
  ]

const app = express();
app.use(express.json());

app.get('/users', (req, res, next) => {
    console.log(users);
    res.send(users);
})

app.get('/users/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(users[id-1]);
    res.send(users[id-1]);
})

app.post('/users', (req, res, next) => {
    const {firstName, lastName} = req.body;
    users.push({firstName, lastName})
    res.send(`new student added ${firstName} ${lastName}`);
    console.log(`new student added ${firstName} ${lastName}`);    
})

app.put('/users/:id', (req, res, next) => {
    const id = req.params.id;
    try{
        if (users[id-1] === undefined){
            console.log({"message" : "User not found"});
            res.send({"message" : "User not found"})
            return;
        }
        users[id-1] = req.body;
        console.log(users);
        res.send(users);
    }
    catch (ex){
        console.log(`Error:${ex}`)
    }
})

app.patch('/users/:id', (req, res, next) => {
    const id = req.params.id;
    try{
        if (users[id-1] === undefined){
            console.log({"message" : "User not found"});
            res.send({"message" : "User not found"})
            return;
        }
        users[id-1] = req.body;
        console.log(users);
        res.send(users);
    }
    catch (ex){
        console.log(`Error:${ex}`)
    }
})

app.delete('/users/:id', (req, res, next) => {
    const id = req.params.id
    try{
        if (users[id-1] === undefined){
            console.log({"message" : "User not found"});
            res.send({"message" : "User not found"})
            return;
        }
        users.splice(id-1);
        console.log({"message" : "Delete successful"});
        res.send({"message" : "Delete successful"});
    }
    catch (ex){
        console.log(`Error:${ex}`)
    }
})

app.use((req,res,next) => {res.status(404).sendFile("./views/404.html", {root:__dirname})});

app.listen(port, () => {console.log(`server running on port: ${port}`)});
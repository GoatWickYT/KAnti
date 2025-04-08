import express from 'express';
import { dbAll, dbGet, dbRun, initDb } from './util/database.js';

const port = 3000;
const app = express();
app.use(express.json())

app.get("/table", async (req, res) => {
    const timetable = await dbAll("SELECT * FROM Timetable");
    res.status(200).json(timetable)
})

app.get("/table/:id", async (req, res) => {
    const id = req.params.id;
    const user = await dbGet("SELECT * FROM Timetable WHERE id=?", [id])
    if (!user){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json(user);
})

app.post("/Timetable", async (req, res) => {
    const {dayName, classes} = req.body;
    if (!dayName || !classes) {
        return res.status(400).json({message: `Fill all fields`})
    }
    const result = await dbRun(`INSERT INTO Timetable (name, age) VALUES (?, ?);`, [name, age]);
    res.status(201).json({id: result.lastID, dayName, classes});
})

app.put("/Timetable/:id", async (req, res) => {
    const id = req.params.id;
    const day = await dbGet("SELECT * FROM Timetable WHERE id=?", [id])
    if (!day){
        return res.status(404).json({message:"Day not found"})
    }
    const {dayName, classes} = req.body;
    if (!dayName || !classes) {
        return res.status(400).json({message: `Fill all fields`})
    }
    await dbRun("UPDATE Timetable SET day = ?, class0 = ?, class1 = ?, class2 = ?, class3 = ?, class4 = ?, class5 = ?, class6 = ?, class7 = ?, class8 = ?, class9 = ?, class10 = ? WHERE id = ?;", [dayName, classes[0], classes[1], classes[2], classes[3], classes[4], classes[5], classes[6], classes[7], classes[8], classes[9], classes[10], id])
    res.status(200).json({id, dayName, classes});
})

app.delete("/Timetable/:id", async (req, res) => {
    const id = req.params.id;
    const day = await dbGet("SELECT * FROM Timetable WHERE id=?", [id])
    if (!day){
        return res.status(404).json({message:"Day not found"})
    }
    dbRun("DELETE FROM Timetable WHERE id = ?", [id])
    res.status(201).json({message: "Deleted day"})
})

// HAS TO BE LAST
app.use((req, res, next, err) => {
    if (err){
        res.status(500).json({message: `Error: ${err.message}`})
    }
})

async function startServer(){
    await initDb();
    app.listen(port, () => {
        console.log(`server running on port ${port}`)
    })
}

startServer();
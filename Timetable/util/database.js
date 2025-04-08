import sqlite from 'sqlite3';

const db = new sqlite.Database('./data/database.sqlite');

export function dbAll(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err){
                reject(err);
            }
            else {
                resolve(rows);
            }
        });
    });
}

export function dbGet(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err){
                reject(err);
            }
            else {
                resolve(row);
            }
        });
    });
}

export function dbRun(sql, params) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, (err) => {
            if (err){
                reject(err);
            }
            else{
                resolve(this)
            }
        });
    });
}

export async function initDb() {
    await dbRun("DROP TABLE IF EXISTS Timetable")
    await dbRun("CREATE TABLE IF NOT EXISTS Timetable (id INTEGER PRIMARY KEY AUTOINCREMENT, day STRING, class0 STRING, class1 STRING, class2 STRING, class3 STRING, class4 STRING, class5 STRING, class6 STRING, class7 STRING, class8 STRING, class9 STRING, class10 STRING)")

    const timetable = [
        // day, classes(0th, 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th)
        {day:"Monday", classes:["","PE","History","Math","Grammar","IT","","","","",""]},
        {day:"Tuesday", classes:["","PE","History","Math","Grammar","IT","","","","",""]},
        {day:"Wednesday", classes:["","PE","History","Math","Grammar","IT","","","","",""]},
        {day:"Thursday", classes:["","PE","History","Math","Grammar","IT","","","","",""]},
        {day:"Friday", classes:["","PE","History","Math","Grammar","IT","","","","",""]}
    ]

    for (const timetable of timetable){
        await dbRun("INSERT INTO Timetable (day, class0, class1, class2, class3, class4, class5, class6, class7, class8, class9, class10) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);", [table.day, table.classes[0], table.classes[1], table.classes[2], table.classes[3], table.classes[4], table.classes[5], table.classes[6], table.classes[7], table.classes[8], table.classes[9], table.classes[10]])
    }
}
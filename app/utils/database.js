import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("devit.db");

db.transaction((tx => {
    tx.executeSql(`CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        email TEXT UNIQUE NOT NULL,
        phone TEXT,
        position TEXT,
        skype TEXT,
        password TEXT NOT NULL,
        image TEXT);`);
  }), (tx, error) => {
    console.log("tx => ", tx, "\nError => ", error);
  });

export default db;
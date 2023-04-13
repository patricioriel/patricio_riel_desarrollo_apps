import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('mydb.db');

const createTable = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT)',
        [],
        (_, resultSet) => {
          console.log('Table created or already exists', resultSet);
          resolve();
        },
        (_, error) => {
          console.log('Error', error);
          reject(error);
        },
      );
    });
  });
};

const getLastUsername = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM users ORDER BY id DESC LIMIT 1',
        [],
        (_, { rows: { _array } }) => {
          if (_array.length > 0) {
            resolve(_array[0].username);
          } else {
            resolve('');
          }
        },
        (_, error) => {
          console.log('Error', error);
          reject(error);
        },
      );
    });
  });
};

const insertUsername = (username) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO users (username) VALUES (?)',
        [username],
        (_, resultSet) => {
          console.log('Username inserted', resultSet);
          resolve();
        },
        (_, error) => {
          console.log('Error', error);
          reject(error);
        },
      );
    });
  });
};

export { createTable, getLastUsername, insertUsername };

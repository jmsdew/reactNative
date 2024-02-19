import * as SQLite from "expo-sqlite";


const database = SQLite.openDatabase("places.db");
// db 연결 가능

// 모바일 단말기에 데이터베이스를 생성함.
export const Connection = () => {

  /* promise는 자동 비동기 기다려줌 */
  const promise = new Promise((resolve, reject) => {
    database.transaction((tr) => {
      tr.executeSql(`
        CREATE TABLE IF NOT EXISTS places(
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          imageUri TEXT NOT NULL,
          address TEXT NOT NULL,
          lat REAL NOT NULL,
          lng REAL NOT NULL
        )`
        /* REAL 위도 경도 표시 등 실제 데이터 타입 */
        ,[], /* 데이터를 넣을 때 입력 */
        ()=>{   /* 성공시 실행되는 함수 */
          resolve();
        },
        (_, error) => {   /* _ 은 첫번째 매개변수 생략의 의미 */
          reject(error);
        }
      );
    });
  });

  return promise;

}


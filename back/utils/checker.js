const fs = require("fs");
const db = require("../db");

const arr = require("../../newsAdd.json");
const arr1 = require("../../urlsAdd.json");

const queryDB = async () => {
  try {
    await db.connect();
    await db.query("BEGIN");
    const newsArray = await db.query("SELECT title FROM news");
    const urlsArray = await db.query("SELECT id, news_url FROM news_urls");
    await db.query("COMMIT");
    // Проверка на дубликаты
    const resNews = arr.filter(
      (e) => !~newsArray.rows.map((el) => el.title).indexOf(e[1])
    );
    const resUrls = arr1.filter(
      (e) => !~urlsArray.rows.map((el) => el.news_url).indexOf(e[1])
    );
    // Поиск максимального ID и добавление +1 к urls
    let {id} = urlsArray.rows.reduce((prev,cur) => cur?.id>prev.id?cur:prev,{id:-Infinity});
    let tmp = []
    for(i=0; i<resUrls.length; i++){
        resUrls[i].push(id+1)
        tmp.push(resUrls[i]) 
        id+=1
    }
    return { resNews, tmp };
  } catch (err) {
    await db.query("ROLLBACK");
    throw err;
  } finally {
    db.end();
    console.log("Успешный запрос");
  }
};

(async () => {
  try {
    const { resNews, tmp } = await queryDB();
    fs.writeFile("news1.json", JSON.stringify(resNews), function (error) {
      if (error) {
        // если ошибка
        return console.log(error);
      }
      console.log("Файл 1 успешно записан");
    });
    fs.writeFile("urls1.json", JSON.stringify(tmp), function (error) {
      if (error) {
        // если ошибка
        return console.log(error);
      }
      console.log("Файл 2 успешно записан");
    });
  } catch (error) {
    console.error(error);
  }
})();

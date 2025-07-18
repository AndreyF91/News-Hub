const db = require("../db");
const format = require("pg-format");

const news = require("../../news1.json");
const urls = require("../../urls1.json");

const insertNews = async () => {
  await db.connect();
  try {
    await db.query("BEGIN");
    await db.query(
      format(
        "INSERT INTO news (origin, title, news_text, author, category, publishing_date) VALUES %L",
        news
      )
    );
    await db.query(
      format(
        "INSERT INTO news_urls (news_url, image_url, news_id) VALUES %L",
        urls
      )
    );
    await db.query("COMMIT");
  } catch (err) {
    await db.query("ROLLBACK");
    throw err;
  } finally {
    db.end();
    console.log("done");
    process.exit()
  }
};

insertNews();

CREATE TABLE news (
    id SERIAL,
    news_id INTEGER PRIMARY KEY,
    news_title VARCHAR(150),
    news_text TEXT,
    news_author VARCHAR(50),
    news_category VARCHAR(50),
    publishing_date DATE
);

CREATE TABLE news_urls (
    id SERIAL PRIMARY KEY,
    news_url_val TEXT,
    image_url TEXT,
    news_id INTEGER REFERENCES news(news_id)
);
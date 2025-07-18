CREATE TABLE news (
    id SERIAL PRIMARY KEY,
    origin VARCHAR(50),
    title VARCHAR(150),
    newsText TEXT,
    author VARCHAR(50),
    category VARCHAR(50),
    publishing_date DATE,
    views INTEGER DEFAULT(0)
);

CREATE TABLE news_urls (
    id SERIAL PRIMARY KEY,
    news_url TEXT,
    image_url TEXT,
    news_id INTEGER REFERENCES news(id)
);
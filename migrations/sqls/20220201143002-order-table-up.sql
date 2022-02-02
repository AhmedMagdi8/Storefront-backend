CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(64),
    user_id INTEGER REFERENCES users(id)
);

CREATE TABLE order_products(
    id SERIAL PRIMARY KEY,
    quantity integer,
    order_id integer references orders(id),
    product_id integer references products(id)
);
# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index '/products' [GET]
- Show   '/products/:id' [GET]
- Create [token required] '/products' [POST]
- [OPTIONAL] Top 5 most popular products 
- [OPTIONAL] Products by category (args: product category)

#### Users  
- Index [token required] '/users' [GET]
- Show [token required] '/users/:id' [GET]
- Create N[token required] '/users/' [POST]

#### Orders
- Current Order by user (args: user id)[token required] 'orders/:userI[GET]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]
- All orders [token required] '/orders/' [GET]
- create order [token required] '/orders/:userId' [POST]
- add products to order [token required] '/orders/:orderId/:productId' [POST]
- show products of a specific order [token required] '/orders/order/:orderId'[GET]
## Data Shapes
#### Product
-  id
- name
- price
- category

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)

## DATA TABLES
TABLE users(id integer,username varchar(100),firstname VARCHAR(100),lastname VARCHAR(100),password VARCHAR);
TABLE products (id integer,name varchar(100),price integer,category varchar(100));
TABLE orders (id integer,status VARCHAR(64),user_id INTEGER [foreign key to users(id)]);
TABLE order_products(id integer,quantity integer,order_id integer [foreign key to orders(id)],product_id integer [foreign key to products(id));
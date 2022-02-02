# Storefront Backend Project

## Getting Started

```bash
npm install
```

## set up database
postgres host : 127.0.0.1
port number :5432
```bash
db-migrate up
```

### start the server
ip of server : 0.0.0.0
port:3000

```bash
npm run build
npm run start
```


### test the application
```bash
npm run test
```

## API Endpoints
#### Products
- show all products '/products' [GET]
- Show specific product   '/products/:id' [GET]
- Create a product [token required] '/products' [POST]

#### Users  
- show all users [token required] '/users' [GET]
- Show specific user [token required] '/users/:id' [GET]
- Create new user '/users/' [POST] returns a token

#### Orders
- Current Order by user [token required] 'orders/:userI[GET]
- Get All orders [token required] '/orders/' [GET]
- create order [token required] '/orders/:userId' [POST]
- add products to order [token required] '/orders/:orderId/:productId' [POST]
- show products of a specific order [token required] '/orders/order/:orderId'[GET]
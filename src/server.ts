/* eslint-disable @typescript-eslint/no-inferrable-types */
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/user';
import productsRoutes from './routes/product';


const app: express.Application = express();

const address: string = '0.0.0.0:3000';

app.use(bodyParser.json());

app.use('/users',userRoutes);
app.use('/products', productsRoutes);

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
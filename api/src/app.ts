import {
  errorHandler,
  NotFoundError,
} from './index';
import { json } from 'body-parser';
import 'express-async-errors';
import express from 'express';

// import { indexHelloAmazonRouter } from './routes/index';
// import { s3ListRouter } from './routes/s3List';
// import { s3UploadRouter } from './routes/s3Upload';

const app = express();
// app.set('trust proxy', true);
// app.use(middlewareLogger);
app.use(json());

// app.use(indexHelloAmazonRouter);
// app.use(s3UploadRouter);
// app.use(s3ListRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };

import express from 'express';
import diaryRouter from './routes/diaries';

const app = express();

app.use(express.json());

app.use('/api/diaries', diaryRouter);

const PORT = 3000;

app.get('/ping', (_, res) => {
  res.send('pong');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

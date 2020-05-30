import express from 'express';
import next from 'next';
import cors from 'cors';
import nextI18NextMiddleware from 'next-i18next/middleware';
import nextI18next from '../i18n';

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler();

(async () => {
  await app.prepare()
  const server = express()

  server.use(cors());
  await nextI18next.initPromise
  server.use(nextI18NextMiddleware(nextI18next))
  server.post('/api/*', (req, res) => handle(req, res));
  server.get('*', (req, res) => handle(req, res));
  
  await server.listen(port)
  console.log(`> Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()
// app/index.js
const express = require('express');
const redis = require('redis');

const app = express();
const client = redis.createClient({ host: 'redis' });

app.get('/', (_req, res) => {
  client.incr('visits', (err, visits) => {
    if (err) {
      console.error('Error incrementing visits:', err);
      return res.status(500).send('Error incrementing visits');
    }
    res.send(`Ciao! This page has been visited ${visits} times.`);
  });
});

app.listen(80, () => {
  console.log('App is running on port 80');
});

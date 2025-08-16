const fetch = require('node-fetch');

module.exports = async (req, res) => {
  const { token } = req.query;
  if (!token) {
    return res.status(400).send('Missing token');
  }

  try {
    const response = await fetch(token);
    if (!response.ok) {
      throw new Error('Failed to fetch segment');
    }
    const buffer = await response.buffer();
    res.setHeader('Content-Type', 'video/mp2t');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(buffer);
  } catch (error) {
    res.status(500).send('Error fetching segment');
  }
};

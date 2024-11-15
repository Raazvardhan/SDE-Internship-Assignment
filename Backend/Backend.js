const express = require('express');
const app = express();
const { Client } = require('pg'); 


const client = new Client({
  
});
client.connect();


app.use(express.json());


app.post('/contacts', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, company, jobTitle } = req.body;
    const result = await client.query(
      'INSERT INTO contacts (firstName, lastName, email, phone, company, jobTitle) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [firstName, lastName, email, phone, company, jobTitle]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get('/contacts', async (req, res) => {
  try {
    const result = await client.query('SELECT * FROM contacts');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phone, company, jobTitle } = req.body;
    const result = await client.query(
      'UPDATE contacts SET firstName = $1, lastName = $2, email = $3, phone = $4, company = $5, jobTitle = $6 WHERE id = $7 RETURNING *',
      [firstName, lastName, email, phone, company, jobTitle, id]
    );
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.delete('/contacts/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await client.query('DELETE FROM contacts WHERE id = $1 RETURNING *', [id]);
    if (result.rowCount === 0) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
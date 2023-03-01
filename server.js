const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 9000;
const cors = require('cors');

app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

app.get('/build', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/', (req, res) => {
  res.send('API is working...')
})

app.post('/api/:apiName', async (req, res) => {
  const param = req.params.apiName
  const apiKey = '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'
  switch (param) {
      case 'correct-grammar':
              try {
                  const response = await axios.post('https://api.openai.com/v1/completions',{
                    model: 'text-davinci-003',
                    prompt: `Correct this to standard English:${req.body.prompt}`,
                    temperature: 0,
                    max_tokens: 60,
                    top_p: 1.0,
                    frequency_penalty: 0.0,
                    presence_penalty: 0.0,
                  }, {
                    headers: {
                      'Content-Type': 'application/json',
                      'Authorization': `Bearer ${apiKey}`
                    }
                  });
                  res.send(response.data.choices[0])
                } catch (error) {
                  res.status(500).send({ error: 'Failed to correct sentence' + error });
                }
          break;
      default:
          res.send('not found')
          break;
  }
});



app.listen(port, () => {
   console.log(`Server is running on port: ${port}`);
});

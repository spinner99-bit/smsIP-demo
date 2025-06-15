const express = require('express');
const app = express();

const PORT = 80;
const redirectTo = 'https://www.google.com';

app.use((req, res) => {
  res.redirect(redirectTo);
});

app.listen(PORT, () => {
  console.log(`Server is running and redirecting to ${redirectTo}`);
});

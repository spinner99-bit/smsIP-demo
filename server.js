const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const redirectTo = 'https://web.lg-gaming.xyz';

app.use((req, res) => {
  res.redirect(redirectTo);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on 0.0.0.0:${PORT}, redirecting to ${redirectTo}`);
});

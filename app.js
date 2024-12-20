const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, GitHub Actions!');
});

// Important: Export for testing
module.exports = app;

// Only start server if file is run directly
if (require.main === module) {
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    });
}
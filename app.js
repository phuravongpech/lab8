const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello, GitHub Actions!');
});

// Don't start the server when the file is required
if (require.main === module) {
    app.listen(port, () => {
        console.log(`App listening at http://localhost:${port}`);
    });
}

// Export the app for testing
module.exports = app;
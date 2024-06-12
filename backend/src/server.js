try {
    const app = require('./app');
    require('dotenv').config();
    const port = process.env.PORT || 3000;
  
    app.listen(port, () => {
      console.log(`Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
  
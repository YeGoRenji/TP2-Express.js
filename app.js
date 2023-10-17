const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/login', (req, res) => {
	res.render('login')
})

app.get('/register', (req, res) => {
	res.render('register')
})

app.get('/build.css', (req, res) => {
	res.sendFile(path.join(__dirname, 'build.css'))
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

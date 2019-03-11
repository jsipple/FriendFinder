const express= require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const path= require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const people = [
    {
        name: 'Kaladin',
        img: 'https://coppermind.net/w/images/thumb/Windrunner.png/388px-Windrunner.png',
        scores: [3, 1, 3, 4, 2, 3, 4, 2, 4, 3]
    },
    {
        name: 'Shallan',
        img: 'https://i0.wp.com/nerdmuch.com/wp-content/uploads/2018/01/Shallan.jpg',
        scores: [5, 3, 4, 2, 2, 3, 1, 1, 3, 3]
    },
    {
        name: 'Teft',
        img: 'https://coppermind.net/w/images/thumb/Teft.png/200px-Teft.png',
        scores: [1, 1, 2, 1, 5, 3, 3, 2, 4, 4]
    }
]
// console.log(Math.floor(Math.random() *5 + 1) + ',', Math.floor(Math.random() *5 + 1) + ',', Math.floor(Math.random() *5 + 1) + ',', Math.floor(Math.random() *5 + 1) + ',', Math.floor(Math.random() *5 + 1) + ',', Math.floor(Math.random() *5 + 1) + ',', Math.floor(Math.random() *5 + 1) + ',', Math.floor(Math.random() *5 + 1) + ',', Math.floor(Math.random() *5 + 1) + ',', Math.floor(Math.random() *5 + 1) + ',', )

app.get('/:Route', (req, res) => {
    let route = req.params.Route
    res.sendFile(path.join(__dirname, './app/public/' + route + '.html'))
})

app.get('api/people', (req, res) => {
    let newPerson = req.body
    people.push(newPerson)
    res.json(newPerson)
})

app.listen(PORT, () => {
    console.log('listening on port ' + PORT)
})
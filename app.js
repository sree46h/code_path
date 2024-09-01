let express = require("express")
let mongoose = require('mongoose')
let cors = require('cors')
let path = require('path')

mongoose.connect("mongodb+srv://sreehari:hPdWkFHEdnmqLIjt@cluster0.0ihbv.mongodb.net/Creator?retryWrites=true&w=majority&appName=Cluster0");
mongoose.connection.on("connected", () => {
    console.log("mongodb is connected");
});
//mongodb+srv://sreehari:hPdWkFHEdnmqLIjt@cluster0.0ihbv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
//hPdWkFHEdnmqLIjt
const app = express();
app.use(express.json())
app.use(cors());

app.use('/files', express.static(path.join(__dirname, 'files')));

app.use('/api/creators', require("./routes/creator_route"))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static('client/build'))  

    app.get('*', (req, res) => {

        res.sendFile(path.resolve(__dirname, 'client/build/index.html'))

    })
}
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
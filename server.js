import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import path, {join} from 'path'
import routes from './routes/routes'

const app = express()
const port = process.env.PORT || 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(`${__dirname}/public`)));
app.set('views', __dirname + '/views/partials');
app.set('view engine', 'jade');

routes(app);

app.listen(port, () => {
  console.log(`Magic is happening on port ${port}`);
});

export default app

const session = express.Router()
const sessions = require('user_session')

session.get('/session/test',  sessions.readSession())
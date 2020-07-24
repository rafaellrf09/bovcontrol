if(process.env.NODE_ENV === 'production') var uri = 'mongodb://alguma coisa'
else var uri = 'mongodb://localhost:27017/projectBov'


module.exports = { mongoURI: uri };
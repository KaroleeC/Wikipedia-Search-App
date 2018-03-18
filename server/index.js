const express = require('express');
const parser = require('body-parser');
const path = require('path');
// router and database
const app = express();
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../client/public')));
//app.use('/api/', routes);


app.listen(3000, function(){
  console.log('server now is listening on PORT 3000')
})
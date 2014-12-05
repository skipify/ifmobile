// ,.......

var ifMobile = require('./index');
app.use(ifMobile);
app.use('/', routes);
app.use('/users', users);

// .........

//routes/index.js 
// req.ifMobile  //true/false
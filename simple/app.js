// ,.......

var isMobile = require('./index');
//app.use(islogin({pattern:[/\/test\/*?/,],redirect:'/'}))
app.use(isMobile);
app.use('/', routes);
app.use('/users', users);

// .........

//routes/index.js 
// req.isMobile  //true/false
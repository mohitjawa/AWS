const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/object_storage', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    family: 4
}).then(()=>{
    console.log('Database connected')
}).catch((err)=>{
    console.log(err);
})

module.exports = mongoose;

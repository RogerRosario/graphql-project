import mongoose from 'mongoose';

const MONGO_URI = `mongodb+srv://rrosario:Moc5v22001_@cluster0.jietf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true
})
.then(() => {
    console.log('connected to Mongodb');
}).catch(error => {
    console.log(error.message);
})
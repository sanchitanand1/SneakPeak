import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user1:sanchit2003@blog-app-shard-00-00.pyibt.mongodb.net:27017,blog-app-shard-00-01.pyibt.mongodb.net:27017,blog-app-shard-00-02.pyibt.mongodb.net:27017/?ssl=true&replicaSet=atlas-699pen-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app
`; 
    // Replace 'myDatabase' with your actual database name

    try {
        await mongoose.connect(URL);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database', error);
    }
};

export default Connection;
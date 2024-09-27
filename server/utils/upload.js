import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const username = process.env.MONGO_USERNAME || 'yourUsername';  // Default for testing
const password = process.env.MONGO_PASSWORD || 'yourPassword';  // Default for testing

// Log values to check if they are correctly loaded
console.log('MongoDB Username:', username);
console.log('MongoDB Password:', password);

const storage = new GridFsStorage({
    url: `mongodb://user1:<db_password>@blog-app-shard-00-00.pyibt.mongodb.net:27017,blog-app-shard-00-01.pyibt.mongodb.net:27017,blog-app-shard-00-02.pyibt.mongodb.net:27017/?ssl=true&replicaSet=atlas-699pen-shard-0&authSource=admin&retryWrites=true&w=majority&appName=blog-app`,
    options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if (match.indexOf(file.mimetype) === -1) // Ensure `mimetype` is correct
            return `${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        };
    }
});

export default multer({ storage });

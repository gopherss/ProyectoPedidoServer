const { connect } = require('mongoose');

/* (async (_) => {
    const URL = process.env.MONGODB_URL;
    const db = await connect(URL);
    console.log('DB is Connected', db.connection.name);
})();
 */

(async (_) => {
    const URL = 'mongodb+srv://sandrogopher:5LjwLQKXKeFS3Vts@clusterrestaurante0.tg7mpiu.mongodb.net/?retryWrites=true&w=majority';
    const db = await connect(URL);
    console.log(`database is connected : ${db.connection.name}`);
})();



const config = {
    app: {
        port: process.env.PORT || 1300
    },
    //Replace With Your Config 
    db: {
        host: 'localhost',
        port: 27017,
        name: 'devmentor'
    },
};

module.exports = config;

const env = process.env;

export default {
    mongodbUri: 'mongodb://localhost:27017/test',
    port: env.PORT || 8080,
    host: env.host || '0.0.0.0'
} 

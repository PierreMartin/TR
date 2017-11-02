import express from 'express';

const App = require('../dist/app');

const app = express();
const ENV = process.env.NODE_ENV;

app.set('port', (process.env.PORT || 3000));

console.log('--------------------------');
console.log('===>  Starting Server . . .');
console.log(`===>  Environment: ${ENV}`);
console.log(`===>  Listening on port: ${app.get('port')}`);
console.log('--------------------------');

app.get('*', App.default);
app.listen(app.get('port'));

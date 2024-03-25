const eventEmitter = require('events');
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
const myEmitter = new eventEmitter();

myEmitter.on('birthday', birthdayEventListener);

myEmitter.emit('birthday', 'Rahmat');
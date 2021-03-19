const EventEmitter = require('events');

class Users extends EventEmitter {
    userLogged(data){
        this.emit('User logged', data);
    }
}

const user = new Users();

user.on('User logged', data =>{
    console.log(data);
});

user.userLogged({user: 'Arthur Teixeira'});



const amqp = require('amqplib');

const connection = async ()=>{
    const connecttion = amqp.connect("amqp://localhost:5672");
    return connecttion;
}

module.exports ={
    connection,
}
const amqp = require('amqplib');
const rabbitmqConnection = require('../rabbitmq/rabbitmqConnection');
const resetQueueName = 'resetPassword'; // kuyruk ismi 

const resetPublisher = async (name,email)=>{ 
    try {
        const connection = await rabbitmqConnection.connection(); // bağlantı sağlandı
        const channel = await connection.createChannel(); // yeni bir kanal oluşturuyoruz
        await channel.assertQueue(resetQueueName); // kanalımızın ismi yukarıda belirttiğimiz gibi olacak.

        // parametreden gelen verileri consumer dosyasına gönderiyoruz.
        channel.sendToQueue(resetQueueName,Buffer.from(JSON.stringify({name : name, email : email}))); 
    } catch (error) {
        return res.status(404).json({ message: 'İstek başarısız.' }); 
    }
}


module.exports={
    resetPublisher,
}
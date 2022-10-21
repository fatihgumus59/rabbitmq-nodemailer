const amqp = require('amqplib');
const rabbitmqConnection = require('../rabbitmq/rabbitmqConnection');
const resetQueueName = 'resetPassword';
const Email = require('../nodemailer/nodemailer');

const resetSendMail = async ()=> {

    try {
        const connection = await rabbitmqConnection.connection();
        const channel = await connection.createChannel();
        channel.assertQueue(resetQueueName);
        channel.consume(resetQueueName, (result) => { // belirttiğimiz kuyruk isminde olan mesajları alıyoruz.

            /*  
                burada setTimout kullanmak size kalmış, ben 5 saniye süre verdim. Nodemailer dosyamız içindeki resetPassword
                fonksiyonunu tetikleyecek ve belirtilen maile mesaj gönderecektir.
            */ 
            setTimeout(async ()=>{
                const mail = JSON.parse(result.content.toString());
                await Email.resetPassword(mail.name.toString(),mail.email.toString());
                channel.ack(result) // mesaj gönderildikten sonra kuyruktan çıkarılıyor.
            },5000)
        })
    } catch (error) {
        return res.status(404).json({ message: 'E-Mail gönderilemedi.' }); 
    }
   
}

module.exports={
    resetSendMail,

}
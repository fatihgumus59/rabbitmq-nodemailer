const express = require('express');
const app = express();

const emailPublisher = require('./queue/rabbitmq/publisher');
const emailConsumer = require('./queue/rabbitmq/consumer');

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post("/mail", async (req,res)=>{
  
  try{
    const name = req.body.name;
    const mail = req.body.email;
  
    await emailPublisher.resetPublisher(name,mail);
    await emailConsumer.resetSendMail();
  
    res.status(200).json({
      message: 'E-Mail sended',
      status:'Success'
    })

  }catch(error){
    res.status(404).json({
      message: 'E-Mail not send',
      status:'Error'
    })
    console.log(error)
  }
 
})

const port = 3000;
app.listen(port, () => {
  console.log(`APP started port ${port}`);
});

const nodemailer = require("nodemailer");

const resetPassword = async (name,email)=>{

    try {
        
      const templateMessage = `<h2>Sayın, ${name}</h2><br>
        <p>Şifre sıfırlama isteğinde bulundunuz.</p>                        
       `;

      let transporter = nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true, 
          auth: {
              user: 'gmailadresi@gmail.com', // google mail adresiniz
              pass: 'uygulamasifresi',  // oluşturduğunuz özel uygulama şifresi
          },
      });
          
      let info = await transporter.sendMail({
        from: 'Fatih Gumus Web Site - Hesap Şifre Sıfırlama İsteği:  <gmailadresi@gmail.com>',
        to: `${email}`, // hangi maile gideceği parametre olarak geliyor.
        subject: `Şifre Sıfırlama İsteği`, 
        text :`<p>Şifre sıfırlama talebinde bulundunuz.</p>`, 
        html: templateMessage, // bu alan ise html şablonu göndermek için
      });


    } catch (error) {
      console.log(error)
    }
}

module.exports={
  resetPassword,

}
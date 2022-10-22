# RabbitMQ Kullanarak Nodemailer ile E-Mail Göndermek | Node.Js


![](https://miro.medium.com/max/1400/1*FYHUCHqOAtqm9ioYg20weA.png)


Merhaba arkadaşlar bu yazımda sizlere Node.js projesinde RabbitMQ kullanılarak Nodemailer paketi ile nasıl e-mail gönderilir bunu anlatacağım.

Bildiğiniz üzere RabbitMQ kuyruk işlemlerinde sıkça kullanılan bir sistem, amacından bahsetmek gerekirse atılan herhangi bir isteği(request) alır ve sırası geldiğinde iletir.(response)

RabbitMQ asenkron şekilde çalışmaktadır.

En büyük güzelliklerinden bir tanesi ise kullanıcıya anında cevap vermesi.
Peki nedir bu kullanıcıya anında cevap vermesi ?

Basit bir senaryo düşünelim, bir web siteniz var ve sitenizin şifre sıfırlama servisi olsun. RabbitMQ kullanmadığınız taktirde sitenizde ki herhangi bir kullanıcı şifre sıfırlama isteğinde bulunduğu anda sunucudan cevap gelene kadar sayfada sizi bekletecektir(Bu süre belki 10 saniye belki 1dk)…

Projenizde RabbitMQ kullandığınızda ise şifre sıfırlama isteğinde bulunduğunuz an RabbitMQ bu isteği alır ve size hemen bir cevap gönderir.(response) Burada kullanıcıya vereceğiniz yanıt size kalmış bir durumdur, RabbitMQ size yanıt verdiği sırada ise mailinize şifre sıfırlama bağlantısını göndermiş olacaktır.

RabbitMQ da ayarlamalar tabi ki yapabilirsiniz örneğin istek atıldığı gibi sistem size cevap verecektir fakat siz arka planda işlemin hemen yapılmaması için bir süre verebilirsiniz.(Örneğimizde bunu yapacağız)

Şunu da düşünebilirsiniz şifre sıfırlama isteğinde kullanıcı 5–6 saniye beklesin ne olacak ki ? Evet belki 50 belki 100 kullanıcı için böyle olabilir ama ileride sisteminizdeki kullanıcı sayısı arttığında bu durum böyle olmayacaktır ne kadar sunucu özelliklerinizi de yükseltseniz sunucunuzun cevap verme süresi artacaktır.<br>
İçeriğin devamına ulaşmak için [tıklayınız](https://fatihgumusdev.medium.com/rabbitmq-kullanarak-nodemailer-ile-e-mail-göndermek-node-js-1789f12b565d)

Fatih Gumus
[Linkedin](https://www.linkedin.com/in/fatihgumus59/)

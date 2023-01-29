var kullanicilar=[
    {email:"alik@gmail.com",sifre:"1234"},
    {email:"frido@gmail.com",sifre:"1234"}
]

var tivitler=[
    {email:"alik@gmail.com",tivit:"bugun hava guzel"},
    {email:"alik@gmail.com",tivit:"bugun hava super"},
    {email:"frido@gmail.com",tivit:"cok guzelım"}
]

var email=prompt("email?")
var sifre=prompt("sifre?")


function giris(){
    if((email==kullanicilar[0].email && sifre==kullanicilar[0].sifre)||(email==kullanicilar[1].email && sifre==kullanicilar[1].sifre)){
        console.log(tivitler)
    }else{
        console.log("Kullanıcı adı veya sıfresı hatalı..!")
    }
}

giris(email,sifre)
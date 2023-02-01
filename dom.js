// // // document.getElementById("bio").innerHTML="Ali KOYUNCU : 2023"

// var intro1 = document.getElementById("intro1");

// var mesaj = document.getElementById("mesaj");

// mesaj.innerHTML = intro1.innerHTML;

// var tumListeler = document.getElementsByTagName("ul");
// var sehirler = tumListeler[0]

// tumElemanlar = sehirler.getElementsByTagName("li");

// for (i = 0; i < tumElemanlar.length; i++) {
//     alert(tumElemanlar[i].innerHTML);
  
// }



////// classname konusu 

// var classElemanlari=document.getElementsByClassName("intro1");

// alert(classElemanlari[0].innerHTML)

// var ali=document.getElementById("ali").addEventListener("click",renkDegistir);
// function renkDegistir(){
//     document.getElementById("div1").style.color="blue";
//     var isimElemanlari=document.getElementsByClassName("musteriAdi");
//     isimElemanlari[0].value="Derin"
// }

///// Node ve ChildNode
// var node=document.getElementById("agac");

// alert(node.childNodes[0].nodeValue);



var baslik=document.createElement("h2");
var node=document.createTextNode("Merhabalar Javascript")
baslik.appendChild(node)

var div1=document.getElementById("div1")
var p2=document.getElementById("p2")
div1.insertBefore(baslik,p2) //div1 içinde p2 den once baslik değişkenini ekle

alert("P2 siliniyor")
div1.removeChild(p2)

alert("Değiştiriliyor");
var p1=document.getElementById("p1");
div1.replaceChild(baslik,p1)
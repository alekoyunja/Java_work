const dizi=[1,2,3,4]

const kareDizi=[]
dizi.forEach(sayi =>{
    kareDizi.push(sayi*sayi);
})

console.log(kareDizi);

/////// MAP yapısı - diziyi yeni bir diziye aktarma

const mapDizi = dizi.map(sayi=> sayi*3)
console.log(mapDizi)

////// Filter yapısı

const filterDizi=dizi.filter(sayi=>sayi>2)
console.log(filterDizi);

///// Reduce yapısı

const toplam=dizi.reduce((acc,sayi)=>{
    return acc+sayi;
})
console.log(toplam)
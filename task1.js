teks = 'Malam'
teks = teks.toLowerCase()
hasil =''

if (typeof teks=='string'){
    for (let x=teks.length-1; x>=0;x--){
        hasil += teks[x]
    }
    
    // console.log(hasil)
    if (hasil===teks){
        console.log('palindrom')
    } else {
        console.log('bukan palindrom')
    }
}

else {
    console.log('Harap masukkan data berupa string')
}
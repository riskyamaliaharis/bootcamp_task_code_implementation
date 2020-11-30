let teks = 'Saya belajar Javascript'
let kata = teks.split(' ')
let hasil = []

if (typeof teks==='string'){
    for (let i=kata.length-1; i>=0;i--){
        hasil.push(kata[i])
    }

    hasil =hasil.join(' ')
      
    console.log(hasil)
    
}

else {
    console.log('Harap masukkan data berupa string kalimat')
}
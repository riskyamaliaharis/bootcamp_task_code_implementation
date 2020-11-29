// Buatlah Flowchart dan Code untuk soal dibawah ini:

// Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel 
// tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan
// dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil
// pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer. Buatlah method
// function yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas.

const divideAndSort = (angka) =>{
    if (typeof angka !== 'number'){
        console.log('Nilai input harus berupa angka')
    } else {
        let angkaToString = angka.toString().split('0')
        // let angkaSort = angkaToString.map(deret => {
        // deret = deret.split('').sort(function(a, b){return a-b}).join('')
        // return deret
        // })
        let angkaSort = []
        let i=0        
        do {
            let a = angkaToString[i].split('').sort(function(a, b){return a-b}).join('')
            angkaSort.push(a)
            i++
        }
        while(i<angkaToString.length)
        angkaSort = Number(angkaSort.join(''))
        console.log(angkaSort)
        console.log('dengan tipe data ' + typeof angkaSort)
    }      
}

const deretAngka = 5956560159466056

divideAndSort(deretAngka)
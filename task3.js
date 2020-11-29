/* Demy membeli makanan menggunakan aplikasi ArkFood. Dimana terdapat 2 buah kode promo: 
1. Promo ‘ARKAFOOD5’ dengan ketentuan pemesanan minimal 50rb akan mendapat diskon 50%, dengan maksimal potongan sebesar 50rb.
2. Promo ‘DITRAKTIRDEMY’ dengan ketentuan pemesanan minimal 25rb akan mendapatkan diskon 60%, dengan maksimal potongan sebesar 30rb.
3. Jika tidak menggunakan kode promo ‘false’
Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap satu kilometer selanjutnya dikenakan penambahan 3rb. Untuk beberapa restoran dikenakan pajak yakni 5% dari harga makanan yang dipesan (true), jika tidak dikenakan pajak (false).

TASK
1. Buatlah flowchart untuk membuat fungsi dari cerita diatas.
2. Buatlah sebuah function yang menerima 4 parameter. 
    ArkFood(harga, voucher, jarak, pajak) */


    console.log('================== ArkFood : DETAIL PEMBAYARAN ==================')
    

    const arkFood = (harga, voucher, jarak, pajak) => {
    
        if (typeof harga !== 'number' || typeof jarak !== 'number') {
            return console.log('Maaf, harga dan jarak harus berupa Angka')
        }
    
        else {
    
            let potongan=0
            let ongkir=0
            let pjk=0
            let subTotal = harga
    
            
    
            if (voucher===false && pajak===false){
                
                ongkir = getOngkir(jarak)
                subTotal = hitungHargaBayar(harga, potongan, ongkir, pjk)
                
            } 
            
                      
            else {

                // Biaya Pajak

                if (typeof pajak !== 'boolean') {
                    return console.log(`Maaf, mohon masukkan true untuk pesanan dari restoran yang dikenakan pajak \ndan false untuk pesanan dari restoran yang tidak dikenakan pajak`)
                }
                else {
                    pajak === true ? pjk = (5/100)*harga : pjk = pjk
                }
    
                // Jumlah biaya potongan
                    
                (voucher === 'ARKAFOOD5') || (voucher==='DITRAKTIRDEMY') ? potongan=getPromo(harga, voucher) : voucher === false ? potongan=potongan : console.log('Maaf, kode promo yang dimasukkan salah, sehingga potongan tidak berlaku.')                
                
                // Biaya Ongkir

                ongkir = getOngkir(jarak) 
    
                                
                // Jumlah Bayar
                subTotal = hitungHargaBayar(harga, potongan, ongkir, pjk)
    
                
            }
                      

            const output =  [
                                {
                                    "Harga" : harga,
                                    "Potongan" : potongan,
                                    "Biaya Antar" : ongkir,
                                    "Pajak" : pjk,
                                    "Subtotal" : subTotal
                                }
                            ]
            console.table(output)
            
            console.log('============= Pesanan Anda akan segera kami antarkan =============')
            console.log('====== Terima kasih telah menjadikan kami solusi lapar Anda ======')
            console.log('\n')
        }    
    }


    // CALLBACK
    
    function getPromo(price, promoCode) {
        let diskon;
        if (promoCode === 'ARKAFOOD5'){
            diskon = (50/100)*price 
            price >= 50000 && diskon <=50000 ? diskon = diskon : diskon = 0
        } else {
            diskon = (60/100)*price 
            price >= 25000 && diskon <= 30000 ? diskon = diskon : diskon = 0
        }               
        return diskon
    } 
    
        
    function getOngkir(distance){

        let goArkFood = 5000
        distance=Math.round(distance)
        if(distance>=0 && distance<=2){            
            goArkFood=goArkFood            
        }
        else {
            
            let r=3
            while(r<=distance){
                goArkFood = goArkFood + 3000
                r++
            }
            
        }
        return goArkFood        
    
    }
    
    function hitungHargaBayar(price, diskon, goArkFood, tax){
        const total = price - diskon +goArkFood + tax 
        return total        
    }
    
    
    // MAIN PROGRAM

    // arkFood(75000, 'ARKAFOOD5' , 5, true)
    // arkFood(75000, 'ARKAFOOD5' , 0.1, true)
    // arkFood(30000, 'DITRAKTIRDEMY' , 5, true)
    // arkFood('75000', 'ARKAFOOD5' , 5, true)
    // arkFood(75000, 56 , 5, true)
    // arkFood('75000', 'ARKAFOOD5' , 7.5, true)
    // arkFood(75000, 'ARKAFOOD5' , 7.5, 'tidak')
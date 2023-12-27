const daftarIsi = [ 
    { kode: '1', nama: 'Barang A', harga: 1000 }, 
    { kode: '2', nama: 'Barang B', harga: 2000 }, 
    { kode: '3', nama: 'Barang C', harga: 3000 } 
]; 
 
function data(cekBarang) { 
    let barang = daftarIsi.find(item => item.kode === cekBarang); 
    return barang ? barang.harga : 0; 
} 
 
function send_button() { 
    let input_kode = document.getElementById("kode_barang").value; 
    let input_jumlah = document.getElementById("jumlah_barang").value; 
 


    let harga_barang = data(input_kode); 
 
    let total_harga = parseInt(input_jumlah) * harga_barang; 
 
    alert("Total Pembayaran anda Adalah: " + total_harga); 
 
    let uang = prompt("Masukkan Uang User :"); 
 
  
 
 
 



    if (isNaN(uang)) { 
        alert("inputan salah"); 
        return; 
    } 
 
    let kembalian = uang - total_harga; 
 
    if (kembalian >= 0) { 
        alert( 
            "Total Belanja: " + total_harga +  "\nUang yang Diberikan: " + uang +  "\nKembalian: " + kembalian 
        ); 
    } else { 

        alert("Uang Anda Kurang"); 
  
  
  
    } 
} 

 var tanya = true;
while(tanya == true){ 

        alert('tebak angka antara 1 - 10 \n anda memiliki kesempatan 3x');
        //menentukan pilihan player
        var p = prompt('masukan angka pilihan anda'); 

        //membangkitkan bilangan random
        var c = Math.floor(Math.random() * 10) + 1;


        //membuat rules
        if(p == c){
            hasil =('BENAR');
        }else if( p < c){
            hasil = ('terlalu rendah');
        }else if (p > c){
            hasil = ('terlalu tinggi')
        }else{
            hasil = ('anda tidak memasukan angka');
        } 
        
        alert('kamu memilih: ' + p + ' dan angkanya '+ c+' \n' + hasil  );
        tanya = confirm('lagi?')
}

alert('terima kasih telah bermain');

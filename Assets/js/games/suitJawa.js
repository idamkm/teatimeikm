//menentukan pilihan player
var p = prompt('pilih : gajah, semut, orang'); 
//menangkap pilihan komputer
//membangkitkan bilangan random
var c = Math.random();

if(c < 0.34){
    c = 'gajah';
}else if( c >= 0.34 && c < 0.67){
    c = 'orang';
}else {
    c = 'semut';
}

//menentukan rules
if(p == c ){
    alert('SERI');
}else if( p == 'gajah' ){
    if( c == 'orang'){
        hasil = 'MENANG'; 
    }else{
        hasil = 'KALAH';
    }
}else if (p == 'orang'){
    if(c == 'semut'){
        hasil = 'MENANG';
    }else{
        hasil = 'KALAH';
    }
}else if( p == 'semut'){
    if(c == 'gajah'){
        hasil = 'MENANG';
    }else{
        hasil = 'KALAH';
    }
}else{
    hasil = 'ANDA SALAH MEMASUKAN PEJUANG' ;
}

//tampilkan hasilnya
alert('kamu memilih: ' + p + ' dan melawan '+ c+' \n' + hasil  );
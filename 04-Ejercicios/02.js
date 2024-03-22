// 4K 3840 x 2160
// WQHD 2560 X 1440
// FHD 1920 X 1080
// HD 1280 X720

function nombreresolucion (ancho, alto){
    if  (ancho >= 7680 && alto >= 4320){
        return '8K';
    }
    if  (ancho >= 3840 && alto >=2160){
        return '4K';
    }
    if (ancho >= 2560 && alto >= 1440){
        return 'WQHD';
    }       
    if (ancho >= 1920 && alto >= 1080){
        return 'FHD';}  

    if (ancho >= 1280 && alto >= 720){
        return 'HD';}

}
 let nombre =nombreresolucion(2000, 1200);
 console.log(nombre);
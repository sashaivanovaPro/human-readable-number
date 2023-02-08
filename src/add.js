module.exports = function toReadable (number) {
    const str = number.toPrecision();
    const length = str.length;
    const natur = str[-1];
    const decim = str[-2];
    const hundr = str[-3];
    let code = ["zero","one","two","three","four","five","six","seven", "eight", "nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety","hundred"];
    if (length == 1 ){
        return a
        } else if (length == 2 && decim == 1){
        return x;
        } else if (length == 2 && decim >= 2){
        return b + a;
        } else if (length == 3 && decim == 1){
        return c + x;
        }else if (length == 3 && decim >= 2){
            return c + b + a;
        };
}

/* Natur

if ( natur == 0 && decim == indefined){
            a = (code[0]);
        } else if ( natur == 1 && decim == undefined){
            a = code[1];
        } else if( natur == 2 && decim == undefined){
           a = code[2];
        } else if( natur == 3 && decim == undefined){
            a = code[3];
        } else if( natur == 4 && decim == undefined){
            a = code[4];
        } else if( natur == 5 && decim == undefined){
            a = code[5];
        } else if(natur == 6 && decim == undefined){
            a = code[6];
        } else if(natur == 7 && decim == undefined){
            a = code[7];
        } else if(natur == 8 && decim == undefined){
            a = code[8];
        } else if(natur == 9 && decim == undefined){
            a = code[9];
        }else {
            return;
        } */

        if ( natur == 0 && decim == 1){
            x = (code[10]);
        } else if ( natur == 1 && decim == 1){
            x = code[11];
        } else if( natur == 2 && decim == 1){
           x = code[12];
        } else if( natur == 3 && decim == 1){
            x = code[13];
        } else if( natur == 4 && decim == 1){
            x = code[14];
        } else if( natur == 5 && decim == 1){
            x = code[15];
        } else if(natur == 6 && decim == 1){
            x = code[16];
        } else if(natur == 7 && decim == 1){
            x = code[17];
        } else if(natur == 8 && decim == 1){
            x = code[18];
        } else if(natur == 9 && decim == 1){
            x = code[19];
        } else if ( natur == 0 && decim == 2){
            b = (code[20]);
        } else if ( decim == 3 ){
            b = code[21];
        } else if( decim == 4 ){
           b = code[22];
        } else if( decim == 5 ){
            b = code[23];
        } else if( decim == 6 ){
            b = code[24];
        } else if( decim == 7 ){
            b = code[25];
        } else if(decim == 8 ){
            b = code[26];
        } else if(decim == 9 ){
            b = code[27];
        } else if(hundred ==1 && decim == 0 && natur == 0 ){
            y = code[28];
        }else {
            return;
        }
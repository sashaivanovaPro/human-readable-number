module.exports = function toReadable (number) {
    const str = number.toPrecision();
    const length = str.length;
    const natur = str.slice(-1);
    const decim = str[str.length-2];
    const hundr = str[str.length-3];
    let a;
    let b;
    let c;
    let x;
    let y = "hundred"
    let n;
    let f;
/*  console.log(str);
  console.log(length);
  console.log(natur);
  console.log(decim);
  console.log(hundr);
  console.log(y);*/
    let code = ["zero","one","two","three","four","five","six","seven", "eight", "nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety","hundred"];

  (function returnNatur() {
    if ( natur == 0 && decim == undefined){
            a = code[0];
        } else if ( natur == 1 ){
            a = code[1];
        } else if( natur == 2 ){
           a = code[2];
        } else if( natur == 3 ){
            a = code[3];
        } else if( natur == 4 ){
            a = code[4];
        } else if( natur == 5 ){
            a = code[5];
        } else if(natur == 6 ){
            a = code[6];
        } else if(natur == 7 ){
            a = code[7];
        } else if(natur == 8 ){
            a = code[8];
        } else if(natur == 9 ){
            a = code[9];
        }
    return {a}
}());

  (function returnDecim() {
    if (natur == 0 && decim == 1){
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
        }
    return {x}
}());

  (function returnDecimAll() {
    if ( decim == 2){
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
        }
    return {b}
}());

  (function returnHundr () {
    if (hundr == 1){
        c = "one" + " " + y;
    } else if(hundr == 2 ){
        c = "two" + " " + y;
    } else if(hundr == 3 ){
        c = "three" + " " + y;
    } else if(hundr == 4 ){
        c = "four" + " " + y;
    } else if(hundr == 5 ){
        c = "five" + " " + y;
    } else if(hundr == 6 ){
        c = "six" + " " + y;
    } else if(hundr == 7 ){
        c = "seven" + " " + y;
    } else if(hundr == 8 ){
        c = "eight" + " " + y;
    } else if (hundr == 9 ){
        c = "nine" + " " + y;
    }
return {c}
}());

(function numero () {
    if (length == 1 ){
        return n = a
        } else if (length == 2 && decim == 1){
            n = x;
        } else if (length == 2 && natur == 0){
            n = b;
        } else if (length == 2 && decim >= 2){
            n = b + " " + a;
        } else if (length == 3 && decim == 0 && natur == 0){
            n = c;
        } else if (length == 3 && decim == 1){
            n = c + " " + x;
        } else if (length == 3 && decim >= 2 && natur == 0){
            n = c + " " + b;
        } else if (length == 3 && decim >= 2){
            n = c + " " + b + " " + a;
        } else if (length == 3 && decim == 0){
            n = c + " " + a;
        }
  return {n}
    }());
    f = String(n);
    return f;
}



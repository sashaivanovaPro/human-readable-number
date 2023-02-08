module.exports = function toReadable (number) {
    const str = number.toPrecision();
    const length = str.length;
    const natur = str[0];
    const decim = str[1];
    const hundr = str[2];
    if (length == 1 ){
        if (number == 0){
        console.log ("zero");
        } else if (number == 1){
          let i = "one";
          console.log ("one");
        } else if(number == 2){
          let i = "two";
          console.log ("two");
        } else if(number == 3){
          let i = "three";
          console.log ("three");
        } else if(number == 4){
          let i = "four";
          console.log ("four");
        } else if(number == 5){
          let i = "five";
          console.log ("five");
        } else if(number == 6){
          let i = "six";
          console.log ("six");
        } else if(number == 7){
          let i = "seven";
          console.log ("seven");
        } else if(number == 8){
          let i = "eight";
          console.log ("eight");
        } else {
           let i = "nine";
           console.log ("nine");
        }
      }
      else if (length == 2 ){
        if (natur == 1 && decim == 1){
          console.log ("eleven");
        } else if ( natur == 1 && decim == 2){
          console.log ("twelve");
        } else if ( natur == 1 && decim == 3){
          console.log ("thirteen");
        } else if ( natur == 1 && decim == 4){
          console.log ("fourteen");
        } else if ( natur == 1 && decim == 5){
          console.log ("fifteen");
        } else if ( natur == 1 && decim == 6){
          console.log ("sixteen");
        } else if ( natur == 1 && decim == 7){
          console.log ("seventeen");
        } else if ( natur == 1 && decim == 8){
          console.log ("eighteen");
        } else if ( natur == 1 && decim == 9){
          console.log ("nineteen");
        } else {
        console. log(`сотые`);
      }

    }
}
toReadable(11);
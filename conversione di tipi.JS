//conversione numerica

alert( "8" / "2" );  // 4; la divisione viene applicata ad un tipo non numerico

//funzione number (value) per convertire un valore
let str = "231";
alert (typeof str); 
let num = Number(str); //diventa il numero 231
alert(typeof num); //number

//diversamenrte l'addizione concatena le stringhe
alert( 3 + '4' ); //'34' stringa lato destro
alert( '1' + 2 ); //'12' stringa lato sinistro
alert(  3 + 3 +'1' ); //61
alert( '1' + 3 + 3  ); //133


//sottrazione
alert( 8 - '2' ); //6 la stringa '2' viene convertita in numero

//conversione booleana
alert( Boolean(2) ); //true
alert( Boolean(0) ); //false

alert(Boolean("hello") ); //true
alert( Boolean("") );     //false

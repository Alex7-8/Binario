
//const resultado = [];
var res="";
window.addEventListener('load', function(){
 const resultado = document.getElementById("resultado").value;
 const result = document.getElementById("result").value;
});
function obtener(){
    var bin = document.getElementById("bin").value;
    
    //console.log(bin);
   // bucle(bin);
   conversion(bin);
}

function bucle(bin){

    var ax = "";
    var ntex=0;
    var con = 0;
    var n = 0;
    var v = 0;
    for(var i = 0; i < bin.length; i++ ){
    //  console.log(n)
        
   
    if(bin[i] !== ' '){
        ax = ax + `${bin[i]}`

    }else if(bin[i] == ' '){
        v = 1;
        n = -1;
    }
    if(n == 7 && v == 0){
        n = -1;
        console.log(ax)
        v = 0;

        for(let i = ax.length -1; i >=0; i-- ){
            // console.log(con);
          if(ax[i] == 1 && con == 0){
              ntex = ntex  + 1;
              }else if(ax[i]  == 1 && con == 1){
                  ntex  = ntex  + 2;
              }else if(ax[i]  == 1 && con == 2){
                  ntex  = ntex  + 4;
              }else if(ax[i]  == 1 && con == 3){
                  ntex  = ntex  + 8;
              }else if(ax[i]  == 1 && con == 4){
                  ntex  = ntex  + 16;
              }else if(ax[i]  == 1 && con == 5){  
                  ntex  = ntex  + 32;
              }else if(ax[i]  == 1 && con == 6){
                  ntex  = ntex  + 64;
              }else if(ax[i]  == 1 && con == 7){
                  ntex = ntex + 128;
              }else if(ax[i] > 1 || ax[i] < 0){
                console.log(ax)
                  res = "Error de sintaxis"; 
                  con = ax.length;
                  break;
               }
            con++;
    
           ax = "";
        }

    }
}


resultado.textContent = `${ax}`;
}


function conversion(bin){
    var num= '';
    var tex="";
    var ax = "";
    var ntex=0;
    var con = 0;
    var n = 0;
    var v = 0;
    for(var i = 0; i < bin.length; i++ ){
    //  console.log(n)
        
   
    if(bin[i] !== ' '){
        ax = ax + `${bin[i]}`

    }else if(bin[i] == ' '){
        v = 1;
        n = -1;
    }
    if(n == 7 && v == 0){
        n = -1;
        console.log(ax)
        
        v = 0;

        for(let i = ax.length -1; i >=0; i-- ){
               // console.log(con);
             if(ax[i] == 1 && con == 0){
                 ntex = ntex  + 1;
                 }else if(ax[i]  == 1 && con == 1){
                     ntex  = ntex  + 2;
                 }else if(ax[i]  == 1 && con == 2){
                     ntex  = ntex  + 4;
                 }else if(ax[i]  == 1 && con == 3){
                     ntex  = ntex  + 8;
                 }else if(ax[i]  == 1 && con == 4){
                     ntex  = ntex  + 16;
                 }else if(ax[i]  == 1 && con == 5){  
                     ntex  = ntex  + 32;
                 }else if(ax[i]  == 1 && con == 6){
                     ntex  = ntex  + 64;
                 }else if(ax[i]  == 1 && con == 7){
                     ntex = ntex + 128;
                 }if(con == 7){

                     con = -1;
                   for(var e = 0; e < 1; e++  ){ 
                 
                         if(ntex == 0){
                             tex = "NUL";
                         }else if(ntex == 1){
                             tex = "SOH";
                         }else if(ntex == 2){
                             tex = "STX";
                         }else if(ntex == 3){
                             tex = "ETX";
                         }else if(ntex == 4){
                             tex = "EOT";
                         }else if(ntex == 5){
                             tex = "ENQ";
                         }else if(ntex == 6){
                             tex = "ACK";
                         }else if(ntex == 7){
                             tex = "BEL";
                         }else if(ntex == 8){
                             tex = "BS";
                         }else if(ntex == 9){
                             tex = "TAB";
                         }else if(ntex == 10){
                             tex = "LF";
                         }else if(ntex == 11){
                             tex = "VT";
                         }else if(ntex == 12){
                             tex = "FF";
                         }else if(ntex == 13){
                             tex = "CR";
                         }else if(ntex == 14){
                             tex = "SO";
                         }else if(ntex == 15){
                             tex = "SI";
                         }else if(ntex == 16){
                             tex = "DLE";
                         }else if(ntex == 17){
                             tex = "DC1";
                         }else if(ntex == 18){
                             tex = "DC2";
                         }else if(ntex == 19){
                             tex = "DC3";
                         }else if(ntex == 20){
                             tex = "DC4";
                         }else if(ntex == 21){
                             tex = "NAK";
                         }else if(ntex == 22){
                             tex = "SYN";
                         }else if(ntex == 23){
                             tex = "ETB";
                         }else if(ntex == 24){
                             tex = "CAN";
                         }else if(ntex == 25){
                             tex = "EM";
                         }else if(ntex == 26){
                             tex = "SUB";
                         }else if(ntex == 27){
                             tex = "ESC";
                         }else if(ntex == 28){
                             tex = "FS";
                         }else if(ntex == 29){
                             tex = "GS";
                         }else if(ntex == 30){
                             tex = "RS";
                         }else if(ntex == 31){
                             tex = "US";
                         }else if(ntex == 32){
                          tex = " "; 
                         }else if(ntex == 33){
                             tex = "!";
                         }else if(ntex == 34){    
                             tex = '"';
                         }else if(ntex == 35){
                             tex = "#";
                         }else if(ntex == 36){
                             tex = "$";
                         }else if(ntex == 37){
                             tex = "%";
                         }else if(ntex == 38){
                             tex = "&";
                         }else if(ntex == 39){
                             tex = "'";
                         }else if(ntex == 40){
                             tex = "(";
                         }else if(ntex == 41){
                             tex = ")";
                         }else if(ntex == 42){
                             tex = "*";
                         }else if(ntex == 43){
                             tex = "+";
                         }else if(ntex == 44){
                             tex = ",";
                         }else if(ntex == 45){
                             tex = "-";
                         }else if(ntex == 46){
                             tex = ".";
                         }else if(ntex == 47){
                             tex = "/";
                         }else if(ntex == 48){
                             tex = "0";
                         }else if(ntex == 49){
                             tex = "1";
                         }else if(ntex == 50){
                             tex = "2";
                         }else if(ntex == 51){
                             tex = "3";
                         }else if(ntex == 52){
                             tex = "4";
                         }else if(ntex == 53){
                             tex = "5";
                         }else if(ntex == 54){
                             tex = "6";
                         }else if(ntex == 55){
                             tex = "7";
                         }else if(ntex == 56){
                             tex = "8";
                         }else if(ntex == 57){
                             tex = "9";
                         }else if(ntex == 58){
                             tex = ":";
                         }else if(ntex == 59){
                             tex = ";";
                         }else if(ntex == 60){
                             tex = "<";
                         }else if(ntex == 61){
                             tex = "=";
                         }else if(ntex == 62){
                             tex = ">";
                         }else if(ntex == 63){
                             tex = "?";
                         }else if(ntex == 64){
                             tex = "@";
                         }else if(ntex == 65){
                             tex = "A";
                         }else if(ntex == 66){
                             tex = "B";
                         }else if(ntex == 67){
                             tex = "C";
                         }else if(ntex == 68){
                             tex = "D";
                         }else if(ntex == 69){
                             tex = "E";
                         }else if(ntex == 70){
                             tex = "F";
                         }else if(ntex == 71){
                             tex = "G";
                         }else if(ntex == 72){
                             tex = "H";
                         }else if(ntex == 73){
                             tex = "I";
                         }else if(ntex == 74){
                             tex = "J";
                         }else if(ntex == 75){
                             tex = "K";
                         }else if(ntex == 76){
                             tex = "L";
                         }else if(ntex == 77){
                             tex = "M";
                         }else if(ntex == 78){
                             tex = "N";
                         }else if(ntex == 79){
                             tex = "O";
                         }else if(ntex == 80){
                             tex = "P";
                         }else if(ntex == 81){
                             tex = "Q";
                         }else if(ntex == 82){
                             tex = "R";
                         }else if(ntex == 83){
                             tex = "S";
                         }else if(ntex == 84){
                             tex = "T";
                         }else if(ntex == 85){
                             tex = "U";
                         }else if(ntex == 86){
                             tex = "V";
                         }else if(ntex == 87){
                             tex = "W";
                         }else if(ntex == 88){
                             tex = "X";
                         }else if(ntex == 89){
                             tex = "Y";
                         }else if(ntex == 90){
                             tex = "Z";
                         }else if(ntex == 91){
                             tex = "[";
                         }else if(ntex == 92){
                             tex = "\\";
                         }else if(ntex == 93){
                             tex = "]";
                         }else if(ntex == 94){
                             tex = "^";
                         }else if(ntex == 95){
                             tex = "_";
                         }else if(ntex == 96){
                             tex = "`";
                         }else if(ntex == 97){
                             tex = "a";
                         }else if(ntex == 98){
                             tex = "b";
                         }else if(ntex == 99){
                             tex = "c";
                         }else if(ntex == 100){
                             tex = "d";
                         }else if(ntex == 101){
                             tex = "e";
                         }else if(ntex == 102){
                             tex = "f";
                         }else if(ntex == 103){
                             tex = "g";
                         }else if(ntex == 104){
                             tex = "h";
                         }else if(ntex == 105){
                             tex = "i";
                         }else if(ntex == 106){
                             tex = "j";
                         }else if(ntex == 107){
                             tex = "k";
                         }else if(ntex == 108){
                             tex = "l";
                         }else if(ntex == 109){
                             tex = "m";
                         }else if(ntex == 110){
                             tex = "n";
                         }else if(ntex == 111){
                             tex = "o";
                         }else if(ntex == 112){
                             tex = "p";
                         }else if(ntex == 113){
                             tex = "q";
                         }else if(ntex == 114){
                             tex = "r";
                         }else if(ntex == 115){
                             tex = "s";
                         }else if(ntex == 116){
                             tex = "t";
                         }else if(ntex == 117){
                             tex = "u";
                         }else if(ntex == 118){
                             tex = "v";
                         }else if(ntex == 119){
                             tex = "w";
                         }else if(ntex == 120){
                             tex = "x";
                         }else if(ntex == 121){
                             tex = "y";
                         }else if(ntex == 122){
                             tex = "z";
                         }else if(ntex == 123){
                             tex = "{";
                         }else if(ntex == 124){
                             tex = "|";
                         }else if(ntex == 125){
                             tex = "}";
                         }else if(ntex == 126){
                             tex = "~";
                         }else if(ntex == 127){
                             tex = "DEL";
                         }else if(ntex == 128){
                             tex = "Ç";
                         }else if(ntex == 129){
                             tex = "ü";
                         }else if(ntex == 130){
                             tex = "é";
                         }else if(ntex == 131){
                             tex = "â";
                         }else if(ntex == 132){
                             tex = "ä";
                         }else if(ntex == 133){
                             tex = "à";
                         }else if(ntex == 134){
                             tex = "å";
                         }else if(ntex == 135){
                             tex = "ç";
                         }else if(ntex == 136){
                             tex = "ê";
                         }else if(ntex == 137){
                             tex = "ë";
                         }else if(ntex == 138){
                             tex = "è";
                         }else if(ntex == 139){
                             tex = "ï";
                         }else if(ntex == 140){
                             tex = "î";
                         }else if(ntex == 141){
                             tex = "ì";
                         }else if(ntex == 142){
                             tex = "Ä";
                         }else if(ntex == 143){
                             tex = "Å";
                         }else if(ntex == 144){
                             tex = "É";
                         }else if(ntex == 145){
                             tex = "æ";
                         }else if(ntex == 146){
                             tex = "Æ";
                         }else if(ntex == 147){
                             tex = "ô";
                         }else if(ntex == 148){
                             tex = "ö";
                         }else if(ntex == 149){
                             tex = "ò";
                         }else if(ntex == 150){
                             tex = "û";
                         }else if(ntex == 151){
                             tex = "ù";
                         }else if(ntex == 152){
                             tex = "ÿ";
                         }else if(ntex == 153){
                             tex = "Ö";
                         }else if(ntex == 154){
                             tex = "Ü";
                         }else if(ntex == 155){
                             tex = "ø";
                         }else if(ntex == 156){
                             tex = "£";
                         }else if(ntex == 157){
                             tex = "Ø";
                         }else if(ntex == 158){
                             tex = "×";
                         }else if(ntex == 159){
                             tex = "ƒ";
                         }else if(ntex == 160){
                             tex = "á";
                         }else if(ntex == 161){
                             tex = "í";
                         }else if(ntex == 162){
                             tex = "ó";
                         }else if(ntex == 163){
                             tex = "ú";
                         }else if(ntex == 164){
                             tex = "ñ";
                         }else if(ntex == 165){
                             tex = "Ñ";
                         }else if(ntex == 166){
                             tex = "ª";
                         }else if(ntex == 167){
                             tex = "º";
                         }else if(ntex == 168){
                             tex = "¿";
                         }else if(ntex == 169){
                             tex = "®";
                         }else if(ntex == 170){
                             tex = "¬";
                         }else if(ntex == 171){
                             tex = "½";
                         }else if(ntex == 172){
                             tex = "¼";
                         }else if(ntex == 173){
                             tex = "¡";
                         }else if(ntex == 174){
                             tex = "«";
                         }else if(ntex == 175){
                             tex = "»";
                         }else if(ntex == 176){
                             tex = "░";
                         }else if(ntex == 177){
                             tex = "▒";
                         }else if(ntex == 178){
                             tex = "▓";
                         }else if(ntex == 179){
                             tex = "│";
                         }else if(ntex == 180){
                             tex = "┤";
                         }else if(ntex == 181){
                             tex = "Á";
                         }else if(ntex == 182){
                             tex = "Â";
                         }else if(ntex == 183){
                             tex = "À";
                         }else if(ntex == 184){
                             tex = "©";
                         }else if(ntex == 185){
                             tex = "╣";
                         }else if(ntex == 186){
                             tex = "║";
                         }else if(ntex == 187){
                             tex = "╗";
                         }else if(ntex == 188){
                             tex = "╝";
                         }else if(ntex == 189){
                             tex = "¢";
                         }else if(ntex == 190){
                             tex = "¥";
                         }else if(ntex == 191){
                             tex = "┐";
                         }else if(ntex == 192){
                             tex = "└";
                         }else if(ntex == 193){
                             tex = "┴";
                         }else if(ntex == 194){
                             tex = "┬";
                         }else if(ntex == 195){
                             tex = "├";
                         }else if(ntex == 196){
                             tex = "─";
                         }else if(ntex == 197){
                             tex = "┼";
                         }else if(ntex == 198){
                             tex = "ã";
                         }else if(ntex == 199){
                             tex = "Ã";
                         }else if(ntex == 200){
                             tex = "╚";
                         }else if(ntex == 201){
                             tex = "╔";
                         }else if(ntex == 202){
                             tex = "╩";
                         }else if(ntex == 203){
                             tex = "╦";
                         }else if(ntex == 204){
                             tex = "╠";
                         }else if(ntex == 205){
                             tex = "═";
                         }else if(ntex == 206){
                             tex = "╬";
                         }else if(ntex == 207){
                             tex = "¤";
                         }else if(ntex == 208){
                             tex = "ð";
                         }else if(ntex == 209){
                             tex = "Ð";
                         }else if(ntex == 210){
                             tex = "Ê";
                         }else if(ntex == 211){
                             tex = "Ë";
                         }else if(ntex == 212){
                             tex = "È";
                         }else if(ntex == 213){
                             tex = "ı";
                         }else if(ntex == 214){
                             tex = "Í";
                         }else if(ntex == 215){
                             tex = "Î";
                         }else if(ntex == 216){
                             tex = "Ï";
                         }else if(ntex == 217){
                             tex = "┘";
                         }else if(ntex == 218){
                             tex = "┌";
                         }else if(ntex == 219){
                             tex = "█";
                         }else if(ntex == 220){
                             tex = "▄";
                         }else if(ntex == 221){
                             tex = "¦";
                         }else if(ntex == 222){
                             tex = "Ì";
                         }else if(ntex == 223){
                             tex = "▀";
                         }else if(ntex == 224){
                             tex = "Ó";
                         }else if(ntex == 225){
                             tex = "ß";
                         }else if(ntex == 226){
                             tex = "Ô";
                         }else if(ntex == 227){
                             tex = "Ò";
                         }else if(ntex == 228){
                             tex = "õ";
                         }else if(ntex == 229){
                             tex = "Õ";
                         }else if(ntex == 230){
                             tex = "µ";
                         }else if(ntex == 231){
                             tex = "þ";
                         }else if(ntex == 232){
                             tex = "Þ";
                         }else if(ntex == 233){
                             tex = "Ú";
                         }else if(ntex == 234){
                             tex = "Û";
                         }else if(ntex == 235){
                             tex = "Ù";
                         }else if(ntex == 236){
                             tex = "ý";
                         }else if(ntex == 237){
                             tex = "Ý";
                         }else if(ntex == 238){
                             tex = "¯";
                         }else if(ntex == 239){
                             tex = "´";
                         }else if(ntex == 240){
                             tex = "­";
                         }else if(ntex == 241){
                             tex = "±";
                         }else if(ntex == 242){
                             tex = "‗";
                         }else if(ntex == 243){
                             tex = "¾";
                         }else if(ntex == 244){
                             tex = "¶";
                         }else if(ntex == 245){
                             tex = "§";
                         }else if(ntex == 246){
                             tex = "÷";
                         }else if(ntex == 247){
                             tex = "¸";
                         }else if(ntex == 248){
                             tex = "°";
                         }else if(ntex == 249){
                             tex = "¨";
                         }else if(ntex == 250){
                             tex = "·";
                         }else if(ntex == 251){
                             tex = "¹";
                         }else if(ntex == 252){
                             tex = "³";
                         }else if(ntex == 253){
                             tex = "²";
                         }else if(ntex == 254){
                             tex = "■";
                         }else if(ntex == 255){
                             tex = " ";
                         }if(ntex > 0){
                            num = num + '「'+`${ntex}`+ '→' + `${tex}`+'」' ;
                            console.log("a")
                            
                      }
                         res = res+tex;
                         console.log(ntex)
                         ntex = 0;
                     }
                     console.log(ntex);

                 }else if(ax[i] > 1 || ax[i] < 0){
                    console.log(ax)
                      res = "Error de sintaxis"; 
                      con = ax.length;
                      break;
                   }

                // console.log(con)
                 con++;
              //console.log(res)
             }
             ax = "";
    }
    n++;
    v = 0;
    resultado.textContent = `${num}`;
    result.textContent = `${res}`;
}

    res = "";
  /*
    
    */
}




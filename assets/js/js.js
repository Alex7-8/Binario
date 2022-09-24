
//const resultado = [];
var res="";
var rest = "";
window.addEventListener('load', function(){
 const resultado = document.getElementById("resultado").value;
 const result = document.getElementById("result").value;

 const textobin = document.getElementById("textobin").value;
 const bintexto = document.getElementById("bintexto").value;
});
function obtenerbt(){
    var bin = document.getElementById("bin").value;
    conversion(bin);

}

function obtenertb(){
    var bin = document.getElementById("text").value;
    
   conversiontexto(bin);

}

function obtenerbd(){
    var bin = document.getElementById("bin").value;
    
    //console.log(bin);
   // bucle(bin);
  // conversion(bin);
   //conversiontexto(bin);
   decimal(bin);
}
function obtenerdb(){
    var bin = document.getElementById("bin").value;
    
    //console.log(bin);
   // bucle(bin);
  // conversion(bin);
   //conversiontexto(bin);
   decimal(bin);
}
/**convertir binario a decimal **/
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

/**convertir binario a texto **/
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
      //  console.log(ax)
        
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
                         //   console.log("a")
                            
                      }
                         res = res+tex;
                       //  console.log(ntex)
                         ntex = 0;
                     }
                  //   console.log(ntex);

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

/**convertir texto a binario **/
function conversiontexto(ctex){
var a = "";
var bx = "";
var cx = "";
var rx = "";
var num = "";
    for(let i = 0; i< ctex.length; i++){
        if(ctex[i] == "NULL"){
            a = a + "0";
            console.log("aqui")
        }else if(ctex[i] == "SOH"){
            a = a + "1";
        }else if(ctex[i] == "STX"){
            a = a + "2";
        }else if(ctex[i] == "ETX"){
            a = a + "3";
        }else if(ctex[i] == "EOT"){
            a = a + "4";
        }else if(ctex[i] == "ENQ"){  
            a = a + "5";
        }else if(ctex[i] == "ACK"){
            a = a + "6";
        }else if(ctex[i] == "BEL"){
            a = a + "7";
        }else if(ctex[i] == "BS"){
            a = a + "8";
        }else if(ctex[i] == "HT"){
            a = a + "9";
        }else if(ctex[i] == "LF"){
            a = a + "10";
        }else if(ctex[i] == "VT"){
            a = a + "11";
        }else if(ctex[i] == "FF"){
            a = a + "12";
        }else if(ctex[i] == "CR"){
            a = a + "13";
        }else if(ctex[i] == "SO"){
            a = a + "14";
        }else if(ctex[i] == "SI"){
            a = a + "15";
        }else if(ctex[i] == "DLE"){
            a = a + "16";
        }else if(ctex[i] == "DC1"){
            a = a + "17";
        }else if(ctex[i] == "DC2"){
            a = a + "18";
        }else if(ctex[i] == "DC3"){
            a = a + "19";
        }else if(ctex[i] == "DC4"){
            a = a + "20";
        }else if(ctex[i] == "NAK"){
            a = a + "21";
        }else if(ctex[i] == "SYN"){
            a = a + "22";
        }else if(ctex[i] == "ETB"){
            a = a + "23";
        }else if(ctex[i] == "CAN"){
            a = a + "24";
        }else if(ctex[i] == "EM"){
            a = a + "25";
        }else if(ctex[i] == "SUB"){
            a = a + "26";
        }else if(ctex[i] == "ESC"){
            a = a + "27";
        }else if(ctex[i] == "FS"){
            a = a + "28";
        }else if(ctex[i] == "GS"){
            a = a + "29";
        }else if(ctex[i] == "RS"){
            a = a + "30";
        }else if(ctex[i] == "US"){
            a = a + "31";
        }else if(ctex[i] == " "){
            a = a + "32";
        }else if(ctex[i] == "!"){
            a = a + "33";
        }else if(ctex[i] == '"'){
            a = a + "34";
        }else if(ctex[i] == "#"){
            a = a + "35";
        }else if(ctex[i] == "$"){
            a = a + "36";
        }else if(ctex[i] == "%"){
            a = a + "37";
        }else if(ctex[i] == "&"){
            a = a + "38";
        }else if(ctex[i] == "'"){
            a = a + "39";
        }else if(ctex[i] == "("){
            a = a + "40";
        }else if(ctex[i] == ")"){
            a = a + "41";
        }else if(ctex[i] == "*"){
            a = a + "42";
        }else if(ctex[i] == "+"){
            a = a + "43";
        }else if(ctex[i] == ","){
            a = a + "44";
        }else if(ctex[i] == "-"){
            a = a + "45";
        }else if(ctex[i] == "."){
            a = a + "46";
        }else if(ctex[i] == "/"){
            a = a + "47";
        }else if(ctex[i] == "0"){
            a = a + "48";
        }else if(ctex[i] == "1"){
            a = a + "49";
        }else if(ctex[i] == "2"){
            a = a + "50";
        }else if(ctex[i] == "3"){
            a = a + "51";
        }else if(ctex[i] == "4"){
            a = a + "52";
        }else if(ctex[i] == "5"){
            a = a + "53";
        }else if(ctex[i] == "6"){
            a = a + "54";
        }else if(ctex[i] == "7"){
            a = a + "55";
        }else if(ctex[i] == "8"){
            a = a + "56";
        }else if(ctex[i] == "9"){
            a = a + "57";
        }else if(ctex[i] == ":"){
            a = a + "58";
        }else if(ctex[i] == ";"){
            a = a + "59";
        }else if(ctex[i] == "<"){
            a = a + "60";
        }else if(ctex[i] == "="){
            a = a + "61";
        }else if(ctex[i] == ">"){
            a = a + "62";
        }else if(ctex[i] == "?"){
            a = a + "63";
        }else if(ctex[i] == "@"){
            a = a + "64";
        }else if(ctex[i] == "A"){
            a = a + "65";
        }else if(ctex[i] == "B"){
            a = a + "66";
        }else if(ctex[i] == "C"){
            a = a + "67";
        }else if(ctex[i] == "D"){
            a = a + "68";
        }else if(ctex[i] == "E"){
            a = a + "69";
        }else if(ctex[i] == "F"){
            a = a + "70";
        }else if(ctex[i] == "G"){
            a = a + "71";
        }else if(ctex[i] == "H"){
            a = a + "72";
        }else if(ctex[i] == "I"){
            a = a + "73";
        }else if(ctex[i] == "J"){
            a = a + "74";
        }else if(ctex[i] == "K"){
            a = a + "75";
        }else if(ctex[i] == "L"){
            a = a + "76";
        }else if(ctex[i] == "M"){
            a = a + "77";
        }else if(ctex[i] == "N"){
            a = a + "78";
        }else if(ctex[i] == "O"){
            a = a + "79";
        }else if(ctex[i] == "P"){
            a = a + "80";
        }else if(ctex[i] == "Q"){
            a = a + "81";
        }else if(ctex[i] == "R"){
            a = a + "82";
        }else if(ctex[i] == "S"){
            a = a + "83";
        }else if(ctex[i] == "T"){
            a = a + "84";
        }else if(ctex[i] == "U"){
            a = a + "85";
        }else if(ctex[i] == "V"){
            a = a + "86";
        }else if(ctex[i] == "W"){
            a = a + "87";
        }else if(ctex[i] == "X"){
            a = a + "88";
        }else if(ctex[i] == "Y"){
            a = a + "89";
        }else if(ctex[i] == "Z"){
            a = a + "90";
        }else if(ctex[i] == "["){
            a = a + "91";
        }else if(ctex[i] == "\""){
            a = a + "92";
        }else if(ctex[i] == "]"){
            a = a + "93";
        }else if(ctex[i] == "^"){
            a = a + "94";
        }else if(ctex[i] == "_"){
            a = a + "95";
        }else if(ctex[i] == "`"){
            a = a + "96";
        }else if(ctex[i] == "a"){
            a = a + "97";
        }else if(ctex[i] == "b"){
            a = a + "98";
        }else if(ctex[i] == "c"){
            a = a + "99";
        }else if(ctex[i] == "d"){    
            a = a + "100";
        }else if(ctex[i] == "e"){
            a = a + "101";
        }else if(ctex[i] == "f"){
            a = a + "102";
        }else if(ctex[i] == "g"){
            a = a + "103";
        }else if(ctex[i] == "h"){
            a = a + "104";
        }else if(ctex[i] == "i"){
            a = a + "105";
        }else if(ctex[i] == "j"){
            a = a + "106";
        }else if(ctex[i] == "k"){
            a = a + "107";
        }else if(ctex[i] == "l"){
            a = a + "108";
        }else if(ctex[i] == "m"){
            a = a + "109";
        }else if(ctex[i] == "n"){
            a = a + "110";
        }else if(ctex[i] == "o"){
            a = a + "111";
        }else if(ctex[i] == "p"){
            a = a + "112";
        }else if(ctex[i] == "q"){
            a = a + "113";
        }else if(ctex[i] == "r"){
            a = a + "114";
        }else if(ctex[i] == "s"){
            a = a + "115";
        }else if(ctex[i] == "t"){
            a = a + "116";
        }else if(ctex[i] == "u"){
            a = a + "117";
        }else if(ctex[i] == "v"){
            a = a + "118";
        }else if(ctex[i] == "w"){
            a = a + "119";
        }else if(ctex[i] == "x"){
            a = a + "120";
        }else if(ctex[i] == "y"){
            a = a + "121";
        }else if(ctex[i] == "z"){
            a = a + "122";
        }else if(ctex[i] == "{"){
            a = a + "123";
        }else if(ctex[i] == "|"){
            a = a + "124";
        }else if(ctex[i] == "}"){
            a = a + "125";
        }else if(ctex[i] == "~"){
            a = a + "126";
        }else if(ctex[i] == "Ç"){
            a = a + "128";
        }else if(ctex[i] == "ü"){
            a = a + "129";
        }else if(ctex[i] == "é"){
            a = a + "130";
        }else if(ctex[i] == "â"){
            a = a + "131";
        }else if(ctex[i] == "ä"){
            a = a + "132";
        }else if(ctex[i] == "à"){
            a = a + "133";
        }else if(ctex[i] == "å"){
            a = a + "134";
        }else if(ctex[i] == "ç"){
            a = a + "135";
        }else if(ctex[i] == "ê"){
            a = a + "136";
        }else if(ctex[i] == "ë"){
            a = a + "137";
        }else if(ctex[i] == "è"){
            a = a + "138";
        }else if(ctex[i] == "ï"){
            a = a + "139";
        }else if(ctex[i] == "î"){
            a = a + "140";
        }else if(ctex[i] == "ì"){
            a = a + "141";
        }else if(ctex[i] == "Ä"){
            a = a + "142";
        }else if(ctex[i] == "Å"){
            a = a + "143";
        }else if(ctex[i] == "É"){
            a = a + "144";
        }else if(ctex[i] == "æ"){
            a = a + "145";
        }else if(ctex[i] == "Æ"){
            a = a + "146";
        }else if(ctex[i] == "ô"){
            a = a + "147";
        }else if(ctex[i] == "ö"){
            a = a + "148";
        }else if(ctex[i] == "ò"){
            a = a + "149";
        }else if(ctex[i] == "û"){
            a = a + "150";
        }else if(ctex[i] == "ù"){
            a = a + "151";
        }else if(ctex[i] == "ÿ"){
            a = a + "152";
        }else if(ctex[i] == "Ö"){
            a = a + "153";
        }else if(ctex[i] == "Ü"){
            a = a + "154";
        }else if(ctex[i] == "ø"){
            a = a + "155";
        }else if(ctex[i] == "£"){
            a = a + "156";
        }else if(ctex[i] == "Ø"){
            a = a + "157";
        }else if(ctex[i] == "×"){
            a = a + "158";
        }else if(ctex[i] == "ƒ"){
            a = a + "159";
        }else if(ctex[i] == "á"){
            a = a + "160";
        }else if(ctex[i] == "í"){
            a = a + "161";
        }else if(ctex[i] == "¢"){
            a = a + "162";
        }else if(ctex[i] == "£"){
            a = a + "163";
        }else if(ctex[i] == "¤"){
            a = a + "164";
        }else if(ctex[i] == "¥"){
            a = a + "165";
        }else if(ctex[i] == "¦"){
            a = a + "166";
        }else if(ctex[i] == "§"){
            a = a + "167";
        }else if(ctex[i] == "¨"){
            a = a + "168";
        }else if(ctex[i] == "©"){
            a = a + "169";
        }else if(ctex[i] == "ª"){
            a = a + "170";
        }else if(ctex[i] == "«"){
            a = a + "171";
        }else if(ctex[i] == "¬"){
            a = a + "172";
        }else if(ctex[i] == "­"){
            a = a + "173";
        }else if(ctex[i] == "®"){
            a = a + "174";
        }else if(ctex[i] == "¯"){
            a = a + "175";
        }else if(ctex[i] == "°"){
            a = a + "176";
        }else if(ctex[i] == "±"){
            a = a + "177";
        }else if(ctex[i] == "²"){
            a = a + "178";
        }else if(ctex[i] == "³"){
            a = a + "179";
        }else if(ctex[i] == "´"){
            a = a + "180";
        }else if(ctex[i] == "µ"){
            a = a + "181";
        }else if(ctex[i] == "¶"){
            a = a + "182";
        }else if(ctex[i] == "·"){
            a = a + "183";
        }else if(ctex[i] == "¸"){
            a = a + "184";
        }else if(ctex[i] == "¹"){
            a = a + "185";
        }else if(ctex[i] == "º"){
            a = a + "186";
        }else if(ctex[i] == "»"){
            a = a + "187";
        }else if(ctex[i] == "¼"){
            a = a + "188";
        }else if(ctex[i] == "½"){
            a = a + "189";
        }else if(ctex[i] == "¾"){
            a = a + "190";
        }else if(ctex[i] == "¿"){
            a = a + "191";
        }else if(ctex[i] == "À"){
            a = a + "192";
        }else if(ctex[i] == "Á"){
            a = a + "193";
        }else if(ctex[i] == "Â"){
            a = a + "194";
        }else if(ctex[i] == "Ã"){
            a = a + "195";
        }else if(ctex[i] == "Ä"){
            a = a + "196";
        }else if(ctex[i] == "Å"){
            a = a + "197";
        }else if(ctex[i] == "Æ"){
            a = a + "198";
        }else if(ctex[i] == "Ç"){
            a = a + "199";
        }else if(ctex[i] == "È"){
            a = a + "200";
        }else if(ctex[i] == "É"){
            a = a + "201";
        }else if(ctex[i] == "Ê"){
            a = a + "202";
        }else if(ctex[i] == "Ë"){
            a = a + "203";
        }else if(ctex[i] == "Ì"){
            a = a + "204";
        }else if(ctex[i] == "Í"){
            a = a + "205";
        }else if(ctex[i] == "Î"){
            a = a + "206";
        }else if(ctex[i] == "Ï"){    
            a = a + "207";
        }else if(ctex[i] == "Ð"){
            a = a + "208";
        }else if(ctex[i] == "Ñ"){
            a = a + "209";
        }else if(ctex[i] == "Ò"){
            a = a + "210";
        }else if(ctex[i] == "Ó"){
            a = a + "211";
        }else if(ctex[i] == "Ô"){
            a = a + "212";
        }else if(ctex[i] == "Õ"){
            a = a + "213";
        }else if(ctex[i] == "Ö"){
            a = a + "214";
        }else if(ctex[i] == "×"){
            a = a + "215";
        }else if(ctex[i] == "Ø"){
            a = a + "216";
        }else if(ctex[i] == "Ù"){
            a = a + "217";
        }else if(ctex[i] == "Ú"){
            a = a + "218";
        }else if(ctex[i] == "Û"){
            a = a + "219";
        }else if(ctex[i] == "Ü"){
            a = a + "220";
        }else if(ctex[i] == "Ý"){
            a = a + "221";
        }else if(ctex[i] == "Þ"){
            a = a + "222";
        }else if(ctex[i] == "ß"){
            a = a + "223";
        }else if(ctex[i] == "à"){
            a = a + "224";
        }else if(ctex[i] == "á"){
            a = a + "225";
        }else if(ctex[i] == "â"){
            a = a + "226";
        }else if(ctex[i] == "ã"){
            a = a + "227";
        }else if(ctex[i] == "ä"){
            a = a + "228";
        }else if(ctex[i] == "å"){
            a = a + "229";
        }else if(ctex[i] == "æ"){
            a = a + "230";
        }else if(ctex[i] == "ç"){
            a = a + "231";
        }else if(ctex[i] == "è"){
            a = a + "232";
        }else if(ctex[i] == "é"){
            a = a + "233";
        }else if(ctex[i] == "ê"){
            a = a + "234";
        }else if(ctex[i] == "ë"){
            a = a + "235";
        }else if(ctex[i] == "ì"){
            a = a + "236";
        }else if(ctex[i] == "í"){
            a = a + "237";
        }else if(ctex[i] == "î"){    
            a = a + "238";
        }else if(ctex[i] == "ï"){
            a = a + "239";
        }else if(ctex[i] == "ð"){
            a = a + "240";
        }else if(ctex[i] == "ñ"){
            a = a + "241";
        }else if(ctex[i] == "ò"){
            a = a + "242";
        }else if(ctex[i] == "ó"){
            a = a + "243";
        }else if(ctex[i] == "ô"){
            a = a + "244";
        }else if(ctex[i] == "õ"){
            a = a + "245";
        }else if(ctex[i] == "ö"){
            a = a + "246";
        }else if(ctex[i] == "÷"){
            a = a + "247";
        }else if(ctex[i] == "ø"){
            a = a + "248";
        }else if(ctex[i] == "ù"){
            a = a + "249";
        }else if(ctex[i] == "ú"){
            a = a + "250";
        }else if(ctex[i] == "û"){
            a = a + "251";
        }else if(ctex[i] == "ü"){
            a = a + "252";
        }else if(ctex[i] == "ý"){
            a = a + "253";
        }else if(ctex[i] == "þ"){
            a = a + "254";
        }else if(ctex[i] == "ÿ"){
            a = a + "255";
        }
            bx = a
        //console.log(a)

        
            if(bx >= 128){
                bx = bx - 128;
                cx = cx + "1";
            }else{
                cx = cx + "0";
 
               
            }
            
            if(bx >= 64){
                bx = bx - 64;
                cx = cx + "1";
    
            }else {
                cx = cx + "0";
             
            }
            
            if(bx >= 32){
                bx = bx - 32;
                cx = cx + "1";
   
            }else{
                cx = cx + "0";
          
            }
            if(bx >= 16){
                bx = bx - 16;
                cx = cx + "1";

            }else{
                cx = cx + "0";
            }
             if(bx >= 8){
                bx = bx - 8;
                cx = cx + "1";
            }else{
                cx = cx + "0";

            }
            if(bx >= 4){
                bx = bx - 4;
                cx = cx + "1";
            }else{
                cx = cx + "0";

           
            }
            if(bx >= 2){
                bx = bx - 2;
                cx = cx + "1";
            }else{
                cx = cx + "0";

       
            }
            if(bx >= 1){
                bx = bx - 1;
                cx = cx + "1";

            }else{
                cx = cx + "0";
            }
            
            if(cx.length == 8){
               rx = rx + cx + ' ';
               num = num + '「'+`${a}`+ '→' + `${cx}`+'」' ;
            }
    
            
          //  console.log(bx)


        rest = rest+cx+' ';
        //console.log(rest);
        a = '';
       // console.log(cx.length);
       
        cx = '';
       
        //console.log(ctex[i])
    }
      // console.log(rx)
        
        textobin.textContent = `${num}`;
        bintexto.textContent = `${rest}`;
        rest ="";

}

/**convertir decimal a binario **/
function decimal(dbin) {
var bx = dbin;
var cx = "";
var rx = "";
var a = "";
    /* if(bx >= 2048){
        bx = bx - 2048;
        cx = cx + "1";
        }else{
        cx = cx + "0";   
        }
    if(bx >= 1024){
    bx = bx - 1024;
    cx = cx + "1";
    }else{
    cx = cx + "0";   
    }
    if(bx >= 512){
    bx = bx - 512;
    cx = cx + "1";
    }else{
    cx = cx + "0";   
    }
    if(bx >= 256){
     bx = bx - 256;
     cx = cx + "1";
        }else{
        cx = cx + "0";   
    } */

    if(bx >= 128){
        bx = bx - 128;
        cx = cx + "1";
    }else{
        cx = cx + "0";   
    }
    
    if(bx >= 64){
        bx = bx - 64;
        cx = cx + "1";

    }else {
        cx = cx + "0";
     
    }
    
    if(bx >= 32){
        bx = bx - 32;
        cx = cx + "1";

    }else{
        cx = cx + "0";
  
    }
    if(bx >= 16){
        bx = bx - 16;
        cx = cx + "1";

    }else{
        cx = cx + "0";
    }
     if(bx >= 8){
        bx = bx - 8;
        cx = cx + "1";
    }else{
        cx = cx + "0";

    }
    if(bx >= 4){
        bx = bx - 4;
        cx = cx + "1";
    }else{
        cx = cx + "0";

   
    }
    if(bx >= 2){
        bx = bx - 2;
        cx = cx + "1";
    }else{
        cx = cx + "0";


    }
    if(bx >= 1){
        bx = bx - 1;
        cx = cx + "1";

    }else{
        cx = cx + "0";
    }
    
 /*     if(cx.length == 8){
      a = a + cx + ' ';
    } */
    rx = rx + cx + ' ';
    console.log(rx)
}




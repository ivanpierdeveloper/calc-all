'use strict'
// testing
// cls.messaggio("Call method messaggio");
// fnc.showMyAlert("titolo", "messaggio.", "var(--info)", "var(--white)", "var(--warning)", "var(--dark)");

async function alertDefault(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--darkorchid)', 'var(--white)', 'var(--white)', 'var(--dark)');
}

async function alertLoad(msg) {
    await fnc.loader();
    setTimeout(fnc.loaderHide, 2000);
}

async function alertLoadText(msg, img) {
    await fnc.loaderText(msg,'var(--dark)', 'var(--silver)', 'var(--danger)', img, '8px', '75', '75');
    setTimeout(fnc.loaderTextHide, 2000);
}

async function alertWarning(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--warning)', 'var(--white)', 'var(--white)', 'var(--dark)');
}

async function alertDanger(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--danger)', 'var(--white)', 'var(--white)', 'var(--dark)');
}

async function alertCustomized(msg) {
    await fnc.showMyAlert("MESSAGGIO", msg, 'var(--primary)', 'var(--white)', 'var(--white)', 'var(--dark)');
}
// BEGIN
// questo è l'ordine con cui prosegue da 0 a F.
const alfanumerico = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// let obj         = new Object();
// let arObj       = new Array();
let strToAr     = new Array();
let createBin   = new String();
let num         = new Number();
let defineBin   = new Array();
let defineTemp  = new Array();
var val_bin     = new String();
var val_hex     = new String();
var val_dec     = new String();
/*
obj = [
    {
        bin0 : "0000",
        bin1: "0001", 
        bin2: "0010",  
        bin3: "0011",  
        bin4: "0100",  
        bin5: "0101",  
        bin6: "0110",  
        bin7: "0111",  
        bin8: "1000",  
        bin9: "1001",  
        bin10: "1010", 
        bin11: "1011",  
        bin12: "1100",  
        bin13: "1001",  
        bin14: "1111"  
    }
];
arObj.push(obj);
*/
// BINARIO
var valueInputBin = document.querySelector('.value-binario');
function calcoloBin() {
    try {
        cn.clear();
        val_bin = String();
        var bin = new Number();
        var objBin = new Object();
        var contentBin = new Array();
        var t = new Array();
        var sum = new Number();
        var valida = new Number();
        var i = new Number();
        var x = new Number();
        var y = new Number();
        bin = valueInputBin.value;
        if(bin) {
            strToAr = bin.split(""); // FROM STRING OR NUMBER TO ARRAY (SINGLE ELEMENTS)
            // strToAr.reverse(); OR strToAr.sort()
            valida = 1;
            //controllo se la stringa è valida
            for(i = 0; i < strToAr.length; i++)
                if(strToAr[i] != 0 && strToAr[i] != 1)
                    valida = 0;
            if(valida == 1) {
            //converto il vettore di caratteri in vettore di interi
                for(x = 0; x < strToAr.length; x++)
                    t.push(parseInt(strToAr[x]));
                    t.reverse();//inversione del vettore di interi
                    sum = 0;
                //moltiplico ciascuna cifra binaria per il proprio peso
                for(y = 0; y < strToAr.length; y++)
                    sum+= Math.pow(2, y) * t[y];
                console.info(`BINARY ${valueInputBin.value}`);
                console.info(`DECIMAL ${sum}`);
                console.info(`HEX ${sum.toString(16)}`);
                // console.info(`OTTALE ${554..toString(8)}`); USA QUESTO METODO PER FARE VELOCEMENTE TEST 554..
                console.info(`OCTAL ${sum.toString(8)}`);
                objBin = [
                    {
                        "binary" : valueInputBin.value,
                        "decimal" : sum,
                        "hex"   : sum.toString(16),
                        "octal" : sum.toString(8)
                    }
                ];
                console.table(
                    {
                        result : objBin,
                        decimal : objBin[0].decimal
                    }
                )
            } else 
                
                console.warn('stringa non valida');
            valueInputBin.value = String();
            createTable(objBin, '.grid-add-binary-all', "decimale, hex esa esadecimale e ottale",
            "binario", "decimale", "hex", "ottale", "conversione da binario a decimale, esadecimale e ottale", "bin");
        } else {
            cn.table(
                {
                    messaggio : "Campo binario non può essere vuoto oppure valore non corretto",
                    error : 1
                }
            )
            fnc.showMyAlert("ATTENZIONE", `il campo binario vuoto oppure formato non corretto.`, 'var(--danger)', 'var(--warning)', 'var(--warning)', 'var(--dark)');
        }
    }// ./try
    catch(Exception) {
        cn.table(
            {
                message : Exception.message,
                name : Exception.name,
                linea : Exception.lineNumber
            }
        )
    }
}// ./BINARIO
// HEX
var arrDec = new Array;
var arrDecDefault = new Array;
var valueInputHex = document.querySelector('.value-esadecimale');
async function calcoloHex() {
    try {
        console.clear();
        var valore = new String();
        var valoreDecimale = new Number;
        var objHex = new Object();
        var contentHex = new Array();
        valore = valueInputHex.value;
        //prompt("Scrivi il valore esadecimale solo alfanumerico e senza spazi es. 22A o 22a");
        var regEx = /^[0-9a-zA-Z]+$/;
        if(valore.match(regEx)) {
            var orderReverse = arrDec.reverse();
            var converNum   = new Number();
            var base16      = 1;
            for(var x = 0; x < orderReverse.length; x++) {
                switch(orderReverse[x].toUpperCase()) {
                    case "A":
                        converNum += 10 * base16;                               
                        break;
                    case "B":
                        converNum += 11 * base16;
                        break;
                    case "C":
                        converNum += 12 * base16;                               
                        break;
                    case "D":
                        converNum += 13 * base16;                                
                        break;
                    case "E":
                        converNum += 14 * base16;                            
                        break;
                    case "F":
                        converNum += 15 * base16;                                
                        break;
                    default:
                        converNum += orderReverse[x] * base16;
                        break;
                }// ./switch
                base16 = base16 * 16;
            }// ./for
            objHex = [
                {
                    hex : valore,
                    decimal : converNum,
                    binary : converNum.toString(2),
                    octal : converNum.toString(8)
                }
            ]
            createTable(objHex, '.grid-add-hex-all', "decimale, binario e ottale",
            "hex", "decimale", "binario", "ottale", "conversione da esadecimale a decimale, binario e ottale", "hex");
            cn.table(
                {
                   arrayDefault: arrDecDefault,
                   decimal : converNum,
                   binary : converNum.toString(2),
                   octal : converNum.toString(8)
                }
            );
            val_hex             = String();
            arrDec              = Array();
            arrDecDefault       = Array();
            valueInputHex.value = String();
        } else {
            //cn.warn("Errore. Il valore inserito non è alfanumerico.")
            fnc.showMyAlert("ATTENZIONE", `${valueInputHex.value} formato non corretto o campo vuoto. no spazi`, 'var(--danger)', 'var(--warning)', 'var(--warning)', 'var(--dark)');
            return false;
        }
    } catch(Exception) {
        cn.table(
            {
                message : Exception.message,
                name : Exception.name
            }
        )// ./cn
    }
}// ./HEX
// create view table
var repeatCallEsa = new Number();
async function createTable(obj, classTable, titleTable, th1Title, th2Title, th3Title, th4Title, td1Footer, call){
    try {
        var i = new Number();
        repeatCallEsa += 1;
        const div       = document.querySelector(`${classTable}`);
        div.style.setProperty('visibility', 'visible');
        let tbl         = document.createElement('table');
        let titleTbl    = document.createElement('caption');
        let headTbl     = document.createElement('thead');
        let trHead      = document.createElement('tr');
        let bodyTbl     = document.createElement('tbody');
        let trBody      = document.createElement('tr');
        let tfoot       = document.createElement('tfoot');
        let trFoot      = document.createElement('tr');
        let tdFoot      = document.createElement('td');
        
        const textTitle = document.createTextNode(`${titleTable}-${repeatCallEsa}`);
        titleTbl.appendChild(textTitle);
        tbl.appendChild(titleTbl);


        // creo il titolo delle colonne
        let thBinary    = document.createElement('th');
        let thDecimal   = document.createElement('th');
        let thHex       = document.createElement('th');
        let thOctal     = document.createElement('th');
        // popolo il titolo
        // 1° metodo
        let thBinaryText = document.createTextNode(th1Title);
        thBinary.appendChild(thBinaryText);
        //2° metodo
        thDecimal.innerHTML = th2Title;
        thHex.innerHTML = th3Title;
        thOctal.innerHTML = th4Title;
        // aggiungo le th alla tr
        trHead.appendChild(thBinary);
        trHead.appendChild(thDecimal);
        trHead.appendChild(thHex);
        trHead.appendChild(thOctal);
        // creo le colonne td
        let tdBinary    = document.createElement('td');
        let tdDecimal   = document.createElement('td');
        let tdHex       = document.createElement('td');
        let tdOctal     = document.createElement('td');
        // popolo le colonne
        switch(call) {
            case "bin":
                tdBinary.innerHTML  = obj[0].binary;
                tdDecimal.innerHTML = obj[0].decimal;
                tdHex.innerHTML     = obj[0].hex.toUpperCase();
                tdOctal.innerHTML   = obj[0].octal;
                // aggiungo le td alla tr
                trBody.appendChild(tdBinary);
                trBody.appendChild(tdDecimal);
                trBody.appendChild(tdHex);
                trBody.appendChild(tdOctal);
                break;
            case "hex":
                tdHex.innerHTML     = obj[0].hex.toUpperCase();
                tdDecimal.innerHTML = obj[0].decimal;
                tdBinary.innerHTML  = obj[0].binary;
                tdOctal.innerHTML   = obj[0].octal;
                // aggiungo le td alla tr
                trBody.appendChild(tdHex);
                trBody.appendChild(tdDecimal);
                trBody.appendChild(tdBinary);
                trBody.appendChild(tdOctal);
                break;
            default:
                tdDecimal.innerHTML = obj[0].decimal;
                tdHex.innerHTML     = obj[0].hex.toUpperCase();
                tdBinary.innerHTML  = obj[0].binary;
                tdOctal.innerHTML   = obj[0].octal;
                // aggiungo le td alla tr
                trBody.appendChild(tdDecimal);
                trBody.appendChild(tdHex);
                trBody.appendChild(tdBinary);
                trBody.appendChild(tdOctal);
                break;
        }// ./switch
        /*
        while(i < arr.length) {
            let thHead = document.createElement('th');
            thHead.innerHTML = `unità ${i}`;
            trHead.appendChild(thHead);
            let tdBody = document.createElement('td');
            //arr.reverse();
            tdBody.innerHTML = arr[i];
            trBody.appendChild(tdBody);
            i++;
        }// ./while
        */
        headTbl.appendChild(trHead);
        bodyTbl.appendChild(trBody);

        tdFoot.colSpan = 4;
        tdFoot.innerHTML = td1Footer;
        trFoot.appendChild(tdFoot);
        tfoot.appendChild(trFoot);

        tbl.appendChild(headTbl);
        tbl.appendChild(bodyTbl);
        tbl.appendChild(tfoot);
        div.appendChild(tbl);
    } catch(Exception) {
        cn.table(
            {
                message : Exception.message,
                name    : Exception.name
            }
        )
    }// ./catch
}// ./create view table
// verifyKeyUpBin
async function verifyKeyUpBin() {
    cn.log(event.keyCode);
    if(event.keyCode != 48 && event.keyCode != 49 && event.keyCode != 96 && event.keyCode != 97 && event.keyCode != 8) {
        cn.info("Non hai premuto uno di questi tasti 48 49 96 97 8");
        valueInputBin.value = val_bin;
        /*
            esa = esa.slice(0, -1);
            arrDec.pop();
            arrDecDefault.pop(); 
        */
    } else {
        var keyUp   =  event.key;
        val_bin     += keyUp;
    }// ./if
}// ./// verifyKeyUpBin
// verify hex
function verifyHex() {
    var keyUp =  event.key.toUpperCase(); // name button pressed
    for(var i = 0; i < alfanumerico.length; i++) {
        if(keyUp == alfanumerico[i]) {
            val_hex += keyUp;
            valueInputHex.value = val_hex;
            arrDec.push(keyUp);
            arrDecDefault.push(keyUp);
            cn.info(`hex ${val_hex} ${event.keyCode} arrDec ${arrDec} arrDefault ${arrDecDefault}`);
            return false;
        } else {
            valueInputHex.value = val_hex;
            cn.error(`not value ${keyUp} ${event.keyCode}`); // name and code button pressed
        }
    }// ./for
}// ./verifyHex
// verifyKeyUpHex
async function verifyKeyUpHex() {
    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 8) {
        console.info("input was 0-9 plus backspace");
        // val_hex += event.key.toUpperCase();
        // valueInputHex.value  = val_hex;
        // (8 = BACKSPASE) (46 = CANC)
        if(event.keyCode == 8 || event.keyCode == 46) {
            val_hex = val_hex.slice(0, -1);
            arrDec.pop();
            arrDecDefault.pop();
        }
        verifyHex();
    } else if (event.keyCode >= 96 && event.keyCode <= 105) {
        cn.info("from 96 to 105 tastierino numerico");
        verifyHex();
    } else if (event.keyCode >= 65 && event.keyCode <= 90) {
        console.info("input was a-z");
        // val_hex += event.key.toUpperCase();
        // valueInputHex.value  = val_hex;
        verifyHex();
    } else { valueInputHex.value = val_hex; cn.warn(`keyCode ${event.keyCode}`); }
}// ./// verifyKeyUpHex
// verifyKeyUpDec
async function verifyKeyUpDec() {
    // TEMP DA SISTEMARE DOMANI (OGGI 02-17)
    if(event.keyCode == 13) {
        alert("Hai premuto INVIO");
    }
    if (event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode == 8) {
        await console.info("input was 0-9 plus backspace plus");
        // (8 = BACKSPASE) (46 = CANC)
        //val_dec += event.key.toUpperCase();
        if(event.keyCode == 8) {
            val_dec = val_dec.slice(0, -1);
        } else {
            val_dec += event.key;
        }
    } else if (event.keyCode >= 96 && event.keyCode <= 105) {
        cn.info("from 96 to 105 tastierino numerico");
        //val_dec += event.key.toUpperCase();
        val_dec += event.key;
    } else { cn.warn(`keyCode ${event.keyCode}`); }
    valueInputDec.value = val_dec;
}// ./// verifyKeyUpDec
// calcoloDec
var valueInputDec = document.querySelector('.value-decimale');
function calcoloDec() {
    try {
        cn.clear();
        var decimale = new Number();
        decimale = valueInputDec.value;//prompt("Scrivere solo numeri interi es. 10.00 = 1000"); //,null);
        if(decimale) {
            var numA    = new Number();
            var numB    = new Number();
            var numC    = new Number();
            var numD    = new Number();
            var arrDec  = new Array();
            var msg     = new String();
            var dec     = new Number();
            var objDec  = new Object();
            var contentDec = new Array();
            dec = decimale;
            if(Number(decimale)) {
                if(decimale.includes(".")) {
                    // intero = parseInt(decimale) * 100;
                    cn.table(
                        {
                            messaggio : "Non è un numero decimale. perchè non è un numero intero.",
                            error : `${dec}`
                        }
                    )
                    fnc.showMyAlert("ATTENZIONE", `${dec} non è un numero decimale. perchè non è un numero intero.`, 'var(--danger)', 'var(--warning)', 'var(--warning)', 'var(--dark)');
                } else {
                   while(decimale > 0) {
                        numB = parseInt(decimale / 16);
                        numC = parseInt(numB * 16);
                        numD = parseInt(decimale - numC);
                        cn.info(`B = ${numB} C = ${numD}`);
                        arrDec.push(alfanumerico[numD]); 
                        decimale = parseInt(decimale / 16);
                   }// ./while
                   // conver in number
                   var binary = parseInt(dec).toString(2);
                   var octal = parseInt(dec).toString(8);
                   var hexComplete = new String();
                   var conteggio = new Number();
                   var arReverse = new Array();
                   val_dec = String();
                   valueInputDec.value = String();
                   arReverse = arrDec.reverse();
                   while(conteggio < arReverse.length) {
                       hexComplete += arReverse[conteggio];
                       conteggio++;
                   }
                    cn.table(
                        {
                            decimal : parseInt(dec),
                            esadecimale : hexComplete, //arrDec.reverse(), //arr.sort()
                            binary : parseInt(binary),
                            octal : parseInt(octal)
                        }
                    )
                    objDec = [
                        {
                            decimal : parseInt(dec),
                            hex     : hexComplete,
                            binary  : parseInt(binary),
                            octal   : parseInt(octal)
                        }
                    ]
                    createTable(objDec, '.grid-add-dec-all', "esadecimale, binario e ottale", "decimale", "hex", "binario", "ottale",
                    "conversione da decimale a esadecimale, binario e ottale", "dec");
                // cn.info(alfanumerico[3]);
                }
            } else {
                cn.table(
                    {
                        messaggio : "Non è un numero decimale",
                        error : decimale
                    }
                )
                fnc.showMyAlert("ATTENZIONE", `${dec} non è un numero decimale.`, 'var(--danger)', 'var(--warning)', 'var(--warning)', 'var(--dark)');
            }
        } else { // ./if decimale != ""
            fnc.showMyAlert("ATTENZIONE", `il valore inserito non è un numero decimale o campo vuoto.`, 'var(--danger)', 'var(--warning)', 'var(--warning)', 'var(--dark)');
        }
    }// ./try
    catch(Exception) {
        console.error(`Messaggio di errore: ${Exception.message}`);
    }
}// ./calcoloDec
// clear DOM
async function domClear() {
    try{
        valueInputBin.value = "";
        valueInputHex.value = "";
        // await window.location.reload();
        const url = new URL(window.location.href);
       await window.location.assign(`${location.pathname}${location.search}`);
    } catch(Exception) {
        cn.table(
            {
                message : Exception.message,
                name : Exception.name,
                linea : Exception.lineNumber
            }
        )
    }

}
// ./clear DOM

// allParams
/*
function allParams() {
    try{
        console.clear();
        // throw new Error("Messaggio", "Errore", 486);
        // http://svilfi.utile.extranet.utilita.com/test/zip/study/?id=101&id2=102#pluto1,pluto2
        const params = new URL(window.location.href).searchParams.get('id2');
        console.table(
            {
                host : window.location.host, // svilfi.utile.extranet.utilita.com
                pathname : window.location.pathname, // /test/zip/study/
                search : window.location.search, // ?id=101&id2=102
                href : window.location.href, // http://svilfi.utile.extranet.utilita.com/test/zip/study/?id=101&id2=102#pluto1,pluto2
                search_params : params, // 102
                protocol : window.location.protocol, // http:
                port : window.location.port,
                hash : window.location.hash // #pluto1,pluto2
            }
        )
    } catch(Exception) {
        console.table(
            {
                message : Exception.message,
                name : Exception.name,
                linea : Exception.lineNumber
            }
        )
    }
}// ./allParams
*/
// allParams();
// from decimal to binary
/*
function convertToBinary1 (number) {
    let num = number;
    let binary = (num % 2).toString();
    console.info("binary first -> ", binary);
    //for (; num > 1; ) { // questa sintassi è uguale alla medesima del while!!!
    while(num > 1) {
        num = parseInt(num / 2);
        binary =  (num % 2) + (binary);
    }
    
    console.table(
        {
            "binary" : binary,
            "base 16" : number.toString(16).toUpperCase(),  // convert from decimal to hex esa
            "base 10" : number.toString(10),                // convert decimal to decimal
            "base 8" : number.toString(8),                  // convert decimal to ottale
            "base 2" : number.toString(2)                   // convert decimal to binary
            
        }
    )
}// .//from decimal to binary
*/
/*
window.onload = function () {
    console.log("16 ", convertToBinary1(16));
    console.log("8 ", convertToBinary1(8));
}
*/
// convertToBinary1(554);
/*
async function convertDecimal(value) {
    await console.table(
        {
            "base 16" : value.toString(16).toUpperCase(),  // convert from decimal to hex esa
            "base 10" : value.toString(10),                // convert decimal to decimal
            "base 8" :  value.toString(8),                 // convert decimal to ottale
            "base 2" :  value.toString(2)                  // convert decimal to binary
        }
    )
}// ./convertDecimal
convertDecimal(554);
*/
// function verify number
/* FUNZIONA PERFETTAMENTE */
/*
function verifyNumber(value) {
    var NaNn        = isNaN(value); // false se è un numero, true se è una stringa
    var isFinitee   = isFinite(value); // true se è un numero, false se è una stringa
    console.table(
        {
            "NaN" : NaNn,
            "isFinite" : isFinitee,
            "Object.is" : Object.is(value, 554) // in questo caso return true, value = 55 return false
        }
    )
}// ./function verify number
verifyNumber(554);
*/
// END
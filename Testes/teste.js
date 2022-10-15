function RandNumInterval(n1, n2){
    return Math.floor(Math.random()*(n2-n1)+n1)
}
/*[9*(10**(n1-1)), 1*(10**(n2-1))]*/


var hh = 0;
var mm = 50;
var ss = 0;

function timer (){
    ss++;
    if (ss==60){
        ss = 0;
        mm++;
        if (mm==60){
            mm = 0;
            hh++;
        }
    }
    console.log(`${hh < 10 ? '0'+hh : hh}:${mm < 10 ? '0'+mm : mm}:${ss < 10 ? '0'+ss : ss}`)
}


cron = setInterval(timer, 1)

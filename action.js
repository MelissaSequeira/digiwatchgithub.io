function showtime(){
    var date = new Date();
var h = date.getHours();
var s = date.getSeconds();
var m = date.getMinutes();
var daynight='AM';
if(h>12){
    h=h-12;
    daynight='PM';
}
if(h<10){
    h='0'+h;
}
if(m<10){
    m='0'+m;
}
if(s<10){
    s='0'+s;
}
document.querySelector('.digclock').innerHTML=h+" :"+m+" :"+s+" "+daynight;
setTimeout(showtime,1000);
}
showtime();
var grafiek1 = document.getElementById('stroom');
var grafiek2 = document.getElementById('water');
var stroomgrafiek = grafiek1.getContext('2d');
var soldaatgrafiek = grafiek2.getContext('2d');
//array voor waarden voor de grafiek
var stroomges = [50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50]
var soldaatges = [40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]
var stroommin = 99999999999999;
var stroommax = 0;
var soldaatmin = 9999999999999;
var watermax = 0;
var soldaatmultiplier =0;
for (i = 0; i < stroomges.length; i++){
  if(stroomges[i] < stroommin){
        stroommin = stroomges[i] -3;
        console.log("stroom min =" + stroommin);
    }
    if(stroomges[i] > stroommax){
        stroommax = stroomges[i] +3;
        console.log("stroom max =" + stroommax)
    }
}   
soldaatgrafiek.beginPath(); 
soldaatgrafiek.strokeStyle = "#477b8e";
soldaatgrafiek.moveTo(0 , 60 - (soldaatges[0]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(4, 60 - (soldaatges[1]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(8, 60 - (soldaatges[2]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(12, 60 - (soldaatges[3]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(16, 60 - (soldaatges[4]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(20, 60 - (soldaatges[5]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(24, 60 - (soldaatges[6]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(28, 60 - (soldaatges[7]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(32, 60 - (soldaatges[8]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(36, 60 - (soldaatges[9]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(40, 60 - (soldaatges[10]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(44, 60 - (soldaatges[11]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(48, 60 - (soldaatges[12]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(52, 60 - (soldaatges[13]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(56, 60 - (soldaatges[14]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(60, 60 - (soldaatges[15]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(64, 60 - (soldaatges[16]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(68, 60 - (soldaatges[17]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(72, 60 - (soldaatges[18]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(76, 60 - (soldaatges[19]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(80, 60 - (soldaatges[20]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(84, 60 - (soldaatges[21]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(88, 60 - (soldaatges[22]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(92, 60 - (soldaatges[23]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(96, 60 - (soldaatges[24]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(100, 60 - (soldaatges[25]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(104, 60 - (soldaatges[26]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(108, 60 - (soldaatges[27]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(112, 60 - (soldaatges[28]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(116, 60 - (soldaatges[29]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.lineTo(120, 60 - (soldaatges[30]-soldaatmin)*soldaatmultiplier);
soldaatgrafiek.stroke(); 
soldaatgrafiek.fillStyle = "#FFFFFF";
soldaatgrafiek.font = "bolder 20px Arial";
soldaatgrafiek.textAlign = "left";
soldaatgrafiek.fillText("$" + soldaatges[30],4, 50);
var soldaatges = [40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40]

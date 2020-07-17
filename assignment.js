//feetToMile
function feetToMile(feet){
    var mile = feet/5280;
    return mile;
}

//woodCalculator
function woodCalculator(chair, table, bed){
    var chairwood = chair*1;
    var tablewood = table*3;
    var bedwood   = bed*5;
    var totalwood = chairwood + tablewood + bedwood;
    return totalwood;
  }

//brickCalculator
function brickCalculator(floor){
  var totalBrick;
if(floor<=10){
  var brick1 = floor*15000;
  totalBrick=brick1;
}
else if(floor >=10 && floor<=20){
  var brick2 = (floor%10)*12000+(10*15000);
  totalBrick = brick2;
  }
else if(floor>20){
  var brick3 = (floor-20)*10000+(10*12000)+(10*15000) ;
  totalBrick = brick3;
}

return totalBrick;
}


//tinyFriend
function tinyFriend(name){
  var tinyName = name [0];
  for(var i =0;i<name.length;i++){
    var currentName = name[i];
    if(currentName.length<tinyName.length){
      tinyName = currentName;
    }
  }
  return tinyName;
}
document.addEventListener("DOMContentLoaded", function start(){
	animPointer = document.getElementById("anim-pointer");
	animPointer.innerHTML = "i_ptr:   v";
	animValue = document.getElementById("anim-value");
	animValue.innerHTML = "value:   [0][0][0]...]";
	animOutput = document.getElementById("anim-output");
	outputString = "output: ";
	animOutput.innerHTML = outputString;
	value = 72;
	step = 1;
})


function animFunc(sp){
  value = 72;
  step = 1;
  animPointer.innerHTML = "i_ptr:   v";
  outputString = "output: ";
  animOutput = document.getElementById("anim-output");
  animValue.innerHTML = "value:  [72][0][0]...]";
  setInterval(animFunc1, sp);
}

function animFunc1(){
  if(value>0){
    if(step==1){
      animPointer.innerHTML = "i_ptr:    v";
      step = 2;
    }else if(step==2){
      animPointer.innerHTML = "i_ptr:     v";
      outputString = outputString + String.fromCharCode(value);
      animOutput.innerHTML = outputString;
      step = 3;
      value = value - 1;
    }else if(step==3){
      animPointer.innerHTML = "i_ptr:      v";
      valString = String(value) ;
      if(value>9){
        animValue.innerHTML = "value:  ["+valString+"][0][0]...]";
      }else if(value<10){
        animValue.innerHTML = "value:   ["+valString+"][0][0]...]";
      }
      step = 1;
    }
  }else{
    animPointer.innerHTML = "i_ptr:       v";
    animValue.innerHTML = "value:   [0][0][0]...]"
  }
}
//let output=document.querySelector(".result1");
let btn=document.querySelectorAll("button");
//console.log(btn); -here this is not an array but nodeList
let arr= Array.from(btn);
//console.log(arr);



arr.forEach(e=>{
    let output=document.querySelector(".result1");
    console.log(output)
    e.addEventListener("click",e1=>{

    if(e.innerHTML=="C"){
        output.value=" ";
    }
    else if(e.innerHTML=="x"){
        output.value=output.value.slice(0,-1);
    }
    else if(e.innerHTML=="="){
        output.value=eval(output.value);
    }
    else if(e.innerHTML=="sin"){
        output.value=Math.sin(output.value);
    }
    else if(e.innerHTML=="cos"){
        output.value=Math.cos(output.value);
    }
    else if(e.innerHTML=="tan"){
        output.value=Math.tan(output.value);
    }
    else if(e.innerHTML=="exp"){
        output.value=Math.exp(output.value);
    }
    else if(e.innerHTML=="E"){
        output.value=Math.exp(output.value);
    }
    else if(e.innerHTML=="^"){
        let a=output.value;
        let b=output.value;
        output.value=Math.pow(output.value,output.value);
    }
    else if(e.innerHTML=="log"){
        output.value=Math.log(output.value);
    }
    else if(e.innerHTML=="log10"){
        output.value=Math.log10(output.value);
    }
    else if(e.innerHTML=="log2"){
        output.value=Math.log2(output.value);
    }
    else if(e.innerHTML=="sqrt"){
        output.value=Math.sqrt(output.value);
    }
    else if(e.innerHTML=="ln2e"){
        output.value=Math.log2(output.value);
    }
    else{
    output.value+=e.innerHTML;
    //console.log(output.value);
    }



    
});
});


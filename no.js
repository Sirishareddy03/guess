var a=Math.ceil(Math.random()*5);
c=0;
cli=()=>{
    var b=parseInt(document.getElementById("n1").value);
    if(a==b && c==0)
    document.getElementById("result").textContent="congrats you get the answer first attempt";
    else if(a==b && c!=0)
    {
    document.getElementById("result").textContent="congrates you get answer in "+c+" times";
    }
    else if(a>b)
    {
    c++;
    document.getElementById("result").textContent="try it greater number";
    }
    else
    {
    c++;
    document.getElementById("result").textContent="try it smaller number";
    }

}
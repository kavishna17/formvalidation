function validate()
{
    var n=document.getElementById("name").value;
    var n1=/^[A-z\.]+$/;
    var n2=n1.test(n);
    if(!n2)
    {
        document.getElementById("d1").innerHTML="error";
    }
    if(n2)
    {
        document.getElementById("d1").innerHTML="verified";
    }
    var e=document.getElementById("email").value;
    var e1=/^[a-z]+\.[0-9]{2}[a-z]{2}\@[a-z]+\.[a-z]{3}$/;
    var e2=e1.test(e);
    if(!e2)
    {
        document.getElementById("d2").innerHTML="error";
    }
    if(e2)
    {
        document.getElementById("d2").innerHTML="verified";
    }
    var p=document.getElementById("phonenumber").value;
    var p1=/^[0-9]{10}$/;
    var p2=p1.test(p);
    if(!p2)
    {
        document.getElementById("d3").innerHTML="error";
    }
    if(p2)
    {
        document.getElementById("d3").innerHTML="verified";
    }
    var g=document.getElementById("gen").checked||document.getElementById("gen1").checked;
    if(!g)
    {
        document.getElementById("d4").innerHTML="unchecked,please check";

    }
    if(g)
    {
        document.getElementById("d4").innerHTML="checked"
    }    
    var c=document.getElementById("d").checked||document.getElementById("dd").checked;
    if(!c)
    {
        document.getElementById("d5").innerHTML="unchecked,please check";

    }
    if(c)
    {
        document.getElementById("d5").innerHTML="checked"
    }  
    var x=document.form.city.selectedIndex==" ";
    if(x)
    {
        document.getElementById("d6").innerHTML="not selected";
    }  
    if(!x)
    {
        document.getElementById("d6").innerHTML="selected";
    }
    if(n2&&e2&&p2&&g&&c&&(!x))
    {
        document.getElementById("form").submit();
    }
    
   
}
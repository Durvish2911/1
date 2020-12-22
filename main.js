var momma=[];
var x=[];
function id1(){console.log("moooooooo woof");
var papa=[];
for(var id=1;id<=6;id++){
    var me=document.getElementById("text_input"+id).value;
    momma.push(me);}
    var kemma=momma.length;
    for( var k=0; k< kemma;k++)
    papa.push("<h4> "+momma[k]+"</h4>");
    var me1=papa.join(" ");
    document.getElementById("id1").innerHTML = me1;
}
    function id2(){console.log("moooooooo woof");
    var papa=[];
    for(var id=1;id<=6;id++){
        var me=document.getElementById("text_input2"+id).value;
        x.push(me);}
        var kemma=x.length;
        for( var k=0; k< kemma;k++)
        papa.push("<h4> "+x[k]+"</h4>");
        var me1=papa.join(" ");
        document.getElementById("id2").innerHTML = me1;
    }
    

function report()
{
    var tot,savp,medp,expp,op,sav,med,exp,ext;
    tot = parseInt(document.getElementById("principle").value);
    savp = parseInt(document.getElementById("sav").value);
    medp = parseInt(document.getElementById("med").value);
    expp = parseInt(document.getElementById("exp").value);
    totper=savp+medp+expp;
    if (totper <= 90) {
        op="Budget processing..."
    } else {
        op="Error Scaling"
    }
    document.getElementById("report").innerHTML = op;
    if ( op = "Budget processing...")
    {
        sav= (tot*savp)/100;
        med= (tot*medp)/100;
        exp= (tot*expp)/100;
        ext= tot - (sav+med+exp);
        document.getElementById("Title").innerHTML = `Your awesome month budget scheme!`;
        document.getElementById("totreport").innerHTML = "Total Amount: "+tot;
        document.getElementById("medreport").innerHTML = "Medical Expenses: "+med;
        document.getElementById("savreport").innerHTML = "Savings: "+sav;
        document.getElementById("expreport").innerHTML = "Expenditures: "+exp;
        document.getElementById("extreport").innerHTML = "Emergency Expenditures: "+ext;
    }
}
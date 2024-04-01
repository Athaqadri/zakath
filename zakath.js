function calculate(ev) {
    ev.preventDefault();
    var num1 = document.getElementById("gold").value || "0";
    var num2 = document.getElementById("silver").value || "0";
    var num3 = document.getElementById("Cash").value || "0";
    var num4 = document.getElementById("MoneyDeposited").value || "0";
    var num5 = document.getElementById("Policy").value || "0";
    var num6 = document.getElementById("GivenLoan").value || "0";
    var num7 = document.getElementById("OtherAssets").value || "0";
    var num8 = document.getElementById("RawMaterials").value || "0";
    var num9 = document.getElementById("Manufactured").value || "0";
    var num10 = document.getElementById("Plots").value || "0";
    var num11 = document.getElementById("Businesspartnership").value || "0";
    var num12 = document.getElementById("Loan").value || "0";
    var num13 = document.getElementById("Duesinstallments").value || "0";
    var num14 = document.getElementById("Remainingpayable").value || "0";
    var num15 = document.getElementById("Utilitybills").value || "0";
    var num16 = document.getElementById("PayableDealers").value || "0";
    var num17 = document.getElementById("Salarieemployees").value || "0";
    var num18 = document.getElementById("Unpaid").value || "0";

    var gold = parseInt(num1) + parseInt(num2) + parseInt(num3) + parseInt(num4) + 
                parseInt(num5) + parseInt(num6) + parseInt(num7) + parseInt(num8) + 
                parseInt(num9) + parseInt(num10) + parseInt(num11) + parseInt(num12) + 
                parseInt(num13) + parseInt(num14) + parseInt(num15) + parseInt(num16) + 
                parseInt(num17) + parseInt(num18);

    


 document.getElementById("TotalAmount").innerHTML = gold;
 document.getElementById("Amount").innerHTML = gold;

 var percent = parseInt(gold) * 2.5 / 100;

 document.getElementById('ZakatAmount').innerHTML = `${gold} x 2.5% = ₹ ${percent}`;
document.getElementById('TotalZakatAmount').innerHTML = Math.round(percent);




}







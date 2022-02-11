// Je nach Zufriedenheit mit dem Service
// Schlechter Service: 2% Trinkgeld -> (total * 0.02) + total 
// Mittlerer Service: 10% Trinkgeld -> (total * 0.1) + total
// Super Service: 20% Trinkgeld -> (total * 0.2) + total

// ausgabe: 
// tip auf alles 
// total plus tip
//am Ende Total + Tip (totalPlusTip) dividiert durch guests = amountPP

let inputTotal = (document.getElementById("total"));
console.log(typeof inputTotal.value);

let inputGuests = (document.getElementById("guests"));
console.log(typeof inputGuests.value);

let inputSatisfied = document.getElementById("satisfied");
console.log(inputSatisfied.value);

let output = document.getElementById("output");
console.log(output);

let tip, totalPlusTip, payPP;

let calc = () => {
    console.log("test");
    inputTotal = Number(inputTotal.value);
    inputGuests = Number(inputGuests.value);
    console.log(inputTotal, inputGuests);

    if (inputSatisfied.value == 3) {
        tip = inputTotal * 0.2;
        totalPlusTip = tip + inputTotal;
        console.log(tip, totalPlusTip);
        payPP = totalPlusTip / inputGuests;
        output.innerHTML = `<p><p>Das Trinkgeld sollte ${tip} EUR betragen.</p><p>Die Gesamtsumme beträgt dann ${totalPlusTip} EUR.</p><p>Der Preis pro Person liegt bei ${payPP} EUR.</p>`
    }

    else if (inputSatisfied.value == 2) {
        tip = inputTotal * 0.1;
        totalPlusTip = tip + inputTotal;
        console.log(tip, totalPlusTip);
        payPP = totalPlusTip / inputGuests;
        output.innerHTML = `<p>Das Trinkgeld sollte ${tip} EUR betragen.</p><p>Die Gesamtsumme beträgt dann ${totalPlusTip} EUR.</p><p>Der Preis pro Person liegt bei ${payPP} EUR.</p>`
    }
    else if (inputSatisfied.value == 1) {
        tip = inputTotal * 0.02;
        totalPlusTip = tip + inputTotal;
        console.log(tip, totalPlusTip);
        payPP = totalPlusTip / inputGuests;
        output.innerHTML = `<p><p>Das Trinkgeld sollte ${tip} EUR betragen.</p><p>Die Gesamtsumme beträgt dann ${totalPlusTip} EUR.</p><p>Der Preis pro Person liegt bei ${payPP} EUR.</p>`
    }

    else {
        output.innerHTML = `<p>Servicebewertung fehlt</p>`
    }

}




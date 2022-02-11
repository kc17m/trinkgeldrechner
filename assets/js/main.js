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

let myForm = document.getElementById("myForm");

let tip, totalPlusTip, payPP;

let calc = () => {
    console.log("test");
    let inputTotal01 = Number(inputTotal.value);
    let inputGuests01 = Number(inputGuests.value);
    console.log(inputTotal01, inputGuests01);


    if (inputTotal01 && inputGuests01) {
        if (inputSatisfied.value == 3) {
            tip = inputTotal01 * 0.2;
            totalPlusTip = tip + inputTotal01;
            console.log(tip, totalPlusTip);
            payPP = totalPlusTip / inputGuests01;
            output.innerHTML = `<p>Das Trinkgeld sollte ${tip.toFixed(2)} EUR betragen.</p><p>Die Gesamtsumme beträgt dann ${totalPlusTip.toFixed(2)} EUR.</p><p>Der Preis pro Person liegt bei ${payPP.toFixed(2)} EUR.</p>`
            console.log("test1");

        }

        else if (inputSatisfied.value == 2) {
            tip = inputTotal01 * 0.1;
            totalPlusTip = tip + inputTotal01;
            console.log(tip, totalPlusTip);
            payPP = totalPlusTip / inputGuests01;
            output.innerHTML = `<p>Das Trinkgeld sollte ${tip.toFixed(2)} EUR betragen.</p><p>Die Gesamtsumme beträgt dann ${totalPlusTip.toFixed(2)} EUR.</p><p>Der Preis pro Person liegt bei ${payPP.toFixed(2)} EUR.</p>`
            console.log("test02");
        }
        else if (inputSatisfied.value == 1) {
            tip = inputTotal01 * 0.02;
            totalPlusTip = tip + inputTotal01;
            console.log(tip, totalPlusTip);
            payPP = totalPlusTip / inputGuests01;
            output.innerHTML = `<p>Das Trinkgeld sollte ${tip.toFixed(2)} EUR betragen.</p><p>Die Gesamtsumme beträgt dann ${totalPlusTip.toFixed(2)} EUR.</p><p>Der Preis pro Person liegt bei ${payPP.toFixed(2)} EUR.</p>`
            console.log("test03");
        }

        else {
            output.innerHTML = `<p>Die Servicebewertung fehlt.</p>`
            console.log("test04");
        }
    }



    else if (!inputTotal01) {
        output.innerHTML = `<p>Bitte Rechnungsbetrag angeben.</p>`;
        console.log("test05");
    }

    else if (!inputGuests01) {
        output.innerHTML = `<p>Bitte Anzahl zahlender Gäste angeben.</p>`;
        console.log("test06");
    }

    else {
        output.innerHTML = `<p>Sorry, hier ist etwas falsch gelaufen.</p>`
        console.log("test07");
    }

}






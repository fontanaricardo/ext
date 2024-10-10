function ext() {
    var numberInput = document.getElementById("number").value;

    const units = ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quartorze", "quinze", "dezesseis", "dezesete", "dezoito", "dezenove"];

    const dozens = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"]

    var number = parseInt(numberInput);

    var desc = "";

    if (number > 19) {
        var dozen = parseInt(number/10);
        desc += dozens[dozen-2];
        var unity = number % 10;

        if (unity > 0) {
            desc += " e ";
            desc += units[unity];
        }
    } else {
        desc = units[number];
    }

    var label = document.getElementById("ext")
    label.innerHTML = desc;

    console.log(number);
}
function getScreenValue() {
    return document.querySelector("#calc__screen--sol").innerText.replace(',', '');
}

function setScreenValue(val) {
    document.querySelector("#calc__screen--sol").innerText = val;
}

function appendScreenValue(val) {
    document.querySelector("#calc__screen--sol").innerText += val;
}

function addComma(newScrVal) {
    console.log(newScrVal);
    var updatedVal = "";
    for (let i = 0; i < newScrVal.length; i++) {
        updatedVal = `${newScrVal[newScrVal.length-i-1]}${updatedVal}`;
        if((i+1)%3 === 0 && i !== newScrVal.length-1){
            console.log(i+1);
            updatedVal = `,${updatedVal}`;
        }            
    }
    setScreenValue(updatedVal);
}

function showKey(e) {
    var key = e.target.innerText;
    var scrVal = getScreenValue();
    if(key !== ".") {
        if(scrVal === "0") {
            clearScreen();
        }
        if (scrVal === "") {
            if(!isNaN(Number(key)))
                appendScreenValue(key);
        }
        else {
            appendScreenValue(key);
        }            
    }
    else {
        if (!scrVal.includes(".")) {
            appendScreenValue(key);
        }
    }
    var newScrVal = getScreenValue().replace(',', '');
    addComma(newScrVal);
}

function solve(exp) {
    var opIndex = Math.max(exp.lastIndexOf("-"), exp.lastIndexOf("+"));
    if (opIndex === -1) {
        opIndex = Math.max(exp.lastIndexOf("X"), exp.lastIndexOf("/"));
    }
    if (opIndex === -1) {
        var num = Number(exp.trim());
        if (!isNaN(num)) {
            return num;
        }
    }
    else {
        var leftOperand = solve(exp.slice(0, opIndex).trim());
        var rightOperand = solve(exp.slice(opIndex + 1).trim());
        switch (exp[opIndex]) {
            case "+":
                return leftOperand + rightOperand;
            case "-":
                return leftOperand - rightOperand;
            case "X":
                return leftOperand * rightOperand;
            case "/":
                return leftOperand / rightOperand;
        }
    }
}

function equal(e) {
    var exp = getScreenValue();
    var sol = 0;
    if (exp != "") {
        sol = solve(exp);
    }
    setScreenValue(sol);
}

function actionHandle(e) {
    var act = e.target.innerText;
    switch(act) {
        case "RESET":
            {
                clearScreen();
                break;
            }
        case "DEL":
            {
                var scrVal = getScreenValue();
                scrVal = scrVal.slice(0, -1);
                setScreenValue(scrVal);
                addComma(getScreenValue().replace(",",""));
                break;
            }
        default:
            break;
    }
}

function clearScreen() {
    document.querySelector("#calc__screen--sol").innerText = "";
}

export {showKey, equal, actionHandle};

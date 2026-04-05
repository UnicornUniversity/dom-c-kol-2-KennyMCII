//TODO add imports if needed
//import { exMain } from "./exclude/exampleAss2.js"
//TODO add/change doc as needed
/**
 * TODO - Write functional code for this application. You can call any other function, but usage of ".toString(numberSystem)" and "Number.parseInt(number, numberSystem)" is forbidden (only permitted when used on individual digits).
 * The main function which calls the application. 
 * TODO - Please, add specific description here for the application purpose.
 * @param {string} inputNumber number that is being converted
 * @param {number} inputNumberSystem numerical system that the inputNumber is being converted from
 * @param {number} outputNumberSystem numerical system that the inputNumber is being converted into
 * @returns {string} containing number converted to output system
 */
export function main(inputNumber, inputNumberSystem, outputNumberSystem) {
  inputNumber = inputNumber.toString();
  if (inputNumberSystem === outputNumberSystem) {
    return inputNumber;
  }

  let decimalni = 0;

  // binarni do decimalniho
  if (inputNumberSystem === 2) {
    for (let i = 0; i < inputNumber.length; i++) {
      let znak = inputNumber[i];

      if (znak !== "0" && znak !== "1") {
        throw new Error("Neplatné binární číslo");
      }

      let exponent = inputNumber.length - 1 - i;
      let pocitaneCislo = (znak === "1" ? 1 : 0) * (2 ** exponent);

      decimalni += pocitaneCislo;
    }
  }

  // decimalni do decimalniho
  else if (inputNumberSystem === 10) {
    for (let i = 0; i < inputNumber.length; i++) {
      let znak = inputNumber[i];
      let cislo = znak.charCodeAt(0) - 48;
      decimalni = decimalni * 10 + cislo;
    }
  }

  else {
    throw new Error("Nepodporovaný vstupní systém");
  }

  // output
  if (outputNumberSystem === 10) {
    return decimalni.toString();
  }

  if (outputNumberSystem === 2) {
    if (decimalni === 0) return "0";

    let vysledek = "";

    while (decimalni > 0) {
      let zbytek = decimalni % 2;
      vysledek = zbytek + vysledek;
      decimalni = Math.floor(decimalni / 2);
    }

    return vysledek;
  }

  throw new Error("Nepodporovaný výstupní systém");
}
	
/**
 * TODO - Change this to contain all input number systems that your application can convert from.
 * Function which returns which number systems are permitted on input.
 * @returns {Array} array of numbers refering to permitted input systems
 */
export function permittedInputSystems() {
	return [10, 2];
}

/**
 * TODO - Change this to contain all output number systems that your application can convert to.
 * Function which returns which number systems are permitted on output.
 * @returns {Array} array of numbers refering to permitted output systems
 */
export function permittedOutputSystems() {
	return [10, 2];
}

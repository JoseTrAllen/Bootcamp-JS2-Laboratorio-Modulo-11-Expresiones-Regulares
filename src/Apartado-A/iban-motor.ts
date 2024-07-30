import { isValidIBAN } from "ibantools";


export const regexIban = (iban: string): boolean => {
  const patron = /^[A-Z]{2}\d{2}([-\s.]?)\d{4}\1\d{4}\1\d{2}\1\d{10}$/;
  return patron.test(iban);
};

export const iban = "ES6300750391450600371539";
export const isValid = isValidIBAN(iban);

export const validatedIban = (iban: string): boolean=> {
  if (isValidIBAN(iban)) {
    console.log("El iban es válido");
    return true
  } else {
    console.log("El iban no es válido");
    return false
  }
}
import { isValidIBAN } from "ibantools";
import {IBAN, banksName} from "./model"

const ibanRegex: RegExp = /^[A-Z]{2}\d{2}([-\s.]?)(?<banco>\d{4}\1)(?<codigoSucursal>\d{4}\1)(?<digitoControl>\d{2}\1)(?<numeroCuenta>\d{10})$/;

export const regexIban = (iban: string): boolean => {
  return ibanRegex.test(iban.replace(/[ .-]/g, ''));
};

export const validatedIban = (iban: string): boolean => {
  return isValidIBAN(iban.replace(/[ .-]/g, '')) ? true : false
};

export const extractCodesIban = (iban: string): IBAN | null => {
  const match = ibanRegex.exec(iban.replace(/[ .-]/g, ''));
  if (match && match.groups) {
    const { banco, codigoSucursal, digitoControl, numeroCuenta } = match.groups;
    const bankName = banksName[banco];
    return { bankName, codigoSucursal, digitoControl, numeroCuenta };
  };
  return null;
};

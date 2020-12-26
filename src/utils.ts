/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Gender, NewPatient } from "./types"

const isString = (text: any): text is string => {
  return typeof text === "string"
}

const parseField = (field: any): string => {
  if (!field || !isString(field)) {
    throw new Error("Incorrect or missing field: " + field)
  }

  return field
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const parseDate = (date: any): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("Hello, Incorrect or missing date: " + date)
  }
  return date
}

const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param)
}

const parseGender = (gender: any): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("Hello, Incorrect or missing gender: " + gender)
  }
  return gender
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const toNewPatient = (object: any): NewPatient => {
  const newPatient: NewPatient = {
    name: parseField(object.name),
    dateOfBirth: parseDate(object.dateOfBirth),
    ssn: parseField(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseField(object.occupation),
  }

  return newPatient
}

export default toNewPatient

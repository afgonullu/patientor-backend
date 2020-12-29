/* eslint-disable @typescript-eslint/no-unsafe-call */
import patientData from "../../data/patients"
import { v4 as uuidv4 } from "uuid"

import { Patient, NonSensitivePatient, NewPatient } from "../types"

const getPatients = (): NonSensitivePatient[] => {
  return patientData.map(
    ({ id, name, dateOfBirth, gender, occupation, entries, ssn }) => ({
      id,
      name,
      dateOfBirth,
      gender,
      occupation,
      entries,
      ssn,
    })
  )
}

const getPatient = (id: string): NonSensitivePatient | undefined => {
  console.log("hellooooooooooooooo")
  return patientData.find((patient) => patient.id === id)
}

const addPatient = (patient: NewPatient): Patient => {
  const newPatient = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    id: uuidv4(),
    ...patient,
  }

  patientData.push(newPatient)
  return newPatient
}

export default {
  getPatients,
  getPatient,
  addPatient,
}

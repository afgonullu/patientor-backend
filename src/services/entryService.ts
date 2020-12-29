/* eslint-disable @typescript-eslint/no-unsafe-call */
import patientData from "../../data/patients"
import { v4 as uuidv4 } from "uuid"

import { NewHealthCheckEntry, HealthCheckEntry } from "../types"

const addEntry = (id: string, entry: NewHealthCheckEntry): HealthCheckEntry => {
  const newEntry = {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    id: uuidv4(),
    ...entry,
  }

  const patient = patientData.find((patient) => patient.id === id)

  patient?.entries.push(newEntry)

  return newEntry
}

export default {
  addEntry,
}

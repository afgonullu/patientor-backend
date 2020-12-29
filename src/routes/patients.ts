/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import express from "express"
import patientService from "../services/patientService"
import entryService from "../services/entryService"
// import { Patient } from "../types"
import toNewPatient from "../utils"

const router = express.Router()

router.get("/", (_req, res) => {
  console.log("getall")
  res.send(patientService.getPatients())
})

router.post("/", (req, res) => {
  try {
    const newPatient = toNewPatient(req.body)
    console.log(newPatient)

    const addedPatient = patientService.addPatient(newPatient)
    res.json(addedPatient)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

router.get("/:id", (req, res) => {
  const patient = patientService.getPatient(req.params.id)

  res.send(patient)
})

router.post("/:id/entries", (req, res) => {
  try {
    const newEntry = req.body
    console.log(newEntry)

    const addedEntry = entryService.addEntry(req.params.id, newEntry)
    res.json(addedEntry)
  } catch (e) {
    res.status(400).send(e.message)
  }
})

export default router

import express from "express"
import diagnoseRouter from "./routes/diagnoses"
import patientRouter from "./routes/patients"
const app = express()
app.use(express.json())

const PORT = 3003

app.use(function (_req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000") // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.get("/ping", (_req, res) => {
  console.log("someone pinged here")
  res.json({ response: "pong" })
})

app.use("/api/diagnoses", diagnoseRouter)
app.use("/api/patients", patientRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

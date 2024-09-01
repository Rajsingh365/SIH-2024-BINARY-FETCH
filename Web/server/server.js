import 'dotenv/config'
import express from "express";
import cors from "cors";
import connectDb from "./db/db_connect.js";

import authRoutes from "./routes/auth.route.js"
import planRoutes from "./routes/therapyplan.route.js"
import patientRoutes from "./routes/patient.route.js"
import userRoutes from "./routes/user.route.js"
import sessionRoutes from "./routes/session.route.js"

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json()); 
app.use(cors());

app.use("/api/auth",authRoutes);
app.use("/api/therapy-plans",planRoutes);
app.use('/api/patient',patientRoutes);
app.use("/api/user",userRoutes);
app.use("/api/session",sessionRoutes);
// app.use("/api/itineraries",itineraryRoutes);
app.get("/",(req,res)=>{
  res.json({message: "Hello world"});
})

app.listen(PORT,()=>{
  connectDb();
  console.log(`Server is running on port ${PORT}`);
})
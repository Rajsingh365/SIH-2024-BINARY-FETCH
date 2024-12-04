import express from "express";
import {
  createSupervisor,
  getAllSupervisors,
  getSupervisorById,
  updateSupervisor,
  deleteSupervisor,
} from "../controllers/supervisor.controller.js";

const router = express.Router();

// Create a new supervisor
router.post("/", createSupervisor);

// Get all supervisors
router.get("/", getAllSupervisors);

// Get a supervisor by ID
router.get("/:id", getSupervisorById);

// Update a supervisor by ID
router.put("/:id", updateSupervisor);

// Delete a supervisor by ID
router.delete("/:id", deleteSupervisor);

export default router;

import React from "react";
import {
  FaUser,
  FaCalendarAlt,
  FaInfoCircle,
  FaBullseye,
  FaTasks,
  FaHourglassHalf,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function CaseList() {
  let patientArray = [
    {
      id: "TP001",
      patientName: "Liam Johnson",
      patientAge: 7,
      condition: "Articulation Disorder",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "High",
      goals: "Improve articulation of specific sounds.",
      activities: "Sound production drills, word repetition exercises.",
      duration: "12 weeks",
    },
    {
      id: "TP002",
      patientName: "Emma Davis",
      patientAge: 6,
      condition: "Fluency Disorder",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "High",
      goals: "Reduce stuttering and improve speech fluency.",
      activities: "Fluency shaping techniques, breathing exercises.",
      duration: "14 weeks",
    },
    {
      id: "TP003",
      patientName: "Noah Martinez",
      patientAge: 9,
      condition: "Voice Disorder",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "High",
      goals: "Improve voice quality and reduce hoarseness.",
      activities: "Voice exercises, vocal hygiene education.",
      duration: "10 weeks",
    },
    {
      id: "TP004",
      patientName: "Olivia Wilson",
      patientAge: 8,
      condition: "Language Delay",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "High",
      goals: "Enhance vocabulary and sentence structure.",
      activities: "Storytelling, language games.",
      duration: "12 weeks",
    },
    {
      id: "TP005",
      patientName: "Aiden Brown",
      patientAge: 7,
      condition: "Social Communication Disorder",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "High",
      goals: "Improve social interactions and conversational skills.",
      activities: "Role-playing, social stories.",
      duration: "16 weeks",
    },
    {
      id: "TP006",
      patientName: "Sophia Taylor",
      patientAge: 9,
      condition: "Autism Spectrum Disorder",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "Medium",
      goals: "Enhance functional communication and social skills.",
      activities: "Structured play, visual supports.",
      duration: "18 weeks",
    },
    {
      id: "TP007",
      patientName: "Jackson Lee",
      patientAge: 8,
      condition: "Apraxia of Speech",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "High",
      goals: "Improve speech motor planning and execution.",
      activities: "Motor speech drills, repetition tasks.",
      duration: "14 weeks",
    },
    {
      id: "TP008",
      patientName: "Mia Harris",
      patientAge: 6,
      condition: "Receptive Language Disorder",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "Medium",
      goals: "Improve comprehension of spoken language.",
      activities: "Following directions, language comprehension tasks.",
      duration: "12 weeks",
    },
    {
      id: "TP009",
      patientName: "Ethan Clark",
      patientAge: 7,
      condition: "Expressive Language Disorder",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "Medium",
      goals: "Enhance ability to express thoughts and ideas.",
      activities: "Sentence construction exercises, storytelling.",
      duration: "14 weeks",
    },
    {
      id: "TP010",
      patientName: "Isabella Robinson",
      patientAge: 6,
      condition: "Cognitive Communication Disorder",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "Low",
      goals: "Improve attention, memory, and executive functions.",
      activities: "Memory games, attention tasks.",
      duration: "16 weeks",
    },
    {
      id: "TP011",
      patientName: "Mason Walker",
      patientAge: 8,
      condition: "Speech Sound Disorder",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "High",
      goals: "Correct speech sound errors.",
      activities: "Articulation practice, minimal pairs.",
      duration: "12 weeks",
    },
    {
      id: "TP012",
      patientName: "Avery Hall",
      patientAge: 9,
      condition: "Dysarthria",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "Medium",
      goals: "Improve speech clarity and strength.",
      activities: "Strengthening exercises, breath support training.",
      duration: "14 weeks",
    },
    {
      id: "TP013",
      patientName: "Harper Young",
      patientAge: 7,
      condition: "Pragmatic Language Disorder",
      submissionDate: "2024-08-20",
      status: "Awaiting Review",
      priority: "High",
      goals: "Enhance social communication and appropriate use of language.",
      activities: "Social skills training, conversation practice.",
      duration: "18 weeks",
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-white mb-8">Cases List</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {patientArray.map((patient) => (
          <Link to={`/therapist/workspace/case-page/${patient.id}`}>
          <div
            key={patient.id}
            className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-white mb-4">
                {patient.patientName}
              </h2>
              <div className="space-y-2 text-gray-300">
                <p className="flex items-center">
                  <FaUser className="mr-2 text-blue-400" /> Age:{" "}
                  {patient.patientAge}
                </p>
                <p className="flex items-center">
                  <FaInfoCircle className="mr-2 text-green-400" /> Condition:{" "}
                  {patient.condition}
                </p>
                <p className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-yellow-400" /> Submitted:{" "}
                  {patient.submissionDate}
                </p>
                <p className="flex items-center">
                  <FaInfoCircle className="mr-2 text-red-400" /> Status:{" "}
                  {patient.status}
                </p>
                <p className="flex items-center">
                  <FaInfoCircle className="mr-2 text-purple-400" /> Priority:{" "}
                  {patient.priority}
                </p>
                <p className="flex items-center">
                  <FaBullseye className="mr-2 text-pink-400" /> Goals:{" "}
                  {patient.goals}
                </p>
                <p className="flex items-center">
                  <FaTasks className="mr-2 text-indigo-400" /> Activities:{" "}
                  {patient.activities}
                </p>
                <p className="flex items-center">
                  <FaHourglassHalf className="mr-2 text-orange-400" /> Duration:{" "}
                  {patient.duration}
                </p>
              </div>
            </div>
            <div className="bg-gray-700 p-4 flex justify-end space-x-2">
              <button className="text-white bg-green-600 hover:bg-green-700 font-bold py-2 px-4 rounded">
                ✅
              </button>
              <button className="text-white bg-red-600 hover:bg-red-700 font-bold py-2 px-4 rounded">
                ❌
              </button>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CaseList;

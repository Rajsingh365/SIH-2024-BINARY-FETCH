import React from "react";
import PatientCard from "./PatientCard";
function PatientCardList() {
  const patients = [
    {
      id: '10001',
      name: 'Rajesh Kumar',
      photo: 'path/to/photo1.jpg',
      age: 45,
      gender: 'Male',
      diagnosis: 'Aphasia',
      therapist: 'Dr. Anjali Mehta',
      currentTherapyPlan: 'Speech Therapy - Phase 2',
      nextSession: '2024-09-05',
      status: 'Ongoing',
    },
    {
      id: '10002',
      name: 'Priya Sharma',
      photo: 'path/to/photo2.jpg',
      age: 34,
      gender: 'Female',
      diagnosis: 'Stuttering',
      therapist: 'Dr. Vivek Rao',
      currentTherapyPlan: 'Fluency Shaping - Stage 1',
      nextSession: '2024-09-10',
      status: 'Ongoing',
    },
    {
      id: '10003',
      name: 'Manoj Singh',
      photo: 'path/to/photo3.jpg',
      age: 50,
      gender: 'Male',
      diagnosis: 'Dysarthria',
      therapist: 'Dr. Suman Gupta',
      currentTherapyPlan: 'Motor Speech Therapy - Phase 3',
      nextSession: '2024-09-08',
      status: 'Completed',
    },
    {
      id: '10004',
      name: 'Ritu Verma',
      photo: 'path/to/photo4.jpg',
      age: 29,
      gender: 'Female',
      diagnosis: 'Voice Disorder',
      therapist: 'Dr. Kavita Patil',
      currentTherapyPlan: 'Vocal Hygiene Therapy',
      nextSession: '2024-09-15',
      status: 'Ongoing',
    },
    {
      id: '10005',
      name: 'Sunil Yadav',
      photo: 'path/to/photo5.jpg',
      age: 37,
      gender: 'Male',
      diagnosis: 'Apraxia of Speech',
      therapist: 'Dr. Neha Joshi',
      currentTherapyPlan: 'Speech Sound Therapy - Phase 2',
      nextSession: '2024-09-12',
      status: 'On Hold',
    },
    {
      id: '10006',
      name: 'Meena Kapoor',
      photo: 'path/to/photo6.jpg',
      age: 42,
      gender: 'Female',
      diagnosis: 'Aphasia',
      therapist: 'Dr. Anjali Mehta',
      currentTherapyPlan: 'Speech Therapy - Phase 1',
      nextSession: '2024-09-06',
      status: 'Ongoing',
    },
    {
      id: '10007',
      name: 'Vikram Thakur',
      photo: 'path/to/photo7.jpg',
      age: 33,
      gender: 'Male',
      diagnosis: 'Cognitive-Communication Disorder',
      therapist: 'Dr. Priyanka Desai',
      currentTherapyPlan: 'Cognitive Therapy - Phase 2',
      nextSession: '2024-09-09',
      status: 'Ongoing',
    },
    {
      id: '10008',
      name: 'Kavita Nair',
      photo: 'path/to/photo8.jpg',
      age: 28,
      gender: 'Female',
      diagnosis: 'Dysphagia',
      therapist: 'Dr. Ashok Pillai',
      currentTherapyPlan: 'Swallowing Therapy - Phase 1',
      nextSession: '2024-09-11',
      status: 'Completed',
    },
    {
      id: '10009',
      name: 'Amit Sinha',
      photo: 'path/to/photo9.jpg',
      age: 40,
      gender: 'Male',
      diagnosis: 'Language Delay',
      therapist: 'Dr. Shilpa Pandey',
      currentTherapyPlan: 'Language Stimulation - Stage 2',
      nextSession: '2024-09-14',
      status: 'Ongoing',
    },
    {
      id: '10010',
      name: 'Sneha Patil',
      photo: 'path/to/photo10.jpg',
      age: 30,
      gender: 'Female',
      diagnosis: 'Stuttering',
      therapist: 'Dr. Vivek Rao',
      currentTherapyPlan: 'Fluency Shaping - Stage 2',
      nextSession: '2024-09-07',
      status: 'On Hold',
    },
    {
      id: '10011',
      name: 'Anil Deshmukh',
      photo: 'path/to/photo11.jpg',
      age: 52,
      gender: 'Male',
      diagnosis: 'Dysarthria',
      therapist: 'Dr. Suman Gupta',
      currentTherapyPlan: 'Motor Speech Therapy - Phase 1',
      nextSession: '2024-09-13',
      status: 'Ongoing',
    },
    {
      id: '10012',
      name: 'Pooja Reddy',
      photo: 'path/to/photo12.jpg',
      age: 35,
      gender: 'Female',
      diagnosis: 'Aphonia',
      therapist: 'Dr. Kavita Patil',
      currentTherapyPlan: 'Voice Therapy - Stage 1',
      nextSession: '2024-09-16',
      status: 'Ongoing',
    },
    {
      id: '10013',
      name: 'Ajay Malhotra',
      photo: 'path/to/photo13.jpg',
      age: 48,
      gender: 'Male',
      diagnosis: 'Fluency Disorder',
      therapist: 'Dr. Neha Joshi',
      currentTherapyPlan: 'Fluency Enhancement - Phase 2',
      nextSession: '2024-09-10',
      status: 'Completed',
    },
    {
      id: '10014',
      name: 'Rohit Verma',
      photo: 'path/to/photo14.jpg',
      age: 39,
      gender: 'Male',
      diagnosis: 'Aphasia',
      therapist: 'Dr. Anjali Mehta',
      currentTherapyPlan: 'Speech Therapy - Phase 3',
      nextSession: '2024-09-18',
      status: 'Ongoing',
    },
    {
      id: '10015',
      name: 'Nisha Sharma',
      photo: 'path/to/photo15.jpg',
      age: 32,
      gender: 'Female',
      diagnosis: 'Voice Disorder',
      therapist: 'Dr. Kavita Patil',
      currentTherapyPlan: 'Vocal Hygiene Therapy',
      nextSession: '2024-09-17',
      status: 'On Hold',
    },
    {
      id: '10016',
      name: 'Harish Chandra',
      photo: 'path/to/photo16.jpg',
      age: 47,
      gender: 'Male',
      diagnosis: 'Stuttering',
      therapist: 'Dr. Vivek Rao',
      currentTherapyPlan: 'Fluency Shaping - Stage 3',
      nextSession: '2024-09-19',
      status: 'Ongoing',
    },
    {
      id: '10017',
      name: 'Shweta Jha',
      photo: 'path/to/photo17.jpg',
      age: 41,
      gender: 'Female',
      diagnosis: 'Dysphagia',
      therapist: 'Dr. Ashok Pillai',
      currentTherapyPlan: 'Swallowing Therapy - Phase 2',
      nextSession: '2024-09-20',
      status: 'Completed',
    },
    {
      id: '10018',
      name: 'Arun Mehta',
      photo: 'path/to/photo18.jpg',
      age: 53,
      gender: 'Male',
      diagnosis: 'Language Disorder',
      therapist: 'Dr. Shilpa Pandey',
      currentTherapyPlan: 'Language Stimulation - Stage 3',
      nextSession: '2024-09-22',
      status: 'Ongoing',
    },
    {
      id: '10019',
      name: 'Sanjay Agarwal',
      photo: 'path/to/photo19.jpg',
      age: 36,
      gender: 'Male',
      diagnosis: 'Dysarthria',
      therapist: 'Dr. Suman Gupta',
      currentTherapyPlan: 'Motor Speech Therapy - Phase 2',
      nextSession: '2024-09-21',
      status: 'On Hold',
    },
    {
      id: '10020',
      name: 'Rashmi Gupta',
      photo: 'path/to/photo20.jpg',
      age: 44,
      gender: 'Female',
      diagnosis: 'Aphasia',
      therapist: 'Dr. Anjali Mehta',
      currentTherapyPlan: 'Speech Therapy - Phase 2',
      nextSession: '2024-09-25',
      status: 'Ongoing',
    }
  ];
  return (
    <div className="w-full">
      <ul className="w-[90%] flex flex-wrap items-center m-auto gap-3">
        {patients.map((patient, index) => (
          <PatientCard key={index} patient={patient} />
        ))}
      </ul>
    </div>
  );
}

export default PatientCardList;
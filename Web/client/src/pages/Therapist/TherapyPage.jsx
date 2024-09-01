import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaThermometerHalf, FaHeartbeat, FaPills, FaStethoscope } from 'react-icons/fa';
import { RiArrowUpSLine } from 'react-icons/ri';
import { MdHealthAndSafety } from 'react-icons/md'; // Additional icons

const CasePage = () => {
    const { patientId } = useParams();
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);

    const [patientMetricsData, setPatientMetricsData] = useState(null);
    const [PatientCondition, setPatientCondition] = useState(null);
    const [ongoingTreatments, setOngoingTreatments] = useState(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    // Mock function to fetch patient data from the backend
    const fetchPatientData = async (id) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (id === '1') {
                    resolve({
                        patientMetricsData: {
                            patientID: 1,
                            avgHeartRate: 75,
                            bloodPressure: '122/82',
                            avgWordsPerMinute: 160,
                            throatHealth: 'Good',
                            pitch: 'Normal',
                            volume: 'Moderate',
                        },
                        PatientCondition: {
                            ConditionName: "Stuttering",
                            Articulation: "25%",
                            VoiceModulation: "75%",
                            Intelligibility: "Good",
                            Prosody: "Average",
                            CommunicationEffectiveness: "85%",
                        },
                        ongoingTreatments: {
                            Antidepressants: "Fluoxetine",
                            Antianxiety: "Diazepam",
                            Dopamine_agonists: "Pramipexole",
                            Exercise1: "Daily speech exercises",
                            Exercise2: "Breathing techniques",
                            Exercise3: "Voice modulation practice",
                        },
                    });
                } else {
                    resolve({
                        patientMetricsData: {
                            patientID: 1,
                            avgHeartRate: 75,
                            bloodPressure: '122/82',
                            avgWordsPerMinute: 160,
                            throatHealth: 'Good',
                            pitch: 'Normal',
                            volume: 'Moderate',
                        },
                        PatientCondition: {
                            ConditionName: "Stuttering",
                            Articulation: "25%",
                            VoiceModulation: "75%",
                            Intelligibility: "Good",
                            Prosody: "Average",
                            CommunicationEffectiveness: "85%",
                        },
                        ongoingTreatments: {
                            Antidepressants: "Fluoxetine",
                            Antianxiety: "Diazepam",
                            Dopamine_agonists: "Pramipexole",
                            Exercise1: "Daily speech exercises",
                            Exercise2: "Breathing techniques",
                            Exercise3: "Voice modulation practice",
                        },
                    });
                }
            }, 1000);
        });
    };

    useEffect(() => {
        const loadData = async () => {
            const data = await fetchPatientData(patientId);
            setPatientMetricsData(data.patientMetricsData);
            setPatientCondition(data.PatientCondition);
            setOngoingTreatments(data.ongoingTreatments);
        };

        loadData();
    }, [patientId]);

    const sectionStyle = 'bg-gray-800 text-gray-300 p-4 rounded-lg shadow-lg border border-gray-700';

    const section1Data = patientMetricsData && Object.entries(patientMetricsData).map(([key, value]) => (
        <div key={key} className={sectionStyle}>
            <p className="text-lg font-semibold text-blue-400">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</p>
            <p className="text-white">{value}</p>
        </div>
    ));

    const section2Data = PatientCondition && Object.entries(PatientCondition).map(([key, value]) => (
        <div key={key} className={sectionStyle}>
            <p className="text-lg font-semibold text-green-400">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</p>
            <p className="text-white">{value}</p>
        </div>
    ));

    const section3Data = ongoingTreatments && Object.entries(ongoingTreatments).map(([key, value]) => (
        <div key={key} className={sectionStyle}>
            <p className="text-lg font-semibold text-red-400">{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</p>
            <p className="text-white">{value}</p>
        </div>
    ));

    return (
        <div className="flex h-screen">
            <div className="fixed top-0 left-0 h-screen w-[5%] bg-gray-800 text-gray-300 flex flex-col items-center py-4">
                <button className="text-4xl mb-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition" onClick={() => scrollToSection(section1Ref)}>
                    <FaHeartbeat color="#FF6F61" />
                </button>
                <button className="text-4xl mb-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition" onClick={() => scrollToSection(section2Ref)}>
                    <FaThermometerHalf color="#4FC3F7" />
                </button>
                <button className="text-4xl mb-4 p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition" onClick={() => scrollToSection(section3Ref)}>
                    <FaPills color="#81C784" />
                </button>
                <button className="text-3xl p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition mt-auto mb-4" onClick={() => scrollToSection(section1Ref)}>
                    <RiArrowUpSLine color="#B0BEC5" />
                </button>
            </div>
            <div className="flex-1 ml-[5%] bg-gray-900 overflow-auto p-4">
                <section ref={section1Ref} className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                        <FaHeartbeat className="text-4xl text-red-400 mr-3" />
                        Patient Metrics
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section1Data}
                    </div>
                </section>
                <hr className="border-gray-600 mb-6" />
                <section ref={section2Ref} className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                        <MdHealthAndSafety className="text-4xl text-green-400 mr-3" />
                        Patient Condition
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section2Data}
                    </div>
                </section>
                <hr className="border-gray-600 mb-6" />
                <section ref={section3Ref}>
                    <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
                        <FaPills className="text-4xl text-blue-400 mr-3" />
                        Ongoing Treatments
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {section3Data}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CasePage;

import React, { useEffect, useState } from 'react'
import Header from '../CustomComponent/Header'
import '../css/PhysicalExam.css'
import Select from 'react-select'
import Axios from "axios"
import { Link } from 'react-router-dom'
import {
    setBloodPressureDiastolicBP, setBloodPressureSystolicBP, setWeight, setHeight, setMood, setBMI, setJaundice, setGeneralApperanceOtherList,
    setMouthOpening, setBearded, setCervicalSpineMobility, setNeckCircumferenceLessThan42, setTemporomandibularJointMobility, setTeeth, setThromentalDistance, setAirwayOtherList,
    setAuscultation, setCoughing, setThoracicExpansion, setOxygenSaturationOnRoomAir, setPumanoryOtherListed, setPulseRate, setAuscultationForMurmurs,
    setEdemaLowerExtremity, setJugularVenousDistension, setBP, setCardiovascularOtherListed, setMotorAndSensoryFunction,
    setCognitiveFunction, setPetechiae, setBruising, setClinicalEvidenceOfAnemia, setHematologicOtherListed, setPeripheralIV, setGauge, setLocation,
    setCentralIVUltrasoundForLinePlacement, setCentralIVCatherterType, setCentralIVPulmonaryArterialCatheter, setArterialUltrasoundForLinePlacement,
    setArterialGauge, setArterialLoction, setPhysicalExamOtherListed, setAuscultationMainType, setAuscultationSubType, setAuscultationSubSubType, setMurmurPresent, setMurmurTypeLocation
} from '../redux/PhysicalExamActions'
import { useSelector, useDispatch } from 'react-redux';
import { API_ROOT } from '../constants'
const PhysicalExam = (props) => {
    const [mood, setmood] = useState(null)
    const [Mouth_opening, setMouth_opening] = useState(null)
    const [cervical_spine_mobility, setcervical_spine_mobility] = useState(null)
    const [cervical_spine_mobility_subcategory, setcervical_spine_mobility_subcategory] = useState([])
    const [cervical_spine_mobility_sub_type, setcervical_spine_mobility_sub_type] = useState(null)
    const [teeth, setteeth] = useState(null)
    const [temporomandibular_joint_mobility_type, settemporomandibular_joint_mobility_type] = useState(null)
    const [thyromental_distance_type, setthyromental_distance_type] = useState([])
    const [refresh, setRefresh] = useState({})
    const [teethSubCategory, setteethSubCategory] = useState([])
    const [teethSubSubCategory, setteethSubSubCategory] = useState([])
    const [teethSubSubCategoryType, setteethSubSubCategoryType] = useState(null)
    const [auscultationType, setauscultationType] = useState([])
    const [auscultationSubType, setauscultationSubType] = useState([])
    const [auscultationSubSubType, setauscultationSubSubType] = useState([])
    const [auscultation_for_murmurs, setauscultation_for_murmurs] = useState([])
    const [auscultation_for_murmurs_type, setauscultation_for_murmurs_type] = useState([])
    const [auscultation_for_murmurs_sub_type, setauscultation_for_murmurs_sub_type] = useState([])
    //redux
    const dispatch = useDispatch()

    const bloodPressureSystolicBP = useSelector(state => state.physicalReducer.bloodPressureSystolicBP)
    const bloodPressureDiastolicBP = useSelector(state => state.physicalReducer.bloodPressureDiastolicBP)
    const Weight = useSelector(state => state.physicalReducer.Weight)
    const Height = useSelector(state => state.physicalReducer.Height)
    const Mood = useSelector(state => state.physicalReducer.mood)
    const BMI = useSelector(state => state.physicalReducer.BMI)
    const Jaundice = useSelector(state => state.physicalReducer.Jaundice)
    const generalOtherListed = useSelector(state => state.physicalReducer.generalOtherListed)
    const mallampatiScore = useSelector(state => state.physicalReducer.mallampatiScore)
    const mouthOpening = useSelector(state => state.physicalReducer.mouthOpening)
    const Bearded = useSelector(state => state.physicalReducer.Bearded)
    const cervical_spine_mobilityRedux = useSelector(state => state.physicalReducer.cervical_spine_mobility)
    const neck_circumference_less_then_42_cm = useSelector(state => state.physicalReducer.neck_circumference_less_then_42_cm)
    const temporomandibular_joint_mobilityRedux = useSelector(state => state.physicalReducer.temporomandibular_joint_mobility)
    const Teeth = useSelector(state => state.physicalReducer.teeth)
    const thyromental_distanceRedux = useSelector(state => state.physicalReducer.thyromental_distance)
    const Airway_OTHER_NOT_LISTED = useSelector(state => state.physicalReducer.Airway_OTHER_NOT_LISTED)
    const auscultationRedux = useSelector(state => state.physicalReducer.auscultation)
    const Coughing = useSelector(state => state.physicalReducer.Coughing)
    const thoracic_expansion = useSelector(state => state.physicalReducer.thoracic_expansion)
    const oxygen_saturation_on_room_air = useSelector(state => state.physicalReducer.oxygen_saturation_on_room_air)
    const OTHER_NOT_LISTED_pulmonary = useSelector(state => state.physicalReducer.OTHER_NOT_LISTED_pulmonary)
    const pulse_rate = useSelector(state => state.physicalReducer.pulse_rate)
    const auscultation_for_murmurs_No_murmur = useSelector(state => state.physicalReducer.auscultation_for_murmurs_No_murmur)
    const auscultation_for_murmursRedux = useSelector(state => state.physicalReducer.auscultation_for_murmurs)
    const Edema_lower_extremity = useSelector(state => state.physicalReducer.Edema_lower_extremity)
    const JugularVenousDistension = useSelector(state => state.physicalReducer.JugularVenousDistension)
    const BP = useSelector(state => state.physicalReducer.BP)
    const CARDIOVASCULAR_OTHER_LISTED = useSelector(state => state.physicalReducer.CARDIOVASCULAR_OTHER_LISTED)
    const Motor_and_Sensory_function = useSelector(state => state.physicalReducer.Motor_and_Sensory_function)
    const cognitive_functionRedux = useSelector(state => state.physicalReducer.cognitive_function)
    const Neurologic_OTHER = useSelector(state => state.physicalReducer.Neurologic_OTHER)
    const petechiaeRedux = useSelector(state => state.physicalReducer.petechiae)
    const bruisingRedux = useSelector(state => state.physicalReducer.bruising)
    const clinical_evidence_of_anemiaRedux = useSelector(state => state.physicalReducer.clinical_evidence_of_anemia)
    const hematologic_OTHER_LISTED = useSelector(state => state.physicalReducer.hematologic_OTHER_LISTED)
    const Peripheral_IV = useSelector(state => state.physicalReducer.Peripheral_IV)
    const Gauge = useSelector(state => state.physicalReducer.Gauge)
    const Location = useSelector(state => state.physicalReducer.Location)
    const Central_IV_Ultrasound_for_line_placement = useSelector(state => state.physicalReducer.Central_IV_Ultrasound_for_line_placement)
    const Central_IV_Catherter_type = useSelector(state => state.physicalReducer.Central_IV_Catherter_type)
    const Central_IV_Catherter_typeRedux = useSelector(state => state.physicalReducer.Central_IV_Catherter_type)
    const Central_IV_Pulmonary_Arterial_Catheter = useSelector(state => state.physicalReducer.Central_IV_Pulmonary_Arterial_Catheter)
    const Arterial_Ultrasound_For_Line_Placement = useSelector(state => state.physicalReducer.Arterial_Ultrasound_For_Line_Placement)
    const Arterial_Gauge = useSelector(state => state.physicalReducer.Arterial_Gauge)
    const Arterial_Location = useSelector(state => state.physicalReducer.Arterial_Location)
    const Physical_Exam_OTHER_LISTED = useSelector(state => state.physicalReducer.Physical_Exam_OTHER_LISTED)
    const auscMainType = useSelector(state => state.physicalReducer.auscMainType)
    const auscSubType = useSelector(state => state.physicalReducer.auscSubType)
    const auscSubSubType = useSelector(state => state.physicalReducer.auscSubSubType)
    const murmurPresent = useSelector(state => state.physicalReducer.murmurPresent)
    const murmurTypeLocation = useSelector(state => state.physicalReducer.murmurTypeLocation)
    const optionforMood = [
        { value: 'No acute distress', label: 'No acute distress' },
        { value: 'Mild distress', label: 'Mild distress' },
        { value: 'Moderate distress', label: 'Moderate distress' },
        { value: 'Severe Distress', label: 'Severe Distress' }
    ]
    const optionforMouthOpening = [
        { value: 'Adequate mouth opening', label: 'Adequate mouth opening' },
        { value: 'Inadequate mouth opening', label: 'Inadequate mouth opening' },
        { value: 'Microstomia', label: 'Microstomia' },
        { value: 'Micrognathia', label: 'Micrognathia' },
        { value: 'Retrognathia', label: 'Retrognathia' },
        { value: 'Prognathism', label: 'Prognathism' }
    ]
    const optionforcervical_spine_mobility = [
        { value: 'Full range of motion', label: 'Full range of motion' },
        { value: 'Decreased Flexion', label: 'Decreased Flexion' },
        { value: 'Decreased Extension', label: 'Decreased Extension' },
        { value: 'C-collar', label: 'C-collar' },
        { value: 'History of C-spine surgery', label: 'History of C-spine surgery', subCategory: [{ value: 'With C-spine hardware', label: 'With C-spine hardware' }, { value: 'Without c-spine hardware', label: 'Without c-spine hardware' }] },


    ]
    const temporomandibular_joint_mobility = [
        { value: 'Good', label: 'Good' },
        { value: 'OTHER', label: 'OTHER' },

    ]

    const optionforteeth = [
        { value: 'Within normal limits', label: 'Within normal limits' },
        { value: 'Loose', label: 'Loose' },
        { value: 'Cracked', label: 'Cracked' },
        { value: 'Chipped', label: 'Chipped' },
        { value: 'Missing', label: 'Missing' },
        { value: 'Edentulous', label: 'Edentulous' },
        { value: 'Dentures', label: 'Dentures', subCategory: [{ value: 'Full', label: 'Full', subCategory: [{ value: 'Upper', label: 'Upper' }, { value: 'Lower', label: 'Lower' }] }, { value: 'Partial', label: 'Partial', subCategory: [{ value: 'Upper', label: 'Upper' }, { value: 'Lower', label: 'Lower' }] }] }


    ]

    const thyromental_distance = [
        { value: 'Lower incisors can bite upper lip above the vermilion line	', label: 'Class I: > 6.5 cm' },
        { value: 'Lower incisors can bite upper lip below vermilion line	', label: 'Class II: 6-6.5 cm' },
        { value: 'Lower incisors cannot bite upper lip	', label: 'Class III: < 6cm' },

    ]

    const optionforauscultation = [
        {
            value: 'Clear to auscultation', label: 'Clear to auscultation',
            subCategory: [
                { value: 'Bilaterally', label: 'Bilaterally' },
                { value: 'Left is clear only', label: 'Left is clear only', subCategory: [{ value: 'Right', label: 'Right', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] }] },
                { value: 'Right is clear only', label: 'Right is clear only', subCategory: [{ value: 'Left', label: 'Left', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] }] }
            ]
        },
        {
            value: 'Not clear to auscultation', label: 'Not clear to auscultation',
            subCategory: [
                { value: 'Bilaterally', label: 'Bilaterally', subCategory: [{ value: 'Right', label: 'Right', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] }, { value: 'Left', label: 'Left', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] }] },
                { value: 'Left is abnormal only', label: 'Left is abnormal only', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] },
                { value: 'Right is abnormal only', label: 'Right is abnormal only', subCategory: [{ value: 'Crackles', label: 'Crackles' }, { value: 'Diminished', label: 'Diminished' }, { value: 'Rales', label: 'Rales' }, { value: 'Rhonchi', label: 'Rhonchi' }, { value: 'Pleural friction rub', label: 'Pleural friction rub' }, { value: 'Prolonged expiration phase', label: 'Prolonged expiration phase' }, { label: 'Strider', value: 'Strider' }, { value: 'Wheezes - expiratory', label: 'Wheezes - expiratory' }, { value: 'Wheezes - inspiratory', label: 'Wheezes - inspiratory' }] }
            ]
        },


    ]



    const optionforthoracic_expansion = [
        { value: 'Symmetric expansion', label: 'Symmetric expansion' },
        { value: 'Asymmetric expansion', label: 'Asymmetric expansion' },

    ]

    const optionforMotor_and_Sensory_function = [
        { value: 'Normal sensory', label: 'Normal sensory' },
        { value: 'Normal motor function', label: 'Normal motor function' },
        { value: 'No focal deficits', label: 'No focal deficits' },
        { value: 'Gag reflex normal', label: 'Gag reflex normal' },
        { value: 'OTHER', label: 'OTHER' },

    ]

    const optionforcognitive_function = [
        { value: 'Alert', label: 'Alert' },
        { value: 'Oriented', label: 'Oriented' },
        { value: 'OTHER', label: 'OTHER' },

    ]


    const physicalexamcategory = [
        {
            name: 'VITAL SIGNS'
        },
        {
            name: 'GENERAL APPEARANCE'
        },
        {
            name: 'AIRWAY'
        },
        {
            name: 'PULMONARY'
        },
        {
            name: 'CARDIOVASCULAR'
        },
        {
            name: 'NEUROLOGIC'
        },
        {
            name: 'HEMATOLOGIC'
        },
        {
            name: 'VASCULAR ACCESS'
        }
    ]

    const optionforauscultation_for_murmurs = [
        { value: 'No murmur', label: 'No murmur' },
        {
            value: 'Murmur present', label: 'Murmur present',
            subCategory: [
                { value: 'Murmur type', label: 'Murmur type', subCategory: [{ value: 'Systolic murmur', label: 'Systolic murmur' }, { value: 'Diastolic murmur', label: 'Diastolic murmur' }, { value: 'OTHER', label: 'OTHER' }] },
                { value: 'Murmur location', label: 'Murmur location', subCategory: [{ value: 'Right upper sternal border', label: 'Right upper sternal border' }, { value: 'Left upper sternal border', label: 'Left upper sternal border' }, { value: 'Left lower sternal border', label: 'Left lower sternal border' }, { value: 'Left lateral 5th intercostal space', label: 'Left lateral 5th intercostal space' }, { value: 'OTHER', label: 'OTHER' }] },

            ]
        },


    ]

    useEffect(() => {

    }, [refresh])

    const Catheter_type = [
        { value: 'Single lumen', label: 'Single lumen' },
        { value: 'Double lumen', label: 'Double lumen' },
        { value: 'Triple lumen', label: 'Triple lumen' },
        { value: 'Sheath', label: 'Sheath' },
        { value: 'SLIC', label: 'SLIC' },
        { value: 'PICC', label: 'PICC' },
        { value: 'OTHER', label: 'OTHER' }
    ]

    const LocationOption = [
        { value: 'Left', label: 'Left' },
        { value: 'Right', label: 'Right' },
        { value: 'Radial', label: 'Radial' },
        { value: 'Femoral', label: 'Femoral' },
        { value: 'Brachial', label: 'Brachial' },
        { value: 'OTHER', label: 'OTHER' },

    ]

    const burgerMenuClick = () => {
        props.history.push('/drawer')
    }

    const handleChangeMood = selectedOption => {
        dispatch(setMood(selectedOption))
        setmood(selectedOption);

    };

    const handleChangeMouthOpeing = selectedOption => {
        setmood(selectedOption);

    };

    const handleChangeCervicalSpineMobility = selectedOption => {
        setcervical_spine_mobility(selectedOption)
        for (var j = 0; j < optionforcervical_spine_mobility.length; j++) {
            if (optionforcervical_spine_mobility[j].value === selectedOption.value) {
                setcervical_spine_mobility_subcategory(optionforcervical_spine_mobility[j].subCategory)

            }

        }

    }

    const handleChangetemporomandibular_joint_mobility = selectedOption => {
        settemporomandibular_joint_mobility_type(selectedOption);

    };

    const handleChangeteeth = selectedOption => {
        setteeth(selectedOption);
        for (var j = 0; j < optionforteeth.length; j++) {
            if (optionforteeth[j].value === selectedOption.value) {
                setteethSubCategory(optionforteeth[j].subCategory)

            }

        }

    };

    const handleChangeSubteethCategory = selectedOption => {
        setteeth(selectedOption);
        for (var j = 0; j < teethSubCategory.length; j++) {
            if (teethSubCategory[j].value === selectedOption.value) {
                setteethSubSubCategory(teethSubCategory[j].subCategory)

            }

        }

    };

    const handleChangeSubteethCategoryType = selectedOption => {
        setteethSubSubCategoryType(selectedOption);

    };




    const handleChangeCervicalSpineMobilitySubType = selectedOption => {
        setcervical_spine_mobility_sub_type(selectedOption.value)
    }

    const handleChangethyromental_distance = selectedOption => {
        setthyromental_distance_type(selectedOption);
        setRefresh({})

    };

    const handleChangeauscultation = selectedOption => {
        for (var j = 0; j < optionforauscultation.length; j++) {
            if (optionforauscultation[j].value === selectedOption.value) {
                setauscultationType(optionforauscultation[j].subCategory)

            }

        }
        dispatch(setAuscultationMainType(selectedOption))

    };

    const savePhysicalExamData = async () => {
        // console.log("run");
        try {
            const token = await localStorage.getItem('token')
            const url = API_ROOT + `save-physical-exams?token=${token}`
            const body = {
                "case_id": "102",
                "Blood Pressure Systolic BP": bloodPressureSystolicBP,
                "Blood Pressure Diastolic BP": bloodPressureDiastolicBP,
                "Weight": Weight,
                "Height": Height,
                "Mood": Mood,
                "BMI": BMI,
                "Jaundice": Jaundice,
                "General Appearance Other": generalOtherListed,
                "Mallampati score": mallampatiScore,
                "Mouth opening": mouthOpening,
                "Bearded": Bearded,
                "Cervical spine mobility": cervical_spine_mobility,
                "Cervical spine mobility other": ["string", "string"],
                "Neck circumference >42": neck_circumference_less_then_42_cm,
                "Teeth": Teeth,
                "Thyromental distance": thyromental_distance,
                "Other airway": Airway_OTHER_NOT_LISTED,
                "Coughing": Coughing,
                "Thoracic expansion": thoracic_expansion,
                "Oxygen saturation on room air": oxygen_saturation_on_room_air,
                "OTHER/NOT LISTED pulmonary 2": OTHER_NOT_LISTED_pulmonary,
                "Pulse rate": pulse_rate,
                "Auscultation for murmurs": auscultation_for_murmursRedux,
                "Edema": Edema_lower_extremity,
                "Jugular venous distension": JugularVenousDistension,
                "BP (including postural drop if relevant)/heart rate/rhythm": BP,
                "CARDIOVASCULAR OTHER": CARDIOVASCULAR_OTHER_LISTED,
                "Motor and Sensory function": Motor_and_Sensory_function,
                "Cognitive function": cognitive_functionRedux,
                "Neurologic OTHER": Neurologic_OTHER,
                "Petechiae": petechiaeRedux,
                "Bruising": bruisingRedux,
                "Clinical evidence of anemia": clinical_evidence_of_anemiaRedux,
                "Hematologic OTHER": hematologic_OTHER_LISTED,
                "Peripheral IV - Total number of PIVs": Peripheral_IV,
                "Central IV Ultrasound for line placement": Central_IV_Ultrasound_for_line_placement,
                "Central IV Catheter type": Central_IV_Catherter_type,
                "Central IV Pulmonary Arterial Catheter": Central_IV_Pulmonary_Arterial_Catheter,
                "Arterial Ultrasound for line placement": Arterial_Ultrasound_For_Line_Placement,
                "Arterial Gauge": Arterial_Gauge,
                "Arterial Location": Arterial_Location,
                "Physical Exam OTHER": Physical_Exam_OTHER_LISTED,
                "Bilaterally": "value",
                "Left is clear only": ["value", "value"],
                "Right is clear only": ["value", "value"],
                "Bilaterally Right": ["value", "value"],
                "Bilaterally left": ["value", "value"],
                "Left is abnormal only": ["value", "value"],
                "Right is abnormal only": ["value", "value"],
                "Murmur type": "value",
                "Murmur location": "value",
                "Gauge": Gauge,
                "Location": Location

            }


            const res = await Axios.post(url, body, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            console.log(res.data)

        } catch (error) {
            console.log(error)
        }
    }


    const handleChangeauscultationType = selectedOption => {
        for (var j = 0; j < auscultationType.length; j++) {
            if (auscultationType[j].value === selectedOption.value) {
                setauscultationSubType(auscultationType[j].subCategory)

            }

        }
        dispatch(setAuscultationSubType(selectedOption))

    };

    const handleChangeauscultationSubType = selectedOption => {
        for (var j = 0; j < auscultationSubType.length; j++) {
            if (auscultationSubType[j].value === selectedOption.value) {
                setauscultationSubSubType(auscultationSubType[j].subCategory)

            }

        }
        dispatch(setAuscultationSubSubType(selectedOption))

    };

    const handleChangeauscultationmurmursType = selectedOption => {
        for (var j = 0; j < optionforauscultation_for_murmurs.length; j++) {
            if (optionforauscultation_for_murmurs[j].value === selectedOption.value) {
                setauscultation_for_murmurs(optionforauscultation_for_murmurs[j].subCategory)

            }

        }
        dispatch(setMurmurPresent(selectedOption))

    };

    const handleChangeauscultationmurmursSubType = selectedOption => {
        for (var j = 0; j < auscultation_for_murmurs.length; j++) {
            if (auscultation_for_murmurs[j].value === selectedOption.value) {
                setauscultation_for_murmurs_sub_type(auscultation_for_murmurs[j].subCategory)

            }

        }
        dispatch(setMurmurTypeLocation(selectedOption))

    };


    const nextBtnClick = () => {
        setquestinNo(questinNo + 1)

    }

    const backBtnClick = () => {
        setquestinNo(0)
    }

    const prevBtnClick = () => {
        setquestinNo(questinNo - 1)
    }



    const [questinNo, setquestinNo] = useState(0)
    return (
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <header className="crises-header">
                <h1 style={{ float: 'left' }} className="arrow"><Link className="arrow" to="/actionsummary"><i className="fas fa-arrow-left"></i></Link></h1>
                <h4>PHYSICAL EXAM</h4>
                <h4 className="hidn">CRISES</h4>
            </header>
            <div>
                {questinNo == 0 ?
                    <div className="result-container" >
                        <div onClick={() => setquestinNo(1)} className="answer-container" >
                            <div>
                                1. VITAL SIGNS
                            </div>
                            <div>

                            </div>
                        </div>
                        <div onClick={() => setquestinNo(2)} className="answer-container" >
                            <div>
                                2.GENERAL APPEARANCE
                            </div>
                            <div>

                            </div>
                        </div>
                        <div onClick={() => setquestinNo(3)} className="answer-container" >
                            <div>
                                3.AIRWAY
                            </div>
                            <div>

                            </div>
                        </div>
                        <div onClick={() => setquestinNo(4)} className="answer-container" >
                            <div>
                                4.PULMONARY
                            </div>
                            <div>

                            </div>
                        </div>
                        <div onClick={() => setquestinNo(5)} className="answer-container" >
                            <div>
                                5. CARDIOVASCULAR
                            </div>
                            <div>

                            </div>
                        </div>
                        <div onClick={() => setquestinNo(6)} className="answer-container" >
                            <div>
                                6. NEUROLOGIC
                            </div>
                            <div>

                            </div>
                        </div>
                        <div onClick={() => setquestinNo(7)} className="answer-container" >
                            <div>
                                7. HEMATOLOGIC
                            </div>
                            <div>

                            </div>
                        </div>
                        <div onClick={() => setquestinNo(8)} className="answer-container" >
                            <div>
                                8. VASCULAR ACCESS
                            </div>
                            <div>

                            </div>
                        </div>
                        <button onClick={() => savePhysicalExamData()}>Submit</button>
                    </div> : <></>
                }
            </div>
            <div className="physical-exam-main-container" >
                {questinNo == 1 ?
                    <div className="question-container" >
                        <div className="physical-exam-question-container" >

                            <div className="vital-signs-header-container" >
                                VITAL SIGNS
                            </div>
                            <div className="vital-signs-input-container" >
                                <div className="blood-pressure-container" >
                                    Blood Pressure
                                    <div className="blood-pressure-container-subcontainer" >
                                        <div>Systolic BP</div>
                                        <input value={bloodPressureSystolicBP} onChange={(e) => dispatch(setBloodPressureSystolicBP(e.target.value))} className="input-container" placeholder="enter systolic BP..." />
                                    </div>
                                    <div className="blood-pressure-container-subcontainer" >
                                        <div>Diastolic BP</div>
                                        <input value={bloodPressureDiastolicBP} onChange={(e) => dispatch(setBloodPressureDiastolicBP(e.target.value))} className="input-container" placeholder="enter diastolic BP..." />
                                    </div>
                                    <div className="blood-pressure-container-subcontainer" >
                                        <div>Weight</div>
                                        <input value={Weight} onChange={(e) => dispatch(setWeight(e.target.value))} className="input-container" placeholder="enter weight..." />
                                    </div>
                                    <div className="blood-pressure-container-subcontainer" >
                                        <div>Height</div>
                                        <input value={Height} onChange={(e) => dispatch(setHeight(e.target.value))} className="input-container" placeholder="enter height..." />
                                    </div>
                                </div>
                            </div>
                            <div className="vitalsign-next-button-container" >
                                {/* <div className="vitalsign-next-button" >
                                BACK
                                </div> */}
                                <div className="next-button-container" >
                                    <div onClick={() => backBtnClick()} className="next-button" >
                                        BACK
                                    </div>


                                    <div onClick={() => nextBtnClick()} className="next-button" >
                                        SKIP
                                    </div>
                                    <div onClick={() => nextBtnClick()} className="next-button" >
                                        NEXT
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div> : <></>}
                {questinNo == 2 ?
                    <div className="physical-exam-question-container" >

                        <div className="vital-signs-header-container" >
                            GENERAL APPEARANCE
                        </div>
                        <div className="vital-signs-input-container" >
                            <div className="blood-pressure-container" >

                                <div className="blood-pressure-container-subcontainer" >
                                    <div>mood</div>
                                    <Select onChange={(value) => dispatch(setMood(value))} placeholder="select mood..." className="gender-dropdown" id="age" options={optionforMood} />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>BMI</div>
                                    <input onChange={(e) => dispatch(setBMI(e.target.value))} className="input-container" placeholder="enter BMI..." />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>Jaundice</div>
                                    <div className="option-box-container" >
                                        <input checked={Jaundice === "Yes" ? true : false} onChange={(e) => dispatch(setJaundice(e.target.value))}
                                            type="radio" value="Yes" name="Jaundice" /> Yes
                                        <input checked={Jaundice === "No" ? true : false} onChange={(e) => dispatch(setJaundice(e.target.value))} type="radio" value="No" name="Jaundice" /> No
                                    </div>
                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>OTHER/NOT LISTED</div>
                                    <input onChange={(e) => dispatch(setGeneralApperanceOtherList(e.target.value))} className="input-container" placeholder="enter other/not listed..." />
                                </div>
                            </div>
                        </div>
                        <div className="vitalsign-next-button-container" >
                            {/* <div className="vitalsign-next-button" >
                            BACK
                            </div> */}
                            <div className="next-button-container" >
                                <div onClick={() => backBtnClick()} className="next-button" >
                                    BACK
                                </div>


                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    SKIP
                                </div>
                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    NEXT
                                </div>
                            </div>


                        </div>
                    </div>
                    : <></>}

                {questinNo == 3 ?
                    <div className="physical-exam-question-container" >

                        <div className="vital-signs-header-container" >
                            AIRWAY
                        </div>
                        <div className="vital-signs-input-container" >
                            <div className="blood-pressure-container" >
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>Mallampati score</div>

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>Mouth opening</div>
                                    <Select value={mouthOpening} onChange={(value) => dispatch(setMouthOpening(value))} placeholder="select mouth opening..." className="gender-dropdown" id="age" options={optionforMouthOpening} />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>Bearded</div>
                                    <div className="option-box-container" >
                                        <input checked={Bearded === "Yes" ? true : false} onChange={(e) => dispatch(setBearded(e.target.value))} type="radio" value="Yes" name="Jaundice" /> Yes
                                        <input checked={Bearded === "No" ? true : false} onChange={(e) => dispatch(setBearded(e.target.value))} type="radio" value="No" name="Jaundice" /> No
                                    </div>
                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>cervical spine mobility</div>
                                    <Select onChange={(value) => handleChangeCervicalSpineMobility(value)} placeholder="select cervical spine mobility..." className="gender-dropdown" id="age" options={optionforcervical_spine_mobility} />
                                    <Select value={cervical_spine_mobilityRedux} onChange={(value) => dispatch(setCervicalSpineMobility(value))} placeholder="select cervical spine mobility type..." className="gender-dropdown" id="age" options={cervical_spine_mobility_subcategory} />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>neck circumference</div>
                                    <div>{"> 42 cm ?"}</div>
                                    <div className="option-box-container" >
                                        <input checked={neck_circumference_less_then_42_cm === "Yes" ? true : false} onChange={(e) => dispatch(setNeckCircumferenceLessThan42(e.target.value))} type="radio" value="Yes" name="Jaundice" /> Yes
                                        <input checked={neck_circumference_less_then_42_cm === "No" ? true : false} onChange={(e) => dispatch(setNeckCircumferenceLessThan42(e.target.value))} type="radio" value="No" name="Jaundice" /> No
                                    </div>
                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>temporomandibular joint mobility</div>
                                    <Select value={temporomandibular_joint_mobilityRedux} onChange={(value) => dispatch(setTemporomandibularJointMobility(value))} placeholder="select temporomandibular joint mobility..." className="gender-dropdown" id="age" options={temporomandibular_joint_mobility} />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>teeth</div>
                                    <Select onChange={(value) => handleChangeteeth(value)} placeholder="select teeth..." className="gender-dropdown" id="age" options={optionforteeth} />
                                    <Select onChange={(value) => handleChangeSubteethCategory(value)} placeholder="select teeth..." className="gender-dropdown" id="age" options={teethSubCategory} />
                                    <Select value={Teeth} onChange={(value) => dispatch(setTeeth(value))} placeholder="select teeth..." className="gender-dropdown" id="age" options={teethSubSubCategory} />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>thyromental distance</div>
                                    <Select value={thyromental_distanceRedux} onChange={(value) => dispatch(setThromentalDistance(value))} placeholder="select thyromental distance..." className="gender-dropdown" id="age" options={thyromental_distance} />

                                </div>
                                <div>
                                    {thyromental_distance_type.length ?
                                        <>
                                            hello
                                        </> : <></>
                                    }
                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>OTHER/NOT LISTED</div>
                                    <input value={Airway_OTHER_NOT_LISTED} onChange={(e) => dispatch(setAirwayOtherList(e.target.value))} className="input-container" placeholder="enter other/not listed..." />
                                </div>





                            </div>
                        </div>
                        <div className="vitalsign-next-button-container" >
                            {/* <div className="vitalsign-next-button" >
                            BACK
                        </div> */}
                            <div className="next-button-container" >
                                <div onClick={() => backBtnClick()} className="next-button" >
                                    BACK
                                </div>


                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    SKIP
                                </div>
                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    NEXT
                                </div>
                            </div>
                        </div>
                    </div>
                    : <></>}

                {questinNo == 4 ?
                    <div className="physical-exam-question-container" >

                        <div className="vital-signs-header-container" >
                            PULMONARY
                        </div>
                        <div className="vital-signs-input-container" >
                            <div className="blood-pressure-container" >

                                <div className="blood-pressure-container-subcontainer" >
                                    <div>auscultation</div>
                                    <Select style={{ margin: 10 }} value={auscMainType} onChange={(value) => handleChangeauscultation(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={optionforauscultation} />
                                    <Select style={{ margin: 10 }} value={auscSubType} onChange={(value) => handleChangeauscultationType(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={auscultationType} />
                                    <Select style={{ margin: 10 }} value={auscSubSubType} onChange={(value) => handleChangeauscultationSubType(value)} placeholder="select auscultation..." className="gender-dropdown" id="age" options={auscultationSubType} />
                                    <Select style={{ margin: 10 }} value={auscultationRedux} onChange={(value) => dispatch(setAuscultation(value))} placeholder="select auscultation..." className="gender-dropdown" id="age" options={auscultationSubSubType} />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>Coughing</div>
                                    <input value={Coughing} onChange={(e) => dispatch(setCoughing(e.target.value))} className="input-container" placeholder="enter Coughing..." />
                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>thoracic expansion</div>
                                    <Select value={thoracic_expansion} onChange={(value) => dispatch(setThoracicExpansion(value))} placeholder="select thoracic expansion..." className="gender-dropdown" id="age" options={optionforthoracic_expansion} />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>oxygen saturation on room air</div>
                                    <input value={oxygen_saturation_on_room_air} onChange={(e) => dispatch(setOxygenSaturationOnRoomAir(e.target.value))} className="input-container" placeholder="enter oxygen saturation on room air..." />
                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>OTHER/NOT LISTED</div>
                                    <input className="input-container" placeholder="enter OTHER/NOT LISTED..." />
                                </div>

                            </div>
                        </div>
                        <div className="vitalsign-next-button-container" >
                            {/* <div className="vitalsign-next-button" >
                            BACK
                        </div> */}
                            <div className="next-button-container" >
                                <div onClick={() => backBtnClick()} className="next-button" >
                                    BACK
                                </div>


                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    SKIP
                                </div>
                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    NEXT
                                </div>
                            </div>
                        </div>
                    </div>
                    : <></>}

                {questinNo == 5 ?
                    <div className="physical-exam-question-container" >

                        <div className="vital-signs-header-container" >
                            CARDIOVASCULAR
                        </div>
                        <div className="vital-signs-input-container" >
                            <div className="blood-pressure-container" >
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>pulse rate</div>
                                    <input value={pulse_rate} onChange={(e) => dispatch(setPulseRate(e.target.value))} className="input-container" placeholder="enter pulse rate..." />
                                </div>

                                <div className="blood-pressure-container-subcontainer" >
                                    <div>auscultation for murmurs</div>
                                    <Select value={murmurPresent} onChange={(value) => handleChangeauscultationmurmursType(value)} placeholder="select auscultation for murmurs..." className="gender-dropdown" id="age" options={optionforauscultation_for_murmurs} />
                                    <Select value={murmurTypeLocation} onChange={(value) => handleChangeauscultationmurmursSubType(value)} placeholder="select auscultation for murmurs..." className="gender-dropdown" id="age" options={auscultation_for_murmurs} />
                                    <Select value={auscultation_for_murmursRedux} onChange={(value) => dispatch(setAuscultationForMurmurs(value))} placeholder="select auscultation for murmurs..." className="gender-dropdown" id="age" options={auscultation_for_murmurs_sub_type} />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>Edema - lower extremity</div>
                                    <div className="option-box-container" >
                                        <input checked={Edema_lower_extremity === "Yes" ? true : false} onChange={(e) => dispatch(setEdemaLowerExtremity(e.target.value))} type="radio" value="Yes" name="Edema" /> Yes
                                        <input onChange={(e) => dispatch(setEdemaLowerExtremity(e.target.value))} checked={Edema_lower_extremity === "No" ? true : false} type="radio" value="No" name="Edema" /> No
                                    </div>
                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>Jugular venous distension</div>
                                    <div className="option-box-container" >
                                        <input checked={JugularVenousDistension === "Yes" ? true : false} onChange={(e) => dispatch(setJugularVenousDistension(e.target.value))} type="radio" value="Yes" name="Jugular" /> Yes
                                        <input checked={JugularVenousDistension === "No" ? true : false} onChange={(e) => dispatch(setJugularVenousDistension(e.target.value))} type="radio" value="No" name="Jugular" /> No
                                    </div>
                                </div>


                                <div className="blood-pressure-container-subcontainer" >
                                    <div>BP (including postural drop if relevant)/heart rate/rhythm</div>
                                    <input value={BP} onChange={(e) => dispatch(setBP(e.target.value))} className="input-container" placeholder="enter BP (including postural drop if relevant)/heart rate/rhythm..." />
                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>OTHER/NOT LISTED</div>
                                    <input className="input-container" placeholder="enter OTHER/NOT LISTED..." />
                                </div>

                            </div>
                        </div>
                        <div className="vitalsign-next-button-container" >
                            {/* <div className="vitalsign-next-button" >
                            BACK
                            </div> */}
                            <div className="next-button-container" >
                                <div onClick={() => backBtnClick()} className="next-button" >
                                    BACK
                                </div>


                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    SKIP
                                </div>
                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    NEXT
                                </div>
                            </div>


                        </div>
                    </div>
                    : <></>}

                {questinNo == 6 ?
                    <div className="physical-exam-question-container" >

                        <div className="vital-signs-header-container" >
                            NEUROLOGIC
                        </div>
                        <div className="vital-signs-input-container" >
                            <div className="blood-pressure-container" >

                                <div className="blood-pressure-container-subcontainer" >
                                    <div>Motor and Sensory function</div>
                                    <Select value={Motor_and_Sensory_function} onChange={(value) => dispatch(setMotorAndSensoryFunction(value))} placeholder="select Motor and Sensory function..." className="gender-dropdown" id="age" options={optionforMotor_and_Sensory_function} />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>cognitive function</div>
                                    <Select value={cognitive_functionRedux} onChange={(value) => dispatch(setCognitiveFunction(value))} placeholder="select cognitive function..." className="gender-dropdown" id="age" options={optionforcognitive_function} />

                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>OTHER/NOT LISTED</div>
                                    <input className="input-container" placeholder="enter other/not listed..." />
                                </div>
                            </div>
                        </div>
                        <div className="vitalsign-next-button-container" >
                            {/* <div className="vitalsign-next-button" >
                            BACK
                            </div> */}

                            <div className="next-button-container" >
                                <div onClick={() => backBtnClick()} className="next-button" >
                                    BACK
                                </div>


                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    SKIP
                                </div>
                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    NEXT
                                </div>
                            </div>

                        </div>
                    </div>
                    : <></>}
                {questinNo == 7 ?
                    <div className="physical-exam-question-container" >

                        <div className="vital-signs-header-container" >
                            HEMATOLOGIC
                        </div>
                        <div className="vital-signs-input-container" >
                            <div className="blood-pressure-container" >

                                <div className="blood-pressure-container-subcontainer" >
                                    <div>petechiae</div>
                                    <div className="option-box-container" >
                                        <input checked={petechiaeRedux === "Yes" ? true : false} onChange={(e) => dispatch(setPetechiae(e.target.value))} type="radio" value="Yes" name="Petechiae" /> Yes
                                        <input checked={petechiaeRedux === "No" ? true : false} onChange={(e) => dispatch(setPetechiae(e.target.value))} type="radio" value="No" name="Petechiae" /> No
                                    </div>
                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>bruising</div>
                                    <div className="option-box-container" >
                                        <input checked={bruisingRedux === "Yes" ? true : false} onChange={(e) => dispatch(setBruising(e.target.value))} type="radio" value="Yes" name="Bruising" /> Yes
                                        <input checked={bruisingRedux === "No" ? true : false} onChange={(e) => dispatch(setBruising(e.target.value))} type="radio" value="No" name="Bruising" /> No
                                    </div>
                                </div>
                                <div className="blood-pressure-container-subcontainer" >
                                    <div>clinical evidence of anemia</div>
                                    <div className="option-box-container" >
                                        <input checked={clinical_evidence_of_anemiaRedux === "Yes" ? true : false} onChange={(e) => dispatch(setClinicalEvidenceOfAnemia(e.target.value))} type="radio" value="Yes" name="Clinical" /> Yes
                                        <input checked={clinical_evidence_of_anemiaRedux === "No" ? true : false} onChange={(e) => dispatch(setClinicalEvidenceOfAnemia(e.target.value))} type="radio" value="No" name="Clinical" /> No
                                    </div>
                                </div>

                                <div className="blood-pressure-container-subcontainer" >
                                    <div>OTHER/NOT LISTED</div>
                                    <input className="input-container" placeholder="enter other/not listed..." />
                                </div>
                            </div>
                        </div>
                        <div className="vitalsign-next-button-container" >
                            {/* <div className="vitalsign-next-button" >
                            BACK
                            </div> */}
                            <div className="next-button-container" >
                                <div onClick={() => backBtnClick()} className="next-button" >
                                    BACK
                                </div>


                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    SKIP
                                </div>
                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    NEXT
                                </div>
                            </div>


                        </div>
                    </div>
                    : <></>}
                {questinNo == 8 ?
                    <div className="physical-exam-question-container" >

                        <div className="vital-signs-header-container" >
                            VASCULAR ACCESS
                        </div>
                        <div className="vital-signs-input-container" >
                            <div className="blood-pressure-container" >

                                <div className="blood-pressure-container-subcontainer" >
                                    <div>Peripheral IV</div>
                                    <input value={Peripheral_IV} onChange={(e) => dispatch(setPeripheralIV(e.target.value))} className="input-container" placeholder="enter Peripheral IV..." />

                                </div>

                                <div className="central-iv-subcontainer" >
                                    <div>Gauge</div>
                                    <input value={Gauge} onChange={(e) => dispatch(setGauge(e.target.value))} className="input-container" placeholder="enter Gauge..." />

                                </div>

                                <div className="central-iv-subcontainer" >
                                    <div>Location</div>
                                    <Select value={Location} onChange={(value) => dispatch(setLocation(value))} placeholder="select Location..." className="gender-dropdown" id="age" options={LocationOption} />

                                </div>


                                <div className="central-iv-container" >
                                    <div>Central IV</div>
                                    <div className="central-iv-subcontainer" >
                                        <div>Catheter type</div>
                                        <Select value={Central_IV_Catherter_type} onChange={(value) => dispatch(setCentralIVCatherterType(value))} placeholder="select Catheter type..." className="gender-dropdown" id="age" options={Catheter_type} />

                                    </div>

                                    <div className="central-iv-subcontainer" >
                                        <div>Ultrasound for line placement</div>
                                        <div className="option-box-container" >
                                            <input checked={Central_IV_Ultrasound_for_line_placement === "Yes" ? true : false} onChange={(e) => dispatch(setCentralIVUltrasoundForLinePlacement(e.target.value))} type="radio" value="Yes" name="Ultrasound" /> Yes
                                            <input checked={Central_IV_Ultrasound_for_line_placement === "No" ? true : false} onChange={(e) => dispatch(setCentralIVUltrasoundForLinePlacement(e.target.value))} type="radio" value="No" name="Ultrasound" /> No
                                        </div>

                                    </div>

                                    <div className="central-iv-subcontainer" >
                                        <div>Pulmonary Arterial Catheter</div>
                                        <div className="option-box-container" >
                                            <input checked={Central_IV_Pulmonary_Arterial_Catheter === "Yes" ? true : false} onChange={(e) => dispatch(setCentralIVPulmonaryArterialCatheter(e.target.value))} type="radio" value="Yes" name="Pulmonary" /> Yes
                                            <input checked={Central_IV_Pulmonary_Arterial_Catheter === "Yes" ? true : false} onChange={(e) => dispatch(setCentralIVPulmonaryArterialCatheter(e.target.value))} type="radio" value="No" name="Pulmonary" /> No
                                        </div>

                                    </div>

                                </div>

                                <div className="central-iv-container" >
                                    <div>Arterial</div>

                                    <div className="central-iv-subcontainer" >
                                        <div>Ultrasound for line placement</div>
                                        <div className="option-box-container" >
                                            <input checked={Arterial_Ultrasound_For_Line_Placement === "Yes" ? true : false} onChange={(e) => dispatch(setArterialUltrasoundForLinePlacement(e.target.value))} type="radio" value="Yes" name="ArterialUltrasound" /> Yes
                                            <input checked={Arterial_Ultrasound_For_Line_Placement === "No" ? true : false} onChange={(e) => dispatch(setArterialUltrasoundForLinePlacement(e.target.value))} type="radio" value="No" name="ArterialUltrasound" /> No
                                        </div>

                                    </div>

                                    <div className="central-iv-subcontainer" >
                                        <div>Gauge</div>
                                        <input value={Arterial_Gauge} onChange={(e) => dispatch(setArterialGauge(e.target.value))} className="input-container" placeholder="enter Gauge..." />

                                    </div>

                                    <div className="central-iv-subcontainer" >
                                        <div>Location</div>
                                        <Select value={Arterial_Location} onChange={(value) => dispatch(setArterialLoction(value))} placeholder="select Location..." className="gender-dropdown" id="age" options={LocationOption} />

                                    </div>



                                </div>

                                <div className="blood-pressure-container-subcontainer" >
                                    <div>OTHER/NOT LISTED</div>
                                    <input className="input-container" placeholder="enter other/not listed..." />
                                </div>
                            </div>
                        </div>
                        <div className="vitalsign-next-button-container" >
                            {/* <div className="vitalsign-next-button" >
                            BACK
                            </div> */}

                            <div className="next-button-container" >
                                <div onClick={() => backBtnClick()} className="next-button" >
                                    BACK
                                </div>


                                <div onClick={() => nextBtnClick()} className="next-button" >
                                    SKIP
                                </div>
                                <div onClick={() => backBtnClick()} className="next-button" >
                                    NEXT
                                </div>
                            </div>

                        </div>
                        <div className="submit-physical">

                        </div>

                    </div>

                    : <></>}





            </div>
        </div>
    )
}

export default PhysicalExam
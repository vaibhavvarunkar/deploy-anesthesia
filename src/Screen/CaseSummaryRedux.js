import React, { useState, useEffect } from 'react';
import Header from '../CustomComponent/Header';
import { useSelector, useDispatch } from 'react-redux';
import {
    setAgee,
    setAgeType,
    setAllergies,
    setAnesthasiaHistory,
    setAnesthasiaInput,
    setAnesthasiaInputFam,
    setAnesthasiaType,
    setAsaps,
    setCategorySurgeryName,
    setEmergency,
    setGenderType,
    setIndigestedMaterial,
    setLastTimeFood,
    setMedicalHistory,
    setMedication,
    setNonListedMedication,
    setNonListedSurgeryHistoryName,
    setNotListedAllergies,
    setPatientHeight,
    setPatientHeightType,
    setPatientsType,
    setPatientWeight,
    setPatientWeightType,
    setSubAnesthasiaType,
    setSubSurgeryHistoryName,
    setSubSurgeryName,
    setSurgeryHistoryName,
    setSurgeryName,
    setTimeType,
} from '../redux/caseSummaryActions';
import '../css/AllAction.css';
import '../css/casesummary.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import SaveCaseModal from '../CustomComponent/SaveCaseModal';
import SaveCaseNameModal from '../CustomComponent/SaveCaseNameModal';
import BurgerMenuModal from '../CustomComponent/BurgerMenuModal';
import { API_ROOT } from '../constants';

const optionsforage = [
    { value: 'Years', label: 'Year' },
    { value: 'Months', label: 'Month' },
    { value: 'Weeks', label: 'Week' },
    { value: 'Days', label: 'Day' },
]
const optionsforgender = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
]

const optionsForHeight = [
    { value: 'Centimeters', label: 'Centimeters' },
    { value: 'Inches', label: 'Inches' },

]

const optionsForWeight = [
    { value: 'KG', label: 'Kilogram' },
    { value: 'LB', label: 'Pounds' },

]

const optionsforEmergency = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' },

]

const optionForNPOStatus = [
    { value: 'Hours', label: 'Hours' },
    { value: 'Minutes', label: 'Minutes' }
]

const ingestedMaterialArray = [
    { label: 'Clear Fluid' },
    { label: 'Breast Milk' },
    { label: 'Infant Formula' },
    { label: 'Non-human Milk' },
    { label: 'Light Meal' },
    { label: 'Heavy Meal' }
]

const CaseSummaryRedux = (props) => {
    ////////////////////////////////////////////////redux//////////////////////////////////////////////////////
    const agee = useSelector((state) => state.casesummary.agee);
    const genderType = useSelector((state) => state.casesummary.genderType);
    const ageeType = useSelector((state) => state.casesummary.ageeType);
    const patientsType = useSelector((state) => state.casesummary.patientsType);
    const patientsHeight = useSelector((state) => state.casesummary.patientsHeight);
    const patientsHeightType = useSelector((state) => state.casesummary.patientsHeightType);
    const patientsWeight = useSelector((state) => state.casesummary.patientsWeight);
    const patientsWeightType = useSelector((state) => state.casesummary.patientsWeightType);
    const patientsAsap = useSelector((state) => state.casesummary.patientsAsap);
    const patientsEmergency = useSelector((state) => state.casesummary.patientsEmergency);
    const surgeryName = useSelector((state) => state.casesummary.surgeryName);
    const subSurgeryName = useSelector((state) => state.casesummary.subSurgeryName);
    const categorySurgeryName = useSelector((state) => state.casesummary.categorySurgeryName);
    const anesthasiaType = useSelector((state) => state.casesummary.anesthasiaType)
    const anesthasiaSubType = useSelector((state) => state.casesummary.anesthasiaSubType)
    const medicationAnswer = useSelector(state => state.casesummary.medicationAnswer)
    const choiceAnswer = useSelector(state => state.casesummary.choiceAnswer)
    const nonListedMedication = useSelector(state => state.casesummary.nonListedMedication)
    const lastTimeFood = useSelector(state => state.casesummary.lastTimeFood)
    const foodTimeType = useSelector(state => state.casesummary.foodTimeType)
    const indigestedMaterial = useSelector(state => state.casesummary.indigestedMaterial)
    const patientAllergies = useSelector(state => state.casesummary.patientAllergies)
    const nonListedAllergies = useSelector(state => state.casesummary.nonListedAllergies)
    const surgeryHistoryName = useSelector(state => state.casesummary.surgeryHistoryName)
    const surgerySubHistoryName = useSelector(state => state.casesummary.surgerySubHistoryName)
    const surgeryNonListedHistoryName = useSelector(state => state.casesummary.surgeryNonListedHistoryName)
    const anesthasiaHistoryAnswers = useSelector(state => state.casesummary.anesthasiaHistoryAnswers)
    const anesthasiaInput = useSelector(state => state.casesummary.anesthasiaInput)
    const anesthasiaInputFam = useSelector(state => state.casesummary.anesthasiaInputFam)
    const dispatch = useDispatch();

    //////////////////////////////////////////////////////////////////////////////////////////////////////

    const [ageType, setageType] = useState(null);
    const [ageTypeDisplay, setageTypeDisplay] = useState(null);
    const [age, setAge] = useState(null);
    const [gender, setGender] = useState(null);
    const [genderDisplay, setgenderDisplay] = useState(null);
    const [patientTypeArray, setpatientTypeArray] = useState([]);
    const [patientType, setPatientType] = useState(null);
    const [patientTypeDisplay, setpatientTypeDisplay] = useState([]);

    const [height, setHeight] = useState(null);

    const [weight, setWeight] = useState(null);
    const [surgeryTypeArray, setsurgeryTypeArray] = useState([]);
    const [surgeryType, setsurgeryType] = useState([]);
    const [sub_surgeryArray, setsub_surgeryArray] = useState([]);
    const [sub_surgeryArray2, setsub_surgeryArray2] = useState([]);
    const [sub_surgeryArray3, setsub_surgeryArray3] = useState([]);
    const [sub_surgeryArray4, setsub_surgeryArray4] = useState([]);
    const [sub_surgeryArray5, setsub_surgeryArray5] = useState([]);
    const [sub_surgeryArray6, setsub_surgeryArray6] = useState([]);
    const [surgerySubType, setsurgerySubType] = useState([]);
    const [anesthesia_type_list, setanesthesia_type_list] = useState([]);
    const [anesthesia_type, setanesthesia_type] = useState([]);
    const [anesthesiaSubType, setanesthesiaSubType] = useState([]);
    const [subanesthesia_type, setsubanesthesia_type] = useState([]);
    const [subanesthesia_type2, setsubanesthesia_type2] = useState([]);
    const [subanesthesia_type3, setsubanesthesia_type3] = useState([]);
    const [subanesthesia_type4, setsubanesthesia_type4] = useState([]);
    const [subQuestionClick, setsubQuestionClick] = useState(true);
    const [subQuestionNo, setsubQuestionNo] = useState(0);
    const [AsapaArray, setAsapaArray] = useState([]);
    const [asaps, setasaps] = useState([]);
    const [medicationsArray, setmedicationsArray] = useState([]);
    const [medication, setmedication] = useState([]);
    const [medicalHistory, setmedicalHistory] = useState([]);
    const [medicalSubHistory, setmedicalSubHistory] = useState([]);
    const [timeOfLastFoodOrDrink, settimeOfLastFoodOrDrink] = useState(null);
    const [ingestedMaterial, setingestedMaterial] = useState([]);
    const [nameVisble, setnameVisble] = useState(false);
    const [fileName, setFileName] = useState(null);
    const [surgeryHistoryArray, setsurgeryHistoryArray] = useState([]);

    const [surgeryHistory, setsurgeryHistory] = useState([]);
    const [sub_surgeryHistoryArray, setsub_surgeryHistoryArray] = useState([]);
    const [sub_surgeryHistoryArray2, setsub_surgeryHistoryArray2] = useState([]);
    const [sub_surgeryHistoryArray3, setsub_surgeryHistoryArray3] = useState([]);
    const [sub_surgeryHistoryArray4, setsub_surgeryHistoryArray4] = useState([]);
    const [sub_surgeryHistoryArray5, setsub_surgeryHistoryArray5] = useState([]);
    const [sub_surgeryHistoryArray6, setsub_surgeryHistoryArray6] = useState([]);
    const [surgerySubHistory, setsurgerySubHistory] = useState([]);
    // const [refresh, setRefresh] = useState({})

    const [anesethesiaHistory, setanesethesiaHistory] = useState([]);
    const [anesethesiaSubHistory, setanesethesiaSubHistory] = useState([]);
    const [medicalHistoryArray, setmedicalHistoryArray] = useState([]);
    const [AllegriesArray, setAllegriesArray] = useState([]);
    const [allegries, setallegries] = useState([]);
    const [heightType, setheightType] = useState(null);
    const [heightTypeDisplay, setheightTypeDisplay] = useState(null);
    const [weightType, setweightType] = useState(null);
    const [weightTypeDisplay, setweightTypeDisplay] = useState(null);
    const [surgeryMultiSelection, setsurgeryMultiSelection] = useState(false);
    const [burgerMenu, setburgerMenu] = useState(false);
    const [casesummary_id, setcasesummary_id] = useState(null);
    const [emergency, setemergency] = useState(null);
    const [npo_status_time_type, setnpo_status_time_type] = useState(null);
    const [otherMedicationArray, setotherMedicationArray] = useState([]);
    const [categoryValue, setcategoryValue] = useState(null);
    const [otherSurgeryHistoryArray, setotherSurgeryHistoryArray] = useState([]);
    const [otherAllegriesArray, setotherAllegriesArray] = useState([]);
    const [refreshPage, setrefreshPage] = useState({});
    const [otherSurgeryTypeArray, setotherSurgeryTypeArray] = useState([]);
    useEffect(() => {
        getCaseSummary();
    }, []);

    const getCaseSummary = async () => {
        var token = localStorage.getItem('token');

        fetch(
            API_ROOT + `case-summary-form-data?device_type=Android&device_token=123`,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: 'Bearer ' + token,
                },
            }
        )
            .then((response) => response.json())
            .then((res) => {
                if (res.status === 'true' && res.message === 'Case Summary Form Data') {
                    res.data.patientTypes.forEach((element) => {
                        element.value = element.id;
                        element.label = element.type_name;
                    });
                    setpatientTypeArray(res.data.patientTypes);
                    res.data.surgeryTypes.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    setsurgeryHistoryArray(res.data.surgeryTypes);
                    setsurgeryTypeArray(res.data.surgeryTypes);
                    res.data.anesthesiaTypes.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });
                    setanesthesia_type_list(res.data.anesthesiaTypes);

                    res.data.asaPs.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    setAsapaArray(res.data.asaPs);

                    res.data.drugList.forEach((element) => {
                        element.value = element.id;
                        element.label = element.drug_name;
                    });

                    setmedicationsArray(res.data.drugList);

                    setmedicalHistory(res.data.medicalHistories);
                    res.data.drugList.forEach((element) => {
                        element.value = element.id;
                        element.label = element.drug_name;
                    });

                    setAllegriesArray(res.data.drugList);

                    res.data.anesthesiaHistories.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });
                    setanesethesiaHistory(res.data.anesthesiaHistories);
                }
            });
    };
    const handleChangeAgeTpe = (selectedOption) => {
        setageTypeDisplay(selectedOption);
        setageType(selectedOption.value);
    };

    const handleChangeGender = (selectedOption) => {
        setgenderDisplay(selectedOption);
        setGender(selectedOption.value);
    };

    const handleChangePatientType = (selectedOption) => {
        setpatientTypeDisplay(selectedOption);
        setPatientType(selectedOption.value);
    };

    const handleChangeHeightType = (selectedOption) => {
        setheightTypeDisplay(selectedOption);
        setheightType(selectedOption.value);
    };

    const handleChangeWeightType = (selectedOption) => {
        setweightTypeDisplay(selectedOption);
        setweightType(selectedOption.value);
    };

    const handleChangeSurgeryType = (selectedOption) => {
        dispatch(setSurgeryName(selectedOption));

        for (var j = 0; j < surgeryTypeArray.length; j++) {
            if (surgeryTypeArray[j].id === selectedOption.value) {
                //   console.log(surgeryTypeArray[j].surgery_sub_type);
                surgeryTypeArray[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryArray(surgeryTypeArray[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryType2 = (selectedOption) => {

        for (var j = 0; j < sub_surgeryArray.length; j++) {
            if (sub_surgeryArray[j].id === selectedOption.value) {
                // console.log(sub_surgeryArray[j].surgery_sub_type);
                sub_surgeryArray[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryArray2(sub_surgeryArray[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryType3 = (selectedOption) => {

        for (var j = 0; j < sub_surgeryArray2.length; j++) {
            if (sub_surgeryArray2[j].id === selectedOption.value) {
                //  console.log(sub_surgeryArray2[j].surgery_sub_type);
                sub_surgeryArray2[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryArray3(sub_surgeryArray2[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryType4 = (selectedOption) => {

        for (var j = 0; j < sub_surgeryArray3.length; j++) {
            if (sub_surgeryArray3[j].id === selectedOption.value) {
                console.log(sub_surgeryArray3[j].surgery_sub_type);
                sub_surgeryArray3[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryArray4(sub_surgeryArray3[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryType5 = (selectedOption) => {
        console.log(selectedOption)
        dispatch(setSubSurgeryName(selectedOption));

        for (var j = 0; j < sub_surgeryArray4.length; j++) {
            if (sub_surgeryArray4[j].id === selectedOption.value) {
                console.log(sub_surgeryArray4[j].surgery_sub_type);
                sub_surgeryArray4[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });
                setsub_surgeryArray5(sub_surgeryArray4[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryType6 = (selectedOption) => {
        alert("calling")
        dispatch(setSubSurgeryName(selectedOption));

        console.log(selectedOption);
        setsurgerySubType(selectedOption);

    };


    const handleChangesub_surgeryType6 = (selectedOption) => {
        alert("calling")
        dispatch(setSubSurgeryName(selectedOption));

        console.log(selectedOption);
        setsurgerySubType(selectedOption);
    };


    const handleChangeAnesethesiaType = (selectedOption) => {
        dispatch(setAnesthasiaType(selectedOption));
        for (var j = 0; j < anesthesia_type_list.length; j++) {
            for (var i = 0; i < selectedOption.length; i++) {
                if (anesthesia_type_list[j].id === selectedOption[i].value) {
                    anesthesia_type_list[j].anesthesia_sub_type.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    console.log(anesthesia_type_list[j].anesthesia_sub_type);
                    if (subanesthesia_type.length === 0) {
                        setsubanesthesia_type(anesthesia_type_list[j].anesthesia_sub_type)
                        setrefreshPage({})
                    } else {
                        setsubanesthesia_type(subanesthesia_type.concat(anesthesia_type_list[j].anesthesia_sub_type))
                        setrefreshPage({})
                    }
                    // setsubanesthesia_type(anesthesia_type_list[j].anesthesia_sub_type);

                }
            }
        }
        // console.log(subanesthesia_type);
    };

    useEffect(() => {

    }, [refreshPage])


    const handleChangeAnesethesiaType2 = (selectedOption) => {
        dispatch(setAnesthasiaType(selectedOption));
        for (var j = 0; j < subanesthesia_type.length; j++) {
            for (var i = 0; i < selectedOption.length; i++) {
                if (subanesthesia_type[j].id === selectedOption[i].value) {
                    subanesthesia_type[j].anesthesia_sub_type.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    console.log(subanesthesia_type[j].anesthesia_sub_type);
                    if (subanesthesia_type2.length === 0) {
                        setsubanesthesia_type2(subanesthesia_type[j].anesthesia_sub_type)
                        setrefreshPage({})
                    } else {
                        setsubanesthesia_type2(subanesthesia_type2.concat(subanesthesia_type[j].anesthesia_sub_type))
                        setrefreshPage({})
                    }

                    // setsubanesthesia_type2(subanesthesia_type[j].anesthesia_sub_type);
                }
            }
        }
    };

    const handleChangeAnesethesiaType3 = (selectedOption) => {
        dispatch(setAnesthasiaType(selectedOption));
        for (var j = 0; j < subanesthesia_type2.length; j++) {
            for (var i = 0; i < selectedOption.length; i++) {
                if (subanesthesia_type2[j].id === selectedOption[i].value) {
                    subanesthesia_type2[j].anesthesia_sub_type.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    console.log(subanesthesia_type2[j].anesthesia_sub_type);
                    if (subanesthesia_type3.length === 0) {
                        setsubanesthesia_type3(subanesthesia_type2[j].anesthesia_sub_type)
                        setrefreshPage({})
                    } else {
                        setsubanesthesia_type3(subanesthesia_type3.concat(subanesthesia_type2[j].anesthesia_sub_type))
                        setrefreshPage({})
                    }

                    // setsubanesthesia_type3(subanesthesia_type2[j].anesthesia_sub_type);
                }
            }
        }
    };

    const handleChangeAnesethesiaType4 = (selectedOption) => {
        dispatch(setSubAnesthasiaType(selectedOption));
        for (var j = 0; j < subanesthesia_type3.length; j++) {
            for (var i = 0; i < selectedOption.length; i++) {
                if (subanesthesia_type3[j].id === selectedOption[i].value) {
                    subanesthesia_type3[j].anesthesia_sub_type.forEach((element) => {
                        element.value = element.id;
                        element.label = element.name;
                    });

                    console.log(subanesthesia_type3[j].anesthesia_sub_type);
                    if (subanesthesia_type4.length === 0) {
                        setsubanesthesia_type4(subanesthesia_type3[j].anesthesia_sub_type)
                        setrefreshPage({})
                    } else {
                        setsubanesthesia_type4(subanesthesia_type4.concat(subanesthesia_type3[j].anesthesia_sub_type))
                        setrefreshPage({})
                    }
                    // setsubanesthesia_type4(subanesthesia_type3[j].anesthesia_sub_type);
                }
            }
        }
    };

    const handleChangesub_anesthesia_type = (selectedOption) => {
        setanesthesiaSubType(selectedOption);
    };

    const handleChangesub_asapa = (selectedOption) => {
        setasaps(selectedOption);
    };

    const handleChangeMedication = (selectedOption) => {
        setmedication(selectedOption);
    };

    const handleChangeSurgeryHistory = (selectedOption) => {
        dispatch(setSurgeryHistoryName(selectedOption));
        for (var j = 0; j < surgeryHistoryArray.length; j++) {
            if (surgeryHistoryArray[j].id === selectedOption.value) {
                surgeryHistoryArray[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });

                setsub_surgeryHistoryArray(surgeryHistoryArray[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryHistory2 = (selectedOption) => {
        dispatch(setSurgeryHistoryName(selectedOption));
        for (var j = 0; j < sub_surgeryHistoryArray.length; j++) {
            if (sub_surgeryHistoryArray[j].id === selectedOption.value) {
                sub_surgeryHistoryArray[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });

                setsub_surgeryHistoryArray2(sub_surgeryHistoryArray[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryHistory3 = (selectedOption) => {
        dispatch(setSurgeryHistoryName(selectedOption));
        for (var j = 0; j < sub_surgeryHistoryArray2.length; j++) {
            if (sub_surgeryHistoryArray2[j].id === selectedOption.value) {
                sub_surgeryHistoryArray2[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });

                setsub_surgeryHistoryArray3(sub_surgeryHistoryArray2[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryHistory4 = (selectedOption) => {
        dispatch(setSurgeryHistoryName(selectedOption));
        for (var j = 0; j < sub_surgeryHistoryArray3.length; j++) {
            if (sub_surgeryHistoryArray3[j].id === selectedOption.value) {
                sub_surgeryHistoryArray3[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });

                setsub_surgeryHistoryArray4(sub_surgeryHistoryArray3[j].surgery_sub_type);
            }
        }
    };

    const handleChangeSurgeryHistory5 = (selectedOption) => {
        console.log(selectedOption)
        dispatch(setSubSurgeryHistoryName(selectedOption));
        for (var j = 0; j < sub_surgeryHistoryArray4.length; j++) {
            if (sub_surgeryHistoryArray4[j].id === selectedOption.value) {
                sub_surgeryHistoryArray4[j].surgery_sub_type.forEach((element) => {
                    element.value = element.id;
                    element.label = element.name;
                });

                setsub_surgeryHistoryArray5(sub_surgeryHistoryArray4[j].surgery_sub_type);
            }
        }
    };

    const handleChangesub_surgeryHistory = (selectedOption) => {
        setsurgerySubHistory(selectedOption);
    };

    const handleChangeAnesethesiaHistory = (selectedOption) => {
        setanesethesiaSubHistory(selectedOption);
    };

    const handleChangeAllegries = (selectedOption) => {
        setAllergies(selectedOption);
    };

    const nextBtnClick = () => {
        setquestinNo(questinNo + 1);
    };

    const backBtnClick = () => {
        setquestinNo(0);
    };

    const prevBtnClick = () => {
        setquestinNo(questinNo - 1);
    };

    const [modalIsOpen, setIsOpen] = React.useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const nameModalVisible = () => {
        console.log("run");
        closeModal();
        setnameVisble(true);
    };

    const handleChangeEmergency = (value) => {
        setemergency(value.value);
    };

    const handleChangeNPOStatus = (value) => {
        setnpo_status_time_type(value);
    };

    const callToCaseSummary = () => {
        let asa_ps_data = []
        if (patientsAsap !== null) {
            let objforasa_ps_data = {
                id: '',
                emergency: ''
            }
            objforasa_ps_data.id = patientsAsap.id
            objforasa_ps_data.emergency = patientsEmergency.value
            asa_ps_data.push(objforasa_ps_data)
        }
        let surgery_types_data = []
        if (subSurgeryName !== null) {
            let objforsurgery_types_data = {
                id: ''
            }
            objforsurgery_types_data.id = subSurgeryName.id
            surgery_types_data.push(objforsurgery_types_data)
        }

        let surgery_types_list_data = []
        let objforsurgery_types_list_data = {
            id: ''
        }
        objforsurgery_types_list_data.id = surgeryType.id
        surgery_types_list_data.push(objforsurgery_types_list_data)
        let anesthesia_types_data = []
        anesthasiaSubType.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            anesthesia_types_data.push(obj)
        })

        let anesthesia_types_list_data = []
        anesthesia_type.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            anesthesia_types_list_data.push(obj)
        })
        let medications_data = []
        medicationAnswer.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            medications_data.push(obj)
        })
        let allergies_data = []
        patientAllergies.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            allergies_data.push(obj)
        })
        let medical_histories_data = []
        //console.log(choiceAnswer);
        choiceAnswer.map((data) => {
            console.log(data)
            let obj = {
                id: ''
            }

            obj.id = data.id
            medical_histories_data.push(obj)
        })
        // console.log(anesthasiaHistoryAnswers)
        let anesthesia_histories_data = []
        anesthasiaHistoryAnswers.map((data) => {
            let obj = {
                id: ''
            }

            obj.id = data.id
            anesthesia_histories_data.push(obj)
        })

        let surgery_histories_data = []
        // console.log(surgerySubHistoryName);
        if (surgerySubHistoryName !== null) {
            let objforsurgery_histories_data = {
                id: ''
            }
            objforsurgery_histories_data.id = surgerySubHistoryName.id
            surgery_histories_data.push(objforsurgery_histories_data)
        }

        let surgical_histories_list_data = []
        let objforsurgical_histories_list_data = {
            id: ''
        }
        objforsurgical_histories_list_data.id = surgeryHistory.id
        surgical_histories_list_data.push(objforsurgical_histories_list_data)

        let custom_surgery_types_data = []
        let objforcustom_surgery_types_data = {
            name: ''
        }
        otherSurgeryTypeArray.map((data) => {
            objforcustom_surgery_types_data.name = data
            custom_surgery_types_data.push(objforcustom_surgery_types_data)
        })

        let custom_medications_data = []
        let objforcustom_medications_data = {
            name: ''
        }
        otherMedicationArray.map((data) => {
            objforcustom_medications_data.name = data
            custom_medications_data.push(objforcustom_medications_data)
        })

        let custom_allergies_data = []
        otherAllegriesArray.map((data) => {
            let objforcustom_allergies_data = {
                name: ''
            }
            objforcustom_allergies_data.name = data
            custom_allergies_data.push(objforcustom_allergies_data)
        })
        console.log(agee, ageeType, fileName, genderType, patientsHeightType, patientsWeightType, patientsWeight, patientsType, lastTimeFood, indigestedMaterial, asa_ps_data, surgery_types_data, surgery_histories_data, anesthesia_types_data, medical_histories_data, medications_data, anesthesia_histories_data, allergies_data, custom_allergies_data, custom_medications_data, custom_surgery_types_data)

        var token = localStorage.getItem("token")
        fetch(API_ROOT + `save-case-summary?token=${token}`, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({

                "age": agee,
                "name": fileName,
                "gender": genderType.value,
                "age_type": ageeType.value,
                "height": patientsHeight,
                "height_type": patientsHeightType.value,
                "weight": patientsWeight,
                "weight_type": patientsWeightType.value,
                "patient_types_id": patientsType.id,
                "npo_status_time": lastTimeFood,
                "npo_status_materials": indigestedMaterial.label,
                "asa_ps_data": asa_ps_data,
                "surgery_types_data": surgery_types_data,
                "surgical_histories_data": surgery_histories_data,
                "custom_surgery_types_data": custom_surgery_types_data,
                "anesthesia_types_data": anesthesia_types_data,
                "medications_data": medications_data,
                "custom_medications_data": custom_medications_data,
                "allergies_data": allergies_data,
                "custom_allergies_data": custom_allergies_data,
                "medical_histories_data": medical_histories_data,
                "anesthesia_histories_data": anesthesia_histories_data,

            })

        })
            .then(response => response.json())
            .then(res => {
                console.log(res)
                if (res.status === "true") {
                    setnameVisble(false)
                    setcasesummary_id(res.data.id)
                    alert("case save successfully")
                    props.history.push(`/actionsummary?caseSummaryId=${res.data.id}&caseName=${fileName}`)
                }
            })

    };

    const onSiteChanged = (e, obj) => {
        if (e.target.value === 'Yes') {
            dispatch(setMedicalHistory(obj))
        }
    };
    const onAnesthesiaHistoryChanged = (e, obj) => {
        if (e.target.value === 'Yes') {
            dispatch(setAnesthasiaHistory(obj))
        }
    };

    const onMedicationValue = (e, obj) => {
        if (e.target.value === 'Yes') {
            dispatch(setMedication(obj))
        }
    };

    const closeNameModal = () => {
        setnameVisble(false);
    };

    const burgerMenuClick = () => {
        props.history.push('/drawer');
    };

    const changeCaseName = (value) => {
        setFileName(value);
        console.log(value);
    };
    const refresh = () => {
        setrefreshPage({});
    };

    const addotherIntoMedicationCategory = (value) => {
        otherMedicationArray.push(value);
        refresh();
    };

    const addotherIntoSurgeryHistoryCategory = (value) => {
        otherSurgeryHistoryArray.push(value);
        refresh();
    };

    const addotherIntoSurgeryTypeCategory = (value) => {
        otherSurgeryTypeArray.push(value);
        refresh();
    };

    const addotherIntoAllgriesCategory = (value) => {
        otherAllegriesArray.push(value);
        refresh();
    };

    const saveIngestedMaterial = (value) => {
        setingestedMaterial(value);
    };

    const [questinNo, setquestinNo] = useState(0);
    return (
        <div>
            <BurgerMenuModal modalIsOpen={burgerMenu} />
            <SaveCaseModal
                onClickSave={() => nameModalVisible()}
                modalIsOpen={modalIsOpen}
                onClose={() => closeModal()}
            />
            <SaveCaseNameModal
                onCaseNameChange={(value) => changeCaseName(value)}
                closeNameModal={() => closeNameModal()}
                postRequest={() => callToCaseSummary()}
                saveVisible={nameVisble}
                onClose={() => closeModal()}
            />
            <Header onMenuClick={() => burgerMenuClick()} />
            <div className='casename-container' onClick={() => nameModalVisible()}>
                casename:{fileName === null ? '-' : fileName}
            </div>

            <div className='all-action-container'>
                <div className='tab-container'>
                    <Link to='/casesummary' className='tab-container-tabs active-tab'>
                        CASE SUMMARY
                    </Link>

                    <Link className='tab-container-tabs' to='/actionsummary'>
                        ACTION SUMMARY
                    </Link>
                </div>
                {questinNo == 0 ? (
                    <>
                        {/* <div className="col-md-1"></div> */}
                        <div className='result-container'>
                            <div onClick={() => setquestinNo(1)} className='answer-container'>
                                <div>1.AGE?</div>
                                <div>{agee}{ageeType.value}</div>
                            </div>
                            <div onClick={() => setquestinNo(2)} className='answer-container'>
                                <div>2.GENDER?</div>
                                <div>{genderType.label}</div>
                            </div>
                            <div onClick={() => setquestinNo(3)} className='answer-container'>
                                <div>3.PATIENT TYPE?</div>
                                <div>{patientsType.label}</div>
                            </div>
                            <div onClick={() => setquestinNo(4)} className='answer-container'>
                                <div>4.HEIGHT?</div>
                                <div>{patientsHeight}{patientsHeightType.value}</div>
                            </div>
                            <div onClick={() => setquestinNo(5)} className='answer-container'>
                                <div>5. WEIGHT?</div>
                                <div>{patientsWeight}{patientsWeightType.value}</div>
                            </div>
                            <div onClick={() => setquestinNo(6)} className='answer-container'>
                                <div>6. ASA-PS?</div>
                                <div>{patientsAsap.label} {patientsEmergency.value}</div>
                            </div>
                            <div onClick={() => setquestinNo(7)} className='answer-container'>
                                <div>7. SURGERY TYPE?</div>
                                <div>
                                    {/* {surgerySubType.length == 0 ? surgeryType.label : <></>}
                                {surgerySubType.label} */}

                                    {surgeryName.name === "General" ? <> {surgeryName.name} {subSurgeryName.name}</> : <>{surgeryName.name}</>}
                                    {surgeryName.name || subSurgeryName.name === null ? "" : <>{categorySurgeryName}</>}
                                </div>
                            </div>
                            <div onClick={() => setquestinNo(8)} className='answer-container'>
                                <div>8. ANESTHESIA TYPE?</div>
                                <div>
                                    {/* {anesthesiaSubType.length == 0 ? (
                                    anesthesia_type.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}

                                {anesthesiaSubType.map((data) => {
                                    return <div>{data.label}</div>;
                                })} */}

                                    {/* {anesthasiaType.name === "Regional Anesthesia" ? <>{anesthasiaType.name} {anesthesiaSubType.name}</> : <>{anesthasiaType.name}</>} */}
                                    {anesthasiaSubType.length == 0 ? (
                                        anesthasiaType.map((data) => {
                                            return <div>{data.label}</div>;
                                        })
                                    ) : (
                                        <></>
                                    )}

                                    {anesthasiaSubType.map((data) => {
                                        return <div>{data.label}</div>;
                                    })}

                                </div>
                            </div>
                            <div onClick={() => setquestinNo(9)} className='answer-container'>
                                <div>9. NPO STATUS?</div>
                                <div>
                                    {lastTimeFood} {foodTimeType} {indigestedMaterial.label}
                                </div>
                            </div>

                            <div onClick={() => setquestinNo(10)} className='answer-container'>
                                <div>10. MEDICATIONS?</div>
                                <div>
                                    {nonListedMedication.length == 0 ? (
                                        medicationAnswer.map((data) => {
                                            return <div>{data.label}</div>;
                                        })
                                    ) : (
                                        <></>
                                    )}
                                    <div>{nonListedMedication}</div>

                                </div>
                            </div>

                            <div onClick={() => setquestinNo(11)} className='answer-container'>
                                <div>11. ALLERGIES?</div>
                                <div>
                                    {nonListedAllergies.length == 0 ? (
                                        patientAllergies.map((data) => {
                                            return <div>{data.label}</div>;
                                        })
                                    ) : (
                                        <></>
                                    )}
                                    <div>{nonListedAllergies}</div>
                                </div>
                            </div>

                            <div onClick={() => setquestinNo(12)} className='answer-container'>
                                <div>12. MEDICAL HISTORY?</div>
                                <div>
                                    {choiceAnswer.map((data) => {
                                        return <div>{data.name}</div>;
                                    })}
                                </div>
                            </div>

                            <div onClick={() => setquestinNo(13)} className='answer-container'>
                                <div>13. SURGICAL HISTORY?</div>
                                <div>
                                    {/* {surgerySubHistory.length == 0 ? surgeryHistory.label : <></>}
                                {surgerySubHistory.label} */}
                                    {surgeryHistoryName.name === "General" ? <> {surgeryHistoryName.name} {surgerySubHistoryName.name}</> : <>{surgeryHistoryName.name}</>}
                                    {surgeryHistoryName.name || surgerySubHistoryName.name === null ? "" : <>{surgeryNonListedHistoryName}</>}
                                </div>
                            </div>

                            <div onClick={() => setquestinNo(14)} className='answer-container'>
                                <div>14. ANESTHESIA HISTORY?</div>
                                <div>
                                    {anesthasiaHistoryAnswers.map((data) => {
                                        return <div>{data.name}</div>
                                    })}
                                    <>{anesthasiaInput}</>
                                    <br />
                                    <>{anesthasiaInputFam}</>
                                </div>
                            </div>

                            <div className='next-button-container'>
                                {/*<div onClick={() => openModal()} className="next-button" >
                                    SAVE
                                </div>*/}

                                <div
                                    onClick={() => nameModalVisible()}
                /*onClick={() => }*/ className='next-button'
                                >
                                    NEXT
                                </div>
                            </div>
                        </div>
                        {/* <div className="col-md-1"></div> */}
                    </>
                ) : (
                    <></>
                )}

                {questinNo == 1 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => backBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- AGE?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='age-input-container'>
                                <input
                                    value={agee}
                                    onChange={(e) => dispatch(setAgee(e.target.value))}
                                    placeholder='ANSWER'
                                    className='age-input'
                                />
                                {/*  <Select value={ageTypeDisplay} onChange={(value) => handleChangeAgeTpe(value)} placeholder="SELECT TYPE" className="age-type-dropdown" id="age" options={optionsforage} /> */}
                                {optionsforage.map((data) => {
                                    if (data.value === ageeType.value) {
                                        return (
                                            <div
                                                className='age-selected-type-button'
                                                onClick={() => dispatch(setAgeType(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className='age-type-button'
                                                onClick={() => dispatch(setAgeType(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            {/* <div className='next-button-container'>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}
                {questinNo == 2 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- GENDER?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='gender-input-container'>
                                {/*<Select value={genderDisplay} onChange={(value) => handleChangeGender(value)} placeholder="GENDER" className="gender-dropdown" id="age" options={optionsforgender} />*/}
                                {optionsforgender.map((data) => {
                                    if (data.value === genderType.value) {
                                        return (
                                            <div
                                                className='gender-selected-type-button'
                                                onClick={() => dispatch(setGenderType(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className='gender-type-button'
                                                onClick={() => dispatch(setGenderType(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 3 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- PATIENT TYPE?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='patientype-input-container'>
                                {/*  <Select value={patientTypeDisplay} onChange={(value) => handleChangePatientType(value)} placeholder="PATIENT TYPE" className="patientype-dropdown" id="patien-type" options={patientTypeArray} /> */}
                                <div className='patient-type-button-container'>
                                    {patientTypeArray.map((data) => {
                                        if (data.id === patientsType.id) {
                                            return (
                                                <div
                                                    className='patient-selected-type-button'
                                                    onClick={() => dispatch(setPatientsType(data))}
                                                >
                                                    {data.label}
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    className='patient-type-button'
                                                    onClick={() => dispatch(setPatientsType(data))}
                                                >
                                                    {data.label}
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                            </div>
                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 4 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- HEIGHT?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='age-input-container'>
                                <input
                                    value={patientsHeight}
                                    onChange={(e) => dispatch(setPatientHeight(e.target.value))}
                                    placeholder='ANSWER'
                                    className='height-input'
                                />
                                {/*  <Select value={heightTypeDisplay} onChange={(value) => handleChangeHeightType(value)} placeholder="Height Type" className="height-type-dropdown" id="age" options={optionsForHeight} /> */}
                                {optionsForHeight.map((data) => {
                                    if (data.value === patientsHeightType.value) {
                                        return (
                                            <div
                                                className='height-selected-type-button'
                                                onClick={() => dispatch(setPatientHeightType(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className='height-type-button'
                                                onClick={() => dispatch(setPatientHeightType(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            <div className="col-md-2"></div>
                        </div>
                        {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 5 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- WEIGHT?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='age-input-container'>
                                <input
                                    value={patientsWeight}
                                    onChange={(e) => dispatch(setPatientWeight(e.target.value))}
                                    placeholder='ANSWER'
                                    className='weight-input'
                                />
                                {/*  <Select value={weightTypeDisplay} onChange={(value) => handleChangeWeightType(value)} placeholder="Weight Type" className="weight-type-dropdown" id="age" options={optionsForWeight} />*/}
                                {optionsForWeight.map((data) => {
                                    if (data.value === patientsWeightType.value) {
                                        return (
                                            <div
                                                className='weight-selected-type-button'
                                                onClick={() => dispatch(setPatientWeightType(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className='weight-type-button'
                                                onClick={() => dispatch(setPatientWeightType(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 6 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- ASA-PS?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='ASA-PS-input-container'>
                                <div className='asa-ps-button-container'>
                                    {AsapaArray.map((data) => {
                                        if (data.id === patientsAsap.id) {
                                            return (
                                                <div
                                                    className='asaps-selected-type-button'
                                                    onClick={() => dispatch(setAsaps(data))}
                                                >
                                                    {data.label}
                                                </div>
                                            );
                                        } else {
                                            return (
                                                <div
                                                    className='asa-ps-type-button'
                                                    onClick={() => dispatch(setAsaps(data))}
                                                >
                                                    {data.label}
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="my-2">Emergency: </div>

                                {optionsforEmergency.map((data) => {
                                    if (data.value === patientsEmergency.value) {
                                        return (
                                            <div
                                                className='emergency-selected-type-button my-2 py-2'
                                                onClick={() => dispatch(setEmergency(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className='weight-type-button'
                                                onClick={() => dispatch(setEmergency(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 7 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- SURGERY TYPE?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='Surgery-type-input-container'>
                                <Select
                                    value={surgeryName}
                                    onChange={(value) => handleChangeSurgeryType(value)}
                                    placeholder='SURGERY-TYPE'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={surgeryTypeArray}
                                />
                            </div>
                            {sub_surgeryArray.length !== 0 ? (
                                <div className='Surgery-type-input-container'>
                                    <Select
                                        // value={subSurgeryName}
                                        onChange={(value) => handleChangeSurgeryType2(value)}
                                        placeholder='SURGERY-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={sub_surgeryArray}
                                    />
                                </div>
                            ) : (
                                <></>
                            )}
                            {sub_surgeryArray2.length !== 0 ? (
                                <div className='Surgery-type-input-container'>
                                    <Select
                                        // value={subSurgeryName}
                                        onChange={(value) => handleChangeSurgeryType3(value)}
                                        placeholder='SURGERY-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={sub_surgeryArray2}
                                    />
                                </div>
                            ) : (
                                <></>
                            )}
                            {sub_surgeryArray3.length !== 0 ? (
                                <div className='Surgery-type-input-container'>
                                    <Select
                                        // value={subSurgeryName}
                                        onChange={(value) => handleChangeSurgeryType4(value)}
                                        placeholder='SURGERY-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={sub_surgeryArray3}
                                    />
                                </div>
                            ) : (
                                <></>
                            )}
                            {sub_surgeryArray4.length !== 0 ? (
                                <div className='Surgery-type-input-container'>
                                    <Select
                                        // value={subSurgeryName}
                                        onChange={(value) => handleChangeSurgeryType5(value)}
                                        placeholder='SURGERY-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={sub_surgeryArray4}
                                    />
                                </div>
                            ) : (
                                <></>
                            )}
                            {sub_surgeryArray5.length !== 0 ? (
                                <div className='Surgery-type-input-container'>
                                    <Select
                                        // value={subSurgeryName}
                                        onChange={(value) => alert(value)}
                                        placeholder='SURGERY-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={sub_surgeryArray5}
                                    />
                                </div>
                            ) : (
                                <></>
                            )}
                            <div className='medication-extra-type-container'>
                                <input
                                    className='medication-input'
                                    onChange={(e) =>
                                        dispatch(setCategorySurgeryName(e.target.value))
                                    }
                                    placeholder='enter not listed type'
                                />
                                <div
                                    className='add-more-button'
                                    onClick={() =>
                                        addotherIntoSurgeryTypeCategory(categorySurgeryName)
                                    }
                                >
                                    Add
                                </div>
                            </div>
                            {otherSurgeryTypeArray.map((data) => {
                                return <div>{data}</div>;
                            })}

                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 8 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- ANESTHESIA TYPE?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='ANESTHESIA-type-input-container'>
                                <Select
                                    isMulti={true}
                                    // value={anesthasiaType}
                                    onChange={(value) => handleChangeAnesethesiaType(value)}
                                    placeholder='ANESTHESIA TYPE'
                                    className='ANESTHESIA-type-dropdown'
                                    id='patien-type'
                                    options={anesthesia_type_list}
                                />
                            </div>
                            <div className='Surgery-type-input-container'>
                                {subanesthesia_type.length !== 0 ? (
                                    <Select
                                        isMulti={true}
                                        onChange={(value) => handleChangeAnesethesiaType2(value)}
                                        placeholder='SURGERY-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={subanesthesia_type}
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className='Surgery-type-input-container'>
                                {subanesthesia_type2.length !== 0 ? (
                                    <Select
                                        isMulti={true}
                                        onChange={(value) => handleChangeAnesethesiaType3(value)}
                                        placeholder='SURGERY-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={subanesthesia_type2}
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className='Surgery-type-input-container'>
                                {subanesthesia_type3.length !== 0 ? (
                                    <Select
                                        isMulti={true}
                                        onChange={(value) => handleChangeAnesethesiaType4(value)}
                                        placeholder='SURGERY-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={subanesthesia_type3}
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>

                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}



                {questinNo == 9 ? (
                    <div className='npo-question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- NPO-STATUS?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='age-input-container'>
                                <input
                                    type='number'
                                    value={timeOfLastFoodOrDrink}
                                    onChange={(e) => dispatch(setLastTimeFood(e.target.value))}
                                    placeholder='TIME OF LAST FOOD OR DRINK'
                                    className='age-input'
                                />
                                {optionForNPOStatus.map((data) => {
                                    if (data.value === foodTimeType) {
                                        return (
                                            <div
                                                className='npo-time-type-selected-type-button'
                                                onClick={() => handleChangeNPOStatus(data.value)}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className='weight-type-button'
                                                onClick={() => dispatch(setTimeType(data.value))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    }
                                })}
                            </div>
                            <div>Ingested material</div>
                            <div className='ingested-input-container'>
                                {ingestedMaterialArray.map((data) => {
                                    if (data === indigestedMaterial) {
                                        return (
                                            <div
                                                className='ingested-selected-type-button'
                                                onClick={() => dispatch(setIndigestedMaterial(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className='ingested-type-button'
                                                onClick={() => dispatch(setIndigestedMaterial(data))}
                                            >
                                                {data.label}
                                            </div>
                                        );
                                    }
                                })}
                            </div>

                            <div className="table">
                                <table style={{ color: "black" }}>
                                    <tr>
                                        <th>Age</th>
                                        <th>General Or MAC Anesthasia</th>
                                    </tr>
                                    <tr>
                                        <td>New Born - 6 Months</td>
                                        <td>Clear Fluid: 2 Hrs <br></br>Breast Milk: 4 Hrs<br></br>Infant Formula: 5 Hrs</td>
                                    </tr>
                                    <tr>
                                        <td>6 Months - 36 Months</td>
                                        <td>Clear Fluid: 2 Hrs <br></br>Breast Milk: 4 Hrs<br></br>Infant Formula: 6 Hrs<br></br>Non Human Milk: 6 Hrs<br></br>Solid: 6 Hrs</td>
                                    </tr>
                                    <tr>
                                        <td>Older Than 36 Months</td>
                                        <td>Clear Fluid: 2 Hrs <br></br>Non Human Milk: 6 Hrs <br></br>Light Meal: 6 Hrs<br></br>Heavy Meal: 8 Hrs</td>
                                    </tr>
                                </table>
                            </div>
                            <div>
                                <h4>Please Note:</h4>
                                <br></br>
                                <p>
                                    1)Clear Fluid: water, black coffee, clear tea, carbonated beverages,fruit juices without pulp.
                                    <br></br>
                                    Light Meal: coffee with milk, organic juice, other fruit juice with pulp,cereal, toast, crackers, etc.
                                    <br></br>
                                    Heavy Meal: fatty or fried food, cheese meat, etc.
                                </p>
                                <p>
                                    2) Certain medical conditions slow down gastric emptying and/or put patients at higher risk of pulmonary aspiration, such as diabetes, renal disease, gastrointestinal motility disorders, GERD, dysphagia, hiatal hernia, potential difficult airway management, etc. The anesthesia provider should use his/her clinical judgment to decide the appropriate NPO time accordingly.
                                </p>
                                <br></br>
                                <p>3) For emergency surgeries, the anesthesia provider should discuss with surgeon the urgency of the surgery, weigh risks and benefits, and decide with the surgeon the appropriate NPO time accordingly.</p>
                            </div>

                            <div className='next-button-container'>
                                {/* <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div> */}
                            </div>
                            <div className="col-md-2"></div>

                        </div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 10 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- MEDICATIONS?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='medications-input-container'>
                                {medicationsArray.map((data1) => {
                                    return (
                                        <>
                                            <div className='sub-question-container'>
                                                <div>{data1.label}</div>
                                                {medication.map((selecteddata) => {
                                                    if (selecteddata.drug_name === data1.drug_name) {
                                                        return (
                                                            <div>
                                                                <div className='option-box-container'>
                                                                    <input
                                                                        checked={
                                                                            selecteddata.drug_name === data1.drug_name
                                                                                ? true
                                                                                : false
                                                                        }
                                                                        onChange={(e) => onSiteChanged(e, data1)}
                                                                        type='radio'
                                                                        value='Yes'
                                                                        name={data1.drug_name}
                                                                    />{' '}
                                                                    Yes
                                                                    <input
                                                                        onChange={(e) => onSiteChanged(e, data1)}
                                                                        type='radio'
                                                                        value='No'
                                                                        name={data1.drug_name}
                                                                    />{' '}
                                                                    No
                                                                </div>
                                                            </div>
                                                        );
                                                    } else {
                                                        return (
                                                            <div>
                                                                <div className='option-box-container'>
                                                                    <input
                                                                        checked={
                                                                            selecteddata.drug_name === data1.drug_name
                                                                                ? true
                                                                                : false
                                                                        }
                                                                        onChange={(e) => onSiteChanged(e, data1)}
                                                                        type='radio'
                                                                        value='Yes'
                                                                        name={data1.drug_name}
                                                                    />{' '}
                                                                    Yes
                                                                    <input
                                                                        onChange={(e) => onSiteChanged(e, data1)}
                                                                        type='radio'
                                                                        value='No'
                                                                        name={data1.drug_name}
                                                                    />{' '}
                                                                    No
                                                                </div>
                                                            </div>
                                                        );
                                                    }
                                                })}
                                                {medication.length === 0 ? (
                                                    <div className='option-box-container'>
                                                        <input
                                                            onChange={(e) => onMedicationValue(e, data1)}
                                                            type='radio'
                                                            value='Yes'
                                                            name={data1.drug_name}
                                                        />{' '}
                                                        Yes
                                                        <input
                                                            onChange={(e) => onMedicationValue(e, data1)}
                                                            type='radio'
                                                            value='No'
                                                            name={data1.drug_name}
                                                        />{' '}
                                                        No
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}
                                            </div>
                                            <div className="all-action-subcontainer-content-1"></div></>
                                    );
                                })}

                                <div className='medication-extra-type-container'>
                                    <input
                                        className='medication-input'
                                        onChange={(e) => dispatch(setNonListedMedication(e.target.value))}
                                        placeholder='enter not listed type'
                                    />
                                    <div
                                        className='add-more-button'
                                        onClick={() => addotherIntoMedicationCategory(nonListedMedication)}
                                    >
                                        Add
                                    </div>
                                </div>
                                {otherMedicationArray.map((data) => {
                                    return <div>{data}</div>;
                                })}
                            </div>

                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 11 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- ALLERGIES?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='ANESTHESIA-type-input-container'>
                                <Select
                                    value={patientAllergies}
                                    isMulti={true}
                                    onChange={(value) => dispatch(setAllergies(value))}
                                    placeholder='ALLERGIES'
                                    className='ANESTHESIA-type-dropdown'
                                    id='patien-type'
                                    options={AllegriesArray}
                                />
                                <div className='medication-extra-type-container'>
                                    <input
                                        className='medication-input'
                                        onChange={(e) => dispatch(setNotListedAllergies(e.target.value))}
                                        placeholder='enter not listed type'
                                    />
                                    <div
                                        className='add-more-button'
                                        onClick={() => addotherIntoAllgriesCategory(nonListedAllergies)}
                                    >
                                        Add
                                    </div>
                                </div>
                                {otherAllegriesArray.map((data) => {
                                    return <div>{data}</div>;
                                })}
                            </div>

                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 12 ? (
                    <div className='medical-history-question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8 med-his">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- MEDICAL HISTORY?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            {subQuestionClick ? (
                                <div className='medical-history-main-container'>
                                    {medicalHistory.map((data) => {
                                        return (
                                            <>
                                                <div style={{ width: '100%' }}>
                                                    <div className='medical-history-question-header'>
                                                        <div>
                                                            {data.id}.{data.name}
                                                        </div>
                                                    </div>

                                                    <div className='medical-history-sub-question-sub-container'>
                                                        {data.medical_history_sub_type.map((data1) => {
                                                            return (
                                                                <div className='sub-question-container'>
                                                                    <div>{data1.name}</div>
                                                                    {medicalHistoryArray.map((selecteddata) => {
                                                                        if (selecteddata.name === data1.name) {
                                                                            return (
                                                                                <div>
                                                                                    <div className='option-box-container'>
                                                                                        <input
                                                                                            checked={
                                                                                                selecteddata.name === data1.name
                                                                                                    ? true
                                                                                                    : false
                                                                                            }
                                                                                            onChange={(e) =>
                                                                                                onSiteChanged(e, data1)
                                                                                            }
                                                                                            type='radio'
                                                                                            value='Yes'
                                                                                            name={data1.name}
                                                                                        />{' '}
                                                                                        Yes
                                                                                        <input
                                                                                            onChange={(e) =>
                                                                                                onSiteChanged(e, data1)
                                                                                            }
                                                                                            type='radio'
                                                                                            value='No'
                                                                                            name={data1.name}
                                                                                        />{' '}
                                                                                        No
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        } else {
                                                                            return (
                                                                                <div>
                                                                                    <div className='option-box-container'>
                                                                                        <input
                                                                                            checked={
                                                                                                selecteddata.name === data1.name
                                                                                                    ? true
                                                                                                    : false
                                                                                            }
                                                                                            onChange={(e) =>
                                                                                                onSiteChanged(e, data1)
                                                                                            }
                                                                                            type='radio'
                                                                                            value='Yes'
                                                                                            name={data1.name}
                                                                                        />{' '}
                                                                                        Yes
                                                                                        <input
                                                                                            onChange={(e) =>
                                                                                                onSiteChanged(e, data1)
                                                                                            }
                                                                                            type='radio'
                                                                                            value='No'
                                                                                            name={data1.name}
                                                                                        />{' '}
                                                                                        No
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        }
                                                                    })}{' '}
                                                                    {medicalHistoryArray.length === 0 ? (
                                                                        <div className='option-box-container'>
                                                                            <input
                                                                                onChange={(e) =>
                                                                                    onSiteChanged(e, data1)
                                                                                }
                                                                                type='radio'
                                                                                value='Yes'
                                                                                name={data1.name}
                                                                            />{' '}
                                                                            Yes
                                                                            <input
                                                                                onChange={(e) =>
                                                                                    onSiteChanged(e, data1)
                                                                                }
                                                                                type='radio'
                                                                                value='No'
                                                                                name={data1.name}
                                                                            />{' '}
                                                                            No
                                                                        </div>
                                                                    ) : (
                                                                        <></>
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="all-action-subcontainer-content-1"></div>
                                            </>
                                        );
                                    })}
                                </div>
                            ) : (
                                <></>
                            )}

                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 13 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- SURGICAL HISTORY?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='Surgery-type-input-container'>
                                <Select
                                    // value={surgeryHistoryName}
                                    onChange={(value) => handleChangeSurgeryHistory(value)}
                                    placeholder='SURGERY-HISTORY'
                                    className='Surgery-type-dropdown'
                                    id='patien-type'
                                    options={surgeryHistoryArray}
                                />
                            </div>
                            <div className='Surgery-type-input-container'>
                                {sub_surgeryHistoryArray.length !== 0 ? (
                                    <Select
                                        // value={surgerySubHistoryName}
                                        onChange={(value) => handleChangeSurgeryHistory2(value)}
                                        placeholder='SURGERY-HISTORY-SUB-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={sub_surgeryHistoryArray}
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className='Surgery-type-input-container'>
                                {sub_surgeryHistoryArray2.length !== 0 ? (
                                    <Select
                                        // value={surgerySubHistoryName}
                                        onChange={(value) => handleChangeSurgeryHistory3(value)}
                                        placeholder='SURGERY-HISTORY-SUB-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={sub_surgeryHistoryArray2}
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className='Surgery-type-input-container'>
                                {sub_surgeryHistoryArray3.length !== 0 ? (
                                    <Select
                                        // value={surgerySubHistoryName}
                                        onChange={(value) => handleChangeSurgeryHistory4(value)}
                                        placeholder='SURGERY-HISTORY-SUB-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={sub_surgeryHistoryArray3}
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className='Surgery-type-input-container'>
                                {sub_surgeryHistoryArray4.length !== 0 ? (
                                    <Select
                                        // value={surgerySubHistoryName}
                                        onChange={(value) => handleChangeSurgeryHistory5(value)}
                                        placeholder='SURGERY-HISTORY-SUB-TYPE'
                                        className='Surgery-type-dropdown'
                                        id='patien-type'
                                        options={sub_surgeryHistoryArray4}
                                    />
                                ) : (
                                    <></>
                                )}
                            </div>
                            <div className='medication-extra-type-container'>
                                <input
                                    className='medication-input'
                                    onChange={(e) => dispatch(setNonListedSurgeryHistoryName(e.target.value))}
                                    placeholder='enter not listed type'
                                />
                                <div
                                    className='add-more-button'
                                    onClick={() =>
                                        addotherIntoSurgeryHistoryCategory(surgeryNonListedHistoryName)
                                    }
                                >
                                    Add
                                </div>
                            </div>
                            {otherSurgeryHistoryArray.map((data) => {
                                return <div>{data}</div>;
                            })}

                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                ) : (
                    <></>
                )}

                {questinNo == 14 ? (
                    <div className='question-container row'>
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            <div className='age-header-container'>
                                <div onClick={() => prevBtnClick()} style={{ float: "left" }} className='next-button-btn'>
                                    BACK
                                </div>
                                QUESTION {questinNo} OF 14- ANESTHESIA HISTORY?
                                <div onClick={() => nextBtnClick()} style={{ float: "right" }} className='next-button-btn'>
                                    NEXT
                                </div>
                            </div>
                            <div className='ANESTHESIA-type-input-container'>
                                {anesethesiaHistory.map((data1) => {
                                    return (
                                        <div className='sub-question-container'>
                                            <div>{data1.label}</div>
                                            {anesethesiaSubHistory.map((selecteddata) => {
                                                if (selecteddata.name === data1.name) {
                                                    return (
                                                        <div>
                                                            <div className='option-box-container'>
                                                                <input
                                                                    checked={
                                                                        selecteddata.name === data1.name
                                                                            ? true
                                                                            : false
                                                                    }
                                                                    onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                                    type='radio'
                                                                    value='Yes'
                                                                    name={data1.name}
                                                                />{' '}
                                                                Yes
                                                                <input
                                                                    onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                                    type='radio'
                                                                    value='No'
                                                                    name={data1.name}
                                                                />{' '}
                                                                No
                                                            </div>
                                                        </div>
                                                    );
                                                } else {
                                                    return (
                                                        <div>
                                                            <div className='option-box-container'>
                                                                <input
                                                                    checked={
                                                                        selecteddata.name === data1.name
                                                                            ? true
                                                                            : false
                                                                    }
                                                                    onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                                    type='radio'
                                                                    value='Yes'
                                                                    name={data1.name}
                                                                />{' '}
                                                                Yes
                                                                <input
                                                                    onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                                    type='radio'
                                                                    value='No'
                                                                    name={data1.name}
                                                                />{' '}
                                                                No
                                                            </div>
                                                        </div>
                                                    );
                                                }
                                            })}

                                            {anesethesiaSubHistory.length === 0 ? (
                                                <div className='option-box-container'>
                                                    <input
                                                        onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                        type='radio'
                                                        value='Yes'
                                                        name={data1.name}
                                                    />{' '}
                                                    Yes
                                                    <input
                                                        onChange={(e) => onAnesthesiaHistoryChanged(e, data1)}
                                                        type='radio'
                                                        value='No'
                                                        name={data1.name}
                                                    />{' '}
                                                    No
                                                </div>
                                            ) : (
                                                <></>
                                            )}
                                            {data1.label ===
                                                'HISTORY OF COMPLICATIONS WITH ANESTHESIA'
                                                ? (
                                                    <div>
                                                        <input placeholder='enter something...' onChange={(e) => dispatch(setAnesthasiaInput(e.target.value))} />
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}
                                            {data1.label ===
                                                'FAMILY HISTORY OF COMPLICATIONS WITH ANESTHESIA'
                                                ? (
                                                    <div>
                                                        <input placeholder='enter something...' onChange={(e) => dispatch(setAnesthasiaInputFam(e.target.value))} />
                                                    </div>
                                                ) : (
                                                    <></>
                                                )}
                                        </div>
                                    );
                                })}
                            </div>


                            {/* <div className='next-button-container'>
                            <div onClick={() => backBtnClick()} className='next-button'>
                                BACK
                            </div>

                            <div onClick={() => prevBtnClick()} className='next-button'>
                                PREVIOUS
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                SKIP
                            </div>

                            <div onClick={() => nextBtnClick()} className='next-button'>
                                NEXT
                            </div>
                        </div> */}
                        </div>
                        <div className="col-md-2"></div>
                        <div
                            onClick={() => nameModalVisible()}
                /*onClick={() => }*/ className='next-button'
                        >
                            Save
                        </div>
                    </div>
                ) : (
                    <></>
                )}





                {questinNo == 15 ? (
                    <div className='result-container'>
                        <div onClick={() => setquestinNo(1)} className='answer-container'>
                            <div>1.AGE?</div>
                            <div>{agee}{ageeType.value}</div>
                        </div>
                        <div onClick={() => setquestinNo(2)} className='answer-container'>
                            <div>2.GENDER?</div>
                            <div>{genderType.label}</div>
                        </div>
                        <div onClick={() => setquestinNo(3)} className='answer-container'>
                            <div>3.PATIENT TYPE?</div>
                            <div>{patientsType.label}</div>
                        </div>
                        <div onClick={() => setquestinNo(4)} className='answer-container'>
                            <div>4.HEIGHT?</div>
                            <div>{patientsHeight}{patientsHeightType.value}</div>
                        </div>
                        <div onClick={() => setquestinNo(5)} className='answer-container'>
                            <div>5. WEIGHT?</div>
                            <div>{patientsWeight}{patientsWeightType.value}</div>
                        </div>
                        <div onClick={() => setquestinNo(6)} className='answer-container'>
                            <div>6. ASA-PS?</div>
                            <div>{patientsAsap.label} {patientsEmergency.value}</div>
                        </div>
                        <div onClick={() => setquestinNo(7)} className='answer-container'>
                            <div>7. SURGERY TYPE?</div>
                            <div>
                                {/* {surgerySubType.length == 0 ? surgeryType.label : <></>}
                                {surgerySubType.label} */}

                                {surgeryName.name === "General" ? <> {surgeryName.name} {subSurgeryName.name}</> : <>{surgeryName.name}</>}
                                {surgeryName.name || subSurgeryName.name === null ? "" : <>{categorySurgeryName}</>}
                            </div>
                        </div>
                        <div onClick={() => setquestinNo(8)} className='answer-container'>
                            <div>8. ANESTHESIA TYPE?</div>
                            <div>
                                {/* {anesthesiaSubType.length == 0 ? (
                                    anesthesia_type.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}

                                {anesthesiaSubType.map((data) => {
                                    return <div>{data.label}</div>;
                                })} */}

                                {/* {anesthasiaType.name === "Regional Anesthesia" ? <>{anesthasiaType.name} {anesthesiaSubType.name}</> : <>{anesthasiaType.name}</>} */}
                                {anesthasiaSubType.length == 0 ? (
                                    anesthasiaType.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}

                                {anesthasiaSubType.map((data) => {
                                    return <div>{data.label}</div>;
                                })}

                            </div>
                        </div>
                        <div onClick={() => setquestinNo(14)} className='answer-container'>
                            <div>9. NPO STATUS?</div>
                            <div>
                                {lastTimeFood} {foodTimeType} {indigestedMaterial.label}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(10)} className='answer-container'>
                            <div>10. MEDICATIONS?</div>
                            <div>
                                {nonListedMedication.length == 0 ? (
                                    medicationAnswer.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}
                                <div>{nonListedMedication}</div>

                            </div>
                        </div>

                        <div onClick={() => setquestinNo(13)} className='answer-container'>
                            <div>11. ALLERGIES?</div>
                            <div>
                                {nonListedAllergies.length == 0 ? (
                                    patientAllergies.map((data) => {
                                        return <div>{data.label}</div>;
                                    })
                                ) : (
                                    <></>
                                )}
                                <div>{nonListedAllergies}</div>
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(9)} className='answer-container'>
                            <div>12. MEDICAL HISTORY?</div>
                            <div>
                                {choiceAnswer.map((data) => {
                                    return <div>{data.name}</div>;
                                })}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(11)} className='answer-container'>
                            <div>13. SURGICAL HISTORY?</div>
                            <div>
                                {/* {surgerySubHistory.length == 0 ? surgeryHistory.label : <></>}
                                {surgerySubHistory.label} */}
                                {surgeryHistoryName.name === "General" ? <> {surgeryHistoryName.name} {surgerySubHistoryName.name}</> : <>{surgeryHistoryName.name}</>}
                                {surgeryHistoryName.name || surgerySubHistoryName.name === null ? "" : <>{surgeryNonListedHistoryName}</>}
                            </div>
                        </div>

                        <div onClick={() => setquestinNo(12)} className='answer-container'>
                            <div>14. ANESTHESIA HISTORY?</div>
                            <div>
                                {anesthasiaHistoryAnswers.map((data) => {
                                    return <div>{data.name}</div>
                                })}
                                <>{anesthasiaInput}</>
                                <br />
                                <>{anesthasiaInputFam}</>
                            </div>
                        </div>

                        <div className='next-button-container'>
                            {/*<div onClick={() => openModal()} className="next-button" >
                                    SAVE
                                </div>*/}

                            <div
                                onClick={() => nameModalVisible()}
                /*onClick={() => }*/ className='next-button'
                            >
                                SAVE
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

                <div onClick={() => {
                    props.history.push({
                        pathname: "/crises"
                    })
                }} className="crises-button" >
                    CRISES
                </div>
            </div>
        </div >
    );
};

export default CaseSummaryRedux;

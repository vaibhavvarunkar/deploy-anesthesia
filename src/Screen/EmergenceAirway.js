import React,{useState} from 'react'
import '../css/Aiway.css'
import Header from '../CustomComponent/Header'
import Select from 'react-select'
const EmergenceAirway=(props)=>{
    const [Intubation_Standard_Selected,setIntubation_Standard_Selected]=useState([])
    
    const [Intubation_Standard_type,setIntubation_Standard_type]=useState([])
    const [Intubation_One_lung,setIntubation_One_lung]=useState([])
    const [Intubation_One_lung_type,setIntubation_One_lung_type]=useState([])
    const [Laryngoscope,setLaryngoscope]=useState([])
    const [Laryngoscope_type,setLaryngoscope_type]=useState([])
    const [Airway_Adjuncts_type,setAirway_Adjuncts_type]=useState([])
    const [selected_mask,set_selected_mask]=useState([])
    const [selected_LMA,set_selected_LMA]=useState([])
   const [aiwayCalculatorSelected,setaiwayCalculatorSelected]=useState([])
   const optionformask = [
        { value: 'Bubble gum', label: 'Bubble gum' },
        { value: 'Child/Bubble gum', label: 'Child/Bubble gum' },
        { value: 'Neonate', label: 'Neonate' },
        { value: 'Infant', label: 'Infant' },
        { value: 'Toddler', label: 'Toddler' },
        { value: 'small adult', label: 'small adult' },
        { value: 'med/large adult', label: 'med/large adult' },
        { value: 'large adult', label: 'large adult' },
     
    ]
    const optionforLMA = [
        { value: '1', label: '1' },
        { value: '1.5', label: '1.5' },
        { value: '2', label: '2' },
        { value: '2.5', label: '2.5' },
        { value: '3', label: '3' },
        { value: '4', label: '4' },
        { value: '5', label: '5' },
        { value: '6', label: '6' },
      
    ]

    const optionforIntubation_Standard=[
        {label:'Location',value:'Location',subcategory:[{label:'Oral',value:'Oral'},{label:'Nasal',value:'Nasal'}]},
        {label:'ET Tube Uncuffed',value:'ET Tube Uncuffed',subcategory:[{label:'2.5',value:'2.5'},{label:'3',value:'3'},{label:'3.5',value:'3.5'},{label:'4',value:'4'},{label:'4.5',value:'4.5'},{label:'5',value:'5'},{label:'5.5',value:'5.5'}]},
        {label:'ET Tube Cuffed',value:'ET Tube Cuffed',subcategory:[{label:'2.5',value:'2.5'},{label:'3',value:'3'},{label:'3.5',value:'3.5'},{label:'4',value:'4'},{label:'4.5',value:'4.5'},{label:'5',value:'5'},{label:'5.5',value:'5.5'},{label:'6',value:'6'},{label:'6.5',value:'6.5'},{label:'7',value:'7'},{label:'7.5',value:'7.5'},{label:'8',value:'8'}]}
    
    ]

    const optionforIntubation_One_lung=[
        {label:'Double lumen ETT',value:'Double lumen ETT',subcategory:[{label:'26',value:'26'},{label:'28',value:'28'},{label:'30',value:'30'},{label:'32',value:'32'},{label:'35',value:'35'},{label:'37',value:'37'},{label:'39',value:'39'},{label:'41',value:'41'}]},
        {label:'Bronchial blocker',value:'Bronchial blocker',subcategory:[{label:'Select ETT Size',value:'Select ETT Size',subcategory:[{label:'2.5',value:'2.5'},{label:'3',value:'3'},{label:'3.5',value:'3.5'},{label:'4',value:'4'},{label:'4.5',value:'4.5'},{label:'5',value:'5'},{label:'5.5',value:'5.5'},{label:'6',value:'6'},{label:'6.5',value:'6.5'},{label:'7',value:'7'},{label:'7.5',value:'7.5'},{label:'8',value:'8'}]}]},
        {label:'Univent',value:'Univent',subcategory:[{label:'Select ETT Size',value:'Select ETT Size',subcategory:[{label:'2.5',value:'2.5'},{label:'3',value:'3'},{label:'3.5',value:'3.5'},{label:'4',value:'4'},{label:'4.5',value:'4.5'},{label:'5',value:'5'},{label:'5.5',value:'5.5'},{label:'6',value:'6'},{label:'6.5',value:'6.5'},{label:'7',value:'7'},{label:'7.5',value:'7.5'},{label:'8',value:'8'}]}]},
     
    ]

    const optionforLaryngoscope=[
        {label:'Direct Laryngoscope',value:'Direct Laryngoscope',subcategory:[{label:'Miller',value:'Miller',subcategory:[{label:'0',value:'0'},{label:'1',value:'1'},{label:'2',value:'2'},{label:'3',value:'3'},{label:'4',value:'4'}]},{label:'MAC',value:'MAC',subcategory:[{label:'0',value:'0'},{label:'1',value:'1'},{label:'2',value:'2'},{label:'3',value:'3'},{label:'4',value:'4'}]},{label:'WIS',value:'WIS',subcategory:[{label:'0',value:'0'},{label:'1',value:'1'},{label:'2',value:'2'},{label:'3',value:'3'},{label:'4',value:'4'}]}]},
        {label:'Indirect Laryngoscope',value:'Indirect Laryngoscope',subcategory:[{label:'Glidescope',value:'Glidescope',subcategory:[{label:'0',value:'0'},{label:'1',value:'1'},{label:'2',value:'2'},{label:'3',value:'3'},{label:'4',value:'4'}]},{label:'C-MAC',value:'C-MAC',subcategory:[{label:'0',value:'0'},{label:'1',value:'1'},{label:'2',value:'2'},{label:'3',value:'3'},{label:'4',value:'4'}]}]},
       
    ]
    const optionforAirway_Adjuncts=[
        {label:'Oral Airway',value:'Oral Airway',subcategory:[{label:'30',value:'30'},{label:'40',value:'40'},{label:'50',value:'50'},{label:'60',value:'60'},{label:'70',value:'70'},{label:'80',value:'80'},{label:'90',value:'90'}]},
        {label:'Nasal Airway',value:'Nasal Airway',subcategory:[{label:'14',value:'14'},{label:'16',value:'16'},{label:'18',value:'18'},{label:'20',value:'20'},{label:'22',value:'22'},{label:'24',value:'24'},{label:'26',value:'26'},{label:'28',value:'28'},{label:'30',value:'30'},{label:'32',value:'32'},{label:'34',value:'34'},{label:'36',value:'36'},{label:'38',value:'38'},{label:'40',value:'40'}]},
        {label:'Resuscitation bag',value:'Resuscitation bag',subcategory:[]},
        {label:'OTHER',value:'OTHER',subcategory:[]}
        
    ]

    const Airawy_calculactor=[
        {label:'ETT Depth (Adult) and Tidal Volume',value:'ETT Depth (Adult) and Tidal Volume'},
        {label:'ETT Depth (Pediatric) - only ETT depth component',value:'ETT Depth (Pediatric) - only ETT depth component'}
    ]

    
    const optionforOther=[
        {label:'Jet ventilation',value:'Jet ventilation'},
        {label:'Mask',value:'Mask'},
        {label:'OTHER',value:'OTHER'}
    ]
   
   
   
    const burgerMenuClick = () => {
        props.history.push('/drawer')

    }
    const handleChangeMask = selectedOption => {
    set_selected_mask(selectedOption) 
    }
   
    const handleChangeLMA = selectedOption => {
        set_selected_LMA(selectedOption) 
    }
       
    const handleChangeIntubation_Standard = selectedOption => {
        setIntubation_Standard_Selected(selectedOption)
       setIntubation_Standard_type(selectedOption.subcategory)
    }
    const handleChangeIntubation_One_lung = selectedOption => {
        setIntubation_One_lung(selectedOption.subcategory)
     }
 
     const handleChangeIntubation_One_lung_type = selectedOption => {
         console.log(selectedOption)
         if(selectedOption!==null){
        setIntubation_One_lung_type(selectedOption.subcategory)
         }
     }

     const handleChangeLaryngoscope = selectedOption => {
        setLaryngoscope(selectedOption.subcategory)
     }
     const handleChangeLaryngoscope_type = selectedOption => {
        setLaryngoscope_type(selectedOption.subcategory)
     }

     const handleChangeAirway_Adjuncts=selectedOption=>{
        setAirway_Adjuncts_type(selectedOption.subcategory)
     }

     const handleChangeAirwayCalculator = selectedOption => {
        setaiwayCalculatorSelected(selectedOption) 
        }

 
 


    return(
        <div>
            <Header onMenuClick={() => burgerMenuClick()} />
            <div className="airway-main-container" >
                <div className="airway-question-container" >
                        <div className="Airway-Equipment-header-container" >
                        Airway Equipment
                        </div>
                        <div className="Airway-Equipment-input-container" >
                            <div className="Airway-Equipment-input-container-subcontainer" >
                                <div>Nasal Cannula with ETCO2</div>
                            </div>
                            <div className="Airway-Equipment-input-container-subcontainer" >
                                <div>Mask</div>
                                <div className="mask-button-group-container" >
                                    {optionformask.map((data)=>{
                                        if(data.label===selected_mask.label){
                                        return(
                                        
                                    <div onClick={()=>handleChangeMask(data)} className="mask-selected-type-button" >{data.label}</div>
                                    )}else{
                                        return(
                                        
                                            <div onClick={()=>handleChangeMask(data)} className="mask-type-button" >{data.label}</div>
                                            )  
                                    }
                                    })}
                                </div>

                            </div>
                            <div className="Airway-Equipment-input-container-subcontainer" >
                                <div>LMA</div>
                                <div className="LMA-button-group-container" >{optionforLMA.map((data)=>{
                                    if(data.label===selected_LMA.label){
                                    return(<div onClick={()=>handleChangeLMA(data)} className="LMA-selected-type-button" >{data.label}</div>
                                    )}else{
                                        return(<div onClick={()=>handleChangeLMA(data)} className="LMA-type-button" >{data.label}</div>
                                    )
                                    }
                                })}</div>
                                {selected_LMA.length!==0?
                                <div>Details:Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</div>:<></>
                                }

                            </div>
                            <div className="Airway-Equipment-input-container-subcontainer" >
                                <div>Intubation - Standard</div>
                                
                                <div className="Intubation-standard-button-group-container" >{optionforIntubation_Standard.map((data,index)=>{
                                     return(<div onClick={()=>handleChangeIntubation_Standard(data)} className="Intubation-standard-type-button" >{data.label}</div>)})}</div>
                                {Intubation_Standard_type.length?
                                <div>
                                <div>Select any one from following:</div>
                                <div className="Intubation-standard-button-group-container" >{Intubation_Standard_type.map((data)=>{return(<div className="Intubation-standard-type-selected-type-button" >{data.label}</div>)})}</div>
                                </div>:<></>
                                }
                            </div>

                            <div className="Airway-Equipment-input-container-subcontainer" >
                                <div>Intubation - One lung</div>
                                <div className="Intubation-one-lung-button-group-container" >{optionforIntubation_One_lung.map((data)=>{return(<div onClick={()=>handleChangeIntubation_One_lung(data)} className="Intubation-one-lung-selected-type-button" >{data.label}</div>)})}</div>
                                <div>Select any one from following:</div>
                               
                                <div className="Intubation-one-lung-button-group-container" >{Intubation_One_lung.map((data)=>{return(<div onClick={()=>handleChangeIntubation_One_lung_type(data)} className="Intubation-one-lung-type-selected-type-button" >{data.label}</div>)})}</div>
                                
                                <div>Select any one from following:</div>
                               
                                <div className="Intubation-one-lung-button-group-container" >{Intubation_One_lung_type.map((data)=>{return(<div  className="Intubation-one-lung-sub-type-selected-type-button" >{data.label}</div>)})}</div>
                               
                                
                            </div>

                            <div className="Airway-Equipment-input-container-subcontainer" >
                                <div>Laryngoscope</div>
                                <div className="Laryngoscope-button-group-container" >{optionforLaryngoscope.map((data)=>{return(<div onClick={()=>handleChangeLaryngoscope(data)} className="Laryngoscope-selected-type-button" >{data.label}</div>)})}</div>
                                <div>Select any one from following:</div>
                             
                                <div className="Laryngoscope-button-group-container" >{Laryngoscope.map((data)=>{return(<div onClick={()=>handleChangeLaryngoscope_type(data)} className="Laryngoscope-type-selected-type-button" >{data.label}</div>)})}</div>
                                <div>Select any one from following:</div>
                             
                                <div className="Laryngoscope-button-group-container" >{Laryngoscope_type.map((data)=>{return(<div  className="Laryngoscope-sub-type-selected-type-button" >{data.label}</div>)})}</div>
                              
                               
                            </div>
                          
                            <div className="Airway-Equipment-input-container-subcontainer" >
                                <div>Airway Adjuncts</div>
                                <div className="Airway-Adjuncts-button-group-container" >{optionforAirway_Adjuncts.map((data)=>{return(<div onClick={()=>handleChangeAirway_Adjuncts(data)} className="Airway-Adjuncts-selected-type-button" >{data.label}</div>)})}</div>
                                <div>Select any one from following:</div>
                                <div className="Airway-Adjuncts-button-group-container" >{Airway_Adjuncts_type.map((data)=>{return(<div  className="Airway-Adjuncts-type-selected-type-button" >{data.label}</div>)})}</div>
                             
                               
                            </div>

                            <div className="Airway-Equipment-input-container-subcontainer" >
                                <div>Other (airway management)</div>
                                <div className="Other-button-group-container" >{optionforOther.map((data)=>{return(<div  className="Other-selected-type-button" >{data.label}</div>)})}</div>
                              
                                
                            </div>

                            <div className="Airway-Equipment-input-container-subcontainer" >
                                <div>Airway Calculators</div>
                                <div className="mask-button-group-container" >
                               
                                {Airawy_calculactor.map((data)=>{
                                    if(data.label===aiwayCalculatorSelected.label){
                                        return(
                                        
                                    <div onClick={()=> handleChangeAirwayCalculator(data)} className="airway-calculator-selected-type-button" >{data.label}</div>
                                    )
                                    }else{
                                        return(
                                        
                                            <div onClick={()=> handleChangeAirwayCalculator(data)} className="airway-calculator-type-button" >{data.label}</div>
                                            )
                                    }
                                    })}
                                </div>
                            </div>

                            <div className="Airway-Equipment-input-container-subcontainer" >
                                <div>Airway Notes</div>
                                <input className="input-container" placeholder="enter other/not listed..." />
                            
                            </div>

                           

                          
                          
                        </div>

                   
                </div>
            </div>
        </div>
    )
}

export default EmergenceAirway
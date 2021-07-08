import { PREOP_CLICK,POSTOP_CLICK,INTRAOP_CLICK } from "./ActionsSummaryActionTypes.js"


export  const preopEnable = preopstatus => {
    return {
        type: PREOP_CLICK,
        payload:preopstatus
        
    }
}

export  const postopEnable = poststaus => {
    return {
        type: POSTOP_CLICK,
        payload:poststaus
    }
}

export  const intraopEnable=intraopstaus=>{
    return{
        type:INTRAOP_CLICK,
        payload:intraopstaus
    }
}


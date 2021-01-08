import * as type from './../constants';
import dataVi from './../api/vietnam.json';
import dataEn from './../api/english.json';
const initialState = {
    data: dataVi
}
console.log(dataVi)
export default function LanguageType(state=initialState, action) {
    switch(action.type){
        case type.EN: return{
            data: dataEn
        };
        case type.VI: return{
            data: dataVi
        }
        default:return state;
    }
}
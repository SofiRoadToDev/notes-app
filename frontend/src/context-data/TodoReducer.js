import {TYPES} from './ActionTypes'

export const initialNoteState={
    notesList:[],
    error:null,
    categories:[],
    filteredList:[],
    noteToEdit:{},
    isFormEditable:false
}

export const NoteReducer=(state,action)=>{
    const {type,payload}=action

    switch(type){
        case TYPES.GET_NOTES:{
            return {
                ...state,
                notesList:payload
            }
        }
        
        case TYPES.GET_CATEGORIES:{
            return {
                ...state,
                categories:payload
            }
        }
        case TYPES.ADD_NOTE:{
            return{
                    state
            }
        }
       
        case TYPES.DELETE_NOTE:{
            return {
                ...state,
                notesList:state.notesList.filter(n=>n.id!=payload)
            }
        }
        
        case TYPES.UPDATE_NOTE:{
                return {
                    state
                }
        }
       
        case TYPES.SET_EDIT_NOTE:{
                return {
                    ...state,
                    noteToEdit:payload
                 }
        }

        case TYPES.RESET_FILTER_LIST:{
            return {
                ...state,
                filteredList:[]
            }
        }

        case TYPES.RESET_FORM:{
                return{
                    ...state,
                    noteToEdit:{},
                    isFormEditable:false
                }
        }

        case TYPES.FILTER_CATEGORY:{
            return {
                ...state,
                filteredList:payload
            }
        }
        case TYPES.FILTER_ACTIVE:{
            return {
                ...state,
                filteredList:payload
            }
        }
        
        case TYPES.FILTER_ARCHIVED:{
            return {
                ...state,
                filteredList:payload
            }
        }
        
        case TYPES.CLEAN_FILTERS:{
            return{
                ...state,
                filteredList:state.notesList
            }
        }

        case TYPES.SET_ERROR:{
            const {error}=payload
            return{
                ...state,
                error:{
                    ...state.error,
                    error
                }
            }
        }

        case TYPES.SET_FORM_EDITABLE:{
            return {
                ...state,
                isFormEditable:payload
            }
        }

        default: return state
    }
    
}
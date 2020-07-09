import {mergeArr,filterArrDuplicates,findIn,replaceWithParameters} from '../06-utils'

const addingReducer = (state,payload) => {
  const value = findIn(state.catalog, 'key', payload.id)
  if (value){
    return replaceWithParameters(state.catalog,'key',payload.id,payload)
  }
  return [...state.catalog,payload]
}

const fetchReducer = (state,payload) => {
 return{catalog: filterArrDuplicates(mergeArr(payload,state.catalog))} 
}

const reducers = {
  'FETCH_SUCCESS': fetchReducer,
  'ADD_PHONE': addingReducer,
  'default': state => state,
}

const initialState = {
  catalog: []
}

const catalogReducer = (state = initialState, action) => {
  return (reducers[action.type] || reducers.default)(state, action.payload)
}

export default catalogReducer


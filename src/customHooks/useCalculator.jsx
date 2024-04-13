import { useReducer } from 'react'

const INITIAL_CALCULATOR_STATE = {
  n1: 0,
  operation: '',
  result: 0,
  historicResults: [],
  historicResultsSorted: []
}

const calculatorReducer = (state, action) => {
  switch (action.type) {
    case 'SET_OPERATION':
      return {
        ...state,
        n1: parseInt(action.payload.inputValue),
        operation: action.payload.operation
      }
    case 'CALCULATE':
      return {
        ...state,
        result: action.payload,
        n1: 0,
        operation: '',
        historicResults: [...state.historicResults, action.payload]
      }
    case 'SORT':
      return {
        ...state,
        historicResultsSorted: [...action.payload]
      }
    default:
      return state
  }
}

export const useCalculator = () => {
  const [state, dispatch] = useReducer(
    calculatorReducer,
    INITIAL_CALCULATOR_STATE
  )

  return {
    state,
    dispatch
  }
}

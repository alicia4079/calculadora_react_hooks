import { memo, useMemo, useCallback, useRef } from 'react'
import { useCalculator } from '../../customHooks/useCalculator'
import './calculator.css'

const Calculator = memo(function Calculator() {
  const { state, dispatch } = useCalculator()
  const input = useRef()

  const setOperation = useCallback(
    (operation) => {
      dispatch({
        type: 'SET_OPERATION',
        payload: { inputValue: input.current.value, operation }
      })
      input.current.value = ''
    },
    [dispatch]
  )

  useMemo(() => {
    dispatch({
      type: 'SORT',
      payload: state.historicResults.sort((a, b) => a - b)
    })
  }, [dispatch, state.historicResults])

  const calculate = () => {
    switch (state.operation) {
      case '+':
        dispatch({
          type: 'CALCULATE',
          payload: state.n1 + parseInt(input.current.value)
        })
        break
      case '-':
        dispatch({
          type: 'CALCULATE',
          payload: state.n1 - parseInt(input.current.value)
        })
        break
      case '*':
        dispatch({
          type: 'CALCULATE',
          payload: state.n1 * parseInt(input.current.value)
        })
        break
      case '/':
        dispatch({
          type: 'CALCULATE',
          payload: state.n1 / parseInt(input.current.value)
        })
        break
      case '%':
        dispatch({
          type: 'CALCULATE',
          payload: state.n1 % parseInt(input.current.value)
        })
        break
      default:
        break
    }
    input.current.value = ''
  }

  return (
    <div className='calc'>
      <input type='number' ref={input} />
      <div className='operations'>
        <button onClick={() => setOperation('+')}>+</button>
        <button onClick={() => setOperation('-')}>-</button>
        <button onClick={() => setOperation('*')}>X</button>
        <button onClick={() => setOperation('/')}>/</button>
        <button onClick={() => setOperation('%')}>%</button>
        <button onClick={calculate}>=</button>
      </div>
      <h2>
        Último resultado: <span>{state.result}</span>
      </h2>
      <div className='historic'>
        <h2>Resultados históricos:</h2>
        {state.historicResultsSorted.map((result, index) => (
          <h3 key={index}>{result}</h3>
        ))}
      </div>
    </div>
  )
})

export default Calculator

import './timer.css'

export function Timer({ date }) {
  return <div className='timer'>{date.toLocaleTimeString()}</div>
}

/* eslint-disable react/prop-types */
import styes from './Divisor.module.css'

function Divisor({position}) {
  return (
    <div className={`${styes.ctDivisor} ${styes[position]}`}></div>
  )
}

export default Divisor
import { useState } from "react"
import Light from "./Light"

const TrafficLight = () => {

const [active, setActive] = useState('grey')
  return (
    <div>
     <Light onClick={()=>setActive('red')} color='red'/>
     <Light onClick={()=>setActive('yellow')} color='yellow'/>
     <Light onClick={()=>setActive('green')} color='green'/>      
    </div>
  )
}

export default TrafficLight

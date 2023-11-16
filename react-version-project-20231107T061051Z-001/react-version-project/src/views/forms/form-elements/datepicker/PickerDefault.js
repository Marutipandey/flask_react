// ** React Imports
import { Fragment, useState } from 'react'

// ** Reactstrap Imports
import { Label } from 'reactstrap'

// ** Third Party Components
import Flatpickr from 'react-flatpickr'

import { Calendar } from 'react-feather'
const PickerDefault = (props) => {
  // ** State
  const [picker, setPicker] = useState(new Date())
  return (
    <Fragment>
      {/* <div style={{display: 'inline-block', position: 'relative'}}> */}
        <Label className='form-label' for='default-picker'>
          {props.label}
        </Label>
        <Flatpickr className='form-control' value=' ' onChange={date => setPicker(date)}
        options={{ enableTime: false, dateFormat: "d-m-Y", }} id='default-picker' /> {/* {picker}
        <Calendar style={{position: 'absolute', right: '5px', top: '30px'}} onClick={date => setPicker(date)}/>
      </div> */}
    </Fragment>
  )
}

export default PickerDefault

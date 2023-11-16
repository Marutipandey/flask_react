// ** Reactstrap Imports
import { Button } from 'reactstrap'

// ** Icons Imports
import { ArrowLeft, Check } from 'react-feather'

// ** Images
import illustration from '@src/assets/images/illustration/pricing-Illustration.svg'
import PickerDateTime from '../../../forms/form-elements/datepicker/PickerDateTime'
// ** Third Party Components
import Select from 'react-select'
// ** Utils
import { selectThemeColors } from '@utils'

const SubmitStep = ({ stepper }) => {
  const colourOptions = [
    { value: 'ocean', label: 'Ocean' },
    { value: 'blue', label: 'Blue' },
    { value: 'purple', label: 'Purple' },
    { value: 'red', label: 'Red' },
    { value: 'orange', label: 'Orange' }
  ]
  return (
    <div className=''>
      <div className='start-timer'>
        <PickerDateTime className='start-timer' minDate={Date()} />
      </div>
      <div className='end-timer'>
        <PickerDateTime className='end-timer' />
      </div>
      <h5 className='mt-1'>E Type</h5>
      <Select
        theme={selectThemeColors}
        className='react-select'
        classNamePrefix='select'
        defaultValue={colourOptions[0]}
        options={colourOptions}
        isClearable={false} />
        <div className='d-flex justify-content-between mt-3'>
          <Button color='primary' onClick={() => stepper.previous()}>
          <ArrowLeft size={14} className='rotate-rtl align-middle me-sm-50 me-0' />
          <div className='align-middle d-sm-inline-block d-none'>Previous</div>
          </Button>
          <Button
            color='success'
            onClick={() => {
            alert('Submitted..!!')
            }}>
            <div className='align-middle d-sm-inline-block d-none'>Submit</div>
            <Check size={14} className='align-middle ms-sm-50 ms-0' />
          </Button>
        </div>
    </div>
    // <div className='text-center'>
    //   <h3>Submit 🥳</h3>
    //   <p>Submit your app to kickstart your project</p>
    //   <img src={illustration} alt='illustration' height='218' />
    //   <div className='d-flex justify-content-between mt-3'>
    //     <Button color='primary' onClick={() => stepper.previous()}>
    //       <ArrowLeft size={14} className='rotate-rtl align-middle me-sm-50 me-0' />
    //       <div className='align-middle d-sm-inline-block d-none'>Previous</div>
    //     </Button>
    //     <Button
    //       color='success'
    //       onClick={() => {
    //         alert('Submitted..!!')
    //       }}
    //     >
    //       <div className='align-middle d-sm-inline-block d-none'>Submit</div>
    //       <Check size={14} className='align-middle ms-sm-50 ms-0' />
    //     </Button>
    //   </div>
    // </div>
  )
}

export default SubmitStep

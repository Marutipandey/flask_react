// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import axios from 'axios'
import { event } from 'jquery'
import { MoreVertical, Edit, FileText, Archive, Trash, Eye, PauseCircle } from 'react-feather'

// ** Reactstrap Imports
import { Badge, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
// ** React Imports
import { Fragment, useState } from 'react'
// ** Reactstrap Imports
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Waiting', color: 'light-primary' },
  2: { title: 'Entered', color: 'light-success' },
  3: { title: 'Stopped', color: 'light-danger' },
  4: { title: 'Waiting', color: 'light-warning' },
  5: { title: 'Entered', color: 'light-info' }
}
// const status = {
//   1: { title: 'Current', color: 'light-primary' },
//   2: { title: 'Professional', color: 'light-success' },
//   3: { title: 'Rejected', color: 'light-danger' },
//   4: { title: 'Resigned', color: 'light-warning' },
//   5: { title: 'Applied', color: 'light-info' }
// }

export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data').then(response => {
  data = response.data;
  console.log(data);
})

// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'ID',
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]
// ** Table ReOrder Column
export const reOrderColumns = [
  {
    name: 'ID',
    reorder: true,
    sortable: true,
    maxWidth: '100px',
    selector: row => row.id
  },
  {
    name: 'Name',
    reorder: true,
    sortable: true,
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    reorder: true,
    sortable: true,
    minWidth: '310px',
    selector: row => row.email
  },
  {
    name: 'Position',
    reorder: true,
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Age',
    reorder: true,
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Salary',
    reorder: true,
    sortable: true,
    minWidth: '175px',
    selector: row => row.salary
  }
]

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className='expandable-content p-2'>
      <p>
        <span className='fw-bold'>City:</span> {data.city}
      </p>
      <p>
        <span className='fw-bold'>Experience:</span> {data.experience}
      </p>
      <p className='m-0'>
        <span className='fw-bold'>Post:</span> {data.post}
      </p>
    </div>
  )
}

// ** Table Common Column
export const columns = [
  {
    name: 'Name',
    minWidth: '250px',
    sortable: row => row.full_name,
    cell: row => (
      <div className='d-flex align-items-center'>
        {row.avatar === '' ? (
          <Avatar color={`light-${states[row.status]}`} content={row.full_name} initials />
        ) : (
          <Avatar img={row.avatar} />
        )}
        <div className='user-info text-truncate ms-1'>
          <span className='d-block fw-bold text-truncate'>{row.full_name}</span>
          <small>{row.post}</small>
        </div>
      </div>
    )
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '150px',
    selector: row => row.salary
  },
  {
    name: 'Age',
    sortable: true,
    minWidth: '100px',
    selector: row => row.age
  },
  {
    name: 'Status',
    minWidth: '150px',
    sortable: row => row.status.title,
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Archive size={15} />
                <span className='align-middle ms-50'>Archive</span>
              </DropdownItem>
              <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Position',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '150px',
    selector: row => row.salary
  },
  {
    name: 'Status',
    sortable: true,
    minWidth: '150px',
    selector: row => row.status,
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: 'Actions',
    allowOverflow: true,
    cell: () => {
      return (
        <div className='d-flex'>
          <UncontrolledDropdown>
            <DropdownToggle className='pe-1' tag='span'>
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <FileText size={15} />
                <span className='align-middle ms-50'>Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className='align-middle ms-50'>Archive</span>
              </DropdownItem>
              <DropdownItem>
                <Trash size={15} />
                <span className='align-middle ms-50'>Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      )
    }
  }
]

// ** Table Server Side Column
export const serverSideColumns = [
  {
    sortable: true,
    name: 'Full Name',
    minWidth: '225px',
    selector: row => row.full_name
  },
  {
    sortable: true,
    name: 'Email',
    minWidth: '250px',
    selector: row => row.email
  },
  {
    sortable: true,
    name: 'Position',
    minWidth: '250px',
    selector: row => row.post
  },
  {
    sortable: true,
    name: 'Office',
    minWidth: '150px',
    selector: row => row.city
  },
  {
    sortable: true,
    name: 'Start Date',
    minWidth: '150px',
    selector: row => row.start_date
  },
  {
    sortable: true,
    name: 'Salary',
    minWidth: '150px',
    selector: row => row.salary
  }
]

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Name',
    sortable: true,
    minWidth: '200px',
    selector: row => row.full_name
  },
  {
    name: 'Email',
    sortable: true,
    minWidth: '250px',
    selector: row => row.email
  },
  {
    name: 'Post',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'City',
    sortable: true,
    minWidth: '150px',
    selector: row => row.city
  },
  {
    name: 'Date',
    sortable: true,
    minWidth: '150px',
    selector: row => row.start_date
  },

  {
    name: 'Salary',
    sortable: true,
    minWidth: '100px',
    selector: row => row.salary
  }
]

export const DeployedStrategies = [
  {
    name: 'Instrument',
    sortable: true,
    maxWidth: '250px',
    selector: row => row.full_name
  },
  {
    name: 'Quatity',
    sortable: false,
    minWidth: '80px',
    maxWidth: '90px',
    cell: row => (
      <div className='w-100 text-center'>{ row.status}</div>
    )
  },
  {
    name: <div className="text-center w-100">LTP</div>,
    sortable: false,
    minWidth: '80px',
    maxWidth: '90px',
    cell: row => (
      <div className='w-100 text-center'>{ row.age}</div>
    )
  },
  {
    name: <div className="text-center w-100">P/L</div>,
    minWidth: '80px',
    maxWidth: '90px',
    allowOverflow: true,
    cell: row => (
      <div className='w-100 text-center'>{ row.id}</div>
    )
  },
  {
    name: 'Status',
    sortable: true,
    maxWidth: '150px',
    cell: row => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      )
    }
  },
  {
    name: <div className="text-center w-100">Action</div>,
    maxWidth: '150px',
    allowOverflow: true,
    cell: row => {
      // ** States
      const [viewModal, setViewModal] = useState(false)
      const [editModal, setEditModal] = useState(false)
      const [pauseModal, setPauseModal] = useState(false)
      return (
        <div className='w-100 d-flex justify-content-between'>
          <Eye className='cursor-pointer' onClick={() => setViewModal(!viewModal)} /> 
          <Edit className='cursor-pointer'  onClick={() => setEditModal(!editModal)} /> 
          <PauseCircle className='cursor-pointer'  onClick={() => setPauseModal(!pauseModal)} />
          <Modal isOpen={viewModal} toggle={() => setViewModal(!viewModal)} className='modal-dialog-centered modal-lg' modalClassName='modal-info'>
            <ModalHeader toggle={() => setViewModal(!viewModal)}>View Modal</ModalHeader>
            <ModalBody>
              <div className='pb-1'><span className='label m-1'>Instrument:</span> <span className='fw-bold'>{row.full_name}</span></div>
              <div className='pb-1'><span className='label m-1'>Quatity:</span> <span className='fw-bold'>{row.status}</span></div>
              <div className='pb-1'><span className='label m-1'>LTP:</span> <span className='fw-bold'>{row.age}</span></div>
              <div className='pb-1'><span className='label m-1'>Status:</span> <Badge color={status[row.status].color} pill>{status[row.status].title}</Badge></div>
            </ModalBody>
            <ModalFooter>
              <Button color='info' onClick={() => setViewModal(!viewModal)}>
                Accept
              </Button>
            </ModalFooter>
          </Modal>
          {/* ----- */}
          <Modal isOpen={editModal} toggle={() => setEditModal(!editModal)} className='modal-dialog-centered modal-lg'>
            <ModalHeader toggle={() => setEditModal(!editModal)}>Edit Modal</ModalHeader>
            <ModalBody>
              Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake
              candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
              liquorice.
            </ModalBody>
            <ModalFooter>
              <Button color='primary' onClick={() => setEditModal(!editModal)}>
                Accept
              </Button>{' '}
            </ModalFooter>
          </Modal>
          {/* ----- */}
          <Modal isOpen={pauseModal} toggle={() => setPauseModal(!pauseModal)} className='modal-dialog-centered' modalClassName='modal-warning'>
            <ModalHeader toggle={() => setPauseModal(!pauseModal)}>Pause Modal</ModalHeader>
            <ModalBody>
              Oat cake ice cream candy chocolate cake chocolate cake cotton candy dragée apple pie. Brownie carrot cake
              candy canes bonbon fruitcake topping halvah. Cake sweet roll cake cheesecake cookie chocolate cake
              liquorice.
            </ModalBody>
            <ModalFooter>
              <Button color='warning' onClick={() => setPauseModal(!pauseModal)}>
                Accept
              </Button>{' '}
            </ModalFooter>
          </Modal>
        </div>
      )
    }
  }
]

export default ExpandableTable

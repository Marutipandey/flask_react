// ** Custom Components

// ** Third Party Components
import axios from 'axios'

// ** Reactstrap Imports

// ** Vars
const states = ['success', 'danger', 'warning', 'info', 'dark', 'primary', 'secondary']

const status = {
  1: { title: 'Current', color: 'light-primary' },
  2: { title: 'Professional', color: 'light-success' },
  3: { title: 'Rejected', color: 'light-danger' },
  4: { title: 'Resigned', color: 'light-warning' },
  5: { title: 'Applied', color: 'light-info' }
}

export let data

// ** Get initial Data
axios.get('/api/datatables/initial-data').then(response => {
  data = response.data;
  console.log(data);
})

// ** Table Zero Config Column
export const basicColumns = [
  {
    name: 'Open',
    sortable: true,
    maxWidth: '100px',
    selector: row => row.open
  },
  {
    name: 'Executed',
    sortable: true,
    minWidth: '225px',
    selector: row => row.executed
  },
  {
    name: 'Positions',
    sortable: true,
    minWidth: '310px',
    selector: row => row.positions
  },
  {
    name: 'Hildoing',
    sortable: true,
    minWidth: '250px',
    selector: row => row.hildoing
  },
  {
    name: 'Notifcation',
    sortable: true,
    minWidth: '100px',
    selector: row => row.notifcation
  }
]
// ** Table ReOrder Column
export const reOrderColumns = [
  {
    name: 'Open',
    sortable: true,
    maxWidth: '100px',
    selector: row => row.open
  },
  {
    name: 'Executed',
    sortable: true,
    minWidth: '225px',
    selector: row => row.executed
  },
  {
    name: 'Positions',
    sortable: true,
    minWidth: '310px',
    selector: row => row.positions
  },
  {
    name: 'Hildoing',
    sortable: true,
    minWidth: '250px',
    selector: row => row.hildoing
  },
  {
    name: 'Notifcation',
    sortable: true,
    minWidth: '100px',
    selector: row => row.notifcation
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
    name: 'Open',
    sortable: true,
    minWidth: '250px',
    selector: row => row.full_name
  },
  {
    name: 'Executed',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Positions',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Hildoing',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Notifcation',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  }
]

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: 'Open',
    sortable: true,
    minWidth: '250px',
    selector: row => row.full_name
  },
  {
    name: 'Executed',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Positions',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Hildoing',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  },
  {
    name: 'Notifcation',
    sortable: true,
    minWidth: '250px',
    selector: row => row.post
  }
]

// ** Table Server Side Column
export const serverSideColumns = [
  {
    name: 'Open',
    sortable: true,
    maxWidth: '100px',
    selector: row => row.open
  },
  {
    name: 'Executed',
    sortable: true,
    minWidth: '225px',
    selector: row => row.executed
  },
  {
    name: 'Positions',
    sortable: true,
    minWidth: '310px',
    selector: row => row.positions
  },
  {
    name: 'Hildoing',
    sortable: true,
    minWidth: '250px',
    selector: row => row.hildoing
  },
  {
    name: 'Notifcation',
    sortable: true,
    minWidth: '100px',
    selector: row => row.notifcation
  }
]

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: 'Open',
    sortable: true,
    maxWidth: '100px',
    selector: row => row.open
  },
  {
    name: 'Executed',
    sortable: true,
    minWidth: '225px',
    selector: row => row.executed
  },
  {
    name: 'Positions',
    sortable: true,
    minWidth: '310px',
    selector: row => row.positions
  },
  {
    name: 'Hildoing',
    sortable: true,
    minWidth: '250px',
    selector: row => row.hildoing
  },
  {
    name: 'Notifcation',
    sortable: true,
    minWidth: '100px',
    selector: row => row.notifcation
  }
]

export default ExpandableTable

/* React Imports */
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
/* Custom Components */
import Breadcrumbs from '@components/breadcrumbs'
/* Third Party Components */
import DataTable from 'react-data-table-component'
/* Reactstrap Imports */
import { ChevronDown } from 'react-feather'
/*import {
  Card,
  Badge,
  CardTitle,
  CardHeader,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledTooltip,
  UncontrolledDropdown,
  UncontrolledButtonDropdown
} from 'reactstrap'
import {
  Eye,
  Send,
  Edit,
  Info,
  Copy,
  File,
  Save,
  Trash,
  Printer,
  FileText,
  PieChart,
  Download,
  Clipboard,
  TrendingUp,
  CheckCircle,
  ChevronDown,
  MoreVertical,
  ArrowDownCircle
} from 'react-feather'
// ** Reactstrap Imports
import { Row, Col, Button, Label } from 'reactstrap'
/*, MessageSquare, Menu, PhoneCall, Video, MoreVertical, Mic, Image, Send *
import PickerDefault from '../../forms/form-elements/datepicker/PickerDefault'
// import '@styles/react/apps/app-invoice.scss' */
// ** Reactstrap Imports
import {
  Row,
  Col,
  Nav,
  Card,
  Button,
  NavItem,
  NavLink,
  TabPane,
  CardBody,
  CardText,
  CardTitle,
  CardHeader,
  TabContent
} from 'reactstrap'
// ** Styles
import '@styles/react/libs/flatpickr/flatpickr.scss'
import '@styles/react/libs/tables/react-dataTable-component.scss'

/* Custom Components
import Avatar from '@components/avatar'
// ** Avatar Images
import avatar1 from '@src/assets/images/avatars/1-small.png'
import avatar9 from '@src/assets/images/avatars/9-small.png'
import avatar10 from '@src/assets/images/avatars/10-small.png'
// ** Vars
const invoiceStatusObj = {
  Sent: { color: 'light-secondary', icon: Send },
  Paid: { color: 'light-success', icon: CheckCircle },
  Draft: { color: 'light-primary', icon: Save },
  Downloaded: { color: 'light-info', icon: ArrowDownCircle },
  'Past Due': { color: 'light-danger', icon: Info },
  'Partial Payment': { color: 'light-warning', icon: PieChart }
}
const data = [
  {
    id: 4987,
    issuedDate: '13 Dec 2019',
    client: {
      address: '7777 Mendez Plains',
      company: 'Hall-Robbins PLC',
      companyEmail: 'don85@johnson.com',
      country: 'USA',
      contact: '(616) 865-4180',
      name: 'Jordan Stevenson'
    },
    service: 'Software Development',
    total: 3428,
    avatar: '',
    invoiceStatus: 'Paid',
    balance: '$724',
    dueDate: '23 Apr 2019'
  },
  {
    id: 4988,
    issuedDate: '17 Jul 2019',
    client: {
      address: '04033 Wesley Wall Apt. 961',
      company: 'Mccann LLC and Sons',
      companyEmail: 'brenda49@taylor.info',
      country: 'Haiti',
      contact: '(226) 204-8287',
      name: 'Stephanie Burns'
    },
    service: 'UI/UX Design & Development',
    total: 5219,
    avatar: avatar10,
    invoiceStatus: 'Downloaded',
    balance: 0,
    dueDate: '15 Dec 2019'
  },
  {
    id: 4989,
    issuedDate: '19 Oct 2019',
    client: {
      address: '5345 Robert Squares',
      company: 'Leonard-Garcia and Sons',
      companyEmail: 'smithtiffany@powers.com',
      country: 'Denmark',
      contact: '(955) 676-1076',
      name: 'Tony Herrera'
    },
    service: 'Unlimited Extended License',
    total: 3719,
    avatar: avatar1,
    invoiceStatus: 'Paid',
    balance: 0,
    dueDate: '03 Nov 2019'
  },
  {
    id: 4990,
    issuedDate: '06 Mar 2020',
    client: {
      address: '19022 Clark Parks Suite 149',
      company: 'Smith, Miller and Henry LLC',
      companyEmail: 'mejiageorge@lee-perez.com',
      country: 'Cambodia',
      contact: '(832) 323-6914',
      name: 'Kevin Patton'
    },
    service: 'Software Development',
    total: 4749,
    avatar: avatar9,
    invoiceStatus: 'Sent',
    balance: 0,
    dueDate: '11 Feb 2020'
  },
  {
    id: 4991,
    issuedDate: '08 Feb 2020',
    client: {
      address: '8534 Saunders Hill Apt. 583',
      company: 'Garcia-Cameron and Sons',
      companyEmail: 'brandon07@pierce.com',
      country: 'Martinique',
      contact: '(970) 982-3353',
      name: 'Mrs. Julie Donovan MD'
    },
    service: 'UI/UX Design & Development',
    total: 4056,
    avatar: avatar10,
    invoiceStatus: 'Draft',
    balance: '$815',
    dueDate: '30 Jun 2019'
  }
]
const columns = [
  {
    name: '#',
    sortable: true,
    minWidth: '107px',
    selector: ({ id }) => id,
    cell: row => <Link to={`/apps/invoice/preview/${row.id}`}>{`#${row.id}`}</Link>
  },
  {
    sortable: true,
    minWidth: '102px',
    name: <TrendingUp size={14} />,
    selector: ({ invoiceStatus }) => invoiceStatus,
    cell: row => {
      const color = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].color : 'primary',
        Icon = invoiceStatusObj[row.invoiceStatus] ? invoiceStatusObj[row.invoiceStatus].icon : Edit
      return (
        <Fragment>
          <Avatar color={color} icon={<Icon size={14} />} id={`av-tooltip-${row.id}`} />
          <UncontrolledTooltip placement='top' target={`av-tooltip-${row.id}`}>
            <span className='fw-bold'>{row.invoiceStatus}</span>
            <br />
            <span className='fw-bold'>Balance:</span> {row.balance}
            <br />
            <span className='fw-bold'>Due Date:</span> {row.dueDate}
          </UncontrolledTooltip>
        </Fragment>
      )
    }
  },
  {
    name: 'Total',
    minWidth: '150px',
    selector: ({ total }) => total,
    cell: row => <span>${row.total || 0}</span>
  },
  {
    minWidth: '200px',
    name: 'Issued Date',
    cell: row => row.issuedDate,
    selector: ({ issuedDate }) => issuedDate
  },
  {
    name: 'Due Date',
    minWidth: '200px',
    cell: row => row.dueDate,
    selector: ({ dueDate }) => dueDate
  },
  {
    name: 'Balance',
    minWidth: '164px',
    selector: ({ balance }) => balance,
    cell: row => {
      return row.balance !== 0 ? (
        <span>{row.balance}</span>
      ) : (
        <Badge color='light-success' pill>
          Paid
        </Badge>
      )
    }
  },
  {
    name: 'Action',
    minWidth: '110px',
    sortable: true,
    cell: row => (
      <div className='column-action d-flex align-items-center'>
        <Send size={17} id={`send-tooltip-${row.id}`} />
        <UncontrolledTooltip placement='top' target={`send-tooltip-${row.id}`}>
          Send Mail
        </UncontrolledTooltip>
        <Link to={`/apps/invoice/preview/${row.id}`} id={`pw-tooltip-${row.id}`}>
          <Eye size={17} className='mx-1' />
        </Link>
        <UncontrolledTooltip placement='top' target={`pw-tooltip-${row.id}`}>
          Preview Invoice
        </UncontrolledTooltip>
        <UncontrolledDropdown>
          <DropdownToggle tag='span'>
            <MoreVertical size={17} className='cursor-pointer' />
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Download size={14} className='me-50' />
              <span className='align-middle'>Download</span>
            </DropdownItem>
            <DropdownItem tag={Link} to={`/apps/invoice/edit/${row.id}`} className='w-100'>
              <Edit size={14} className='me-50' />
              <span className='align-middle'>Edit</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Trash size={14} className='me-50' />
              <span className='align-middle'>Delete</span>
            </DropdownItem>
            <DropdownItem tag='a' href='/' className='w-100' onClick={e => e.preventDefault()}>
              <Copy size={14} className='me-50' />
              <span className='align-middle'>Duplicate</span>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
]*/

const columnsOne = [
  {
    name: 'Timestamp',
    minWidth: '100px',
    sortable: true,
    selector: ({ issuedDate }) => issuedDate
  },
  {
    name: 'Instance',
    minWidth: '100px',
    selector: ({ instanceType }) => instanceType
  },
  {
    name: 'Type',
    minWidth: '100px',
    selector: ({ instanceStatus }) => instanceStatus
  },
  {
    name: 'Message',
    minWidth: '100px',
    selector: ({ instMessage }) => instMessage
  }
]
const dataOne = [
  {
    issuedDate: '21-12-2021',
    instanceType: 'Buy Robot',
    instanceStatus: 'Error',
    instMessage: 'Unable to find stock'
  },
  {
    issuedDate: '25-12-2021',
    instanceType: 'Sell Robot',
    instanceStatus: 'Info',
    instMessage: 'Info sold at price 150.00'
  }
]

const RobotApp = () => {
  // ** States
  const [activeTab, setTabActive] = useState('1')
  const [activePill, setPillActive] = useState('1')

  const togglePills = tab => {
    if (activePill !== tab) {
      setPillActive(tab)
    }
  }

  const toggleTabs = tab => {
    if (activeTab !== tab) {
      setTabActive(tab)
    }
  }
  return (
    <Fragment>
      <Breadcrumbs title='Robot' data={[{ title: 'Robot' }/*, { title: 'Charts' }, */]} />
      <div className='bg-white p-2 vh-100'>
        <div className='invoice-list-dataTable react-dataTable'>
          <DataTable
            noHeader
            // pagination
            paginationServer
            responsive
            data={dataOne}
            columns={columnsOne}
            className='react-dataTable'
            sortIcon={<ChevronDown size={10} />}
          />
        </div>
        {/* <div>
          <Card>
            <CardHeader>
              <Nav pills>
                <NavItem>
                  <NavLink
                    active={activePill === '1'}
                    onClick={() => {
                      togglePills('1')
                    }}
                  >
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    active={activePill === '2'}
                    onClick={() => {
                      togglePills('2')
                    }}
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled>Disabled</NavLink>
                </NavItem>
              </Nav>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={activePill}>
                <TabPane tabId='1'>
                  <CardTitle tag='h4'>Special title treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button color='primary' outline>
                    Go somewhere
                  </Button>
                </TabPane>
                <TabPane tabId='2'>
                  <CardTitle tag='h4'>Special title </CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content. testing</CardText>
                  <Button color='primary' outline>
                    Go somewhere
                  </Button>
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>
        </div> */}
      </div>
    </Fragment>
  )
}

export default RobotApp;
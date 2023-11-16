// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from 'reactstrap'
// ** Icons Imports
import { User, Lock, Bookmark, Link, Bell } from 'react-feather'

const Tabs = ({ activeTab, toggleTab }) => {
  return (
    <Nav pills className='mb-2'>
      <NavItem>
        <NavLink active={activeTab === '1'} onClick={() => toggleTab('1')}>
          <User size={18} className='me-50' />
          <span className='fw-bold'>EQ’s</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '2'} onClick={() => toggleTab('2')}>
          <Lock size={18} className='me-50' />
          <span className='fw-bold'>CDT’s</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '3'} onClick={() => toggleTab('3')}>
          <Bookmark size={18} className='me-50' />
          <span className='fw-bold'>MF’s</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '4'} onClick={() => toggleTab('4')}>
          <Bell size={18} className='me-50' />
          <span className='fw-bold'>Bonds</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '5'} onClick={() => toggleTab('5')}>
          <Link size={18} className='me-50' />
          <span className='fw-bold'>FD’s</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '6'} onClick={() => toggleTab('6')}>
          <Link size={18} className='me-50' />
          <span className='fw-bold'>NPS</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '7'} onClick={() => toggleTab('7')}>
          <Link size={18} className='me-50' />
          <span className='fw-bold'>Insurance</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '8'} onClick={() => toggleTab('8')}>
          <Link size={18} className='me-50' />
          <span className='fw-bold'>PPF/EPF</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '9'} onClick={() => toggleTab('9')}>
          <Link size={18} className='me-50' />
          <span className='fw-bold'>RS’s</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === '10'} onClick={() => toggleTab('10')}>
          <Link size={18} className='me-50' />
          <span className='fw-bold'>Others</span>
        </NavLink>
      </NavItem>
    </Nav>
  )
}

export default Tabs


// ** React Imports
import { Fragment, useContext } from 'react'
// ** Custom Components
import Breadcrumbs from '@components/breadcrumbs'
import React, { useState } from 'react'
// import { Button, ButtonGroup, Row, Col, CardText } from 'reactstrap'
import { Link } from 'react-router-dom'

// ** React Imports
// import { Fragment, useState } from 'react'

// ** Table Columns
import { data, DeployedStrategies } from './data'

// ** Third Party Components
import ReactPaginate from 'react-paginate'
import { ChevronDown } from 'react-feather'
import { useTranslation } from 'react-i18next'
import DataTable from 'react-data-table-component'
import DeplStatSession from './DeplStatSession'

// ** Reactstrap Imports
import { Button, ButtonGroup, Card, CardHeader, CardTitle, CardFooter, CardText, Input, Label, Row, Col, CardBody } from 'reactstrap'
// ** Context
import { ThemeColors } from '@src/utility/context/ThemeColors'
 
const DeployedStrg = () => {
  // ** Context
  const context = useContext(ThemeColors)
  // ** State
  const [currentPage, setCurrentPage] = useState(0)
  const [searchValue, setSearchValue] = useState('')
  const [filteredData, setFilteredData] = useState([])

  // ** Hooks
  const { t } = useTranslation()

  // ** Function to handle pagination
  const handlePagination = page => {
    setCurrentPage(page.selected)
  }

  // ** Function to handle filter
  const handleFilter = e => {
    const value = e.target.value
    let updatedData = []
    setSearchValue(value)

    const status = {
      1: { title: 'Current', color: 'light-primary' },
      2: { title: 'Professional', color: 'light-success' },
      3: { title: 'Rejected', color: 'light-danger' },
      4: { title: 'Resigned', color: 'light-warning' },
      5: { title: 'Applied', color: 'light-info' }
    }

    if (value.length) {
      updatedData = data.filter(item => {
        const startsWith =
          item.full_name.toLowerCase().startsWith(value.toLowerCase()) ||
          item.post.toLowerCase().startsWith(value.toLowerCase()) ||
          item.email.toLowerCase().startsWith(value.toLowerCase()) ||
          item.age.toLowerCase().startsWith(value.toLowerCase()) ||
          item.salary.toLowerCase().startsWith(value.toLowerCase()) ||
          item.start_date.toLowerCase().startsWith(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().startsWith(value.toLowerCase())

        const includes =
          item.full_name.toLowerCase().includes(value.toLowerCase()) ||
          item.post.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()) ||
          item.age.toLowerCase().includes(value.toLowerCase()) ||
          item.salary.toLowerCase().includes(value.toLowerCase()) ||
          item.start_date.toLowerCase().includes(value.toLowerCase()) ||
          status[item.status].title.toLowerCase().includes(value.toLowerCase())

        if (startsWith) {
          return startsWith
        } else if (!startsWith && includes) {
          return includes
        } else return null
      })
      setFilteredData(updatedData)
      setSearchValue(value)
    }
  }

  // ** Pagination Previous Component
  const Previous = () => {
    return (
      <Fragment>
        <span className='align-middle d-none d-md-inline-block'>{t('Prev')}</span>
      </Fragment>
    )
  }

  // ** Pagination Next Component
  const Next = () => {
    return (
      <Fragment>
        <span className='align-middle d-none d-md-inline-block'>{t('Next')}</span>
      </Fragment>
    )
  }
  
  // ** Custom Pagination Component
  const CustomPagination = () => (
    <ReactPaginate
      previousLabel={<Previous size={15} />}
      nextLabel={<Next size={15} />}
      forcePage={currentPage}
      onPageChange={page => handlePagination(page)}
      pageCount={searchValue.length ? Math.ceil(filteredData.length / 7) : Math.ceil(data.length / 7) || 1}
      breakLabel={'...'}
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName={'active'}
      pageClassName={'page-item'}
      nextLinkClassName={'page-link'}
      nextClassName={'page-item next'}
      previousClassName={'page-item prev'}
      previousLinkClassName={'page-link'}
      pageLinkClassName={'page-link'}
      breakClassName='page-item'
      breakLinkClassName='page-link'
      containerClassName={'pagination react-paginate pagination-sm justify-content-end pe-1 mt-1'}
    />
  )
  return (
    <div className='bg-white p-2'>
      <Row>
        <Col xl='6' md='6' xs='12'>
          <Card>
            <CardBody>
              <DeplStatSession className="card" primary={context.colors.primary.main} />
              <DataTable
                noHeader
                // pagination
                selectableRowsNoSelectAll
                columns={DeployedStrategies}
                className='react-dataTable'
                // paginationPerPage={5}
                sortIcon={<ChevronDown size={10} />}
                // paginationDefaultPage={currentPage + 1}
                // paginationComponent={CustomPagination}
                data={searchValue.length ? filteredData : data} />
            </CardBody>
          </Card>
        </Col>
        <Col xl='6' md='6' xs='12'>
          <Card>
            <CardBody>
              <DeplStatSession className="card" primary={context.colors.primary.main} />
              <DataTable
                noHeader
                // pagination
                selectableRowsNoSelectAll
                columns={DeployedStrategies}
                className='react-dataTable'
                // paginationPerPage={5}
                sortIcon={<ChevronDown size={10} />}
                // paginationDefaultPage={currentPage + 1}
                // paginationComponent={CustomPagination}
                data={searchValue.length ? filteredData : data} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default DeployedStrg;

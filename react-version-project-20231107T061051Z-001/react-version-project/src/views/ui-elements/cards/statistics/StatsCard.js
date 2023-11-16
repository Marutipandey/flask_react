// ** Third Party Components
import classnames from 'classnames'
import { TrendingUp, User, Box, DollarSign } from 'react-feather'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardText, Row, Col } from 'reactstrap'

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: 'Open',
      subtitle: '1',
      color: 'light-primary',
      icon: <TrendingUp size={24} />
    },
    {
      title: 'Executed',
      subtitle: '5',
      color: 'light-info',
      icon: <User size={24} />
    },
    {
      title: 'Postions',
      subtitle: '8',
      color: 'light-danger',
      icon: <Box size={24} />
    }/*,
    {
      title: '$9745',
      subtitle: 'Revenue',
      color: 'light-success',
      icon: <DollarSign size={24} />
    }*/
  ]

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols)
      const margin = index === 2 ? 'sm' : colMargin[0]
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1
          })}
        >
          <div className='d-flex align-items-center'>
            {/* <Avatar color={item.color} icon={item.icon} className='m-0' /> */}
            <div className='my-auto d-flex'>
              <CardText className='font-small-3 mb-0 text-center'>{item.title}&nbsp;:&nbsp;</CardText>
              <h4 className='fw-bolder mb-0'>{item.subtitle}</h4>
            </div>
          </div>
        </Col>
      )
    })
  }

  return (
    <Card className='card-statistics'>
      <CardHeader>
        <CardTitle tag='h4'>Statistics</CardTitle>
        <CardText className='card-text font-small-2 me-25 mb-0'>Updated 1 month ago</CardText>
      </CardHeader>
      <CardBody className='statistics-body'>
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  )
}

export default StatsCard

// ** Icons Import
import { Server, Grid, Circle, BarChart2, Box, Package, AlertTriangle, Copy } from 'react-feather'

export default [
  {
    id: 'tablesReactstrap',
    title: 'Table',
    icon: <Server size={20} />,
    navLink: '/tables/reactstrap'
  },
  {
    id: 'dataTable',
    title: 'DataTable',
    icon: <Grid size={20} />,
    children: [
      {
        id: 'dtBasic',
        title: 'Basic',
        icon: <Circle size={12} />,
        navLink: '/datatables/basic'
      },
      {
        id: 'dtAdvance',
        title: 'Advanced',
        icon: <Circle size={12} />,
        navLink: '/datatables/advance'
      }
    ]
  }
]

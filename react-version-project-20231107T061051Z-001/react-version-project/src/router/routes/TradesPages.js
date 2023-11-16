import { lazy } from 'react'

const OpenOrder = lazy(() => import('../../views/pages/trades'))
const ExecutedOrder = lazy(() => import('../../views/pages/executed-order'))
const OrderPosition = lazy(() => import('../../views/pages/order-position'))
const HoldingOrder = lazy(() => import('../../views/pages/holding-order'))

const TradesPagesRoutes = [
  {
    element: <OpenOrder />,
    path: 'pages/trades/'
  },
  {
    element: <ExecutedOrder />,
    path: 'pages/executed-order'
  },
  {
    element: <OrderPosition />,
    path: 'pages/order-position'
  },
  {
    element: <HoldingOrder />,
    path: 'pages/holding-order'
  }
]

export default TradesPagesRoutes

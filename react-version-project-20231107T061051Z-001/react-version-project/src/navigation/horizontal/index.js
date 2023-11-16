// ** Navigation imports

import dashboards from './dashboards'
import brokers from './brokers'
import report from './report'
import trades from './trades'
import strategies from './strategies'
import stockUI from './stock'
import access from './access'
import robot from './robot'
import PMSValidation from './pms'
import accessPage from './accessPage'


// ** Merge & Export
export default [...dashboards, ...trades, ...strategies, ...stockUI, ...PMSValidation, ...accessPage/*, ...report,...brokers, ...robot*/];

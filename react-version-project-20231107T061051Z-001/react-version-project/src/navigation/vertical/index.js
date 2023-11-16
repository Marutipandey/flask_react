// ** Navigation imports
import apps from './apps'
import pages from './pages'
import forms from './forms'
import tables from './tables'
import others from './others'
import charts from './charts'
import uiElements from './ui-elements'
import dashboards from './dashboards'
import trades from './trades'
import strategies from './strategies'
import report from './report'
import brokers from './brokers'
import stockUI from './stock'
import robot from './robot'
import access from './access'
import PMSValidation from './pms'
import accessPage from './accessPage'

// ** Merge & Export
export default [...dashboards, ...trades, ...strategies, ...stockUI, ...PMSValidation, ...accessPage,/* ...report,...brokers, ...robot*/];
/* , ...others, ...apps, ...pages, ...forms, ...tables, ...uiElements, ...charts */

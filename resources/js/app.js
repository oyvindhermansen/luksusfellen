import $ from 'jquery'
import { checkIfIncomeOnEntry } from './modules/formvalidate'
import { dragit } from './modules/drag'
import { dropit } from './modules/drop'

checkIfIncomeOnEntry()
dragit()
dropit()

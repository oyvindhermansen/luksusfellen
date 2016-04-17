import $ from 'jquery'
import { checkIfIncomeOnEntry } from './modules/formvalidate'
import { dragit } from './modules/drag'
import { dropit } from './modules/drop'
import { moneyMaker } from './modules/moneymaker'

checkIfIncomeOnEntry()
moneyMaker()
dragit()
dropit()

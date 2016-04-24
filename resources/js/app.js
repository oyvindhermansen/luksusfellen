import $ from 'jquery'
import { checkIfIncomeOnEntry } from './modules/formvalidate'
import { dragit } from './modules/drag'
import { dropit } from './modules/drop'
import { moneyMaker } from './modules/moneymaker'
import { newBoard } from './modules/newBoard'

checkIfIncomeOnEntry()
newBoard($('.new-board '), $('.board__container'))
moneyMaker()
dragit()

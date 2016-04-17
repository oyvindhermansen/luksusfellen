'use strict'
import $ from 'jquery'
import { income } from './algorithms'


function checkIfIncomeOnEntry() {
  const $formIncome = $('.income__form')

  $formIncome.on('submit', (e) => {
    const $income = $('.income__input')
    const $err = $('.income__err')

    if (!income($income.val())) {
      e.preventDefault()
      $err.html('Du må fylle ut inntekten')
    }
  })
}

export { checkIfIncomeOnEntry }

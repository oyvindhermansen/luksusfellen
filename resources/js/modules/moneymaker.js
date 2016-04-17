'use strict'
import $ from 'jquery'

function moneyMaker() {
  const bills = ['femti', 'hundre', 'fem hundre', 'tusen']
  const $output = $('.bill')

  for (let bill in bills) {
    $output.append(`<div class="bill" data-bill="${bills[bill]}">${bills[bill]}</div>`)
  }
  return bills
}

export { moneyMaker }

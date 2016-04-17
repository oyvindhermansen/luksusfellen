'use strict'
import $ from 'jquery'

function moneyMaker() {
  const bills = ['femti', 'hundre', 'fem hundre', 'tusen']
  const $output = $('.board__sidebar-bills')

  for (let bill in bills) {
    $output.append(`<div class="bill" data-bill="${bills[bill]}">${bills[bill]}</div>`)
  }
  return bills
}

export { moneyMaker }

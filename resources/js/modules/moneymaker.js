'use strict'
import $ from 'jquery'

function moneyMaker() {
  const bills = ['../images/50_kroner.jpg','../images/100_kroner.jpg', '../images/200_kroner.jpg', '../images/500_kroner.jpg', '../images/1000_kroner.jpg']
  const $output = $('.board__sidebar-bills')
  const billValues = [50, 100, 200, 500, 1000]
  let count = 0
  for (let bill in bills) {
    $output.append(`<img class="bill" data-bill="${billValues[count]}" src="${bills[bill]}"/>`)
    count++
  }
  return bills
}

export { moneyMaker }

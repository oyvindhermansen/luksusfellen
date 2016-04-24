'use strict'
import $ from 'jquery'

function moneyMaker() {
  const bills = [
    '../images/50_kroner.jpg',
    '../images/100_kroner.jpg',
    '../images/200_kroner.jpg',
    '../images/500_kroner.jpg',
    '../images/1000_kroner.jpg'
  ]

  const $output = $('.opts__bills')
  const billValues = [50, 100, 200, 500, 1000]
  let count = 0

  for (let bill in bills) {
    count++
    $output.append(
      `<img
        class="bill"
        data-bill="${billValues[count - 1]}"
        src="${bills[bill]}" />
      `
    )
  }
  return bills
}

export { moneyMaker }

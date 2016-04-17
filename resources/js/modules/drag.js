'use strict'
import $ from 'jquery'
import { draggable } from 'jquery-ui/draggable'


function dragit() {
  const $bill = $('.bill')
  $bill.draggable({
    containment: 'html',
    revert: 'invalid',
    helper: 'clone',
  })
}

export { dragit }

'use strict'
import $ from 'jquery'
import { draggable } from 'jquery-ui/draggable'


function dragit() {
  const $storedIncome = $('.board__income')
  $storedIncome.draggable({
    containment: 'html',
    revert: true
  })
}

export { dragit }

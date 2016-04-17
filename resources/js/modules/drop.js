'use strict'
import $ from 'jquery'
import { droppable } from 'jquery-ui/droppable'
import { draggable } from './drag'

function dropit() {
  const $dropArea = $('.board__main')
  $dropArea.droppable({
    hoverClass: 'active-money-hover',
    accept: '.bill',
    drop: function(event, ui) {
      const $income = $('.board__income-current').text()
      let incomeValue = parseInt($income)
      if (incomeValue > 0) {
        const $clone = ui.helper.clone()
        const $this = $(this)
        const $dataBill = $clone.attr('data-bill')
        let billValue = parseInt($dataBill)

        if (incomeValue - billValue < 0) {
          // error msg
        } else {
          $this.append($clone)
          $clone.draggable({
            containment: 'parent',
          })
          $('.board__income-current').html(incomeValue - billValue)
        }
      }
    }
  })
}

export { dropit }

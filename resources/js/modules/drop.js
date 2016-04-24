'use strict'
import $ from 'jquery'
import { droppable } from 'jquery-ui/droppable'
import { draggable } from './drag'

function dropit() {
  const $dropArea = $('.board__container').find('.board__section')
  let cloneCounter = 0
  $dropArea.droppable({
    hoverClass: 'active-money-hover',
    snapMode:'inner',
    accept: '.bill',
    grid: [150,150],
    drop: function(event, ui) {
      const $income = $('.opts__income-current').text()
      let incomeValue = parseInt($income)
      if (incomeValue > 0) {
        const $clone = ui.helper.clone()
        const $this = $(this)
        const $dataBill = $clone.attr('data-bill')
        let billValue = parseInt($dataBill)

        if (incomeValue - billValue < 0) {
          // error msg
        } else {
          $this.append($clone.draggable({
            containment: 'parent'
          }))
          $('.opts__income-current').html(incomeValue - billValue)
        }
      }
    }
  })
}

export { dropit }

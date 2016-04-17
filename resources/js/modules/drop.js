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
      const $clone = ui.helper.clone()
      const $this = $(this)
      $this.append($clone)
    }
  })
}

export { dropit }

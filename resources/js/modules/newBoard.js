'use strict'
import $ from 'jquery'
import { dropit } from './drop'

function newBoard($trigger, $appendTo) {
  $trigger.on('click', () => {
    $appendTo.append(`<li><div class="board__section"></div></li>`)
    dropit()
  })
}

export { newBoard }

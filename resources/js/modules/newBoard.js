'use strict'
import $ from 'jquery'
import { dropit } from './drop'

function newBoard($trigger, $appendTo) {
  $trigger.on('click', () => {
    const $overlay = $('.overlay')
    const $overlayBtn = $('.overlay__button')
    const $close = $('.overlay__close')

    $overlay.fadeIn(200)

    $overlayBtn.off().on('click', () => {
      const $nameInput = $('.overlay__name-input')
      const $overlay = $('.overlay')
      const $errorMsg = $('.overlay__error')
      
      if ($nameInput.val() === '') {
        $errorMsg.html('<p>Du må skrive inn et navn.</p>')
        return false
      } else {
        $errorMsg.html('')
        $nameInput.focus()
        $overlay.fadeOut(200)
        $appendTo.append(`<li><div class="board__section"><div class="board__section-name">${$nameInput.val()}</div></div></li>`)
        $nameInput.val('')
        dropit()
      }
    })
    $close.on('click', () => {
      const $nameInput = $('.overlay__name-input')
      const $overlay = $('.overlay')
      const $errorMsg = $('.overlay__error')

      $errorMsg.html('')
      $nameInput.focus()
      $overlay.fadeOut(200)
    })
  })
}

export { newBoard }

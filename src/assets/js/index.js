import {isTouch}      from './_helpers'
import Animations     from './_managers/animations'
import RoutingManager from './_managers/routing'

if (isTouch) {
    document.body.classList.remove('no-touch')
    document.body.classList.add('is-touch')
}

window.onload = () => {
    Animations.init()
    RoutingManager.init()
}

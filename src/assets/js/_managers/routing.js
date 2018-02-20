import Barba     from 'barba.js'
import TweenLite from 'gsap'

const RoutingManager = (() => {

    Barba.Pjax.getTransition = () => {
        return BasicTransition
    }

    const BasicTransition = Barba.BaseTransition.extend({
        start: function() {
            Promise
                .all([this.newContainerLoading, this.showPreloader()])
                .then(this.hidePreloader.bind(this))
        },
        showPreloader: function() {

            return new Promise((resolve,reject) => {
                TweenLite.to('.m-preloader', .5, {
                    y: 0,
                    onComplete: () => {
                        resolve()
                    }
                })
            })

        },
        hidePreloader: function() {

            var _this = this,
                _new  = this.newContainer,
                _old  = this.oldContainer;

            _old.style.display    = 'none'
            _new.style.visibility = "visible"

            TweenLite.to('.m-preloader', .5, {
                y: "-100%",
                clearProps: "all",
                onComplete: () => {
                    _this.done()
                }
            })

        }
    })

    const HomePage = Barba.BaseView.extend({
        namespace: 'homepage',
        onLeave: () => {
        },
        onEnter: () => {
        },
        onEnterCompleted: () => {
            console.log('enter completed HomePage')
        }
    })

    const AboutPage = Barba.BaseView.extend({
        namespace: 'aboutpage',
        onLeave: () => {
        },
        onEnter: () => {
        },
        onEnterCompleted: () => {
            console.log('enter completed AboutPage')
        }
    })



    const _init = () => {
        console.log('Start RoutingManager')
        HomePage.init()
        AboutPage.init()
        Barba.Pjax.start()
    }


    return {
        init: _init
    }

})()

export default RoutingManager

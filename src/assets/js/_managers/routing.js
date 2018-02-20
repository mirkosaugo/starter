import Barba from 'barba.js'

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
                setTimeout(() => {
                    console.log(3)
                }, 0)
                setTimeout(() => {
                    console.log(2)
                }, 1000)
                setTimeout(() => {
                    console.log(1)
                }, 2000)
                setTimeout(() => {
                    resolve()
                }, 3000)
            })

        },
        hidePreloader: function() {

            var _this = this,
                _new  = this.newContainer,
                _old  = this.oldContainer;

            _old.style.display    = 'none'
            _new.style.visibility = "visible"

            _this.done()

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

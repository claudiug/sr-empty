import ApplicationController from './application_controller'

export default class extends ApplicationController {
  connect () {
    super.connect()
  }

  change (event) {
    console.log(this.colorTarget)
    console.log('LALALALALLALA', event)
  }
}


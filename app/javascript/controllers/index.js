import { application } from "./application"
import CableReady from 'cable_ready'
import StimulusReflex from 'stimulus_reflex'

import consumer from '../channels/consumer'
application.consumer = consumer
import ExampleController from './example_controller'
application.register('example', ExampleController)
import controller from '../controllers/application_controller'
StimulusReflex.initialize(application, { controller, isolate: true })

StimulusReflex.debug = true
CableReady.initialize({ consumer })

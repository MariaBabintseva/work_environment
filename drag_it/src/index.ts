import './index.styl'
import { Drag } from './components/Drag/Drag'

const app = document.querySelector<HTMLDivElement>('.app')
const drag = new Drag(app)
import './index.styl';
import { Cards } from './components/Cards/Cards';


const app = document.querySelector<HTMLDivElement>('.app');

const cards = new Cards(app)

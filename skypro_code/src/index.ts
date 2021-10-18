import './index.styl';
import { CodeEditor } from './components/CodeEditor/CodeEditor';

const app = document.querySelector<HTMLDivElement>('.app');

const codeEditor = new CodeEditor(app)

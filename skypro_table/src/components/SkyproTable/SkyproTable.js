/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
import './SkyproTable.styl';
import { templateEngine } from '../../lib/templateEngine';
import * as XLSX from 'xlsx';

export class SkyproTable {
  constructor(container) {
    this.container = container;

    this.render();

    const inputExcel = document.querySelector('.input-excel');
    inputExcel.addEventListener('change', function (e) {
      const reader = new FileReader();

      reader.readAsArrayBuffer(e.target.files[0]);

      reader.onload = function (e) {
        const data = new Uint8Array(reader.result);
        const wb = XLSX.read(data, { type: 'array' });

        const htmlContent = XLSX.write(wb, { type: 'binary', bookType: 'html' });
        document.querySelector('.app').innerHTML = htmlContent;
      };
    });
  }

  template() {
    return {
      block: 'input',
      cls: 'input-excel',
      attrs: { type: 'file' }
    };
  }

  render() {
    this.container.textContent = '';

    const element = templateEngine(this.template());
    this.container.appendChild(element);
    this.element = element;
  }
}

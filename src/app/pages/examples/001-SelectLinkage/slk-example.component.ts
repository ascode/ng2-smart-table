import { Component } from '@angular/core';
import { LocalDataSource } from '../../../../ng2-first-table';

@Component({
    selector: 'slk-example-table',
    template: `
    <ng2-first-table
      [settings]="settings"
      [source]="source"
      (actions2Event)="onActions2Fn($event)"
      (editConfirm)="editConfirm($event)"></ng2-first-table>
  `,
})

export class SlkExampleComponent {


    data = [
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
        {
            id: 1,
            table: 'table01',
            column: 't1003',
            isTrue: true,
        },
        {
            id: 2,
            table: 'table01',
            column: 't1002',
            isTrue: true,
        },
        {
            id: 3,
            table: 'table03',
            column: 't3002',
            isTrue: false,
        },
        {
            id: 4,
            table: 'table02',
            column: 't2001',
            isTrue: false,
        },
        {
            id: 5,
            table: 'table03',
            column: 't3001',
            isTrue: true,
        },
    ];

    settings: any;
    source: LocalDataSource;





    tableArr = [];
    constructor() {

        this.setTings();
        this.source = new LocalDataSource(this.data);
    }


    setTings() {
        this.settings = {
            actions: {
                columnTitle: '操作',
            },
            delete: {
                confirmDelete: true,
            },
            add: {
                confirmCreate: true,
            },
            edit: {
                confirmSave: true,
            },
            actions2: {
                isShow: true,
                columnTitle: 'Actions2',
                columnCont: {
                    text: "设置文本",
                    class: "setText",
                },
                position: 'left', // left|right
            },
            // edit: {
            //     inputClass: '',
            //     editButtonContent: '编辑',
            //     saveButtonContent: '确定',
            //     cancelButtonContent: '取消',
            //     confirmSave: false,
            // },
            // add: {
            //     inputClass: '',
            //     addButtonContent: '新增',
            //     createButtonContent: '确定',
            //     cancelButtonContent: '取消',
            //     confirmCreate: false,
            // },
            // delete: {
            //     deleteButtonContent: '删除',
            //     confirmDelete: false,
            // },
            columns: {
                id: {
                    title: 'ID',
                    type: 'html',
                    width: "100px",
                },
                table: {
                    title: '主表名',
                    editor: {
                        type: 'list',
                        config: {
                            list: [
                                { value: 'table01', title: 'table01' },
                                { value: 'table02', title: 'table02' },
                                { value: 'table03', title: 'table03', }
                            ],
                        },
                    },
                    filter: {
                        type: 'list',
                        config: {
                            selectText: '全部选项',
                            list: [
                                { value: 'table01', title: 'table01' },
                                { value: 'table02', title: 'table02' },
                                { value: 'table03', title: 'table03', }
                            ],
                        },
                    },
                },
                column: {
                    title: '主表列',
                    editor: {
                        type: 'list',
                        config: {
                            list: [],
                        },
                    },
                    filter: {
                        type: 'list',
                        config: {
                            selectText: '全部选项',
                            list: [],
                        },
                    },

                },
                isTrue: {
                    title: '复选框',
                    type: 'checkbox',
                    width: "3%",
                    editor: {
                        type: 'checkbox',
                        config: {
                            true: 'true',
                            false: 'false',
                        }
                    },
                    filter: {
                        type: 'checkbox',
                        config: {
                            true: 'true',
                            false: 'false',
                        }
                    },
                },
            },
            // 下拉框联动
            selectLinkageData: {
                open: true,
                startStr: 'table',
                targetStr: 'column',
                starData: ['table01', 'table02', 'table03'],
                targetData: [
                    [
                        { value: 't1001', title: 't1001' },
                        { value: 't1002', title: 't1002' },
                        { value: 't1003', title: 't1003' }
                    ],
                    [
                        { value: 't2001', title: 't2001' },
                        { value: 't2002', title: 't2002' },
                        { value: 't2003', title: 't2003' }
                    ],
                    [
                        { value: 't3001', title: 't3001' },
                        { value: 't3002', title: 't3002' },
                        { value: 't3003', title: 't3003' }
                    ],
                ],
            }
        };
    }

    onActions2Fn(e) {
        window.confirm(`设置文本点击事件`);
    }

    editConfirm(e) {
        console.log(e);
    }
}

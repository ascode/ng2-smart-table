import { Component, Output, EventEmitter, Input} from '@angular/core';

import { Cell } from '../../../lib/data-set/cell';

export class DefaultEditor implements Editor {
  @Input() cell: Cell;
  @Input() inputClass: string;
  @Input() cellMerge: boolean;
  @Output() onStopEditing = new EventEmitter<any>();
  @Output() onEdited = new EventEmitter<any>();
  @Output() onClick = new EventEmitter<any>();
  
}

export interface Editor {
  cell: Cell;
  cellMerge: boolean;
  inputClass: string;
  onStopEditing: EventEmitter<any>;
  onEdited: EventEmitter<any>;
  onClick: EventEmitter<any>;
}

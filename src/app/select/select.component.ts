import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  allChecked = false;
  indeterminate = true;
  selected = [];
  checkOptionsOne = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear', checked: false },
    { label: 'Orange', value: 'Orange', checked: false }
  ];

  options = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear', checked: false },
    { label: 'Orange', value: 'Orange', checked: false }
  ]

  constructor() { }

  ngOnInit() {
    this.selected = this.options.filter(opt => opt.checked).map(opt => opt.value);
  }

  updateAllChecked(): void {
    this.indeterminate = false;
    if (this.allChecked) {
      this.options = this.options.map(item => {
        return {
          ...item,
          checked: true
        };
      });
    } else {
      this.options = this.options.map(item => {
        return {
          ...item,
          checked: false
        };
      });
    }
    this.getSelected();
  }
  getSelected() {
    this.selected = this.options.filter(opt => opt.checked).map(opt => opt.value);
  }
  updateSingleChecked(): void {
    if (this.options.every(item => !item.checked)) {
      this.allChecked = false;
      this.indeterminate = false;
    } else if (this.options.every(item => item.checked)) {
      this.allChecked = true;
      this.indeterminate = false;
    } else {
      this.indeterminate = true;
    }
    this.getSelected()
  }
  handleSelectChange(ev) {
    
  }

}

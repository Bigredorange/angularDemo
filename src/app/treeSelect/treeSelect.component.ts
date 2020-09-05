import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treeSelect',
  templateUrl: './treeSelect.component.html',
  styleUrls: ['./treeSelect.component.scss']
})
export class TreeSelectComponent implements OnInit {
  value: string[] = ['Apple'];
  options = [
    { label: 'Apple', value: 'Apple', checked: true },
    { label: 'Pear', value: 'Pear', checked: false },
    { label: 'Orange', value: 'Orange', checked: false }
  ];
  optNodes: any[] = [
    {
      title: '全部',
      value: 'all',
      key: 'all',
      children: [
      ]
    },
  ];
  onChange($event: string[]): void {
    console.log($event);
  }
  constructor() { }

  ngOnInit() {
    this.optNodes[0].children = this.options.map(opt => {
      return {
        title: opt.label,
        key: opt.value,
        value: opt.value,
        isLeaf: true,
      };
    });
  }

}

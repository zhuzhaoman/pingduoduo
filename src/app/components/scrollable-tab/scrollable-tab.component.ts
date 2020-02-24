import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface TopMenu {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.scss']
})

export class ScrollableTabComponent implements OnInit {

  selectIndex = -1; // 选中索引
  @Input() menus: TopMenu[] = [];
  @Input() backgroundColor = '#fff';
  @Input() titleActiveColor = 'red';
  @Input() titleColor = 'black';
  @Input() indicatorColor = 'brown';
  @Output() tabSeleted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handSelection(index: number): void {
    this.selectIndex = index;
    this.tabSeleted.emit(this.menus[this.selectIndex]);
  }

}

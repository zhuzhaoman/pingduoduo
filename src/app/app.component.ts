import { Component } from '@angular/core';

interface TopMenu {
  title: string;
  link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pingduoduo';
  menus: TopMenu[] = [
    {
      title: '热门',
      link: 'http://www.baidu.com'
    },
    {
      title: '男装',
      link: 'http://www.baidu.com'
    },
    {
      title: '百货',
      link: 'http://www.baidu.com'
    },
    {
      title: '运动',
      link: 'http://www.baidu.com'
    },
    {
      title: '手机',
      link: 'http://www.baidu.com'
    },
    {
      title: '家纺',
      link: 'http://www.baidu.com'
    },
    {
      title: '食品',
      link: 'http://www.baidu.com'
    },
    {
      title: '电器',
      link: 'http://www.baidu.com'
    },
    {
      title: '鞋包',
      link: 'http://www.baidu.com'
    },
    {
      title: '汽车',
      link: 'http://www.baidu.com'
    },
    {
      title: '水果',
      link: 'http://www.baidu.com'
    },
    {
      title: '电脑',
      link: 'http://www.baidu.com'
    },
    {
      title: '内衣',
      link: 'http://www.baidu.com'
    },
    {
      title: '母婴',
      link: 'http://www.baidu.com'
    },
    {
      title: '家具',
      link: 'http://www.baidu.com'
    },
    {
      title: '美妆',
      link: 'http://www.baidu.com'
    }
  ];
}

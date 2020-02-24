import { Component } from '@angular/core';
import {TopMenu} from './components/scrollable-tab/scrollable-tab.component';
import {ImageSlider} from './components/image-slider/image-slider.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pingduoduo';

  topMenus: TopMenu[] = [
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
  imageSliders: ImageSlider[] = [
    {
      imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582568353900&di=f97a65e48197bce9f72e55b8784affa9&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa3e592c653ea46adfe1809e35cd7bc58508a6cb94307-aaO54C_fw658',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2877325553,560783714&fm=26&gp=0.jpg',
      link: '',
      caption: ''
    },
    {
      imgUrl: 'http://www.youbaobao.xyz/book/res/bg.jpg',
      link: '',
      caption: ''
    }
  ];

  /**
   * 描述：scrollabel-tab组件抛出事件
   * 作用：分类被点击
   */
  handleTabSelected(topMenu: TopMenu): void {
    console.log(topMenu);
  }
}

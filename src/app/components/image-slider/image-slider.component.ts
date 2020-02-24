import {Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren} from '@angular/core';

export interface ImageSlider {
  imgUrl: string;
  link: string;
  caption: string;
}

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {

  @Input() sliders: ImageSlider[] = [];
  @Input() scrollHeight = '160px';
  @Input() intervalBySeconds = 2;
  @ViewChild('imageSlider', {static: true}) imgSlider: ElementRef; // 引用单个dom节点
  // @ViewChildren('img') imgs: QueryList<ElementRef>; // 引用多个dom节点

  constructor(private rd2: Renderer2) { }

  ngOnInit(): void {
    console.log('ngOnInit', this.imgSlider);
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit(): void {
    // this.imgs.forEach(item => item.nativeElement.style.height = '150px');

    // this.imgs.forEach(item => {
    //   this.rd2.setStyle(item.nativeElement, 'height', '150px');
    // });
    let index = 0;
    setInterval(() => {
      this.rd2.setProperty(this.imgSlider.nativeElement, 'scrollLeft',
        ((++index % this.sliders.length) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length);
    }, this.intervalBySeconds * 1000);
  }
}

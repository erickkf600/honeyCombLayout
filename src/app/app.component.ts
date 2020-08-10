import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  // @ViewChild('logosMobile') public logosMobile: ElementRef;
  public axisXArray = [];
  public axisYArray = [];

  public right = [];
  public logos = [
    {img: 'https://gtswiki.gt-beginners.net/decal/png/40/84/61/5980793514873618440_1.png'},
    {img: 'https://logodownload.org/wp-content/uploads/2017/08/konami-logo.png'},
    {img: 'https://i.pinimg.com/originals/31/dc/04/31dc04ba87fb4ec9f9dab3646598804f.png'},
    {img: 'https://logodownload.org/wp-content/uploads/2014/07/Adidas-Logo-3.png'},
    {img: 'https://logodownload.org/wp-content/uploads/2017/05/fifa-logo.png'},
    { img: 'https://i.pinimg.com/originals/dc/1e/cd/dc1ecd6a8b61a87ebca183f93e8f581c.png'},
    {img: 'https://cdn.freebiesupply.com/logos/large/2x/cbf-confederacao-brasileira-de-futebol-logo-png-transparent.png'},
    {img: 'https://cdn.freebiesupply.com/logos/large/2x/cbf-confederacao-brasileira-de-futebol-logo-png-transparent.png'},
  ]

  public config: SwiperConfigInterface = {
    slidesPerView: 1,
    observer: true,
    spaceBetween: 0,
    watchOverflow: true,
    slidesPerColumn: 2
  }
  public index: number = 0; 

  constructor(private element: ElementRef){}
  ngOnInit(){ }

  async ngAfterViewInit() {
    this.mobileConfig()
    this.desktopConfig()
  }



  async mobileConfig(){
    if (window.innerWidth <= 1024) {
     
    }    

  }


  async desktopConfig(){
    if (window.innerWidth > 1024) {
      let axisX = 287;
      let axisY = 264;
      let incrementX = 150;
      let incrementY = 85;
      let incrementButtonY = 166;

      let resultX = [287]
      let resultY = [264]
      this.logos.forEach((ele, i) => {

        axisX += incrementX
        resultX.push(axisX)

        axisY += incrementY
        resultY.push(axisY)
        if ((i + 1) % 3 == 0) {
          axisX += incrementX - (incrementX * 1.95)
          resultX.push(axisX)

          axisY += incrementButtonY - (incrementButtonY * 2.5)
          resultY.push(axisY)
          return
        }
      });
      if (this.logos.length > 1) {

        let tratedX = resultX.splice(0, resultX.length - 1)
        this.axisXArray = await tratedX

        let tratedY = resultY.splice(0, resultY.length - 1)
        this.axisYArray = await tratedY
      } else {
        this.axisXArray = [await 287];
        this.axisYArray = [await 264]
      }
    }
  }

}


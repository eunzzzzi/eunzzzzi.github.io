import {Component, HostListener, OnInit} from '@angular/core';


@Component({
  selector: 'app-scroll-progress',
  templateUrl: './scroll-progress.component.html',
  styleUrls: ['./scroll-progress.component.scss']
})

export class ScrollProgressComponent implements OnInit {

  @HostListener("window:scroll", []) onWindowScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    // @ts-ignore
    document.getElementById("myBar").style.width = scrolled + "%";
  }
  constructor() {

  }

  ngOnInit(): void {

  }
}

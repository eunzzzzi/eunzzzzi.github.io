import { Component, OnInit } from "@angular/core";
import { map, pairwise, takeUntil } from "rxjs/operators";
import { fromEvent, of } from "rxjs";

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import 'jquery'
@Component({
  selector: 'app-notesfeed',
  templateUrl: './notesfeed.component.html',
  styleUrls: ['./notesfeed.component.scss']
})
export class NotesfeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
$("#add_section").css("margin-top",$("#top_menu").outerHeight()+"px");

  }

}

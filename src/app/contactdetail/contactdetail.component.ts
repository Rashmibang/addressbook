import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contactdetail',
  templateUrl: './contactdetail.component.html',
  styleUrls: ['./contactdetail.component.css']
})
export class ContactdetailComponent implements OnInit {
  @Input('user') user: any;


  constructor() { }
  ngOnInit(): void {
  }

}

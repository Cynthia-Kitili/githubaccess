import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: any;

  @Output() searchEmmiter = new EventEmitter<any>();

  constructor() { }

  searchUser() {
    this.searchEmmiter.emit(this.search);
  }

  ngOnInit(): void {
  }

}
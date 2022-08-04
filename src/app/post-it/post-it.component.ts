import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-it',
  templateUrl: './post-it.component.html',
  styleUrls: ['./post-it.component.css']
})
export class PostItComponent implements OnInit {


  @Input()
  public title: string;
  @Input()
  public message:string;


  constructor() { }

  ngOnInit(): void {
  }

}

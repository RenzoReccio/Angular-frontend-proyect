import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id: number;
  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');

  }

}

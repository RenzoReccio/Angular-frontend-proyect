import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataService } from '../core/data.service';
import { IComments } from '../share/interfaces';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  id: string;
  title: string;
  comments : IComments[];
  saveComment : IComments[];
  commentForm : FormGroup;
  submit = false;
  constructor( private route: ActivatedRoute, 
              private dataService : DataService,
              private formBuilder : FormBuilder,
              private router : Router) {

                this.router.routeReuseStrategy.shouldReuseRoute = function() {
                  return false;
              };
               }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      username : ['', Validators.required],
      content : ['', Validators.required]
    })
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id==null){
      this.title = "Select a restaurant:"
    }
    else{
      this.title = "Comments"
      this.retrieveComments();
    }
    console.log(this.id)

  }

  onSubmit(){
    this.submit = true;
    if(this.commentForm.invalid){
      return
    }
    console.log(this.commentForm.value)
    this.dataService.saveComments(this.id,
                                  this.commentForm.value.username,
                                  this.commentForm.value.content)
                      .subscribe((commet : IComments[]) => this.saveComment = commet );
    this.retrieveComments();

  }

  retrieveComments(){
    this.dataService.getComments(this.id)
    .subscribe((comment : IComments[]) =>this.comments =  comment)
  }

}

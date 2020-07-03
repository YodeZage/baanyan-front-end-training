import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  model = {
    name: 'Hello, World!'
  };

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }

}

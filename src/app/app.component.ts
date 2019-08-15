import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      templateOptions: {
        label: 'Text',
      },
    },
    {
      key: 'interest',
      type: 'multicheckbox',
      templateOptions: {
        label: 'Interest',
        options: [
          {
            key: 'sports',
            value: 'Sports'
          },
          {
            key: 'movies',
            value: 'Movies'
          },
          {
            key: 'others',
            value: 'Others'
          }
        ]
      }
    }
  ];

  submit(model) {
    console.log(model);
  }
}

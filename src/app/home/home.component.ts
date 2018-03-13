import {Component} from '@angular/core';
import { Employee } from '../models/employee.module';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages = ['English', 'Spain', 'Polish', 'Other']
  model = new Employee('', '', true, '', 'default');
  hasPrimaryLanguageError = false;

  firstNameToUpperCase(value: string){
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    }else{
      this.model.firstName = value;
    }
  }
  validatePrimaryLanguage(value){
    if(value === 'default'){
      this.hasPrimaryLanguageError = true;

    }else{
      this.hasPrimaryLanguageError = false;
    }
    console.log('lang ' + !this.hasPrimaryLanguageError );
  }
}

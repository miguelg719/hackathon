import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
    selector:'app-contact-form',
    templateUrl:'./contact-form.component.html',
    styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

    model = new Contact(1, "Jackie", "Chan", "jchan@yopmail.com");

    submitted = false;

    onSubmit(){ this.submitted = true; }

    newContact() {
        this.model = new Contact(2, "", "", "");
      }
}
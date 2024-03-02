import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from '../../app-service.service';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  subjectMessage: string = '';

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('fname')); // reading optional parameter
    console.log(this.route.snapshot.paramMap.get('lname')); // reading optional parameter
  }
}

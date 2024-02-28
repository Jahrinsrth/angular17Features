import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  constructor(private route:ActivatedRoute){}
  
  ngOnInit(): void {
    console.log(this.route.snapshot.queryParamMap.get('lan'));  // reading quer parameter
  }
}

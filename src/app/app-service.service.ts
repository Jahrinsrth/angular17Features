import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private mySubject = new Subject<string>;

  constructor() { }

  getMySubjectContent(){
       return this.mySubject;
  }

  setMySubjectContent(value:string){
     this.mySubject.next(value);
  }


}

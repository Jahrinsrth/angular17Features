import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular17';
  quantity = signal(1);

  private _name: string = "";

  onBtnClick(){

    //this.quantity.update(q => q + 1);
     this.quantity.set(10);
  }

  get EmployeeName(){
    return this._name;
  }

  set EmployeeName(val:string){
     this._name = val;
  }
}

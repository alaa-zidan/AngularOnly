import { Component ,EventEmitter,Input,Output,OnChanges,OnDestroy,SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  contentData:string ="Data From Content Data";
  c :string="";
  @Output() fevent=new EventEmitter();
  @Output() myEvent= new EventEmitter();
   showdata(){
    this.myEvent.emit(this.contentData);
   }
}

//-----------------------Angular Life Cycle----------------
// export class LoginComponent implements OnChanges, OnDestroy {
//   @Input() dataFromContent: string = '';
//   ngOnDestroy(): void {
//     throw new Error('Method not implemented.');
//   }
//   componentTitle: string = 'Login Component';

//   @Input() flag: boolean = false;

//   ngOnChanges(changes: SimpleChanges): void {
//     if (this.flag == true) {
//       this.componentTitle = 'Login Component';
//     } else {
//       this.componentTitle = 'Register Component';
//     }
//   }
// }

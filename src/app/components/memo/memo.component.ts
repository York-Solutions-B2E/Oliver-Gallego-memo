import { Component } from '@angular/core';
add import;
add implement ngOnInit;
Add ngOnInit() method;

@Component({
  selector: 'app-memo',
  templateUrl: './memo.component.html',
  styleUrls: ['./memo.component.css'],

})
export class MemoComponent implements OnInit {
    public message: string = ''
    public time: Date | null = null
    public sender: string
    public subject: string

    constructor(message: string) { 
      this.message = message
    }

    ngOnItit(): void {
    }

}

// export = this thing should be useable outside of the 
// implements - interface
// class - template for an object 

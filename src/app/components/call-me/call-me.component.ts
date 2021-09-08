import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { callMeAnimation } from 'src/animations/call-me.animation';

@Component({
  selector: 'i-call-me',
  templateUrl: './call-me.component.html',
  styleUrls: ['./call-me.component.scss'],
  animations: [callMeAnimation],
})
export class CallMeComponent implements OnInit {
  @Input() minified: boolean = true;
  @Input() telegramChatId: string;
  @Input() telegramToken: string;

  @Output() onToggle = new EventEmitter();

  form: FormGroup;
  expanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.generateForm();
    this.expanded = true;
  }

  private generateForm() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.email, Validators.maxLength(50)]),
      phone: new FormControl('', [Validators.required]),
      text: new FormControl('', [Validators.required]),
    });
  }

  toggle() {
    this.onToggle.emit();
  }

  submit() {
    console.log(this.form.value);
  }
}



import { HttpClient } from '@angular/common/http';
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
  // TODO: @Input() messageStore: { sendMessage(telegramChatId: string, telegramToken: string): any }
  @Input() minified: boolean = true;
  @Input() telegramChatId: string;
  @Input() telegramToken: string;

  @Output() onToggle = new EventEmitter();

  form: FormGroup;
  expanded: boolean = false;

  constructor(private http: HttpClient) { }

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
    let html: string = '<strong>Перезвонить</strong>\n';
    for (let key in this.form.value) {
      html += `${this.form.value[key]}\n`;
    }
    const msg = encodeURI(html);
    this.http.post(`https://api.telegram.org/bot${this.telegramToken}/sendMessage?chat_id=${this.telegramChatId}&parse_mode=html&text=${msg}`, {})
      // TODO: Handle response/error
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
  }
}



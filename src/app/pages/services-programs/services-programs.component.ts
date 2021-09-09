import { Component, OnInit } from '@angular/core';
import { titleAnimation } from 'src/animations/title.animation';

@Component({
  selector: 'i-services-programs',
  templateUrl: './services-programs.component.html',
  styleUrls: ['./services-programs.component.scss'],
  animations: [titleAnimation]
})
export class ServicesProgramsComponent implements OnInit {
  programs: number[];
  activeProgram: number;

  constructor() { }

  ngOnInit(): void {
    this.programs = [1, 2, 3, 4]
  }

  selectProgram(id: number) {
    this.activeProgram = this.activeProgram == id ? null : id;
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

interface Period {
  start: Date;
  end: Date;
  result: Date;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  timeForm: FormGroup;
  periods: Period[] = [];
  totalHours: Date;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.timeForm = this.formBuilder.group({
      start: [null, [Validators.required]],
      end: [null, [Validators.required]]
    });
  }

  calculatePeriod(): void {
    if (this.timeForm.valid) {

      const startDate: Date = this.stringToDate(this.timeForm.value.start);
      const endDate: Date = this.stringToDate(this.timeForm.value.end);

      const time = this.calculateTime(endDate, startDate);

      this.periods.push({
        start: startDate,
        end: endDate,
        result: new Date(0, 0, 0, time.getHours(), time.getMinutes(), 0)
      });

      this.timeForm.reset();
      this.calculateTotalHours();
    }
  }

  calculateTime(endDate: Date, startDate: Date): Date {
    let diff = endDate.getTime() - startDate.getTime();
    const hours = Math.floor(diff / 1000 / 60 / 60);
    diff -= hours * 1000 * 60 * 60;
    const minutes = Math.floor(diff / 1000 / 60);
    return new Date(0, 0, 0, hours, minutes, 0);
  }

  stringToDate(value: string): Date {
    const hours: number = Number(value.split(':')[0]);
    const minutes: number = Number(value.split(':')[1]);
    return new Date(0, 0, 0, hours, minutes, 0);
  }

  calculateTotalHours(): void {
    let horas = 0;
    let minutos = 0;

    this.periods.forEach(p => {
      const time = this.calculateTime(p.end, p.start);
      horas += time.getHours();
      minutos += time.getMinutes();
    });

    this.totalHours = new Date(0, 0, 0, horas, minutos, 0);
  }

}

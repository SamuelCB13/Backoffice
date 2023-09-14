import { Component, inject } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-learnmore',
  templateUrl: './learnmore.component.html',
  styleUrls: ['./learnmore.component.scss']
})
export class LearnmoreComponent {
  private breakpointObserver = inject(BreakpointObserver);

}

import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [NgClass],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.scss',
})
export class FaqsComponent {
  activeQuestion: number | null = null;
  isAnswerVisible: boolean[] = [];

  onClick(index: number): void {
    if (this.activeQuestion === index) {
      // If the clicked question is already active, deactivate it
      this.activeQuestion = null;
      this.isAnswerVisible[index] = false;
    } else {
      // If the clicked question is not active, deactivate all questions and activate the clicked one
      this.activeQuestion = index;
      this.isAnswerVisible = this.isAnswerVisible.map(() => false);
      this.isAnswerVisible[index] = true;
    }
  }
}

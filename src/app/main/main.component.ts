import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  members: Array<{ nome: string; id: number; rec: number; prison: number }> = [
    {
      nome: 'Socram',
      id: 113858,
      rec: 0,
      prison: 0,
    },
    {
      nome: 'Lukas',
      id: 131269,
      rec: 0,
      prison: 0,
    },
    {
      nome: 'Davi lucas',
      id: 110963,
      rec: 0,
      prison: 0,
    },
  ];

  showForm = false;
  newMember = { nome: '', id: 0, rec: 0, prison: 0 };

  addMember() {
    this.members.push({ ...this.newMember });
    this.newMember = { nome: '', id: 0, rec: 0, prison: 0 };
    this.showForm = false;
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService, Member } from '../data.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  members: Member[] = []; // Move a declaração para fora do ngOnInit
  showForm = false;
  newMember: Member = { name: '', idMember: 0, rec: 0, prison: 0, period: '' }; // Corrigir para usar o tipo Member

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getMembers().subscribe((data) => {
      this.members = data;

      console.log(this.members);
    });
  }

  addMember() {
    this.members.push({ ...this.newMember });
    this.newMember = { name: '', idMember: 0, rec: 0, prison: 0, period: '' }; // Resetando para usar o tipo correto
    this.showForm = false;
  }
}

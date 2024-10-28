import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { DataService, Member } from '../data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-historical',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule],
  templateUrl: './historical.component.html',
  styleUrl: './historical.component.scss',
})
export class HistoricalComponent implements OnInit {
  members: Member[] = []; // Move a declaração para fora do ngOnInit
  showForm = false;
  newMember: Member = {
    name: '',
    idMember: 0,
    rec: 0,
    prison: 0,
    period: '',
    typeMember: '',
  }; // Corrigir para usar o tipo Member
  options: string[] = [];
  selectedOption: string | null = null;
  isOpen = false;
  // Create a Set to store unique periods
  uniquePeriods = new Set<string>();

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getMembers().subscribe((data) => {
      this.members = data;
      data.forEach(member => {
        this.uniquePeriods.add(member.period);
      });
      // Convert the Set back to an array if needed
      const uniquePeriodsArray = Array.from(this.uniquePeriods);
      this.options =  uniquePeriodsArray
      console.log('membros', this.members,uniquePeriodsArray);
    });
  }

  addMember() {
    this.members.push({ ...this.newMember });
    this.newMember = {
      name: '',
      idMember: 0,
      rec: 0,
      prison: 0,
      period: '',
      typeMember: '',
    }; // Resetando para usar o tipo correto
    this.showForm = false;
  }

  getClassGoal(rec: number): string {
    if (rec >= 25) {
      return 'color-green';
    } else if (rec >= 15 && rec < 25) {
      return 'color-yellow';
    } else {
      return 'color-red';
    }
  }

  getClassType(memberType: string): string {
    return `members-${memberType}`;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Member {
  name: string; // O nome é uma string
  idMember: number; // O idMember é um número
  rec: number; // O rec é um número
  prison: number; // O prison é um número
  period: string; // O period é uma string
  typeMember: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl: Member[] = [
    {
      name: '[CB|RT] HENRIQUE',
      idMember: 147054,
      rec: 24,
      prison: 50,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[SD|RT] MORENA SILVA',
      idMember: 190607,
      rec: 0,
      prison: 101,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[2°SGT|RT] Alex Gomes',
      idMember: 162495,
      rec: 1,
      prison: 1,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[CB|RT] Gustavo',
      idMember: 134970,
      rec: 7,
      prison: 42,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[CB|RT] Mineirinho',
      idMember: 25348,
      rec: 0,
      prison: 1,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[3°SGT|RT] Lukas silva',
      idMember: 131269,
      rec: 2,
      prison: 36,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[3°SGT|RT] Misto Quente',
      idMember: 53237,
      rec: 0,
      prison: 43,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[2ºTEN|RT] Jack Bauer',
      idMember: 119714,
      rec: 8,
      prison: 30,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[S.TEN|RT] Joao X.',
      idMember: 156899,
      rec: 0,
      prison: 38,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[S.TEN|RT] Faustinho',
      idMember: 147271,
      rec: 0,
      prison: 66,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[1°SGT|RT] Danilo',
      idMember: 90439,
      rec: 50,
      prison: 14,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[2°SGT|RT] Larissa X.',
      idMember: 12,
      rec: 26,
      prison: 50,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: '[2ºTEN|RT] Creusa S.',
      idMember: 131612,
      rec: 44,
      prison: 40,
      period: '06/10 a 12/10',
      typeMember: 'membro',
    },
    {
      name: 'DAVI LUCAS',
      idMember: 110963,
      rec: 15,
      prison: 23,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'Danilo',
      idMember: 90439,
      rec: 35,
      prison: 4,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'Faustinho',
      idMember: 147271,
      rec: 0,
      prison: 39,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'Joao Robin',
      idMember: 156899,
      rec: 7,
      prison: 70,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'creusa Ross',
      idMember: 131612,
      rec: 3,
      prison: 35,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'Jack Bauer',
      idMember: 119714,
      rec: 21,
      prison: 17,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'Misto Quente',
      idMember: 53237,
      rec: 2,
      prison: 29,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'MARCOS',
      idMember: 160800,
      rec: 2,
      prison: 20,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'MINEIRINHO',
      idMember: 25348,
      rec: 0,
      prison: 31,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'Samuel C.',
      idMember: 172247,
      rec: 2,
      prison: 98,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'Alex Gomes',
      idMember: 162495,
      rec: 0,
      prison: 22,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'Larissa X.',
      idMember: 12,
      rec: 0,
      prison: 102,
      period: '22/09 a 28/09',
      typeMember: 'membro',
    },
    {
      name: 'DAVI LUCAS',
      idMember: 110963,
      rec: 0,
      prison: 30,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Danilo',
      idMember: 90439,
      rec: 0,
      prison: 11,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Faustinho',
      idMember: 147271,
      rec: 0,
      prison: 33,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Joao Robin',
      idMember: 156899,
      rec: 0,
      prison: 29,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Creusa Ross',
      idMember: 131612,
      rec: 0,
      prison: 26,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Daniel',
      idMember: 64817,
      rec: 0,
      prison: 1,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Jack Bauer',
      idMember: 119714,
      rec: 0,
      prison: 9,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Misto Quente',
      idMember: 53237,
      rec: 0,
      prison: 25,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'PERES',
      idMember: 126014,
      rec: 0,
      prison: 18,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'MARCos',
      idMember: 160800,
      rec: 0,
      prison: 30,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'MINEIRINHO',
      idMember: 25348,
      rec: 0,
      prison: 25,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Brabus extreme',
      idMember: 166923,
      rec: 0,
      prison: 14,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Samuel C.',
      idMember: 172247,
      rec: 0,
      prison: 54,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Alex Gomes',
      idMember: 162495,
      rec: 0,
      prison: 13,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Larissa X.',
      idMember: 12,
      rec: 0,
      prison: 47,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'Cecilia',
      idMember: 454,
      rec: 0,
      prison: 11,
      period: '16/09 a 21/09',
      typeMember: 'membro',
    },
    {
      name: 'MINEIRINHO',
      idMember: 25348,
      rec: 0,
      prison: 5,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'Marcos',
      idMember: 160800,
      rec: 4,
      prison: 27,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'PERES',
      idMember: 126014,
      rec: 2,
      prison: 29,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'Misto Quente',
      idMember: 53237,
      rec: 4,
      prison: 25,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'Jack Bauer',
      idMember: 119714,
      rec: 28,
      prison: 18,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'DANIEL',
      idMember: 64817,
      rec: 0,
      prison: 7,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'Creusa Ross',
      idMember: 131612,
      rec: 5,
      prison: 47,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'Joao Robin',
      idMember: 156899,
      rec: 17,
      prison: 43,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'Faustinho',
      idMember: 147271,
      rec: 16,
      prison: 13,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'Danilo',
      idMember: 90439,
      rec: 12,
      prison: 15,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'DAVI LUCAS',
      idMember: 110963,
      rec: 16,
      prison: 17,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'TIO PAULO',
      idMember: 75757,
      rec: 16,
      prison: 7,
      period: '09/09 a 15/09',
      typeMember: 'membro',
    },
    {
      name: 'Marcos',
      idMember: 160800,
      rec: 21,
      prison: 7,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'PERES',
      idMember: 126014,
      rec: 0,
      prison: 33,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'Misto Quente',
      idMember: 53237,
      rec: 4,
      prison: 25,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'Jack Bauer',
      idMember: 119714,
      rec: 27,
      prison: 9,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'DANIEL',
      idMember: 64817,
      rec: 0,
      prison: 10,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'Creusa Ross',
      idMember: 131612,
      rec: 1,
      prison: 5,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'TIO PAULO',
      idMember: 75757,
      rec: 6,
      prison: 17,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'DAVI LUCAS',
      idMember: 110963,
      rec: 4,
      prison: 6,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'Danilo',
      idMember: 90439,
      rec: 6,
      prison: 5,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'Faustinho',
      idMember: 147271,
      rec: 24,
      prison: 15,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'Joao Robin',
      idMember: 156899,
      rec: 12,
      prison: 29,
      period: '02/08 a 08/09',
      typeMember: 'membro',
    },
    {
      name: 'TIO PAULO',
      idMember: 75757,
      rec: 14,
      prison: 9,
      period: '26/08 a 01/09',
      typeMember: 'membro',
    },
    {
      name: 'Faustinho',
      idMember: 147271,
      rec: 25,
      prison: 12,
      period: '26/08 a 01/09',
      typeMember: 'membro',
    },
    {
      name: 'Danilo',
      idMember: 90439,
      rec: 0,
      prison: 0,
      period: '26/08 a 01/09',
      typeMember: 'membro',
    },
    {
      name: 'DAVI LUCAS',
      idMember: 110963,
      rec: 0,
      prison: 0,
      period: '26/08 a 01/09',
      typeMember: 'membro',
    },
    {
      name: 'Joao Robin',
      idMember: 156899,
      rec: 9,
      prison: 7,
      period: '26/08 a 01/09',
      typeMember: 'membro',
    },
    {
      name: 'Jack Bauer',
      idMember: 119714,
      rec: 28,
      prison: 11,
      period: '26/08 a 01/09',
      typeMember: 'membro',
    },
    {
      name: 'Peres',
      idMember: 126014,
      rec: 1,
      prison: 9,
      period: '26/08 a 01/09',
      typeMember: 'membro',
    },
    {
      name: '[2ºTEN|RT] DAVI LUCAS',
      idMember: 110963,
      rec: 10,
      prison: 46,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[1°SGT|RT] Danilo',
      idMember: 90439,
      rec: 79,
      prison: 8,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[S.TEN|RT] Faustinho',
      idMember: 147271,
      rec: 0,
      prison: 62,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[2°SGT|RT] Lucas Junior',
      idMember: 39186,
      rec: 14,
      prison: 21,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[3°SGT|RT] João Pedro',
      idMember: 156639,
      rec: 1,
      prison: 104,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[3°SGT|RT] Lukas silva',
      idMember: 131269,
      rec: 3,
      prison: 108,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[CB|RT] Gustavo',
      idMember: 134970,
      rec: 1,
      prison: 21,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[SD|RT] MORENO SILVA',
      idMember: 164358,
      rec: 0,
      prison: 33,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[CB|RT] Josh M.',
      idMember: 134844,
      rec: 4,
      prison: 20,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[3°SGT|RT] Misto Quente',
      idMember: 53237,
      rec: 3,
      prison: 38,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[2ºTEN|RT] Jack Bauer',
      idMember: 119714,
      rec: 11,
      prison: 4,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[S.TEN|RT] Joao X.',
      idMember: 156899,
      rec: 0,
      prison: 17,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[1°SGT|RT] Marcos',
      idMember: 160800,
      rec: 0,
      prison: 17,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: 'MINEIRINHO',
      idMember: 25348,
      rec: 0,
      prison: 30,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: 'Samuel C.',
      idMember: 172247,
      rec: 0,
      prison: 54,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[2°SGT|RT] Alex Gomes',
      idMember: 162495,
      rec: 0,
      prison: 5,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
    {
      name: '[2°SGT|RT] Larissa X.',
      idMember: 12,
      rec: 1,
      prison: 53,
      period: '29/09 a 05/10',
      typeMember: 'membro',
    },
  ];

  private apiMembersNew: Member[] = [
    {
      name: '[1°TEN|PM] Lukas Silva',
      idMember: 131269,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[CAP|RT] Faustinho',
      idMember: 147271,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[S.TEN|RT] Raphael',
      idMember: 62,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[CAP|RT] Davi L.',
      idMember: 110963,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[1°SGT|RT] Misto Quente',
      idMember: 53237,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[1ºTEN|RT] João',
      idMember: 156899,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[CB|RT] Mineirinho BH',
      idMember: 25348,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[CB|RT] Ralf',
      idMember: 188707,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[SD|RT] Lima',
      idMember: 188644,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[SD|RT] alveszpedro',
      idMember: 192132,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[CB|RT] Marcio',
      idMember: 185900,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[CB|RT] Brabus extreme',
      idMember: 166923,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'membro',
    },
    {
      name: '[SD|RT] Gabriel Silva',
      idMember: 202708,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'estagiario',
    },
    {
      name: '[SD|RT] Doo Guedes',
      idMember: 45326,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'estagiario',
    },
    {
      name: '[SD|RT] tauan',
      idMember: 202387,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'estagiario',
    },
    {
      name: '[SD|RT] RAUAN WESLLEY',
      idMember: 202650,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'estagiario',
    },
    {
      name: '[CB|RT] Big Bigode',
      idMember: 56029,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'estagiario',
    },
    {
      name: '[SD|RT] Drey',
      idMember: 202141,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'estagiario',
    },
    {
      name: '[CB|RT] Alexander M',
      idMember: 196072,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'estagiario',
    },
    {
      name: '[CB|RT] Nathan F.',
      idMember: 192353,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'estagiario',
    },
    {
      name: '[3°SGT|RT] Allan M.',
      idMember: 183701,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'estagiario',
    },
    {
      name: '[SD|RT] Silva',
      idMember: 181415,
      rec: 0,
      prison: 0,
      period: '27/10 a 02/11',
      typeMember: 'estagiario',
    },
  ];

  constructor() {}

  // Método para enviar o array
  getMembers() {
    return of(this.apiUrl); // Envia o array como um Observable
  }

  // Método para enviar o array
  getMembersNews() {
    return of(this.apiMembersNew); // Envia o array como um Observable
  }
}

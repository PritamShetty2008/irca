import { Component } from '@angular/core';
import axios from 'axios';
@Component({
  selector: 'app-medical-history',
  templateUrl: './medical-history.component.html',
  styleUrl: './medical-history.component.css',
})
export class MedicalHistoryComponent {
  name: string = ' ';
  age = ' ';
  registration = ' ';
  ageof = ' ';
  yearsof = ' ';
  excessive = '';
  route = '';
  frequency = '';
  quantity = '';
  past = '';

  ageof1 = '';
  yearsof1 = '';
  excessive1 = '';
  route1 = '';
  frequency1 = '';
  quantity1 = '';
  past1 = '';

  ageof2 = '';
  yearsof2 = '';
  excessive2 = '';
  route2 = '';
  frequency2 = '';
  quantity2 = '';
  past2 = '';

  ageof3 = '';
  yearsof3 = '';
  excessive3 = '';
  route3 = '';
  frequency3 = '';
  quantity3 = '';
  past3 = '';

  ageof4 = '';
  yearsof4 = '';
  excessive4 = '';
  route4 = '';
  frequency4 = '';
  quantity4 = '';
  past4 = '';

  ageof5 = '';
  yearsof5 = '';
  excessive5 = '';
  route5 = '';
  frequency5 = '';
  quantity5 = '';
  past5 = '';
  selectedDrug: string = '';
  specificTypes: string[] = [];
  selectedSpecificType = '';
  selectedDrug1: string = '';
  specificTypes1: string[] = [];
  selectedSpecificType1 = '';
  selectedDrug2: string = '';
  specificTypes2: string[] = [];
  selectedSpecificType2 = '';
  selectedDrug3: string = '';
  specificTypes3: string[] = [];
  selectedSpecificType3 = '';
  selectedDrug4: string = '';
  specificTypes4: string[] = [];
  selectedSpecificType4 = '';
  selectedDrug5: string = '';
  specificTypes5: string[] = [];
  selectedSpecificType5 = '';
  drugTypes: any = {
    Alcohol: ['Vodka', 'Tequila', 'Bacardi'],
    Tranquilizers: ['Diazepam', 'Lorazepam', 'Klonopin'],
    Sedatives: ['Bnezodizepine', 'Barbiturates', 'Diazepam'],
    Tobacco: ['FCV', 'Bidi', 'Cigar'],
    Panmasala: ['Teju', 'BetelNut', 'Sweet'],
  };

  updateSpecificTypes(): void {
    this.specificTypes = this.drugTypes[this.selectedDrug] || [];
  }
  drugTypes1: any = {
    Opium: ['Morphine', 'Codine', 'Oxycodone'],
    Heroin: ['Brown', 'Black', 'White'],
    Morphine: ['Sevredol', 'Oromorph'],
    Codeine: ['Airacof', 'Ambenyl'],
    Pentazocine: ['Fortral', 'Sesagone'],
  };

  updateSpecificTypes1(): void {
    this.specificTypes1 = this.drugTypes1[this.selectedDrug1] || [];
  }
  drugTypes2: any = {
    'Ganja/Charas': ['Sativa', 'Ruderalis'],
    Bhang: ['Sativa', 'Indica', 'Hybrid'],
  };

  updateSpecificTypes2(): void {
    this.specificTypes2 = this.drugTypes2[this.selectedDrug2] || [];
  }
  drugTypes3: any = {
    LSD: ['LSDLiquid', 'PureLsd25'],
    PCP: ['PCPLiquid', 'PCD pills'],
  };

  updateSpecificTypes3(): void {
    this.specificTypes3 = this.drugTypes3[this.selectedDrug3] || [];
  }
  drugTypes4: any = {
    Petrol: ['87 octane', '91 octane', '87 + hppower'],
    Glue: ['Epoxy', 'Hot-glue', 'Wood-glue'],
    Whitener: ['LED', 'strips', 'pens'],
    Grease: ['Lithium', 'Calcium', 'Aluminium', 'polyurea'],
    Thinner: ['Acetone', 'Methyl Ethyl ketone', 'Toluene'],
    NaiPolish: ['Dip-powder', 'Gel-nailpolish', 'Essie'],
  };

  updateSpecificTypes4(): void {
    this.specificTypes4 = this.drugTypes4[this.selectedDrug4] || [];
  }
  drugTypes5: any = {
    Cough: ['Antitussives', 'expectorants'],
    AntiHistemine: ['Zyrtec', 'Loratadine'],
    AntiDepressant: ['Seartive', 'Tricyclics', 'Monoamine'],
    AntiPsychotic: ['Clozapine', 'olanzapine', 'Risperidone'],
    Smoking: ['Cigars', 'Hookah', 'Snuff'],
    Chewing: ['Khat', 'Tobacco'],
  };
  updateSpecificTypes5(): void {
    this.specificTypes5 = this.drugTypes5[this.selectedDrug5] || [];
  }
  submitForm(): void {
    const body = {
      name: this.name,
      age: this.age,
      registration: this.registration,
      selectedDrug: this.selectedDrug,
      ageof: this.ageof,
      // yearsof: this.yearsof,
      // excessive: this.excessive,
      // selectSpecificType: this.selectedSpecificType,
      // route: this.route,
      // frequency: this.frequency,
      // quantity: this.quantity,
      // past: this.past,

      // selectedDrug1: this.selectedDrug1,
      // ageof1: this.ageof1,
      // yearsof1: this.yearsof1,
      // excessive1: this.excessive1,
      // selectSpecificType1: this.selectedSpecificType1,
      // route1: this.route1,
      // frequency1: this.frequency1,
      // quantity1: this.quantity1,
      // past1: this.past1,

      // selectedDrug2: this.selectedDrug2,
      // ageof2: this.ageof2,
      // yearsof2: this.yearsof2,
      // excessive2: this.excessive2,
      // selectSpecificType2: this.selectedSpecificType2,
      // route2: this.route2,
      // frequency2: this.frequency2,
      // quantity2: this.quantity2,
      // past2: this.past2,

      // selectedDrug3: this.selectedDrug3,
      // ageof3: this.ageof3,
      // yearsof3: this.yearsof3,
      // excessive3: this.excessive3,
      // selectSpecificType3: this.selectedSpecificType3,
      // route3: this.route3,
      // frequency3: this.frequency3,
      // quantity3: this.quantity3,
      // past3: this.past3,
    };

    /*selectedDrug4: this.selectedDrug4,
      ageof4: this.ageof4,
      yearsof4: this.yearsof4,
      excessive4: this.excessive4,
      selectSpecificType4: this.selectedSpecificType4,
      route4: this.route4,
      frequency4: this.frequency4,
      quantity4: this.quantity4,
      past4: this.past4,

      selectedDrug5: this.selectedDrug5,
      ageof5: this.ageof5,
      yearsof5: this.yearsof5,
      excessive5: this.excessive5,
      selectSpecificType5: this.selectedSpecificType5,
      route5: this.route5,
      frequency5: this.frequency5,
      quantity5: this.quantity5,
      past5: this.past5,*/

    console.log(body);
    console.log('form submitted succesfully');
    axios.post('http://localhost:3000/medical-history', body).then((res) => {
      console.log(res);
    });
  }
  printPage() {
    window.print();
  }
}

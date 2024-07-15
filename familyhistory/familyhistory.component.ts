// family-history.component.ts
import { Component } from '@angular/core';
import axios from 'axios';

interface FamilyMember {
  relationship: string;
  education: string;
  age: number | null; // Change here to allow null values
  occupation: string;
}

interface FamilyDetails {
  father: {
    name: string;
    age: number | null;
    occupation: string;
    income: number | null;
  };
  mother: {
    name: string;
    age: number | null;
    occupation: string;
    income: number | null;
  };
}
interface Situation {
  present: boolean;
  absent: boolean;
}

@Component({
  selector: 'app-familyhistory',
  templateUrl: './familyhistory.component.html',
  styleUrls: ['./familyhistory.component.css'],
})
export class FamilyhistoryComponent {
  mildDamage: string = '';
  moderateDamage: string = '';
  severeDamage: string = '';

  noFamilyDeadParent: boolean = false;
  noFamilyDeadSibling: boolean = false;
  noFamilyDeadSpouse: boolean = false;
  noFamilyDeadChildren: boolean = false;

  noFamilyDead2: boolean = false;
  noFamilyDead3: boolean = false;
  noFamilyDead4: boolean = false;
  noFamilyDead5: boolean = false;
  noFamilyDead6: boolean = false;
  noFamilyDead7: boolean = false;
  noFamilyDead8: boolean = false;
  noFamilyDead9: boolean = false;
  noFamilyDead10: boolean = false;
  noFamilyDead11: boolean = false;
  noFamilyDead12: boolean = false;
  noFamilyDead13: boolean = false;
  noFamilyDead14: string = '';
  noFamilyDead15: string = '';

  suicideParents: boolean = false;
  suicideRelationshipParents: string = '';
  suicideNoParents: boolean = false;
  suicideDontKnowParents: string = '';
  suicideChildren: boolean = false;
  suicideRelationshipChildren: string = '';
  suicideNoChildren: boolean = false;
  suicideDontKnowChildren: string = '';

  // Psychiatric Illnesses
  psychiatricParents: boolean = false;
  psychiatricRelationshipParents: string = '';
  psychiatricNoParents: boolean = false;
  psychiatricDontKnowParents: string = '';
  psychiatricChildren: boolean = false;
  psychiatricRelationshipChildren: string = '';
  psychiatricNoChildren: boolean = false;
  psychiatricDontKnowChildren: string = '';

  // Alcohol dependence
  alcoholDependenceParents: boolean = false;
  alcoholDependenceRelationshipParents: string = '';
  alcoholDependenceNoParents: boolean = false;
  alcoholDependenceDontKnowParents: string = '';
  alcoholDependenceChildren: boolean = false;
  alcoholDependenceRelationshipChildren: string = '';
  alcoholDependenceNoChildren: boolean = false;
  alcoholDependenceDontKnowChildren: string = '';

  drugParents: boolean = false;
  drugRelationshipParents: string = '';
  drugNoParents: boolean = false;
  drugDontKnowParents: string = '';
  drugChildren: boolean = false;
  drugRelationshipChildren: string = '';
  drugNoChildren: boolean = false;
  drugDontKnowChildren: string = '';

  anyParents: boolean = false;
  anyRelationshipParents: string = '';
  anyNoParents: boolean = false;
  anyDontKnowParents: string = '';
  anyChildren: boolean = false;
  anyRelationshipChildren: string = '';
  anyNoChildren: boolean = false;
  anyDontKnowChildren: string = '';

  poverty: String = 'absent';
  parentalLoss: String = 'absent';
  affairs: String = 'absent';
  brokenHome: String = 'absent';
  violence: String = 'absent';
  sexualityAbuse: String = 'absent';
  none: String = 'absent';
  anyOther: String = 'absent';

  runningAway: string = '';
  physicalFights: string = '';
  propertyDestruction: string = '';
  stealing: string = '';
  scholasticBackwardness: string = '';
  drugAlcoholExperiment: string = '';
  gambling: string = '';
  otherBehaviour: string = '';

  familyMembers: FamilyMember[] = [
    {
      relationship: 'Select Relationship',
      education: 'Select Education',
      age: 0,
      occupation: 'Select Occupation',
    },
  ];

  familyDetails: FamilyDetails = {
    father: { name: '', age: null, occupation: '', income: null },
    mother: { name: '', age: null, occupation: '', income: null },
  };

  fatherDeath = { yes: false, age: null };
  motherDeath = { yes: false, age: null };

  addSibling() {
    const lastSibling = this.familyMembers[this.familyMembers.length - 1];

    if (
      lastSibling.relationship !== '' &&
      lastSibling.education !== '' &&
      lastSibling.age !== null &&
      lastSibling.occupation !== ''
    ) {
      this.familyMembers.push({
        relationship: '',
        education: '',
        age: null,
        occupation: '',
      });
    } else {
      console.log('Please fill in all the fields for the previous sibling.');
    }
  }

  priorTreatment = [
    {
      year: new Date(),
      place: '',
      treatmentPeriod: 0,
      sobrietyPeriod: 0,
      sobrietyReason: '',
      relapseReason: '',
    },
  ];

  placesOfTreatment = [
    'Hubli',
    'Bangalore',
    'Mysore',
    'Chennai',
    'Mumbai',
    'Delhi',
    'Other',
  ];

  sobrietyReasons = [
    'Select Reason',
    'Health and Well-being',
    'Relationships',
    'Work and Productivity',
    'Legal Consequences',
    'Financial Stability',
    'Emotional Stability',
    'Personal Growth',
  ];

  relapseReasons = [...this.sobrietyReasons];

  addTreatment() {
    const lastTreatment = this.priorTreatment[this.priorTreatment.length - 1];

    if (
      lastTreatment.year &&
      lastTreatment.place &&
      lastTreatment.treatmentPeriod !== null &&
      lastTreatment.sobrietyPeriod !== null &&
      lastTreatment.sobrietyReason &&
      lastTreatment.relapseReason
    ) {
      this.priorTreatment.push({
        year: new Date(),
        place: '',
        treatmentPeriod: 0,
        sobrietyPeriod: 0,
        sobrietyReason: '',
        relapseReason: '',
      });
    } else {
      console.log('Please fill in all the fields for the previous treatment.');
    }
  }
  validateInputs(): boolean {
    if (
      !this.familyDetails.father.name ||
      !this.familyDetails.father.age ||
      !this.mildDamage ||
      !this.moderateDamage ||
      !this.severeDamage
    ) {
      alert('Please fill in all the required fields.');
      return false;
    }
    return true;
  }

  submitForm(): void {
    if (this.validateInputs()) {
      const body = {
        fatherName: this.familyDetails.father.name,
        fatherAge: this.familyDetails.father.age,
        fatherOccupation: this.familyDetails.father.occupation,
        fatherIncome: this.familyDetails.father.income,
        motherName: this.familyDetails.mother.name,
        motherAge: this.familyDetails.mother.age,
        motherOccupation: this.familyDetails.mother.occupation,
        motherIncome: this.familyDetails.mother.income,
        fatherDeath: this.fatherDeath.yes,
        motherDeath: this.motherDeath.yes,
        fatherDeathAge: this.fatherDeath.age,
        motherDeathAge: this.motherDeath.age,
        siblingList: this.familyMembers,
        poverty: this.poverty === 'present',
        earlyParentalLoss: this.parentalLoss === 'present',
        extraMarital: this.affairs === 'present',
        brokenHome: this.brokenHome === 'present',
        violence: this.violence === 'present',
        sexuality: this.sexualityAbuse === 'present',
        none: this.none === 'present',
        anyOtherSituation: this.anyOther === 'present',
        runningAway: this.runningAway === 'present',
        frequentFights: this.physicalFights === 'present',
        destructionOfProperty: this.propertyDestruction === 'present',
        stealing: this.stealing === 'present',
        scholasticBackwardness: this.scholasticBackwardness === 'present',
        experimentingDrugs: this.drugAlcoholExperiment === 'present',
        gambling: this.gambling === 'present',
        anyOtherBehaviour: this.otherBehaviour === 'present',
        priorList: this.priorTreatment,
      };
      console.log(body);
      console.log(body.poverty);

      console.log('Form submitted successfully!');
      // Add logic for form submission
      axios.post('http://localhost:3000/family-history', body).then((res) => {
        console.log(res);
      });
    }
  }
  printPage() {
    window.print();
  }
}

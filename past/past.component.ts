import { Component } from '@angular/core';
import axios from 'axios';

interface TreatmentRecord {
  serialNumber: number;
  name: string;
  pId: string;
  year: string;
  placeOfTreatment: string;
  sobrietyPeriod: string;
  treatmentPeriod: string;
  reasonOfRelapse: string;
  reasonOfSobriety: string;
}
@Component({
  selector: 'app-past',
  templateUrl: './past.component.html',
  styleUrl: './past.component.css',
})
export class PastComponent {
  treatmentRecords: TreatmentRecord[] = [];
  saveToFile() {
    // Validate each column before saving
    for (let record of this.treatmentRecords) {
      // Validation for Name
      if (!record.name) {
        alert('Please fill in the Name column for all records before saving.');
        return; // Stop further processing if validation fails
      }

      // Validation for P_ID
      if (!record.pId) {
        alert('Please fill in the P_ID column for all records before saving.');
        return;
      }

      // Validation for Year
      if (!record.year) {
        alert(
          'Please select a value for the Year column for all records before saving.'
        );
        return;
      }

      // Validation for Place of Treatment
      if (!record.placeOfTreatment) {
        alert(
          'Please select a value for the Place of Treatment column for all records before saving.'
        );
        return;
      }

      if (!record.sobrietyPeriod) {
        alert(
          'Please select a value for the Place of Treatment column for all records before saving.'
        );
        return;
      }

      if (!record.treatmentPeriod) {
        alert(
          'Please select a value for the Place of Treatment column for all records before saving.'
        );
        return;
      }

      // Validation for Reason of Relapse
      if (!record.reasonOfRelapse) {
        alert(
          'Please select a value for the Reason of Relapse column for all records before saving.'
        );
        return;
      }

      // Validation for Reason of Sobriety
      if (!record.reasonOfSobriety) {
        alert(
          'Please select a value for the Reason of Sobriety column for all records before saving.'
        );
        return;
      }
    }

    // If all validations pass, proceed with saving to file
    alert('The file is saved');
    console.log('Saving to file...');
  }

  deleteRow(index: number): void {
    if (confirm('Are you sure you want to delete this row?')) {
      this.treatmentRecords.splice(index, 1);
    }
  }

  addRow() {
    const newRecord: TreatmentRecord = {
      serialNumber: this.treatmentRecords.length + 1,
      name: '',
      pId: '',
      year: '',
      placeOfTreatment: '',
      sobrietyPeriod: '',
      treatmentPeriod: '',
      reasonOfRelapse: '',
      reasonOfSobriety: '',
    };

    this.treatmentRecords.push(newRecord);
  }

  submitForm(): void {
    const body = {
      treatmentRecords: this.treatmentRecords,
    };
    console.log(body);
    console.log('form submitted succesfully');
    // axios.post('http://localhost:3000/past', body).then((res) => {
    //   console.log(res);
    // });
  }
}

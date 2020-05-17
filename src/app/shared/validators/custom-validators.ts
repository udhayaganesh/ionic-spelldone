import { FormControl, FormGroup, AbstractControl, ValidatorFn } from "@angular/forms";

export class CustomValidators {

  static areEqual(formGroup: FormGroup): { NotEqual: boolean } {
    let value;
    let valid = true;
    for (let key in formGroup.controls) {
      if (formGroup.controls.hasOwnProperty(key)) {
        let control: FormControl = <FormControl>formGroup.controls[key];

        if (value === undefined) {
          value = control.value
        } else {
          if (value !== control.value) {
            valid = false;
            break;
          }
        }
      }
    }

    if (valid) {
      formGroup.controls['confirmPassword'].setErrors(null);
      return null;
    } else {
      formGroup.controls['confirmPassword'].setErrors({ NotEqual: true });
      return { NotEqual: true };
    }

  }

  static validDate(formGroup: FormGroup): { inValid: boolean } {
    let month = formGroup.controls.creditCardExpirationMonth.value;
    let year = formGroup.controls.creditCardExpirationYear.value;
    if (!month || !year) {
      return null;
    }
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth();
    if (Number(year) == currentYear) {
      if (Number(month) < currentMonth+1) {
        formGroup.controls['creditCardExpirationMonth'].setErrors({ inValid: true });
        return { inValid: true };
      }
    }
    formGroup.controls['creditCardExpirationMonth'].setErrors(null);
    return null;
  }


}

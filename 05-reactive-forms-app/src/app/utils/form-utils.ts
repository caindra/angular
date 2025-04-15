import { FormGroup, FormArray, ValidationErrors, AbstractControl } from '@angular/forms';
export class FormUtils {
  //RegEx
  static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
  static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';
  static strongPasswordRegex =
    '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$/';

  static getTextError(errors: ValidationErrors) {
    for (const key of Object.keys(errors)) {
      switch (key) {
        case 'required':
          return 'Este campo es requerido.';
        case 'minlength':
          return `Mínimo de ${errors['minlength'].requiredLength} carateres.`;
        case 'min':
          return `Valor mínimo de ${errors['min'].min} carateres.`;
        case 'email':
          return `El valor ingresado no es un correo electrónico.`;
        case 'pattern':
          if (errors['pattern'].requiredPattern === this.emailPattern) {
            return 'El correo electrónico no es permitido';
          }
          return 'Error de patrón contra expresión regular';
        default:
          return 'Error no controlado';
      }
    }
    return null;
  }

  static isValidField(form: FormGroup, fieldName: string): boolean | null {
    return (
      !!form.controls[fieldName].errors && form.controls[fieldName].touched
    );
  }

  static getFieldError(form: FormGroup, fieldName: string): string | null {
    if (!form.controls[fieldName]) return null;

    const errors = form.controls[fieldName].errors ?? {};

    return this.getTextError(errors);
  }

  static isValidFieldinArray(formArray: FormArray, index: number) {
    return (
      formArray.controls[index].errors && formArray.controls[index].touched
    );
  }

  static getFieldErrorInArray(
    formArray: FormArray,
    index: number
  ): string | null {
    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index].errors ?? {};

    return this.getTextError(errors);
  }

  static isFieldOneEqualFieldTwo(field1: string, field2: string) {
    return (FormGroup: AbstractControl) => {
      const field1Value = FormGroup.get(field1)?.value;
      const field2Value = FormGroup.get(field2)?.value;

      return field1Value === field2Value ? null : { passwordNotEqual: true };
    };
  }
}

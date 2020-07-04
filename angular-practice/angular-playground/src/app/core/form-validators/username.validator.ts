import { ValidatorFn, AbstractControl } from '@angular/forms';

function Username(): ValidatorFn {
    const noSpaceBothEnd = /^(?!\s).*\S$/;
    const usernamePattern = /^[a-z\sA-Z]*$/;

    return (control: AbstractControl): any => {
        if (!control.value) {
            return null;
        }

        const username = {
            validateNoSpaceBothEnd: !noSpaceBothEnd.test(control.value),
            validatePattern: !usernamePattern.test(control.value)
        };

        if (!username.validateNoSpaceBothEnd && !username.validatePattern) {
            return null;
        } else {
            return username;
        }
    };
}
export { Username };

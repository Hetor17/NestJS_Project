import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateuserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    // console.log(value);        // [Object: null prototype] { name: 'Héctor' }
    // console.log({ ...value }); // { name: 'Héctor' }
    console.log('value', {...value});

    // We convert age to a string to safely parse it as a number
    const ageNumber = parseInt(value.age.toString(), 10);

    // Verifies if ageNumber is Not a Number (isNaN)
    if (isNaN(ageNumber)) {
      // If is Not a Number throws an error
      throw new HttpException('Age must be a number', HttpStatus.BAD_REQUEST)
    }

    return {...value, age: ageNumber};
  }
}
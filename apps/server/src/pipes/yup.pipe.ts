import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { BaseSchema, ValidationError } from 'yup';

@Injectable()
export class YupValidationPipe implements PipeTransform {
  constructor(private schema: BaseSchema, private includeMessages = true) {}

  async transform(value: any) {
    try {
      this.schema.validateSync(value, {
        abortEarly: false,
      });
    } catch (error) {
      throw new BadRequestException(
        this.includeMessages ? this.parseValidationErrors(error) : null,
      );
    }

    return value;
  }

  private parseValidationErrors(error: ValidationError) {
    return error.inner.map(({ path, message }) => ({
      path,
      message,
    }));
  }
}

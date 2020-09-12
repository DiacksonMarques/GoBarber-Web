import { ValidationError } from 'yup';

interface ValidationErrors {
  [key: string]: string;
}

export default function getValidationErrors(
  erro: ValidationError,
): ValidationErrors {
  const validationErrors: ValidationErrors = {};

  erro.inner.forEach(error => {
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}

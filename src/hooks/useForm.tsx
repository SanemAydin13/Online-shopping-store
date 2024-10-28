import { useState } from 'react';

// Define the types for the form data and error messages
interface FormState<T> {
  values: T;
  errors: Partial<T>;
}

export function useForm<T>(initialValues: T, validate: (values: T) => Partial<T>) {
  const [formState, setFormState] = useState<FormState<T>>({
    values: initialValues,
    errors: {}
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value
      }
    }));
  };

  const handleSubmit = (onSubmit: (values: T) => void) => (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = validate(formState.values);
    if (Object.keys(errors).length === 0) {
      onSubmit(formState.values);
    } else {
      setFormState(prevState => ({ ...prevState, errors }));
    }
  };

  return {
    formState,
    handleChange,
    handleSubmit,
  };
}

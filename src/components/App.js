import React from 'react';
import Form from './Form';

const fields = [
  { name: 'name', type: 'text', label: 'Name' },
  { name: 'email', type: 'email', label: 'Email' },
  { name: 'password', type: 'password', label: 'Password' },
];

const App = () => {
  const handleSubmit = (formValues) => {
    console.log(formValues);
    // Handle form submission logic here
  };

  return (
    <div>
      <h1>Form Example</h1>
      <Form fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};

export default App;

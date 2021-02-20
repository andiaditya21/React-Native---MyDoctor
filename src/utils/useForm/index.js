import {useState} from 'react';

export const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);
  // mengembalikan rincian nilai values & setValues. setValues akan mendapatkan input 'formType' & formValue'
  return [
    values,
    (formType, formValue) => {
      // jika formType = 'reset', maka aka mengembalikan ke nilai state awal
      if (formType === 'reset') {
        return setValues(initialValue);
      }
      // defaultnya setValues mengubah values berdasarlam 'formType' & data 'formValue'nya
      return setValues({...values, [formType]: formValue});
    },
  ];
};

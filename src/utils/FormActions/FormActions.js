export const Validation = (key, state) => {
  let isValid = true;
  let updatedForm = {
    ...state.formData,
    [key]: {
      ...state.formData[key],
    },
  };

  let rules = updatedForm[key].rules;
  let value = updatedForm[key].value;

  if (rules.required) {
    isValid = value.trim() !== '' && isValid;
  }

  if (rules.minLength) {
    isValid = value.length >= rules.minLength && isValid;
  }

  if (rules.maxLength) {
    isValid = value.length <= rules.maxLength && isValid;
  }

  if (rules.isEmail) {
    const pattern = /^\S+@\S+(\.\S+)$/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isDob) {
    const pattern = /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(value) && isValid;
  }
  if (rules.confirmPassword) {
    const match = value === state.formData.password.value;
    isValid = match && isValid;
  }

  let completeFormShouldBeValid = true;
  updatedForm[key].isValid = isValid;
  for (let id in updatedForm) {
    completeFormShouldBeValid = !!(
      updatedForm[id].isValid &&
      //updatedForm['first_name'].touched &&

      isValid
    );
  }

  return {
    formData: updatedForm,
    completeFormValidity: completeFormShouldBeValid,
  };
};

export const HandleChange = (key, text, state) => {
  let updatedForm = {
    ...state.formData,
    [key]: {
      ...state.formData[key],
      value: text,
      touched: true,
      //isValid: true,
    },
  };

  //   let completeFormShouldBeValid = true;
  //   for (let id in updatedForm) {
  //     completeFormShouldBeValid = !!(
  //       updatedForm[id].isValid && updatedForm[id].touched
  //     );
  //   }
  return {
    formData: updatedForm,
    //completeFormValidity: completeFormShouldBeValid,
  };
};

export const AddSelectOptions = (data, state, category) => {
  let updatedFormData = {...state.formData};
  let newOptions = [...state.formData[category].elementConfig.option];

  data.forEach(item =>
    newOptions.push({value: item._id, displayValue: item.name}),
  );

  updatedFormData[category].elementConfig.option = newOptions;

  return {formData: updatedFormData};
};

export const ClearFields = state => {
  let updatedFormData = {...state.formData};
  for (let key in updatedFormData) {
    if (key === 'images') {
      updatedFormData[key].value = [];
    }
    updatedFormData[key].value = '';
  }
  return {
    formData: updatedFormData,
    completeFormValidity: false,
    succfromServer: true,
  };
};
export const UpdatePickerOption = (state, key, data, itemName, id) => {
  let updatedFormData = {...state.formData};
  let newOptions = [...state.formData[key].option];
  data.forEach((item, i) => {
    updatedFormData[key].option.push({
      value: item._id,
      displayValue: item[itemName].toUpperCase(),
    });
  });
  return {
    formData: updatedFormData,
  };
};

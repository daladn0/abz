export const validateUsername = (value) => {
  if (!value) {
    return "Enter your name";
  }

  if (value.length < 2) {
    return "Your name should have at least two chars";
  }

  if (value.length > 60) {
    return "Your name cant have more than 60 chars";
  }

  return true;
};

export const validateEmail = (value) => {
  if (!value) {
    return "Email is required";
  }

  const regex =
    //  eslint-disable-next-line no-control-regex
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
  if (!regex.test(value)) {
    return "Invalid email";
  }

  return true;
};

export const validatePhone = (value) => {
  if (!value) {
    return "Phone is required";
  }

  if (value.length > 10) {
    return "Invalid phone number";
  }

  // eslint-disable-next-line no-useless-escape
  const regex = /^([0-9]{10})$/;
  if (!regex.test(value)) {
    return "Invalid phone number";
  }

  return true;
};

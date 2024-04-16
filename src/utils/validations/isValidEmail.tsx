const isValidEmail = (email: string) => {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/; // regex link: https://regexr.com/3e48o

  return regex.test(email);
};

export default isValidEmail;

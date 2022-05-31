const verifyNumber = (
  secret: Number | String,
  number: String | null | Number
): boolean => {
  const parse = Number(number);

  if (parse === secret) {
    return true;
  }

  return false;
};

export default verifyNumber;

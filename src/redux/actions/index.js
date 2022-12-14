export const EMAIL_USER = 'EMAIL_USER';

export const userAction = (email) => ({
  type: EMAIL_USER,
  payload: email,
});

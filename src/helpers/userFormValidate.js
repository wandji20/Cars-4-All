const validateUserInfo = (values) => {
  const errors = {};
  if (values.first.length === '') {
    errors.first = 'First Name is Required';
  } else if (values.first.length < 3) {
    errors.first = 'First name needs to be 3 characters or more';
  } else if (values.first.length > 20) {
    errors.first = 'First name needs to be less than 20 characters';
  }
  return errors;
};

export default validateUserInfo;

// validates :first_name, :last_name, :user_name, :telephone, presence: true
//   validates :user_name, uniqueness: true, length: { in: 3..20 }
//   validates :password, :password_confirmation, presence: true, length: { in: 6..50 }, on: :create

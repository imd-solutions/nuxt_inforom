import Transformer from './Transformer';

export default class AuthTransformer extends Transformer {
  static fetch(account) {
    return {
      email: account.email,
      firstName: account.first_name,
      lastName: account.last_name,
    };
  }

  static send(account) {
    return {
      email: account.email,
      first_name: account.firstName,
      last_name: account.lastName,
    };
  }
}

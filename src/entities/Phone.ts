import { PhoneM } from '../models/people';

export class Phone implements PhoneM {
  public readonly phone: object;

  constructor(data: PhoneM) {
    this.phone = data.phone;
  }
}

import { PersonM } from '../models/people';
import { School } from './school';
import { Phone } from './Phone';

export class Person implements PersonM {
  public readonly first_name: string;
  public readonly id: number;
  public readonly job: string;
  public readonly last_name: string;
  public readonly school: School;
  public readonly phone: Phone;
  public readonly company: string;

  constructor(data: PersonM) {
    this.first_name = data.first_name;
    this.id = data.id;
    this.job = data.job;
    this.last_name = data.last_name;
    this.school = new School(data.school);
    this.phone = new Phone(data.phone);
    this.company = data.company;
  }
}

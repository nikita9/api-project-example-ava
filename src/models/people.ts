export interface PersonM {
  readonly id: number;
  readonly first_name: string;
  readonly last_name: string;
  readonly job: string;
  readonly school: SchoolM;
  readonly phone: any;
  readonly company: string;
}

export interface SchoolM {
  readonly country: string;
  readonly city: string;
  readonly state_zip: string;
}

export interface PhoneM {
  readonly phone: object;
}

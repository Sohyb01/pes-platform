// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type CoreUser = {
  id: string;
  nid: string;
  family_id?: string; //FK
  //
  name: string;
  gender: string;
  date_of_birth: string;
  parent_name: string;
  //
  email: string;
  mobile_number: string;
  whatsapp_number: string;
  address: string;
  //
  religion?: string;
  blood_group?: "A+" | "A-" | "B+" | "B-" | "O+" | "O-" | "AB+" | "AB";
  diseases?: string;
  //
  date_of_join: string;
  is_active: string;
  promo_code?: string;
  referral_code?: string;
  //
  theme?: string;
  image?: string;
  timezone?: string;
  language?: string;
  //
  password: string;
};

export type Employee = CoreUser & {
  salary: number;
  experience: string;
  education: string;
  role: string;
};

export type Student = CoreUser & {
  discount: string;
  siblings: Student[];
  notes: string;
  registration_num: string;
  previous_school: string;
  has_laptop: boolean;
  is_orphan: boolean;
};

export type Parent = CoreUser & {
  education: string;
  profession: string;
  occupation: string;
  monthly_income: string;
  children: Student[];
};

export type exampleObject = {
  one: string;
  two: string;
  three: number;
  four: string;
  five: number;
};

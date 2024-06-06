export interface Profile {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const profile: Profile = {
  id: 22,
  name: 'Michael Gee',
  username: 'michael-gee',
  email: 'example@email.com',
  address: {
    street: '2222 Example Street',
    suite: '22',
    city: 'Example City',
    zipcode: '22222-2222',
    geo: {
      lat: '22.2222',
      lng: '22.2222'
    }
  },
  phone: '222-222-2222',
  website: 'example.com',
  company: {
    name: 'Example Company',
    catchPhrase: 'Example catch phrase',
    bs: 'Example bs'
  }
};

export const users = [profile, profile, profile, profile, profile];

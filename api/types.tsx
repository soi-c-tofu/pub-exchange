export interface PubLocation {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postcode: string;
  coordinate: Coordinate;
  distance?: number;
}

export interface Coordinate {
  latitude: number;
  longitude: number;
}

export interface Menu {
  breakfasts: MenuItem[];
  drinks: MenuItem[];
  main: MenuItem[];
  sides: MenuItem[];
  starters: MenuItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  imageSrc?: string;
}

export interface User {
  email: string;
}

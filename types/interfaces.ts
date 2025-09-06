export interface Property {
  id: number;
  name: string;
  image: string;
  price: number;
  location: string;
  rating: number;
  description?: string;
  amenities?: string[];
  reviews?: Review[];
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  checkInDate: string;
  checkOutDate: string;
  guests: number;
}

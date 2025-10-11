import { AddressType, UserRole } from "@/utils/constants/enums";

export interface User {
  id: string;
  email: string;
  password_hash: string;
  first_name: string;
  last_name: string;
  phone?: string;
  created_at: Date;
  updated_at: Date;
  email_verified: boolean;
  role: UserRole;
}

export interface UserProfile {
  user_id: string;
  date_of_birth?: Date;
  gender?: string;
  clothing_size_preferences: Record<string, any>; // JSON structure
  created_at: Date;
  updated_at: Date;
}

export interface UserAddress {
  id: string;
  user_id: string;
  type: AddressType;
  first_name: string;
  last_name: string;
  street_address: string;
  apartment?: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  phone: string;
  is_default: boolean;
}

export interface CreateUserInput {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  phone?: string;
  role?: UserRole;
}

export interface UpdateUserInput {
  first_name?: string;
  last_name?: string;
  phone?: string;
  email_verified?: boolean;
}

export interface CreateAddressInput {
  user_id: string;
  type: AddressType;
  first_name: string;
  last_name: string;
  street_address: string;
  apartment?: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  phone: string;
  is_default?: boolean;
}

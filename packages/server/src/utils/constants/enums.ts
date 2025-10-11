export enum UserRole {
  CUSTOMER = 'customer',
  ADMIN = 'admin',
  STAFF = 'staff'
}

export enum AddressType {
  BILLING = 'billing',
  SHIPPING = 'shipping'
}

export enum ProductStatus {
  DRAFT = 'draft',
  ACTIVE = 'active',
  ARCHIVED = 'archived'
}

export enum Gender {
  MEN = 'men',
  WOMEN = 'women',
  UNISEX = 'unisex',
  KIDS = 'kids'
}

export enum OrderStatus {
  PENDING = 'pending',
  CONFIRMED = 'confirmed',
  PROCESSING = 'processing',
  SHIPPED = 'shipped',
  DELIVERED = 'delivered',
  CANCELLED = 'cancelled',
  RETURNED = 'returned'
}

export enum PaymentStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  REFUNDED = 'refunded'
}

export enum ShipmentStatus {
  LABEL_CREATED = 'label_created',
  IN_TRANSIT = 'in_transit',
  OUT_FOR_DELIVERY = 'out_for_delivery',
  DELIVERED = 'delivered'
}

export enum DiscountType {
  PERCENTAGE = 'percentage',
  FIXED_AMOUNT = 'fixed_amount',
  FREE_SHIPPING = 'free_shipping'
}

export enum AttributeType {
  TEXT = 'text',
  NUMBER = 'number',
  SWATCH = 'swatch'
}

export enum CartStatus {
  ACTIVE = 'active',
  ABANDONED = 'abandoned',
  CONVERTED = 'converted'
}

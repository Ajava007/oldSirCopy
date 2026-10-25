export interface Organization {
  id: number;
  code: string;
  name: string;
  country?: string;
  address?: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface Factory {
  id: number;
  organizationId: number;
  code: string;
  name: string;
  location?: string;
  timeZone?: string;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface VehicleModel {
  id: number;
  modelCode: string;
  modelName: string;
  brand: string;
  vehicleType?: string;
  segment?: string;
  modelYear?: string;
  fuelType?: string;
  transmission?: string;
  basePrice?: number;
  status: string;
  createdAt?: string;
  updatedAt?: string;
}

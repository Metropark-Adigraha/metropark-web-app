import { ObjectId } from "mongodb";

export type Products =  {
    _id: ObjectId;
    title: string;
    location: string;
    price: string;
    image: string[];
    area: string;
    type: string;
    slug: string;
}

export type ProductTypeInput = Omit<Products, "slug" | "_id">;

export type PropertyImage = {
    url: string
    alt: string
  }
  
  export type PropertyDetails = {
    id: string
    type: string
    title: string
    description: string
    features: string[]
    specifications: {
      size: string
      bedrooms: number
      bathrooms: number
      carport: boolean
    }
    images: PropertyImage[]
    floorPlan: string
    price: number
  }
  
  
  export interface PropertySpecifications {
    size: string;
    bedrooms: number;
    bathrooms: number;
    carport: boolean;
  }
  
  export interface PropertyDetail {
    id: string;
    title: string;
    price: number;
    description: string;
    specifications: PropertySpecifications;
    features: string[];
    floorPlan: string;
    images: PropertyImage[];
  }
  
  export interface PropertyCard extends Pick<PropertyDetails, 'id' | 'title' | 'price' | 'specifications'> {
    thumbnail: string;
  }
  
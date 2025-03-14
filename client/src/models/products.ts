import products from '../data/products.json'
import type { DataListEnvelope } from './dataEnvelopes'

export interface Product {
    id: number
    title: string
    description: string
    category: string
    price: number
    rating?: number
    stock?: number
    tags?: string[]
    brand?: string
    sku?: string
    weight?: number
    dimensions?: ProductDimensions
    shippingInformation?: string
    availabilityStatus?: string
    reviews?: ProductReview[]
    returnPolicy?: string
    minimumOrderQuantity?: number
    meta?: ProductMeta
    images?: string[]
    thumbnail?: string
}
 
export interface ProductDimensions {
    width: number
    height: number
    depth: number
}

export interface ProductReview {
    rating: number
    comment: string
    date: string
    reviewerName: string
    reviewerEmail: string
}

export interface ProductMeta {
    createdAt: string
    updatedAt: string
}

export function getAllProducts() {
    return products as DataListEnvelope<Product>
}

export function getProduct(id: string) {
    return products.items.find((item) => item.id == +id) as Product
}

getAllProducts().items.push({
    id: 100,
    title: 'Test Product',
    description: 'This is a test product',
    category: 'test',
    price: 100,
})
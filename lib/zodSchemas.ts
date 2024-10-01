import { Category, ProductStatus } from '@prisma/client';
import { z } from 'zod';

// Extract enum values
const productStatusValues = Object.values(ProductStatus);
const categoryValues = Object.values(Category);

// Define the Zod schema
export const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(productStatusValues as [ProductStatus, ...ProductStatus[]]),
  // status: z.enum(['draft', 'published', 'archived'])
  price: z.number().min(1, 'Price must be greater than 1'),
  images: z.array(z.string()).min(1, 'At least one image is required'),
  category: z.enum(categoryValues as [Category, ...Category[]]),
  // category: z.enum(['men', 'woman', 'kids']), });

  isFeatured: z.boolean().optional(),
});

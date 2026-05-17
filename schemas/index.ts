import { z } from 'zod';
export const registerSchema=z.object({email:z.string().email(),password:z.string().min(8),name:z.string().min(2)});
export const orderSchema=z.object({customer:z.string(),shiftId:z.string().optional(),items:z.array(z.object({priceItemId:z.string(),qty:z.number().int().positive()})).min(1)});
export const shiftStartSchema=z.object({});
export const shiftEndSchema=z.object({shiftId:z.string()});
export const importRowSchema=z.object({name:z.string(),price:z.coerce.number().int().nonnegative(),category:z.string()});

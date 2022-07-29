import { z } from 'zod';

const VehicleZodSchema = z.object({
  model: z.string()
    .min(3, { message: 'Model must have at least 3 characters' }),
  year: z.number()
    .gte(1900, { message: 'Year must be greater than or equal 1900' })
    .lte(2022, { message: 'Year must be less than or equal 2022' }),
  color: z.string()
    .min(3, { message: 'Color must have at least 3 characters' }),
  status: z.boolean().optional(),
  buyValue: z.number(),
});

export type IVehicle = z.infer<typeof VehicleZodSchema>;
export { VehicleZodSchema };
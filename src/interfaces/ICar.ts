import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const CarZodSchema = VehicleZodSchema.extend({
  doorsQty: z.number()
    .gte(2, { message: 'Doors quantity must be greater than or equal 2' })
    .lte(4, { message: 'Doors quantity must be less than or equal 4' }),
  seatsQty: z.number()
    .gte(2, { message: 'Seats quantity must be greater than or equal 2' })
    .lte(7, { message: 'Seats quantity must be less than or equal 4' }),
});

type ICar = z.infer<typeof CarZodSchema>;

export { ICar, CarZodSchema };
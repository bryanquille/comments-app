import { z } from 'zod';

export const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.object({
    first: z.string().min(1, "El primer nombre es obligatorio"),
    last: z.string().min(1, "El apellido es obligatorio"),
  }),
  email: z.email("Correo invalido"),
  avatarUrl: z.string().url("Debe ser una URL válida")
})

export type User = z.infer<typeof UserSchema>;

export const UserListSchema = z.array(UserSchema);
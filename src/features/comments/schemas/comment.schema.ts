import { z } from 'zod';

export const CommentSchema = z.object({
  id: z.string().uuid().optional(), // El ID suele ser generado por la DB o JSONBin
  author: z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    avatarUrl: z.string().url("Debe ser una URL válida"),
  }),
  content: z.string()
    .min(1, "El comentario no puede estar vacío")
    .max(500, "El comentario es demasiado largo"),
  timestamp: z.string(), // O z.date() dependiendo de cómo manejes las fechas
  likes: z.number().default(0),
});

// Extraemos el tipo de TypeScript automáticamente del esquema
export type Comment = z.infer<typeof CommentSchema>;

// Esquema para la respuesta de JSONBin (que suele ser un array de comentarios)
export const CommentListSchema = z.array(CommentSchema);
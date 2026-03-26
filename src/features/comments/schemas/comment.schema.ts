import { z } from 'zod';

export const CommentSchema = z.object({
  id: z.string().uuid().optional(),
  author: z.object({
    authorId: z.string().uuid(),
    name: z.string().min(1, "El nombre es obligatorio"),
    avatarUrl: z.string().url("Debe ser una URL válida"),
  }),
  content: z.string()
    .min(1, "El comentario no puede estar vacío")
    .max(500, "El comentario es demasiado largo"),
  timestamp: z.string(), // O z.date() dependiendo del manejo de las fechas
  likes: z.number().default(0),
  whoLiked: z.array(z.string().uuid()).default([]).optional()
});

export type Comment = z.infer<typeof CommentSchema>;

export const CommentListSchema = z.array(CommentSchema);
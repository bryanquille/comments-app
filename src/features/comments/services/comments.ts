import { CommentListSchema, CommentSchema, type Comment } from "../schemas/comment.schema"

const API_KEY = import.meta.env.VITE_JSONBIN_API_KEY
const BIN_ID = import.meta.env.VITE_JSONBIN_BIN_ID

export const getComments = async () => {
  const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`, {
    method: 'GET',
    headers: {
      "X-Master-Key": API_KEY,
      "Content-Type": "application/json",
    }
  })
  const data = await response.json()
  return CommentListSchema.parse(data.record.comments)
}

export const updateComments = async (newComments: Comment[]) => {
  // Validating data before send them
  newComments.forEach(comment => CommentSchema.parse(comment))

  const response = await fetch(`https://api.jsonbin.io/v3/b/${BIN_ID}`, {
    method: 'PUT',
    headers: {
      "X-Master-Key": API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ comments: newComments })
  })
  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(errorData.message || "Error al actualizar.")
  }
  return await response.json();
}
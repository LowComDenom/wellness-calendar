import jwt from 'jsonwebtoken'

const SECRET = process.env.SECRET

export function newToken(payload) {
  return jwt.sign(payload, SECRET, { expiresIn: '1d' })
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET)
}
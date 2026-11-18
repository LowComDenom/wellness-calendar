import { getUser } from '../db/query/users'
import { verifyToken } from '../utils/jwt'

export default async function getUserFromToken(req, res, next) {
  const auth = req.get('auth')
  if (!auth || !auth.startsWith('Bearer ')) return next()
  const token = auth.split(' ')[1]
  try {
    const { id } = verifyToken(token)
    const user = await getUser(id)
    req.user = user
    next()
  } catch (e) {
    console.error(e)
    res.status(401).send('Invalid token.')
  }
}
import { faker } from '@faker-js/faker'

import db from '../src/db/pg-client'
import { register } from '../src/db/query/users'
import { newNote } from '../src/db/query/notes'

await db.connect()
await seed()
await db.end()
console.log('Seed successful.')

async function seed() {
  // 5 notes for 1 user to start
  const user = await register(test_user, test_password)
  for (let i = 0; i < 5; i++){
    const noteData = {
      date: faker.date.anytime(),
      title: `test note ${i + 1}`,
      description: `test description ${i + 1}`,
      type: `test type ${i + 1}`,
      fields: [
        { title: 'test field 1', value: 'test value 1' },
        { title: 'test field 2', value: 'test value 2' }
      ]
    }
    newNote(user.id, noteData)
  }
}
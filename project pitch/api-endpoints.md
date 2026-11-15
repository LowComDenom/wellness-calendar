| Endpoint | Purpose |
|---|---|
| `POST /api/auth/register` | Create an account from username and password |
| `POST /api/auth/login` | Authenticate and return a token |
| `GET /api/auth/me` | Return the signed-in user’s basic account details |
| `GET /api/notes` | Get a user’s notes |
| `GET /api/notes/:id` | Get one note |
| `POST /api/notes` | Create a note |
| `PATCH /api/notes/:id` | Edit a note |
| `DELETE /api/notes/:id` | Delete a note |

Sample create req:
`
{
  "date" : date,
  "title" : string,
  "description" : string,
  "note_type" : string,
  "fields" : {
    "field1" : value,
    "field2" : value
  }
}
`
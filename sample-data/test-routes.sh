#!/usr/bin/env bash
# written by Codex

set -euo pipefail

BASE_URL="${API_BASE_URL:-http://localhost:3000}"
BASE_URL="${BASE_URL%/}"
USERNAME="${TEST_USERNAME:-curl_test_$(date +%s)_${RANDOM}}"
PASSWORD="${TEST_PASSWORD:-curl_test_password}"
NOTE_DATE="$(date +%F)"

request() {
  local label="$1"
  local expected_status="$2"
  shift 2

  printf '\n== %s ==\n' "$label"
  local response
  response="$(curl -sS -w $'\n%{http_code}' "$@")" || {
    printf 'Request failed before receiving an HTTP response. Is the server running at %s?\n' "$BASE_URL" >&2
    exit 1
  }

  HTTP_STATUS="${response##*$'\n'}"
  HTTP_BODY="${response%$'\n'*}"
  printf '%s\n' "$HTTP_BODY"

  if [[ "$HTTP_STATUS" != "$expected_status" ]]; then
    printf 'Expected HTTP %s, received HTTP %s.\n' "$expected_status" "$HTTP_STATUS" >&2
    exit 1
  fi
  printf 'HTTP %s\n' "$HTTP_STATUS"
}

request 'GET /' 200 "$BASE_URL/"

request 'POST /users/register' 201 \
  -X POST "$BASE_URL/users/register" \
  -H 'Content-Type: application/json' \
  -d "{\"username\":\"$USERNAME\",\"password\":\"$PASSWORD\"}"
TOKEN="$HTTP_BODY"
if [[ -z "$TOKEN" ]]; then
  printf 'Registration returned an empty token.\n' >&2
  exit 1
fi

request 'POST /users/login' 200 \
  -X POST "$BASE_URL/users/login" \
  -H 'Content-Type: application/json' \
  -d "{\"username\":\"$USERNAME\",\"password\":\"$PASSWORD\"}"
TOKEN="$HTTP_BODY"
AUTH_HEADER="Authorization: Bearer $TOKEN"

request 'POST /notes (1 of 4)' 201 \
  -X POST "$BASE_URL/notes" \
  -H "$AUTH_HEADER" \
  -H 'Content-Type: application/json' \
  -d "{\"date\":\"$NOTE_DATE\",\"title\":\"curl route test\",\"description\":\"Created by sample-data/test-routes.sh\",\"type\":\"test\",\"fields\":[{\"title\":\"status\",\"value\":\"ok\"}]}"
NOTE_ID="$(python3 -c 'import json,sys; print(json.load(sys.stdin)["id"])' <<< "$HTTP_BODY")"

for note_number in 2 3 4; do
  request "POST /notes ($note_number of 4)" 201 \
    -X POST "$BASE_URL/notes" \
    -H "$AUTH_HEADER" \
    -H 'Content-Type: application/json' \
    -d "{\"date\":\"$NOTE_DATE\",\"title\":\"curl route test $note_number\",\"description\":\"Created by sample-data/test-routes.sh\",\"type\":\"test\",\"fields\":[{\"title\":\"status\",\"value\":\"ok\"}]}"
done

request "GET /notes/by-date/$NOTE_DATE" 200 \
  -H "$AUTH_HEADER" "$BASE_URL/notes/by-date/$NOTE_DATE"

request "GET /notes/by-id/$NOTE_ID" 200 \
  -H "$AUTH_HEADER" "$BASE_URL/notes/by-id/$NOTE_ID"

request 'GET /notes (all user notes)' 200 \
  -H "$AUTH_HEADER" "$BASE_URL/notes"

printf '\n==username+password: %s' "$USERNAME, $PASSWORD"

printf '\nAll routes returned their expected status codes.\n'

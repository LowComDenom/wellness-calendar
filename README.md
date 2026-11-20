# Wellness Calendar

A simple lifestyle journal to help you stay accountable. This collection of programs creates an environment that makes keeping track of your well-being easy.

| Platform | Repo |
|----------|------|
| Web      | https://github.com/LowComDenom/wellness-calendar-web.git |
| Appkit   | TBD |
| WinUI    | TBD |

![Screenshot of the calendar page](screens/calendar-wip.png)

# How to run

...

# Major Release Roadmap

## 1.0 : The MVP

- [ ] Calendar UI
- [x] User login
- [ ] Add/edit/delete multiple notes per day
- [ ] Visually appealing UI

## 2.0 : Better QoL, Better Feedback, More Features

- [ ] Timeline view
- [ ] Stats and Charts
- [ ] Search
- [ ] Pinned notes
- [ ] User-generated note templates
- [ ] User feedback derrived from stats
- [ ] Themes
- [ ] OAuth
- [ ] LLM integrations for smarter feedback

# Core Deps

## Backend

- bcryptjs
- express
- jsonwebtoken
- pg

## Frontend

- React
- React Router
- Vite
- Tailwindcss

# Architecture

| Folder     | Content          |
|------------|------------------|
| src        | Main express app |
| api        | Express routes   |
| db         | Postgres client  |
| db/query   | Postgres queries |
| middleware | Mandating user authentication and request body fields |
| utils      | Web token management |

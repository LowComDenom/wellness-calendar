[https://mermaid.ai/open-source/syntax/flowchart.html]:#

# Ideal client test environment

* Chromium / Firefox / Safari
* React Dev tools

# Hosting options

* Cloudflare
* Google (Cloud, Firebase)
* Railway
* Vercel
* Wordpress

# Wellness Calendar

A cross-platform (status pending), interactive lifestyle notebook to help you stay accountable.

| Platform | Repo |
|----------|------|
| Web  | https://github.com/LowComDenom/wellness-calendar-web.git |
| iOS     | https://github.com/LowComDenom/wellness-calendar-iOS.git |
| Windows | https://github.com/LowComDenom/wellness-calendar-win.git |

## Structure

```mermaid
flowchart LR

subgraph Backend
  DB[(-Database-)]
  r1{{db query}}
  API((-API-))
end

subgraph Client
  r2{{fetch}}
  CLI[-App-]
end

DB <--> r1 <--> API
API<--> r2 <--> CLI
```

## Key Technologies In 1.0

* JavaScript
* HTML
* CSS
* React
* React Router
* Express
* PostgresSQL

## Major Release Roadmap

```mermaid
flowchart LR

1(1.0 : The MVP
- User login
- Calendar
- Add/edit/delete multiple notes per day
- Feedback based on accomplished goals over a period
- Streak tracking
- Timeline
- Charts & Stats
- Search)

2(2.0 : QoL and LLMs
- LLM-assisted Summaries
- LLM suggestions in menus
- User trends & more LLM integration
- Theming
- Reminder emails
- Push notifications)

3(3.0 : Platform Expansion
- Native apps for major platforms)

1 --> 2 --> 3
```

## Technologies to experiment with later

### Frameworks
* .NET
* Angular
* Lit
* NextJS
* Nuxt
* SolidJS
* Svelte
* SwiftUI
* tailwindcss
* Vue 
* WinUI 3

### Languages
* C
* C#
* CL
* Elixir
* Erlang
* Sass
* TypeScript

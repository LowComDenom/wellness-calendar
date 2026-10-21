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

A cross-platform (status pending), simple lifestyle notebook to help you stay accountable.

| Platform | Repo |
|----------|------|
| Web  | https://github.com/LowComDenom/wellness-calendar-web.git |
| iOS     | https://github.com/LowComDenom/wellness-calendar-iOS.git |
| Windows | https://github.com/LowComDenom/wellness-calendar-win.git |

## Structure

All complex data mutation is done on the backend, all the client does is send, request, and display simple values.

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
flowchart TD

subgraph v1 [1.0 : The MVP]
direction TB

f1.1(User login)
f1.2(Calendar UI)
f1.3(Add/edit/delete multiple notes per day)
f1.4(Feedback based on accomplished goals over a period)
f1.5(Streak tracking)
f1.6(Timeline)
f1.7(Charts & Stats)
f1.8(Search)
f1.9(Theming)

end

subgraph v2 [2.0 : QoL AI]
direction TB

f2.1(Reminder emails)
f2.2(Push notifications)
f2.3(LLM integrations)

end

subgraph vPX [Platform Expansion Versions]
direction TB

iOS(3.0 : Native iOS app)
mac(4.0 : Native macOS app)
win(5.0 : Native Windows app)

end

v1 --> v2 --> vPX
```

## Technologies to experiment with later

### Frameworks

* .NET
* Angular
* Lit
* NextJS
* Nuxt
* SolidJS (most interesting)
* Svelte
* SwiftUI
* tailwindcss
* Vue 
* WinUI 3

### Languages

* C#
* Elixir (most interesting)
* Erlang
* Sass
* TypeScript (w/ Effect)

### Other

* VITE+

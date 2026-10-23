[https://mermaid.ai/open-source/syntax/flowchart.html]:#

_much of this should be moved to docs, or elsewhere_

# To-do

- [ ] Deploy
- [ ] Working UI with mock data
- [ ] Set up a real database
- [ ] Connect database to UI

# Ideal client test environment

* Chromium / Firefox / Safari
* React Dev tools extension

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

RN(3.0 : React Native Apps)
apple(3.0 : SwiftUI app)
win(3.0 : WinUI 3 app)

end

v1 --> v2 --> vPX
```

## Versioning Scheme

https://semver.org/

### Representation of implementing the first feature on the web front end, then finding a bug later

``` mermaid
gitGraph
   commit id: "initial commit" tag: "0.0"
   commit id: "1"
   branch user-login
   checkout user-login
   commit id: "A"
   commit id: "B"
   commit id: "C"
   checkout main
   merge user-login tag: "0.1"
   commit id: "2"
   commit id: "3" tag: "0.2"
   commit id: "4"
   commit id: "5" tag: "psql cve found"
   branch psql-cve-fix
   commit id: "x"
   checkout main
   merge psql-cve-fix tag: "0.2a"
   commit id: "6"
   commit id: "7" tag: "user login bug found"
   branch fix-user-login
   commit id: "a"
   commit id: "b"
   checkout main
   merge fix-user-login tag: "0.2.1"
```

## Technologies to experiment with later

### Frameworks

* .NET
* Angular
* Lit
* NextJS
* Nuxt
* React Native
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

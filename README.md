_https://mermaid.ai/open-source/syntax/flowchart.html_  
_https://expressjs.com/en/5x/starter/installing/_  

# Wellness Calendar

A cross-platform (status pending), simple lifestyle journal to help you stay accountable.

| Platform | Repo |
|----------|------|
| Web     | https://github.com/LowComDenom/wellness-calendar-web.git |
| iOS     | https://github.com/LowComDenom/wellness-calendar-iOS.git |
| Windows | https://github.com/LowComDenom/wellness-calendar-win.git |

# To-do

- [ ] Deploy web front end scaffold
- [ ] Complete database schema and queries
- [ ] Seed local database with mock data
- [ ] Complete API and routes
- [ ] Set up a real database
- [ ] Connect database to UI

# Hosting options

* Cloudflare
* Google
* Railway
* Vercel (most likely)
* Wordpress

# Ideal client test environment

Chromium w/ React Dev tools extension

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

## Major Release Roadmap

```mermaid
flowchart TD

subgraph v1 [1.0 : The MVP]
direction TB

f1.1(User login)
f1.2(Calendar UI)
f1.3(Add/edit/delete multiple notes per day)
f1.4(Stats and Charts)
f1.5(User feedback derrived from stats)

end

subgraph v2 [2.0 : QoL AI]
direction TB

f2.1(Theming)
f2.2(Timeline view)
f2.3(Search)
f2.4(User-generated note templates)
f2.5(Pinned notes)
f2.6(Reminder emails)
f2.7(Push notifications)
f2.8(LLM integrations for smarter feedback)
f2.9(OAuth)

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

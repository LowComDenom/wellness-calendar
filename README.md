# Wellness Calendar

A cross-platform (status pending) wellness journal to help you stay accountable.

## Structure

[https://mermaid.ai/open-source/syntax/flowchart.html]: #

```mermaid
flowchart LR
    Database[(Database)] --- Backend((Backend))
    Backend <--> Web[Web App]
    Backend <--> Mobile[Mobile App]
    Backend <--> Native[Native App]
```

The 1.0 web frontend is organized around an application shell, screens, shared context, and focused helper functions:

```mermaid
flowchart TD
    Entry[main.jsx] --> App[App.jsx: route tree]
    App --> Shell[Layout and navigation]
    Shell --> Screens[Feature screens]
    Screens --> Calendar[Calendar: year, month, day]
    Calendar --> Notes[Notes: create, preview, detail, forms]
    Calendar --> Goals[Goals: create, list, detail, weekly summary]
    Screens --> User[User: login, register, settings, stats]
    Screens --> Timeline[Timeline and weekly summary]
    Shell --> SearchUI[Search]
    AccountContext[Account context] --> Auth[Authentication helpers]
    UserDataContext[User data context] --> DataHelpers[Note CRUD, search, stats helpers]
    Shell -. uses .-> AccountContext
    Shell -. uses .-> UserDataContext
    Screens -. consume .-> UserDataContext
    SearchUI -. uses .-> DataHelpers
    Backend((Backend / storage)) <--> Auth
    Backend <--> DataHelpers
```

## Major Release Features

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
2(2.0 : A.I. Enhanced
- Weekly LLM summaries
- Monthly LLM summaries)
3(3.0 : QoL Expansion
- User trends & more LLM integration
- Theming
- Reminder emails
- Push notifications)
4(4.0 : Experimentation
- Backend / frontend branches)
1 --> 2 --> 3 --> 4
```

## Technology Goals

```mermaid
flowchart TD
1(JavaScript + React Implementation)
2(TypeScript / Sass rewrite)
3(Next.js rewrite)
4(Vue rewrite)
5(iOS App)
6(Windows React Native App)
7(macOS App)
8(Erlang backend rewrite)
9(JavaFX frontend rewrite)
1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 --> 8 --> 9
```


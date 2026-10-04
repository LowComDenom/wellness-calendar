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
- LLM-assisted Summaries
- LLM suggestions in menus)
3(3.0 : QoL Expansion
- User trends & more LLM integration
- Theming
- Reminder emails
- Push notifications)
1 --> 2 --> 3
```

## Technology Goals

```mermaid
flowchart TD
1(JavaScript
React,React-Router,Express,SQL
frontend & backend)
2(TypeScript / Sass makeover)
3(Vue frontend)
4(Next.js makeover)
5(iOS app)
6(Windows React Native app)
7(macOS app)
8(Erlang backend)
9(JavaFX app)
10(.NET app)
1 --> 2 --> 3 --> 4 --> 5 --> 6 --> 7 --> 8 --> 9 --> 10
```


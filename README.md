# Wellness Calendar

A cross-platform (status pending) wellness journal to help you stay accountable.

## Structure

[https://mermaid.ai/open-source/syntax/flowchart.html]: #

```mermaid
flowchart TD
1[(Database)] --- 2((Backend))
2 <---> 3.1(Web App)
2 <---> 3.2(Mobile App)
2 <---> 3.3(Native App)
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


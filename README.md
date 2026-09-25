# Wellness Calendar

A cross-platform (status pending) wellness journal to help you stay accountable.

## Structure

[https://mermaid.ai/open-source/syntax/flowchart.html]: #

```mermaid
flowchart TD
1[(SQL Database)] --- 2((Backend API))
2 --- 3.1(React Web App)
2 --- 3.2(iOS App)
2 --- 3.3(Windows
          React Native / WinUI
          App)
```

## Major Release Roadmap

```mermaid
flowchart LR
1(1.0 : The MVP
- User login
- Calendar
- Add/edit/delete multiple notes per day
- Feedback based on accomplished health goals
- Streak tracking
- Timeline
- Charts
- Search)
2(2.0 : A.I. Enhanced
- Weekly AI summaries
- Monthly AI summaries)
3(3.0 : Feature Expansion
- Theming
- Reminder emails
- Push notifications
- Nutrition trends)
4(4.0 : Native Colonization
- iOS / Windows Release)
5(5.0 : Experimentation
- Experimental branches for an Erlang rewrite
- Experimental branches for a Java rewrite)
1 --> 2 --> 3 --> 4 --> 5
```

## Technology Roadmap

```mermaid
flowchart TD
1(JavaScript React Implementation)
2(TypeScript / Sass refactor)
3(Next.js migration)
4(Native App Development)
1 --> 2 --> 3 --> 4
```


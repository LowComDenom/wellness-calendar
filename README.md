# Wellness Calendar

A cross-platform (status pending) wellness journal to help you stay accountable.

## Structure

[https://mermaid.ai/open-source/syntax/flowchart.html]: #

```mermaid
flowchart TD
1[(Backend
API + SQL Database)]
1 --- 2.1(React Web App)
1 --- 2.2(iOS App)
1 --- 2.3(Windows
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
- Give user feedback based on accomplished health goals
- Timeline
- Search)
2(2.0 : A.I. Enhanced
- Weekly AI summaries
- Monthly AI summaries)
3(3.0 : Feature Expansion
- Charts
- Streak tracking
- Reminder emails
- Push notifications
- Nutrition trends)
4(4.0 : Colonization
- iOS / Windows Release)
1 --> 2 --> 3 --> 4
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

## Note Formatting

### Meal Note

| Type of Note | Date |
| ------------------ | ----------- |
| Planned meal time | ... |
| Actual meal time |... |
| Pre-meal assessment | Hunger level: 0-10, type of hunger, environment |
| Meal details | food and drink consumed |
| Post-meal reflections | Fullness level: 0-10, type of hunger, environment |
| Grain, starch, or sugar? | (y/n) |
| Snacking? | (y/n) |
| Walked after meal? | (y/n) |

### Fitness Note

| Type of Note | Date |
| ------------------ | ----------- |
| Yoga | (y/n) |
| Time (auto-generated field) | t |
| Walking, hiking | (y/n) |
| Distance & Time | (d/t) |
| Other | ... |

## Goal Logic Example

*Goal logic should ultimately be based on unit values*

```mermaid
flowchart LR
1(User sets a goal:
  Walk after dinner at least 5 days per week)
2{Result}
3.1(Goal not accomplished)
3.2(Goal accomplished)
4.1(Encourage user to try harder next week)
4.2(Congratulate user)
5((Week ends))
1 ---> 2
2 ---> 3.1
2 ---> 3.2
3.1 ---> 4.1
3.2 ---> 4.2
4.1 ---> 5
4.2 ---> 5
5 ---> 1
```

## Licensing

Add the proper MPL 2.0 header to source files: https://www.mozilla.org/en-US/MPL/headers/

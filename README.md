# Wellness Calendar

A cross-platform (status pending) diet accountability program.

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
- Give user feedback based on accomplished health goals
- Calendar
- Add/edit/delete notes
- Timeline
- Search)
2(2.0 : A.I. Enhanced
- Monthly AI summaries
- Weekly AI summaries)
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

## Note Format
#### Meal Note
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

#### Fitness Note
| Type of Note | Date |
| ------------------ | ----------- |
| Yoga | (y/n) |
| Time | t |
| Walking, hiking | (y/n) |
| Distance & Time | (d/t) |
| Other | ... |

## Licensing

Remember to add the MPL header to source files
https://www.mozilla.org/en-US/MPL/headers/

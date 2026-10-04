# C.R.U.D. Notes
Users create goals assigned to certain calendar days

## Nutrition Note

| Type of Note             | Date                                              |
| ------------------------ | ------------------------------------------------- |
| Planned meal time        | ...                                               |
| Actual meal time         | ...                                               |
| Pre-meal assessment      | Hunger level: 0-10, type of hunger, environment   |
| Meal details             | food and drink consumed                           |
| Post-meal reflections    | Fullness level: 0-10, type of hunger, environment |
| Grain, starch, or sugar? | (y/n)                                             |
| Snacking?                | (y/n)                                             |
| Walked after meal?       | (y/n)                                             |

## Fitness Note

| Type of Note                         | Date  |
| -------------------------------------| ----- |
| Exercise type                        | ...   |
| Other fields generated based on type | ...   |

# C.R.U.D. Goals

Users set goals and receive feedback based on note content at the end of a period of time. (recurring goals allowed)

## Goal Logic Example

_Goal logic should ultimately be based on unit values_

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

# Stats

* User stats calculated when server recieves **new** data
* Displayed as charts on a dedicated page
# Diet Calendar

A cross-platform (status pending) diet accountability program.

### Eventual Structure

                    Calorie Calendar
                           │
                    ┌──────┴──────┐
                    │   Backend   │
                    │ API + SQL   │
                    └──────┬──────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
       Web app          iOS app        Windows app
       React/Next      React Native    React Native

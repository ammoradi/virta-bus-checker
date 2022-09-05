# Virta Bus Checker
This web app fetches buses arrival/departure data of a specific station/stop place in Helsinki through digitransit GraphQl endpoint and shows them properly both for desktop and mobile users.

### Table of contents
- [Install & run](#install--run)
- [Test](#test)
- [Features](#features)
- [Stack](#stack)
- [Limitation](#limitation)
- [Todo](#todo)
---

## Install & run
install packages:
```
npm install
```

run development (`localhost:3000`):
```
npm start
```

run production (`localhost:5000`):
```
npm run build && serve -s build
```

_the project developed using node v16.x.x and npm v8.x.x_

## Test
this project is **Unit Tested** carefully!
to run all the test cases with coverage report:
```
npm run test src -- --coverage
```

to run a specific test case:
```
npm run test PATH_TO_SPEC_FILE
```

to run only changed test files:
```
npm run test
```


## Features
- buses list showing
- buses positive and negative delays handling
- synced global clock and buses list arrival estimation
- real time data updating
- ~90% code coverage
- responsive design implementation

## Stack
- React
- Typescript
- Styled-components
- Apollo Graphql
- Graphql typescript code generator
- React Testing Library

## Limitation
A real bus checker web app should not show the incoming buses in 3-digit next minutes! But due to lack of data samples and to show how the minutes estimation feature works, we don't filter bus arrivals in more than 1 hour!

## Todo
- [ ] add `eslint` and `prettier`.
- [ ] add integration tests for `<App />` container.
- [ ] refactor and move global clock from `<Clock />` component to a Top-level container.
- [ ] add integration tests for synced clock of global clock and buses list.
- [ ] migrate from `npm` to `yarn`
- [ ] config jest coverage to ignore unnecessary files
- [ ] provide performance measurements
- [ ] provide bundle analysis
- [ ] add cypress ui tests

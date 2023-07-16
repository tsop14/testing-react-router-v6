# Testing React Router v6

This repo is an example of how you could set up your project to test react route v6 `createBrowserRouter` using react testing library.

The [official react-testing docs for react router](https://testing-library.com/docs/example-reach-router) use `MemoryRouter` but as Kent Dodds
notes, ["Your tests should use the same router your app uses."](https://github.com/remix-run/react-router/discussions/8241#discussioncomment-1596864)

|      |             |
| ---- | ----------- |
| run  | npm run dev |
| test | npm test    |

# Set up

- Project created using [vite react-ts template](https://vitejs.dev/guide/)
- Added basic routes using [docs](https://reactrouter.com/en/main/start/tutorial#setup)
- Adds tests
  - use vitest, specify JSDOM as the environment
  - add utils with custom withRouter render method
  - test useParam ([dog](/src/routes/dog.test.tsx))
  - test loader data ([cat](/src/routes/cat.test.tsx))
  - test link & location ([home](/src/routes/home.test.tsx))

# Alternative approach

This requires you to specify the router type in the test util. To more tightly couple the context
you use in your app and your tests, you could create a context function which you use for your app
and also in your test utils: as [Kent Dodds does here](https://github.com/kentcdodds/bookshelf/blob/main/src/test/app-test-utils.js).

Wont take you long to find people saying you shouldn't be testing like and you should have components that take props and test those rather than testing context from a 3rd party library. I like having tests that allow me to quickly test the style of components I am writing. [Playwright](https://playwright.dev/) and [Cypress](https://www.cypress.io/) are great for doing real end to end tests but having these component + context tests also suits me.

You could also mock the react router functions using vi.mocks etc. This makes it too easy for your tests to miss breaking changes... 🐛. Try to only mock things beyond the boundary of your app.

# Notes

- initial versions of node's unidici (experimental fetch) did not play nicely with react router loader
  `"TypeError: The "emitter" argument must be an instance of EventEmitter or EventTarget. Received an instance of AbortSignal"`
  The issue is in [node's unidici library](https://github.com/remix-run/react-router/issues/10273#issuecomment-1487201263), there is a [fix if you're using node 18.16.0+](https://github.com/nodejs/undici/pull/1910#issuecomment-1478377261) otherwise turn off experimental fetch when running tests: ""NODE_OPTIONS='--no-experimental-fetch' vitest"
  You might then see this error: `ReferenceError: Request is not defined` which you can fix [using this suggestion](https://stackoverflow.com/questions/74497916/referenceerror-request-is-not-defined-when-testing-with-react-router-v6-4)

# Frontend

`Password: qwerty`

## Helpful Links
- [ Your first Pull Request ]( https://github.com/howstrongiam/frontend/wiki/Find-or-Create-An-Issue )
- [ Making your first endpoint ]( https://github.com/howstrongiam/frontend/wiki/Find-or-Create-An-Issue](https://github.com/howstrongiam/frontend/tree/main/src/graphql )

Built with:

- React
- GraphQL
- Apollo

## Get Started

If you've never contributed to a group repo before please use this guide: [ Your first Pull Request ]( https://github.com/howstrongiam/frontend/wiki/Find-or-Create-An-Issue )
Clone this repository using Git:

```
git clone https://github.com/howstrongiam/frontend.git
cd frontend
```

Install dependencies:

```
npm install
```

Specify the URL of your GraphQL API server:

```
# Example
const httpLink = createHttpLink({ uri: 'http://localhost:4000', });
```

Now, you can start a local web server by running:

```
npm start
```

And then open http://localhost:3000 to view it in the browser.

## Available Scripts

In this project, you can run the following scripts:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run preview`: Serves the app's production build.

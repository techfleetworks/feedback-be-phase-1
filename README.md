# Feedback-be-phase-1

Backend for Ruminate Feedback project.

This is the backend codebase for Ruminates's Feedback project. This is a project bootstrapped with [Strapi CMS](https://strapi.io/).

The frontend can be found [here](https://github.com/techfleetworks/feedback-phase-1). 

### About Ruminate
[Ruminate](https://www.letsruminate.org/) is a nonprofit innovation lab that leverages behavioral science, artistic mediums, and the collective wisdom of the food community to break down complex food system issues and find digestible, evidence-based solutions.

## Getting Started

### How to run the project

To run the project in the development mode, follow the instructions below:

1. Install [Yarn package manager](https://yarnpkg.com/) & request .env files from lead.

2. Download or clone the repository in your computer:
`$ git clone https://github.com/techfleetworks/feedback-be-phase-1.git`

3. In the repository folder: 
- Install project depndencies with
```
yarn install
```

4. Place .env files in the root file directory.

5. Start the development server with:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Dependencies & Tools Used 
- [Strapi CMS](https://strapi.io/) - Strapi allows for easy future content management and maintenance by non-devs.
- [GraphQL](https://graphql.org/) - GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.
- [Apollo Client](https://www.apollographql.com/) - Apollo Client is a comprehensive state management library for JavaScript that enables you to manage both local and remote data with GraphQL. Use it to fetch, cache, and modify application data, all while automatically updating your UI.

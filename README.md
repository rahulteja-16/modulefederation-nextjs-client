# Modeule Federation with NexJS and Client Side React.

Module federation in NextJS depends on [@module-federation/nextjs-mf](https://www.npmjs.com/package/@module-federation/nextjs-mf). This plugin was developed by [Zack](https://twitter.com/ScriptedAlchemy).

> Use Case: Use `NextJS` as Host App and Remote app will be a flovour of `React + Webpack 5`.

# Context
There are 2 applications, 
- `host-app`: NextJS App
- `remote-app`: flovour of `React + Webpack 5`

`remote-app` is exposing a component called `Button` and the same button is consumed by `host-app`.

# Setup
- Clone the Repository
- run `npm install` - Install all the dependencies to run the apps in parallel.
- run `npm run install:apps` - Install all the required dependecies on both `host-app` and `remote-app`
- run `npm run start` - Start both `host-app` and `remote-app`
- `host-app`  on `localhost:3000`
- `remote-app` on `localhost:8080`
- Navigate to `localhost:3000/test` - Button Component from remote should be visible.
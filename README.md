A create-react-app project that demonstrate a Storybook.js problem when used with Lerna/Yarn Workspaces.

https://github.com/storybooks/storybook/issues/2193

The `mdi-test` folder contains a create-react-app project that includes `mdi` and works with Storybook.js.

I tested using:

```sh
$ cd mdi-test
$ yarn install
$ yarn run start:storybook
```

The `mdi-lerna-test` folder contains the same create-react-app project wrapped up in a [Lerna](https://github.com/lerna/lerna)/[Yarn Workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) project. This __does not work__ with Storybook.js.

The first way I tested using:

```sh
$ cd mdi-lerna-test
$ lerna bootstrap
$ lerna run --scope mdi-test start:storybook
```

The second way I tested using:

```sh
$ cd mdi-lerna-test
$ lerna bootstrap
$ cd ./packages/mdi-test
$ yarn run start:storybook
```

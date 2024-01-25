# React Native Template

## How to use this template

#### Cloning

`git clone --depth 1 -b <tag_name> <rep_url>`

Example:
`git clone --depth 1 -b v0.0.1 https://github.com/Tokels/react-native-template.git`

You can find information about what states this template has to offer.

# Tags

## v0.0.1

### React Native - Simple application setup

#### Includes:

1. A CI/CD workflow
2. Agile work methods
3. Type safety with typescript
4. Simple styling using NativeWind (tailwind for react native)
5. Routing with tabs using expo
6. Testing using Jest and Cypress
7. Formatting and Linting using Prettier and ESlint
8. Local storage using SecureStore (local storage for react native)
9. State management sync using context providers
10. State management async using TanStack Query (previous React Query)
11. Extra utils such as Reusable Layout Components, Toastify and Loading for handling positive and negative side effects

#### Additional information

You have to generate a Keystore key via Expo this can be done manually, but can also be done automatically by Expo by creating a preview build:
`npx eas build --platform android`. When prompted to generate a Keystore key, answer Y.

[Read this blogpost](https://juliastjerna.vercel.app/posts/application-setup-part-02a-react-native) for a step by step guide of how this template was generated.

## v0.0.2

### React Native - Simple application setup with simple authentication MVP style

#### Includes:

1. An extension of `v0.0.1`
2. Simple authentication using TanStack query MVP style

#### Additional information

[Read this blogpost](https://juliastjerna.vercel.app/posts/application-setup-part-02b-react-native) for a step by step guide of how this template was generated.

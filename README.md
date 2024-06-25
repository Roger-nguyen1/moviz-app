# Welcome to Moviz App! 👋

Moviz App est une application mobile codée sur React Native, avec [Expo](https://expo.dev) et avec [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

L'app charge une liste de films populaires depuis l'API de [The Movie Data Base](https://www.themoviedb.org/).
En appuyant sur l'affiche du film ou le bouton details, on peut consulter une description du film avec sa date de sortie.

## Get started

1. Clone the repo

   ```bash
   git clone https://github.com/Roger-nguyen1/moviz-app.git
   cd moviz-app
   ```

2. Install dependencies

```bash
   npm install
```

3. Create a .env file

Vous aurez besoin d'une clé d'API que vous pourrez récupérez en vous créant un compte sur le site [themoviedb.org](https://developer.themoviedb.org/docs/getting-started).
Ensuite créez un fichier .env

```bash
   touch .env
```

Renseignez votre clé d'API dans le fichier .env comme ceci :
EXPO_PUBLIC_API_KEY="cle_API"

4. Start the app

   ```bash
    npx expo start
   ```

Vous trouverez des options pour ouvrir l'application avec les outils suivant:

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

Ce projet utilise [file-based routing](https://docs.expo.dev/router/introduction).

## Librairies utilisées sur le projet

- [expo-router](https://docs.expo.dev/router/installation/)
- [axios](https://axios-http.com/fr/docs/intro)
- [React Native Element](https://reactnativeelements.com/)
- [expo-google-fonts](https://github.com/expo/google-fonts)

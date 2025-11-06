# Web_Hybrid_Mobiiliohjelmointi_Modal

📱 React Native — Modal-harjoitus  
**Tekijä:** Sara Vehviläinen  
**Oppilaitos:** Oulun ammattikorkeakoulu  
**Kurssi:** Web- ja hybriditeknologiat mobiiliohjelmoinnissa (IN00CT08-3006)  
**Lukukausi:** Syksy 2025

## 🧩 Tehtävän kuvaus

Tämä sovellus demonstroi React Native Modal -komponentin käyttöä TypeScript-ympäristössä.  
Tehtävä on osa kurssia Web- ja hybriditeknologiat mobiiliohjelmoinnissa (IN00CT08-3006).

## ✨ Toiminnallisuus

- Käyttäjälle näytetään painike "Show modal message"
- Painiketta painamalla avautuu Modal-ikkuna
- Modal sisältää viestin ja Close-painikkeen
- Käyttäjä voi sulkea modaalin painamalla Close-painiketta tai Android-laitteissa laitteen Back-nappia
- Modal käyttää `transparent={false}` ja `animationType="none"` asetuksia

## 🛠️ Käytetyt teknologiat ja komponentit

**React Native** (Expo)  
**React Hook:** useState  
**React Native Komponentit:** View, Text, Pressable, Modal, StyleSheet

## 🚀 Käyttöönotto

### Olemassa olevan projektin käynnistys:
```bash
# Asenna riippuvuudet
npm install

# Käynnistä kehityspalvelin
npx expo start
```

### Sovelluksen testaaminen:

#### 📱 Mobiililaite:
1. Asenna **Expo Go** -sovellus (iOS App Store / Google Play)
2. Skannaa QR-koodi Expo Go -sovelluksella

#### 💻 Emulaattori/Simulaattori:
```bash
npm run android   # Android-emulaattori
npm run ios       # iOS-simulaattori  
npm run web       # Verkkoselain
```  

## 📁 Projektikansio

```
Web_Hybrid_Mobiiliohjelmointi_Modal/
├── README.md
└── Tehtava2/
    └── Modal/
        ├── App.tsx              # Sovelluksen pääkomponentti
        ├── app.json             # Expo-konfiguraatio  
        ├── index.ts             # Sovelluksen käynnistyspiste
        ├── package.json         # Projektin riippuvuudet
        ├── package-lock.json    # Lukitut riippuvuusversiot
        ├── tsconfig.json        # TypeScript-asetukset
        ├── .gitignore           # Git-ohitettavat tiedostot
        └── assets/              # Kuvat ja resurssit
            ├── adaptive-icon.png
            ├── favicon.png
            ├── icon.png
            └── splash-icon.png
```

## 🎯 Oppimistavoitteet

- React Native Modal -komponentin käyttö
- Pressable-komponentin hyödyntäminen painikkeena
- Käyttöliittymän tila (useState)
- Modal-ikkunan hallinta ja sulkeminen Android Back-napilla
- React Native -komponenttien tyylittely StyleSheet-oliolla
- TypeScript React Native -sovelluksessa

## 📝 Huomioita

- `animationType="none"` - ei animaatiota modaalin ilmestyessä
- `transparent={false}` - modal käyttää valkoista taustaa
- `onRequestClose` mahdollistaa Android Back-napin käytön modaalin sulkemiseen
- Tyylit on toteutettu React Native StyleSheet-objektilla
- Sovellus on lukittu pystysuoraan orientaatioon

## 📚 Oppimisresurssit

**React Native dokumentaatio:**
- [React Native Documentation](https://reactnative.dev/) - Virallinen dokumentaatio
- [React Native Modal](https://reactnative.dev/docs/modal) - Modal-komponentin käyttö
- [React Native Pressable](https://reactnative.dev/docs/pressable) - Painikkeiden toteutus
- [React Native StyleSheet](https://reactnative.dev/docs/stylesheet) - Tyylien määrittely
- [React Native View](https://reactnative.dev/docs/view) - Pohjakomponentti layoutille
- [React Native Text](https://reactnative.dev/docs/text) - Tekstin näyttäminen

**React Hooks:**
- [React useState Hook](https://react.dev/reference/react/useState) - Tilanhallinnan perusteet
- [React Hooks Documentation](https://react.dev/reference/react) - Kaikki React Hooks

**Expo dokumentaatio:**
- [Expo Documentation](https://docs.expo.dev/) - Expo-alustan dokumentaatio
- [Expo CLI](https://docs.expo.dev/workflow/expo-cli/) - Komentorivityökalut
- [Expo Go App](https://expo.dev/client) - Sovelluksen testaus mobiililaitteella

**TypeScript:**
- [TypeScript Documentation](https://www.typescriptlang.org/docs/) - TypeScript-dokumentaatio
- [TypeScript with React Native](https://reactnative.dev/docs/typescript) - TypeScript React Native -sovelluksissa

**Työkalut ja ympäristöt:**
- [VS Code React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native) - Kehitystyökalut
- [Android Studio](https://developer.android.com/studio) - Android-emulaattori
- [Xcode](https://developer.apple.com/xcode/) - iOS-simulaattori

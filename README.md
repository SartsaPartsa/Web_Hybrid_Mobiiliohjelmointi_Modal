# Web & Hybrid Mobile Programming - Modal Exercise

## 📱 React Native Modal Demonstration

**Tekijä:** Sara Vehviläinen  
**Oppilaitos:** Oulun ammattikorkeakoulu  
**Kurssi:** Web- ja hybriditeknologiat mobiiliohjelmoinnissa (IN00CT08-3006)  
**Lukukausi:** Syksy 2025

## 🧩 Tehtävän kuvaus

Tämä harjoitus on osa kurssia "Web- ja hybriditeknologiat mobiiliohjelmoinnissa". Sovellus demonstroi **React Native Modal** -komponentin käyttöä TypeScript-ympäristössä.

### Toiminnallisuus:
- Käyttäjälle näytetään painike "Show modal message"
- Painiketta painamalla avautuu Modal-ikkuna
- Modal sisältää viestin ja Close-painikkeen
- Käyttäjä voi sulkea modaalin painamalla Close-painiketta tai Android-laitteissa laitteen Back-nappia

## ✨ Toteutuksen yksityiskohdat

### Käyttöliittymä:
- **Pressable-komponentti** näytöllä tekstillä "Show modal message"
- Painamalla painiketta avautuu Modal-ikkuna

### Modal-ominaisuudet:
- **Ei läpinäkyvä tausta**: `transparent={false}` - puhdas valkoinen tausta
- **Ei animaatiota**: `animationType="none"` - välitön näyttö ilman siirtymiä
- **Sulkeminen**: Close-painike tai Android Back-nappi (`onRequestClose`)
- **Tyylittely**: React Native StyleSheet-objektilla

### Tekninen toteutus:
- **State-hallinta**: useState Hook modaalin näkyvyyden hallintaan
- **TypeScript**: Tyyppiturvallisuus koodissa
- **React Native komponentit**: View, Text, Pressable, Modal

## 🛠️ Teknologiat ja työkalut

| Teknologia       | Versio   | Kuvaus                              |
|------------------|----------|-------------------------------------|
| **React Native** | 0.81.5   | Cross-platform mobiilisovelluskehys |
| **TypeScript**   | ~5.9.2   | Tyyppiturvallisuus JavaScriptille   |
| **Expo**         | ~54.0.22 | React Native kehitysympäristö       |
| **React**        | 19.1.0   | Käyttöliittymäkirjasto              |

### Käytetyt React Native komponentit:
- `View` - Pohjakomponentti layoutille
- `Text` - Tekstin näyttäminen
- `Pressable` - Painikkeiden toteutus
- `Modal` - Modal-ikkunoiden hallinta
- `StyleSheet` - Tyylimäärittely

## 🚀 Asennusohjeet

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

## 📁 Projektirakenne

```
Tehtava2/
  Modal/
    ├── App.tsx             # Sovelluksen pääkomponentti (TypeScript)
    ├── index.ts            # Sovelluksen käynnistyspiste  
    ├── package.json        # Projektin riippuvuudet ja npm-skriptit
    ├── app.json            # Expo-sovelluksen konfiguraatio
    ├── tsconfig.json       # TypeScript-konfiguraatio
    ├── assets/             # Kuvat ja staattiset resurssit
    └── node_modules/       # Asennetut riippuvuudet
```

## 🎯 Oppimistavoitteet

Tämän harjoituksen suoritettuaan opiskelija osaa:

- ✅ **Modal-komponentti**: React Native Modal -komponentin peruskäyttö
- ✅ **Vuorovaikutus**: Pressable-komponentin hyödyntäminen käyttöliittymässä
- ✅ **Tilanhallinta**: useState Hook:in käyttö komponentin tilan hallinnassa
- ✅ **Alustariippuvuus**: Android Back-napin toiminnallisuuden toteutus
- ✅ **Tyylittely**: React Native StyleSheet-objektin käyttö
- ✅ **TypeScript**: Tyyppiturvallisuuden hyödyntäminen React Native -sovelluksessa

## 📝 Teknisiä huomioita

| Ominaisuus                | Selitys                                                     |
|---------------------------|-------------------------------------------------------------|
| `animationType="none"`    | Ei animaatiota - modal ilmestyy välittömästi                |
| `transparent={false}`     | Ei läpinäkyvä tausta - puhdas valkoinen modal-näkymä        |
| `onRequestClose`          | Mahdollistaa Android Back-napin käytön modaalin sulkemiseen |
| `StyleSheet`              | React Native:n optimoitu tapa tyylien määrittelyyn          |
| `useState<boolean>`       | TypeScript-tyyppimäärittely boolean-tilalle                 |

## 📚 Oppimisresurssit

- [React Native Modal Documentation](https://reactnative.dev/docs/modal)
- [React Native Pressable Documentation](https://reactnative.dev/docs/pressable)
- [React useState Hook](https://react.dev/reference/react/useState)
- [Expo Documentation](https://docs.expo.dev/)

---

**💡 Vinkki:** Kokeile muuttaa `animationType`-arvoa (`"fade"`, `"slide"`, `"none"`) ja `transparent`-arvoa (`true`/`false`) nähdäksesi eri modal-tyylit!

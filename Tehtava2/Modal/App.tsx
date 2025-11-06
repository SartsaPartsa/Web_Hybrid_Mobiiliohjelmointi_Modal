/*
 * MODAL-KOMPONENTTI SOVELLUS
 * ==========================
 * Demonstroi React Native Modal-komponentin käyttöä
 * Sovellus näyttää painikkeen joka avaa modal-ikkunan
 */
import React, { useState } from 'react';
import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';

// Sovelluksen pääkomponentti
export default function App(): React.ReactElement {
  // TILAN HALLINTA
  // ==============
  // Modal-ikkunan näkyvyys (true = näkyy, false = piilotettu)
  const [visible, setVisible] = useState<boolean>(false);

  // KÄYTTÖLIITTYMÄN RAKENTAMINEN
  // ============================
  return (
    <View style={styles.container}>
      {/* PÄÄPAINIKE */}
      {/* Painettava alue joka avaa modal-ikkunan */}
      <Pressable onPress={() => setVisible(true)} hitSlop={8}>
        <Text style={styles.linkText}>Show modal message</Text>
      </Pressable>

      {/* MODAL-IKKUNA */}
      {/* Ponnahdusikkuna joka näkyy pääsisällön päällä */}
      <Modal
        visible={visible}                        // Näkyykö modal (sidottu tilaan)
        transparent={false}                      // Ei läpinäkyvä tausta
        animationType="none"                     // Ei animaatiota
        onRequestClose={() => setVisible(false)} // Android takaisin-nappi
      >
        <View style={styles.modalScreen}>
          <View style={styles.card}>
            {/* MODAALIN SISÄLTÖ */}
            <Text style={styles.cardTitle}>This is modal...</Text>

            <View style={styles.divider} />

            {/* SULJE-PAINIKE */}
            <Pressable onPress={() => setVisible(false)} hitSlop={8}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>

            <View style={styles.divider} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

// TYYLIMÄÄRITTELYT
// ================
const styles = StyleSheet.create({
  // PÄÄKONTAINERI
  container: {
    flex: 1,                        // Vie koko näytön
    backgroundColor: '#FFFFFF',     // Valkoinen tausta
    alignItems: 'center',           // Keskitä vaakasuunnassa
    justifyContent: 'center',       // Keskitä pystysuunnassa
  },

  // PÄÄPAINIKKEEN TEKSTI
  linkText: {
    fontSize: 16,                   // Tekstin koko
    color: '#222222',               // Tumman harmaa väri
  },

  // MODAL-IKKUNAN TAUSTA
  modalScreen: {
    flex: 1,                        // Vie koko näytön
    backgroundColor: '#FFFFFF',     // Valkoinen tausta
    alignItems: 'center',           // Keskitä vaakasuunnassa
    justifyContent: 'center',       // Keskitä pystysuunnassa
  },

  // MODAL-KORTTI
  card: {
    width: 300,                            // Leveys pikseleinä
    backgroundColor: '#FFFFFF',            // Valkoinen tausta
    borderRadius: 4,                       // Pyöristetyt kulmat
    borderWidth: StyleSheet.hairlineWidth, // Ohut reunaviiva
    borderColor: '#E0E0E0',                // Vaalean harmaa reunaviiva
    alignItems: 'center',                  // Keskitä sisältö
  },

  // MODAL-OTSIKKO
  cardTitle: {
    paddingVertical: 16,            // Pystysuuntainen padding
    paddingHorizontal: 12,          // Vaakasuuntainen padding
    fontSize: 14,                   // Tekstin koko
    color: '#333333',               // Harmaa väri
  },

  // EROTINVIIVA
  divider: {
    height: StyleSheet.hairlineWidth, // Ohuin mahdollinen korkeus
    alignSelf: 'stretch',            // Vie koko leveyden
    backgroundColor: '#E5E5E5',      // Vaalean harmaa väri
  },

  // SULJE-PAINIKKEEN TEKSTI
  closeText: {
    paddingVertical: 16,            // Pystysuuntainen padding
    paddingHorizontal: 12,          // Vaakasuuntainen padding
    fontSize: 14,                   // Tekstin koko
    color: '#333333',               // Harmaa väri
    fontWeight: '600',              // Hieman paksumpi fontti
  },
});

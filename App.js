import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Alert, View, Modal, Pressable } from 'react-native';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
        Alert.alert('Modal closed');
        setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredModal}>
          <View style={styles.modalStyle}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.closeText}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Pressable
        onPress={() => setModalVisible(true)}>
        <Text>Show Modal Message</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalStyle: {
    margin: 20,
    alignItems: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 10,
    width: '100%',
    padding: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 7,
  },
  centeredModal: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  modalText: {
    marginBottom: 20,
  },
  closeText: {
    marginTop: 20,
    fontWeight: 'bold',
  }
});

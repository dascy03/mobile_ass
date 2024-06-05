import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native'

const GoalCreationScreen = () => {
  const [goalAmount, setGoalAmount] = useState('')
  const [goalName, setGoalName] = useState('')
  const [wallet, setWallet] = useState('')
  const [category, setCategory] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSaveGoal = () => {
    // TODO: Implement logic to save the goal data
    console.log('Goal saved:', {
      goalAmount,
      goalName,
      wallet,
      category,
      startDate,
      endDate,
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Image
            source={require('../../assets/images/back-button.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mục tiêu</Text>
        <TouchableOpacity style={styles.addButton}>
          <Image
            source={require('../../assets/images/back-button.png')}
            style={styles.addIcon}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Tạo mục tiêu</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>VND</Text>
        <TextInput
          style={styles.input}
          value={goalAmount}
          onChangeText={setGoalAmount}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Tên mục tiêu</Text>
        <TextInput
          style={styles.input}
          value={goalName}
          onChangeText={setGoalName}
        />
      </View>
      <TouchableOpacity
        style={styles.selectContainer}
        onPress={() => {}}
      >
        <Text style={styles.selectLabel}>Chọn ví</Text>
        <Text style={styles.selectArrow}>&gt;</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectContainer}
        onPress={() => {}}
      >
        <Text style={styles.selectLabel}>Chọn danh mục</Text>
        <Text style={styles.selectArrow}>&gt;</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.selectContainer}
        onPress={() => {}}
      >
        <Text style={styles.selectLabel}>Tháng này (01/03 - 31/03)</Text>
        <Text style={styles.selectArrow}>&gt;</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSaveGoal}
      >
        <Text style={styles.saveButtonText}>Lưu</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#21B4A3',
  },
  backButton: {
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    padding: 10,
  },
  addIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  selectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectLabel: {
    fontSize: 16,
  },
  selectArrow: {
    fontSize: 20,
  },
  saveButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
})

export default GoalCreationScreen

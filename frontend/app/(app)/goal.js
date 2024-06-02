import React, { useState } from 'react'
import { router } from 'expo-router'

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native'

const Goal = ({ title, amount, progress, timeRemaining, icon }) => {
  return (
    <View style={styles.goalContainer}>
      <View style={styles.goalHeader}>
        <Image
          source={icon}
          style={styles.goalIcon}
        />
        <View>
          <Text style={styles.goalTitle}>{title}</Text>
          <Text style={styles.goalTime}>Còn {timeRemaining}</Text>
        </View>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${progress}%` }]} />
        <Text style={styles.progressAmount}>{amount.toLocaleString()} VND</Text>
      </View>
    </View>
  )
}

const GoalsScreen = () => {
  const [goals, setGoals] = useState([
    {
      title: 'Buffet trên máy bay',
      amount: 2304000,
      progress: 80,
      timeRemaining: '23 ngày',
      icon: require('../../assets/images/Food.png'),
    },
    {
      title: 'Mua tủ lạnh',
      amount: 50000000,
      progress: 46,
      timeRemaining: '2 tuần',
      icon: require('../../assets/images/Food.png'),
    },
    {
      title: 'Du lịch Hawaii',
      amount: 50000000,
      progress: 46,
      timeRemaining: '2 tháng',
      icon: require('../../assets/images/Food.png'),
    },
    {
      title: 'Mua tủ lạnh',
      amount: 50000000,
      progress: 46,
      timeRemaining: '2 tuần',
      icon: require('../../assets/images/Food.png'),
    },
  ])

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
      <View style={styles.savedAmount}>
        <Text style={styles.savedAmountText}>Bạn đã tiết kiệm được</Text>
        <Text style={styles.savedAmountValue}>1,305,000 VND</Text>
      </View>
      <TouchableOpacity
        style={styles.createGoalButton}
        onPress={() => router.push('/new_goal')}
      >
        <Text style={styles.createGoalButtonText}>Tạo mục tiêu</Text>
      </TouchableOpacity>
      <View style={styles.tabs}>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Mục tiêu của bạn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Đang thực hiện</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>Hoàn tất</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.goalsList}>
        {goals.map((goal, index) => (
          <Goal
            key={index}
            {...goal}
          />
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '##21B4A3',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
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
  savedAmount: {
    alignItems: 'center',
    padding: 20,
  },
  savedAmountText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  savedAmountValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  createGoalButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  createGoalButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  tab: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
  },
  tabText: {
    fontSize: 16,
    color: '#fff',
  },
  goalsList: {
    padding: 20,
  },
  goalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
  goalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  goalIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  goalTime: {
    fontSize: 14,
    color: '#808080',
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
  },
  progressFill: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#FFD700',
  },
  progressAmount: {
    marginLeft: 10,
    fontSize: 14,
    color: '#808080',
  },
})

export default GoalsScreen

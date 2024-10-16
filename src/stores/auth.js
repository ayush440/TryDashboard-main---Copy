import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    isAuthenticated: false,
  }),
  actions: {
    async login(email, password) {
      // In a real application, you would make an API call here
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const user = this.findUser(email)
          if (user && user.password === password) {
            this.user = { email: user.email, name: user.name }
            this.isAuthenticated = true
            localStorage.setItem('user', JSON.stringify(this.user))
            resolve(this.user)
          } else {
            reject(new Error('Invalid email or password'))
          }
        }, 1000) // Simulate API delay
      })
    },
    async signup(name, email, password) {
      // In a real application, you would make an API call here
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (this.findUser(email)) {
            reject(new Error('Email already exists'))
          } else {
            const newUser = { name, email, password }
            // In a real app, you would save this to a database
            localStorage.setItem(`user_${email}`, JSON.stringify(newUser))
            resolve(newUser)
          }
        }, 1000) // Simulate API delay
      })
    },
    logout() {
      this.user = null
      this.isAuthenticated = false
      localStorage.removeItem('user')
    },
    checkAuth() {
      const user = localStorage.getItem('user')
      if (user) {
        this.user = JSON.parse(user)
        this.isAuthenticated = true
      }
    },
    findUser(email) {
      // In a real app, you would query a database
      const user = localStorage.getItem(`user_${email}`)
      return user ? JSON.parse(user) : null
    },
  },
})
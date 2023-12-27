'use client'

import Cookies from 'js-cookie'
import { createContext, useContext, useEffect, useState } from 'react'

export const AuthContext = createContext(null)

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthloading, setIsAuthLoading] = useState(true)
  const user = Cookies.get('user')

  useEffect(() => {
    if (user) {
      setIsAuthenticated(true)
    }
    setIsAuthLoading(false)
  }, [])

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, isAuthloading }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error(
      'useNavbarVisibilityContext must be used within a useNavbarVisibilityProvider'
    )
  }
  return context
}

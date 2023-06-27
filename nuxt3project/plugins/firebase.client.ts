import { initializeApp, getApps } from 'firebase/app'
import { getAuth } from 'firebase/auth'


export default defineNuxtPlugin(({ provide }) => {
  const runtimeConfig = useRuntimeConfig()
  const config = process.env.NODE_ENV === 'development' ? firebaseConfig : runtimeConfig.firebase
  const firebaseApp = getApps()[0] ?? initializeApp(config)
  const firebaseAuth = getAuth(firebaseApp)

  // set user on client when available
  firebaseAuth.onAuthStateChanged(signInCallback)

  provide('firebase', firebaseApp)
  provide('auth', firebaseAuth)

  if ('serviceWorker' in window.navigator && process.env.NODE_ENV !== 'development') {
    window.navigator.serviceWorker.register('/sw.js')
  }
})

const signInCallback = (token) => {
  const { email, accessToken } = token || {
    email: undefined,
    token: undefined
  }
  if (!email || !accessToken) { return }

  const { user } = useAuth()
  user.value = { email }

  // set cookie for server side
  const cookie = useCookie('authToken')
  if (!cookie.value) { cookie.value = accessToken }
}

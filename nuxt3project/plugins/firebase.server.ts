import admin, { ServiceAccount } from 'firebase-admin'
import 'firebase/compat/auth'
import serviceAccount from '../firebase.json'

export default defineNuxtPlugin(({ ssrContext }) => {
  admin.apps?.length === 0 &&
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount as ServiceAccount)
    })

  // get auth token from headers
  const tokenHeader = ssrContext.event.req.headers.authorization?.substring('Bearer '.length)
  const tokenCookie = useCookie('authToken')

  if (!tokenHeader && !tokenCookie.value) { return }

  const { user } = useAuth()
  admin
    .auth()
    .verifyIdToken(tokenHeader || tokenCookie.value)
    // get properties from decoded id token
    .then(({ email }) => (user.value = { email }))
})

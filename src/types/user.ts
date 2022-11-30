export interface user {
  name: string
  email: string
  password: string
  _id: string
  tipo: 'admin' | 'normal'
  aditionalData: aditionalData
}
interface aditionalData {
  typeAuth: 'normal' | 'facebook' | 'google'
}

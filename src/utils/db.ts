import { connect, connection, connections } from 'mongoose'
export const dbInit = (): any => {
  if (connections.length !== 0) {
    connect(process.env.DB_URI as string, {
      autoIndex: true
    })
    connection.on('conection', () => {
      console.log('mongo conected')
    })
  }
}

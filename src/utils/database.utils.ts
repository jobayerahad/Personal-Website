import mongoose from 'mongoose'

export const connectToDB = async () => {
  mongoose.set('strictQuery', true)

  if (mongoose.connection.readyState === 1) return

  try {
    await mongoose.connect(process.env.DB_URL!, {
      dbName: process.env.DB_NAME!
    })
  } catch (error) {
    throw error
  }
}

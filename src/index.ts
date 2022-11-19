import app from './app'
app.listen(process.env.PORT, () => {
  console.log(`listen on ${process.env.PORT as string}`)
})

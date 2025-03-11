import app from "./index.js"

const port = 8080

app.listen(port, () => {
	const logTime = () => new Date().toLocaleString()
	const clearLog = () => process.stdout.write('\x1Bc') 

	clearLog()

	console.log(`Calc Appp Listening \nOn Port:${port}`)
	console.log(logTime())
}) 

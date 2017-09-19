start: 
		docker run -p 8080:8080 -d lazycoder/sms-sender-app

build: 
		docker build -t lazycoder/sms-sender-app .

test:
		npm run test
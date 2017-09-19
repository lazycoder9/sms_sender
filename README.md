# SMS Sender Service

Install Docker

Start service locally:
```
git clone https://github.com/lazycoder9/sms_sender.git
make build
make start
```

## Usage
Send POST request to `http://localhost:8080/api/send` in format:
```
{
  "type": <message_type>,
  "to": <receiver_number>,
  "payload": <data_for_message>
}
```

## Message types:
### Notification
type: 'notification'  
payload: { event: <event_name>, time: <event_time> }

### Info
type: 'info'  
payload: { message: <your_mesage> }

### Authorization Code
type: 'authCode'  
payload: { code: <authoriation_code> }

### Login Notification
type: 'logNotify'  
payload: { time: <your_mesage>, device: <device_type>, location: <geolocation> }
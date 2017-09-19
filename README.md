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
  "payload": <data_for_message>,
  "language": <message_language>
}
```

Available languages: `en`, `ru`.

## Message types:
### Notification
type: 'notification'  
payload: { event: <event_name>, time: <event_time> }

Received message:
```
Notification:
Event: <your_event_name>
Time: <your_event_time>
```

### Info
type: 'info'  
payload: { message: <your_mesage> }

Receiver will get just your message

### Authorization Code
type: 'authCode'  
payload: { code: <authoriation_code> }

Received message:
```
Your authorization code: <authorization_code>
```

### Login Notification
type: 'logNotify'  
payload: { time: <auth_time>, device: <device_type>, location: <geo_location> }

Received message:
```
We detected a login into your account from a new device on <auth_time>.
Device: <device_type>
Location: <geo_location>
```
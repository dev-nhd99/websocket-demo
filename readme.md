# Setup

```bash
Step 1 Gen ssl for server wss

openssl genrsa -out private-key.pem 2048


openssl req -new -key private-key.pem -out certificate.csr \
    -subj "/C=US/ST=State/L=City/O=Organization/OU=OrgUnit/CN=localhost"


openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout private-key.pem -out certificate.pem \
    -subj "/C=US/ST=State/L=City/O=Organization/OU=OrgUnit/CN=localhost" \
    -addext "subjectAltName=DNS:localhost"

Step 2 

Config https local 


```
# Run 
```bash

npm i 

node server-wss.js

run websocket with liveserver

```


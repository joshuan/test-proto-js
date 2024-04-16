# Server

```bash
node server.js
```

# Client

Action

```bash
node client.js
```

Result

```
Response: {
  message: 'Hello Vasya',
  peopleUndefined: null,
  peopleNull: null,
  peopleObject: { name: 'Vasya', age: 32 }
}
```

### grpcurl

Action

```bash
grpcurl -vv -plaintext \
    -d "{\"name\": \"Vasya\", \"age\": 30}" \
    -proto ./proto/hello_world.proto \
    localhost:50051 \
    helloworld.HelloWorldService/SayHello
```

Result

```
Response contents:
{
  "message": "Hello Vasya",
  "peopleObject": {
    "name": "Vasya",
    "age": 30
  }
}
```
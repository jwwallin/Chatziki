# Tzatt server

## Redux action content definitions
### message
```
{
  type: 'message',
  channel:"general",
  message: {
    userId: 0,
    timestamp: new Date(),
    content: "Yo dawg!"
  }
}
```
### init
```
{ 
  type: 'init',
  data: {
    user: {
        id: 123,
        name: "username",
        admin: false
    },
    users: {
      "132": {
          name: "username2"
      }
    },
    channels: {
      "0": {
        name: "general",
        messages: {
          "1": {
            ...
          },
          ...
        }
      }
    }
  }
}
```

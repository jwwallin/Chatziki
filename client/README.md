# ReactJS frontend for the chat application

## Redux data model

```
{
  Channels: [
    {
      channelId: int
      Name: string
      Messages: [
        senderId: int
        Timestamp: date / ISOstring ?
        Message: string
      ]
    }
  ],
  visibleChannel: string,
  messageField: string,
  User: {
    Id: int
    Name: string
    isAdmin: boolean
    Authorized: boolean
    Authorizing: boolean
  }
  Users: [
    {
      Name: string
      isAdmin: boolean
    }
  ]
}
```
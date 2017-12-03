tzatt_wit_konste

# Socket.io emits

## Client emits
* connect
  * Send the user's personal information
  * Send list of users
  * Send some of the newest messages
* message <data>
  * Relay to other users
* join <channel>
  * Send some of the newest messages
* leave <channel>
  * Confirmation
* create <channel>
  * Confirmation

## Server emits
* init 
  * Send the user's personal information
  * Send list of users
  * Send some of the newest messages
* message <data>

# Installing mongoDB
Install according to [this tutorial](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/).

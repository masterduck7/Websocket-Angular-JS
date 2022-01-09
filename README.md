# Websocket-Angular-JS

**Proof of concept**

Create a web app that can create a room and other players can join them. The users in the room make an action and the other users can be notified about that.

Obs: It's only a experimental app, you can see the messages in the logs in chrome console.

- Use socket.io and save the room in a cookie
- Backend created with nodeJS
- Frontend created with Angular 13

**Logics**

- User joins to a room
- Server add that user to a socket room
- User clicks in the view and send the coordinates of mouse when was clicked
- The backend sends that values to the other users in the room

**Run app**

- Frontend running in http://localhost:4200
- Backend running in http://localhost:3000
- To access a room go to http://localhost:4200/rooms/name-of-room (If no room a new was will be created)

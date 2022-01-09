# Websocket-Angular-JS

Proof of concept

Create a web app that can create a room and other players can join them. The users in the room make an action and the other users can be notified about that.

- Use socket.io
- Backend created with nodeJS
- Frontend created with Angular 13

Logics

- User joins to a room
- Server add that user to a socket room
- User clicks in the view and send the coordinates of mouse when was clicked
- The backend sends that values to the other users in the room

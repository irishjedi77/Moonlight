# Moonlight (Project#3)

### Purpose 
Moonlight is a commission free app specific to web development where freelancers and clients can connect. We eliminate some of the challenges for clients and developers associated with other freelancing sites by monitoring project rates to ensure fair compensation and avoiding bidding wars. There is also no cap on the number of jobs a freelancer can apply for. 

### Design Process
We used a Material UI Kit with basic elements included: https://demos.creative-tim.com/material-kit-react/#/
We also integrated several Material UI elements into the app: https://material-ui.com/

The app uses a Node and Express web server backed by a MongoDB using Mongoose.

Users are authenticated via passport.authenticate Connect middleware.

The app uses React “Context” to share data/values between components without having to explicitly pass a prop through every level of the tree.

### How it Works

Clients sign up and provide details on their organization and the nature of their projects, which are stored in a profile that is visible to others, but can only be edited by the client/user. 

Clients can then post projects and compensation details that are visible to the freelancer community. 

Clients can edit their profiles and project details at any time by logging in. 

### Demo
https://blooming-meadow-15961.herokuapp.com/


### Team Members 
 Christian Mader 
 Erin Lyden 


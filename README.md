### The Backend code of the YouTube Series Blog app development from scratch using (Flutter, ExpressJS, NodeJS, MongoDB, Heroku, MongoDB Atlas) :smile: .

#### The YouTube Channle Link -: [Channle link](http://www.youtube.com/c/DevStack)

#### Mian Youtube Playlist Link-: [Playlist Link](https://www.youtube.com/playlist?list=PLtIU0BH0pkKoE2PBvgbHEBPAP-sd670VI)

#### Only Backend Development part playlist -: [Playlist Link](https://www.youtube.com/playlist?list=PLtIU0BH0pkKqypuOtDhcXZ4oATJfji49r)

#### Rest API Documenatation [Link](https://documenter.getpostman.com/view/10970931/T17GgTfe)

Before going to code make sure to install mongoDB database on your local system :sweat_smile: .For installing mongoDB you can take help from the [This video](https://www.youtube.com/watch?v=3Pol218EKcQ) .For this project I am using the [Mongoose](https://mongoosejs.com/).

Below are the some basic syntax for your help after installing the mongoDB.

- For starting the server
  > sudo service mongod start
- For stoping the server
  > sudo service mongod stop
- For restarting the server
  > sudo service mongod restart

**Note -:Above codes are valid for linux only.For windows user can follow this [link](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/) :wink:**

_**Fork this repository and then clone it because after forking it you will be updated if i will change the code here:wink:**_

## **Back End Code folder structure**

- model
  - All Mongoose model schemas
- routes
  - All end points codes are here(routes folder)
  <!-- - uploads
  - After uploading any profile picture the image will be stored in this folder -->
- index.js file (main Source file)
- middleware.js (middleware for token validation)
- config.js(helper function for middleware.js file)

### Get the code

1. Fork this repository
2. Then create a new folder on you local system, where you want to keep the code.
3. Create an empty git repository on that folder.
   > git init
4. Copy your forked GitHub repository url
5. Now pull the code on yoor system
   > git pull origin master

Or, else just clone this repository :sweat_smile:

### 1) To run the Rest Server on local system folow this steps-:

1. For installing all the necessary npm packages-

> \$ npm install

2.Now,the app is connected to the local mongoDb databse .You must start the mongoDb server before running the backend server .

> sudo service mongod start

3. Below given,is the code of connecting the mongoDB with nodeJs (index.js file) for more details you can follow this video [Link](https://www.youtube.com/watch?v=kFJaXNP_YpI&t=1s) for more information-:

```javascript
mongoose.connect("mongodb://localhost:27017/blogDB", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
```

4. Start the server by using below code

> \$ npm run dev

5. It will launch the server on [http://localhost:5000](http://localhost:5000) this url.
   **This localhost url is a base url you will need this while connecting your rest server with flutter app**

### If suppose at the same time working with Flutter , Node/Express, and MongoDB your system will be hang them you can host this rest server on heroku cloud(free). So you only need to bother about the flutter code.

### 2) Remote Rest server setup

1. First you have to host your MongoDB database on MongoDb Atlas server(Free), for that follow this video [link](https://www.youtube.com/watch?v=8hYmtIi9Pfk&t=43s)
2. Then deploy your NodeJs Rest Server on Heroku, for that follow this video [link](https://www.youtube.com/watch?v=_Cq5pQTIhWQ&t=1s)
3. After that heroku will genrate a final endponits(url). That url will be base url for our flutter app.

### 3) Alternatively here is my base url for my flutter blog app. You can use it if you find any difficulty on above methods.

Note-: If many person will use this url then there will be chance that my free hosting on MongoDB Atlas server exhausted. At that time I will delete some data from the server :sweat_smile:. So my humbel request is to craete your own dedicated rest server :sweat_smile:.

Link- [https://sheltered-waters-80365.herokuapp.com/](https://sheltered-waters-80365.herokuapp.com/)

**Note -: Make sure you Subscribed my YouTube channle also give star to this repository :sweat_smile:**

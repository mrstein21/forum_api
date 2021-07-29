const port = process.env.PORT || 8000;
var express=require("express");
const app = express();
const socketIO=require('socket.io');
var online_users=[];
var forumRepository=require("./repository/forum_repository")
var bodyParser = require('body-parser');
app.use(express.json());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Accept, Origin, Content-Type, access_token,Authorization');
  res.header('Access-Control-Allow-Credentials',true);
  next();
});

app.use('/forum', require('./routes/forum_routes'));
app.use('/auth', require('./routes/users_routes'));



data = {
    success:true,
    msg: "Welcome on Forum API",
  };
  
app.route("/").get((req, res) => res.json(data));  
var server=app.listen(port, "0.0.0.0", () =>
console.log(`welcome your listening at port ${port}`)
);
const io=socketIO(server);

//// disini proses socket realtime nya

io.on("connection", function (socket) {
  socket.on("online_users",(data)=>{
    ///ketika koneksi terhubung dari frontend langsung kirim event online_user 
    /// berisi nama dan id kemudian di binding ke variable online_users
    online_users.push({
       "id":data["id"],
       "name":data["name"],
       "socket_id":socket.id
    });
    ///socket id perlu jika kita mengirimkan pesan ke user tertentu

    /// ketika sudah di binding ,server akan mengirimkan event online_users serta variable
    //array online_users
    socket.emit("online_users",online_users);
  });

  ///delete user dari online_users ketika event offline_user diterima
  socket.on("offline_users",(data)=>{
    for(let i=0; i < online_users.length; i++){
      if(online_users[i].id=== data["id"].toString()){
          online_users.splice(i,1); 
      }
    }
    socket.emit("online_users",online_users);
  });


  socket.on('disconnect',()=>{
    // event disconnect untuk delete users yang sudah tidak aktif pada variable
    //online_users            
    for(let i=0; i < online_users.length; i++){
        if(online_users[i].socket_id === socket.id){
            online_users.splice(i,1); 
        }
    }
    socket.emit('online_users',online_users); 
});


  socket.on("question",async(data)=>{
     var list=await forumRepository.add_question(data.data);
     var broadcast_data={
       "notification":data.notification,
       "data":list[0]
     }
     socket.emit("question",broadcast_data);
  });

  socket.on("answer",async(data)=>{
    var list=await forumRepository.add_answer(data.data);
    var broadcast_data={
      "notification":data.notification,
      "data":list[0]
    }
    console.log("mengirim data answer");
    socket.emit("answer",broadcast_data);
    for(var i=0;i<online_users.length;i++){
      if(online_users[i].id.toString()==data.data.user_id.toString()){
          console.log("mengirim data notifikasi");
          ///kirim event ke pengguna tertentu berdasarkan socket id
          io.to(online_users[i].socket_id).emit("notification",broadcast_data);
      }
    }
 });  

  console.log("Made socket connection");
});

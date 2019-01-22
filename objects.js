var playlist=new Object({Eason: "Finally"});

function updatePlaylist(obj, artistName, songTitle){
  return Object.assign(obj,{[artistName]:songTitle});
}

function removeFromPlaylist(obj, name){
<<<<<<< HEAD
  delete obj[name];
=======
  delete obj.name;
>>>>>>> 56fdf7e739389b705a36ce8244aa1d68e80a8c14
  return obj;

}

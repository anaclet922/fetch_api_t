initiate();


//function to fetch all users
async  function initiate() {
	var url = "https://jsonplaceholder.typicode.com/users";
	const response = await fetch(url);
	var data = await response.json();

   if(data){
   	console.log("Data fetched!");
   	var tr = '<tr>';
   	for(var i = 0; i < data.length; i++){ 
	    	tr += '<td class="no">' + (i + 1) + '</td>';
	    	tr += '<td>' + data[i].name + '</td>';
	    	tr += '<td>' + data[i].email + '</td>';
	    	tr += '<td><button class="btn btn-primary" onclick="getUserPosts(' + data[i].id + ', \'' + data[i].name + '\')">Get User’s Posts</button></td>';
	    	tr += '</tr>';
	   }
	   document.getElementById("users-list").innerHTML = tr;
	   document.getElementById('loader').style.display = 'none';
   }   
}


//async function to fecth posts of a given user (user id passed argument)
async function getUserPosts(user_id, name){
	document.getElementById('loader').style.display = 'block';
	document.getElementById('users-table').style.display = 'none';
	document.getElementById('posts-table').style.display = 'block';

	var url = "https://jsonplaceholder.typicode.com/posts?userId=" + user_id;
	const response = await fetch(url);
	var data = await response.json();

	if(data){
   	console.log("Data fetched!");	   var tr = '<tr>';
	   for (var i = 0; i < data.length; i++) {
	    	tr +=  '<td class="number-on-post">' + (i + 1) + '</td>';
	    	tr += '<td><h4 class="titles">' + data[i].title + '</h4>' + data[i].body + '</td>';
	    	tr += '</tr>';
	   }
    document.getElementById('posts-list').innerHTML = tr;
    document.getElementById('table-title').innerHTML = name + '\'s posts';
    document.getElementById('loader').style.display = 'none';
    document.getElementById('back-home-btn').style.display = 'block';
   }  
}



//when back to users' list button clicked
function backTo_home(){
	document.getElementById('back-home-btn').style.display = 'none';	
	document.getElementById('users-table').style.display = '';
	document.getElementById('posts-table').style.display = 'none';
}
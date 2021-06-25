function create(){

        alert("Creating container,  click ok to continue ")

	var img = document.getElementById("imgname").value;
	var  con = document.getElementById("cname").value;
	xhr = new XMLHttpRequest();
	xhr.open("GET","http://192.168.43.61/cgi-bin/create.py?n=" +con+ '&i=' +img, true);
	xhr.send();
	xhr.onload=function (){
		output = xhr.responseText;
		
		output = output + "\n\n!!! Container Created !!!";
		document.getElementById("output").innerHTML = output;
	}
}


function del(){


	alert('You really want to delete the container !!, Click ok to continue ');
            cname = document.getElementById("contd").value;
            xhr = new XMLHttpRequest();
            xhr.open('GET','http://192.168.43.61/cgi-bin/delete.py?n='+cname,'true');
            xhr.send();
            xhr.onload=function (){
                output = xhr.responseText;
		
		output = "Container " + output + " Deleted"
                document.getElementById("output").innerHTML = output;
            }
    }



function lwa(){ 
	
	
	var i = document.getElementById("mi").value;
	var xhr = new XMLHttpRequest();
	xhr.open("GET" , "http://192.168.43.61/cgi-bin/lw.py?x=" + i, true);
	xhr.send();
	xhr.onload = function(){
		var output = xhr.responseText;
		document.getElementById("output").innerHTML = output;
	}
}





function list_image(){

    alert("Showing you the full list of Images,  click ok to continue ")

    con = new XMLHttpRequest();
    con.open('GET','http://192.168.43.61/cgi-bin/list.py','true');
    con.send();
    con.onload=function (){
        output = con.responseText;
        document.getElementById("output").innerHTML = output;
    }

}

function list_container(){
        alert("Showing you the full list of conatiners,  click ok to continue ")

    con = new XMLHttpRequest();
    con.open('GET','http://192.168.43.61/cgi-bin/list_cont.py','true');
    con.send();
    con.onload=function (){
        output = con.responseText;
        document.getElementById("output").innerHTML = output;
    }
}




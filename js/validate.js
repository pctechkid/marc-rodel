	function validate(){
		var username=document.getElementById("username").value;
		var password=document.getElementById("password").value;
		if(username=="m4rc1516"&& password=="nasabayabasan1516")
		{
			document.getElementById("le-alert").classList.add('fade');
			document.getElementById("le-alert").classList.remove('alert-danger');
			document.getElementById("le-alert").classList.remove('alert-warning');
			document.getElementById("le-alert").classList.add('alert-success');
			document.getElementById("alertlabel").innerHTML = "Success!";
			document.getElementById("alertsubtext").innerHTML = "Please wait, redirecting to dashboard.";
			$('#le-alert').addClass('in');
			return true;
		}
		else
		{
			document.getElementById("le-alert").classList.add('fade');
			document.getElementById("le-alert").classList.remove('alert-success');
			document.getElementById("le-alert").classList.remove('alert-warning');
			document.getElementById("le-alert").classList.add('alert-danger');
			document.getElementById("alertlabel").innerHTML = "Error!";
			document.getElementById("alertsubtext").innerHTML = "Invalid username / password.";
			$('#le-alert').addClass('in');
			return false;
		}
	}
	
	$('.close').click(function () {
      $(this).parent().removeClass('in');
    });
	
	function proceed(){
		setTimeout(function () {
			location.replace('dashboard.html');
		}, 2000);
	}
var win = Titanium.UI.currentWindow;

var pantalla = Titanium.UI.createView({
	top:0,
	left:0,
	width: '100%',
	height: '100%',
	backgroundColor: 'white',
	layout: 'vertical',
	zIndez:9999
});

var imagen = Titanium.UI.createImageView({
	backgroundImage: '/img/ini.jpg',
	top:'0',
	left:'0',
	height:'70%',
	width:'100%'
});

var username = Titanium.UI.createTextField({
	color:'#336699',
	width:300,
	height:40,
	hintText:'Username',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var password = Titanium.UI.createTextField({
	color:'#336699',
	width:300,
	height:40,
	hintText:'Password',
	passwordMask:true,
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});


var loginBtn = Titanium.UI.createButton({
	title:'Login',
	width:90,
	height:35,
	borderRadius:1,
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	Color: '#000000'
});


win.add(pantalla);
pantalla.add(imagen);
pantalla.add(username);
pantalla.add(password);
pantalla.add(loginBtn);



var loginReq = Titanium.Network.createHTTPClient();

loginReq.onload = function()
{
    var json = this.responseText;
    var response = JSON.parse(json);
    if (response.logged == true)
    {
        username.blur();
        password.blur(); 
        Ti.App.fireEvent('grantEntrance', {
            name:response.name,
            email:response.email,
            latitud:response.latitud,
            longitud:response.longitud
        });
        win.close();
    }
    else
    {
        alert(response.message);
    }
};

loginReq.onerror = function()
{
	alert("Error de red");
};




loginBtn.addEventListener('click',function(e)
{
	if (username.value != '' && password.value != '')
	{
		loginReq.open("POST","http://yyx.zz.vc/post_auth.php");
		var params = {
			username: username.value,
			password: Ti.Utils.md5HexDigest(password.value)
		};
		loginReq.send(params);
	}
	else
	{
		alert("se requiere usuario y contraseña");
	}
});
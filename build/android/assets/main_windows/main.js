if(Ti.Network.online){
        Ti.Geolocation.purpose = "Receive User Location";
        Titanium.Geolocation.getCurrentPosition(function(e){

            if (!e.success || e.error)
            {
                alert('No pudimos encontrar tu ubicacion');
                return;
            }
            var longitude = e.coords.longitude;
            var latitude = e.coords.latitude;

            alert("latitud: " + latitude + "longitud: " + longitude);

        });
    }else{
        alert("Error de red");
    }
    
    
    var win = Titanium.UI.currentWindow;

var pantalla = Titanium.UI.createView({
	top:0,
	left:0,
	width: '100%',
	height: '80%',
	backgroundColor: 'white',
	layout: 'vertical',
	zIndez:9999
});

var footer = Titanium.UI.createView({
	bottom:0,
	left:0,
	width: '100%',
	height: '20%',
	backgroundColor: 'grey',
	layout: 'horizontal',
	zIndez:9999
});

win.add(pantalla);
win.add(footer);

var anteriores = Titanium.UI.createLabel({
    text:"Coordenadas anteriores:",
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:18},
    width:'100%',
    height:'auto',
    color: '#000'
});

var latitud = Titanium.UI.createLabel({
    text:"Latitud: " + win.latitud,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:18},
    width:'100%',
    height:'auto',
    color: '#000'
});

var longitud = Titanium.UI.createLabel({
    text:"longitud: " + win.longitud,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:18},
    width:'100%',
    height:'auto',
    color: '#000'
});

var latitude = Titanium.UI.createLabel({
    text:"Latitud: " + win.latitude,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:18},
    width:'100%',
    height:'auto',
    color: '#000'
});

var longitude = Titanium.UI.createLabel({
    text:"longitud: " + win.longitude,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:18},
    width:'100%',
    height:'auto',
    color: '#000'
});

var actualizar = Titanium.UI.createButton({
	title:'actualizar mis coordenadas',
	color:'#000000',
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	width:300
	
});

var nombre = Titanium.UI.createTextField({
	color:'#336699',
	top:30,
	width:300,
	height:40,
	hintText:'Nombre del lugar',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var direccion = Titanium.UI.createTextField({
	color:'#336699',
	top:30,
	width:300,
	height:40,
	hintText:'Direccion',
	keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
	returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

var ubicacion = Titanium.UI.createButton({
	title:'compartir ubicacion',
	color:'#000000',
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	width:300,
	
});

var cuenta = Titanium.UI.createButton({
	title:'CUENTA',
	color:'#ccc',
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	width:'50%',
	height:'100%',
	
});

var perfil = Titanium.UI.createButton({
	title:'PERFIL',
	color:'#ccc',
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	width:'50%',
	height:'100%',
	
});

pantalla.add(anteriores);
pantalla.add(latitud);
pantalla.add(longitud);
pantalla.add(latitude);
pantalla.add(longitude);
pantalla.add(actualizar);
pantalla.add(nombre);
pantalla.add(direccion);
pantalla.add(ubicacion);
footer.add(cuenta);
footer.add(perfil);




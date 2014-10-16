Ti.UI.setBackgroundColor('#fff');

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

win.add(pantalla);

var ubicacion = Titanium.UI.createButton({
	title:'prueba',
	color:'#000000',
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	width:300
	
});

var ecuenta = Titanium.UI.createButton({
	title:'Editar Datos Cuenta',
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	color:'#000000',
	width:300,
	top:50
	
});

var eperfil = Titanium.UI.createButton({
	title:'Editar Perfil',
	font:{fontFamily:'Arial',fontWeight:'bold',fontSize:14},
	color:'#000000',
	width:300,
	top:50
});
 
var msg = Titanium.UI.createLabel({
    text:" Yobjects on your window.\n\nYour email is:\n" + win.email + "\n\nyour name is:\n" + win.name,
    left:10,
    width:300,
    height:'auto'
});

pantalla.add(ubicacion);
pantalla.add(eperfil);
pantalla.add(ecuenta);
pantalla.add(msg);

win.open();
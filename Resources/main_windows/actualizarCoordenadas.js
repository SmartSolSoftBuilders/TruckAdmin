if(Ti.Network.online){
        Ti.Geolocation.purpose = "Receive User Location";
        Titanium.Geolocation.getCurrentPosition(function(e){

            if (!e.success || e.error)
            {
                alert('No pudimos encontrar tu ubicacion');
                return;
            }
            var longitud = e.coords.longitude;
            var latitud = e.coords.latitude;

            alert("latitud: " + latitud + "longitud: " + longitud);

        });
    }else{
        alert("No cuentas con conexion a internet");
    }
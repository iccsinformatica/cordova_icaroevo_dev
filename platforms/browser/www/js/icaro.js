
/*
var onSuccess = function (position) {

    var element = document.getElementById('geolocation');

    element.innerHTML = 'Latitude: ' + position.coords.latitude + '\n' +
        'Longitude: ' + position.coords.longitude + '\n' +
        'Altitude: ' + position.coords.altitude + '\n' +
        'Accuracy: ' + position.coords.accuracy + '\n' +
        'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
        'Heading: ' + position.coords.heading + '\n' +
        'Speed: ' + position.coords.speed + '\n' +
        'Timestamp: ' + position.timestamp + '\n'
        + '<hr />' + element.innerHTML;
};

function onError(error) {
    alert('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
}
*/
function getDate() {
    var d = new Date();
    var strDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();

    return strDate;
}

function getHeader() {

    var nome_operatore = localStorage.getItem('nome_operatore');
    var cognome_operatore = localStorage.getItem('cognome_operatore');
    var descrizione_struttura = localStorage.getItem('descrizione_struttura');

    var dettaglio = descrizione_struttura;
    var nominativo = cognome_operatore + " " + nome_operatore;

    //var descrizione=getLocal("descrizione");
    var device_model = getLocal("device_model");
    var idutente = getLocal("idutente");
    //var nominativo=getLocal("nominativo");

    var string_utente = nominativo + " (" + idutente + ")";

    /*if (isiPhone()) {
        var header_small = '\<div class="header header-logo-left header-fixed pl-3 header-active" style="height: 100px; padding-top: 35px" id="first_header">\
            <span class="font-12" id="span_utente">' + string_utente + '</span><span class="header-title" style="line-height: 30px;">'+ dettaglio + '<br></span>\
           <span href="javascript:void(0)" onclick="window.location=(\'simeal_impostazioni.html\');"  class="header-icon header-icon-1"><i class="fa fa-cog"></i></span>\
       </div>';
    }
    else {*/
    var header_small = '\
        <div class="d-flex flex-row " style="margin-left:10%; top:0;"  >\
            <img id="logo" name="logo" src="./img/person.svg" "/>\
            <div style="width:50%; margin-left:5%;>\
                <h6 style="font-family: Verdana; margin-top:5%; margin-left:5%;" class="style-text"><b>'+ nominativo + '<br>Data: ' + getDate() + '<br>' + dettaglio + '</b></h6>\
            </div>\
            <div style="width: 20%; margin-right:5%; ">\<button type="button" class="btn btn-warning" onclick="logout();">\Logout\</button>\</div>\
        </div>';
    //}

    $("#div_header_small").html(header_small);
}

function getLocal(key) {
    value = localStorage.getItem(key);
    return value;
}

function setSession(key, value) {
    sessionStorage.setItem(key, value);
}

function setLocal(key, value) {
    localStorage.setItem(key, value);
}

function getSession(key) {
    value = sessionStorage.getItem(key);
    return value;
}

function destroySession(key) {
    value = sessionStorage.removeItem(key);
    return value;
}

function logout() {

    function onConfirm(button) {

        if (button == 1)
            window.location = ("icaro_login.html");
    }

    navigator.notification.confirm(
        'Sicuro di voler effettuare il logout?',
        onConfirm,
        'Attenzione'
    );


}

function isiOS() {
    return (isiPhone() || isiPad());
}
function isiPhone() {
    var success = false;

    if (device.model.indexOf("iPhone") != -1)
        success = true;

    return success;
}
function isiPad() {
    var success = false;

    if (device.model.indexOf("iPad") != -1)
        success = true;

    return success;
}

function get_currentDATAFORCALL() {
    var currentdate = new Date();
    var month = '';
    switch ((currentdate.getMonth() + 1)) {
        case 1:
            month = "01";
            break;
        case 2:
            month = "02";
            break;
        case 3:
            month = "03";
            break;
        case 4:
            month = "04";
            break;
        case 5:
            month = "05";
            break;
        case 6:
            month = "06";
            break;
        case 7:
            month = "07";
            break;
        case 8:
            month = "08";
            break;
        case 9:
            month = "09";
            break;
        case 10:
        case 11:
        case 12:
            month = currentdate.getMonth() + 1;
            break;
        default:
            break;
    }
    var datetime = currentdate.getFullYear() + "-" + month
    //var datetime = "Now: " + currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/"+ currentdate.getFullYear() + " @ "+ currentdate.getHours() + ":"+ currentdate.getMinutes() + ":"  + currentdate.getSeconds();

    return datetime;
}

function get_DATAFORCALL(mese, anno) {

    var month = '';
    switch (mese) {
        case 1:
            month = "01";
            break;
        case 2:
            month = "02";
            break;
        case 3:
            month = "03";
            break;
        case 4:
            month = "04";
            break;
        case 5:
            month = "05";
            break;
        case 6:
            month = "06";
            break;
        case 7:
            month = "07";
            break;
        case 8:
            month = "08";
            break;
        case 9:
            month = "09";
            break;
        case 10:
        case 11:
        case 12:
            month = mese;
            break;
        default:
            break;
    }
    var datetime = anno + '-' + month

    return datetime;
}

function get_current_MONTH() {
    var currentdate = new Date();
    return currentdate.getMonth() + 1;
}

function getDESCR_MONTH(mese) {
    var month = '';
    if (mese == 0)
        mese = 12;
    else if (mese == 13)
        mese = 1;

    switch (mese) {
        case 1:
            month = "Gennaio";
            break;
        case 2:
            month = "Febbraio";
            break;
        case 3:
            month = "Marzo";
            break;
        case 4:
            month = "Aprile";
            break;
        case 5:
            month = "Maggio";
            break;
        case 6:
            month = "Giugno";
            break;
        case 7:
            month = "Luglio";
            break;
        case 8:
            month = "Agosto";
            break;
        case 9:
            month = "Settembre";
            break;
        case 10:
            month = "Ottobre";
            break;
        case 11:
            month = "Novembre";
            break;
        case 12:
            month = "Dicembre";
            break;
    }
    return month;
}

function get_current_DAY() {
    var currentdate = new Date();
    return currentdate.getDate();
}

function get_current_YEAR() {
    var currentdate = new Date();
    return currentdate.getFullYear();
}

function getDATA() {
    var currentdate = new Date();
    var month = '';
    switch ((currentdate.getMonth() + 1)) {
        case 1:
            month = "01";
            break;
        case 2:
            month = "02";
            break;
        case 3:
            month = "03";
            break;
        case 4:
            month = "04";
            break;
        case 5:
            month = "05";
            break;
        case 6:
            month = "06";
            break;
        case 7:
            month = "07";
            break;
        case 8:
            month = "08";
            break;
        case 8:
            month = "09";
            break;

        default:
            break;
    }
    var datetime = currentdate.getFullYear() + "-" + month + "-" + currentdate.getDate()
    //var datetime = "Now: " + currentdate.getDate() + "/"+ (currentdate.getMonth()+1)  + "/"+ currentdate.getFullYear() + " @ "+ currentdate.getHours() + ":"+ currentdate.getMinutes() + ":"  + currentdate.getSeconds();

    return datetime;
}

function getTIME() {
    var currentdate = new Date();
    var time = currentdate.getHours() + ":" + currentdate.getMinutes() //+ ":" + currentdate.getSeconds()

    return time;
}

function get_formatDATE_standard(data) {
    var aDATA = data.split("-");
    var anno = aDATA[0];
    var mese = aDATA[1];
    var giorno = aDATA[2];

    return data_formatted = giorno + '/' + mese + '/' + anno;
}

function capitalizeFirstLetter(string) {
    var string = string.toLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function get_url_gateway() {
    var version_code = localStorage.getItem('version');
    version_code = version_code.split(".").join("");

    var url = "https://demo.sicare.it/sicare_mobile/icaro-evo/api_" + version_code + "/mobile_icaroevo_action.php?_action=get_url_gateway";
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        contentType: 'text/html',
        success: function (result) {
            var urlgateway = JSON.parse(result);
            alert(url)
            return url;
        }
    });
}

function get_url_keycloak() {
    var version_code = localStorage.getItem('version');
    version_code = version_code.split(".").join("");

    var url = "https://demo.sicare.it/sicare_mobile/icaro-evo/api_" + version_code + "/mobile_icaroevo_action.php?_action=get_url_keycloak";
    $.ajax({
        url: url,
        type: "POST",
        dataType: "html",
        contentType: 'text/html',
        success: function (result) {
            var url = JSON.parse(result);
            return url;

        }
    });
}

function refresh_token() {
    var access_token = localStorage.getItem('access_token');
    var refresh_token = localStorage.getItem('refresh_token');
    var ora_scadenza_token = localStorage.getItem('ora_scadenza_token');
    var data_scadenza_token = localStorage.getItem('data_scadenza_token');
    var realms = localStorage.getItem('realm');
    var client_secret = localStorage.getItem('client_secret');
    var username = localStorage.getItem('username');
    var password = localStorage.getItem('password');

    var currentdate = new Date();
    var ora = currentdate.getHours() + ":" + (currentdate.getMinutes()) + ":" + currentdate.getSeconds()
    
    //alert(timeToSeconds(ora_scadenza_token))
    //alert(timeToSeconds(ora))

    //if (oggi != data_scadenza_token) 
    if (timeToSeconds(ora_scadenza_token) <= timeToSeconds(ora))
    {
        //var client_id="simeal" //dev
        var client_id="icaroevo" //PROD

        var details = {
            'grant_type': 'refresh_token',
            'client_secret': client_secret,
            'client_id': client_id,
            'username': username,
            'password': password,
            'refresh_token': refresh_token,
        };

        var formBody = [];
        for (var property in details) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(details[property]);
            formBody.push(encodedKey + "=" + encodedValue);
        }
        formBody = formBody.join("&");

        var url = "https://login.maggiolicloud.it/auth/realms/" + realms + "/protocol/openid-connect/token/";
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: formBody
        }).then((response) => response.json())
            .then((responseData) => {
                var error=responseData["error_description"]
                if(error!='Token is not active')
                {
                    var access_token = responseData['access_token'];
                    //alert("Refresh token: "+access_token)
                    if(access_token!='')
                    {
                        localStorage.removeItem('access_token');
                        localStorage.removeItem('refresh_token');
                        localStorage.removeItem('ora_scadenza_token');
                        localStorage.removeItem('data_scadenza_token');
                        var refresh_token = responseData['refresh_token'];
                        var expires_in = responseData['expires_in'];

                        var currentdate = new Date();
                        var ora_scadenza_token = currentdate.getHours() + ":" + (currentdate.getMinutes() + (expires_in / 60)) //+ ":" + currentdate.getSeconds()
                        var data_scadenza_token = getDATA()
                        localStorage.setItem('access_token', access_token);
                        localStorage.setItem('refresh_token', refresh_token);
                        localStorage.setItem('ora_scadenza_token', ora_scadenza_token);
                        localStorage.setItem('data_scadenza_token', data_scadenza_token);

                    }
                   //alert(localStorage.getItem('access_token'));

                }
                else
                {
                    function alertSESSIONE() {
                        window.location = "icaro_login.html";
                        return false;
                    }
    
                    navigator.notification.alert(
                        'Sessione scaduta, è necessario rifare il login ',  // message
                        alertSESSIONE,         // callback
                        'Attenzione!',            // title
                        'Chiudi'                  // buttonName
                    );
                }
               


            }).catch(err => {
                //alert(err)

                function alertDismissed() {
                    window.location = "icaro_login.html";
                    return false;
                }

                navigator.notification.alert(
                    'Problemi nel refresh token, sarai rindirizzato nella pagina di login ',  // message
                    alertDismissed,         // callback
                    'Attenzione!',            // title
                    'Chiudi'                  // buttonName
                );

            });

    }
    else {
      
      console.log("token attivo")
    }
    
}


function timeToSeconds(time) {
    time = time.split(/:/);
    return time[0] * 3600 + time[1] * 60 + time[2];
}

var zaehler = 1;
const SELECTOR_SPIELWERT = 'form input[type=text]';
const SELECTOR_ALLEINSPIELER = 'form input[name=alleinspieler]:checked';
const SELECTOR_GEBERNAME = '#geber label';

var actions = {
    
    aktiviereSeite : function() {
        $('form input[type=button]').click(function(){
            var spielwert = $(SELECTOR_SPIELWERT).val();
            var alleinspieler = $(SELECTOR_ALLEINSPIELER).val();
            
            if (alleinspieler != null && spielwert.length > 0) {
                if (alleinspieler == $(SELECTOR_GEBERNAME).text().toLowerCase()) {
                    alert('Der Geber kann nicht gespielt haben.');
                } else {
                    actions.werteAus(spielwert, alleinspieler);
                    actions.setzeGeber();
                }
            } else {
                alert("Bitte Daten angeben.");
            }
        });
    },
    
    werteAus : function(spielwert, alleinspieler) {
        var neuerWert = 0;
        var zeile = actions.refreshTabelle();
       
        switch (alleinspieler) {
            case "david":
                neuerWert = zeile[0] + parseInt(spielwert);
                $('#spielverlauf tr:last').after('<tr><td>' + neuerWert + '</td><td>' + zeile[1] + '</td><td>' + zeile[2] + '</td><td>' + zeile[3] + '</td><td>' + spielwert + '</td></tr>');
                break;
            case "norbert":
                neuerWert = zeile[1] + parseInt(spielwert);
                $('#spielverlauf tr:last').after('<tr><td>' + zeile[0] + '</td><td>' + neuerWert + '</td><td>' + zeile[2] + '</td><td>' + zeile[3] + '</td><td>' + spielwert + '</td></tr>');
                break;
            case "lucky":
                neuerWert = zeile[2] + parseInt(spielwert);
                $('#spielverlauf tr:last').after('<tr><td>' + zeile[0] + '</td><td>' + zeile[1] + '</td><td>' + neuerWert + '</td><td>' + zeile[3] + '</td><td>' + spielwert + '</td></tr>');
                break;
            case "andreas":
                neuerWert = zeile[3] + parseInt(spielwert);
                $('#spielverlauf tr:last').after('<tr><td>' + zeile[0] + '</td><td>' + zeile[1] + '</td><td>' + zeile[2] + '</td><td>' + neuerWert + '</td><td>' + spielwert + '</td></tr>');
                break;
            default:
                break;
        }
        
        $(SELECTOR_SPIELWERT).val("");
        $(SELECTOR_ALLEINSPIELER).attr('checked', false);
        
        actions.baueRangliste();
    },
    
    setzeGeber : function () {       
        switch (zaehler) {
            case 0:
                zaehler = 1;
                $(SELECTOR_GEBERNAME).text('David');
                break;
            case 1:
                zaehler = 2;
                $(SELECTOR_GEBERNAME).text('Norbert');
                break;
            case 2:
                zaehler = 3;
                $(SELECTOR_GEBERNAME).text('Lucky');
                break;
            case 3:
                zaehler = 0;
                $(SELECTOR_GEBERNAME).text('Andreas');
                break;
            default:
                break;
        }
    },
    
    refreshTabelle : function() {
        var zeile = [];
        zeile.push(actions.refreshSpalte(1));
        zeile.push(actions.refreshSpalte(2));
        zeile.push(actions.refreshSpalte(3));
        zeile.push(actions.refreshSpalte(4));
        return zeile;
    },
    
    refreshSpalte : function(spalte) {
        var zellen=[];
        var summe = 0;
        
        summe = parseInt($('#spielverlauf tbody tr:last-child td:nth-child(' + spalte + ')').text());
        
        return summe;
    },
    
    baueRangliste : function () {
        
        var rangliste = [];
        var spielerName = ['David', 'Norbert', 'Lucky', 'Andreas'];
        var spielstand = {};
        var rangergebnis = {};
        
        $('#spielverlauf tbody tr:last-child td').each( function(){
            rangliste.push(parseInt($(this).text()));
        });
        
        for (var i =  0; i < 4; i++){
            spielstand[spielerName[i]] = rangliste[i];
        }
        
        rangliste.pop();
        rangliste.sort(function int_arr(a, b) {
            return b-a;
        });
       
        $.each(rangliste, function(rangposition, rangpunkte){
            $.each(spielstand, function(spielername, spielerpunkte){
                if (rangpunkte == spielerpunkte && spielerpunkte != 0){
                      rangergebnis[rangposition + 1] = spielername;
                }
            });
        });
        
        var tabellenHTML = '';
        $.each(rangergebnis, function(platz, platzname){
            tabellenHTML = tabellenHTML + '<tr><td>' + platz + '</td><td>' + platzname + '</td></tr>';
        });
        
        $('#rangliste tbody').html(tabellenHTML);
            
    }
}
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Skatrunde</title>
        <link rel="stylesheet" type="text/css" href="./css/layout.css" media="screen" />
        <script type="text/javascript" src="javascript/jquery-1.9.1.js"></script>
        <script type="text/javascript" src="javascript/actions.js"></script>
    </head>
    <body>

        <h1>Skatrunde</h1>

        <table id="spielverlauf">
            <caption>Spielverlauf</caption>
            <thead>
                <tr>
                    <td>David</td>
                    <td>Norbert</td>
                    <td>Lucky</td>
                    <td>Andreas</td>
                    <td>Spiel</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                    <td>0</td>
                </tr>
            </tbody>
        </table>

        <form id="spielergebnis">
            <caption>Ergebnis eintragen:</caption>
            <fieldset>
                <input type="radio" name="alleinspieler" value="david" >David</input></br>
                <input type="radio" name="alleinspieler" value="norbert" >Norbert</input></br>
                <input type="radio" name="alleinspieler" value="lucky" >Lucky</input></br>
                <input type="radio" name="alleinspieler" value="andreas" >Andreas</input></br>
            </fieldset>
            <p>
                <label for="spielwert">Spielwert:</label>
                <input id="spielwert" type="text" />Punkte</br>
            </p>
            <input type="button" value="Eintragen" />
        </form>

        <div id="geber">
            <p>Geber ist:</p>
            <label>David</label>
        </div>

        <table id="rangliste">
            <caption>Rangliste</caption>
            <thead>
                <tr>
                    <td>Nr:</td>
                    <td>Name:</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>-</td>
                    <td>-</td>    
                </tr>
            </tbody>
        </table>

    </body>

    <script>
        $(document).ready(function(){
            actions.aktiviereSeite();
        });
    </script>

</html>

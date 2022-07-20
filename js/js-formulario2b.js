document.getElementById("idButton").addEventListener('click', einfugenText);
document.getElementById("idTbody").addEventListener('click', entfernenTr);
//In diesem Fall, müssen wir 'idTbody' verwenden, da er bereits im Code vorhanded ist.

//ADD EVENT
function einfugenText(event) {
    event.preventDefault();

    //GET INPUT VALUE
    var neueText1 = document.getElementById('idInput').value;
    var neueText2 = document.getElementById('idDatum').value;
    var neueText3 = document.getElementById('idBetrag').value;
    
    //CREATE A 'TD' ELEMENT ------ NAME  
    if(neueText1 == ""|| (neueText2 == "") || (neueText3 == "")) { //Mit array und string verwenden wir " ", mit text verwenden wir "";
        alert("Schreiben Sie bitte einen gültigen Wert!");
    } else {
            //CREATE 'TR'
            var tr = document.createElement('tr');
            //CREATE ID TO 'TR'
            tr.setAttribute("id", "idTr");

            for(i = 1; i < 4; i++) {
                //CREATE 'TD'
                var td = document.createElement('td');   
                //ADD TEXT NODE WITH INPUT VALUE TO 'TD'
                var y = 'neueText'; 
                td.appendChild(document.createTextNode(eval(y.concat(i)))); //(eval(y + i))  
                //ADD 'TD' TO 'TR'
                tr.appendChild(td);  
                //ADD CLASS TO 'TD'
                td.className = "tdClass";  
                //ADD 'TD' TO 'TR LISTE'
                idTbody.appendChild(tr);                                                         
            } 
            
            //CREATE DELETE BUTTON
            var delButton = document.createElement('button');

            //ADD CLASS TO DELETE BUTTON
            delButton.className = 'classDelButton';

            //ADD ID TO DELETE BUTTON
            delButton.setAttribute("id","idDelButton");

            //ADD TEXT NODE TO DELETE BUTTON
            delButton.appendChild(document.createTextNode('X'));

            //ADD DELETE BUTTON TO 'TD'
            td.appendChild(delButton);        
        }
}

//DELETE ELEMENT
function entfernenTr(e) {
    if(e.target.classList.contains('classDelButton')) {
        if(confirm("Sind Sie sicher?"));
        var td = e.target.parentElement;
        tr = td.parentElement;
        idTbody.removeChild(tr);
    }
}

/* <i class="fa-solid fa-trash-can"></i> */
/* <i class="fa fa-trash-o" aria-hidden="true"></i> */


  

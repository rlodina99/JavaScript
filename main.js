
var onNrClick = (nr) => {


  var nod = document.getElementsByClassName('display');

  if (!isNaN(nr)) {

    nod[0].innerHTML = nod[0].innerHTML * 10 + nr;

  }
  else {

    if (nr == 'ac') {
      nod[0].innerHTML = 0;
    }
    else if (nr == 'virgula') {
      nod[0].innerHTML = nod[0].innerHTML + ',';
    }
    else if (nr == 'plus') {


      document.getElementsByClassName('dreaptaButton').style.backgroundColor = "red";



      document.getElementById('plus').style.backgroundColor = "white";
      document.getElementById('plus').style.color = "orange";

    }
    else if (nr == 'minus') {

      document.getElementById('minus').style.backgroundColor = "white";
      document.getElementById('minus').style.color = "orange";

    }
    else if (nr == 'inmultire') {

      document.getElementById('inmultire').style.backgroundColor = "white";
      document.getElementById('inmultire').style.color = "orange";

    }
    else if (nr == 'impartire') {

      document.getElementById('impartire').style.backgroundColor = "white";
      document.getElementById('impartire').style.color = "orange";

    }
    else if (nr == 'egal') {

      document.getElementById('egal').style.backgroundColor = "white";
      document.getElementById('egal').style.color = "orange";

    }

  }



}
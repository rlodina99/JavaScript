

var nod = document.getElementsByClassName('display');

let semn;
let nr1;

const resetOperatii = (semnTrimis) => {

  Array.from(document.getElementsByClassName('dreaptaButton'))
    .forEach(e => e.classList.remove('dreaptaButtonSelectat'));

  nr1 = nod[0].innerHTML;

  nod[0].innerHTML = 0;

  semn = semnTrimis;

}


var onNrClick = (nr) => {


  if (!isNaN(nr)) {

    nod[0].innerHTML = nod[0].innerHTML * 10 + nr;

  }
  else {

    if (nr == 'ac') {
      resetOperatii();
      nod[0].innerHTML = 0;
    }
    else if (nr == 'opus') {
      nod[0].innerHTML = -nod[0].innerHTML;
    }
    else if (nr == 'virgula') {
      nod[0].innerHTML = nod[0].innerHTML + ',';
    }
    else if (nr == 'plus') {

      resetOperatii('+');

      var v = document.getElementById("plus");
      v.classList.add("dreaptaButtonSelectat");


    }
    else if (nr == 'minus') {

      resetOperatii('-');

      var v = document.getElementById("minus");
      v.classList.add("dreaptaButtonSelectat");


    }
    else if (nr == 'inmultire') {

      resetOperatii('*');

      var v = document.getElementById("inmultire");
      v.classList.add("dreaptaButtonSelectat");

    }
    else if (nr == 'impartire') {

      resetOperatii('/');

      var v = document.getElementById("impartire");
      v.classList.add("dreaptaButtonSelectat");


    }
    else if (nr == 'egal') {

      Array.from(document.getElementsByClassName('dreaptaButton'))
        .forEach(e => e.classList.remove('dreaptaButtonSelectat'));

      if (semn == '+') {

        var nr2 = nod[0].innerHTML;
        nod[0].innerHTML = +nr1 + +nr2;

      }
      else if (semn == '-') {


        var nr2 = nod[0].innerHTML;
        nod[0].innerHTML = -(-nr1 - -nr2);
      }
      else if (semn == '*') {


        var nr2 = nod[0].innerHTML;
        nod[0].innerHTML = nr1 * nr2;
      }
      else if (semn == '/') {

        var nr2 = nod[0].innerHTML;
        nod[0].innerHTML = nr1 / nr2;
      }


    }

  }



}
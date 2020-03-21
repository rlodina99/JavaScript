
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

    if (nod[0].innerHTML == 0) {

      nod[0].innerHTML = nr;

    }
    else {

      nod[0].innerHTML = nod[0].innerHTML + nr;

    }

    nr2 = nod[0].innerHTML;

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

      nod[0].innerHTML = nod[0].innerHTML + '.';


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


      //nod[0].innerHTML.toFixed(6);

      if (semn == '+') {


        nod[0].innerHTML = +nr1 + +nr2;

      }
      else if (semn == '-') {


        nod[0].innerHTML = +nr1 - +nr2;

      }
      else if (semn == '*') {


        nod[0].innerHTML = nr1 * nr2;
      }
      else if (semn == '/') {

        nod[0].innerHTML = nr1 / nr2;

      }

      nr1 = nod[0].innerHTML;

      var y = nr1.toFixed(2);

      nr1 = y;

    }

  }



}
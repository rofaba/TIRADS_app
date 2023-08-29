function calcularTIRADS() {
    event.preventDefault();
    const compositionScore = parseInt(document.getElementById("composition").value);
    const echogenicityScore = parseInt(document.getElementById("echogenicity").value);
    const marginScore = parseInt(document.getElementById("margin").value);
    const echogenicFociCheckboxes = document.getElementsByName("echogenic_foci[]");
    let echogenicFociScore = 0;
    for (let i = 0; i < echogenicFociCheckboxes.length; i++) {
        if (echogenicFociCheckboxes[i].checked) {
            echogenicFociScore += parseInt(echogenicFociCheckboxes[i].value);
        }
    }
    
    //comprobaciones temporales
    console.log(compositionScore)
    console.log(echogenicityScore)
    console.log(marginScore)
    console.log(echogenicFociScore)

    
    let tirads = compositionScore + echogenicityScore + marginScore + echogenicFociScore;
    console.log('TIRADS' + tirads)

    let clasif = "";
    let recom = "";
    if (tirads === 0) {
        clasif = "TIRADS 1"
        recom = " Benign. no FNA";
    } else if ((tirads === 1) || tirads === 2) {
      clasif = "TIRADS 2"
      recom = " Not Suspicius, No FNA";
    } else if (tirads === 3) {
      clasif = "TIRADS 3"
      recom = " Midly Suspicius. FNA if >= 2.5cm Follow if >= 1.5cm";
    } else if ((tirads >= 4) && (tirads <=6)) {
      clasif = "TIRADS 4"
      recom = " Moderatly Suspicious. FNA if >= 1.5 cm  Follow if >= 1cm";
    } else if (tirads >= 7) {
      clasif = "TIRADS 5"
      recom = " Highly suspicious FNA if > 1cm Follow if > 0.5cm";
    }
  
    document.querySelector('#clasificacion').innerHTML = clasif;
    document.querySelector('#recomendacion').innerHTML = recom;
  }
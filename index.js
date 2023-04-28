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
    console.log(compositionScore)
    console.log(echogenicityScore)
    console.log(marginScore)
    console.log(echogenicFociScore)

    
    let tirads = compositionScore + echogenicityScore + marginScore + echogenicFociScore;
    console.log('TIRADS' + tirads)

    let recommendations = "";
    if (tirads === 0) {
        recommendations = "TIRADS 1: Benign. no FNA";
    } else if ((tirads === 1) || tirads === 2) {
      recommendations = "TIRADS 2: Not Suspicius, No FNA";
    } else if (tirads === 3) {
      recommendations = "TIRADS 3: Midly Suspicius. FNA if >= 2.5cm Follw if >= 1.5cm";
    } else if ((tirads >= 4) && (tirads <=6)) {
      recommendations = "TIRADS 4: Moderatly Suspicious. FNA if >= 1.5 cm  Follow if >= 1cm";
    } else if (tirads >= 7) {
      recommendations = "TIRADS 5: Highly suspicious FNA if > 1cm Follow if > 0.5cm";
    }
  
    document.querySelector('.recom').innerHTML = recommendations;
  }
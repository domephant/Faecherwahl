function logicvariables() {
  
  //Variablen, die definieren, ob ein Fach als P2 gewählt werden kann
  /* Legende
  0: Mathe
  1: Informatik
  2: Chemie
  3: Biologie
  4: Physik
  5: Deutsch
  6: Englisch
  7: Französisch
  8: Latein
  9: Spanisch
  10: Kunst
  11: Musik
  12: Geschichte
  13: Politik Wirtschaft
  */
  sessionStorage.setItem('p2_waehlbar[0]', false)
  sessionStorage.setItem('p2_waehlbar[1]', false)
  sessionStorage.setItem('p2_waehlbar[2]', false)
  sessionStorage.setItem('p2_waehlbar[3]', false)
  sessionStorage.setItem('p2_waehlbar[4]', false)
  sessionStorage.setItem('p2_waehlbar[5]', false)
  sessionStorage.setItem('p2_waehlbar[6]', false)
  sessionStorage.setItem('p2_waehlbar[7]', false)
  sessionStorage.setItem('p2_waehlbar[8]', false)
  sessionStorage.setItem('p2_waehlbar[9]', false)
  sessionStorage.setItem('p2_waehlbar[10]', false)
  sessionStorage.setItem('p2_waehlbar[11]', false)
  sessionStorage.setItem('p2_waehlbar[12]', false)
  sessionStorage.setItem('p2_waehlbar[13]', false)
  
  //Variablen in Bezug auf die Kernfächer
  //Zählvariablen für Kernfächer und Nicht-Kernfächer
  sessionStorage.setItem('kernfaecher', 0)
  sessionStorage.setItem('nicht_kernfaecher', 0)
  //Variable, die beschreibt, ob Nicht-Kernfächer gewählt werden können
  sessionStorage.setItem('w_nk', true)
  
  //Variablen, die definieren, welche Bereiche noch wählbar sind
  /*
  0: A
  1: B
  2: C
  3: Sport
  */
  sessionStorage.setItem("w[0]", true)
  sessionStorage.setItem("w[1]", true)
  sessionStorage.setItem("w[2]", true)
  sessionStorage.setItem("w[3]", false)

  //Variablen zum Zählen der Bereiche A, B, C, der Fremdsprachen und der Naturwissenschaften
  sessionStorage.setItem('A_anzahl', 0)
  sessionStorage.setItem('B_anzahl', 0)
  sessionStorage.setItem('C_anzahl', 0)
  sessionStorage.setItem('counter_fs', 0)
  sessionStorage.setItem('counter_nw', 0)

  //Variablen, die definieren, ob ein Fach wählbar ist
  sessionStorage.setItem('mathe_w', true)
  sessionStorage.setItem('informatik_w', true)
  sessionStorage.setItem('chemie_w', true)
  sessionStorage.setItem('biologie_w', true)
  sessionStorage.setItem('physik_w', true)
  sessionStorage.setItem('deutsch_w', true)
  sessionStorage.setItem('englisch_w', true)
  sessionStorage.setItem('franzoesisch_w', true)
  sessionStorage.setItem('latein_w', true)
  sessionStorage.setItem('spanisch_w', true)
  sessionStorage.setItem('kunst_w', true)
  sessionStorage.setItem('musik_w', true)
  sessionStorage.setItem('geschichte_w', true)
  sessionStorage.setItem('religion_w', true)
  sessionStorage.setItem('erdkunde_w', true)
  sessionStorage.setItem('powi_w', true)
  sessionStorage.setItem('sport_w', true)

  //Variablen, die definieren, welche Grundkurse gewählt wurden
  //Legende für die Extras
  /*
  1: Mathe
  2: Chemie
  3: Englisch
  4: Physik
  5: Biologie
  6: Französisch
  7: Latein
  8: Musik
  9: Informatik
  10: Kunst
  11: Spanisch
  12: Deutsch
  13: Geschichte
  14: PoWi
  15: Religion
  16: Erdkunde
  17: DS
  */
  sessionStorage.setItem('extra1', false)  
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra9', false)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra11', false)
  sessionStorage.setItem('extra12', false)
  sessionStorage.setItem('extra13', false)
  sessionStorage.setItem('extra14', false)
  sessionStorage.setItem('extra15', false)
  sessionStorage.setItem('extra16', false)
  sessionStorage.setItem('extra17', false)
  sessionStorage.setItem('extra18', false)
  sessionStorage.setItem('sport_gk', false)

  sessionStorage.setItem('wish_for_p4_p5', '')
}  
//Kernfächer werden um 1 hochgezählt
function kernfaecher_add() {
  sessionStorage.setItem('kernfaecher', (parseInt(sessionStorage.getItem('kernfaecher')) + 1))
  console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
}
function kernfaecher_dec() {
  sessionStorage.setItem('kernfaecher', (parseInt(sessionStorage.getItem('kernfaecher')) - 1))
  console.log('Kernfächer: ' + sessionStorage.getItem('kernfaecher'))
}
function nicht_kernfaecher_add() {
  sessionStorage.setItem('nicht_kernfaecher', (parseInt(sessionStorage.getItem('nicht_kernfaecher')) + 1))
  console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))
}
function nicht_kernfaecher_dec() {
  sessionStorage.setItem('nicht_kernfaecher', (parseInt(sessionStorage.getItem('nicht_kernfaecher')) - 1))
  console.log('Nicht-Kernfächer: ' + sessionStorage.getItem('nicht_kernfaecher'))
}
//Fächer im Bereich A, B oder C werden um 1 hochgezählt
function bereich_add(abc) {
  sessionStorage.setItem((abc + '_anzahl'), (parseInt(sessionStorage.getItem(abc + '_anzahl')) + 1))
  console.log(abc + ': ' + sessionStorage.getItem(abc + '_anzahl'))
}
//Fächer im Bereich A, B oder C werden um 1 verringert
function bereich_dec(abc) {
  sessionStorage.setItem((abc + '_anzahl'), (parseInt(sessionStorage.getItem(abc + '_anzahl')) - 1))
  console.log(abc + ': ' + sessionStorage.getItem(abc + '_anzahl'))
}
function waehlbarkeit_false(fach_w) {
  sessionStorage.setItem(fach_w, false)
  console.log(fach_w + ': ' + sessionStorage.getItem(fach_w))
}
//Das entsprechende Fach wird auf "wählbar gesetzt"
function waehlbarkeit_true(fach_w) {
  sessionStorage.setItem(fach_w, true)
  console.log(fach_w + ': ' + sessionStorage.getItem(fach_w))
}
//Alle Buttons einer "Stufe" (P1, P2, P3, P4 oder P5) werden deaktiviert
function disable_buttons(i) {
  var help_lp = 1
  var lp2 = 12
  var lp3 = 14
  var lp4 = 16
  var lp5 = 17
  //P1
  if (i == 1) {
    help_lp = lp1
    console.log(help_lp)
  }
  //P2
  if (i == 2) {
    help_lp = lp2
    console.log(help_lp)
  }
  if (i == 3) {
    help_lp = lp3
    console.log(help_lp)
  }
  if (i == 4) {
    help_lp = lp4
    console.log(help_lp)
  }
  if (i == 5) {
    help_lp = lp5
    console.log(help_lp)
  }
  for (let j = 1; j < help_lp + 1; j++) {
    document.getElementById('pfach' + i + "." + j).disabled = true
  }
}
function nw_add() {
  sessionStorage.setItem('counter_nw', (parseInt(sessionStorage.getItem('counter_nw')) + 1))
  console.log('NW-Counter: ' + sessionStorage.getItem('counter_nw'))
}
function fs_add() {
  sessionStorage.setItem('counter_fs', (parseInt(sessionStorage.getItem('counter_fs')) + 1))
  console.log('FS-Counter: ' + sessionStorage.getItem('counter_fs'))
}
function fs_schon_gewaehlt_logic(fach_a, fach_b, fach_c) {
  var help2 = false
  for (let k = 1; k < i && help2 == false; k++) {
    if (sessionStorage.getItem('pfach' + k) != fach_a && sessionStorage.getItem('pfach' + k) != fach_b && sessionStorage.getItem('pfach' + k) != fach_c) {
      help2 = false
    } else {
      help2 = true
    }
  }
  if (help2 == true) {
    nicht_kernfaecher_add()
  } else {
    kernfaecher_add()
  }
}
function logicsubjects(i) {
  var help = 0
  switch (sessionStorage.getItem('pfach' + i)) {
    case 'Mathe':
      if (i === 1) {
        sessionStorage.setItem('profil', 'mana')
        sessionStorage.setItem('p2_waehlbar[1]', true)
        sessionStorage.setItem('p2_waehlbar[2]', true)
        sessionStorage.setItem('p2_waehlbar[3]', true)
        sessionStorage.setItem('p2_waehlbar[4]', true)
      }
      kernfaecher_add()
      bereich_add('C')
      waehlbarkeit_false('mathe_w')
      break
    case 'Informatik':
      if (i === 1) {
        sessionStorage.setItem('profil', 'mana')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[2]', true)
        sessionStorage.setItem('p2_waehlbar[3]', true)
        sessionStorage.setItem('p2_waehlbar[4]', true)
      }
      nicht_kernfaecher_add()
      bereich_add('C')
      waehlbarkeit_false('informatik_w')
      nw_add()
      break
    case 'Chemie':
      if (i === 1) {
        sessionStorage.setItem('profil', 'mana')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[1]', true)
        sessionStorage.setItem('p2_waehlbar[3]', true)
        sessionStorage.setItem('p2_waehlbar[4]', true)
      }
      nicht_kernfaecher_add()
      bereich_add('C')
      waehlbarkeit_false('chemie_w')
      nw_add()
      break
    case 'Biologie':
      if (i === 1) {
        sessionStorage.setItem('profil', 'mana')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[1]', true)
        sessionStorage.setItem('p2_waehlbar[2]', true)
        sessionStorage.setItem('p2_waehlbar[4]', true)
      }
      nicht_kernfaecher_add()
      bereich_add('C')
      waehlbarkeit_false('biologie_w')
      nw_add()
      break
    case 'Physik':
      if (i === 1) {
        sessionStorage.setItem('profil', 'mana')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[1]', true)
        sessionStorage.setItem('p2_waehlbar[2]', true)
        sessionStorage.setItem('p2_waehlbar[3]', true)
      }
      nicht_kernfaecher_add()
      bereich_add('C')
      waehlbarkeit_false('physik_w', )
      nw_add()
      break
    case 'Deutsch':
      if (i === 1) {
        sessionStorage.setItem('profil', 'spra')
        sessionStorage.setItem('p2_waehlbar[6]', true)
        sessionStorage.setItem('p2_waehlbar[7]', true)
        sessionStorage.setItem('p2_waehlbar[8]', true)
        sessionStorage.setItem('p2_waehlbar[9]', true)
      }
      kernfaecher_add()
      bereich_add('A')
      waehlbarkeit_false('deutsch_w')
      break
    case 'Englisch':
      if (i === 1) {
        sessionStorage.setItem('profil', 'spra')
        sessionStorage.setItem('p2_waehlbar[5]', true)
        sessionStorage.setItem('p2_waehlbar[7]', true)
        sessionStorage.setItem('p2_waehlbar[8]', true)
        sessionStorage.setItem('p2_waehlbar[9]', true)
        kernfaecher_add()
      }
      if (i != 1) {
        fs_schon_gewaehlt_logic('Latein', 'Französisch', 'Spanisch')
      }
      bereich_add('A')
      waehlbarkeit_false('englisch_w')
      fs_add()
      break
    case 'Französisch':
      if (i === 1) {
        sessionStorage.setItem('profil', 'spra')
        sessionStorage.setItem('p2_waehlbar[5]', true)
        sessionStorage.setItem('p2_waehlbar[6]', true)
        sessionStorage.setItem('p2_waehlbar[8]', true)
        sessionStorage.setItem('p2_waehlbar[9]', true)
        kernfaecher_add()
      }
      if (i > 1) {
        fs_schon_gewaehlt_logic('Latein', 'Englisch', 'Spanisch')
      }
      sessionStorage.setItem('latein_w', false)
      sessionStorage.setItem('spanisch_w', false)
      bereich_add('A')
      waehlbarkeit_false('franzoesisch_w')
      fs_add()
      break
    case 'Latein':
      if (i === 1) {
        sessionStorage.setItem('profil', 'spra')
        sessionStorage.setItem('p2_waehlbar[5]', true)
        sessionStorage.setItem('p2_waehlbar[6]', true)
        sessionStorage.setItem('p2_waehlbar[7]', true)
        sessionStorage.setItem('p2_waehlbar[9]', true)
        kernfaecher_add()
      }
      if (i > 1) {
        fs_schon_gewaehlt_logic('Englisch', 'Französisch', 'Spanisch')
      }
      sessionStorage.setItem('franzoesisch_w', false)
      sessionStorage.setItem('spanisch_w', false)
      bereich_add('A')
      waehlbarkeit_false('latein_w')
      fs_add()
      break
    case 'Spanisch':
      if (i === 1) {
        sessionStorage.setItem('profil', 'spra')
        sessionStorage.setItem('p2_waehlbar[5]', true)
        sessionStorage.setItem('p2_waehlbar[6]', true)
        sessionStorage.setItem('p2_waehlbar[7]', true)
        sessionStorage.setItem('p2_waehlbar[8]', true)
        kernfaecher_add()
      }
      if (i > 1) {
        fs_schon_gewaehlt_logic('Latein', 'Französisch', 'Englisch')
      }
      sessionStorage.setItem('latein_w', false)
      sessionStorage.setItem('franzoesisch_w', false)
      bereich_add('A')
      waehlbarkeit_false('spanisch_w')
      fs_add()
      break
    case 'Kunst':
      if (i === 1) {
        sessionStorage.setItem('profil', 'muku')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[5]', true)
      }
      sessionStorage.setItem('musik_w', false)
      nicht_kernfaecher_add()
      bereich_add('A')
      waehlbarkeit_false('kunst_w')
      break
    case 'Musik':
      if (i === 1) {
        sessionStorage.setItem('profil', 'muku')
        sessionStorage.setItem('p2_waehlbar[0]', true)
        sessionStorage.setItem('p2_waehlbar[5]', true)
      }
      sessionStorage.setItem('kunst_w', false)
      nicht_kernfaecher_add()
      bereich_add('A')
      waehlbarkeit_false('musik_w')
      break
    case 'Geschichte':
      if (i === 1) {
        sessionStorage.setItem('profil', 'gese')
        for (var index = 0; index < 14; index++) {
          sessionStorage.setItem('p2_waehlbar[' + index + ']', true)
        }
        sessionStorage.setItem('pfach3', 'Politik Wirtschaft')
      }
      nicht_kernfaecher_add()
      bereich_add('B')
      waehlbarkeit_false('geschichte_w')
      break
    case 'Religion':
      nicht_kernfaecher_add()
      bereich_add('B')
      waehlbarkeit_false('religion_w')
      break
    case 'Erdkunde':
      nicht_kernfaecher_add()
      bereich_add('B')
      waehlbarkeit_false('erdkunde_w')
      break
    case 'Politik Wirtschaft':
      nicht_kernfaecher_add()
      bereich_add('B')
      waehlbarkeit_false('powi_w')
      break
    case 'Sport':
      nicht_kernfaecher_add()
      waehlbarkeit_false('sport_w')
      break
  }
  if (sessionStorage.getItem('nicht_kernfaecher') == 3) {
    sessionStorage.setItem('w_nk', false)
  }
  if (sessionStorage.getItem('A_anzahl') != 0 && sessionStorage.getItem('B_anzahl') != 0 && sessionStorage.getItem('C_anzahl') != 0 && i == 4) {
    sessionStorage.setItem('w[3]', true)
  }
  if (parseInt(sessionStorage.getItem('A_anzahl')) == 3) {
    sessionStorage.setItem('w[0]', false)
    if (parseInt(sessionStorage.getItem('kernfaecher')) == 1) {
      sessionStorage.setItem('physik_w', false)
      sessionStorage.setItem('chemie_w', false)
      sessionStorage.setItem('informatik_w', false)
      sessionStorage.setItem('biologie_w', false)
    }
    if (parseInt(sessionStorage.getItem('B_anzahl')) == 1) {
      sessionStorage.setItem('w[1]', false)
    }
    if (parseInt(sessionStorage.getItem('C_anzahl')) == 1) {
      sessionStorage.setItem('w[2]', false)
    }
  }
  if (parseInt(sessionStorage.getItem('B_anzahl')) == 3) {
    sessionStorage.setItem('w[1]', false)
    if (parseInt(sessionStorage.getItem('A_anzahl')) == 1) {
      sessionStorage.setItem('w[0]', false)
    }
    if (parseInt(sessionStorage.getItem('C_anzahl')) == 1) {
      sessionStorage.setItem('w[2]', false)
    }
  }
  if (parseInt(sessionStorage.getItem('C_anzahl')) == 3) {
    sessionStorage.setItem('w[2]', false)
    if (parseInt(sessionStorage.getItem('A_anzahl')) == 1) {
      sessionStorage.setItem('w[0]', false)
    }
    if (parseInt(sessionStorage.getItem('B_anzahl')) == 1) {
      sessionStorage.setItem('w[1]', false)
    }
  }
  if (parseInt(sessionStorage.getItem('A_anzahl')) == 2) {
    if (parseInt(sessionStorage.getItem('B_anzahl')) == 2) {
      sessionStorage.setItem('w[0]', false)
      sessionStorage.setItem('w[1]', false)
      sessionStorage.setItem('w[2]', true)
    }
    if (parseInt(sessionStorage.getItem('C_anzahl')) == 2) {
      sessionStorage.setItem('w[0]', false)
      sessionStorage.setItem('w[2]', false)
      sessionStorage.setItem('w[1]', true)
      sessionStorage.setItem('w_nk', true)
      sessionStorage.setItem('geschichte_w', true)
    }
    if (parseInt(sessionStorage.getItem('C_anzahl')) == 1 && parseInt(sessionStorage.getItem('kernfaecher')) == 1) {
      sessionStorage.setItem('musik_w', false)
      sessionStorage.setItem('kunst_w', false)
      sessionStorage.setItem('chemie_w', false)
      sessionStorage.setItem('biologie_w', false)
      sessionStorage.setItem('physik_w', false)
      sessionStorage.setItem('informatik_w', false)
      sessionStorage.setItem('w[1]', true)
    }
  }
  if (parseInt(sessionStorage.getItem('C_anzahl')) == 2) {
    if (parseInt(sessionStorage.getItem('B_anzahl')) == 2) {
      sessionStorage.setItem('w[1]', false)
      sessionStorage.setItem('w[2]', false)
      sessionStorage.setItem('w[0]', true)
      sessionStorage.setItem('w_nk', true)
    }
    if (parseInt(sessionStorage.getItem('A_anzahl')) == 1 && parseInt(sessionStorage.getItem('kernfaecher')) == 1) {
      sessionStorage.setItem('chemie_w', false)
      sessionStorage.setItem('biologie_w', false)
      sessionStorage.setItem('physik_w', false)
      sessionStorage.setItem('informatik_w', false)
      for (let i = 1; i < 6; i++) {
        if (sessionStorage.getItem("pfach" + i) == 'Englisch' || sessionStorage.getItem("pfach" + i) == 'Spanisch' || sessionStorage.getItem("pfach" + i) == 'Latein' || sessionStorage.getItem("pfach" + i) == 'Französisch') {
          sessionStorage.setItem('englisch_w', false)
          sessionStorage.setItem('latein_w', false)
          sessionStorage.setItem('spanisch_w', false)
          sessionStorage.setItem('franzoesisch_w', false)
        }
      }
    }
  }
  var nw_for_mu_and_ku = 0
  for (let index = 1; index < 6; index++) {
    if (sessionStorage.getItem('pfach' + index) == 'Biologie' || sessionStorage.getItem('pfach' + index) == 'Physik' || sessionStorage.getItem('pfach' + index) == 'Informatik' || sessionStorage.getItem('pfach' + index) == 'Chemie') {
      nw_for_mu_and_ku++
    }
  }
  if (nw_for_mu_and_ku >= 2) {
    sessionStorage.setItem('musik_w', false)
    sessionStorage.setItem('kunst_w', false)
    sessionStorage.setItem('biologie_w', false)
    sessionStorage.setItem('physik_w', false)
    sessionStorage.setItem('informatik_w', false)
    sessionStorage.setItem('chemie_w', false)
  }
}
function proof_in_advance(pfach, i) {
  var help_lp = 2
  var lp2 = 12
  var lp3 = 14
  var lp4 = 16
  var lp5 = 17
  for (let c = 2; c < 6; c++) {
    if (c == 2) {
      help_lp = lp2
    }
    if (c == 3) {
      help_lp = lp3
    }
    if (c == 4) {
      help_lp = lp4
    }
    if (c == 5) {
      help_lp = lp5
    }
    for (let j = 1; j < help_lp; j++) {
      if (c >= i) {
        document.getElementById("pfach" + c + "." + j + ".label").style.opacity = '1'
        document.getElementById("pfach" + c + "." + j).disabled = false
      }
    }
  }
  var all_subjects = Array('', 'Mathe', 'Chemie', 'Englisch', 'Physik', 'Biologie', 'Franzoesisch', 'Latein', 'Musik', 'Informatik', 'Kunst', 'Spanisch', 'Deutsch', 'Geschichte', 'Politik Wirtschaft', 'Religion', 'Erdkunde', 'Sport')
  for (let j = 0; j < 18; j++) {
    switch (all_subjects[j]) {
      case 'Mathe':
        proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[0]'), sessionStorage.getItem('mathe_w'))
        break;
      case 'Chemie':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[2]'), sessionStorage.getItem('chemie_w'))
        break;
      case 'Englisch':
        var help_fs = false
        for (let index = 1; index < 6; index++) {
          if (sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Spanisch' || sessionStorage.getItem('pfach' + index) == 'Französisch') {
            help_fs = true
          }
        }
        if (help_fs == true) {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[6]'), sessionStorage.getItem('englisch_w'))
        } else {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[6]'), sessionStorage.getItem('englisch_w'))
        }
        break;
      case 'Physik':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[4]'), sessionStorage.getItem('physik_w'))
        break;
      case 'Biologie':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[3]'), sessionStorage.getItem('biologie_w'))
        break;
      case 'Geschichte':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[1]'), sessionStorage.getItem('p2_waehlbar[12]'), sessionStorage.getItem('geschichte_w'))
        break
      case 'Franzoesisch':
        var help_fs = false
        for (let index = 1; index < 6; index++) {
          if (sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Spanisch' || sessionStorage.getItem('pfach' + index) == 'Englisch') {
            help_fs = true
          }
        }
        if (help_fs == true) {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[7]'), sessionStorage.getItem('franzoesisch_w'))
        } else {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[7]'), sessionStorage.getItem('franzoesisch_w'))
        }
        break;
      case 'Latein':
        var help_fs = false
        for (let index = 1; index < 6; index++) {
          if (sessionStorage.getItem('pfach' + index) == 'Französisch' || sessionStorage.getItem('pfach' + index) == 'Spanisch' || sessionStorage.getItem('pfach' + index) == 'Englisch') {
            help_fs = true
          }
        }
        if (help_fs == true) {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[8]'), sessionStorage.getItem('latein_w'))
        } else {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[8]'), sessionStorage.getItem('latein_w'))
        }
        break;
      case 'Musik':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[11]'), sessionStorage.getItem('musik_w'))
        break;
      case 'Informatik':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[2]'), sessionStorage.getItem('p2_waehlbar[1]'), sessionStorage.getItem('informatik_w'))
        break;
      case 'Kunst':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[10]'), sessionStorage.getItem('kunst_w'))
        break;
      case 'Politik Wirtschaft':
        proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[1]'), sessionStorage.getItem('p2_waehlbar[13]'), sessionStorage.getItem('powi_w'))
        if (sessionStorage.getItem('profil') == 'gese' && i === 3) {
          document.getElementById("pfach3.14.label").style.opacity = '1'
        }
        break;
      case 'Spanisch':
        var help_fs = false
        for (let index = 1; index < 6; index++) {
          if (sessionStorage.getItem('pfach' + index) == 'Französisch' || sessionStorage.getItem('pfach' + index) == 'Latein' || sessionStorage.getItem('pfach' + index) == 'Englisch') {
            help_fs = true
          }
        }
        if (help_fs === true) {
          proof_in_advance_visibility_w_nk(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[9]'), sessionStorage.getItem('spanisch_w'))
        } else {
          proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[9]'), sessionStorage.getItem('spanisch_w'))
        }
        break;
      case 'Deutsch':
        proof_in_advance_visibility(pfach, i, j, sessionStorage.getItem('w[0]'), sessionStorage.getItem('p2_waehlbar[5]'), sessionStorage.getItem('deutsch_w'))
        break;
      case 'Religion':
        if (sessionStorage.getItem('w[1]') === 'true' && sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('religion_w') === 'true') {
          if (i <= 3) {
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            document.getElementById((pfach + j)).disabled = true
            break
          }
          document.getElementById(pfach + j + ".label").style.opacity = '1'
        } else {
          document.getElementById(pfach + j + ".label").style.opacity = '0.5'
          document.getElementById((pfach + j)).disabled = true
        }
        break;
      case 'Erdkunde':
        if (sessionStorage.getItem('w[1]') === 'true' && sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('erdkunde_w') === 'true') {
          if (i <= 3) {
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            document.getElementById((pfach + j)).disabled = true
            break
          }
          document.getElementById(pfach + j + ".label").style.opacity = '1'
        } else {
          document.getElementById(pfach + j + ".label").style.opacity = '0.5'
          document.getElementById((pfach + j)).disabled = true
        }
        break;
      case 'Sport':
        if (sessionStorage.getItem('w[3]') != 'true') {
          document.getElementById(pfach + j + ".label").style.opacity = '0.5'
          document.getElementById((pfach + j)).disabled = true
        } else {
          if (sessionStorage.getItem('w_nk') === 'true' && sessionStorage.getItem('sport_w') === 'true') {
            document.getElementById(pfach + j + ".label").style.opacity = '1'
          } else {
            document.getElementById(pfach + j + ".label").style.opacity = '0.5'
            document.getElementById((pfach + j)).disabled = true
          }
        }
        break;
    }
  }
}
function proof_in_advance_visibility(pfach, i, j, bereich, waehlbar, fachvariable) {
  if (bereich === 'true' && fachvariable === 'true') {
    if (i === 2 && waehlbar === 'false') {
      document.getElementById(pfach + j + ".label").style.opacity = '0.5'
      document.getElementById((pfach + j)).disabled = true
    } else {
      if (i === 3 && sessionStorage.getItem('profil') == 'gese') {
        document.getElementById(pfach + j + ".label").style.opacity = '0.5'
      } else {
        document.getElementById(pfach + j + ".label").style.opacity = '1'
      }
    }
  } else {
    document.getElementById(pfach + j + ".label").style.opacity = '0.5'
    document.getElementById((pfach + j)).disabled = true
  }
}
function proof_in_advance_visibility_w_nk(pfach, i, j, bereich, waehlbar, fachvariable) {
  if (bereich === 'true' && sessionStorage.getItem('w_nk') === 'true' && fachvariable === 'true') {
    if (i === 2 && waehlbar === 'false') {
      document.getElementById(pfach + j + ".label").style.opacity = '0.5'
      document.getElementById((pfach + j)).disabled = true
    } else {
      if (i === 3 && sessionStorage.getItem('profil') == 'gese') {
        document.getElementById(pfach + j + ".label").style.opacity = '0.5'
      } else {
        document.getElementById(pfach + j + ".label").style.opacity = '1'
      }
    }
  } else {
    document.getElementById(pfach + j + ".label").style.opacity = '0.5'
    document.getElementById((pfach + j)).disabled = true
  }
}
function disable_wish(fach, j) {
  if (sessionStorage.getItem('pfach' + j) == fach) {
    document.getElementById(fach + "2").disabled = true
    document.getElementById(fach + "2.label").style.opacity = '0.5'
  }
  
}
function sport_gk() {
  if (sessionStorage.getItem('pfach5') == 'Sport') {
    sessionStorage.setItem('sport_gk', true)
  }
}
function checking_for_muku_gk(j) {
  if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra17') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Musik' || sessionStorage.getItem('pfach' + j) == 'Kunst' || sessionStorage.getItem('pfach' + j) == 'DS')) {
    if (sessionStorage.getItem('pfach' + j) == 'Musik') {
      sessionStorage.setItem('extra8', true)
      sessionStorage.setItem('extra10', false)
      sessionStorage.setItem('extra17', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'Kunst') {
      sessionStorage.setItem('extra8', false)
      sessionStorage.setItem('extra10', true)
      sessionStorage.setItem('extra17', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'DS') {
      sessionStorage.setItem('extra8', false)
      sessionStorage.setItem('extra10', false)
      sessionStorage.setItem('extra17', true)
    }
  }
}
function mana() {
  for (var j = 1; j < 6; j++) {
    disable_wish('Kunst', j)
    disable_wish('Musik', j)
    disable_wish('Geschichte', j)
    disable_wish('Religion', j)
    if (sessionStorage.getItem('pfach' + j) == 'Politik Wirtschaft') {
      document.getElementById("PoWi2.label").style.opacity = '0.5'
      document.getElementById("PoWi2").disabled = true
    }
    pflicht(j)
    checking_for_muku_gk(j)
    if (sessionStorage.getItem('extra3') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra6') == 'false' && sessionStorage.getItem('extra11') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Englisch' || sessionStorage.getItem('pfach' + j) == 'Latein' || sessionStorage.getItem('pfach' + j) == 'Französisch' || sessionStorage.getItem('pfach' + j) == 'Spanisch')) {
      if (sessionStorage.getItem('pfach' + j) == 'Englisch') {
        sessionStorage.setItem('extra3', true)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Latein') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', true)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Französisch') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', true)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Spanisch') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', true)
      }
    }
  }
  sport_gk()
  if (sessionStorage.getItem('extra3') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra6') == 'false' && sessionStorage.getItem('extra11') == 'false') {
    document.getElementById("englisch.label").style.opacity = '1'
    document.getElementById("latein.label").style.opacity = '1'
    document.getElementById("franzoesisch.label").style.opacity = '1'
    document.getElementById("spanisch.label").style.opacity = '1'
  } else {
    document.getElementById("englisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("englisch").disabled = true
    document.getElementById("latein").disabled = true
    document.getElementById("franzoesisch").disabled = true
    document.getElementById("spanisch").disabled = true
    document.getElementById("div_fs").title = "Da bereits eine Fremdsprache gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    document.getElementById("musik.label").style.opacity = '1'
    document.getElementById("ds.label").style.opacity = '1'
    document.getElementById("kunst.label").style.opacity = '1'
  } else {
    document.getElementById("musik.label").style.opacity = '0.5'
    document.getElementById("ds.label").style.opacity = '0.5'
    document.getElementById("kunst.label").style.opacity = '0.5'
    document.getElementById("kunst").disabled = true
    document.getElementById("ds").disabled = true
    document.getElementById("musik").disabled = true
    document.getElementById("div_muku").title = "Da bereits ein musisch-künstlerisches Fach gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('extra18') == 'false') {
    document.getElementById("religion.label").style.opacity = '1'
    document.getElementById("wn.label").style.opacity = '1'
  } else {
    document.getElementById("religion.label").style.opacity = '0.5'
    document.getElementById("wn.label").style.opacity = '0.5'
    document.getElementById("wn").disabled = true
    document.getElementById("religion").disabled = true
    document.getElementById("div_rewn").title = "Da bereits Religion oder Werte und Normen gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (parseInt(sessionStorage.getItem('counter_nw')) < 2) {
    var help_informatik = false;
    var help_biologie = false;
    var help_physik = false;
    var help_chemie = false;
    for (let k = 1; k < 6; k++) {
      if (sessionStorage.getItem('pfach' + k) == 'Informatik' || sessionStorage.getItem('extra9') == 'true') {
        help_informatik = true;
      }
      if (sessionStorage.getItem('pfach' + k) == 'Biologie' || sessionStorage.getItem('extra5') == 'true') {
        help_biologie = true;
      }
      if (sessionStorage.getItem('pfach' + k) == 'Physik' || sessionStorage.getItem('extra4') == 'true') {
        help_physik = true;
      }
      if (sessionStorage.getItem('pfach' + k) == 'Chemie' || sessionStorage.getItem('extra2') == 'true') {
        help_chemie = true;
      }
    }
    if (help_informatik == true) {
      document.getElementById("informatik.label").style.opacity = '0.5'
      document.getElementById("informatik").disabled = true
    }
    if (help_biologie == true) {
      document.getElementById("bio.label").style.opacity = '0.5'
      document.getElementById("bio").disabled = true
    }
    if (help_physik == true) {
      document.getElementById("physik.label").style.opacity = '0.5'
      document.getElementById("physik").disabled = true
    }
    if (help_chemie == true) {
      document.getElementById("chemie.label").style.opacity = '0.5'
      document.getElementById("chemie").disabled = true
    }
  } else {
    document.getElementById("informatik.label").style.opacity = '0.5'
    document.getElementById("physik.label").style.opacity = '0.5'
    document.getElementById("chemie.label").style.opacity = '0.5'
    document.getElementById("bio.label").style.opacity = '0.5'
    document.getElementById("informatik").disabled = true
    document.getElementById("physik").disabled = true
    document.getElementById("chemie").disabled = true
    document.getElementById("bio").disabled = true
    document.getElementById("div_nw").title = "Da bereits 2 Naturwissenschaften gewählt wurde, muss hier nichts mehr gewählt werden"
  }
}
function spra() {
  var help_informatik = false
  for (var j = 1; j < 6; j++) {
    disable_wish('Kunst', j)
    disable_wish('Musik', j)
    if (sessionStorage.getItem('pfach' + j) == 'Politik Wirtschaft') {
      document.getElementById("PoWi2.label").style.opacity = '0.5'
      document.getElementById("PoWi2").disabled = true
    }
    disable_wish('Geschichte', j)
    disable_wish('Religion', j)
    pflicht(j)
    checking_for_muku_gk(j)
    if (sessionStorage.getItem('extra4') == 'false' && sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra2') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Physik' || sessionStorage.getItem('pfach' + j) == 'Chemie' || sessionStorage.getItem('pfach' + j) == 'Biologie')) {
      if (sessionStorage.getItem('pfach' + j) == 'Physik') {
        sessionStorage.setItem('extra4', true)
        sessionStorage.setItem('extra5', false)
        sessionStorage.setItem('extra2', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Chemie') {
        sessionStorage.setItem('extra4', false)
        sessionStorage.setItem('extra2', true)
        sessionStorage.setItem('extra5', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Biologie') {
        sessionStorage.setItem('extra4', false)
        sessionStorage.setItem('extra2', false)
        sessionStorage.setItem('extra5', true)
      }
    }
    if (help_informatik == false && sessionStorage.getItem('pfach' + j) == 'Informatik') {
      help_informatik = true
    }
  }
  sport_gk()
  if (parseInt(sessionStorage.getItem('counter_fs')) < 2) {
    var help_lang = false
    for (let index = 1; index < 6; index++) {
      if (sessionStorage.getItem('pfach' + index) == 'Englisch') {
        help_lang = true
      }
    }
    if (help_lang == true) {
      document.getElementById("spanisch.label").style.opacity = '1'
      document.getElementById("latein.label").style.opacity = '1'
      document.getElementById("franzoesisch.label").style.opacity = '1'
    } else {
      sessionStorage.setItem('extra3', true)
      document.getElementById("spanisch.label").style.opacity = '0.5'
      document.getElementById("latein.label").style.opacity = '0.5'
      document.getElementById("franzoesisch.label").style.opacity = '0.5'
      document.getElementById("latein").disabled = true
      document.getElementById("franzoesisch").disabled = true
      document.getElementById("spanisch").disabled = true
      document.getElementById("div_fs").title = "Da bereits eine 2. Fremdsprache gewählt wurde, wird Englisch automatisch als Grundkurs gewählt"
    }
  } else {
    sessionStorage.setItem('extra3', true)
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
    document.getElementById("latein").disabled = true
    document.getElementById("franzoesisch").disabled = true
    document.getElementById("spanisch").disabled = true
    document.getElementById("div_fs").title = "Da bereits eine 2. Fremdsprache gewählt wurde, wird Englisch automatisch als Grundkurs gewählt"
  }
  if (help_informatik == true) {
    document.getElementById("informatikja.label").style.opacity = '0.5'
    document.getElementById("informatikne.label").style.opacity = '0.5'
    document.getElementById("informatikja").disabled = true
    document.getElementById("informatikne").disabled = true
    document.getElementById("div_inf").title = "Da bereits Informatik gewählt wurde, muss hier nichts mehr gewählt werden"
  } else {
    document.getElementById("informatikja.label").style.opacity = '1'
    document.getElementById("informatikne.label").style.opacity = '1'
  }
  if (sessionStorage.getItem('extra4') == 'false' && sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra5') == 'false') {
    document.getElementById("physik.label").style.opacity = '1'
    document.getElementById("chemie.label").style.opacity = '1'
    document.getElementById("bio.label").style.opacity = '1'
  } else {
    document.getElementById("physik.label").style.opacity = '0.5'
    document.getElementById("chemie.label").style.opacity = '0.5'
    document.getElementById("bio.label").style.opacity = '0.5'
    document.getElementById("physik").disabled = true
    document.getElementById("chemie").disabled = true
    document.getElementById("bio").disabled = true
    document.getElementById("div_nw").title = "Da bereits eine Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    document.getElementById("musik.label").style.opacity = '1'
    document.getElementById("ds.label").style.opacity = '1'
    document.getElementById("kunst.label").style.opacity = '1'
  } else {
    document.getElementById("musik.label").style.opacity = '0.5'
    document.getElementById("ds.label").style.opacity = '0.5'
    document.getElementById("kunst.label").style.opacity = '0.5'
    document.getElementById("musik").disabled = true
    document.getElementById("kunst").disabled = true
    document.getElementById("ds").disabled = true
    document.getElementById("div_muku").title = "Da bereits ein musisch-künstlerisches Fach gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('extra18') == 'false') {
    document.getElementById("religion.label").style.opacity = '1'
    document.getElementById("wn.label").style.opacity = '1'
  } else {
    document.getElementById("religion.label").style.opacity = '0.5'
    document.getElementById("wn.label").style.opacity = '0.5'
    document.getElementById("religion").disabled = true
    document.getElementById("wn").disabled = true
    document.getElementById("div_rewn").title = "Da bereits Religion oder Werte und Normen gewählt wurde, muss hier nichts mehr gewählt werden"
  }
}
function muku() {
  var help_informatik = false
  for (var j = 1; j < 6; j++) {
    if (sessionStorage.getItem('pfach' + j) == 'Politik Wirtschaft') {
      document.getElementById("PoWi2.label").style.opacity = '0.5'
      document.getElementById("PoWi2").disabled = true
    }
    disable_wish('Geschichte', j)
    disable_wish('Religion', j)
    pflicht(j)
    if (sessionStorage.getItem('extra3') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra6') == 'false' && sessionStorage.getItem('extra11') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Englisch' || sessionStorage.getItem('pfach' + j) == 'Latein' || sessionStorage.getItem('pfach' + j) == 'Französisch' || sessionStorage.getItem('pfach' + j) == 'Spanisch')) {
      if (sessionStorage.getItem('pfach' + j) == 'Englisch') {
        sessionStorage.setItem('extra3', true)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Latein') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', true)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Französisch') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', true)
        sessionStorage.setItem('extra11', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Spanisch') {
        sessionStorage.setItem('extra3', false)
        sessionStorage.setItem('extra7', false)
        sessionStorage.setItem('extra6', false)
        sessionStorage.setItem('extra11', true)
      }
    }
    if (sessionStorage.getItem('extra4') == 'false' && sessionStorage.getItem('extra5') == 'false' && sessionStorage.getItem('extra2') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Physik' || sessionStorage.getItem('pfach' + j) == 'Chemie' || sessionStorage.getItem('pfach' + j) == 'Biologie')) {
      if (sessionStorage.getItem('pfach' + j) == 'Physik') {
        sessionStorage.setItem('extra4', true)
        sessionStorage.setItem('extra5', false)
        sessionStorage.setItem('extra2', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Chemie') {
        sessionStorage.setItem('extra4', false)
        sessionStorage.setItem('extra2', true)
        sessionStorage.setItem('extra5', false)
      }
      if (sessionStorage.getItem('pfach' + j) == 'Biologie') {
        sessionStorage.setItem('extra4', false)
        sessionStorage.setItem('extra2', false)
        sessionStorage.setItem('extra5', true)
      }
    }
    if (help_informatik == false && sessionStorage.getItem('pfach' + j) == 'Informatik') {
      help_informatik = true
    }
  }
  sport_gk()
  if (sessionStorage.getItem('extra3') == 'false' && sessionStorage.getItem('extra7') == 'false' && sessionStorage.getItem('extra6') == 'false' && sessionStorage.getItem('extra11') == 'false') {
    sessionStorage.setItem('extra3', true)
    sessionStorage.setItem('extra7', true)
    sessionStorage.setItem('extra6', true)
    sessionStorage.setItem('extra11', true)
  }
  if (sessionStorage.getItem('extra3') == 'true' && sessionStorage.getItem('extra7') == 'true' && sessionStorage.getItem('extra6') == 'true' && sessionStorage.getItem('extra11') == 'true') {
    document.getElementById("englisch.label").style.opacity = '1'
    document.getElementById("latein.label").style.opacity = '1'
    document.getElementById("franzoesisch.label").style.opacity = '1'
    document.getElementById("spanisch.label").style.opacity = '1'
  } else {
    document.getElementById("englisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("englisch").disabled = true
    document.getElementById("latein").disabled = true
    document.getElementById("franzoesisch").disabled = true
    document.getElementById("spanisch").disabled = true
    document.getElementById("div_fs").title = "Da bereits eine Fremdsprache gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (sessionStorage.getItem('extra4') == 'false' && sessionStorage.getItem('extra2') == 'false' && sessionStorage.getItem('extra5') == 'false') {
    document.getElementById("physik.label").style.opacity = '1'
    document.getElementById("chemie.label").style.opacity = '1'
    document.getElementById("bio.label").style.opacity = '1'
  } else {
    document.getElementById("physik.label").style.opacity = '0.5'
    document.getElementById("chemie.label").style.opacity = '0.5'
    document.getElementById("bio.label").style.opacity = '0.5'
    document.getElementById("physik").disabled = true
    document.getElementById("chemie").disabled = true
    document.getElementById("bio").disabled = true
    document.getElementById("div_nw").title = "Da bereits eine Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('extra18') == 'false') {
    document.getElementById("religion.label").style.opacity = '1'
    document.getElementById("wn.label").style.opacity = '1'
  } else {
    document.getElementById("religion.label").style.opacity = '0.5'
    document.getElementById("wn.label").style.opacity = '0.5'
    document.getElementById("religion").disabled = true
    document.getElementById("wn").disabled = true
    document.getElementById("div_rewn").title = "Da bereits Religion oder Werte und Normen gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (help_informatik == true) {
    document.getElementById("informatikja.label").style.opacity = '0.5'
    document.getElementById("informatikne.label").style.opacity = '0.5'
    document.getElementById("informatikja").disabled = true
    document.getElementById("informatikne").disabled = true
    document.getElementById("div_inf").title = "Da Informatik gewählt wurde, muss hier nichts mehr gewählt werden"
  } else {
    document.getElementById("informatikja.label").style.opacity = '1'
    document.getElementById("informatikne.label").style.opacity = '1'
  }
  if (sessionStorage.getItem('pfach1') == 'Musik') {
    document.getElementById("musik.label").style.opacity = '0.5'
    document.getElementById("musik").disabled = true
  } else if (sessionStorage.getItem('pfach1') == 'Kunst') {
    document.getElementById("kunst.label").style.opacity = '0.5'
    document.getElementById("kunst").disabled = true
  }
}
function gese() {
  for (var j = 1; j < 6; j++) {
    disable_wish('Kunst', j)
    disable_wish('Musik', j)
    disable_wish('Religion', j)
    pflicht(j)
    checking_for_muku_gk(j)
  }
  sport_gk()
  if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('extra18') == 'false') {
    document.getElementById("religion.label").style.opacity = '1'
    document.getElementById("wn.label").style.opacity = '1'
  } else {
    document.getElementById("religion.label").style.opacity = '0.5'
    document.getElementById("wn.label").style.opacity = '0.5'
    document.getElementById("religion").disabled = true
    document.getElementById("wn").disabled = true
    document.getElementById("div_rewn").title = "Da bereits eines der beiden Fächer gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (parseInt(sessionStorage.getItem('counter_nw')) === 0) {
    document.getElementById("physik.label").style.opacity = '1'
    document.getElementById("bio.label").style.opacity = '1'
    document.getElementById("chemie.label").style.opacity = '1'
    document.getElementById("informatik.label").style.opacity = '1'
  } else if (parseInt(sessionStorage.getItem('counter_nw')) === 1) {
    document.getElementById("physik.label").style.opacity = '0.5'
    document.getElementById("bio.label").style.opacity = '0.5'
    document.getElementById("chemie.label").style.opacity = '0.5'
    document.getElementById("informatik.label").style.opacity = '0.5'
    document.getElementById("physik").disabled = true
    document.getElementById("bio").disabled = true
    document.getElementById("chemie").disabled = true
    document.getElementById("informatik").disabled = true
    document.getElementById("div_nw1").title = "Da bereits eine Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"
    var help_informatik = false;
    var help_biologie = false;
    var help_physik = false;
    var help_chemie = false;
    for (let k = 1; k < 6; k++) {
      if (sessionStorage.getItem('pfach' + k) == 'Informatik') {
        help_informatik = true;
      }
      if (sessionStorage.getItem('pfach' + k) == 'Biologie') {
        help_biologie = true;
      }
      if (sessionStorage.getItem('pfach' + k) == 'Physik') {
        help_physik = true;
      }
      if (sessionStorage.getItem('pfach' + k) == 'Chemie') {
        help_chemie = true;
      }
    }
    if (help_informatik == true) {
      document.getElementById("informatik2.label").style.opacity = '0.5'
      document.getElementById("informatik2").disabled = true
    }
    if (help_biologie == true) {
      document.getElementById("bio2.label").style.opacity = '0.5'
      document.getElementById("bio2").disabled = true
    }
    if (help_physik == true) {
      document.getElementById("physik2.label").style.opacity = '0.5'
      document.getElementById("physik2").disabled = true
    }
    if (help_chemie == true) {
      document.getElementById("chemie2.label").style.opacity = '0.5'
      document.getElementById("chemie2").disabled = true
    }
  } else if (parseInt(sessionStorage.getItem('counter_nw')) == 2) {
    document.getElementById("physik.label").style.opacity = '0.5'
    document.getElementById("bio.label").style.opacity = '0.5'
    document.getElementById("chemie.label").style.opacity = '0.5'
    document.getElementById("informatik.label").style.opacity = '0.5'
    document.getElementById("physik").disabled = true
    document.getElementById("bio").disabled = true
    document.getElementById("chemie").disabled = true
    document.getElementById("informatik").disabled = true
    document.getElementById("physik2.label").style.opacity = '0.5'
    document.getElementById("bio2.label").style.opacity = '0.5'
    document.getElementById("chemie2.label").style.opacity = '0.5'
    document.getElementById("informatik2.label").style.opacity = '0.5'
    document.getElementById("physik2").disabled = true
    document.getElementById("bio2").disabled = true
    document.getElementById("chemie2").disabled = true
    document.getElementById("informatik2").disabled = true
    document.getElementById("englisch2.label").style.opacity = '0.5'
    document.getElementById("latein2.label").style.opacity = '0.5'
    document.getElementById("spanisch2.label").style.opacity = '0.5'
    document.getElementById("franzoesisch2.label").style.opacity = '0.5'
    document.getElementById("englisch2").disabled = true
    document.getElementById("latein2").disabled = true
    document.getElementById("spanisch2").disabled = true
    document.getElementById("franzoesisch2").disabled = true
    document.getElementById("div_2fs2nw").title = "Da bereits eine 2. Fremdsprache oder 2. Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (parseInt(sessionStorage.getItem('counter_fs')) == 0) {
    document.getElementById("englisch.label").style.opacity = '1'
    document.getElementById("latein.label").style.opacity = '1'
    document.getElementById("spanisch.label").style.opacity = '1'
    document.getElementById("franzoesisch.label").style.opacity = '1'
  } else if (parseInt(sessionStorage.getItem('counter_fs')) == 1) {
    document.getElementById("englisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
    document.getElementById("englisch").disabled = true
    document.getElementById("latein").disabled = true
    document.getElementById("spanisch").disabled = true
    document.getElementById("franzoesisch").disabled = true
    document.getElementById("div_fs1").title = "Da bereits eine Fremdsprache gewählt wurde, muss hier nichts mehr gewählt werden"
    var help_englisch = false
    var help_latein = false
    var help_spanisch = false
    var help_franzoesisch = false
    for (let k = 1; k < 6; k++) {
      if (sessionStorage.getItem('pfach' + k) == 'Englisch') {
        help_englisch = true;
      }
      if (sessionStorage.getItem('pfach' + k) == 'Latein') {
        help_latein = true;
      }
      if (sessionStorage.getItem('pfach' + k) == 'Spanisch') {
        help_spanisch = true;
      }
      if (sessionStorage.getItem('pfach' + k) == 'Französisch') {
        help_franzoesisch = true;
      }
    }
    if (help_englisch == true) {
      document.getElementById("englisch2.label").style.opacity = '0.5'
      document.getElementById("englisch2").disabled = true
    }
    if (help_latein == true) {
      document.getElementById("latein2.label").style.opacity = '0.5'
      document.getElementById("latein2").disabled = true
      document.getElementById("spanisch2.label").style.opacity = '0.5'
      document.getElementById("spanisch2").disabled = true
      document.getElementById("franzoesisch2.label").style.opacity = '0.5'
      document.getElementById("franzoesisch2").disabled = true
    }
    if (help_spanisch == true) {
      document.getElementById("latein2.label").style.opacity = '0.5'
      document.getElementById("latein2").disabled = true
      document.getElementById("spanisch2.label").style.opacity = '0.5'
      document.getElementById("spanisch2").disabled = true
      document.getElementById("franzoesisch2.label").style.opacity = '0.5'
      document.getElementById("franzoesisch2").disabled = true
    }
    if (help_franzoesisch == true) {
      document.getElementById("latein2.label").style.opacity = '0.5'
      document.getElementById("latein2").disabled = true
      document.getElementById("franzoesisch2.label").style.opacity = '0.5'
      document.getElementById("franzoesisch2").disabled = true
      document.getElementById("spanisch2.label").style.opacity = '0.5'
      document.getElementById("spanisch2").disabled = true
    }
  } else if (parseInt(sessionStorage.getItem('counter_fs')) == 2) {
    document.getElementById("englisch.label").style.opacity = '0.5'
    document.getElementById("latein.label").style.opacity = '0.5'
    document.getElementById("spanisch.label").style.opacity = '0.5'
    document.getElementById("franzoesisch.label").style.opacity = '0.5'
    document.getElementById("englisch").disabled = true
    document.getElementById("latein").disabled = true
    document.getElementById("spanisch").disabled = true
    document.getElementById("franzoesisch").disabled = true
    document.getElementById("englisch2.label").style.opacity = '0.5'
    document.getElementById("latein2.label").style.opacity = '0.5'
    document.getElementById("spanisch2.label").style.opacity = '0.5'
    document.getElementById("franzoesisch2.label").style.opacity = '0.5'
    document.getElementById("englisch2").disabled = true
    document.getElementById("latein2").disabled = true
    document.getElementById("spanisch2").disabled = true
    document.getElementById("franzoesisch2").disabled = true
    document.getElementById("physik2.label").style.opacity = '0.5'
    document.getElementById("bio2.label").style.opacity = '0.5'
    document.getElementById("chemie2.label").style.opacity = '0.5'
    document.getElementById("informatik2.label").style.opacity = '0.5'
    document.getElementById("physik2").disabled = true
    document.getElementById("bio2").disabled = true
    document.getElementById("chemie2").disabled = true
    document.getElementById("informatik2").disabled = true
    document.getElementById("div_2fs2nw").title = "Da bereits eine 2. Fremdsprache oder 2. Naturwissenschaft gewählt wurde, muss hier nichts mehr gewählt werden"
  }
  if (sessionStorage.getItem('extra8') == 'false' && sessionStorage.getItem('extra10') == 'false' && sessionStorage.getItem('extra17') == 'false') {
    sessionStorage.setItem('extra8', true)
    sessionStorage.setItem('extra10', true)
    sessionStorage.setItem('extra17', true)
  }
  if (sessionStorage.getItem('extra8') == 'true' && sessionStorage.getItem('extra10') == 'true' && sessionStorage.getItem('extra17') == 'true') {
    document.getElementById("musik.label").style.opacity = '1'
    document.getElementById("ds.label").style.opacity = '1'
    document.getElementById("kunst.label").style.opacity = '1'
  } else {
    document.getElementById("musik.label").style.opacity = '0.5'
    document.getElementById("ds.label").style.opacity = '0.5'
    document.getElementById("kunst.label").style.opacity = '0.5'
    document.getElementById("musik").disabled = true
    document.getElementById("ds").disabled = true
    document.getElementById("kunst").disabled = true
    document.getElementById("div_muku").title = "Da bereits ein musisch-künstlerisches Fach gewählt wurde, muss hier nichts mehr gewählt werden"
  }
}
function pflicht(j) {
  if (sessionStorage.getItem('extra12') == 'false' && sessionStorage.getItem('pfach' + j) == 'Deutsch') {
    sessionStorage.setItem('extra12', false)
  } else {
    sessionStorage.setItem('extra12', true)
  }
  if (sessionStorage.getItem('extra1') == 'false' && sessionStorage.getItem('pfach' + j) == 'Mathe') {
    sessionStorage.setItem('extra1', false)
  } else {
    sessionStorage.setItem('extra1', true)
  }
  if (sessionStorage.getItem('extra13') == 'false' && sessionStorage.getItem('pfach' + j) == 'Geschichte') {
    sessionStorage.setItem('extra13', false)
  } else {
    sessionStorage.setItem('extra13', true)
  }
  if (sessionStorage.getItem('extra14') == 'false' && sessionStorage.getItem('pfach' + j) == 'Politik Wirtschaft') {
    sessionStorage.setItem('extra14', false)
  } else {
    sessionStorage.setItem('extra14', true)
  }
  if (sessionStorage.getItem('extra15') == 'false' && sessionStorage.getItem('extra18') == 'false' && (sessionStorage.getItem('pfach' + j) == 'Religion' || sessionStorage.getItem('pfach' + j) == 'WN')) {
    if (sessionStorage.getItem('pfach' + j) == 'Religion') {
      sessionStorage.setItem('extra15', true)
      sessionStorage.setItem('extra18', false)
    }
    if (sessionStorage.getItem('pfach' + j) == 'WN') {
      sessionStorage.setItem('extra15', false)
      sessionStorage.setItem('extra18', true)
    }
  }
  if (sessionStorage.getItem('pfach' + j) == 'Erdkunde') {
    document.getElementById("erdkundja.label").style.opacity = '0.5'
    document.getElementById("erdkundne.label").style.opacity = '0.5'
    document.getElementById("erdkundja").disabled = true
    document.getElementById("erdkundne").disabled = true
    document.getElementById("div_ek").title = "Da Erdkunde bereits gewählt wurde, muss hier nichts mehr gewählt werden"
  }
}
function enable_2fs_2nw() {
  document.getElementById("spanisch2.label").style.opacity = '1'
  document.getElementById("franzoesisch2.label").style.opacity = '1'
  document.getElementById("latein2.label").style.opacity = '1'
  document.getElementById("englisch2.label").style.opacity = '1'
  document.getElementById("chemie2.label").style.opacity = '1'
  document.getElementById("bio2.label").style.opacity = '1'
  document.getElementById("physik2.label").style.opacity = '1'
  document.getElementById("informatik2.label").style.opacity = '1'
  document.getElementById("franzoesisch2").disabled = false
  document.getElementById("spanisch2").disabled = false
  document.getElementById("latein2").disabled = false
  document.getElementById("englisch2").disabled = false
  document.getElementById("chemie2").disabled = false
  document.getElementById("bio2").disabled = false
  document.getElementById("physik2").disabled = false
  document.getElementById("informatik2").disabled = false
  for (let j = 1; j < 6; j++) {
    if (sessionStorage.getItem('pfach' + j) == 'Spanisch') {
      document.getElementById("latein2.label").style.opacity = '0.5'
      document.getElementById("latein2").disabled = true
      document.getElementById("franzoesisch2.label").style.opacity = '0.5'
      document.getElementById("franzoesisch2").disabled = true
      document.getElementById("spanisch2.label").style.opacity = '0.5'
      document.getElementById("spanisch2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + j) == 'Französisch') {
      document.getElementById("latein2.label").style.opacity = '0.5'
      document.getElementById("latein2").disabled = true
      document.getElementById("franzoesisch2.label").style.opacity = '0.5'
      document.getElementById("franzoesisch2").disabled = true
      document.getElementById("spanisch2.label").style.opacity = '0.5'
      document.getElementById("spanisch2").disabled = true
      document.getElementById("franzoesisch2.label").style.opacity = '0.5'
      document.getElementById("franzoesisch2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + j) == 'Latein') {
      document.getElementById("latein2.label").style.opacity = '0.5'
      document.getElementById("latein2").disabled = true
      document.getElementById("franzoesisch2.label").style.opacity = '0.5'
      document.getElementById("franzoesisch2").disabled = true
      document.getElementById("spanisch2.label").style.opacity = '0.5'
      document.getElementById("spanisch2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + j) == 'Englisch') {
      document.getElementById("englisch2.label").style.opacity = '0.5'
      document.getElementById("englisch2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + j) == 'Chemie') {
      document.getElementById("chemie2.label").style.opacity = '0.5'
      document.getElementById("chemie2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + j) == 'Biologie') {
      document.getElementById("bio2.label").style.opacity = '0.5'
      document.getElementById("bio2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + j) == 'Physik') {
      document.getElementById("physik2.label").style.opacity = '0.5'
      document.getElementById("physik2").disabled = true
    }
    if (sessionStorage.getItem('pfach' + j) == 'Informatik') {
      document.getElementById("informatik2.label").style.opacity = '0.5'
      document.getElementById("informatik2").disabled = true
    }
  }
}
/* Fächer werden gewählt */
function set_religion() {
  sessionStorage.setItem('extra15', true)
  sessionStorage.setItem('extra18', false)
  document.getElementById("Religion2.label").style.opacity = '1'
  document.getElementById("Religion2").disabled = false
}
function set_wn() {
  sessionStorage.setItem('extra15', false)
  sessionStorage.setItem('extra18', true)
  document.getElementById("Religion2.label").style.opacity = '0.5'
  document.getElementById("Religion2").checked = false
  document.getElementById("Religion2").disabled = true
}
function set_musik() {
  sessionStorage.setItem('extra8', true)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra17', false)
  document.getElementById("Musik2.label").style.opacity = '1'
  document.getElementById("Musik2").disabled = false
  document.getElementById("Kunst2.label").style.opacity = '0.5'
  document.getElementById("Kunst2").disabled = true
  document.getElementById("Kunst2").checked = false
}
function set_kunst() {
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra10', true)
  sessionStorage.setItem('extra17', false)
  document.getElementById("Kunst2.label").style.opacity = '1'
  document.getElementById("Kunst2").disabled = false
  document.getElementById("Musik2.label").style.opacity = '0.5'
  document.getElementById("Musik2").checked = false
  document.getElementById("Musik2").disabled = true
}
function set_ds() {
  sessionStorage.setItem('extra8', false)
  sessionStorage.setItem('extra10', false)
  sessionStorage.setItem('extra17', true)
  document.getElementById("Kunst2.label").style.opacity = '0.5'
  document.getElementById("Kunst2").disabled = true
  document.getElementById("Kunst2").checked = false
  document.getElementById("Musik2.label").style.opacity = '0.5'
  document.getElementById("Musik2").checked = false
  document.getElementById("Musik2").disabled = true
}
function set_englisch() {
  sessionStorage.setItem('extra3', true)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra11', false)
  if (sessionStorage.getItem('profil') == 'gese') {
    document.getElementById("englisch2.label").style.opacity = '0.5'
    document.getElementById("englisch2").checked = false
    document.getElementById("englisch2").disabled = true
    document.getElementById("spanisch2.label").style.opacity = '1'
    document.getElementById("spanisch2").disabled = false
    document.getElementById("latein2.label").style.opacity = '1'
    document.getElementById("latein2").disabled = false
    document.getElementById("franzoesisch2.label").style.opacity = '1'
    document.getElementById("franzoesisch2").disabled = false
  }
}
function set_franzoesisch() {
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra6', true)
  sessionStorage.setItem('extra11', false)
  if (sessionStorage.getItem('profil') == 'gese') {
    document.getElementById("franzoesisch2.label").style.opacity = '0.5'
    document.getElementById("franzoesisch2").checked = false
    document.getElementById("franzoesisch2").disabled = true
    document.getElementById("englisch2.label").style.opacity = '1'
    document.getElementById("englisch2").disabled = false
    document.getElementById("latein2.label").style.opacity = '0.5'
    document.getElementById("latein2").disabled = true
    document.getElementById("spanisch2.label").style.opacity = '0.5'
    document.getElementById("spanisch2").disabled = true
  }
}
function set_latein() {
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra7', true)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra11', false)
  if (sessionStorage.getItem('profil') == 'gese') {
    document.getElementById("latein2.label").style.opacity = '0.5'
    document.getElementById("latein2").checked = false
    document.getElementById("latein2").disabled = true
    document.getElementById("englisch2.label").style.opacity = '1'
    document.getElementById("englisch2").disabled = false
    document.getElementById("spanisch2.label").style.opacity = '0.5'
    document.getElementById("spanisch2").disabled = true
    document.getElementById("franzoesisch2.label").style.opacity = '0.5'
    document.getElementById("franzoesisch2").disabled = true
  }
}
function set_spanisch() {
  sessionStorage.setItem('extra3', false)
  sessionStorage.setItem('extra7', false)
  sessionStorage.setItem('extra6', false)
  sessionStorage.setItem('extra11', true)
  if (sessionStorage.getItem('profil') == 'gese') {
    document.getElementById("spanisch2.label").style.opacity = '0.5'
    document.getElementById("spanisch2").checked = false
    document.getElementById("spanisch2").disabled = true
    document.getElementById("englisch2.label").style.opacity = '1'
    document.getElementById("englisch2").disabled = false
    document.getElementById("latein2.label").style.opacity = '0.5'
    document.getElementById("latein2").disabled = true
    document.getElementById("franzoesisch2.label").style.opacity = '0.5'
    document.getElementById("franzoesisch2").disabled = true
  }
}
function set_biologie() {
  sessionStorage.setItem('extra5', true)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra9', false)
  if (sessionStorage.getItem('profil') == 'gese') {
    document.getElementById("bio2.label").style.opacity = '0.5'
    document.getElementById("bio2").checked = false
    document.getElementById("bio2").disabled = true
    document.getElementById("chemie2.label").style.opacity = '1'
    document.getElementById("chemie2").disabled = false
    document.getElementById("physik2.label").style.opacity = '1'
    document.getElementById("physik2").disabled = false
    document.getElementById("informatik2.label").style.opacity = '1'
    document.getElementById("informatik2").disabled = false
    for (let index = 1; index < 6; index++) {
      if (sessionStorage.getItem('pfach' + index) == 'Informatik') {
        document.getElementById("informatik2.label").style.opacity = '0.5'
        document.getElementById("informatik2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Chemie') {
        document.getElementById("chemie2.label").style.opacity = '0.5'
        document.getElementById("chemie2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Biologie') {
        document.getElementById("bio2.label").style.opacity = '0.5'
        document.getElementById("bio2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Physik') {
        document.getElementById("physik2.label").style.opacity = '0.5'
        document.getElementById("physik2").disabled = true
      }
    }
  }
}
function set_physik() {
  sessionStorage.setItem('extra4', true)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra9', false)
  if (sessionStorage.getItem('profil') == 'gese') {
    document.getElementById("physik2.label").style.opacity = '0.5'
    document.getElementById("physik2").checked = false
    document.getElementById("physik2").disabled = true
    document.getElementById("chemie2.label").style.opacity = '1'
    document.getElementById("chemie2").disabled = false
    document.getElementById("bio2.label").style.opacity = '1'
    document.getElementById("bio2").disabled = false
    document.getElementById("informatik2.label").style.opacity = '1'
    document.getElementById("informatik2").disabled = false
    for (let index = 1; index < 6; index++) {
      if (sessionStorage.getItem('pfach' + index) == 'Informatik') {
        document.getElementById("informatik2.label").style.opacity = '0.5'
        document.getElementById("informatik2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Chemie') {
        document.getElementById("chemie2.label").style.opacity = '0.5'
        document.getElementById("chemie2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Biologie') {
        document.getElementById("bio2.label").style.opacity = '0.5'
        document.getElementById("bio2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Physik') {
        document.getElementById("physik2.label").style.opacity = '0.5'
        document.getElementById("physik2").disabled = true
      }
    }
  }
}
function set_chemie() {
  sessionStorage.setItem('extra2', true)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra5', false)
  sessionStorage.setItem('extra9', false)
  if (sessionStorage.getItem('profil') == 'gese') {
    document.getElementById("chemie2.label").style.opacity = '0.5'
    document.getElementById("chemie2").checked = false
    document.getElementById("chemie2").disabled = true
    document.getElementById("bio2.label").style.opacity = '1'
    document.getElementById("bio2").disabled = false
    document.getElementById("physik2.label").style.opacity = '1'
    document.getElementById("physik2").disabled = false
    document.getElementById("informatik2.label").style.opacity = '1'
    document.getElementById("informatik2").disabled = false
    for (let index = 1; index < 6; index++) {
      if (sessionStorage.getItem('pfach' + index) == 'Informatik') {
        document.getElementById("informatik2.label").style.opacity = '0.5'
        document.getElementById("informatik2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Chemie') {
        document.getElementById("chemie2.label").style.opacity = '0.5'
        document.getElementById("chemie2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Biologie') {
        document.getElementById("bio2.label").style.opacity = '0.5'
        document.getElementById("bio2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Physik') {
        document.getElementById("physik2.label").style.opacity = '0.5'
        document.getElementById("physik2").disabled = true
      }
    }
  }
}
function set_informatik() {
  sessionStorage.setItem('extra9', true)
  sessionStorage.setItem('extra2', false)
  sessionStorage.setItem('extra4', false)
  sessionStorage.setItem('extra5', false)
  if (sessionStorage.getItem('profil') == 'gese') {
    document.getElementById("informatik2.label").style.opacity = '0.5'
    document.getElementById("informatik2").checked = false
    document.getElementById("informatik2").disabled = true
    document.getElementById("chemie2.label").style.opacity = '1'
    document.getElementById("chemie2").disabled = false
    document.getElementById("bio2.label").style.opacity = '1'
    document.getElementById("bio2").disabled = false
    document.getElementById("physik2.label").style.opacity = '1'
    document.getElementById("physik2").disabled = false
    for (let index = 1; index < 6; index++) {
      if (sessionStorage.getItem('pfach' + index) == 'Informatik') {
        document.getElementById("informatik2.label").style.opacity = '0.5'
        document.getElementById("informatik2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Chemie') {
        document.getElementById("chemie2.label").style.opacity = '0.5'
        document.getElementById("chemie2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Biologie') {
        document.getElementById("bio2.label").style.opacity = '0.5'
        document.getElementById("bio2").disabled = true
      }
      if (sessionStorage.getItem('pfach' + index) == 'Physik') {
        document.getElementById("physik2.label").style.opacity = '0.5'
        document.getElementById("physik2").disabled = true
      }
    }
  }
  
}
/* 2. NW / 2. FS */
function set_englisch_gese2() {
  sessionStorage.setItem('extra3', true)
}
function set_franzoesisch_gese2() {
  sessionStorage.setItem('extra6', true)
}
function set_latein_gese2() {
  sessionStorage.setItem('extra7', true)
}
function set_spanisch_gese2() {
  sessionStorage.setItem('extra11', true)
}
function set_physik_gese2() {
  sessionStorage.setItem('extra4', true)
}
function set_informatik_gese2() {
  sessionStorage.setItem('extra9', true)
}
function set_chemie_gese2() {
  sessionStorage.setItem('chemie', true)
}
function set_biologie_gese2() {
  sessionStorage.setItem('extra5', true)
}
/* Zusätzliche Fächer */
function set_erdkunde(choose) {
  sessionStorage.setItem('extra16', choose)
}
function set_informatik_voluntary(choose) {
  sessionStorage.setItem('extra9', choose)
}
function end() {
  for (let i = 1; i < 6; i++) {
    switch (sessionStorage.getItem('pfach' + i)) {
      case 'Mathe':
        if (i <= 5) {
          sessionStorage.setItem('extra1', false)
        } else {
          sessionStorage.setItem('extra1', true)
        }
        break;
      case 'Informatik':
        if (i <= 5) {
          sessionStorage.setItem('extra9', false)
        } else {
          sessionStorage.setItem('extra9', true)
        }
        break;
      case 'Chemie':
        if (i <= 5) {
          sessionStorage.setItem('extra2', false)
        } else {
          sessionStorage.setItem('extra2', true)
        }
        break;
      case 'Biologie':
        if (i <= 5) {
          sessionStorage.setItem('extra5', false)
        } else {
          sessionStorage.setItem('extra5', true)
        }
        break;
      case 'Physik':
        if (i <= 5) {
          sessionStorage.setItem('extra4', false)
        } else {
          sessionStorage.setItem('extra4', true)
        }
        break;
      case 'Deutsch':
        if (i <= 5) {
          sessionStorage.setItem('extra12', false)
        } else {
          sessionStorage.setItem('extra12', true)
        }
        break;
      case 'Englisch':
        if (i <= 5) {
          sessionStorage.setItem('extra3', false)
        } else {
          sessionStorage.setItem('extra3', true)
        }
        break;
      case 'Französisch':
        if (i <= 5) {
          sessionStorage.setItem('extra6', false)
        } else {
          sessionStorage.setItem('extra6', true)
        }
        break;
      case 'Latein':
        if (i <= 5) {
          sessionStorage.setItem('extra7', false)
        } else {
          sessionStorage.setItem('extra7', true)
        }
        break;
      case 'Spanisch':
        if (i <= 5) {
          sessionStorage.setItem('extra11', false)
        } else {
          sessionStorage.setItem('extra11', true)
        }
        break;
      case 'Kunst':
        if (i <= 5) {
          sessionStorage.setItem('extra10', false)
        } else {
          sessionStorage.setItem('extra10', true)
        }
        break;
      case 'Musik':
        if (i <= 5) {
          sessionStorage.setItem('extra8', false)
        } else {
          sessionStorage.setItem('extra8', true)
        }
        break;
      case 'Geschichte':
        if (i <= 5) {
          sessionStorage.setItem('extra13', false)
        } else {
          sessionStorage.setItem('extra13', true)
        }
        break;
      case 'Religion':
        if (i <= 5) {
          sessionStorage.setItem('extra15', false)
        } else {
          sessionStorage.setItem('extra15', true)
        }
        break;
      case 'Erdkunde':
        if (i <= 5) {
          sessionStorage.setItem('extra16', false)
        } else {
          sessionStorage.setItem('extra16', true)
        }
        break;
      case 'Politik Wirtschaft':
        if (i <= 5) {
          sessionStorage.setItem('extra14', false)
        } else {
          sessionStorage.setItem('extra14', true)
        }
        break;
      case 'Sport':
        if (i <= 5) {
          sessionStorage.setItem('sport_gk', false)
        } else {
          sessionStorage.setItem('sport_gk', true)
        }
        break;
    }
  }
}
function set_wish(fach) {
  sessionStorage.setItem('wish_for_p4_p5', fach)
  console.log('Wunsch: ' + sessionStorage.getItem('wish_for_p4_p5'))
}
/* Überprüfungen, ob alles gewählt wurde */
function check_for_complete_p() {
  var p1_gewaehlt = false
  var p2_gewaehlt = false
  var p3_gewaehlt = false
  var p4_gewaehlt = false
  var p5_gewaehlt = false
  for (let index = 1; index < 6; index++) {
    if (index == 1) {
      for (let k = 1; k < 14; k++) {
        if (document.getElementById("pfach" + index + "." + k).checked == true) {
          p1_gewaehlt = true
        }
      }
    }
    if (index == 2) {
      for (let k = 1; k < 13; k++) {
        if (document.getElementById("pfach" + index + "." + k).checked == true) {
          p2_gewaehlt = true
        }
      }
    }
    if (index == 3) {
      for (let k = 1; k < 15; k++) {
        if (document.getElementById("pfach" + index + "." + k).checked == true) {
          p3_gewaehlt = true
        }
      }
    }
    if (index == 4) {
      for (let k = 1; k < 17; k++) {
        if (document.getElementById("pfach" + index + "." + k).checked == true) {
          p4_gewaehlt = true
        }
      }
    }
    if (index == 5) {
      for (let k = 1; k < 18; k++) {
        if (document.getElementById("pfach" + index + "." + k).checked == true) {
          p5_gewaehlt = true
        }
      }
    }
  }
  if (p1_gewaehlt == true && p2_gewaehlt == true && p3_gewaehlt == true && p4_gewaehlt == true && p5_gewaehlt == true) {
    console.log('gewählt')
    return true
  } else {
    console.log('error')
    return false
  }
}
function check_for_complete_gk_gese() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) &&
    ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))
    && ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) &&
    ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true && document.getElementById("englisch").disabled == true) || (document.getElementById("englisch").checked == true || document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true)) &&
    ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("informatik").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("informatik").checked == true || document.getElementById("chemie").checked == true)) &&
    ((document.getElementById("spanisch2").disabled == true && document.getElementById("latein2").disabled == true && document.getElementById("englisch2").disabled == true && document.getElementById("franzoesisch2").disabled == true &&
      document.getElementById("physik2").disabled == true && document.getElementById("informatik2").disabled == true && document.getElementById("chemie2").disabled == true && document.getElementById("bio2").disabled == true) || (document.getElementById("physik2").checked == true || document.getElementById("chemie2").checked == true || document.getElementById("informatik2").checked == true || document.getElementById("bio2").checked == true || document.getElementById("spanisch2").checked == true || document.getElementById("englisch2").checked == true || document.getElementById("latein2").checked == true || document.getElementById("franzoesisch2").checked == true))) {
    console.log('gewählt')
    return true
  } else {
    console.log('error')
    return false
  }
}
function check_for_complete_gk_manu() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) &&
    ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))
    && ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) &&
    ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true && document.getElementById("englisch").disabled == true) || (document.getElementById("englisch").checked == true || document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true)) &&
    ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("informatik").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("informatik").checked == true || document.getElementById("chemie").checked == true))) {
    console.log('gewählt')
    return true
  } else {
    console.log('error')
    return false
  }
}
function check_for_complete_gk_muku() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) &&
    ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) &&
    ((document.getElementById("informatikja").disabled == true && document.getElementById("informatikne").disabled == true) || (document.getElementById("informatikja").checked == true || document.getElementById("informatikne").checked == true)) &&
    ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("chemie").checked == true)) &&
    ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true && document.getElementById("englisch").disabled == true) || (document.getElementById("englisch").checked == true || document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true)) &&
    ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))) {
    console.log('gewählt')
    return true
  } else {
    console.log('error')
    return false
  }
}
function check_for_complete_gk_spra() {
  if (((document.getElementById("religion").disabled == true && document.getElementById("wn").disabled == true) || (document.getElementById("religion").checked == true || document.getElementById("wn").checked == true)) &&
    ((document.getElementById("musik").disabled == true && document.getElementById("kunst").disabled == true && document.getElementById("ds").disabled == true) || (document.getElementById("musik").checked == true || document.getElementById("kunst").checked == true || document.getElementById("ds").checked == true))
    && ((document.getElementById("erdkundja").disabled == true && document.getElementById("erdkundne").disabled == true) || (document.getElementById("erdkundja").checked == true || document.getElementById("erdkundne").checked == true)) &&
    ((document.getElementById("informatikja").disabled == true && document.getElementById("informatikne").disabled == true) || (document.getElementById("informatikja").checked == true || document.getElementById("informatikne").checked == true)) &&
    ((document.getElementById("physik").disabled == true && document.getElementById("bio").disabled == true && document.getElementById("chemie").disabled == true) || (document.getElementById("physik").checked == true || document.getElementById("bio").checked == true || document.getElementById("chemie").checked == true)) &&
    ((document.getElementById("spanisch").disabled == true && document.getElementById("latein").disabled == true && document.getElementById("franzoesisch").disabled == true) || (document.getElementById("spanisch").checked == true || document.getElementById("franzoesisch").checked == true || document.getElementById("latein").checked == true))) {
    console.log('gewählt')
    return true
  } else {
    console.log('error')
    return false
  }
} 
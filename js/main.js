const submit_button = document.querySelector(".submit-button");
submit_button.addEventListener("click", validation);

function validation() {
  submit_button.style.display = "none";
  result_header = document.querySelector(".result-header");
  let answers = [];

  for (let i = 0; i <= 44; i++) {
    answers.push(document.getElementsByName("answer-" + String(i)));
  }

  let technik_informatyk = 0;
  let technik_programista = 0;
  let technik_mechatronik = 0;
  let technik_chlodnictwa = 0;
  let technik_operator_CNC = 0;
  let technik_pojazdow_samochodowych = 0;
  let technik_elektryk = 0;
  let technik_grafiki = 0;
  let technik_logistyk = 0;
  let liceum_jezykowe = 0;
  let liceum_matematyczne = 0;
  let liceum_menedzerskie = 0;
  let operator_obrabiarek = 0;
  let mechanik_pojazdow = 0;
  let elektryk = 0;
  let elektromechanik_pojazdow = 0;
  let fryzjer = 0;

  if (answers[0][0].checked) {
    technik_logistyk += 1;
    liceum_jezykowe += 1;
  }

  if (answers[1][0].checked) {
    technik_chlodnictwa += 1;
    technik_operator_CNC += 1;
    technik_pojazdow_samochodowych += 1;
    operator_obrabiarek += 1;
    mechanik_pojazdow += 1;
    elektromechanik_pojazdow += 1;
    technik_elektryk += 1;
    elektryk += 1;
  }

  if (answers[2][0].checked) {
    operator_obrabiarek += 1;
    liceum_menedzerskie += 1;
    technik_logistyk += 1;
    fryzjer += 1;
  }

  if (answers[3][0].checked) {
    operator_obrabiarek += 1;
    technik_operator_CNC += 1;
  }

  if (answers[4][0].checked) {
    operator_obrabiarek += 1;
  }

  if (answers[5][0].checked) {
    technik_pojazdow_samochodowych += 1;
    mechanik_pojazdow += 1;
    elektromechanik_pojazdow += 1;
  }

  if (answers[6][0].checked) {
    technik_pojazdow_samochodowych += 1;
    mechanik_pojazdow += 1;
    elektromechanik_pojazdow += 1;
  }

  if (answers[7][0].checked) {
    technik_elektryk += 1;
    technik_mechatronik += 1;
    elektryk += 1;
  }

  if (answers[8][0].checked) {
    technik_elektryk += 1;
    technik_logistyk += 1;
    elektryk += 1;
    fryzjer += 1;
  }

  if (answers[9][0].checked) {
    elektromechanik_pojazdow += 1;
  }

  if (answers[10][0].checked) {
    operator_obrabiarek += 1;
    mechanik_pojazdow += 1;
    elektryk += 1;
    elektromechanik_pojazdow += 1;
    fryzjer += 1;
  }

  if (answers[11][0].checked) {
    fryzjer += 1;
  }

  if (answers[12][0].checked) {
    fryzjer += 1;
    technik_grafiki += 1;
  }

  if (answers[13][0].checked) {
    fryzjer += 1;
    liceum_jezykowe += 1;
  }

  if (answers[14][0].checked) {
    liceum_jezykowe += 1;
  }

  if (answers[15][0].checked) {
    liceum_jezykowe += 1;
  }

  if (answers[16][0].checked) {
    liceum_matematyczne += 1;
    technik_informatyk += 1;
    technik_mechatronik += 1;
    liceum_menedzerskie += 1;
  }

  if (answers[17][0].checked) {
    liceum_matematyczne += 1;
    technik_programista += 1;
    technik_informatyk += 1;
    liceum_menedzerskie += 1;
    elektryk += 1;
  }
  if (answers[18][0].checked) {
    liceum_matematyczne += 1;
    technik_informatyk += 1;
    technik_programista += 1;
    technik_mechatronik += 1;
    technik_logistyk += 1;
  }
  if (answers[19][0].checked) {
    liceum_menedzerskie += 1;
    liceum_matematyczne += 1;
  }
  if (answers[20][0].checked) {
    liceum_menedzerskie += 1;
  }
  if (answers[21][0].checked) {
    liceum_menedzerskie += 1;
  }
  if (answers[22][0].checked) {
    liceum_menedzerskie += 1;
    technik_programista += 1;
    technik_logistyk += 1;
  }
  if (answers[23][0].checked) {
    technik_informatyk += 1;
  }
  if (answers[24][0].checked) {
    technik_informatyk += 1;
  }
  if (answers[25][0].checked) {
    technik_informatyk += 1;
    technik_programista += 1;
    technik_mechatronik += 1;
  }
  if (answers[26][0].checked) {
    technik_programista += 1;
  }
  if (answers[27][0].checked) {
    technik_programista += 1;
    liceum_matematyczne += 1;
    technik_logistyk += 1;
  }
  if (answers[28][0].checked) {
    technik_programista += 1;
    liceum_matematyczne += 1;
  }
  if (answers[29][0].checked) {
    technik_mechatronik += 1;
    technik_operator_CNC += 1;
    technik_chlodnictwa += 1;
  }
  if (answers[30][0].checked) {
    technik_mechatronik += 1;
  }
  if (answers[31][0].checked) {
    technik_chlodnictwa += 1;
  }
  if (answers[32][0].checked) {
    technik_chlodnictwa += 1;
  }
  if (answers[33][0].checked) {
    technik_chlodnictwa += 1;
    technik_mechatronik += 1;
    technik_grafiki += 1;
    technik_operator_CNC += 1;
    operator_obrabiarek += 1;
  }
  if (answers[34][0].checked) {
    technik_chlodnictwa += 1;
  }
  if (answers[35][0].checked) {
    technik_operator_CNC += 1;
  }
  if (answers[36][0].checked) {
    technik_operator_CNC += 1;
    technik_grafiki += 1;
  }
  if (answers[37][0].checked) {
    technik_operator_CNC += 1;
  }
  if (answers[38][0].checked) {
    technik_pojazdow_samochodowych += 1;
    technik_elektryk += 1;
    technik_informatyk += 1;
    mechanik_pojazdow += 1;
    elektryk += 1;
    elektromechanik_pojazdow += 1;
  }
  if (answers[39][0].checked) {
    technik_pojazdow_samochodowych += 1;
  }
  if (answers[40][0].checked) {
    technik_elektryk += 1;
    elektryk += 1;
  }
  if (answers[41][0].checked) {
    technik_grafiki += 1;
  }
  if (answers[42][0].checked) {
    technik_grafiki += 1;
  }
  if (answers[43][0].checked) {
    technik_logistyk += 1;
  }

  if (answers[44][0].checked) {
    liceum_jezykowe += 1;
  }

  const profiles_results = [
    technik_informatyk,
    technik_programista,
    technik_mechatronik,
    technik_chlodnictwa,
    technik_operator_CNC,
    technik_pojazdow_samochodowych,
    technik_elektryk,
    technik_grafiki,
    technik_logistyk,
    liceum_jezykowe,
    liceum_matematyczne,
    liceum_menedzerskie,
    operator_obrabiarek,
    mechanik_pojazdow,
    elektryk,
    elektromechanik_pojazdow,
    fryzjer,
  ];

  const profiles = [
    [technik_informatyk, "technik informatyk"],
    [technik_programista, "technik programista"],
    [technik_mechatronik, "technik mechatronik"],
    [technik_chlodnictwa, "technik chłodnictwa i klimatyzacji"],
    [technik_operator_CNC, "technik operator CNC"],
    [technik_pojazdow_samochodowych, "technik pojazdów samochodowych"],
    [technik_elektryk, "technik elektryk"],
    [technik_grafiki, "technik grafik"],
    [technik_logistyk, "technik logistyk"],
    [liceum_jezykowe, "liceum językowe"],
    [liceum_matematyczne, "liceum matematyczne"],
    [liceum_menedzerskie, "liceum menedżerskie"],
    [operator_obrabiarek, "operator obrabiarek skrawających"],
    [mechanik_pojazdow, "mechanik pojazdów samochodowych"],
    [elektryk, "elektryk"],
    [elektromechanik_pojazdow, "elektromechanik pojazdów samochodowych"],
    [fryzjer, "fryzjer"],
  ];

  let max = Math.max(...profiles_results);

  const result = document.querySelector(".result-profiles");

  if (max == 0) {
    result.innerHTML += '<p class="result-profile">Zaznacz coś ;)</p>';
    setTimeout(function () {
      window.location.reload();
    }, 2000);
  } else {
    const best_profiles = [];

    for (let profile of profiles) {
      if (profile[0] == max) {
        best_profiles.push(profile[1]);
      }
    }

    result_header.style.display = "block";

    for (let profile_name of best_profiles) {
      result.innerHTML +=
        '<p class="result-profile">&#8226 ' + profile_name + "</p>";
    }
  }
}

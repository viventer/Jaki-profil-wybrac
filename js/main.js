const submit_button = document.querySelector(".submit-button");
submit_button.addEventListener("click", validation);

function validation() {
  submit_button.style.display = "none";
  result_header = document.querySelector(".result-header");
  let answers = [];

  for (i = 1; i <= 18; i++) {
    answers.push(document.getElementsByName("answer-" + String(i)));
  }
  let klasa_humanistyczna = 0;
  let dziennikarsko_medialna = 0;
  let straz_graniczna = 0;
  let szkola_branzowa = 0;
  let biznesowa = 0;
  let matematyczna = 0;

  if (answers[0][0].checked) {
    klasa_humanistyczna += 1;
    dziennikarsko_medialna += 1;
    straz_graniczna += 1;
    szkola_branzowa += 1;
  }

  if (answers[1][0].checked) {
    biznesowa += 1;
    dziennikarsko_medialna += 1;
    szkola_branzowa += 1;
  }

  if (answers[2][0].checked) {
    dziennikarsko_medialna += 1;
    biznesowa += 1;
  }

  if (answers[3][0].checked) {
    straz_graniczna += 1;
  }

  if (answers[4][0].checked) {
    dziennikarsko_medialna += 1;
  }

  if (answers[5][0].checked) {
    matematyczna += 1;
  }

  if (answers[6][0].checked) {
    klasa_humanistyczna += 1;
  }

  if (answers[7][0].checked) {
    straz_graniczna += 1;
  }

  if (answers[8][0].checked) {
    straz_graniczna += 1;
    szkola_branzowa += 1;
  }

  if (answers[9][0].checked) {
    straz_graniczna += 1;
    szkola_branzowa += 1;
  }

  if (answers[10][0].checked) {
    szkola_branzowa += 1;
  }

  if (answers[11][0].checked) {
    biznesowa += 1;
    dziennikarsko_medialna += 1;
    matematyczna += 1;
    klasa_humanistyczna += 1;
    straz_graniczna += 1;
  }

  if (answers[12][0].checked) {
    szkola_branzowa += 1;
  }

  if (answers[13][0].checked) {
    szkola_branzowa += 1;
  }

  if (answers[14][0].checked) {
    dziennikarsko_medialna += 1;
  }

  if (answers[15][0].checked) {
    biznesowa += 1;
  }

  if (answers[16][0].checked) {
    straz_graniczna += 1;
  }

  if (answers[17][0].checked) {
    klasa_humanistyczna += 1;
    dziennikarsko_medialna += 1;
  }

  const profiles_results = [
    dziennikarsko_medialna,
    straz_graniczna,
    klasa_humanistyczna,
    biznesowa,
    szkola_branzowa,
    matematyczna,
  ];

  const profiles = [
    [klasa_humanistyczna, "humanistyczny"],
    [dziennikarsko_medialna, "dziennikarsko-medialny"],
    [straz_graniczna, "straż graniczna"],
    [szkola_branzowa, "branżowy"],
    [biznesowa, "biznesowy"],
    [matematyczna, "matematyczny"],
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

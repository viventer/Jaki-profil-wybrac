const submit_button = document.querySelector(".submit-button");

submit_button.addEventListener("click", validation);

function validation() {
  submit_button.style.display = "none";
  result_header = document.querySelector(".result-header");

  let answer_1 = document.getElementsByName("answer-1");
  let answer_2 = document.getElementsByName("answer-2");
  let answer_3 = document.getElementsByName("answer-3");
  let answer_4 = document.getElementsByName("answer-4");
  let answer_5 = document.getElementsByName("answer-5");
  let answer_6 = document.getElementsByName("answer-6");
  let answer_7 = document.getElementsByName("answer-7");
  let answer_8 = document.getElementsByName("answer-8");
  let answer_9 = document.getElementsByName("answer-9");
  let answer_10 = document.getElementsByName("answer-10");
  let answer_11 = document.getElementsByName("answer-11");
  let answer_12 = document.getElementsByName("answer-12");
  let answer_13 = document.getElementsByName("answer-13");
  let answer_14 = document.getElementsByName("answer-14");
  let answer_15 = document.getElementsByName("answer-15");
  let answer_16 = document.getElementsByName("answer-16");
  let answer_17 = document.getElementsByName("answer-17");
  let answer_18 = document.getElementsByName("answer-18");
  let klasa_humanistyczna = 0;
  let dziennikarsko_medialna = 0;
  let straz_graniczna = 0;
  let szkola_branzowa = 0;
  let biznesowa = 0;
  let matematyczna = 0;

  if (answer_1[0].checked) {
    klasa_humanistyczna += 1;
    dziennikarsko_medialna += 1;
    straz_graniczna += 1;
    szkola_branzowa += 1;
  }

  if (answer_2[0].checked) {
    biznesowa += 1;
    dziennikarsko_medialna += 1;
    szkola_branzowa += 1;
  }

  if (answer_3[0].checked) {
    dziennikarsko_medialna += 1;
    biznesowa += 1;
  }

  if (answer_4[0].checked) {
    straz_graniczna += 1;
  }

  if (answer_5[0].checked) {
    dziennikarsko_medialna += 1;
  }

  if (answer_6[0].checked) {
    matematyczna += 1;
  }

  if (answer_7[0].checked) {
    klasa_humanistyczna += 1;
  }

  if (answer_8[0].checked) {
    straz_graniczna += 1;
  }

  if (answer_9[0].checked) {
    straz_graniczna += 1;
    szkola_branzowa += 1;
  }

  if (answer_10[0].checked) {
    straz_graniczna += 1;
    szkola_branzowa += 1;
  }

  if (answer_11[0].checked) {
    szkola_branzowa += 1;
  }

  if (answer_12[0].checked) {
    biznesowa += 1;
    dziennikarsko_medialna += 1;
    matematyczna += 1;
    klasa_humanistyczna += 1;
    straz_graniczna += 1;
  }

  if (answer_13[0].checked) {
    szkola_branzowa += 1;
  }

  if (answer_14[0].checked) {
    szkola_branzowa += 1;
  }

  if (answer_15[0].checked) {
    dziennikarsko_medialna += 1;
  }

  if (answer_16[0].checked) {
    biznesowa += 1;
  }

  if (answer_17[0].checked) {
    straz_graniczna += 1;
  }

  if (answer_18[0].checked) {
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

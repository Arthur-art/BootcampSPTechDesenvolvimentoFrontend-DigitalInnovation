/*Faça a leitura de um valor inteiro. Em seguida,
 calcule o menor número de notas possíveis (cédulas) onde o valor pode ser decomposto.
 As notas que você deve considerar são de 100, 50, 20, 10, 5, 2 e 1.
  Na sequência mostre o valor lido e a relação de notas necessárias. */

let valueInt = 89;
let newValueHundredAsync = valueInt;
function callIfAuthenticated(fn) {
  return !!loggedin && fn();
}
function callIfAuthenticatedTh(fn) {
  return !!loggedin2 && fn();
}
let loggedin = false;
let loggedin2 = false;
if (valueInt >= 1000) {
  loggedin = true;
}
if (valueInt < 1000) {
  loggedin2 = true;
}
let newValueHundredThou = callIfAuthenticated(() => scoreHundredThou(valueInt));
let newValueHundred = callIfAuthenticatedTh(() => scoreHundred(valueInt));
if (loggedin == true) {
  newValueHundredAsync = newValueHundredThou;
} else if (loggedin = false) {
  newValueHundredAsync = valueInt;
}
let newValueFift = scoreFift(newValueHundredAsync);
let newValueTwenty = scoreTwenty(newValueFift);
let newValueTen = scoreTen(newValueTwenty);
let newValueFive = scoreFive(newValueTen);
let newValueTwo = scoreTwo(newValueFive);
let newValueOne = scoreOne(newValueTwo);

function scoreHundredThou(value) {
  let Hundred = 100;
  let notes = 0;
  let valueNotes;
  if (value == 100 || value > 100) {
    for (let i = value; i > 100; i--) {
      notes = value / 100;
    }
  }

  valueNotesString = String(notes);
  valueNotes = Array.from(valueNotesString);
  let valueNotesHundred = 18 * 100;
  let valueNotesHundredSub = value - valueNotesHundred;

  console.log(`${valueNotes[0]}${valueNotes[1]} nota(s) de R$ ${Hundred},00 `);
  return valueNotesHundredSub;
}

function scoreHundred(value) {
  let Hundred = 100;
  let notes = 0;
  let valueNotes;
  if (value == 100 || value > 100) {
    for (let i = value; i > 100; i--) {
      notes = value / 100;
    }
  }
  valueNotesString = String(notes);
  valueNotes = Array.from(valueNotesString);
  let valueNotesHundred = valueNotes[0] * 100;
  let valueNotesHundredSub = value - valueNotesHundred;

  console.log(valueNotes[0] + " nota(s) de R$ " + Hundred + ",00 ");
  return valueNotesHundredSub;
}

function scoreFift(value) {
  let Hundred = 50;
  let notes = 0;
  let valueNotes;
  if (value == 50 || value > 50) {
    for (let i = value; i >= 50; i--) {
      notes = value / 50;
    }
  }
  valueNotesString = String(notes);
  valueNotes = Array.from(valueNotesString);
  let valueNotesHundred = valueNotes[0] * 50;
  let valueNotesHundredSub = value - valueNotesHundred;

  console.log(valueNotes[0] + " nota(s) de R$ " + Hundred + ",00 ");
  return valueNotesHundredSub;
}

function scoreTwenty(value) {
  let Hundred = 20;
  let notes = 0;
  let valueNotes;
  if (value == 20 || value > 20) {
    for (let i = value; i >= 20; i--) {
      notes = value / 20;
    }
  }
  valueNotesString = String(notes);
  valueNotes = Array.from(valueNotesString);
  let valueNotesHundred = valueNotes[0] * 20;
  let valueNotesHundredSub = value - valueNotesHundred;

  console.log(valueNotes[0] + " nota(s) de R$ " + Hundred + ",00 ");
  return valueNotesHundredSub;
}

function scoreTen(value) {
  let Hundred = 10;
  let notes = 0;
  let valueNotes;
  if (value == 10 || value > 10) {
    for (let i = value; i >= 10; i--) {
      notes = value / 10;
    }
  }
  valueNotesString = String(notes);
  valueNotes = Array.from(valueNotesString);
  let valueNotesHundred = valueNotes[0] * 10;
  let valueNotesHundredSub = value - valueNotesHundred;

  console.log(valueNotes[0] + " nota(s) de R$ " + Hundred + ",00 ");
  return valueNotesHundredSub;
}

function scoreFive(value) {
  let Hundred = 5;
  let notes = 0;
  let valueNotes;
  if (value == 5 || value > 5) {
    for (let i = value; i >= 5; i--) {
      notes = value / 5;
    }
  }
  valueNotesString = String(notes);
  valueNotes = Array.from(valueNotesString);
  let valueNotesHundred = valueNotes[0] * 5;
  let valueNotesHundredSub = value - valueNotesHundred;

  console.log(valueNotes[0] + " nota(s) de R$ " + Hundred + ",00 ");
  return valueNotesHundredSub;
}

function scoreTwo(value) {
  let Hundred = 2;
  let notes = 0;
  let valueNotes;
  if (value == 2 || value > 2) {
    for (let i = value; i >= 2; i--) {
      notes = value / 2;
    }
  }
  valueNotesString = String(notes);
  valueNotes = Array.from(valueNotesString);
  let valueNotesHundred = valueNotes[0] * 2;
  let valueNotesHundredSub = value - valueNotesHundred;

  console.log(valueNotes[0] + " nota(s) de R$ " + Hundred + ",00 ");
  return valueNotesHundredSub;
}

function scoreOne(value) {
  let Hundred = 1;
  let notes = 0;
  let valueNotes;
  if (value == 1 || value > 1) {
    for (let i = value; i >= 1; i--) {
      notes = value / 1;
    }
  }
  valueNotesString = String(notes);
  valueNotes = Array.from(valueNotesString);
  let valueNotesHundred = valueNotes[0] * 1;
  let valueNotesHundredSub = value - valueNotesHundred;

  console.log(valueNotes[0] + " nota(s) de R$ " + Hundred + ",00 ");
  return valueNotesHundredSub;
}

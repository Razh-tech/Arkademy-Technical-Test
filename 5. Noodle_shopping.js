function counting(total) {
  var date = /^(?=.*[1-30]).+$/;
  var noodle = 2500;
  var money = /^(?=.*[0-9]).+$/;
  var count = money / noodle;
  var myTrunc = Math.trunc(count);
  var oddCount = count % 2 != 0;
  var evenCount = count % 2 = 0;
  var bonus1 = myTrunc / 4;
  var bonus2 = myTrunc / 3;
  var total = count + finalBonus;

  console.log(finalBonus);
  if (date % 2 = 0) {
    if (count >= 4) {
      console.log(count / 4);
    } if (count % 4 != 0) {
      Math.trunc(count);
    } else {
      console.log(count / 4);
    }
  } else if (date % 2 != 0) {
    if (count >= 3) {
      console.log(count / 3);
    } if (count % 3 != 0) {
      Math.trunc(count);
    } else {
      console.log(count / 3);
    }
  } else if (date % 5 = 0) {
    if (date % 2 = 0) {
      if (count >= 4) {
        console.log(count / 4);
      } if (count % 4 != 0) {
        Math.trunc(count); {
          if (myTrunc % 2 = 0) {
            console.log(bonus1 * 10);
          } else {
            console.log(bonus2 * 5);
          }
        }
      } else {
        if (count % 4 = 0) {
          if (myTrunc % 2 = 0) {
            console.log(bonus1 * 10);
          } else {
            console.log(bonus2 * 5);
          }
        }
      }
  }
} console.log(counting(total));

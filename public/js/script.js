import { brotherData, brotherMotto } from "./data/brotherData.js";

$(document).ready(function () {
  $(`.btn-class`).on("click", function () {
    $(`.brother-box`).css("display", "none");
    $(`.motto`).css("display", "none");
    $(`.spinner-border`).css("display", "block");
    let btnValue = $(this)[0].innerText;
    let data = brotherData;
    let displayArray = [];

    setTimeout(hideLoader, 1000);

    function hideLoader() {
      $(`.spinner-border`).css("display", "none");
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].brotherClass == btnValue) {
        let classCrossed = data[i].brotherClass;
        let img = data[i].brotherImg;
        let name = data[i].brotherName;
        let number = data[i].brotherNumber;
        let crossed = data[i].brotherCrossed;
        let nickname = data[i].brotherNickname;
        let uji = data[i].brotherUji;
        let major = data[i].brotherMajor;
        let status = data[i].brotherStatus;
        let link = data[i].brotherLinkedIn;

        let brotherObject = {
          brotherClass: classCrossed,
          brotherCrossed: crossed,
          brotherImg: img,
          brotherName: name,
          brotherNumber: number,
          brotherNickname: nickname,
          brotherMajor: major,
          brotherStatus: status,
          brotherLinkedIn: link,
          brotherUji: uji,
        };
        displayArray.push(brotherObject);
      }
    }

    // console.log(displayArray)
    // console.log(brotherMotto);

    setTimeout(displayCards, 1000);
    function displayCards() {
      let motto = "";
      for (let i = 0; i < brotherMotto.length; i++) {
        if (brotherMotto[i].id == btnValue) {
          motto = brotherMotto[i].motto;
        }
        $(`#brotherTitle`).text(displayArray[0].brotherClass + " Class");
        $(`#classMotto`).text(motto);
      }

      $(`.motto`).css("display", "block");

      for (let i = 0; i < displayArray.length; i++) {
        let classCrossed = displayArray[i].brotherClass;
        let img = displayArray[i].brotherImg;
        let name = displayArray[i].brotherName;
        let number = displayArray[i].brotherNumber;
        let crossed = displayArray[i].brotherCrossed;
        let nickname = displayArray[i].brotherNickname;
        let uji = displayArray[i].brotherUji;
        let major = displayArray[i].brotherMajor;
        let status = displayArray[i].brotherStatus;
        let link = displayArray[i].brotherLinkedIn;

        $(`#brother-box${[i]}`).css("display", "block");
        $(`#brotherImg${[i]}`).attr("src", img);
        $(`#brotherImg${[i]}`).attr("alt", name);
        $(`#brotherName${[i]}`).text(name);
        $(`#brotherNumber${[i]}`).text("Line Number: " + number);
        $(`#brotherCrossed${[i]}`).text("Crossed: " + crossed);
        $(`#brotherNickName${[i]}`).text("Nickname: " + nickname);
        $(`#brotherUji${[i]}`).text("Uji: " + uji);
        $(`#brotherMajor${[i]}`).text("Major: " + major);
        $(`#brotherStatus${[i]}`).text("Status: " + status);
        if (link == "null") {
          $(`#brotherLink${[i]}`).removeAttr("href");
        } else {
          $(`#brotherLink${[i]}`).attr("href", link);
        }
      }
    }

    //Debug/Testing
    // console.log("I have been clicked.");
    // console.log(btnValue);
  });

  $(`.btn-uji`).on("click", function () {
    $(`.brother-box`).css("display", "none");
    $(`.motto`).css("display", "none");
    $(`.spinner-border`).css("display", "block");
    let btnValue = $(this)[0].innerText;
    let data = brotherData;
    let displayArray = [];

    setTimeout(hideLoader, 1000);

    function hideLoader() {
      $(`.spinner-border`).css("display", "none");
    }

    for (let i = 0; i < data.length; i++) {
      if (data[i].brotherUji == btnValue) {
        let classCrossed = data[i].brotherClass;
        let img = data[i].brotherImg;
        let name = data[i].brotherName;
        let number = data[i].brotherNumber;
        let crossed = data[i].brotherCrossed;
        let nickname = data[i].brotherNickname;
        let uji = data[i].brotherUji;
        let major = data[i].brotherMajor;
        let status = data[i].brotherStatus;
        let link = data[i].brotherLinkedIn;

        let brotherObject = {
          brotherClass: classCrossed,
          brotherCrossed: crossed,
          brotherImg: img,
          brotherName: name,
          brotherNumber: number,
          brotherNickname: nickname,
          brotherMajor: major,
          brotherStatus: status,
          brotherLinkedIn: link,
          brotherUji: uji,
        };
        displayArray.push(brotherObject);
      }
      setTimeout(displayCards, 1000);
      function displayCards() {
        $(`#brotherTitle`).text(displayArray[0].brotherUji + " Uji");
        $(`.motto`).css("display", "block");
        for (let i = 0; i < displayArray.length; i++) {
          let classCrossed = displayArray[i].brotherClass;
          let img = displayArray[i].brotherImg;
          let name = displayArray[i].brotherName;
          let number = displayArray[i].brotherNumber;
          let crossed = displayArray[i].brotherCrossed;
          let nickname = displayArray[i].brotherNickname;
          let uji = displayArray[i].brotherUji;
          let major = displayArray[i].brotherMajor;
          let status = displayArray[i].brotherStatus;
          let link = displayArray[i].brotherLinkedIn;

          $(`#brother-box${[i]}`).css("display", "block");
          $(`#brotherImg${[i]}`).attr("src", img);
          $(`#brotherImg${[i]}`).attr("alt", name);
          $(`#brotherName${[i]}`).text(name);
          $(`#brotherNumber${[i]}`).text("Line Number: " + number);
          $(`#brotherCrossed${[i]}`).text("Crossed: " + crossed);
          $(`#brotherNickName${[i]}`).text("Nickname: " + nickname);
          $(`#brotherUji${[i]}`).text("Uji: " + uji);
          $(`#brotherMajor${[i]}`).text("Major: " + major);
          $(`#brotherStatus${[i]}`).text("Status: " + status);
          if (link == "null") {
            $(`#brotherLink${[i]}`).removeAttr("href");
          } else {
            $(`#brotherLink${[i]}`).attr("href", link);
          }
        }
      }
    }

    //Debug/Testing
    // console.log("I have been clicked.");
    // console.log(btnValue);
  });
});

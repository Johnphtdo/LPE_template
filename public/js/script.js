import { brotherData, classInfo } from "./data/brotherData.js";

$(document).ready(function () {
  // When button is clicked, it will start looking for brothers according to class by going through the data.
  $(`.btn-class`).on("click", function () {
    // After click, clears current display and shows loading spin.
    $(`.brother-box`).css("display", "none");
    $(`.motto`).css("display", "none");
    $(`.spinner-border`).css("display", "block");

    // The button text must match exactly to the array of brother objects. "Charter" button matches "Charter" in brotherClass.
    let btnValue = $(this)[0].innerText;
    let data = brotherData;
    let displayArray = [];

    // Timer to remove the loading spin.
    setTimeout(hideLoader, 1000);
    function hideLoader() {
      $(`.spinner-border`).css("display", "none");
    }

    // Pushing the class into a new array so it will match card ID's
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

    // Timer set to give site time to get the correct info and display to matching boxes. Site currently has 16 columns available to display data.
    setTimeout(displayCards, 1000);
    function displayCards() {
      let motto = "";
      let backgroundImg = "";
      for (let i = 0; i < classInfo.length; i++) {
        if (classInfo[i].id == btnValue) {
          motto = classInfo[i].motto;
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
    // console.log(displayArray)
    // console.log(classInfo);
    // console.log("I have been clicked.");
    // console.log(btnValue);
  });

  // When button is clicked, it will start looking for brothers according to uji name by going through the data.
  $(`.btn-uji`).on("click", function () {
    
    // After click, clears current display and shows loading spin.
    $(`.brother-box`).css("display", "none");
    $(`.motto`).css("display", "none");
    $(`.spinner-border`).css("display", "block");

    // The button text must match exactly to the array of brother objects. "John Do" button matches "John Do" in brotherUji.
    let btnValue = $(this)[0].innerText;
    let data = brotherData;
    let displayArray = [];

    // Timer to remove the loading spin.
    setTimeout(hideLoader, 1000);
    function hideLoader() {
      $(`.spinner-border`).css("display", "none");
    }

    // Pushing the uji into a new array so it will match card ID's
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

      // Timer set to give site time to get the correct info and display to matching boxes. Site currently has 16 columns available to display data.
      setTimeout(displayCards, 1000);
      function displayCards() {
        $(`#brotherTitle`).text(displayArray[0].brotherUji + " Uji");
        $(`#classMotto`).text("");
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

var a = $(".navigation").offset().top;

function scrollListener(){
    if($(document).scrollTop() > a)
    {   
      $(".navigation").css("display", "block");
      
    } else {
      $(".navigation").css("display", "none");

    }
};

$(document).scroll(scrollListener);

scrollListener();
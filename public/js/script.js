import {brotherData} from './brotherData.js';

$(document).ready(function(){
    $(`.btn-class`).on("click",function (){
        $(`.brother-box`).css("display", "none");
        $(`.motto`).css("display", "none");

        let btnValue = $(this)[0].innerText;
        let data = brotherData;
        let cardAmount = 0;
        $(`#motto-${btnValue}`).css("display","block");
        
        for (let i = 0; i < data.length; i++) {
            if (data[i].brotherClass == btnValue){
                let img = data[i].brotherImg;
                let name = data[i].brotherName;
                let number = data[i].brotherNumber;
                let crossed = data[i].brotherCrossed;
                let nickname = data[i].brotherNickname;
                let uji = data[i].brotherUji;
                let major = data[i].brotherMajor;
                let status = data[i].brotherStatus;
                let link = data[i].brotherLinkedIn;

                $(`#brother-box${[i]}`).css("display","block");
                $(`#brotherImg${[i]}`).attr("src", img);
                $(`#brotherImg${[i]}`).attr("alt", name);
                $(`#brotherName${[i]}`).text(name);
                $(`#brotherNumber${[i]}`).text("Line Number: " + number);
                $(`#brotherCrossed${[i]}`).text("Crossed: " + crossed);
                $(`#brotherNickName${[i]}`).text("Nickname: " + nickname);
                $(`#brotherUji${[i]}`).text("Uji: " + uji);
                $(`#brotherMajor${[i]}`).text("Major: " + major);
                $(`#brotherStatus${[i]}`).text("Status: " + status);
                $(`#brotherLink${[i]}`).attr("href", link)

            }
        }
               
        
        //Debug/Testing
        // console.log("I have been clicked.");
        // console.log(btnValue);
    })
    $(`.btn-uji`).on("click",function (){
        $(`.brother-box`).css("display", "none");
        $(`.motto`).css("display", "none");

        let btnValue = $(this)[0].innerText;
        let data = brotherData;
        let cardAmount = 0;
        $(`#motto-${btnValue}`).css("display","block");
        
        for (let i = 0; i < data.length; i++) {
            if (data[i].brotherUji == btnValue){
                let img = data[i].brotherImg;
                let name = data[i].brotherName;
                let number = data[i].brotherNumber;
                let crossed = data[i].brotherCrossed;
                let nickname = data[i].brotherNickname;
                let uji = data[i].brotherUji;
                let major = data[i].brotherMajor;
                let status = data[i].brotherStatus;
                let link = data[i].brotherLinkedIn;

                $(`#brother-box${[i]}`).css("display","block");
                $(`#brotherImg${[i]}`).attr("src", img);
                $(`#brotherImg${[i]}`).attr("alt", name);
                $(`#brotherName${[i]}`).text(name);
                $(`#brotherNumber${[i]}`).text("Line Number: " + number);
                $(`#brotherCrossed${[i]}`).text("Crossed: " + crossed);
                $(`#brotherNickName${[i]}`).text("Nickname: " + nickname);
                $(`#brotherUji${[i]}`).text("Uji: " + uji);
                $(`#brotherMajor${[i]}`).text("Major: " + major);
                $(`#brotherStatus${[i]}`).text("Status: " + status);
                $(`#brotherLink${[i]}`).attr("href", link)

            }
        }
               
        
        //Debug/Testing
        // console.log("I have been clicked.");
        // console.log(btnValue);
    })
})
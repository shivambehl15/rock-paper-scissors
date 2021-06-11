var paper = "images/paper.png";
var scissors = "images/scissors.png";
var rock = "images/rock.png";

$("#paper").click(function(){
    $("#player_image").attr("src", paper);
    computersPick();
    winner();
});

$("#scissors").click(function(){
    $("#player_image").attr("src", scissors);
    computersPick();
    winner();
});

$("#rock").click(function(){
    $("#player_image").attr("src", rock);
    computersPick();
    winner();
});


function computersPick(){
    var randomNumber = Math.floor(Math.random() * 3);

    switch(randomNumber){
        case 0:
            $("#computer_image").attr("src", paper);
            break;
        case 1: 
            $("#computer_image").attr("src", scissors);
            break;
        case 2:
            $("#computer_image").attr("src", rock);
            break;
        default:
            $(".result").text("An error occured, please try again");
    }
}

function winner(){
    var player_image = $("#player_image").attr("src");
    var computer_image = $("#computer_image").attr("src");

    if(player_image === paper && computer_image === scissors){
        $(".result").text("Scissors cut paper, computer wins!");
    }
    else if(player_image === paper && computer_image === rock){
        $(".result").text("Paper covers rock, player wins!");
    }
    else if(player_image === scissors && computer_image === paper){
        $(".result").text("Scissors cut paper, player wins!");
    }
    else if(player_image === scissors && computer_image === rock){
        $(".result").text("Rock beats scissors, computer wins!");
    }
    else if(player_image === rock && computer_image === paper){
        $(".result").text("Paper covers rock, computer wins!");
    }
    else if(player_image === rock && computer_image === scissors){
        $("result").text("Rock beats scissors, player wins!");
    }
    else if(player_image === computer_image){
        $(".result").text("Draw!");
    }
    else{
        $(".result").text("An error occured, please try again");
    }
}
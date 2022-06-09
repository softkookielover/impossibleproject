player1_score = 0;
player2_score = 0;

player1_name = localStorage.getItem("player1loginid");
player2_name = localStorage.getItem("player2loginid");

document.getElementById("scorep1").innerHTML = player1_name + " : ";
document.getElementById("scorep2").innerHTML = player2_name + " : ";

document.getElementById("socreofp1").innerHTML = player1_score ;
document.getElementById("socreofp2").innerHTML = player2_score ;

document.getElementById("q1").innerHTML = "Question Turn - " + player1_name ; 
document.getElementById("q2").innerHTML = "Answer Turn -"    + player2_name ;

function sent() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase = " + word );
    
    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt2);

    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display> Q. "+ remove_charAt3+"</h4>";
    input_box = "<br> Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button ;
    document.getElementById("output").innerHTML = row; 
    document.getElementById("input1").value = "";
}


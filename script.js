'use strict'

alert("Witaj w Quizie! Zasady są proste: na pytanie można odpowiedź 'OK' (prawda) lub 'Anuluj' (fałsz). Za każde pytanie jest jeden punkt.");

function getName(){
    var nickname = prompt("Wprowadź swoje imię.");
    if(nickname)
        return nickname;
    else
        return "[brak imienia]";
}

function getComment(){
    var comment = prompt("Jakiś komentarz?");
    if(comment)
        return comment;
    else
        return "[bez komentarza]";
}

var user = {
    nickname: getName(),
    score: 0,
};

alert("Witaj " + user.nickname + "! Tematem quizu jest matematyka. Przygotuj się!");

var question;

question = confirm("Q1: Kwadrat sumy 2 i 3 jest równy 25.");

if(question === true){
    user.score++;
    alert("Dobrze! Otrzymujesz jeden punkt. Obecna liczba punktów: " + user.score);
}
else{
    alert("Buuu! Źle! Nie dostajesz punktu. Ha ha.");
};

question = confirm("Q2: 0.25 = 0.25%");

if(question === false){
    user.score++;
    alert("Dobrze! Otrzymujesz jeden punkt. Obecna liczba punktów: " + user.score);
}
else{
    alert("Buuu! Źle! Nie dostajesz punktu. Ha ha.");
};

question = confirm("Q3: Kwadrat dowolnej liczby rzeczywistej zawsze jest dodatni.");

if(question === false){
    user.score++;
    alert("Dobrze! Otrzymujesz jeden punkt. Obecna liczba punktów: " + user.score);
}
else{
    alert("Buuu! Źle! Nie dostajesz punktu. Ha ha.");
};

question = confirm("Q4: Logarytm naturalny ma podstawę równą liczbie Eulera.");

if(question === true){
    user.score++;
    alert("Dobrze! Otrzymujesz jeden punkt. Obecna liczba punktów: " + user.score);
}
else{
    alert("Buuu! Źle! Nie dostajesz punktu. Ha ha.");
};

question = confirm("Q5: Wynikiem negacji negacji jest zawsze 1.");

if(question === false){
    user.score++;
    alert("Dobrze! Otrzymujesz jeden punkt. Obecna liczba punktów: " + user.score);
}
else{
    alert("Buuu! Źle! Nie dostajesz punktu. Ha ha.");
};

alert("Gratulację! Ukończyłeś mój quiz. Twoja końcowa liczba punktów, " + user.nickname + ", wynosi " + user.score + ".");
user.comment = getComment();

alert("Imię: " + user.nickname);
alert("Punkty: " + user.score);
alert("Komentarz: " + user.comment);

console.log(user);
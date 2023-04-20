let gamerCommand = false //false - Villains, true - Heroes


function gamePrepare(command) {
    gamerCommand = command
    $('#gameDesc').hide()
    $('.cardSet, #gameField').prop('hidden',false)
    if (gamerCommand) {
        $('#heroesSet').addClass('gamerSet')
        $('#villainsSet').addClass('compSet')
        $('#villainsSet .cardButton').prop('disabled', true)
    } else {
        $('#wrap').css('flex-direction', 'column')
        $('#heroesSet').addClass('compSet')
        $('#villainsSet').addClass('gamerSet')
        $('#heroesSet .cardButton').prop('disabled', true)
    }
}

function makeMove(gamerCardNum) {
    let compCardNum = Math.floor(Math.random()*3+1)

    $('.gamerSet .cardButton').prop('disabled', true)

    $('.cardSet .card').removeClass('gamerHover').removeClass('compHover')
    $('.hiddenDesc').css('display','none')

    $('.gamerSet .card'+gamerCardNum).animate({left: "30%", top: "33%"}, 500);
    $('.compSet .card'+compCardNum).animate({left: "60%", top: "33%"}, 500);

}


function customHover() {
    if ($(this).parent().attr("class").indexOf('gamerSet') > 0) {$(this).addClass('gamerHover')}
    else {$(this).addClass('compHover')}
    $('.hiddenDesc', this).css('display','block')
    console.log($(this).parent().attr("class").indexOf('gamerSet'))
}

function customUnhover() {
    $(this).removeClass('gamerHover').removeClass('compHover')
    $('.hiddenDesc', this).css('display','none')
}




$('#chooseHeroes').click(function (){gamePrepare(true)})
$('#chooseVillains').click(function (){gamePrepare(false)})

$('.card1Button').click(function (){makeMove(1)})
$('.card2Button').click(function (){makeMove(2)})
$('.card3Button').click(function (){makeMove(3)})

$('#heroCard1').hover(customHover, customUnhover)
$('#heroCard2').hover(customHover, customUnhover)
$('#heroCard3').hover(customHover, customUnhover)
$('#villainCard1').hover(customHover, customUnhover)
$('#villainCard2').hover(customHover, customUnhover)
$('#villainCard3').hover(customHover, customUnhover)


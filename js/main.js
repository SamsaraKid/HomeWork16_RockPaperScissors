let gamerCommand = false //false - Villains, true - Heroes
const win = ['12','23','31']
const fail = ['13','21','32']
let scoreg = 0
let scorec = 0

const horisontalPositions = [$('.card1').css('left'), $('.card2').css('left'), $('.card3').css('left')]
const verticalPositions = ['73%', '9%']



function gamePrepare(command) {
    gamerCommand = command
    $('#gameDesc').hide()
    $('.cardSet, #gameField').prop('hidden',false)
    if (gamerCommand) {
        $('#heroesSet').addClass('gamerSet')
        $('#villainsSet').addClass('compSet')
        $('#villainsSet .cardButton').prop('disabled', true)
        $('.cardSetDescGamer').prop('hidden',false)
    } else {
        $('#wrap').css('flex-direction', 'column')
        $('#heroesSet').addClass('compSet')
        $('#villainsSet').addClass('gamerSet')
        $('#heroesSet .cardButton').prop('disabled', true)
        $('.cardSetDescComp').prop('hidden',false)
    }
}

function makeMove(gamerCardNum) {


    let compCardNum = Math.floor(Math.random() * 3 + 1)

    let result = String(gamerCardNum) + String(compCardNum)
    $('.gamerSet .cardButton').prop('disabled', true)

    $('.cardSet .card').removeClass('gamerHover').removeClass('compHover')
    $('.hiddenDesc').css('display', 'none')

    //анимация
    $('.gamerSet .card' + gamerCardNum).animate({left: "30%", top: "38%"}, 500)
    $('.compSet .card' + compCardNum).animate({left: "60%", top: "38%"}, 500)

    //результат игры
    if (win.includes(result)) {
        scoreg++
        $('#moveResult').text('Победа')
    } else if (fail.includes(result)) {
        scorec++
        $('#moveResult').text('Поражение')
    } else {
        $('#moveResult').text('Ничья')
    }
    $('#score').text('Счёт ' + scoreg + ' : ' + scorec)

    //откат анимации
    setTimeout(function () {
        $('.gamerSet .card'+gamerCardNum).animate({left: horisontalPositions[gamerCardNum-1], top: verticalPositions[0]}, 500)
        $('.compSet .card'+compCardNum).animate({left: horisontalPositions[compCardNum-1], top: verticalPositions[1]}, 500)
        $('.gamerSet .cardButton').prop('disabled', false)
        $('#moveResult').text('')
    }, 1200)


}



function customHover() {
    if ($(this).parent().attr("class").indexOf('gamerSet') > 0) {
        $(this).addClass('gamerHover')
    } else {
        $(this).addClass('compHover')
    }
    $('.hiddenDesc', this).css('display', 'block')
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



let gamerCommand = false //false - Villains, true - Heroes
let comp = ''
let gamer = ''
const turn = ['1','2','3']
const win = ['12','23','31']
const fail = ['13','21','32']
let scoreg = 0
let scorec = 0

let gamerCardLeft = ''
let gamerCardTop = ''
let compCardLeft = ''
let compCardTop = ''
let compCardNum = 0
let gamerCardNum = 0

const horisontalPositions = [$('.card1').css('left'), $('.card2').css('left'), $('.card3').css('left')]


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

function makeMove(n) {

    //карточки, которыми походили игроки
    gamerCardNum = n
    compCardNum = Math.floor(Math.random() * 3 + 1)

    let result = String(gamerCardNum) + String(compCardNum)
    $('.gamerSet .cardButton').prop('disabled', true)

    $('.cardSet .card').removeClass('gamerHover').removeClass('compHover')
    $('.hiddenDesc').css('display', 'none')

    //сохраняем начальное положение карточек
    gamerCardLeft = horisontalPositions[gamerCardNum-1]
    gamerCardTop = $('.gamerSet .card' + gamerCardNum).css('top')
    compCardLeft = horisontalPositions[compCardNum-1]
    compCardTop = $('.compSet .card' + compCardNum).css('top')

    console.log(gamerCardLeft, gamerCardTop, compCardLeft, compCardTop)


    //анимация
    $('.gamerSet .card' + gamerCardNum).animate({left: "30%", top: "35%"}, 500)
    $('.compSet .card' + compCardNum).animate({left: "60%", top: "35%"}, 500)

    //результат игры
    if (win.includes(result)) {
        scoreg++
        $('#score').text(' Вы выиграли ' + scoreg + ':' + scorec)
    } else if (fail.includes(result)) {
        scorec++
        $('#score').text(' Вы проиграли ' + scoreg + ':' + scorec)
    } else {
        $('#score').text(' Ничья ' + scoreg + ':' + scorec)
    }

    //откат анимации
    setTimeout(function () {
        $('.gamerSet .card'+gamerCardNum).animate({left: gamerCardLeft, top: gamerCardTop}, 500)
        $('.compSet .card'+compCardNum).animate({left: compCardLeft, top: compCardTop}, 500)
        $('.gamerSet .cardButton').prop('disabled', false)
        $('#score').text(scoreg + ':' + scorec)
    }, 1200)


}



function customHover() {
    if ($(this).parent().attr("class").indexOf('gamerSet') > 0) {$(this).addClass('gamerHover')}
    else {$(this).addClass('compHover')}
    $('.hiddenDesc', this).css('display','block')
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

$('#reload').click(reload)


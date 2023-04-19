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
    $('.gamerSet .card'+gamerCardNum).addClass('gamerCardMoved')
    $('.gamerSet .cardButton').prop('disabled', true)


    // $('@keyframes compCardMovement').css('from{top}', x.top)
    // $('@keyframes compCardMovement').css('from{left}', x.left)
    $('.compSet .card'+compCardNum).addClass('compCardMoved')
}


$('#chooseHeroes').click(function (){gamePrepare(true)})
$('#chooseVillains').click(function (){gamePrepare(false)})

$('.card1Button').click(function (){makeMove(1)})
$('.card2Button').click(function (){makeMove(2)})
$('.card3Button').click(function (){makeMove(3)})
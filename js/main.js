let gamerCommand = false //false - Villains, true - Heroes



function gamePrepare(command) {
    gamerCommand = command
    $('#gameDesc').hide()
    $('.cardSet').prop('hidden',false)
    if (gamerCommand) {
        $('#heroesSet').addClass('gamerSet')
        $('#villainsSet').addClass('compSet')
    } else {
        $('#heroesSet').addClass('compSet')
        $('#villainsSet').addClass('gamerSet')
    }
}



$('#chooseHeroes').click(function (){gamePrepare(true)})
$('#chooseVillains').click(function (){gamePrepare(false)})
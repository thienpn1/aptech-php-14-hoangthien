$('#nut').click(function (e) {

    // $('#hidden_me').hide(500);

    //$('#hidden_div').hide();
    if ($('#hidden_me').css('display') == 'none') {
        $('#hidden_me').slideDown(500);
        // $('#show_div').css({'position': 'fixed','top':'0','background-color': '#343a40' });
        // $('#hidden_me').css('display','flex' );
        // $('#show_div').addClass('position-fixed');
        $('#show_div').removeClass('position-fixed bg-dark');
       
    } else {

        $('#hidden_me').slideUp(500);
        $('#show_div').addClass('position-fixed bg-dark');
        // $('#show_div').removeAttr('style');
    }
    console.log($('#hidden_me').css('display'));

});
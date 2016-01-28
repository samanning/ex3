//Javascript

//call to jQuery ready function
//make sure html and css are loaded

$(document).ready(function () {

    console.log('ready');

    //hide all texts initially
    $('section#workText').hide();
    $('section#relaxText').hide();
    $('section#choresText').hide();
    $('section#procrasText').hide();

    //hide all tool tips
    $('.workTip').hide();
    $('.relaxTip').hide();
    $('.choresTip').hide();
    $('.procrasTip').hide();

    //click .workEmoji shows #workText
    $('div.workEmoji').click(function () {
        //show workText
        $('section#workText').show();
        //hide all other texts
        $('section#relaxText').hide();
        $('section#choresText').hide();
        $('section#procrasText').hide();
        //prevent page from reloading
        return false;
    });

    //click .relaxEmoji shows #workText
    $('div.relaxEmoji').click(function () {
        //show relaxText
        $('section#relaxText').show();
        //hide all other texts
        $('section#workText').hide();
        $('section#choresText').hide();
        $('section#procrasText').hide();
        //prevent page from reloading
        return false;
    });

    //click .choresEmoji shows #choresText
    $('div.choresEmoji').click(function () {
        //show relaxText
        $('section#choresText').show();
        //hide all other texts
        $('section#workText').hide();
        $('section#relaxText').hide();
        $('section#procrasText').hide();
        //prevent page from reloading
        return false;
    });

    //click .procrasEmoji shows #procrasText
    $('div.procrasEmoji').click(function () {
        //show relaxText
        $('section#procrasText').show();
        //hide all other texts
        $('section#workText').hide();
        $('section#relaxText').hide();
        $('section#choresText').hide();
        //prevent page from reloading
        return false;
    });

    //click reset button hides any text already showing
    $('li#reset').click(function () {
        //hide any text
        $('section#workText').hide();
        $('section#relaxText').hide();
        $('section#choresText').hide();
        $('section#procrasText').hide();
        //prevent page from reloading
        return false;
    });

    //click view all button shows all text
    $('li#viewAll').click(function () {
        //hide any text
        //$('section#texts').show();
        $('section#workText').show();
        $('section#relaxText').show();
        $('section#choresText').show();
        $('section#procrasText').show();
        //prevent page from reloading
        return false;
    });

    //add code for the tooltip for work (hover takes two functions)
    $('.workEmoji').hover(function () { // first function

        //turn on the tool tip
        $('.workTip').show();

    }, function () { // second function
        $('.workTip').hide();

    });

    //add code for the tooltip for relax (hover takes two functions)
    $('.relaxEmoji').hover(function () { // first function

        //turn on the tool tip
        $('.relaxTip').show();

    }, function () { // second function
        $('.relaxTip').hide();

    });

    //add code for the tooltip for chores (hover takes two functions)
    $('.choresEmoji').hover(function () { // first function

        //turn on the tool tip
        $('.choresTip').show();

    }, function () { // second function
        $('.choresTip').hide();

    });

    //add code for the tooltip for procrastinate (hover takes two functions)
    $('.procrasEmoji').hover(function () { // first function

        //turn on the tool tip
        $('.procrasTip').show();

    }, function () { // second function
        $('.procrasTip').hide();

    });

    //add code to change color of reset when hover
    $('li#reset a').hover(function () {
        //change color
        $('li#reset a').css('color', '#12CA9D');
    }, function () {
        //second function
        $('li#reset a').css('color', '');
    });

    //add code to change color of view all when hover
    $('li#viewAll a').hover(function () {
        //change color
        $('li#viewAll a').css('color', '#12CA9D');
    }, function () {
        //second function
        $('li#viewAll a').css('color', '');
    });

    //add code to change color of valid html when hover
    $('li#validH a').hover(function () {
        //change color
        $('li#validH a').css('color', '#12CA9D');
    }, function () {
        //second function
        $('li#validH a').css('color', '');
    });

    //add code to change color of valid css when hover
    $('li#validC a').hover(function () {
        //change color
        $('li#validC a').css('color', '#12CA9D');
    }, function () {
        //second function
        $('li#validC a').css('color', '');
    });
    
       //add code to change color of legal name
    $('section#legal a').hover(function () {
        //change color
        $('section#legal a').css('color', '#12CA9D');
    }, function () {
        //second function
        $('section#legal a').css('color', '');
    });


});
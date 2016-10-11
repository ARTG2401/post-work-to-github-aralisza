var c1, c2, both, corpus, shcorpus;

function change(corp, visibility) {
    [].forEach.call(corp, visibility);
}

document.addEventListener("DOMContentLoaded", function(event) {
    c1 = document.getElementsByClassName("corpus1");
    c2 = document.getElementsByClassName("corpus2");
    both = document.getElementsByClassName("both12");
    shcorpus = false;
    corpus = document.getElementById("big-corpus");

    change(c1, hide);
    change(c2, hide);
    change(both, hide);
    change([corpus], hide);

    document.getElementById("corp1").innerHTML = corpustext1;
    document.getElementById("corp2").innerHTML = corpustext2;
    document.getElementById("corp12").innerHTML = corpustext1 + corpustext2;


});

function show (entry) {
    entry.style.display = "initial";
}

function hide (entry) {
    entry.style.display = "none";
}

function corpus1() {
    change(c1, show);
    change(c2, hide);
    change(both, hide);
}

function corpus2() {
    change(c1, hide);
    change(c2, show);
    change(both, hide);
}

function corpus12() {
    change(c1, hide);
    change(c2, hide);
    change(both, show);
}

function showhidecorpus() {
    shcorpus = !shcorpus;

    if (shcorpus) {
        change([corpus], show);
    } else {
        change([corpus], hide);
    }
}











































var corpustext1 = "Centennial commons outside of ryder sitting near the ruggles loop\n" +
            "15:14 2016/09/27\n" +
            "\n" +
            "Hard to find a bench that wasn't taken or wet.\n" +
            "Cool and breezy\n" +
            "many students walking towards snell, few students walking towards west village\n" +
            "grass\n" +
            "grass circle\n" +
            "blue rings painted around trees on grass\n" +
            "balloons\n" +
            "    - purple\n" +
            "    - red\n" +
            "    - green\n" +
            "    - yellow\n" +
            "    - looks like there is an event going on, but sitting slightly too far to tell\n" +
            "people playing frisbee\n" +
            "    - white frisbee\n" +
            "fall clothes\n" +
            "sneakers\n" +
            "boots\n" +
            "\n" +
            "chairs\n" +
            "    - orange\n" +
            "    - washed blue\n" +
            "    - bright blue\n" +
            "    - green\n" +
            "    - brown\n" +
            "    - red\n" +
            "\n" +
            "trees line the area surrounding the commons itself\n" +
            "    - small trees\n" +
            "    - big trees\n" +
            "    - trees in the distance, framed by two trees on either side close by\n" +
            "\n" +
            "the number of people playing frisbee has increased to 5\n" +
            "people walk by holding giant poster boards\n" +
            "\n" +
            "behind me is ruggles and egan and forsyth\n" +
            "    - white stone walls\n" +
            "    - i see the fountain in front of egan\n" +
            "        - it is spewing water, but it is not dark enough for the leds to be on\n" +
            "in front of me is centennial\n" +
            "    - people studying people playing people walking\n" +
            "to my left is ryder\n" +
            "    - red brick with white accents\n" +
            "    - there's a subway sign in front of the door\n" +
            "to my right is shillman\n" +
            "    - sculpture of shillman and his cat, bronze probably\n" +
            "further in front of me is behrakis, wvf, and merserve\n" +
            "    - so much glass\n" +
            "i can barely see wva north from here.\n" +
            "my apartment is blocked by behrakis\n" +
            "\n" +
            "there is a mural on the walls of merserve\n" +
            "    - a girl holding a brush and lightning\n" +
            "    - red and blue and grey and white on red brick\n" +
            "\n" +
            "a girl took one of the purple balloons from the event and is walking away\n" +
            "someone else is holding a yellow balloon\n" +
            "i see a flash of a camera from that same direction. perhaps group photo\n" +
            "\n" +
            "some leaves are starting to change color and fall\n" +
            "asphalt pavement mixed with brick\n" +
            "puddles in the asphalt\n" +
            "\n" +
            "posts in the distance with informational banners about how great nu is\n" +
            "\n" +
            "center for student academic services\n" +
            "    - red roof, black back, white words\n" +
            "\n" +
            "complaints about dissecting termites from my right\n" +
            "    - highlighter, notebook, studying\n" +
            "    - clarification: not actually dissecting\n" +
            "\n" +
            "the beep from the t arriving rings from ruggles\n" +
            "\n" +
            "a girl too preoccupied with her phone to walk faster than .5mph walks by in front of me\n" +
            "\n" +
            "a man is on the phone with someone speaking a language i do not recognize from behind me. portuguese?\n" +
            "\n" +
            "a girl in a red jacket walks by rolling luggage with her\n" +
            "\n" +
            "a girl interrupts the frisbee game\n" +
            "there are only two people left playing frisbee\n" +
            "\n" +
            "cracks in the asphalt from freezing water filled with more asphalt to patch\n" +
            "    - inevitably more cracks that haven't been patched\n" +
            "\n" +
            "the frisbee game fully dissolved\n" +
            "\n" +
            "guy walks by holding groceries from star market\n" +
            "\n" +
            "laptops\n" +
            "    - mostly macs\n" +
            "    - some surfaces\n" +
            "\n" +
            "hammock set up between two trees in the distance in front of wvf\n" +
            "someone with a macbook laying in there\n" +
            "guy skateboards past shillman holding a bare laptop\n" +
            "\n" +
            "northeastern university concrete structure sign has become a backrest for students studying\n" +
            "\n" +
            "lady still manning booth for \"event\" but no one is approaching her\n" +
            "\n" +
            "manhole in the middle of the asphalt walkway to my right\n" +
            "    - same dark grey as the asphalt itself\n" +
            "\n" +
            "there is a sign turned away from me so i can't read it\n" +
            "    - i see a white back attached to a black rockstop to hold it up\n" +
            "\n" +
            "there are now people at the \"event\"\n" +
            "there is no one at the event again\n" +
            "\n" +
            "there is a blue police station circular sign on the further area of ruggles\n" +
            "    - the doors are black into the station but grey and orange for the police and otherwise\n" +
            "\n" +
            "the guy next to me has a black and yellow longboard resting against the bench\n" +
            "\n" +
            "there are three chairs clustered in the center of centennial and one chair further apart\n" +
            "\n" +
            "the LMA shuttle drives around the ruggles loop, dropping off a few people\n" +
            "    - the windows are tinted so cannot see inside\n" +
            "    - it is blue and white with yellow and green accents\n" +
            "\n" +
            "there is one person at the event\n" +
            "\n" +
            "there is one person wearing full cameo walking across the grass\n" +
            "    - he sat in one of the orange chairs in the middle ring of grass of the centennial\n" +
            "\n" +
            "there are two rows of benches to my right facing each other that i never noticed before\n" +
            "\n" +
            "there is a northeastern university led sign near forsyth that i can't quite read. it is red, black, and white.\n" +
            "\n" +
            "there is no one at the event\n" +
            "\n" +
            "i see a professor that subbed for us one time i think her name is peggy\n" +
            "    - maybe that wasn't actually her couldn't really make out her face\n" +
            "\n" +
            "the lady tabling is on her phone\n" +
            "\n" +
            "and then theres people\n" +
            "\n" +
            "and then there is none\n" +
            "centennial 13:36\n" +
            "\n" +
            "fossil free nu\n" +
            "#divest from destruction\n" +
            "listen to your...(illegible)\n" +
            "climate change spiritual\n" +
            "what do we want climate justice when do we want it now\n" +
            "tents set up in the circle of centennial\n" +
            "    black green blue blue beige orange orange\n" +
            "handing out fliers\n" +
            "divestnu\n" +
            "\n" +
            "blue tent is blown over, wasn't grounded properly\n" +
            "\n" +
            "two guys one wearing light grey one dark grey shirt runs over to hold it down\n" +
            "girl walks over to give supports so they can ground it\n" +
            "\n" +
            "green orange chairs moved underneath a bigger blue tent\n" +
            "getting a lot of stares towards the protest\n" +
            "\n" +
            "more red leaves on tree now\n" +
            "\n" +
            "old man with laptop bag jogs through\n" +
            "\n" +
            "lots of subways food\n" +
            "two people holding one of the banners, trying to move to better spot\n" +
            "\n" +
            "girl thinks quizzically about where to put it, hand on mouth\n" +
            "\n" +
            "in the end, moved it from between two tents to on top of a tent\n" +
            "\n" +
            "divest\n" +
            "\n" +
            "girl not involved with protest sleeps on the grass, uncaring about what's going on around her\n" +
            "\n" +
            "jk, they're moving the banner again.\n" +
            "contemplates another tent\n" +
            "consults another protester in orange about where to put.\n" +
            "\n" +
            "passerby girl eyes out protest\n" +
            "\n" +
            "climate change s\n" +
            "\n" +
            "gigantic crowd of prospies walk by the protest on the other side of the circle\n" +
            "\n" +
            "what do we want climate justice when do we want it now\n" +
            "\n" +
            "shut it down\n" +
            "\n" +
            "throwing around a water bottle like a ball playing catch\n" +
            "\n" +
            "girl protester in skirt takes video of a guy protester spekaing with her phone\n" +
            "\n" +
            "lots of small signs attached to big tent, can't really read them from here\n" +
            "\n" +
            "big square tent held up by metal rods\n" +
            "\n" +
            "girl sleeping wakes up to take call\n" +
            "whats her name\n" +
            "beautiful name\n" +
            "\n" +
            "types of tents\n" +
            "grey one can't see logo\n" +
            "green one looks like bigger version of blue one\n" +
            "big square tent\n" +
            "beige tent looks like blue tent but with circular windows\n" +
            "smaller blue one has red logo with white word\n" +
            "\n" +
            "two orange tents look nothing llike. one is taller, other is wider.\n" +
            "person sitting right outisde tent looking down\n" +
            "\n" +
            "group of people still hang out near the northeastern stone sign\n" +
            "\n" +
            "northeastern step off it the people over profit\n" +
            "\n" +
            "climate justice and free speech hey northeastern practice what you teach\n" +
            "\n" +
            "huntington news reporter interview me\n" +
            "asked my opinion about the divestnu movement\n" +
            "recorded on her iphone\n" +
            "had dslr camera\n" +
            "\n" +
            "crowd of chinese students exit from ryder\n" +
            "complaining about 1.75 points or something\n";

var corpustext2 = "centennial 13:36" +
          "\n" +
          "fossil free nu\n" +
          "#divest from destruction\n" +
          "listen to your...(illegible)\n" +
          "climate change spiritual\n" +
          "what do we want climate justice when do we want it now\n" +
          "tents set up in the circle of centennial\n" +
          "    black green blue blue beige orange orange\n" +
          "handing out fliers\n" +
          "divestnu\n" +
          "\n" +
          "blue tent is blown over, wasn't grounded properly\n" +
          "\n" +
          "two guys one wearing light grey one dark grey shirt runs over to hold it down\n" +
          "girl walks over to give supports so they can ground it\n" +
          "\n" +
          "green orange chairs moved underneath a bigger blue tent\n" +
          "getting a lot of stares towards the protest\n" +
          "\n" +
          "more red leaves on tree now\n" +
          "\n" +
          "old man with laptop bag jogs through\n" +
          "\n" +
          "lots of subways food\n" +
          "two people holding one of the banners, trying to move to better spot\n" +
          "\n" +
          "girl thinks quizzically about where to put it, hand on mouth\n" +
          "\n" +
          "in the end, moved it from between two tents to on top of a tent\n" +
          "\n" +
          "divest\n" +
          "\n" +
          "girl not involved with protest sleeps on the grass, uncaring about what's going on around her\n" +
          "\n" +
          "jk, they're moving the banner again.\n" +
          "contemplates another tent\n" +
          "consults another protester in orange about where to put.\n" +
          "\n" +
          "passerby girl eyes out protest\n" +
          "\n" +
          "climate change s\n" +
          "\n" +
          "gigantic crowd of prospies walk by the protest on the other side of the circle\n" +
          "\n" +
          "what do we want climate justice when do we want it now\n" +
          "\n" +
          "shut it down\n" +
          "\n" +
          "throwing around a water bottle like a ball playing catch\n" +
          "\n" +
          "girl protester in skirt takes video of a guy protester spekaing with her phone\n" +
          "\n" +
          "lots of small signs attached to big tent, can't really read them from here\n" +
          "\n" +
          "big square tent held up by metal rods\n" +
          "\n" +
          "girl sleeping wakes up to take call\n" +
          "whats her name\n" +
          "beautiful name\n" +
          "\n" +
          "types of tents\n" +
          "grey one can't see logo\n" +
          "green one looks like bigger version of blue one\n" +
          "big square tent\n" +
          "beige tent looks like blue tent but with circular windows\n" +
          "smaller blue one has red logo with white word\n" +
          "\n" +
          "two orange tents look nothing llike. one is taller, other is wider.\n" +
          "person sitting right outisde tent looking down\n" +
          "\n" +
          "group of people still hang out near the northeastern stone sign\n" +
          "\n" +
          "northeastern step off it the people over profit\n" +
          "\n" +
          "climate justice and free speech hey northeastern practice what you teach\n" +
          "\n" +
          "huntington news reporter interview me\n" +
          "asked my opinion about the divestnu movement\n" +
          "recorded on her iphone\n" +
          "had dslr camera\n" +
          "\n" +
          "crowd of chinese students exit from ryder\n" +
          "complaining about 1.75 points or something";

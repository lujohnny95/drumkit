//detecting button press:
let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        let buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
  });

}

//detecting keyboard press:

document.addEventListener("keydown", (event) => {

    makeSound(event.key);

    buttonAnimation(event.key);
});

const makeSound = (key) => {

    switch (key) {
        case "a":
            let clap = new Audio("sounds/clap.wav");
            clap.play();
            break;

        case "s":
            let hiHat = new Audio("sounds/hihat.wav");
            hiHat.play();
            break;

        case "d":
            let kick = new Audio("sounds/kick.wav")
            kick.play();
            break;

        case "f":
            let openHat = new Audio("sounds/openhat.wav")
            openHat.play();
            break;

        case "g":
            let boom = new Audio("sounds/boom.wav")
            boom.play();
            break;

        case "h":
            let ride = new Audio("sounds/ride.wav")
            ride.play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.wav")
            snare.play();
            break;

        case "k":
            let tom = new Audio("sounds/tom.wav")
            tom.play();
            break;

        case "l":
            let tink = new Audio("sounds/tink.wav")
            tink.play();
            break;

        default: console.log(buttonInnerHTML);
        }
}

const buttonAnimation = (pressedKey) => {

    let pressedButton = document.querySelector("." + pressedKey);

    pressedButton.classList.add("pressed");

    setTimeout(function() {
        pressedButton.classList.remove("pressed");
    }, 120);
}
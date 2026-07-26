// ==========================
// SWIPE CONTROLS
// ==========================

let startX = 0;
let startY = 0;

board.addEventListener("touchstart", (e) => {

    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;

});


board.addEventListener("touchend", (e) => {

    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;

    const dx = endX - startX;
    const dy = endY - startY;


    // Very small swipe ignore karo

    if (Math.abs(dx) < 20 && Math.abs(dy) < 20) {
        return;
    }


    // ==========================
    // HORIZONTAL SWIPE
    // ==========================

    if (Math.abs(dx) > Math.abs(dy)) {


        // Normal Controls

        if (!isReversed) {

            if (dx > 0 && direction !== "left") {

                direction = "right";

            }

            else if (dx < 0 && direction !== "right") {

                direction = "left";

            }

        }


        // Reversed Controls

        else {

            if (dx > 0 && direction !== "right") {

                direction = "left";

            }

            else if (dx < 0 && direction !== "left") {

                direction = "right";

            }

        }

    }


    // ==========================
    // VERTICAL SWIPE
    // ==========================

    else {


        // Normal Controls

        if (!isReversed) {

            if (dy > 0 && direction !== "up") {

                direction = "down";

            }

            else if (dy < 0 && direction !== "down") {

                direction = "up";

            }

        }


        // Reversed Controls

        else {

            if (dy > 0 && direction !== "down") {

                direction = "up";

            }

            else if (dy < 0 && direction !== "up") {

                direction = "down";

            }

        }

    }

});


// ==========================
// KEYBOARD CONTROLS
// ==========================

document.addEventListener("keydown", (e) => {

    switch (e.key) {


        case "ArrowRight":

            if (!isReversed) {

                if (direction !== "left") {
                    direction = "right";
                }

            }

            else {

                if (direction !== "right") {
                    direction = "left";
                }

            }

            break;


        case "ArrowLeft":

            if (!isReversed) {

                if (direction !== "right") {
                    direction = "left";
                }

            }

            else {

                if (direction !== "left") {
                    direction = "right";
                }

            }

            break;


        case "ArrowUp":

            if (!isReversed) {

                if (direction !== "down") {
                    direction = "up";
                }

            }

            else {

                if (direction !== "up") {
                    direction = "down";
                }

            }

            break;


        case "ArrowDown":

            if (!isReversed) {

                if (direction !== "up") {
                    direction = "down";
                }

            }

            else {

                if (direction !== "down") {
                    direction = "up";
                }

            }

            break;

    }

});


// ==========================
// PLAY / PAUSE
// ==========================

function playPause() {

    if (isPlay) {

        clearInterval(game);

        icon.classList.replace(
            "fa-pause",
            "fa-play"
        );

    }

    else {

        game = setInterval(
            gameLoop,
            speed
        );

        icon.classList.replace(
            "fa-play",
            "fa-pause"
        );

    }

    isPlay = !isPlay;

}


playPauseBtn.addEventListener(
    "click",
    playPause
);

// CHANGE STAGE

stageSelect.addEventListener("change", () => {

    const selectedOption =
        stageSelect.options[stageSelect.selectedIndex];

    currentStage = selectedOption.value;

    if (selectedOption.classList.contains("reverse")) {

        isReversed = true;

    } else {

        isReversed = false;

    }

    restartGame();

});
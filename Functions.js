document.addEventListener("DOMContentLoaded", function () {
    let rainingHeartsStarted = false;
    let letterHeight = 200; // Start height in pixels, persists across function calls
    function openEnvelope() {
        document.querySelector('.open-me').style.display = 'none';
        document.querySelector('.lid.one').style.transform = 'rotateX(90deg)';
        document.querySelector('.lid.two').style.transform = 'rotateX(180deg)';
        document.querySelector('.letter').style.transform = 'translateY(-100px)';

        setTimeout(() => {
            // Smoothly reveal the letter
            let letter = document.querySelector('.letter');
            letter.style.height = "150%";
            letter.style.width = "90%";

            // Smoothly fade out the envelope
            document.querySelector('.envelope').style.opacity = '0';
            document.querySelector('.lid.one').style.opacity = '0';
            document.querySelector('.lid.two').style.opacity = '0';

            // Change background smoothly
            document.querySelector('.wrapper').style.backgroundColor = 'lightcoral';

            setTimeout(() => {
                // ✅ Smoothly reveal the text
                let text = document.querySelector('.letter p');
                text.style.opacity = '1';
                text.style.transform = 'translateY(0)'; // Move into place

                // ✅ Smoothly reveal the image
                let img = document.querySelector('.img');
                img.style.display = 'block'; // First make it visible
                setTimeout(() => {
                    img.style.opacity = '1'; // Fade in
                    img.style.transform = 'scale(1)'; // Grow to normal size
                }, 50); // Small delay to ensure display change happens first

                // ✅ Smoothly reveal the buttons
                let buttons = document.querySelector('.newButtons');
                buttons.style.display = 'flex'; // Make visible
                setTimeout(() => {
                    buttons.style.opacity = '1'; // Fade in
                    buttons.style.transform = 'translateY(0)'; // Move into place
                    document.querySelector('.letter').style.zIndex = "5"; // ✅ Set z-index to zero

                }, 50);
            }, 500); // Delay image, text, and buttons to appear after letter animation
        }, 500);
    }



    function createHeart() {
        const heartNew = document.createElement('div');
        heartNew.classList.add('heartNew');

        heartNew.style.left = Math.random() * 100 + "vw";
        heartNew.style.animationDuration = Math.random() * 2 + 3 + "s";

        heartNew.innerText = '❤️';

        document.body.appendChild(heartNew);

        setTimeout(() => {
            heartNew.remove();
        }, 5000);
    }

    function startRainingHearts() {
        document.querySelector('.love-you').style.display = 'inline';
        document.querySelector('.love-you').style.transform = 'ease-in-out';

        document.querySelector('.my-world').style.display = 'inline';
        document.querySelector('.my-world').style.transform = 'ease-in-out';
    
        document.getElementById("audio").play();
        
        if (!rainingHeartsStarted) {
            rainingHeartsStarted = true;
            setInterval(createHeart, 300);
        }

        // Keep the letter size fixed
        let letter = document.querySelector('.letter');
        let letterWidth = letter.clientWidth;
        let letterHeight = letter.clientHeight;
        letter.style.width = `${letterWidth}px`;
        letter.style.height = `${letterHeight}px`;

        // ✅ Remove the existing image permanently
        let img = document.querySelector('.img');
        if (img) {
            img.remove(); // Permanently remove the image
        }
    
        // ✅ Hide the YES and NO buttons
        document.getElementById("yes").style.display = 'none';
        document.getElementById("no").style.display = 'none';
    
        // ✅ Show the Lottie animation container
        let lottieContainer = document.getElementById("lottieContainer");
        lottieContainer.style.display = "flex"; // Make it visible
    
        // ✅ Update the message inside the letter
        let text = document.querySelector('.letter p');
        text.textContent = "For you";
        text.style.opacity = '1';
        text.style.transform = 'translateY(0)';
    }
    




    function shrinkNoGrowYes() {
        var yesBtn = document.getElementById("yes");
        var noBtn = document.getElementById("no");
        var letterDiv = document.querySelector('.letter');

        // ✅ Increase "Yes" button size by 20px per click
        yesBtn.style.width = `${yesBtn.clientWidth + 45}px`;
        //yesBtn.style.height = `${yesBtn.clientHeight + 45}px`;

        // ✅ Shrink "No" button (10% smaller each click)
        noBtn.style.width = `${noBtn.clientWidth - 5}px`;
        //noBtn.style.height = `${noBtn.clientHeight - 10}px`;

        // ✅ Prevent "No" text from disappearing
        let noFontSize = parseFloat(window.getComputedStyle(noBtn).fontSize);
        if (noFontSize > 9) {
            noBtn.style.fontSize = `${noFontSize * 0.8}px`;
        } else {
            noBtn.style.display = "none";
        }

        /* ✅ Properly expand the letter height based on new content
        let currentHeight = letterDiv.clientHeight; // Get the current height
        let newHeight = currentHeight + 45; // Increase it by 20px per click
        letterDiv.style.height = `${newHeight}px`;
        letterDiv.style.minHeight = `${newHeight}px`; // Prevent shrinking
    
        // ✅ Make sure height updates correctly
        letterDiv.style.overflow = "visible"; // Allow expansion
        letterDiv.style.tr */
    }




    document.querySelector('.yes').addEventListener('click', startRainingHearts);
    document.querySelector('.wrapper').addEventListener('click', openEnvelope);
    document.querySelector('.no').addEventListener('click', shrinkNoGrowYes);

});

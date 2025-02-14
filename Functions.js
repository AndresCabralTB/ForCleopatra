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
            letter.style.width = "90%%";



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

    let isTabActive = true;
    document.addEventListener("visibilitychange", function () {
        isTabActive = !document.hidden;
    });


    function startRainingHearts() {

        if (isTabActive) {
            showImageCollage();
            document.querySelector('.love-you').style.display = 'inline';
            document.querySelector('.love-you').style.transform = 'ease-in-out';

            document.querySelector('.my-world').style.display = 'inline';
            document.querySelector('.my-world').style.transform = 'ease-in-out';

            document.querySelector('.show-playlist').style.display = 'flex';

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
        } else {
            rainingHeartsStarted = false;
        }
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


let heartInterval;

function stopRainingHearts() {
    clearInterval(heartInterval); // Stop the heart interval
    document.querySelectorAll('.heartNew').forEach(heart => heart.remove()); // Remove all existing hearts
    heartInterval = null;
}



/////

let isTabActive = true;
document.addEventListener("visibilitychange", function () {
    isTabActive = !document.hidden;
});

function showImageCollage() {

    if (isTabActive) {

        document.querySelector('.love-you').style.display = 'none';
        document.querySelector('.my-world').style.display = 'none';

        const collageContainer = document.createElement('div');
        collageContainer.classList.add('collage-container');
        document.body.appendChild(collageContainer);


        const imageUrls = [
            'Image/1.jpeg', 'Image/2.jpg', 'Image/3.jpg', 'Image/4.jpg', 'Image/5.jpg', 'Image/6.jpg', 'Image/7.JPG',
            'Image/8.jpeg', 'Image/9.jpeg', 'Image/10.jpeg', 'Image/11.jpeg', 'Image/12.jpeg', 'Image/13.jpeg', 'Image/14.jpeg',
            'Image/15.jpeg', 'Image/16.jpeg', 'Image/17.jpeg', 'Image/18.jpeg', 'Image/19.jpeg', 'Image/20.jpeg',
            'Image/21.JPG', 'Image/22.jpeg', 'Image/23.jpeg', 'Image/24.jpeg', 'Image/25.jpeg', 'Image/26.jpeg', 'Image/27.jpeg',
            'Image/CancunKiss.jpeg'
        ];



        function createFloatingImage() {
            const url = imageUrls[Math.floor(Math.random() * imageUrls.length)];
            const img = document.createElement('img');
            img.src = url;
            img.classList.add('floating-image');
            img.style.left = '-100px';
            img.style.top = Math.random() * 80 + 'vh';
            img.style.opacity = '0.1';
            document.body.appendChild(img);

            setTimeout(() => {
                img.style.opacity = '1';
                img.style.transform = `translateX(${window.innerWidth + 100}px)`;
                img.style.transition = 'transform 6s linear, opacity 6s ease-out';
            }, 100);

            setTimeout(() => {
                img.style.opacity = '1';
            }, 5500);

            setTimeout(() => {
                img.remove();
                createFloatingImage(); // Repeat the process
            }, 7000);
        }

        for (let i = 0; i < 5; i++) {
            setTimeout(createFloatingImage, i * 2000);
        }
    } else {
        return;
    }
}

// CSS for smooth animation
const style = document.createElement('style');
style.innerHTML = `
    .floating-image {
        position: absolute;
        width:80px;
        height: auto;
        transition: tranform 6s linear, opacity 6s ease-in-out;
    }
    .collage-container {
        position: fixed;
        top: 0;
        left: 0;
        width: 200vw;
        height: 800vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
document.head.appendChild(style);

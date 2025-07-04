document.addEventListener('DOMContentLoaded', () => {
    const emojiElementSad = document.getElementById('animatedEmoji_sad');
    const emojiElementKiss = document.getElementById('animatedEmoji_kiss');
    const emojiElementCry = document.getElementById('animatedEmoji_cry');
    if (!emojiElementSad) return;
    if (!emojiElementKiss) return;
    if (!emojiElementCry) return;

    const emojiStatesSad = [
        { src: './images/icons/sad.png', delay: 500 },
        { src: './images/icons/sad_1.png', delay: 200 },
       { src: './images/icons/sad.png', delay: 700 },
        { src: './images/icons/sad_1.png', delay: 200 },
      
    ];
     const emojiStatesKiss = [
        { src: './images/icons/kiss.png', delay: 500 },
        { src: './images/icons/kiss_1.png', delay: 1700 },
        { src: './images/icons/kiss.png', delay: 500 },
        { src: './images/icons/kiss_1.png', delay: 1500 },
        
    ];
    const emojiStatesCry = [
        { src: './images/icons/cry.png', delay: 1000 },
        { src: './images/icons/cry_1.png', delay: 400 },
          { src: './images/icons/cry.png', delay: 1500 },
        { src: './images/icons/cry_1.png', delay: 400 },
        
        
    ];



    let currentStateIndex = 0;
    let timeoutIdKiss = null;
    let timeoutIdSad = null;
    let timeoutIdCry = null;
    let isAnimating = true;

    function animateSad() {
        emojiElementSad.src = emojiStatesSad[currentStateIndex].src;
      


        const delaySad = emojiStatesSad[currentStateIndex].delay;
  
        currentStateIndex = (currentStateIndex + 1) % emojiStatesSad.length;

        timeoutIdSad = setTimeout(() => {
            if (isAnimating) {
                animateSad();
            }
        }, delaySad);
      
    }
    function animateCry() {
        
        emojiElementCry.src = emojiStatesCry[currentStateIndex].src;
        const delayCry = emojiStatesCry[currentStateIndex].delay;
        currentStateIndex = (currentStateIndex + 1) % emojiStatesCry.length;

         timeoutIdCry = setTimeout(() => {
            if (isAnimating) {
                animateCry();
            }
        }, delayCry);

    }
    function animateKiss() {
        
        emojiElementKiss.src = emojiStatesKiss[currentStateIndex].src;
        const delayKiss = emojiStatesKiss[currentStateIndex].delay;
        currentStateIndex = (currentStateIndex + 1) % emojiStatesKiss.length;

         timeoutIdKiss = setTimeout(() => {
            if (isAnimating) {
                animateKiss();
            }
        }, delayKiss);

    }

    // Запуск анімації
    animateSad();
    animateCry();
    animateKiss();


   

  
    window.addEventListener('beforeunload', () => {
        clearTimeout(timeoutIdSad);
        clearTimeout(timeoutIdKiss);
        clearTimeout(timeoutIdCry);
    });
});

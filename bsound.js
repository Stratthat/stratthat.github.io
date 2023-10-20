var sound = new Audio("sound.mp3")
            sound.loop = false;
            var play = document.getElementById("play")
            play.addEventListener("click", () => {
                if (!notPlaying()) {
                    sound.play()
                } else {
                    sound.pause()
                    sound.currentTime = 0  
                }
            })
        
            function notPlaying() {
                var infoPlaying = false
                var currentTime = sound.currentTime == 0 ? true : false
                var paused = sound.paused ? true : false
                var ended = !sound.ended ? true : false
                var readyState = sound.readyState == 0 ? true : false
                if (currentTime && paused && ended && readyState) {
                    infoPlaying = true
                } else if (!currentTime && !paused && ended && !readyState) {
                    infoPlaying = true
                }
              return infoPlaying
            }
(function () {
    'use strict'

    var img = document.querySelector('img'),
        player = document.querySelector('.player'),
        body = document.querySelector('body'),
        playPath = document.querySelector('.playPath'),
        pausePath = document.querySelector('.pausePath'),
        playSvg = document.querySelector('.playSvg'),
        pauseSvg = document.querySelector('.pauseSvg'),
        nextSvg = document.querySelector('.nextSvg'),
        previousSvg = document.querySelector('.previousSvg'),
        previousPath = document.querySelector('.previousPath'),
        nextPath = document.querySelector('.nextPath'),
        seekBar = document.querySelector('.js-seek-bar'),
        seekBarFill = document.querySelector('.js-seek-bar-fill'),
        volumeBar = document.querySelector('.js-volume-bar'),
        volumeBarFill = document.querySelector('.js-volume-bar-fill'),
        title = document.querySelector('h1'),
        artist = document.querySelector('h2'),
        curtimetext = document.querySelector('.curtimetext'),
        durtimetext = document.querySelector('.durtimetext'),
        seekBarKnob = document.querySelector('.seekBarKnob'),
        volumeBarKnob = document.querySelector('.volumeBarKnob'),
        volumePath = document.querySelector('.volumePath'),
        paletteReady = false



    img.addEventListener('load', function () {
        if (!paletteReady)
            getPalette();
    })

    if (!paletteReady)
        getPalette()

    const nextElement = document.querySelector('.js-next')
    const previousElement = document.querySelector('.js-previous')

    nextElement.addEventListener('click', () => {

        setTimeout(getPalette, 100)

    })

    previousElement.addEventListener('click', () => {

        setTimeout(getPalette, 100)

    })


    function getPalette() {

        var vibrant = new Vibrant(img),
            swatches = vibrant.swatches()

        for (var swatch in swatches) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
                console.log(swatch, swatches[swatch].getHex());
                player.style.backgroundColor = swatches["LightVibrant"].getHex();
                body.style.backgroundColor = swatches["LightVibrant"].getHex();
                playPath.style.fill = swatches["DarkVibrant"].getHex();
                pausePath.style.fill = swatches["DarkVibrant"].getHex();
                previousPath.style.fill = swatches["DarkVibrant"].getHex();
                nextPath.style.fill = swatches["DarkVibrant"].getHex();
                seekBar.style.background = swatches["Muted"].getHex();
                seekBarFill.style.background = swatches["DarkMuted"].getHex();
                volumeBar.style.background = swatches["Muted"].getHex();
                volumeBarFill.style.background = swatches["DarkMuted"].getHex();
                title.style.color = swatches["DarkVibrant"].getHex();
                artist.style.color = swatches["DarkMuted"].getHex();
                curtimetext.style.color = swatches["DarkVibrant"].getHex();
                durtimetext.style.color = swatches["DarkVibrant"].getHex();
                seekBarKnob.style.backgroundColor = swatches["DarkVibrant"].getHex();
                volumeBarKnob.style.backgroundColor = swatches["LightVibrant"].getHex();
                volumePath.style.fill = swatches["DarkVibrant"].getHex();

                playSvg.addEventListener('mouseenter', playHoverFill)
                playSvg.addEventListener('mouseleave', playHoverRemove)
                pauseSvg.addEventListener('mouseenter', pauseHoverFill)
                pauseSvg.addEventListener('mouseleave', pauseHoverRemove)
                nextSvg.addEventListener('mouseenter', nextHoverFill)
                nextSvg.addEventListener('mouseleave', nextHoverRemove)
                previousSvg.addEventListener('mouseenter', previousHoverFill)
                previousSvg.addEventListener('mouseleave', previousHoverRemove)
                volumeBarKnob.addEventListener('mouseenter', volumeHoverFill)
                volumeBarKnob.addEventListener('mouseleave', volumeHoverRemove)
                seekBarKnob.addEventListener('mouseenter', seekHoverFill)
                seekBarKnob.addEventListener('mouseleave', seekHoverRemove)

                function playHoverFill() {
                    playPath.style.fill = swatches["Vibrant"].getHex();
                }

                function playHoverRemove() {
                    playPath.style.fill = swatches["DarkVibrant"].getHex();
                }

                function pauseHoverFill() {
                    pausePath.style.fill = swatches["Vibrant"].getHex();
                }

                function pauseHoverRemove() {
                    pausePath.style.fill = swatches["DarkVibrant"].getHex();
                }

                function nextHoverFill() {
                    nextPath.style.fill = swatches["Vibrant"].getHex();
                }

                function nextHoverRemove() {
                    nextPath.style.fill = swatches["DarkVibrant"].getHex();
                }

                function previousHoverFill() {
                    previousPath.style.fill = swatches["Vibrant"].getHex();
                }

                function previousHoverRemove() {
                    previousPath.style.fill = swatches["DarkVibrant"].getHex();
                }

                function volumeHoverFill() {
                    volumePath.style.fill = swatches["Vibrant"].getHex();
                }

                function volumeHoverRemove() {
                    volumePath.style.fill = swatches["DarkVibrant"].getHex();
                }

                function seekHoverFill() {
                    seekBarKnob.style.backgroundColor = swatches["Vibrant"].getHex();
                }

                function seekHoverRemove() {
                    seekBarKnob.style.backgroundColor = swatches["DarkVibrant"].getHex();
                }
                paletteReady = true
            }
        }

    }
}());




class Player {
    constructor(_element) {
        this.element = _element
        this.audioElement = this.element.querySelector('.js-audio')
        this.audioElement.volume = 0.8
        this.setPlayPause()
        this.setSeekBar()
        this.setVolumeBar()
    }

    setPlayPause() {
        // Play
        const playElement = this.element.querySelector('.js-play')
        const artwork = document.querySelector('.artwork')

        playElement.addEventListener('click', () => {
            this.audioElement.play()
            playElement.classList.toggle('hidePlay')
            pauseElement.classList.toggle('hidePause')
            artwork.classList.toggle('imgScale')
        })

        // Pause
        const pauseElement = this.element.querySelector('.js-pause')

        pauseElement.addEventListener('click', () => {
            this.audioElement.pause()
            playElement.classList.toggle('hidePlay')
            pauseElement.classList.toggle('hidePause')
            artwork.classList.toggle('imgScale')
        })

        const nextElement = this.element.querySelector('.js-next')
        const body = document.querySelector('body')
        const title = document.querySelector('h1')
        const artist = document.querySelector('h2')
        var track = 1

        nextElement.addEventListener('click', () => {
            artwork.classList.remove('imgScale')
            playElement.classList.add('hidePlay')
            pauseElement.classList.remove('hidePause')

            if (track == 1) {
                this.audioElement.src = "audio/audio2.m4a"
                artwork.src = "images/bob.jpg"
                body.style.backgroundImage = "url('images/bobbg.jpg')"
                title.innerHTML = "Three Little Birds"
                artist.innerHTML = "Bob Marley & The Wailers - Legend"
                this.audioElement.play()
                track++
            } else if (track == 2) {
                this.audioElement.src = "audio/audio3.mp3"
                artwork.src = "images/infected.jpg"
                body.style.backgroundImage = "url('images/infectedbg.jpg')"
                title.innerHTML = "Becoming Insane"
                artist.innerHTML = "Infected Mushroom - Vicious Delicious"
                this.audioElement.play()
                track++
            } else if (track == 3) {
                this.audioElement.src = "audio/audio4.mp3"
                artwork.src = "images/gorillaz.jpg"
                body.style.backgroundImage = "url('images/gorillazbg.jpg')"
                title.innerHTML = "Lake Zurich"
                artist.innerHTML = "Gorillaz - The Now Now"
                this.audioElement.play()
                track++
            } else if (track == 4) {
                this.audioElement.src = "audio/audio5.mp3"
                artwork.src = "images/imperatrice.jpg"
                body.style.backgroundImage = "url('images/imperatricebg.jpg')"
                title.innerHTML = "Vanille Fraise"
                artist.innerHTML = "L'Impératrice - Vanille Fraise"
                this.audioElement.play()
                track++
            } else if (track == 5) {
                this.audioElement.src = "audio/audio6.mp3"
                artwork.src = "images/fakear.jpg"
                body.style.backgroundImage = "url('images/fakearbg.jpg')"
                title.innerHTML = "La Belle Âme"
                artist.innerHTML = "Fakear - Animal"
                this.audioElement.play()
                track++
            } else if (track == 6) {
                this.audioElement.src = "audio/audio7.mp3"
                artwork.src = "images/bigaranx.jpg"
                body.style.backgroundImage = "url('images/bigaranxbg.jpg')"
                title.innerHTML = "Liquid Sunshine"
                artist.innerHTML = "Biga*Ranx - 1998"
                this.audioElement.play()
                track++
            } else if (track == 7) {
                this.audioElement.src = "audio/audio1.mp3"
                artwork.src = "images/miraisekai.jpg"
                body.style.backgroundImage = "url('images/miraisekaibg.jpg')"
                title.innerHTML = "Mirai Sekai Pt.1 Neo Seoul"
                artist.innerHTML = "Varien & 7 Minutes Dead"
                this.audioElement.play()
                track = 1
            }

            console.log(track)
        })

        const previousElement = this.element.querySelector('.js-previous')

        previousElement.addEventListener('click', () => {

            artwork.classList.remove('imgScale')
            playElement.classList.add('hidePlay')
            pauseElement.classList.remove('hidePause')

            if (track == 1) {
                this.audioElement.src = "audio/audio7.mp3"
                artwork.src = "images/bigaranx.jpg"
                body.style.backgroundImage = "url('images/bigaranxbg.jpg')"
                title.innerHTML = "Liquid Sunshine"
                artist.innerHTML = "Biga*Ranx - 1998"
                this.audioElement.play()
                track = 7
            } else if (track == 2) {
                this.audioElement.src = "audio/audio1.mp3"
                artwork.src = "images/miraisekai.jpg"
                body.style.backgroundImage = "url('images/miraisekaibg.jpg')"
                title.innerHTML = "Mirai Sekai Pt.1 Neo Seoul"
                artist.innerHTML = "Varien & 7 Minutes Dead"
                this.audioElement.play()
                track--
            } else if (track == 3) {
                this.audioElement.src = "audio/audio2.m4a"
                artwork.src = "images/bob.jpg"
                body.style.backgroundImage = "url('images/bobbg.jpg')"
                title.innerHTML = "Three Little Birds"
                artist.innerHTML = "Bob Marley & The Wailers - Legend"
                this.audioElement.play()
                track--
            } else if (track == 4) {
                this.audioElement.src = "audio/audio3.mp3"
                artwork.src = "images/infected.jpg"
                body.style.backgroundImage = "url('images/infectedbg.jpg')"
                title.innerHTML = "Becoming Insane"
                artist.innerHTML = "Infected Mushroom - Vicious Delicious"
                this.audioElement.play()
                track--
            } else if (track == 5) {
                this.audioElement.src = "audio/audio4.mp3"
                artwork.src = "images/gorillaz.jpg"
                body.style.backgroundImage = "url('images/gorillazbg.jpg')"
                title.innerHTML = "Lake Zurich"
                artist.innerHTML = "Gorillaz - The Now Now"
                this.audioElement.play()
                track--
            } else if (track == 6) {
                this.audioElement.src = "audio/audio5.mp3"
                artwork.src = "images/imperatrice.jpg"
                body.style.backgroundImage = "url('images/imperatricebg.jpg')"
                title.innerHTML = "Vanille Fraise"
                artist.innerHTML = "L'Impératrice - Vanille Fraise"
                this.audioElement.play()
                track--
            } else if (track == 7) {
                this.audioElement.src = "audio/audio6.mp3"
                artwork.src = "images/fakear.jpg"
                body.style.backgroundImage = "url('images/fakearbg.jpg')"
                title.innerHTML = "La Belle Âme"
                artist.innerHTML = "Fakear - Animal"
                this.audioElement.play()
                track--
            }

        })
    }

    setSeekBar() {
        const seekBarElement = this.element.querySelector('.js-seek-bar')
        const fillElement = seekBarElement.querySelector('.js-seek-bar-fill')
        const curtimetext = document.querySelector('.curtimetext')
        const durtimetext = document.querySelector('.durtimetext')
        const seekBarKnob = document.querySelector('.seekBarKnob')

        this.audioElement.addEventListener('timeupdate', () => {
            const ratio = this.audioElement.currentTime / this.audioElement.duration
            fillElement.style.transform = `scaleX(${ratio})`
            seekBarKnob.style.left = Math.floor(ratio * 800) + "px"
            var curmins = Math.floor(this.audioElement.currentTime / 60)
            var cursecs = Math.floor(this.audioElement.currentTime - curmins * 60)
            var durmins = Math.floor(this.audioElement.duration / 60)
            var dursecs = Math.floor(this.audioElement.duration - durmins * 60)
            if (cursecs < 10) {
                cursecs = "0" + cursecs;
            }
            if (dursecs < 10) {
                dursecs = "0" + dursecs;
            }
            if (curmins < 10) {
                curmins = "0" + curmins;
            }
            if (durmins < 10) {
                durmins = "0" + durmins;
            }
            curtimetext.innerHTML = curmins + ":" + cursecs;
            durtimetext.innerHTML = durmins + ":" + dursecs;
        })

        seekBarElement.addEventListener('click', (_event) => {
            const bounding = seekBarElement.getBoundingClientRect()
            const ratio = (_event.clientX - bounding.left) / bounding.width
            const time = ratio * this.audioElement.duration

            this.audioElement.currentTime = time
        })

        seekBarKnob.onmousedown = (_event) => {
            seekBarKnob.style.position = 'absolute';
            seekBarKnob.style.zIndex = 1000;
            seekBarElement.append(seekBarKnob);

            moveAt(event.clientX);

            function moveAt(clientX) {
                seekBarKnob.style.left = clientX - seekBarKnob.offsetWidth - 330 + 'px';
            }

            const onMouseMove = (_event) => {
                moveAt(event.clientX)
                const bounding = seekBarElement.getBoundingClientRect()
                const ratio = (_event.clientX - bounding.left) / bounding.width
                const time = ratio * this.audioElement.duration

                this.audioElement.currentTime = time
            }

            document.addEventListener('mousemove', onMouseMove);

            seekBarKnob.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                seekBarKnob.onmouseup = null

            }

            document.body.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                seekBarKnob.onmouseup = null

            }

            seekBarKnob.ondragstart = function () {
                return false;
            }


        }

    }

    setVolumeBar() {
        const volumeBarElement = this.element.querySelector('.js-volume-bar')
        const fillElement = volumeBarElement.querySelector('.js-volume-bar-fill')
        const ratio = this.audioElement.volume
        const volumeBarKnob = document.querySelector('.volumeBarKnob')
        fillElement.style.transform = `scaleX(${ratio})`

        volumeBarElement.addEventListener('click', (_event) => {
            const bounding = volumeBarElement.getBoundingClientRect()
            const level = (_event.clientX - bounding.left) / bounding.width
            fillElement.style.transform = `scaleX(${level})`
            volumeBarKnob.style.left = Math.floor(level * 300) + "px"
            this.audioElement.volume = level

        })

        volumeBarKnob.onmousedown = (_event) => {
            volumeBarKnob.style.position = 'absolute';
            volumeBarKnob.style.zIndex = 1000;
            volumeBarElement.append(volumeBarKnob);

            moveAt(event.clientX)

            function moveAt(clientX) {
                volumeBarKnob.style.left = Math.floor(clientX) - 760 + 'px'
                console.log(volumeBarKnob.style.left, clientX - 760 + 'px')
            }

            const onMouseMove = (_event) => {
                moveAt(event.clientX)
                const bounding = volumeBarElement.getBoundingClientRect()
                const level = (_event.clientX - bounding.left) / bounding.width
                fillElement.style.transform = `scaleX(${level})`

                this.audioElement.volume = level
                console.log(level, this.audioElement.volume)
            }

            document.addEventListener('mousemove', onMouseMove);

            volumeBarKnob.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                volumeBarKnob.onmouseup = null

            }

            document.body.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                volumeBarKnob.onmouseup = null

            }

            volumeBarKnob.ondragstart = function () {
                return false;
            }


        }
    }
}

const player = new Player(document.querySelector('.js-player'))
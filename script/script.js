const audioEl = document.getElementById("audioEl");

        function showSideMenu() {
            $("#homeScreen").animate({
                
            }, 400).addClass("sd");
            $("#sideMenu").animate({
                left: 0,
                opacity: 1
            }, 100);

            $("#menu").addClass('blur-in');
            $("#homeScreen").addClass('blur-in');
        }

        function hideSideMenu() {
            $("#homeScreen").animate({
                
            }, 400).removeClass("sd");
            $("#sideMenu").animate({
                left: 0 - $(document).width(),
                opacity: 0.2
            }, 100);

            $("#menu").removeClass('blur-in');
            $("#homeScreen").removeClass('blur-in');
        }

        function showHome() {

            $("#homeScreen").animate({ scrollTop: 0 }, 100);

            $("#homeScreen").animate({
                opacity: 1
            }, 400).addClass("sd");
            $("#musicScreen").animate({
                top: 1800,
                opacity: 0.2
            }, 400);

            $("#songName2").addClass("invisible");
            bottomToTop();
            
        }

        function showMusic() {

            $("#homeScreen").animate({ scrollTop: 0 }, 100);

            $("#homeScreen").animate({
                // opacity: 0.2
            }, 400).removeClass("sd");
            $("#musicScreen").animate({
                top: 50,
                opacity: 1
            }, 400);

            topToBottom();
            hideSideMenu();

        }

        function fadeEffect(el){

            $(el).animate({
                opacity: 0
            }, 200).animate({
                opacity: 1
            }, 200);

        }

        $("#closeSideMenu").on("click", () => {
            hideSideMenu();
        });

        $("#showSideMenu").on("click", () => {
            showSideMenu();
        });

        $("#switchMode").on("click", () => {
            let modeStatus = $("#modeStatus").attr("name");
            
            if (modeStatus === "light") {
                // Apply dark mode styles
                $("#lightCss").attr("media", "max-width: 1px");
                $("#darkCss").attr("media", "");
                $("#modeStatus").attr("name", "dark");
                // Toggle the icons
                $("#lightModeIcon").addClass("hidden");
                $("#darkModeIcon").removeClass("hidden");
                // Apply additional styling changes here
            } else if (modeStatus === "dark") {
                // Apply light mode styles
                $("#lightCss").attr("media", "");
                $("#darkCss").attr("media", "max-width: 1px");
                $("#modeStatus").attr("name", "light");
                // Toggle the icons
                $("#darkModeIcon").addClass("hidden");
                $("#lightModeIcon").removeClass("hidden");
                // Apply additional styling changes here
            } else {
                hideSideMenu();
            }
        });
        
        

        $(".closeSM").on("click", () => {
            hideSideMenu();
        });

        // Music Player Here

        $("#goBackToHome").on("click", () => {
            try {
                showHome();
                pauseAudio();
                // $("#hideOnMusic").css(
                //     "opacity", "1"
                // );
                $("#hideOnMusic").removeClass("invisible");
                if(audioStatus == true){
                    handleAudio();
                }
            } catch (error) {
                
            }
        });

        $(".menu").css("z-index", "0");

        function topToBottom(){
            $(".menu").addClass("top-to-bottom-2");
            $(".menu").addClass("tob-white");
            $(".menu").delay(200).css("z-index", "0");

            /*
            $(".menu").delay(400).queue(function(next) {
                $(this).css("z-index", "0"); 
                next(); 
            });
            */

            $("#showSideMenu").addClass("hidden");
            $("#goBackToHome").removeClass("hidden");
            $("#songName").removeClass("invisible");
            uncheckHeart();
        }

        function bottomToTop(){
            $(".menu").removeClass("top-to-bottom-2");
            $(".menu").removeClass("tob-white");

            // $(".menu").delay(2000).css("z-index", "-1");

            /*
            $(".menu").delay(400).queue(function(next) {
                $(this).css("z-index", "-1"); 
                next(); 
            });
            */

            $("#showSideMenu").removeClass("hidden");
            $("#goBackToHome").addClass("hidden");
            $("#songName").addClass("invisible");
        }

        function checkHeart(){
            $("#heartUncheck").addClass("hidden");
            $("#heartCheck").removeClass("hidden");
        }

        function uncheckHeart(){
            $("#heartCheck").addClass("hidden");
            $("#heartUncheck").removeClass("hidden");
        }

        $("#heartUncheck").on("click", () => {
            checkHeart();
        });

        $("#heartCheck").on("click", () => {
            uncheckHeart();
        });

        // Handle Audio

        var audioStatus = false;
        const audioStatus2 = false;
        let loopStatus = "loopOff";
        let repeatStatus = "repeatOff";

        $("#audioPlay").on("click", () => {
            handleAudio();
        });

        $("#audioPause").on("click", () => {
            handleAudio();
        });

        $("#audioLoop").on("click", () => {
            loopStatus = $("#loopStatus").attr("name");
            if(loopStatus == "loopOff"){
                $("#audioLoop").addClass("check-bottom-opt");
                $("#loopStatus").attr("name" , "loopOn");
                $(".inBack").attr("data-loop" , "1");
            } else if(loopStatus == "loopOn"){
                $("#audioLoop").removeClass("check-bottom-opt");
                $("#loopStatus").attr("name" , "loopOff");
                $(".inBack").attr("data-loop" , "0");
            }
        });

        $("#audioRepeat").on("click", () => {
            repeatStatus = $("#repeatStatus").attr("name");
            if(repeatStatus == "repeatOff"){
                $("#audioRepeat").addClass("check-bottom-opt");
                $("#repeatStatus").attr("name" , "repeatOn");
                $(".inBack").attr("data-autoplay" , "1");
            } else if(repeatStatus == "repeatOn"){
                $("#audioRepeat").removeClass("check-bottom-opt");
                $("#repeatStatus").attr("name" , "repeatOff");
                $(".inBack").attr("data-autoplay" , "0");
            }
        });

        $("#musicImage").on("click", () => {
            
            if(audioEl.paused && audioEl.currentTime > 0 && !audioEl.ended) {
                $("#audioPlay2").click();
            } else {
                $("#audioPause2").click();
            }
            $(".music-disk-con").animate({
                opacity: 0.2
            }, 100).animate({
                opacity: 1
            }, 100);
        });

        // $("[id^='btnCircleHandle_']").on("dblclick", function(){
        //     checkHeart();
        // });

        function handleAudio(){
            $("#audioHandler1").removeClass("hidden");
            $("#audioHandler2").addClass("hidden");
            if(audioStatus == false){
                $(".inBack").click();
                audioStatus = true;
                $("#audioPlay").addClass("hidden");
                $("#audioPause").removeClass("hidden");
            } else if(audioStatus == true){
                $(".inBack").click();
                audioStatus = false;
                $("#audioPlay").removeClass("hidden");
                $("#audioPause").addClass("hidden");
            } else {

            }
        }

        // Audio2

        function playAudio() { 
            audioEl.play(); 
        } 
        
        function pauseAudio() { 
            audioEl.pause(); 
        } 

        function handleAudio2(){
            
            $("#audioHandler2").removeClass("hidden");
            $("#audioHandler1").addClass("hidden");

        }

        $("#audioPlay2").on("click", () => {
            audioEl.play();
            $("#audioPlay2").addClass("hidden");
            $("#audioPause2").removeClass("hidden");

        });

        $("#audioPause2").on("click", () => {
            pauseAudio();
            $("#audioPlay2").removeClass("hidden");
            $("#audioPause2").addClass("hidden");
        });

        // playMusic({songImage: '', songName: '', songArtist: '', songID: ''});

        function playMusic({songImage, songName, songArtist, songID}) {

            $("#hideOnMusic").addClass("invisible");

            $("#musicImage").css(
                "background", `url(${songImage})`,
                "background-position", "center",
                "background-repeat", "no-repeat",
                "background-size", "cover"
            );

            $("#musicName").text(songName);
            $("#songName2").text(songName);
            $("#songName2").removeClass("invisible");
            $("#musicArtist").text(songArtist);

            $("#audioElSource").attr("src", songID);
            document.getElementById("audioEl").load();

            showMusic();
            handleAudio2();
            $("#audioPlay2").click();

            $("#musicImage").animate({
                opacity: 0.2
            }, 600, () => {
                $("#musicImage").animate({
                    opacity: 1
                }, 600, () => {
                    $("#musicImage").animate({
                        opacity: 0.2
                    }, 600, () => {
                        $("#musicImage").animate({
                            opacity: 1
                        }, 600 , () => {
                            // $("#musicImage").animate({
                            //     opacity: 0.2
                            // }, 600 , function(){
                            //     $("#musicImage").animate({
                            //         opacity: 1
                            //     }, 600 , function(){
                            //         $("#musicImage").animate({
                            //             opacity: 0.2
                            //         }, 600 , function(){
                            //             $("#musicImage").animate({
                            //                 opacity: 1
                            //             }, 600 , function(){
                                            
                            //             });
                            //         });
                            //     });
                            // });
                        });
                    });
                });
            });

        }

        // Splash Screen

        $('#zTwo').delay(800).queue(function (next) { 
            $(this).css('transform', 'rotate(90deg)'); 
            next(); 
        });

        $('#splashScreen').delay(1800).queue(function (next) { 
            $(this).css(
                "top", "-100vh"
            ); 
            $(this).css(
                "opacity", "0.6"
            );
            next(); 
        });
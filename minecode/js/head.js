    //наговонокодил))
    
    $(document).ready(function() {
        var oReq = new XMLHttpRequest();
        oReq.onload = function() {
            if(this.responseText!="nope"){
                document.getElementById("usericon1").src="https://visage.surgeplay.com/face/512/"+this.responseText+".png";
                document.getElementById("usericon2").src="https://visage.surgeplay.com/face/512/"+this.responseText+".png";

                document.getElementById("pc1").classList.remove("hidden");
                document.getElementById("pc2").classList.remove("hidden");
            }else{
                document.getElementById("loginb1").classList.remove("hidden");
                document.getElementById("loginb2").classList.remove("hidden");
            }
        };
        oReq.open("get", "/uuid.php", true);
        oReq.send();
    });

    var bodyId = document.body.id;

    window.onscroll = function() {myFunction()};

    var header = document.getElementById("myHeader");
    var logoText = document.getElementById("myLogoText");
    var startHeader = document.getElementById("startHeader");
    var btn = document.getElementById("burger");
    var menu = document.getElementById("burgerMenu");

    var sticky = startHeader.offsetTop;

    var menuIsOpened = false;
    var under = false;

    function toggle(){
        if(header.classList.contains("absolute")){
            header.classList.remove("absolute");
            header.classList.add("fixed");

            header.classList.add("bg-white/70");
            header.classList.add("backdrop-filter");
            header.classList.add("backdrop-blur");
            header.classList.add("border-b-2");
            header.classList.add("border-[#6565651a]");
            header.classList.add("top-0");
            header.classList.add("text-htext");

            logoText.classList.add("bg-clip-text");
            logoText.classList.add("text-transparent");
            logoText.classList.add("bg-gradient-to-tr");
            logoText.classList.add("from-blue1");
            logoText.classList.add("to-blue2");
        }else{
            header.classList.add("absolute");
            header.classList.remove("fixed");
            
            header.classList.remove("bg-white/70");
            header.classList.remove("backdrop-filter");
            header.classList.remove("backdrop-blur");
            header.classList.remove("border-b-2");
            header.classList.remove("border-[#6565651a]");
            header.classList.remove("top-0");
            header.classList.remove("text-htext");

            logoText.classList.remove("bg-clip-text");
            logoText.classList.remove("text-transparent");
            logoText.classList.remove("bg-gradient-to-tr");
            logoText.classList.remove("from-blue1");
            logoText.classList.remove("to-blue2");
        }
    }

    function myFunction() {
        if (window.pageYOffset >= sticky) {
            if(!under){ 
                if(!menuIsOpened) toggle();
                under = true;
            }
        } else {
            if(under){ 
                if(!menuIsOpened) toggle();
                under = false;
            }
        }
    }
    myFunction();

    btn.addEventListener("click", () => {
	    menu.classList.toggle("hidden");
        if(!under) toggle();
        if(!menuIsOpened){menuIsOpened = true;}
        else{menuIsOpened = false;}
    });


    if(bodyId=="index"){
        document.getElementById("l-index").classList.add("text-blue1.5");
        document.getElementById("l-index-line").classList.toggle("invisible");
        document.getElementById("s-index").classList.add("text-blue1.5");
        document.getElementById("s-index-line").classList.remove("hidden");
        document.getElementById("s-index-line").classList.add("inline-block");
    }
    if(bodyId=="rules"){
        document.getElementById("l-rules").classList.add("text-blue1.5");
        document.getElementById("l-rules-line").classList.toggle("invisible");
        document.getElementById("s-rules").classList.add("text-blue1.5");
        document.getElementById("s-rules-line").classList.remove("hidden");
        document.getElementById("s-rules-line").classList.add("inline-block");
    }
    if(bodyId=="score"){
        document.getElementById("l-score").classList.add("text-blue1.5");
        document.getElementById("l-score-line").classList.toggle("invisible");
        document.getElementById("s-score").classList.add("text-blue1.5");
        document.getElementById("s-score-line").classList.remove("hidden");
        document.getElementById("s-score-line").classList.add("inline-block");
    }
    if(bodyId=="map"){
        document.getElementById("l-map").classList.add("text-blue1.5");
        document.getElementById("l-map-line").classList.toggle("invisible");
        document.getElementById("s-map").classList.add("text-blue1.5");
        document.getElementById("s-map-line").classList.remove("hidden");
        document.getElementById("s-map-line").classList.add("inline-block");
    }

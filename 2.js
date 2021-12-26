
    window.onload = sliderMethod();
    function sliderMethod(){
     var slidersList = document.getElementsByClassName('slider-content');
     if (!slidersList[0].classList.contains('show-content')) {
        slidersList[0].classList.add('show-content');
     }
     for(var slide of slidersList){
        if (!slide.classList.contains('show-content')) {
            slide.classList.add('hidden-content');
        }
     }
     var index=0;
     var mainSlider = document.getElementsByClassName('slider')[0];
     mainSlider.addEventListener('click', function(){
        index++;
        for(var sliders of slidersList){
            if(sliders.classList.contains('show-content') && index < 3){
                sliders.classList.remove('show-content');
                sliders.classList.add('hidden-content');
                sliders.nextElementSibling.classList.remove('hidden-content');
                sliders.nextElementSibling.classList.add('show-content');
                break;
            }else if(sliders.classList.contains('show-content') && index == 3){
            sliders.classList.remove('show-content');
            sliders.classList.add('hidden-content');
            console.log(sliders.previousElementSibling);
            sliders.previousElementSibling.previousElementSibling.classList.remove('hidden-content');      
            sliders.previousElementSibling.previousElementSibling.classList.add('show-content');
            index = 0;
            break;
        }
    }
    })
    }
    
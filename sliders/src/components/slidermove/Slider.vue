<template>
    <div id="slidemove">
        <div class="wrap">
            <div id="arrow-left" class="arrow" @click="moveImage('left')"></div>
            <div id="slider">
                <Slide 
                :slideData ="slideData"
                :counter = "counter"
                />
            </div>
            <div id="arrow-right" class="arrow"  @click="moveImage('right')"></div>
        </div>
    </div>
</template>


<script>
import Slide from './Slide.vue';
export default {
    components:{
        Slide
    },
    data(){
        return {
            slideData : [
                {
                    id : 0,
                    url: "url('"+"/static/images/carousal/image3.jpg"+"')",
                    content : "image 1"
                },
                {
                    id : 1,
                    url: "url('"+"/static/images/carousal/image4.jpg"+"')",
                    content : "image 2"
                },
                {
                    id : 2,
                    url: "url('"+"/static/images/carousal/image5.jpg"+"')",
                    content : "image 3"
                }
            ],
            counter : 0
        }
    },
    methods:{
        moveImage(direction){
            console.log("direction ",direction," this.counter ",this.counter);
            if(direction == "left"){
                if(this.counter ==0){
                    this.counter = this.slideData.length-1;
                }
                else{
                    this.counter--;
                }
            }
            else if(direction == "right"){
                if(this.counter == this.slideData.length-1){
                    this.counter = 0;
                }
                else{
                    this.counter++;
                }
            }
        }
    }
}
</script>


<style lang="scss">
#slidemove{
    .wrap,#slider,.slide-content{
        width: 100%;
        height: 80vh;
    }
    .wrap{
        position: relative;
    }
    .slide{
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        width: 100%;
        height: 80vh;
    }
    .slide-content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .slide-content span{
        font-size: 5rem;
    }
    .arrow{
        cursor: pointer;
        position: absolute;
        top: 50%;
        border-style: solid;
        border-color: transparent;
        transform: translateY(-50%);
        z-index: 10;
    }
    #arrow-left{
        border-width: 30px 30px 30px 30px;
        border-right-color: red;
    }
    #arrow-right{
        border-width: 30px 30px 30px 30px;
        border-left-color: red;
        position: absolute;
        right: 0;
    }

    #slidecontent, #slidecontent .slide {    
        position: absolute;
        width: 100%;
        height: 80vh; 
        overflow: hidden;
    }

    .fade-enter-active {
        animation-name: fadeenter;
        animation-iteration-count: 1;
        animation-duration: 1s;
    }
    .fade-move{
        transition: transform 1s;
    }
    .fade-leave-active {
        animation-name: fadeleave;
        animation-iteration-count: 1;
        animation-duration: 1s;
        position: absolute;
    }

    @keyframes fadeenter {
        from{transform: translate(100%,0%);}
        to{transform: translate(0%,0%);}
    }   

    @keyframes fadeleave {
        from{transform: translate(0%,0%);}
        to{transform: translate(-100%,0%);}
    }

}

</style>

<template>
    <div id="slideappear">
        <div class="wrap">
            <div id="arrow-left" class="arrow" @click="moveImage('left')"></div>
            <div id="slider">
                <Slide v-for="(value) in slideData" 
                :key="value.id" 
                :url="value.url" 
                :content="value.content" 
                v-if="value.id == counter" />
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
#slideappear{
    .wrap,#slider,.slide-content{
        width: 100%;
        height: 80vh;
        overflow: hidden;
    }
    .wrap{
        position: relative;
    }
    .slide{
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: absolute;
        width: 100%;
        height: 80vh;
        overflow: hidden;
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
        right: 0;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    } 

}

</style>

<template>
    <div id="popupdemo">
        <button @click="togglePopup">Toggle Popup</button>
        <Popup :toggleStyle="toggleStyle" @toggleStyle="toggleStyle = $event"/>
    </div>
</template>

<script>
import Popup from './Popup.vue';

export default {
    components:{
        Popup
    },
    data(){
        return{
            toggleStyle : {
                opacity : 0,
                visibility : "hidden"
            }
        }
    },
    methods:{
        togglePopup(){
            console.log("in togglePopup()");
            this.toggleStyle = {
                opacity : 1,
                visibility : "visible",
                scaleElement : true
            };
        }
    }
}
</script>

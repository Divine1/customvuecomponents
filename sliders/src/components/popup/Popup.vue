<template>
    <div id="popup" :style="{'opacity' : toggleStyle.opacity, 'visibility' : toggleStyle.visibility}" >
        <div class="wrap" :class="{ animate : toggleStyle.scaleElement}">
            <div class="container">
                <div class="content">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vitae atque, quidem earum optio ad at, ipsam culpa illo, saepe qui deleniti sed cum fugit doloremque mollitia incidunt debitis eius?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa neque perferendis porro beatae enim alias eius debitis placeat, possimus soluta quas rem eos omnis accusamus accusantium qui quos! Ad, quaerat.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa tenetur, explicabo unde assumenda enim, rerum rem voluptate ab quasi neque, distinctio eligendi accusantium reprehenderit at sit fugiat est minima voluptatum.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur assumenda veniam ex tempore asperiores numquam totam, saepe porro maiores eligendi veritatis odit sit, praesentium eos, provident alias quas obcaecati repellendus.
                </div>
                <div style="text-align:center;">
                    <button @click="closePopup">ok</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ["toggleStyle"],
    methods:{
        closePopup(){
            console.log("in closePopup()");
            this.$emit("toggleStyle",{
                opacity : 0,
                visibility : "hidden",
                scaleElement : false
            });
        }
    }
}
</script>

<style lang="scss">
#popup{
    position: fixed;
    top: 0%;
    background-color: rgba(grey,0.5);
    opacity: 0;
    visibility: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    
    transition: all 0.4s;
    .wrap{
        position: relative;
        opacity: 1;
        z-index: 10;
        background-color: green;
        top: 50%;
        left: 50%;
        width: 50%;
        transform: translate(-50%,-50%);
        transition: all 0.4s;
        height: auto;
    }
    
    @keyframes containerscale {
        from{
            transform: translate(-50%,-50%) scale(0.5);
        }
        to{
            transform: translate(-50%,-50%) scale(1);
        }
    }
    .wrap.animate{
        animation-name: containerscale;
        animation-iteration-count: 1;
        animation-duration: 1s;
        animation-fill-mode: forwards;
    }
    
}
</style>



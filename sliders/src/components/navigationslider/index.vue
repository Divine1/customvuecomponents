<template>
    <div id="navigationslider" :class="{active : navSliderToggle}" >
        <div class="close" @click="$emit('navSliderToggle',false)">X</div>
        <div class="navigation">
            <ul>
                <li><a href="#">About World</a></li>
                <li><a href="#">Your Place</a></li>
                <li><a href="#">Popular Tours</a></li>
                <li><a href="#">Stories</a></li>
                <li><a href="#">Oceans</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:["navSliderToggle"]
}
</script>

<style lang="scss" >
#navigationslider{
    position:fixed;
    z-index:100;
    background-color: rgba(139, 57, 57, 0.95);
    width: 100%;
    height: 100vh;
    transition: all 0.2s;
    opacity: 0;
    visibility: hidden;
    .close{
        position: absolute;
        right: 2rem;
        top: 2rem;
        font-size: 2rem;
        cursor: pointer;
    }
    .navigation{
        background-color: white;
        display: inline-block;
        height: 100vh;
        width: 150px;
        opacity: 0;
        visibility: hidden;
        transition: all 0.8s;
        ul{
            li{
                padding: 10px;

                a{
                    text-decoration: none;
                }
                &:hover{
                    cursor:pointer;
                    background-color: aqua;
                }
            }
        }
        
    }
    &.active{
        //width:100%;
        opacity: 1;
        visibility: visible;
    }
    &.active .navigation{
        opacity: 1;
        visibility: visible;
        width: 200px;
    }

}
</style>

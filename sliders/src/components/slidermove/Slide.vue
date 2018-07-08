<template>
<transition-group name="fade" tag="div" id="slidecontent" mode="out-in">
    <div class="slide" :style="{'backgroundImage' : slideData[counter].url}" :key="counter">
        <div class="slide-content">
            <span>{{slideData[counter].content}}</span>
        </div>
    </div>
</transition-group>
</template>

<script>
export default {
    props:["slideData","counter"]
}
</script>
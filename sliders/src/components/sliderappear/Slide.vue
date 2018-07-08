<template>
<transition name="fade" mode ="in-out" appear>
    <div class="slide" :style="{'backgroundImage' : url}" >
        <div class="slide-content">
            <span>{{content}}</span>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    props:["url","content"]
}
</script>

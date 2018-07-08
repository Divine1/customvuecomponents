<template>
    <div id="header">
        <router-link to="/" tag="div" active-class="active" exact>Home</router-link>
        <router-link to="/sliderappear" tag="div" active-class="active" exact>Slider-Appear</router-link>
        <router-link to="/slidermove" tag="div" active-class="active" exact>Slider-Move</router-link>
        <router-link to="/popup" tag="div" active-class="active" exact>Popup</router-link>
    </div>
</template>
<style lang="scss">
#header{
    display: flex;
    justify-content: center;
    
    div{
        padding: 10px;
        margin: 10px;
        border: 1px solid black;
        &:hover{
            cursor:pointer;
            background-color: green;
            color: white;
        }
    }
    
    .active{
        background-color: chocolate;
        color: white;
        font-weight: bold;
    }
}
</style>

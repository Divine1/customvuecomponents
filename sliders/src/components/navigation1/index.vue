<template>
    <div class="navigation">
        <input type="checkbox" class="navigation__checkbox" id="navi-toggle" />
        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>
        <div class="navigation__background">&nbsp;</div>
        <nav class="navigation__nav">
            <ul class="navigation__list">
                <li class="navigation__item">
                    <a href="#" class="navigation__link">About World</a>
                </li>
                <li class="navigation__item">
                    <a href="#" class="navigation__link">Your Place</a>
                </li>
                <li class="navigation__item">
                    <a href="#" class="navigation__link">Popular Tours</a>
                </li>
                <li class="navigation__item">
                    <a href="#" class="navigation__link">Stories</a>
                </li>
                <li class="navigation__item">
                    <a href="#" class="navigation__link">Oceans</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
    $color-primary: #80f164;
    $color-secondry: #078d07;
    .navigation{
        font-size: 2rem;
        &__background,&__button{
            height: 6rem;
            width: 6rem;
            border-radius: 50%;
            position: fixed;
            top:4rem;
            right: 4rem;
        }
        &__background{
            background-image: radial-gradient($color-primary,$color-secondry);
            z-index: 10;
            transition: all 0.5s;
        }
        &__button{
            text-align: center;
            cursor: pointer;
            background-color: rgb(226, 217, 88);
            z-index: 20;
            box-shadow: 0 1rem 3rem rgba(black,0.1);
        }
        &__checkbox{
            display: none;
        }
        &__nav{
            height: 100vh;
            width: 100%;
            position: fixed;
            top:0;
            right:0;
            z-index:15;
            opacity: 0;
            width: 0%;
            transition: all 0.8s;
        }
        &__list{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            list-style: none;
            text-align: center;
        }
        &__item{
            margin:1rem;
        }
        &__link{
            padding: 1rem 2rem;
            &:link,&:visited{
                display: inline-block;
                font-weight: 300;
                color:white;
                text-decoration: none;
                text-transform: uppercase;
                //background-image: linear-gradient(120deg,orangered 0%,orangered 50%,white 50%);
                background-image: linear-gradient(120deg,transparent 0%,transparent 50%,white 50%);
                background-size: 220%;
                transition: all 1s;
            }
            &:hover,&:active{
                background-position: 100%;
                color:$color-primary;
                //transform: translateX(1rem);
            }
        }
        &__checkbox:checked ~ &__background{
            transform: scale(80);
        }
        &__checkbox:checked ~ &__nav{
            opacity: 1;
            width: 100%;
        }

        &__icon{
            position: relative;
            margin-top: 3rem;
            
            &,
            &::before,
            &::after{
                width: 3rem;
                height: 0.2rem;
                background-color: grey;
                display: inline-block;
            }
            &::before,
            &::after{
                content:"";
                left: 0;
                position: absolute;
                transition: all 0.2s;
            }
            &::before{
                top: -1rem;
            }
            &::after{
                top: 1rem;
            }
        }
        &__checkbox:checked + &__button &__icon{
            background-color: transparent;
        }
        &__checkbox:checked + &__button &__icon:before{
            transform: rotate(45deg);
            top: 0;
        }
        &__checkbox:checked + &__button &__icon:after{
            transform: rotate(-45deg);
            top: 0;
        }
    }
</style>

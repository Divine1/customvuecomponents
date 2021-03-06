# sliderproject

> A Vue.js project

## Below are the notable details

### Note 1:
You can now integrate this slider component into your project by just copying the slider folder into your project.

You should pass 2 inputs to this slider component

- images
    - Array of JSON object
    - You can pass 'n' number of objects to this.
    - Please note that the `id` object inside the images array must start with 0 and it has to      increment from there
    - Below is the sample array
        ```
        images : [
            {
                id: 0,
                url : "/images/image1.jpg",
                title: "Lightning"
            },
            {
                id: 1,
                url : "/images/image2.jpg",
                title: "Batman on the roof"
            }
        ]
        ```
- slideDuration
    - Specify the value in millisecond (4000 is 4s, 5000 is 5s)
    - Amount of time after which the slider has to move to the next slide automatically


### Note 2
i have added SCSS package in this module. SCSS transpilers will automatically get downloaded when you install this npm package.

i have provided scss variables, so that you can make changes to font-size,background-color,font-color,height,width ...etc according to your project need.

i have made size calculation based on pixels, you can see it in the scss variables. 
If you need it change it to rem or em, you can just make changes in the scss variables, i have tried to make the code to adapt to changes in sizes. if you face any issue while making these changes , let me know.

Below is the npm command to install scss compiler into vuejs. You don't have to run this command to make this package to work because (as i already mentioned above) i have already included entry of these packages in the `package.json`
```
    npm install sass-loader node-sass style-loader --save
```

### Note 3
i have introduced pause and play controls in image slider

`&#9658;` - unicode symbol which denotes Play slider

`&#10074;` -  unicode symbol which denotes Pause slider

This unicode may not work in some browsers, You could face browser compatibility issues.
i'd recommend you to first run this on chrome and verify if this module suits your requirement and then move to a different browser.

Feel free to use any icons or images for pause and play elements. In `Slider.vue` file there are two classes already defined.
```
.play{
    color: brown;
}
.pause{
    color: #580843;
}
```
You can introduce any icons or images into it. i will leave it to you.


### Note 4
#### Setting up this project

i'd recommend you to use it as local component.
You have to specificy the height & width of the slider in the `container` element of the `<Slider ...>` component.

In the below code sample, `.slidercontainer` class is the container element for the `<Slider ...>` component. So you SHOULD to specify the height & width of the image slider in this class.

```
//for full screen image slider
.slidercontainer{
    height:100vh;
    width:100%;
}

//image slider with less height and full width
.slidercontainer{
    height:400px;
    width:100%;
}

//image slider with less height and less width
.slidercontainer{
    height:400px;
    width:600px;
}
```
### Code sample

```
    <template>
        <div class="slidercontainer">
            <Slider :images="images" :intervalDuration="slideDuration"/>
        </div>
    </template>
    <script>
        import Slider from "vue-slider-rw";
        export default {
            components :{
                Slider
            },
            data () {
                return {
                    images : [
                        {
                            id: 0, url : "/images/image1.jpg", title: "Lightning"
                        },
                        {
                            id: 1, url : "/images/image2.jpg", title: "Batman on the roof"
                        }
                    ],
                    slideDuration : 4000
                }
            }
        }
    </script>
    <style>
        .slidercontainer{
            height:100vh;
            width:100%;
        }
    </style>
```


### Sample Project


You can download [my project](https://github.com/Divine1/sliderproject.git) from git and see how it works. i have given all the input datas in it. You just have to download the project -> set it up -> run


You can find me on twitter [@divine_rw](https://twitter.com/divine_rw)

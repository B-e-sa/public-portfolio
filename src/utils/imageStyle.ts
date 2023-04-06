/* DON'T TRY TO UNDERSTAND THE CODE ABOVE
* 
* i made it just to fulfill an idea that i had for a long time
* so it will still receive multiple improvements
* 
*/

const sideImage = {
    top: -80,
    width: 200,
    height: 265,
    filter: 'blur(2px)',
    zIndex: 2
}

const backImage = {
    top: 5,
    width: 100,
    height: 150,
    filter: 'blur(3px)',
    zIndex: 1
}

const imageStyle = (index: number, selectedImage: number) => {
    if (index == selectedImage) {
        return {
            top: -140,
            width: 300,
            height: 390,
            left: '31%',
            zIndex: 3,
            margin: 'auto'
        }
    } else if (
        index == selectedImage - 1
        ||
        index == selectedImage + 4
    ) {
        return {
            ...sideImage,
            left: 60,
        }
    } else if (
        index == selectedImage + 1
        ||
        index == selectedImage - 4
    ) {
        return {
            ...sideImage,
            left: 540,
        }
    } else if (
        index == selectedImage - 2
        ||
        index == selectedImage + 3
    ) {
        return {
            ...backImage,
            left: 210,
        }
    } else if (
        index == selectedImage + 2
        ||
        index == selectedImage - 3
    ) {
        return {
            ...backImage,
            left: 480,
        }
    }
}

export default imageStyle;
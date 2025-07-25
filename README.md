# ReactLiteCarousel

**ReactLiteCarousel** is a lightweight, swipeable, and responsive React carousel component.  
It supports infinite looping, touch and mouse dragging, and easy customization with no dependencies.

---

## 🚀 Features

- Infinite looping with seamless transitions
- Touch and mouse drag support
- Lightweight and dependency-free
- Lazy-loaded images
- Customizable dimensions and arrows
- Autoplay

---

## 📦 Installation

````bash
npm install react-lite-carousel


## Common Usage

```react
import ReactLiteCarousel from "react-lite-carousel";

const images = [
  {
    src: "https://via.placeholder.com/",
    alt: "Image 1",
  },
  {
    src: "https://via.placeholder.com/",
    alt: "Image 2",
  },
  {
    src: "https://via.placeholder.com/",
    alt: "Image 3",
  },
];

<ReactLiteCarousel
  images={images}
  isInfinite={true}
  height="60vh"
  leftArrowClass="custom-left-arrow"
  rightArrowClass="custom-right-arrow"
  autoPlay={true}
  autoPlayInterval={5000}
/>;
````

---

## Props

| Prop               | Type              | Default                 | Description                                               |
| ------------------ | ----------------- | ----------------------- | --------------------------------------------------------- |
| `images`           | `CarouselImage[]` | Demo placeholder images | Array of image objects with `src` and optional `alt` text |
| `isInfinite`       | `boolean`         | `false`                 | Enables infinite looping mode                             |
| `leftArrowClass`   | `string`          | `''`                    | Additional CSS class for left arrow                       |
| `rightArrowClass`  | `string`          | `''`                    | Additional CSS class for right arrow                      |
| `height`           | `string`          | `'50vh'`                | Height of the carousel container (`px`, `vh`, etc.)       |
| `autoPlay`         | `boolean`         | `false`                 | Enables automatic slide transition                        |
| `autoPlayInterval` | `number`          | `5000`                  | Time (in ms) between auto slides when `autoPlay` is true  |

---

## CarouselImage

type CarouselImage = {
src: string
alt?: string
}

---

## Author

👤 **gvasilei**

- Github: [@gvasilei](https://github.com/g-vasilei)

## License

- Add a badge row (npm version, license, etc.)
- Include a usage GIF or screenshot
- Help publish it to npm

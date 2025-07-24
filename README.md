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
/>;
````

| Prop              | Type              | Default                 | Description                                               |
| ----------------- | ----------------- | ----------------------- | --------------------------------------------------------- |
| `images`          | `CarouselImage[]` | Demo placeholder images | Array of image objects with `src` and optional `alt` text |
| `isInfinite`      | `boolean`         | `false`                 | Enables infinite looping mode                             |
| `leftArrowClass`  | `string`          | `''`                    | Additional CSS class for left arrow                       |
| `rightArrowClass` | `string`          | `''`                    | Additional CSS class for right arrow                      |
| `height`          | `string`          | `'50vh'`                | Height of the carousel container (`px`, `vh`, etc.)       |

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

---

This is **a full single-file README**. No extra files needed. Let me know if you'd like me to:

- Add a badge row (npm version, license, etc.)
- Include a usage GIF or screenshot
- Help publish it to npm

Let me know what name you're publishing under and I can even scaffold `package.json` for you.

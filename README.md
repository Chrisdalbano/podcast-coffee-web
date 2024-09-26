
# Existential Coffee Break Podcast - Web Project

This web project for the **Existential Coffee Break Podcast**, built with React and Vite. 
This project focuses on demonstrating a landing podcast website with call to action elements. 

## Features

- **Responsive Design**: Works well on all screen sizes.
- **SVG Animations**: Smooth animations like SVG drawing and text fade effects.
- **Optimized Performance**: SVGs used to reduce image sizes and improve loading times.

---

## Technologies Used

- **React**: JavaScript library for building the user interface.
- **Vite**: Next-generation frontend tooling for lightning-fast builds and hot module replacement.
- **Tailwind CSS**: Utility-first CSS framework for styling.
  
---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/existential-coffee-break.git
   cd existential-coffee-break
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## Headline Component Example

The **Headline** component is a key section with animations and responsive design:

```jsx
import { useEffect } from "react";
import SocratesHero from "../components/SocratesHero";

function Headline() {
  useEffect(() => {
    const svg = document.querySelector(".socrates-hero-svg");
    if (svg) {
      svg.classList.add("animate-svg-draw");
    }
  }, []);

  return (
    <section className="relative mx-auto pb-20">
      <div className="grid grid-cols-[1fr_1fr] bg-[var(--contrast-color)] md:grid-rows-[1fr_auto] gap-4">
        <div className="space-y-8 px-8 py-8 col-span-2 md:col-span-1 row-span-2">
          <h1 className="my-2 font-bold text-fluid-4xl text-[--primary-color] animate-text-fade">
            Get existential in your Coffee Break
          </h1>
          <h3 className="italic text-[var(--primary-color)] max-w-[50%] animate-text-fade">
            High quality, approachable and transferable content from people with decades of elite industry experience.
          </h3>
        </div>
        <div className="h-full w-full col-span-2 row-start-2 bg-[var(--primary-color)]"></div>
      </div>
      <div className="hidden md:block absolute top-0 right-0 h-full w-[50%] md:w-[70%] lg:w-[40%] overflow-hidden socrates-hero-container">
        <SocratesHero className="socrates-hero-svg" svgColor="var(--primary-color)" />
      </div>
    </section>
  );
}

export default Headline;
```

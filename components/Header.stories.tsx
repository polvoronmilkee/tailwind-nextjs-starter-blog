import { Space_Grotesk } from "next/font/google";
import Header from "./Header";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const HeaderWrapper = () => {
  return (
    <div className="flex items-center w-full bg-white dark:bg-gray-950 justify-between">
      <Header />
    </div>
  );
};

export default {
  title: "Components/Header",
  component: HeaderWrapper,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

// STORY 1: DEFAULT

export const Default = () => (
  <div
    className={space_grotesk.variable}
    style={{ fontFamily: "var(--font-space-grotesk)" }}
  >
    <HeaderWrapper />
  </div>
);

// STORY 2: WITH DARK MODE

export const WithDarkMode = () => (
  <>
    <style>{`
      #dark-mode-story {
        background-color: rgb(3, 7, 18);
      }
      #dark-mode-story div[class*="text-2xl"] {
        color: white;
      }
    `}</style>
    <div
      id="dark-mode-story"
      className={`dark ${space_grotesk.variable}`}
      style={{ fontFamily: "var(--font-space-grotesk)" }}
    >
      <HeaderWrapper />
    </div>
  </>
);

// STORY 3: IN CONTEXT WITH PAGE CONTENT

export const InContext = () => (
  <div
    className={space_grotesk.variable}
    style={{ fontFamily: "var(--font-space-grotesk)" }}
  >
    <HeaderWrapper />
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5 px-4 container">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-white">
          Sample Blog Header
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          This demonstrates how the header looks above actual blog content with
          proper typography and spacing that matches the main application.
        </p>
      </div>
    </div>
  </div>
);

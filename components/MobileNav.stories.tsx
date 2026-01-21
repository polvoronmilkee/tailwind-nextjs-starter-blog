import type { Meta, StoryObj } from "@storybook/nextjs";
import MobileNav from "./MobileNav";
import React from "react";

const meta: Meta<typeof MobileNav> = {
  title: "Components/MobileNav",
  component: MobileNav,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div className="max-w-[400px] border-x border-dashed border-gray-200 min-h-screen p-4">
        <p className="mb-4 text-[10px] uppercase tracking-widest text-gray-400">
          Mobile Preview (Max-width: 400px)
        </p>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileNav>;

// STORY 1: DEFAULT
export const Default: Story = {};

// STORY 2: DARK MODE
export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div className="dark -m-4 min-h-screen bg-gray-950 p-4">
        <style>{`
          [target="_blank"], 
          [role="dialog"] div { 
             background-color: #030712be !important; /* gray-950 */
          }
          [role="dialog"] nav a { 
             color: #f3f4f6 !important; /* gray-100 */
          }
          [role="dialog"] button svg {
             color: #f3f4f6 !important;
          }
        `}</style>
        <Story />
      </div>
    ),
  ],
};

// STORY 3: MOBILE HEADER
export const MobileHeader: Story = {
  decorators: [
    (Story: React.ComponentType) => (
      <div className="max-w-[400px] border-b pb-4">
        <header className="flex items-center justify-between p-4">
          <span className="font-bold">MyBlog</span>
          <Story />
        </header>
      </div>
    ),
  ],
};

// STORY 4: TOP-RIGHT POSITIONED
export const TopRightPosition: Story = {
  decorators: [
    (Story: React.ComponentType) => (
      <div className="max-w-[400px] h-[700px] bg-white relative border shadow-inner overflow-hidden">
        {/* Navigation Layer */}
        <div className="absolute top-4 right-4 z-10">
          <Story />
        </div>

        {/* Sample Page Content */}
        <div className="flex flex-col">
          {/* Mock Image/Hero Area */}
          <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-700 w-full flex items-center justify-center p-8 text-white text-center">
            <h1 className="text-2xl font-extrabold leading-tight">
              A magical tale of two friends on an extraordinary adventure.
            </h1>
          </div>

          {/* Article Body */}
          <div className="p-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div>
                <p className="text-sm font-bold text-gray-900">
                  Mar and Ryllie
                </p>
                <p className="text-xs text-gray-500">
                  Jan 21, 2026 • 5 min read
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-3/4 bg-gray-100 rounded" />
              <div className="h-4 w-full bg-gray-100 rounded" />
              <div className="h-4 w-5/6 bg-gray-100 rounded" />
            </div>

            <div className="pt-4">
              <button className="w-full py-3 bg-gray-900 text-white rounded-lg font-medium text-sm">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};

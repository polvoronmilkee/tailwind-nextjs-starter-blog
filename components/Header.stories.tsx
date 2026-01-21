import Header from './Header'

const HeaderWrapper = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
    </div>
  )
}

export default {
  title: 'Components/Header',
  component: HeaderWrapper,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

// STORY 1: DEFAULT

export const Default = () => <HeaderWrapper />


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
    <div id="dark-mode-story" className="dark">
      <HeaderWrapper />
    </div>
  </>
)

// STORY 3: IN CONTEXT WITH PAGE CONTENT

export const InContext = () => (
  <div>
    <HeaderWrapper />
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Sample Page Content</h1>
      <p className="text-gray-600 dark:text-gray-400">
        This shows how the header looks above actual page content.
      </p>
    </div>
  </div>
)

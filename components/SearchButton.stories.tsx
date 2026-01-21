import type { Meta, StoryObj } from '@storybook/nextjs'
import SearchButton from './SearchButton'
import siteMetadata from '@/data/siteMetadata'
import React from 'react'

type SearchConfig = typeof siteMetadata.search

const meta: Meta<typeof SearchButton> = {
  title: 'Components/SearchButton',
  component: SearchButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
}

export default meta
type Story = StoryObj<typeof SearchButton>

const ClickTracker = (Story: React.ComponentType, context: { args: Record<string, unknown> }) => {
  const onClick = typeof context.args.onClick === 'function' ? context.args.onClick : null

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => {
        if (onClick) onClick()
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' && onClick) onClick()
      }}
      style={{ cursor: 'pointer' }}
    >
      <Story />
    </div>
  )
}

const withLabel = (label: string, bgColor: string) => {
  const LabelDecorator = (Story: React.ComponentType) => (
    <div className={`${bgColor} flex flex-col items-center gap-4 p-10`}>
      <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
        Provider: {label}
      </span>
      <Story />
    </div>
  )
  LabelDecorator.displayName = `withLabel(${label})`
  return LabelDecorator
}

// STORY 1: ALGOLIA PROVIDER
export const Algolia: Story = {
  decorators: [ClickTracker, withLabel('Algolia', 'bg-blue-50')],
  beforeEach: () => {
    siteMetadata.search = {
      provider: 'algolia',
      algoliaConfig: { appId: '1', apiKey: '1', indexName: '1' },
    } as SearchConfig
  },
}

// STORY 2: KBAR PROVIDER
export const KBar: Story = {
  decorators: [ClickTracker, withLabel('KBar', 'bg-purple-50')],
  beforeEach: () => {
    siteMetadata.search = {
      provider: 'kbar',
      kbarConfig: { searchDocumentsPath: 's.json' },
    } as SearchConfig
  },
}

// STORY 3: NO SEARCH CONFIGURED
export const Hidden: Story = {
  decorators: [
    (Story) => (
      <div className="border-2 border-dashed border-gray-200 p-10 text-center text-gray-400">
        <p>Search is Disabled (Component returns null)</p>
        <Story />
      </div>
    ),
  ],
  beforeEach: () => {
    siteMetadata.search = undefined
  },
}

// STORY 4: DARK MODE WITH KBAR
export const DarkMode: Story = {
  parameters: { backgrounds: { default: 'dark' } },
  decorators: [
    ClickTracker,
    (Story) => (
      <div className="dark flex flex-col items-center gap-4 bg-gray-900 p-10">
        <span className="text-xs font-bold tracking-widest text-gray-500 uppercase">
          Dark Mode (KBar)
        </span>
        <Story />
      </div>
    ),
  ],
  beforeEach: () => {
    siteMetadata.search = {
      provider: 'kbar',
      kbarConfig: { searchDocumentsPath: 's.json' },
    } as SearchConfig
  },
}

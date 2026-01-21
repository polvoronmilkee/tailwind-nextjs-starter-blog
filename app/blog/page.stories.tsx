import type { Meta, StoryObj } from '@storybook/nextjs'
import ListLayout from '@/layouts/ListLayoutWithTags'
import { Blog } from 'contentlayer/generated'
import { CoreContent } from 'pliny/utils/contentlayer'
import React from 'react'

const MOCK_POSTS = [
  {
    title: 'Getting Started with Tailwind CSS',
    summary: 'A comprehensive guide to utility-first CSS and how it changes your workflow.',
    date: '2024-01-01',
    tags: ['nextjs', 'tailwind', 'guide'],
    slug: 'tailwind-guide',
    path: 'blog/tailwind-guide',
  },
  {
    title: 'The Future of Web Development',
    summary: 'Exploring the shift towards server components and edge computing.',
    date: '2023-12-15',
    tags: ['react', 'server-components'],
    slug: 'future-web',
    path: 'blog/future-web',
  },
  {
    title: 'Storybook 101',
    summary: 'How to build isolated components and test them effectively.',
    date: '2023-11-20',
    tags: ['storybook', 'testing'],
    slug: 'storybook-101',
    path: 'blog/storybook-101',
  },
]

const posts = MOCK_POSTS as unknown as CoreContent<Blog>[]

const meta: Meta<typeof ListLayout> = {
  title: 'Pages/BlogPage',
  component: ListLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta
type Story = StoryObj<typeof ListLayout>

export const Default: Story = {
  args: {
    posts: posts,
    initialDisplayPosts: posts,
    pagination: { currentPage: 1, totalPages: 1 },
    title: 'All Posts',
  },
}

export const WithPagination: Story = {
  args: {
    ...Default.args,
    pagination: { currentPage: 1, totalPages: 5 },
  },
}

export const EmptyState: Story = {
  args: {
    posts: [],
    initialDisplayPosts: [],
    pagination: { currentPage: 1, totalPages: 0 },
    title: 'No Posts Found',
  },
}

export const MobileView: Story = {
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
  args: {
    ...Default.args,
  },
}
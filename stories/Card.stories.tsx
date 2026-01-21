import Card from '../components/Card'

export default {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    title: 'Mar and Ryllie',
    description: 'A magical tale of two friends on an extraordinary adventure.',
    imgSrc: '/static/images/canada/mountains.jpg',
    href: '/blog/introducing-tailwind-nextjs-starter-blog',
  },
}

export const WithoutImage = {
  args: {
    title: 'Simple Card Story',
    description: 'This is a card without an image, showcasing the text-only layout.',
    href: '/blog',
  },
}

export const WithoutLink = {
  args: {
    title: 'Static Card',
    description: 'This card has no link attached, making it purely for display purposes.',
    imgSrc: '/static/images/canada/mountains.jpg',
  },
}

export const MinimalCard = {
  args: {
    title: 'Minimal Story',
    description: 'The simplest card with just a title and description.',
  },
}

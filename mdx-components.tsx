import type { MDXComponents } from 'mdx/types'
import Image from 'next/image'
import Link from 'next/link'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Use custom components if needed
    img: (props) => (
      <Image
        alt={props.alt || ''}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        {...props}
      />
    ),
    a: (props) => <Link {...props} href={props.href || '#'} />,
    // Add other custom components here
    ...components,
  }
} 
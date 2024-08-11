# tailwindcss-rem-to-px plugin

[![NPM version](https://img.shields.io/npm/v/tailwindcss-rem-to-px?color=informational&label=)](https://www.npmjs.com/package/tailwindcss-rem-to-px)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?color=informational)](/.github/CONTRIBUTING.md)

[Installation](#installation) |
[Usage](#usage) |
[Examples](#examples) |
[Contributing](#contributing) |
[About](#about) |
[License](#license)

A Tailwind CSS plugin automatically converts all REM units to PX units in your Tailwind styles. It's particularly useful for projects that require pixel-based measurements.

## Installation

To install the plugin, run the following command in your project directory:

```bash
npm install tailwindcss-rem-to-px
```

## Usage

The plugin works by intercepting all Tailwind utility classes and custom styles that use REM units, converting them to their pixel equivalent based on a configurable base font size (default is 16px). This conversion happens at build time, ensuring that your final CSS output contains only pixel values.

1. Import the plugin in your Tailwind configuration file (`tailwind.config.js` or `tailwind.config.ts`):

```typescript
import remToPx from 'tailwindcss-rem-to-px';
```

2. Add the plugin to your Tailwind configuration:

```typescript
import type { Config } from 'tailwindcss'
import remToPx from 'tailwindcss-rem-to-px';

const config: Config = {
  content: [
    // ...
  ],
  theme: {
    // ...
  },
  plugins: [
    remToPx(),
  ],
}

export default config
```

3. (Optional) Configure the base font size:

If you want to use a base font size other than the default 16px, you can pass it as an option to the plugin:

```typescript
plugins: [
  remToPx({ baseFontSize: 14 }),
],
```

This will use 14px as the base for REM to PX conversions.

## Examples

With this plugin, Tailwind classes like:

```html
<div class="text-2xl p-4 m-2">Hello, World!</div>
```

Which would normally compile to:

```css
.text-2xl {
  font-size: 1.5rem;
}
.p-4 {
  padding: 1rem;
}
.m-2 {
  margin: 0.5rem;
}
```

Will instead compile to:

```css
.text-2xl {
  font-size: 24px;
}
.p-4 {
  padding: 16px;
}
.m-2 {
  margin: 8px;
}
```

This ensures that all your styles are consistent and precise, using pixel values throughout your project.

## Contributing

We'd love your help! Please read our [contributing guide](https://github.com/odestry/.github/blob/main/CONTRIBUTING.md) to learn about our development process, how to propose bug fixes and improvements.

## About

Odestry isn't just a community; it's a group of dedicated folks all aiming to build better commerce together. Our mission is to create a supportive and open space where anyone, regardless of experience, can connect, learn, and grow. Here, you'll get inspired, have real talks, and find plenty of resources and open source tools to help you build. Whether you're looking to network, find opportunities, or just have meaningful conversations, join us and be part of a community that values authenticity, collaboration, and innovation. [Learn more](https://odestry.com).

## License

Copyright (c) 2024-present Odestry. See [LICENSE](/LICENSE.md) for further details.

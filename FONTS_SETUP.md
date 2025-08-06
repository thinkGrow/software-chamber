# Font Configuration Setup

This project has been configured with multiple Google Fonts and Tailwind CSS utilities for easy font management.

## Installed Fonts

- **Bricolage Grotesque** (Primary) - Unique and stylish font
- **DM Sans** - Bold, modern sans-serif
- **Inter** - Excellent for body text and readability
- **Outfit** (Secondary) - Modern and clean design
- **Rubik** - Rounded and friendly appearance
- **Poppins** - Versatile and professional

## Font Utilities

Use these Tailwind CSS classes to apply different fonts:

```css
.font-primary    /* Bricolage Grotesque */
.font-dmsans     /* DM Sans */
.font-inter      /* Inter */
.font-secondary  /* Outfit */
.font-rubik      /* Rubik */
```

## Usage Examples

```jsx
<h1 className="font-primary text-4xl font-bold">Heading with Bricolage Grotesque</h1>
<p className="font-inter text-base">Body text with Inter font</p>
<button className="font-secondary font-medium">Button with Outfit font</button>
```

## Global Font

By default, all elements use **Outfit** font as defined in the global CSS rule:
```css
* {
  font-family: "Outfit", sans-serif;
}
```

## DaisyUI Theme

The project includes a custom DaisyUI light theme with these colors:
- Primary: `#22c1ad` (Teal)
- Secondary: `#d72050` (Pink/Red)
- And other semantic colors for consistent theming

## Dependencies

- `tailwindcss` - Core CSS framework
- `@tailwindcss/postcss` - PostCSS plugin for Tailwind
- `daisyui` - Component library
- `autoprefixer` - CSS vendor prefixing
# Responsive Design Guide

## How the Site Adapts to Different Screen Sizes

### Key Responsive Features

1. **Fluid Sizing with `clamp()`**
   - Uses `clamp(min, preferred, max)` for responsive values
   - Example: `padding: clamp(1rem, 2vw, 2rem)` scales between 1rem and 2rem based on viewport width
   - Ensures readable sizes on all devices

2. **Flexible Sidebar**
   - Desktop: Fixed 250px width
   - Medium screens: Scales between 200px-250px using `clamp(200px, 20vw, 250px)`
   - Mobile: Full width (100%)
   - Uses `min-width` and `max-width` constraints

3. **Responsive Images**
   - Profile photo: Uses `aspect-ratio: 1` to maintain square shape
   - Scales with `max-width: 100%` and `width: 100%`
   - On mobile: `max-width: min(200px, 40vw)` for optimal sizing
   - All content images: `max-width: 100%` and `height: auto`

4. **Viewport-Based Units**
   - Uses `vw` (viewport width) for fluid scaling
   - Example: `gap: clamp(1rem, 2vw, 2rem)` adapts to screen width
   - Font sizes scale with viewport: `font-size: clamp(0.9rem, 4vw, 1rem)`

5. **Flexible Layout**
   - Uses CSS Flexbox with `flex: 1` for main content
   - `gap` property for spacing (replaces fixed margins)
   - Stacks vertically on mobile with `flex-direction: column`

### Breakpoints

- **Large (>1200px)**: Full desktop layout
- **Medium (768px-1200px)**: Adjusted spacing, flexible sidebar
- **Small (480px-768px)**: Stacked layout, reduced padding
- **Very Small (<480px)**: Minimal padding, smaller fonts

### How It Works

The site automatically adapts because:

1. **Relative Units**: Uses `rem`, `vw`, `%` instead of fixed `px`
2. **CSS `clamp()`**: Creates fluid values that scale smoothly
3. **Media Queries**: Adjusts layout at key breakpoints
4. **Flexbox**: Automatically adjusts spacing and alignment
5. **Max-Width Constraints**: Prevents content from becoming too wide

### Testing

To test responsiveness:
1. Open browser DevTools (F12)
2. Use device toolbar (Ctrl+Shift+M / Cmd+Shift+M)
3. Test different screen sizes
4. Resize browser window manually

The site will automatically adjust images, sidebar width, padding, and font sizes based on the viewport size.


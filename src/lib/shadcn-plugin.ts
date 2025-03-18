import plugin from 'tailwindcss/plugin'

export const shadcnPlugin = plugin(
  // Add variants
  function ({ addVariant }) {
    addVariant('data-[state=active]', '&[data-state=active]')
    addVariant('data-[state=open]', '&[data-state=open]')
    addVariant('data-[state=closed]', '&[data-state=closed]')
    addVariant('data-[state=on]', '&[data-state=on]')
    addVariant('data-[state=off]', '&[data-state=off]')
    addVariant('data-[state=checked]', '&[data-state=checked]')
    addVariant('data-[state=unchecked]', '&[data-state=unchecked]')
    addVariant('data-[state=indeterminate]', '&[data-state=indeterminate]')
    addVariant('data-[swipe=start]', '&[data-swipe=start]')
    addVariant('data-[swipe=end]', '&[data-swipe=end]')
    addVariant('data-[swipe=move]', '&[data-swipe=move]')
    addVariant('data-[swipe=cancel]', '&[data-swipe=cancel]')
    addVariant('data-[orientation=horizontal]', '&[data-orientation=horizontal]')
    addVariant('data-[orientation=vertical]', '&[data-orientation=vertical]')
  }
) 
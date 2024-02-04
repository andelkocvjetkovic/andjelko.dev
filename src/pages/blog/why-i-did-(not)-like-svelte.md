# Why I did (not) like Svelte

Things I liked about Svelte:

## How easy is to create a component
I'm coming from React, and I'm used to 
```tsx
const MyComponent = () => {
  return <div>My Component</div>
}

export default MyComponent
```
but in Svelte is even easier, just create a new file for example `MyComponent.svelte` and you have your component ready to use.
Then you can add html, css and/or typescript to it. It is just easy and I like it very much.




Things I did not like about Svelte:

## Props, rest props, event handlers

Take a look at this example of reusable button component:

```svelte
<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { type VariantProps } from 'class-variance-authority';
  import { buttonCva } from '$lib/utils/buttonCva';
  import { cn } from '$lib/utils/cn';

  interface $$Props extends HTMLButtonAttributes, VariantProps<typeof buttonCva> {}

  export let intent: $$Props['intent'] = 'primary';
  export let size: $$Props['size'] = 'medium';
  let className: $$Props['class'] = undefined;
  export { className as class };
</script>

<button class={cn(buttonCva({ intent, size, class: className }))} {...$$restProps} on:click>
  <slot />
</button>
```
The button component declares its props in $$Props interface, and that is nice.
But the problem comes with {...$$restProps} and on:click. It comes from nowhere, and it is not clear what it does.
Also if you want to add a new event handler for example on:mouseover, you have to add in 
```svelte
<button class={cn(buttonCva({ intent, size, class: className }))} {...$$restProps} on:click on:mouseover>
  <slot />
</button>
```
it is not included in $$Props interface neither in the $restProps, so you have to add it manually.
Again I come from React background and this seems very weird to me, but it could just be my preference but here is some black magic going under the hood.





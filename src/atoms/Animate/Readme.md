### Animate Example:

Animate is a component that will wrap its children in a new wrapper for each
animation that it's given. This allows for each wrapper to handle it's own animation, which avoids style property clashes.

You can 'undo' an animation by replacing the animation's name with "animate" in the animation string. This maintains that animation's wrapper node
and allows for the transition to go in reverse.

**Note: Animations default to 1s, except for the following:**
- `shake`: .5s

```jsx
    <Animate animations='shake rotate-left slideDown'>
      <strong>New Component Created!</strong><br /><small>Now go and write some code! -- <em>You fuccboi, you ;)</em></small>.
    </Animate>
```

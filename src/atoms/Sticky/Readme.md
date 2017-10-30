### Sticky Example:
This fun little component only exists to help developers out when they
want to use their local copy of Athenaum while working on another repo 
that uses it as a dependency.

Right now, something about `react-stickynode` makes everything explode
in unappetizing ways. A beautiful hacky workaround is to change all 
`import Sticky from 'react-stickynode'` to `import Sticky from 'atoms/Sticky'`

```jsx
    <Sticky>
      This does very little at all. 
    </Sticky>
```

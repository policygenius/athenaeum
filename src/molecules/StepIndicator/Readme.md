### StepIndicator Example:

```jsx
    <div style={{ width: '100%' }}>
      <StepIndicator
        steps={[
          {
            text: 'Basics',
            path: '/basics',
            currentStepActive: false,
            clickable: true,
            nextStepAccessible: true
          },
          {
            text: 'Health',
            path: '/health_profile',
            currentStepActive: false,
            clickable: true,
            nextStepAccessible: true
          },
          {
            text: 'Lifestyle',
            path: '/lifestyle',
            currentStepActive: true,
            clickable: true,
            nextStepAccessible: false
          },
          {
            text: 'Pick a policy',
            path: 'comparison',
            currentStepActive: false,
            clickable: false,
            nextStepAccessible: false
          }
        ]}
        navigateToPath={() => alert('navigating to path...')}
      />
    </div>
```

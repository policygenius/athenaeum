Step Progress example:
```
const styles = require('assets/stylesheets/utilities/styleguide.scss');
  <div className={styles['step-progress-wrapper']}>
    <StepProgress
      data={[
        {active: false, inactive: false, icon: 'icon-calculator', label: 'Aenean', link: '#'},
        {active: false, inactive: false, icon: 'icon-health', label: 'Phasellus', link: '#'},
        {active: true, inactive: false, icon: 'icon-application', label: 'Curabitur', link: '#'},
        {active: false, inactive: true, icon: 'icon-quotes', label: 'Etiam', link: '#'}
      ]}
    />
  </div>
```

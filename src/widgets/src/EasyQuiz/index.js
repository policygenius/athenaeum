import React from 'react';

import Text from 'atoms/Text';
import Button from 'atoms/Button';

import styles from './easy_quiz.module.scss';

const EasyQuiz = () => (
  <div className={styles['container']}>
    <Text>Easy Quiz</Text>
    <Text>We're using RCL Components here</Text>
    <Button onClick={() => alert('sweet!')}>Click Me</Button>
  </div>
);

export default EasyQuiz;

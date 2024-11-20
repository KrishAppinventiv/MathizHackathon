export interface Question {
  id: string;
  question: string;
  image?: {
    uri: string;
    alt: string;
  };
  hint: string;
  options: {
    id: string;
    text: string;
    isCorrect: boolean;
  };
  answerDescription: string;
}

export const StatQuestions: Question[] = [
  {
    id: 'id:question/0',
    question:
      'If variance of first n natural number is 10 and variance of first m even natural number is 16, m+n is equal to',
    options: [
      {id: 'id:option/0', text: '15', isCorrect: false},
      {id: 'id:option/1', text: '20', isCorrect: false},
      {id: 'id:option/2', text: '18', isCorrect: true},
      {id: 'id:option/3', text: '17', isCorrect: false},
    ],
  },

  {
    id: 'id:question/1',
    question:
      'The runs scored by a batsman in 5 ODIs are 31,97,112, 63, and 12. The standard deviation is',
    options: [
      {id: 'id:option/0', text: '25.79', isCorrect: true},
      {id: 'id:option/1', text: '20', isCorrect: false},
      {id: 'id:option/2', text: '18', isCorrect: false},
      {id: 'id:option/3', text: '17', isCorrect: false},
    ],
  },

  {
    id: 'id:question/2',
    question:
      'Find the mode of the call received on 7 consecutive day 11,13,13,17,19,23,25',
    options: [
      {id: 'id:option/0', text: '11', isCorrect: false},
      {id: 'id:option/1', text: '13', isCorrect: true},
      {id: 'id:option/2', text: '17', isCorrect: false},
      {id: 'id:option/3', text: '23', isCorrect: false},
    ],
  },

  {
    id: 'id:question/3',
    question:
      'Find the median of the call received on 7 consecutive days 11,13, 17, 13, 23,25,19',
    options: [
      {id: 'id:option/0', text: '13', isCorrect: false},
      {id: 'id:option/1', text: '23', isCorrect: false},
      {id: 'id:option/2', text: '25', isCorrect: false},
      {id: 'id:option/3', text: '17', isCorrect: true},
    ],
  },

  {
    id: 'id:question/4',
    question:
      'Find the mode and median of the 9 consecutive number 12,7,8,14,21,23,27,7,11',
    options: [
      {id: 'id:option/0', text: '12,9', isCorrect: false},
      {id: 'id:option/1', text: '7,9', isCorrect: false},
      {id: 'id:option/2', text: '7,12', isCorrect: true},
      {id: 'id:option/3', text: '11,9', isCorrect: false},
    ],
  },

  {
    id: 'id:question/5',
    question:
      'When the Mean of a number is 18, what is the Mean of the sampling distribution?',
    options: [
      {id: 'id:option/0', text: '21', isCorrect: true},
      {id: 'id:option/1', text: '28', isCorrect: false},
      {id: 'id:option/2', text: '27', isCorrect: false},
      {id: 'id:option/3', text: '23', isCorrect: false},
    ],
  },

  {
    id: 'id:question/6',
    question:
      'The runs scored by a batsman in 5 ODIs are 31,97,112, 63, and 12. The standard deviation is',
    options: [
      {id: 'id:option/0', text: '25.79', isCorrect: false},
      {id: 'id:option/1', text: '20', isCorrect: true},
      {id: 'id:option/2', text: '18', isCorrect: false},
      {id: 'id:option/3', text: '17', isCorrect: false},
    ],
  },

  {
    id: 'id:question/7',
    question:
      'If the probability of hitting an object is 0.8, find the variance',
    options: [
      {id: 'id:option/0', text: '0.18', isCorrect: false},
      {id: 'id:option/1', text: '0.16', isCorrect: true},
      {id: 'id:option/2', text: '0.14', isCorrect: false},
      {id: 'id:option/3', text: '0.12', isCorrect: false},
    ],
  },

  {
    id: 'id:question/8',
    question: 'Find the mean of tossing 4 coins',
    options: [
      {id: 'id:option/0', text: '1', isCorrect: false},
      {id: 'id:option/1', text: '2', isCorrect: true},
      {id: 'id:option/2', text: '3', isCorrect: false},
      {id: 'id:option/3', text: '4', isCorrect: false},
    ],
  },

  {
    id: 'id:question/9',
    question: "Variance of a constant 'x' is",
    options: [
      {id: 'id:option/0', text: '0', isCorrect: true},
      {id: 'id:option/1', text: 'x/2', isCorrect: false},
      {id: 'id:option/2', text: 'x', isCorrect: false},
      {id: 'id:option/3', text: '1', isCorrect: false},
    ],
  },
];


export const IntegerQuestions: Question[] = [
  {
    id: 'id:question/0',
    question:
      'The runs scored by a batsman in 5 ODIs are 31,97,112, 63, and 12. The standard deviation is',
    options: [
      {id: 'id:option/0', text: '24.79', isCorrect: false},
      {id: 'id:option/1', text: '23.79', isCorrect: false},
      {id: 'id:option/2', text: '25.79', isCorrect: true},
      {id: 'id:option/3', text: '26.79', isCorrect: false},
    ],
  },

  {
    id: 'id:question/1',
    question:
      'Find the mode of the call received on 7 consecutive day 11,13,13,17,19,23,25',
    options: [
      {id: 'id:option/0', text: '11', isCorrect: false},
      {id: 'id:option/1', text: '13', isCorrect: true},
      {id: 'id:option/2', text: '17', isCorrect: false},
      {id: 'id:option/3', text: '23', isCorrect: false},
    ],
  },

  {
    id: 'id:question/2',
    question:
      'Find the mode of the call received on 7 consecutive day 11,13,13,17,19,23,25',
    options: [
      {id: 'id:option/0', text: '11', isCorrect: false},
      {id: 'id:option/1', text: '13', isCorrect: true},
      {id: 'id:option/2', text: '17', isCorrect: false},
      {id: 'id:option/3', text: '23', isCorrect: false},
    ],
  },

  {
    id: 'id:question/3',
    question:
      'Find the median of the call received on 7 consecutive days 11,13, 17, 13, 23,25,19',
    options: [
      {id: 'id:option/0', text: '13', isCorrect: false},
      {id: 'id:option/1', text: '23', isCorrect: false},
      {id: 'id:option/2', text: '25', isCorrect: false},
      {id: 'id:option/3', text: '17', isCorrect: true},
    ],
  },

  {
    id: 'id:question/4',
    question:
      'Find the mode and median of the 9 consecutive number 12,7,8,14,21,23,27,7,11',
    options: [
      {id: 'id:option/0', text: '12,9', isCorrect: false},
      {id: 'id:option/1', text: '7,9', isCorrect: false},
      {id: 'id:option/2', text: '7,12', isCorrect: true},
      {id: 'id:option/3', text: '11,9', isCorrect: false},
    ],
  },

  {
    id: 'id:question/5',
    question:
      'When the Mean of a number is 18, what is the Mean of the sampling distribution?',
    options: [
      {id: 'id:option/0', text: '21', isCorrect: true},
      {id: 'id:option/1', text: '28', isCorrect: false},
      {id: 'id:option/2', text: '27', isCorrect: false},
      {id: 'id:option/3', text: '23', isCorrect: false},
    ],
  },

  {
    id: 'id:question/6',
    question:
      'The runs scored by a batsman in 5 ODIs are 31,97,112, 63, and 12. The standard deviation is',
    options: [
      {id: 'id:option/0', text: '25.79', isCorrect: false},
      {id: 'id:option/1', text: '20', isCorrect: true},
      {id: 'id:option/2', text: '18', isCorrect: false},
      {id: 'id:option/3', text: '17', isCorrect: false},
    ],
  },

  {
    id: 'id:question/7',
    question:
      'If the probability of hitting an object is 0.8, find the variance',
    options: [
      {id: 'id:option/0', text: '0.18', isCorrect: false},
      {id: 'id:option/1', text: '0.16', isCorrect: true},
      {id: 'id:option/2', text: '0.14', isCorrect: false},
      {id: 'id:option/3', text: '0.12', isCorrect: false},
    ],
  },

  {
    id: 'id:question/8',
    question: 'Find the mean of tossing 4 coins',
    options: [
      {id: 'id:option/0', text: '1', isCorrect: false},
      {id: 'id:option/1', text: '2', isCorrect: true},
      {id: 'id:option/2', text: '3', isCorrect: false},
      {id: 'id:option/3', text: '4', isCorrect: false},
    ],
  },

  {
    id: 'id:question/9',
    question: "Variance of a constant 'x' is",
    options: [
      {id: 'id:option/0', text: '0', isCorrect: true},
      {id: 'id:option/1', text: 'x/2', isCorrect: false},
      {id: 'id:option/2', text: 'x', isCorrect: false},
      {id: 'id:option/3', text: '1', isCorrect: false},
    ],
  },
];
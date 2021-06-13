/* eslint-disable no-useless-escape */
import { ICastingQuestions, ISurveyQuestion } from '../types/types';

const someoneElseQuestions: ISurveyQuestion[] = [
  {
    label: 'What is your relationship with the nominee?', // Field label
    name: 'relationship', // Field name
    type: 'text', // determines the option component type
    placeholder: 'relationship with the nominee', // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `What's your nominee's name.`,
    name: 'name', // Field name
    type: 'text', // determines the option component type
    placeholder: `nominee's name`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `What's your nominee's age`,
    name: 'age', // Field name
    type: 'number', // determines the option component type
    placeholder: `nominee's age`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `What's your nominee's location`,
    name: 'location', // Field name
    type: 'text', // determines the option component type
    placeholder: `nominee's location`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `What's your nominee's email address`,
    name: 'email', // Field name
    type: 'email', // determines the option component type
    placeholder: `nominee's email address`, // Placeholder
    validation: (value: string): boolean => {
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (value.match(regexEmail)) return true;
      return false;
    },
  },
  {
    label: `What's you nominee's phone number.`,
    name: 'phone', // Field name
    type: 'phone', // determines the option component type
    placeholder: `nominee's phone number`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `What is your reason for nominating them for Spotlight You? (Please provide as much detail as possible).`,
    name: 'detail', // Field name
    type: 'multiline', // determines the option component type
    placeholder: `give reason`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `Which of the following best represents the area in which your nominee has impacted Lagos?`,
    name: 'detail', // Field name
    type: 'select', // determines the option component type
    placeholder: `impact area`, // Placeholder
    validation: (value: string): boolean => value !== '',
    options: [
      {
        label: 'Sports',
      },
      {
        label: 'Arts',
      },
      {
        label: 'Music',
      },
      {
        label: 'Film',
      },
      {
        label: 'Charity',
      },
      {
        label: 'Culture',
      },
      {
        label: 'Theatre',
      },
      {
        label: 'Community',
      },
      {
        label: 'Other (please specify).',
      },
    ],
  },
  {
    label: `How has the nominee made the lives of people in Lagos better?`,
    name: 'better', // Field name
    type: 'text', // determines the option component type
    placeholder: `lives better`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `How has the nominee made Lagos proud?`,
    name: 'proud', // Field name
    type: 'text', // determines the option component type
    placeholder: `made Lagos proud?`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `Please list the nominee’s social handles here if you have them? (to aid in casting research).`,
    name: 'handles', // Field name
    type: 'text', // determines the option component type
    placeholder: `social handles`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
];

const selfQuestions: ISurveyQuestion[] = [
  {
    label: 'Tell us your name',
    name: 'impact',
    type: 'text',
    placeholder: 'full name',
    validation: (value: string): boolean => value !== '',
  },
  {
    label: 'Tell us your age.',
    name: 'age',
    type: 'number',
    placeholder: 'age',
    validation: (value: string): boolean => value !== '',
  },
  {
    label: 'Tell us your location.',
    name: 'location',
    type: 'text',
    placeholder: 'location',
    validation: (value: string): boolean => value !== '',
  },
  {
    label: 'Tell us your email address.',
    name: 'email',
    type: 'text',
    placeholder: 'email',
    validation: (value: string): boolean => {
      const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (value.match(regexEmail)) return true;
      return false;
    },
  },
  {
    label: 'Tell us your phone number',
    name: 'phone',
    type: 'phone',
    placeholder: 'phone number',
    validation: (value: string): boolean => value !== '',
  },
  {
    label: 'Do you work in the Lagos (Please provide details)?',
    name: 'work',
    type: 'multiline',
    placeholder: 'work location',
    validation: (value: string): boolean => value !== '',
  },
  {
    label: 'What is your reason for nominating yourself for Spotlight You?',
    name: 'reason',
    type: 'text',
    placeholder: 'give reason',
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `Which of the following best represents the area in which you have impacted Lagos?`,
    name: 'detail', // Field name
    type: 'select', // determines the option component type
    placeholder: `give reason`, // Placeholder
    validation: (value: string): boolean => value !== '',
    options: [
      {
        label: 'Sports',
      },
      {
        label: 'Arts',
      },
      {
        label: 'Music',
      },
      {
        label: 'Film',
      },
      {
        label: 'Charity',
      },
      {
        label: 'Culture',
      },
      {
        label: 'Theatre',
      },
      {
        label: 'Community',
      },
      {
        label: 'Other (please specify).',
      },
    ],
  },
  {
    label: `What do you do to make the lives of the people of Lagos better?`,
    name: 'better', // Field name
    type: 'text', // determines the option component type
    placeholder: `lives of people in Lagos better`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `What do you do to make Lagos proud?`,
    name: 'proud', // Field name
    type: 'text', // determines the option component type
    placeholder: `have you made Lagos proud?`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `Please list your social media handles below (to aid in casting research).`,
    name: 'handles', // Field name
    type: 'text', // determines the option component type
    placeholder: `social handles`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `Are you comfortable for someone from Wazobia Technologies (who will be filming/editing the content) to reach out to you to discuss this nomination further?`,
    name: 'handles', // Field name
    type: 'radio', // determines the option component type
    placeholder: `social handles`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
  {
    label: `Please Tick Here to Confirm Your Agreement.`,
    name: 'Agreement', // Field name
    type: 'checkbox', // determines the option component type
    placeholder: `Agreement`, // Placeholder
    validation: (value: string): boolean => value !== '',
  },
];

export const questions: ICastingQuestions[] = [
  {
    label: 'Are you nominating yourself or someone else?',
    type: 'select',
    placeholder: 'nominate',
    options: [
      {
        label: 'Myself',
        value: 'self',
      },
      {
        label: 'Someone else',
        value: 'someoneElse',
      },
    ],
    questionsOnValue: (value: string): ISurveyQuestion[] => {
      if (value === 'self') {
        return selfQuestions;
      }
      return someoneElseQuestions;
    },
  },
];

interface IOption {
  label: string;
  value?: string;
}

// interface IOptionLabel {
//   label: string;
// }

export interface ICurrentQuestion {
  label: string;
  options?: IOption[];
  placeholder: string;
  type: string;
  name?: string;
  validation?: (string: string) => boolean;
  questionsOnValue?: (string: string) => ISurveyQuestion[];
}

export interface IAnswer extends ICurrentQuestion{
  answer: string | boolean;
}

export interface ISurveyQuestion {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  validation: (string: string) => boolean;
  options?: IOption[]
}

export interface ICastingQuestions {
  label: string;
  type: string;
  options: IOption[];
  questionsOnValue: (string: string) => ISurveyQuestion[];
  placeholder: string;
}
export interface FAQ {
    question: string;
    answer: string;
  }
  
  export interface Category {
    name: string;
    faqs: FAQ[];
  }
  
import { CoverLetterTypes } from "../../types/coverLetter.types";

export const useApi = () => {
  const apiGrammarUrl = process.env.REACT_APP_API_GRAMMAR_URL;
  const apiCVUrl = process.env.REACT_APP_API_CV_URL;
  if (!apiGrammarUrl || !apiCVUrl) {
    throw new Error('API URL is not defined');
  }

  const correctGrammar = async (prompt: string): Promise<string | undefined> => {
    const response = await fetch(apiGrammarUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    return data.text?.replace('\n', '');
  };

  const generatedCoverLetter  = async (prompt: CoverLetterTypes): Promise<string | undefined> => {
    const response = await fetch(apiCVUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    console.log('data', data.text)
    return data.text
  }

  return {
    correctGrammar,
    generatedCoverLetter
  } as const;
};



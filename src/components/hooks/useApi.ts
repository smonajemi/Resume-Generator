import { ChatBoxTypes } from "../../types/chatBox.types";
import { CoverLetterTypes } from "../../types/coverLetter.types";


export const useApi = () => {
  const apiGrammarUrl = process.env.REACT_APP_API_GRAMMAR_URL;
  const apiCVUrl = process.env.REACT_APP_API_CV_URL;
  const apiChatBoxUrl = process.env.REACT_APP_CHAT_BOX
  
  if (!apiGrammarUrl || !apiCVUrl || !apiChatBoxUrl) {
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
    return prompt ? data.text?.replace('\n', '') : null
  };

  const generatedCoverLetter  = async (prompt: CoverLetterTypes): Promise<string | undefined> => {
    const response = await fetch(apiCVUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...prompt })
    });
    const data = await response.json();
    return data.text
  }

  const ChatBox = async (prompt: ChatBoxTypes) : Promise<string | undefined> => {
    const response = await fetch(apiChatBoxUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...prompt })
    });
   
    const data = await response.json()
    return data.text as any
  }
  return {
    correctGrammar,
    generatedCoverLetter,
    ChatBox
  } as const;
};



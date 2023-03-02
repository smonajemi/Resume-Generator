export const useApi = () => {
  const apiUrl = process.env.REACT_APP_API_KEY;

  if (!apiUrl) {
    throw new Error('API URL is not defined');
  }

  const correctGrammar = async (prompt: string): Promise<string | undefined> => {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json();
    return data.text?.replace('\n', '');
  };

  return {
    correctGrammar,
  } as const;
};

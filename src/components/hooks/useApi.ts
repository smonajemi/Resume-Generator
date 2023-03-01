export const useApi = () => {
  const correctGrammar = async (prompt: string) => {
    const response = await fetch('https://rich-erin-magpie-wig.cyclic.app/api/correct-grammar', {
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
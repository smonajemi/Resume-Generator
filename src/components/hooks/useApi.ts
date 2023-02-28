export const useApi = () => {
    const correctGrammar = async (prompt: string) => {
      const response = await fetch('http://localhost:9000/api/correct-grammar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });
      const data = await response.json();
      return data.text;
    };
  
    return {
      correctGrammar,
    } as const;
  };
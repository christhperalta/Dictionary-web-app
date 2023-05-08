export const fetchWords = async (words) => {
  try {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`
    );

    if (!response.ok) alert("Definition not found");
    const data = await response.json();
    const meanings = data?.map((item) => {
      return {
        word: item.word,
        phonetic: item.phonetic,
        nDefinition: item.meanings[0],
        vDefinition: item.meanings[1],
        url: item.sourceUrls[0],
      };
    });
    return meanings[0];
  } catch (error) {
    console.error(`Definition not found`);
  }
};

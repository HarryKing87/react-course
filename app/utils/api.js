export function fetchPopularRepos(language){
  // URL encoding serves the purpose of replacing these non-conforming characters with a % symbol followed by two hexadecimal digits that represent the ASCII code of the character. Characters must be encoded if: They have no corresponding character within the standard ASCII character set.
  const endpoint = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);

  return fetch(endpoint)
  .then( res => res.json())
  .then( data => {
    if(!data.items){ // part of the data given by github API 
      throw new Error(data.message);
    }

    return data.items
  })
}
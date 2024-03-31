// Nomenclatura de variáveis

const userCategories = [
  {
    title: 'User',
    followers: 5
  },
  {
    title: 'Friendly',
    followers: 50,
  },
  {
    title: 'Famous',
    followers: 500,
  },
  {
    title: 'Super Star',
    followers: 1000,
  },
]

export default async function getGitHubUserData(req, res) {
  const username = String(req.query.username)

  if (!username) {
    return res.status(400).json({
      message: `Please provide an username to search on the github API`
    })
  }

  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response.status === 404) {
    return res.status(400).json({
      message: `User with username "${username}" not found`
    })
  }

  const userData = await response.json()
  
  const orderedUserCategories = userCategories.sort((a, b) =>  b.followers - a.followers); 
  
  const userCategory = orderedUserCategories.find(category => userData.followers > category.followers)
  
  const result = {
    username,
    category: userCategory.title
  }

  return result
}

getGitHubUserData({ query: {
  username: 'josepholiveira'
}}, {})
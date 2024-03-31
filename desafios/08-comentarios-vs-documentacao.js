async function registerNewUser(data) {
  const { email, name, avatar } = data

  if (!avatar) return { error: 'avatar is required' }
  if(!name) return { error: 'name is required' }

  const userAlreadyExist = getUserByEmail(email)

  if (userAlreadyExist) {
    return { error: 'email already used' }
  }

  // Essa função realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  // Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
  const jpgAvatar = convertImageToJPG(avatar)

  const newUser = await createUser({ email, name, avatar: jpgAvatar })

  return { newUser }
}
interface IUser {
  name: string
  email: string
  password: string
}

interface UpdateUserRouteBody {
  body: IUser
  params: {
    id: number
  }
}

const updateUserRoute = ({ body, params: { id } }: UpdateUserRouteBody) => {
  const { name, email, password } = body
  updateUserController({ data: { name, email, password }, params: { id } })
}

interface UpdateUserControllerBody {
  data: IUser
  params: {
    id: number
  }
}

function updateUserController({ data, params: { id } }: UpdateUserControllerBody) {
  const { name, email, password } = data
  userRepository.update({ data: { name, email, password }, params: { id } })
}

interface UpdateUserBody {
  data: IUser
  params: {
    id: number
  }
}

const userRepository = {
  update: ({ data, params }: UpdateUserBody) => {},
}
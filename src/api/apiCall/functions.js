import api from '../../api/api'
import { customContext } from '@/store/ContextProvider'
import { useRouter } from 'next/navigation'

export const fetchPosts = async (pageNumber, order, setPageNumber, setPosts, setTotalPages) => {
  const router = useRouter()
  const { logout } = customContext()

  try {
    const response = await api.get(
      `/publication/all?pageNumber=${pageNumber}&postPerPage=${6}&orderCreate=${order}`
    )

    setPosts(response.data.publications)
    setTotalPages(response.data.totalPages)
  } catch (error) {
    console.error('Error al obtener las publicaciones:', error)
    await logout()
    router.push('/login')
  }
}

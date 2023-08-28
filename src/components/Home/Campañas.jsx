import React, { useState, useEffect } from 'react'
import Pagination2 from '../Pagination2/Pagination2'
import api from '@/api/api'

export default function Campañas() {
  const [pageNumber, setPageNumber] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [news, setNews] = useState([])

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await api.get(`/news?pageNumber=${pageNumber}&newsPerPage=6`)

        setNews(response.data.news)
        // console.log(response.data.news)
        setTotalPages(response.data.totalPages)
      } catch (error) {
        console.error('Error al obtener las noticias:', error)
      }
    }

    fetchNews()
  }, [pageNumber])

  const handlePageChange = (pageNumber) => {
    setPageNumber(pageNumber)
  }

  return (
    <div className="w-full h-max flex flex-wrap gap-6 md:grid md:grid-cols-3 2xl:grid-cols-3 lg:w-[70%]">
      {news.map((e) => (
        <div
          key={e.id}
          className="w-[100%] max-w-[300px] font-roboto bg-[#d9d9d9] p-4  rounded-md mb-6"
        >
          <div className="w-full h-[150px]">
            <img src={e.image[0].secure_url} alt="auto" className="object-cover w-full h-full" />
          </div>
          <span className="text-[#727272] mt-4">{e.createdAt}</span>
          <h1 className="font-bold text-2xl my-4">{e.title}</h1>
          <p>{e.description}</p>
        </div>
      ))}

      <div className="w-full md:col-span-3 md:row-start-3 flex justify-center mt-4 md:mt-0">
        <Pagination2
          pageNumber={pageNumber}
          totalPages={totalPages}
          changePage={handlePageChange}
        />
      </div>
    </div>
  )
}

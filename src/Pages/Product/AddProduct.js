import React from 'react'
import { Link } from 'react-router-dom'
import { BiLeftArrowAlt } from 'react-icons/bi'

  
const AddProduct = () => {
  return (
    <div className='container py-8'>
        <div className='flex justify-start'>
          <Link to='/'>
            <BiLeftArrowAlt/>
          </Link>
        </div>
        <div className='flex justify-center'>
            <div className='col'>
              <form action='/'>
                  <div className="flex flex-col gap-2 mb-2">
                    <label htmlFor="name">Nama Produk</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nama Produk"
                      className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
                    />
                    <div className="flex flex-col gap-2 mb-2">
                      <label htmlFor="price">Harga Produk</label>
                      <input
                        type="text"
                        name="price"
                        id="price"
                        placeholder="Rp 0,00"
                        className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
                      />
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
                      <label htmlFor="category">Pilih Kategori</label>
                      <input
                        type="text"
                        name="category"
                        id="category"
                        placeholder="Pilih Kategori"
                        className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
                      />
                    </div>
                    <div className="flex flex-col gap-2 mb-2">
                      <label htmlFor="description">Deskripsi</label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        placeholder="Contoh: Jalan Ikan Hiu 33"
                        className="px-4 py-3 border border-solid border-gray-300 rounded-2xl focus:outline-purple4"
                      />
                    </div>
                    <div className="flex gap-2">
                    <Link to="/productpreview">
                      <button className="bg-[#7126B5] w-full py-3 mt-2 rounded-2xl font-medium text-sm text-white">Preview</button>
                    </Link>
                    <Link to="/productlist">
                      <button className="bg-[#7126B5] w-full py-3 mt-2 rounded-2xl font-medium text-sm text-white">Terbitkan</button>
                    </Link>
                    </div>
                  </div>
                  
              </form>
            </div>
        </div>
    </div>
    
  )
}

export default AddProduct
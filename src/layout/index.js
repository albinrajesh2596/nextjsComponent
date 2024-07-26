import axios from 'axios';
import React, { useEffect, useState } from 'react'

export const GraphHeader = () => {
    const [data, setData] = useState({})

    const getHeaderApi = 'https://mocki.io/v1/432b5041-130d-4bb8-9770-2a5c50188898'
    
    useEffect(() => {
      if (getHeaderApi) {
        axios.get(getHeaderApi)
          .then(response => {
            setData(response.data);
          })
          .catch(error => {
            console.error('Error fetching table data:', error);
          });
      }
    }, [getHeaderApi]);
  
    return (
      <main>
        <div className='bg-gray-700 text-white p-4'>
                  <div className='container mx-auto flex justify-around items-center'>
                      <div>
                          <label>Site : </label>
                          <span className="pb-1 border-b-2 border-white">{data.site}</span>
                      </div>
                      <div>
                          <label>Resource : </label>
                          <span className="pb-1 border-b-2 border-white">{data.resource}</span>
                      </div>
                      <div>
                          <label>Start Date : </label>
                          <span className="pb-1 border-b-2 border-white">{data.startDate}</span>
                      </div>
                      <div>
                          <label>End Date : </label>
                          <span className="pb-1 border-b-2 border-white">{data.endDate}</span>
                      </div>
                  </div>
              </div>
      </main>
    )
}

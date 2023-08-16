import { Box, Grid, Image, Input, Spinner, Text, useColorModeValue } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import FilterCountry from './FilterCountry'

const AllCountries = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [search, setSearch] = useState('')
    const [inform, setInform] = useState([])

  const [api, setApi] = useState("https://restcountries.com/v3.1/all")
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const response = await axios.get(api);
        setData(response.data);
        setInform(response.data)
        setLoading(false)
      } 
      catch (error) {
        setLoading(false)
        console.error(setError.message);
      }
    };

    fetchData();
  }, [api]);
  const filter = (e) =>{
    setInform(data.filter(item => item.name.common.toLowerCase().includes(e.target.value)))
  }


  return (
    <Box w={'100%'} h={'100%'} pb={'10px'} bg={useColorModeValue('blue.200', 'black.200')}>
      <Box w={{base: '90%', md: '90%', lg: '60%', xl: '90%'}} m={'auto'}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Input color={'#000'} onChange={filter} className='inp'  mt={'20px'} bg={'#fff'} type='search' placeholder='search country....' w={{xl: '600px', base: '90%', lg: '400px', md: '90%'}} />
          </Box>
        <Box>
          <FilterCountry setApi={setApi}  />
        </Box>
        </Box>
        <Box pt={'50px'} display={'flex'}  justifyContent={{md:'space-between', base: 'center'}} alignItems={'flex-start'} flexWrap={'wrap'} gap={'2rem'}>

                {loading && !error && <Spinner  size={'xl'} />}
                {error && !loading && <Text>{error}</Text>}
                {!loading && inform == '' && <Text fontSize={'30px'} textAlign={'center'}>There is not any country</Text>}
          {inform &&
            inform.map((item) =>  {
              
              return(
                
              <Box w={'250px'} padding={'20px'} bg={'hsl(209,23%,22%)'} color={'#fff'}>
                <Box>
                  <Image h={'130px'} w={'100%'} src={item.flags.png}></Image>
                </Box>

                <Box pt={'10px'}>
                  <Text>{item.name.common}</Text>
                  <Text>Poppulation {item.population}</Text>
                  <Text>Region: {item.region}</Text>
                  <Text>Capital: {item.capital}</Text>
                </Box>
          </Box>

              )
            })
          }
      </Box>
      </Box>
    </Box>
  )
}

export default AllCountries

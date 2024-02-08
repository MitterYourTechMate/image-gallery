import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"
import {Card, CardMedia, Grid, TextField} from "@mui/material"

function App() {

  let original_data = [
    {
      title:"Cat",
      image:"https://cdn.midjourney.com/bfb05879-0ac1-4eff-981e-8ccfa55312e6/0_3.webp"
    },
    {
      title:"Dog",
      image:"https://cdn.midjourney.com/515f96f6-ed27-436c-a125-f6894976907a/0_3.webp"
    },
    {
      title:"Spiderman",
      image:"https://cdn.midjourney.com/6f195c51-d78a-4252-969f-50176b8a10e5/0_2.webp"
    },
    {
      title:"Incredible Hulk",
      image:"https://cdn.midjourney.com/7e7a7552-20f9-41e9-a010-938650141a60/0_3.webp"
    },
    {
      title:"Zombie",
      image:"https://cdn.midjourney.com/2c6fdcbf-7833-4bd3-9a50-ddac5febf4bc/0_1.webp"
    },
    {
      title:"Tarzan",
      image:"https://cdn.midjourney.com/87fda811-61ca-463b-a115-26dd9def36ad/0_3.webp"
    },
    {
      title:"Donald Duck",
      image:"https://cdn.midjourney.com/20faad45-7174-4f2e-b183-ec9242db5471/0_0.webp"
    },
    {
      title:"Lion",
      image:"https://cdn.midjourney.com/5605869b-e037-44ef-ac85-895fef6abcb7/0_2.webp"
    },
    {
      title:"Giraffe",
      image:"https://cdn.midjourney.com/04b9fbc3-31aa-4dc5-bbcd-39ce819ad74d/0_0.webp"
    }

  ]

  const [data, setData] = useState(original_data)
  const [search, setSearch] = useState("")

  useEffect(() => {

    let data_rev = original_data.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    setData(data_rev)

  },[search])

  return (
    <div style={{textAlign:"center", margin:"2%"}}>
      <TextField id="standard-basic" label="Search Your Image" variant="standard" sx={{width:"300px", height:"20px", marginBottom:"5%"}} onChange={(event) => setSearch(event.target.value)}/>
      <Grid container spacing={2}>
        {data.map((item) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={4}>
            <Card>
              <CardMedia
                sx={{height:{lg:360, md:500, sm:700, xs:360}}}
                image={item.image}
              >
              </CardMedia>
            </Card>
            <h1>{item.title}</h1>
          </Grid>
          )
        })}
      
        </Grid>
    </div>
  );
}

export default App;

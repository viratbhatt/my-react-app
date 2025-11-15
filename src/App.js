import axios from 'axios';
import './App.css';
import leaf from './leaf.svg';
import {useEffect, useState} from 'react';
import { Button, Text, 
Card, StackLayout, FlexItem, FlexLayout, CompactPaginator, Pagination, Spinner } from '@salt-ds/core';
function App() {
  const [data, setData] = useState(null);
  const [image, setImage] = useState({});
  const [offset, setOffset] = useState(1);

  const typeColors = {
    "Normal":   "#A8A77A",
    "Fire":     "#EE8130",
    "Water":    "#6390F0",
    "Electric": "#F7D02C",
    "Grass":    "#7AC74C",
    "Ice":      "#96D9D6",
    "Fighting": "#C22E28",
    "Poison":   "#A33EA1",
    "Ground":   "#E2BF65",
    "Flying":   "#A98FF3",
    "Psychic":  "#F95587",
    "Bug":      "#A6B91A",
    "Rock":     "#B6A136",
    "Ghost":    "#735797",
    "Dragon":   "#6F35FC",
    "Dark":     "#705746",
    "Steel":    "#B7B7CE",
    "Fairy":    "#D685AD"
  }

  const fetchData = () => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${2}&offset=${(offset-1) *2}`)
      .then((response) => {
        console.log(response.status, response);
        response?.data?.results?.map(item => pokemonInfo(item.url, item.name));
        setData(response.data.results)
      })
      .catch((error) => console.log(error))
  };
  const [pokemonData, setPokemonData] = useState({});

  const pokemonInfo = (url, name) => {
    axios
      .get(url)
      .then((response) => {
        setPokemonData(prevState => ({
          ...prevState,
          [response.data.name]: {
            image: response.data.sprites.other.dream_world.front_default,
            height: response.data.height,
            weight: response.data.weight,
            types: response.data.types,
            stats: response.data.stats,
            id: response.data.id
          }
        }));
      })
      .catch((error) => console.log(error))
  }
  const typeColors2 = {
    "Normal":   "#8A8960", // Darkened from #A8A77A
    "Fire":     "#C66A28", // Darkened from #EE8130
    "Water":    "#4F73C0", // Darkened from #6390F0
    "Electric": "#C5A823", // Darkened from #F7D02C
    "Grass":    "#629F3D", // Darkened from #7AC74C
    "Ice":      "#78ADA8", // Darkened from #96D9D6
    "Fighting": "#9B2520", // Darkened from #C22E28
    "Poison":   "#823281", // Darkened from #A33EA1
    "Ground":   "#B49851", // Darkened from #E2BF65
    "Flying":   "#8773C2", // Darkened from #A98FF3
    "Psychic":  "#C7446C", // Darkened from #F95587
    "Bug":      "#849315", // Darkened from #A6B91A
    "Rock":     "#91812B", // Darkened from #B6A136
    "Ghost":    "#5C4579", // Darkened from #735797
    "Dragon":   "#582AC9", // Darkened from #6F35FC
    "Dark":     "#5A4538", // Darkened from #705746
    "Steel":    "#9292A5", // Darkened from #B7B7CE
    "Fairy":    "#AB6A8A"  // Darkened from #D685AD
};
  const typeBackgrounds = {
    "Normal": `linear-gradient(45deg, ${typeColors2.Normal} 25%, transparent 25%, transparent 75%, ${typeColors.Normal} 75%, ${typeColors.Normal})`,
    
    "Fire": `
  repeating-linear-gradient(
    0deg,
    rgba(255,255,255,0.08) 0 2px,
    transparent 2px 14px
  ),
  conic-gradient(from 10deg at 30% 70%, rgba(255,180,0,0.25) 0 30deg, transparent 30deg 360deg),
  conic-gradient(from -20deg at 70% 65%, rgba(255,120,0,0.25) 0 40deg, transparent 40deg 360deg),
  conic-gradient(from 40deg at 50% 80%, rgba(255,220,120,0.22) 0 25deg, transparent 25deg 360deg),
  radial-gradient(circle at 50% 80%, rgba(255,210,100,0.35) 0%, transparent 60%),
  linear-gradient(180deg, #ffcb7a 0%, #ff8c42 55%, #c43d1a 100%)
` ,
    
"Water": `radial-gradient(circle at 15% 15%, #3C5A9F 3px, transparent 3px),
          radial-gradient(circle at 25% 25%, #4F73C0 2px, transparent 2px),
          radial-gradient(circle at 35% 35%, #3C5A9F 4px, transparent 4px),
          radial-gradient(circle at 45% 45%, #4F73C0 3px, transparent 3px),
          radial-gradient(circle at 55% 55%, #3C5A9F 5px, transparent 5px),
          radial-gradient(circle at 65% 65%, #4F73C0 2px, transparent 2px),
          radial-gradient(circle at 75% 75%, #3C5A9F 4px, transparent 4px),
          radial-gradient(circle at 85% 85%, #4F73C0 3px, transparent 3px),
          radial-gradient(circle at 95% 95%, #3C5A9F 2px, transparent 2px),
          radial-gradient(circle at 10% 90%, #4F73C0 5px, transparent 5px),
          radial-gradient(circle at 20% 80%, #3C5A9F 3px, transparent 3px),
          radial-gradient(circle at 30% 70%, #4F73C0 4px, transparent 4px),
          radial-gradient(circle at 40% 60%, #3C5A9F 2px, transparent 2px),
          radial-gradient(circle at 50% 50%, #4F73C0 6px, transparent 6px),
          radial-gradient(circle at 60% 40%, #3C5A9F 3px, transparent 3px),
          radial-gradient(circle at 70% 30%, #4F73C0 4px, transparent 4px),
          radial-gradient(circle at 80% 20%, #3C5A9F 2px, transparent 2px),
          radial-gradient(circle at 90% 10%, #4F73C0 5px, transparent 5px),
          radial-gradient(circle at 5% 45%, #3C5A9F 3px, transparent 3px),
          radial-gradient(circle at 15% 55%, #4F73C0 4px, transparent 4px),
          radial-gradient(circle at 25% 65%, #3C5A9F 2px, transparent 2px),
          radial-gradient(circle at 35% 75%, #4F73C0 5px, transparent 5px),
          radial-gradient(circle at 45% 85%, #3C5A9F 3px, transparent 3px),
          radial-gradient(circle at 55% 95%, #4F73C0 4px, transparent 4px),
          radial-gradient(circle at 65% 5%, #3C5A9F 2px, transparent 2px),
          radial-gradient(circle at 75% 15%, #4F73C0 5px, transparent 5px),
          radial-gradient(circle at 85% 25%, #3C5A9F 3px, transparent 3px),
          radial-gradient(circle at 95% 35%, #4F73C0 4px, transparent 4px),
          radial-gradient(circle at 5% 95%, #3C5A9F 2px, transparent 2px),
          radial-gradient(circle at 95% 5%, #4F73C0 3px, transparent 3px),
          linear-gradient(180deg, #8BB0FF 0%, ${typeColors2.Water} 100%)`,
    
"Electric": `
  conic-gradient(from 30deg at 15% 25%, #FFD400 0deg 20deg, transparent 20deg 360deg),
  conic-gradient(from 110deg at 30% 40%, #FFEF7A 0deg 18deg, transparent 18deg 360deg),
  conic-gradient(from 190deg at 45% 65%, #FFC300 0deg 25deg, transparent 25deg 360deg),
  conic-gradient(from 250deg at 70% 30%, #FFF36A 0deg 22deg, transparent 22deg 360deg),
  conic-gradient(from 320deg at 85% 75%, #FFDB00 0deg 20deg, transparent 20deg 360deg),
  linear-gradient(180deg, #FFF36A 0%, #E0B800 100%)
`,
    
    "Grass": `radial-gradient(${leaf} at 20% 20%, #5A8F3A 4px, transparent 5px)`,
    
    "Ice": `repeating-linear-gradient(45deg, ${typeColors2.Ice}4D 0px, ${typeColors.Ice}4D 2px, transparent 2px, transparent 4px)`,
    
    "Fighting": `repeating-conic-gradient(${typeColors2.Fighting} 0deg 5deg, transparent 5deg 10deg)`,
    
"Poison": `
  conic-gradient(from 45deg at 10% 20%, #8B3AA8 0deg 20deg, transparent 20deg 360deg),
  conic-gradient(from 125deg at 25% 40%, #5B136B 0deg 20deg, transparent 20deg 360deg),
  conic-gradient(from 200deg at 40% 60%, #8B3AA8 0deg 15deg, transparent 15deg 360deg),
  conic-gradient(from 300deg at 70% 30%, #5B136B 0deg 25deg, transparent 25deg 360deg),
  conic-gradient(from 160deg at 85% 70%, #8B3AA8 0deg 20deg, transparent 20deg 360deg),
  linear-gradient(180deg, #4E004E 0%, #220022 100%)
`,
    
   "Ground": `
  /* cracked-earth overlay */
  repeating-linear-gradient(
    45deg,
    rgba(50, 30, 10, 0.2) 0px,
    rgba(50, 30, 10, 0.2) 1px,
    transparent 1px,
    transparent 10px
  ),
  repeating-linear-gradient(
    -45deg,
    rgba(50, 30, 10, 0.15) 0px,
    rgba(50, 30, 10, 0.15) 1px,
    transparent 1px,
    transparent 12px
  ),
  /* dirt clumps and color layers */
  conic-gradient(from 45deg at 20% 30%, #8c6239 0deg 25deg, transparent 25deg 360deg),
  conic-gradient(from 120deg at 60% 70%, #a9744f 0deg 20deg, transparent 20deg 360deg),
  conic-gradient(from 200deg at 80% 40%, #6b4a2e 0deg 30deg, transparent 30deg 360deg),
  radial-gradient(circle at 15% 25%, #c59a6a 6px, transparent 7px),
  radial-gradient(circle at 35% 65%, #9b724a 4px, transparent 5px),
  radial-gradient(circle at 75% 45%, #7d5738 5px, transparent 6px),
  linear-gradient(180deg, #e1b97d 0%, #8b5a33 50%, #5a341b 100%)
`,
    
    "Flying": `linear-gradient(45deg, transparent 48%, ${typeColors2.Flying}4D 48%, ${typeColors.Flying}4D 52%, transparent 52%)`,
    
    "Psychic": `
  /* concentric psychic sigils */
  repeating-radial-gradient(
    circle at 50% 50%,
    rgba(255,255,255,0.18) 0 3px,
    transparent 3px 12px
  ),
  conic-gradient(from 0.25turn at 35% 35%, ${typeColors2.Psychic} 0deg 45deg, transparent 45deg 360deg),
  conic-gradient(from 0.75turn at 70% 65%, ${typeColors2.Psychic} 0deg 60deg, transparent 60deg 360deg),
  radial-gradient(40% 40% at 60% 30%, ${typeColors2.Psychic} 0%, transparent 70%),
  linear-gradient(180deg, #f6a0e0 0%, #b350c9 52%, #712a8e 100%)
`,
    
    "Bug": `repeating-linear-gradient(45deg, ${typeColors2.Bug}4D 0px, ${typeColors2.Bug}4D 2px, transparent 2px, transparent 10px)`,
    
    "Rock": `
  radial-gradient(circle at 15% 25%, #9b8d7b 10px, transparent 11px),
  radial-gradient(circle at 35% 45%, #7e6f63 12px, transparent 13px),
  radial-gradient(circle at 55% 65%, #a79a89 14px, transparent 15px),
  radial-gradient(circle at 75% 35%, #8a7a6a 11px, transparent 12px),
  radial-gradient(circle at 25% 75%, #6f6258 13px, transparent 14px),
  radial-gradient(circle at 50% 50%, #b0a595 15px, transparent 16px),
  conic-gradient(from 45deg at 20% 30%, #8d7f6b 0deg 30deg, transparent 30deg 360deg),
  conic-gradient(from 120deg at 60% 70%, #b5aa97 0deg 25deg, transparent 25deg 360deg),
  conic-gradient(from 200deg at 80% 40%, #7a6e5d 0deg 20deg, transparent 20deg 360deg),
  linear-gradient(180deg, #cfc3a8 0%, #6f6255 100%)
`,
    
    "Ghost": `radial-gradient(circle at 30% 30%, ${typeColors2.Ghost} 0%, transparent 70%)`,
    
    "Dragon": `repeating-linear-gradient(45deg, ${typeColors2.Dragon}4D 0%, transparent 10%, transparent 50%)`,
    
    "Dark": `repeating-radial-gradient(circle at 50% 50%, rgba(112, 87, 70, 0.2) 0%, transparent 20%)`,
    
    "Steel": `linear-gradient(45deg, ${typeColors2.Steel}4D 25%, transparent 25%, transparent 75%, ${typeColors.Steel}4D 75%, ${typeColors.Steel}4D)`,
    
    "Fairy": `radial-gradient(circle at 30% 30%, ${typeColors2.Fairy} 0%, transparent 50%),
              radial-gradient(circle at 70% 70%, ${typeColors2.Fairy} 0%, transparent 50%)`
  };

  const capitalizeFirstLetter = (word) => {
    if (!word) return '';
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  useEffect(() => {
    setData(null);
    console.log("Offset changed:", offset, offset + 5);
    fetchData();
  }, [offset]);

  return (
    <div>
    <Card style={{ minHeight: "unset" }}>
       <StackLayout direction={"column"} align="center">
        
       <Button
          appearance="solid"
          sentiment='accented'
          onClick={()=>fetchData()}>Load Data</Button>
        {data ? (
          <FlexLayout direction={"row"} gap={2} wrap>
              
              {data.map((item, index) => (
                <FlexItem>
                <Card hoverable style={ {
                    position: "relative",
                    width: "350px",
                    height: "500px",
                    color: "black",
                    backgroundImage: typeBackgrounds[pokemonData[item?.name]?.types[0]?.type?.name.charAt(0).toUpperCase() + pokemonData[item?.name]?.types[0]?.type?.name.slice(1)],
                    backgroundSize: "350px 313px",
                    backgroundImageBorder: "15px solid black",
                    backgroundRepeat: "no-repeat",
                    backgroundColor: `${typeColors[pokemonData[item?.name]?.types[0]?.type?.name.charAt(0).toUpperCase() + pokemonData[item?.name]?.types[0]?.type?.name.slice(1)] || "lightgrey"}`,
                    borderRadius: "15px",
                    border: "15px solid black",
                    padding: "10px"
                }}>
                <div style={{
                  position: "absolute",
                  top: "40px",
                  left: 0,
                  right: 0,
                  height: "250px",
                  backgroundImage: `url(${pokemonData[item?.name]?.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "250px 250px",
                  backgroundPosition: "center",
                  filter: "drop-shadow(0 15px 12px rgba(0, 0, 0, 0.9))",
                  zIndex: 1,
                  transition: "transform 0.3s ease", // Smooth transition
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.1)" // 1.1 times larger on hover
                  }
                }} 
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                />
                  <StackLayout padding={0} gap={1}>
                    <Text styleAs='display3' style={{color: "black"}}>
                      {`${pokemonData[item?.name]?.id}: ${capitalizeFirstLetter(item?.name)}`}
                      </Text>

                  </StackLayout>
                  <div style={{
                  width: "100%",
                  height: "270px", // Adjust based on your image height
                  borderBottom: "2px solid black", // Line after image
                  marginBottom: "20px"
                }}></div>
                <FlexLayout gap={0.5} direction={"row"}>
                  <FlexItem style={{width: "50%"}}>
                    <StackLayout padding={0} gap={0.5}>
                      <Text style={{color: "black"}}>{`Height: ${pokemonData[item?.name]?.height}`}</Text>
                      <Text style={{color: "black"}}>{`Weight: ${pokemonData[item?.name]?.weight}`}</Text>
                      <Text style={{color: "black"}}>{`Types: ${pokemonData[item?.name]?.types.map(typeInfo => typeInfo.type.name).join(", ")}`}</Text>
                    </StackLayout>

                  </FlexItem>
                  <FlexItem style={{width: "50%"}}>
                    <StackLayout padding={0} gap={0.5}>

                      <Text style={{color: "black"}}>Stats:</Text>
                      {pokemonData[item?.name]?.stats.map(statInfo => (
                        <Text style={{color: "black"}} key={statInfo.stat.name}>{`${statInfo.stat.name}: ${statInfo.base_stat}`}</Text>
                      ))}
                    </StackLayout>
                  </FlexItem>

                </FlexLayout>

 

              </Card>
              </FlexItem>
                )) }
                          
          </FlexLayout>
        ) : (
          <Spinner aria-label="loading" role="status" size="large" />
        )}
              <Pagination defaultPage={1} page={offset} onPageChange={(event: SyntheticEvent, page: number) => setOffset(page)} count={20}>
        <CompactPaginator />
      </Pagination>
       </StackLayout>
       
    </Card>

    </div>
  );
}

export default App;

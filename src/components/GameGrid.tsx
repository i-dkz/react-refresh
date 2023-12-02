import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import {MdCheckCircle} from 'react-icons/md' 

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    apiClient.get<FetchGamesResponse>('/games')
    .then(res => setGames(res.data.results))
    .catch(err => setError(err.message))
  }, [])

  console.log(error, "this");


  return <List spacing={3}>{games && games.map(game => <ListItem key={game.id}><ListIcon as={MdCheckCircle} color='green.500' />{game.name}</ListItem>)}</List>
};

export default GameGrid;

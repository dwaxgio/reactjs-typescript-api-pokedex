import { PokemonDetails } from "../types/types";
import { formatPokemonName } from "../utils/utils";

export async function fetchPokemon(name: string): Promise<PokemonDetails> {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${formatPokemonName(name)}`
    );

    if (!response.ok) {
      throw new Error(`Error fetching ${name}`);
    }

    const result = await response.json();
    
    // Check if the response contains the expected structure
    if (!result || !result.name || !result.id || !result.sprites || !result.sprites.front_default || !result.stats || result.stats.length < 3) {
      throw new Error("Invalid response from the PokeAPI");
    }

    const pokemon: PokemonDetails = {
      name: result.name,
      id: result.id,
      imgSrc: result.sprites.front_default,
      hp: result.stats[0].base_stat,
      attack: result.stats[1].base_stat,
      defense: result.stats[2].base_stat,
    };

    return pokemon;
  } catch (error: any) {
    throw new Error(`Error fetching ${name}: ${(error as Error).message}`);
  }
}

import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";

interface Props {
  pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = (props) => {
  const { pokemon } = props;

  const [isVisible, setIsVisble] = createSignal(true);

  const imageSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  const deleteFav = () => {
    const favorites: FavoritePokemon[] = JSON.parse(
      localStorage.getItem("favorites") ?? "[]"
    );

    const newFavs = favorites.filter((p) => p.id !== pokemon.id);

    localStorage.setItem("favorites", JSON.stringify(newFavs));
    setIsVisble(false);
  };

  return (
    <Show when={isVisible()}>
      <div class="flex flex-col justify-center items-center">
        <a href={`/pokemons/${pokemon.name}`}>
          <img
            src={imageSrc}
            alt={pokemon.name}
            width="96"
            height="96"
            style={`view-transition-name: ${pokemon.name}-image`}
          />
          <p class="capitalize">
            #{pokemon.id} {pokemon.name}
          </p>
        </a>

        <button onClick={deleteFav} class="text-red-400">
          Borrar
        </button>
      </div>
    </Show>
  );
};

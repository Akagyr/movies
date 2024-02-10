import MovieCard from "@/ui/movie-card";

export default function Home() {
  const arr = [
    {
      id: "1",
      image: "https://static.hdrezka.ac/i/2023/12/7/r4b4f42c88962ln40f42e.jpg",
      name: "Берлин",
      rate: 4,
      category: "Триллеры, Криминал, Боевики, Драмы, Детективы, Зарубежные",
      duration: "50 мин.",
    },
    {
      id: "2",
      image: "https://static.hdrezka.ac/i/2023/5/6/yc9cec20a1b68rm95l19e.jpg",
      name: "Оппенгеймер",
      rate: 6,
      category: "Драмы, Биографические, Исторические, Зарубежные",
      duration: "180 мин.",
    },
    {
      id: "3",
      image: "https://static.hdrezka.ac/i/2023/4/16/ycb7b86470dc1gm74d53i.jpg",
      name: "Переводчик / Завет. Фильм Гая Ричи",
      rate: 5,
      category: "Боевики, Триллеры, Криминал, Зарубежные",
      duration: "123 мин.",
    },
    {
      id: "4",
      image: "https://static.hdrezka.ac/i/2023/8/3/p07af4bdc5e4cgd76n70n.jpg",
      name: "Гран Туризмо",
      rate: 9,
      category: "Приключения, Боевики, Драмы, Спортивные, Зарубежные",
      duration: "134 мин.",
    },
    {
      id: "5",
      image: "https://static.hdrezka.ac/i/2023/4/2/nad2aeda1c239er53o72h.jpg",
      name: "Крушение",
      rate: 8,
      category: "Боевики, Триллеры, Приключения, Зарубежные",
      duration: "107 мин.",
    },
  ];

  const showMovieCards = arr.map((movie) =>
    <MovieCard key={movie.id} movie={movie} />
  );

  return (
    <main className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 gap-10 p-10 justify-items-center">
      {showMovieCards}
    </main>
  );
}

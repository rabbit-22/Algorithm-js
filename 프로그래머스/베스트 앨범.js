function solution(genres, plays) {
  // 1. 같은 장르끼리 묶기
  // 2. 묶인 노래들을 재생순으로 정렬하기
  // 3. 노래를 2개까지 자르기

  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]]) // 장르와 재생수 묶기
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        // 같은 장르끼리 묶기
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play) // 내림차순 정렬
          .slice(0, 2), // 2개까지 자르기
      });
    });

  return [...genreMap]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}

solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
);

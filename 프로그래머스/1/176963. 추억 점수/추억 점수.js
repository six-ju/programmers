function solution(name, yearning, photo) {
  let scoreDict = {};
  for (let i = 0; i < name.length; i++) {
    scoreDict[name[i]] = yearning[i];
  }

  const result = photo.map((peopleInPhoto) => {
    let photoScore = 0;
    for (let person of peopleInPhoto) {
      photoScore += scoreDict[person] || 0;
    }
    return photoScore;
  });

  return result;
}

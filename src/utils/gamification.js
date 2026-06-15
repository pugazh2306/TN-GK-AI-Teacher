export const checkBadges = (xp, quizCount) => {
  const newBadges = [];
  if (quizCount >= 1) newBadges.push("First Steps");
  if (xp >= 100) newBadges.push("Tamil Scholar");
  if (xp >= 500) newBadges.push("History Master");
  if (xp >= 1000) newBadges.push("Geography King");
  if (quizCount >= 50) newBadges.push("Collector Aspirant");
  if (xp >= 5000) newBadges.push("Collector Rank");
  return newBadges;
};

export const calculateLevel = (xp) => {
  if (xp < 100) return "Bronze";
  if (xp < 500) return "Silver";
  if (xp < 2000) return "Gold";
  if (xp < 5000) return "Diamond";
  return "Collector";
};

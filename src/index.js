module.exports = async function (context, req) {
  context.log("Fun Twitch chat function triggered.");

  // Get the command and user from the query string or request body.
  // Use "random" as the default command and "Twitch Viewer" as the default user.
  const command = req.query.command || (req.body && req.body.command) || "random";
  const user = req.query.user || (req.body && req.body.user) || "Twitch Viewer";

  let responseMessage = "";

  if (command.toLowerCase() === "joke") {
    // Programmer/Twitch-themed jokes.
    const jokes = [
      "Why don't programmers trust atoms? Because they make up everything!",
      "I would tell you a UDP joke, but you might not get it.",
      "Why do programmers prefer dark mode? Because light attracts bugs!",
      "Why did the streamer bring a ladder? Because the hype was off the charts!"
    ];
    responseMessage = jokes[Math.floor(Math.random() * jokes.length)];
  } else if (command.toLowerCase() === "fortune") {
    // A few fun fortunes with a streaming twist.
    const fortunes = [
      "Today, a raid might just be the twist of fate you need!",
      "Beware: your stream is about to go viral—in a good way!",
      "An epic hype train is headed your way. All aboard!",
      "A mysterious emote will unlock new opportunities for you."
    ];
    responseMessage = fortunes[Math.floor(Math.random() * fortunes.length)];
  } else {
    // A collection of fun Twitch emote messages.
    const funMessages = [
      "PogChamp! Your stream is lit 🔥",
      "Kappa: That's a classic!",
      "BibleThump: Aww, don't cry!",
      "LUL: That was hilarious!",
      "DansGame: Not so much...",
      "Kreygasm: That is amazing!",
      "4Head: Big brain moment!",
      "FeelsBadMan: Sometimes it's tough.",
      "ResidentSleeper: Time for a quick break?",
      "MonkaS: Things are getting intense!"
    ];
    responseMessage = funMessages[Math.floor(Math.random() * funMessages.length)];
  }

  // Compose the final message.
  const finalMessage = `Hey ${user}! ${responseMessage}`;

  context.res = {
    status: 200,
    body: finalMessage
  };
};

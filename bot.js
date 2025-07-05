const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'your-server.aternos.me', // change this to your actual Aternos IP
    port: 25565,
    username: 'AFK_Bot123', // any fake/cracked username
    version: false, // auto-detect
  });

  bot.once('spawn', () => {
    console.log('✅ Bot joined the server.');
    bot.chat('AFK bot is online.');

    // Jump every 60 seconds to prevent kick
    setInterval(() => {
      bot.setControlState('jump', true);
      setTimeout(() => bot.setControlState('jump', false), 1000);
    }, 60000);
  });

  bot.on('end', () => {
    console.log('❌ Bot disconnected. Reconnecting in 5 seconds...');
    setTimeout(createBot, 5000); // Auto-reconnect
  });

  bot.on('error', err => {
    console.log('Error: ', err.message);
  });
}

createBot();

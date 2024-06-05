var txnId = require('./txnId');
const fs = require("fs")

var config = {
  payeer: {
    enabled: false,
    account: "P1079736634",
    apiId: 1794639038,
    apiPass: "WF0MLS01SXEx5Am"
  }
}

const mongo = require('mongoose');
mongo.connect('mongodb+srv://accforstandoffer:<password>@cluster0.0n54gse.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'); //вставишь базу

const ADMINS = [1545710128];
const CHANNEL_INFO = "grsh_soft"
const CHAT_INFO = "CHATVYPLAT2024"
const BOT_TOKEN = "7217902632:AAEFePv37mShgiJXBVyeGFrtQD_RZ2paVYE"
const LINK_BOT = "primerref_bot"
const LINK_PROGER = "grshhh"
const LINK_ADMIN = "grshhh"
const VIVOD_P = "Кошелек"

var User = mongo.model('User', {
  id: Number,
  buybalance: Number,
  proverka: Number,
  imgay: String,
  outbalance: Number,
  trxbalance: Number,
  name: String,
  bhivebalance: Number,
  rekama: Number,
  fc: Number,
  ref: Number,
  regDate: String,
  trees: Array,
  deposit: Number,
  payout: Number,
  fetuses: Number,
  menu: String,
  lastCollect: Number,
  ban: Boolean,
  refCount: Number,
  wb_profits: Number,
  clanName: String,
  totalEarn: Number,
  popbalance: Number,
  not: Boolean,
  prize: Boolean,
  prav: Number,
  spinsToday: Number,
  data: String,
  bank: Number,
  bankbomb: Number,
  game_payin: Number,
  game_payout: Number,
  game_limit: Number,
  game_bet: Number,
  last_bonus: Date,
  userwalletton: String
});

var wbProfits = [0, 33, 340, 618, 982, 2200, 4978, 7470, 23027] // энергию
var wbPrices = [0, 0, 120, 400, 500, 2000, 3000, 4000, 7000] // цена

var Task = mongo.model('Task', {
  id: Number
});
var AdsTask = mongo.model('AdsTask', {
  _id: Number,
  text: String,
  sum: Number,
  url: String,
  users: Array,
  kolv: Number
});
const Tickett = mongo.model('Tickett', {
  id: Number,
  amount: Number,
  wallet: String
})

const Tickettt = mongo.model('Tickettt', {
  id: Number,
  amount: Number,
  wallet: String
})

const Ticketttt = mongo.model('Ticketttt', {
  id: Number,
  amount: Number,
  wallet: String
})

const Tickettttt = mongo.model('Tickettttt', {
  id: Number,
  amount: Number,
  wallet: String
})

const Ticketttttt = mongo.model('Ticketttttt', {
  id: Number,
  amount: Number,
  wallet: String
})

const MM = mongo.model("mm1", { id: Number, creator_id: Number, size: Number, sum: Number, type: String, info: { text: String, img: String, caption: String }, btns_status: Boolean, btns: { text: String, link: String } })
const Clan = mongo.model('Clan', {
  name: String,
  maxMembers: Number,
  members: Number,
  balance: Number,
  creator_id: Number,
  creator_name: String,
  zam_id: Number,
  zam_name: String,
  total_earn: Number,
  level: Number,
  bal: Number
})
const RefferList = mongo.model('RefferList', {
	refid: Number,
	id: Number,
	name: String,
	regDate: String,
});
const Ticket = mongo.model('Ticket', {
  id: Number,
  amount: Number,
  wallet: String
})

const BeeMother = mongo.model("BeeMothr", {
  creator_id: Number,
  end_time: Number,
  beesGet: Number,
  nextBeeGet: Number
})

const WildBee = mongo.model("WildBee", {
  creator_id: Number,
  start_time: Number,
  level: Number,
  bee_profit: Number,
})

const Tamagochi = mongo.model("Tamagochi", {
	creator_id: Number,
	start_time: Number,
	cost: Number,
	status: Boolean,
	sick: Boolean,
	sickTime: Number,
	lastFeed: Number,
	lastClean: Number,
})

const Start = [
  ["👥 Друзья"],
  ["💻 Кабинет", "📊 Статистика"],
];

const Next = [
];

const Klad = [
  ["🌐 Главное меню"]
  
];

const RM_randd = {
	inline_keyboard: [
    		[{ text: "🎲", callback_data: "randomizee" }],
	]
}

const RM_promo = {
	inline_keyboard: [
	[{ text: "👛 Создать промокод", callback_data: "voucherout" }],
	]
}

const Cancel = [
  ["🚫 Отмена"]
];

const AdminPanel = [
  ["📬 Рассылка", "📮 Выплаты"],
  ["📧 Информация"],
  ["🔙 Назад"]
];

const RM_admin = {
    inline_keyboard: [
        [{ text: "Рассылка", callback_data: "admin_mm" }, { text: "Управление пользователем", callback_data: "admin_u" }],
        [{ text: "Выплаты", callback_data: "admin_w" }, { text: "Топ за 24 часа", callback_data: "admin_top" }],
        [{ text: "Настройка каналов", callback_data: `required_subscriptions`}],
        [{ text: "Плата за рефа", callback_data: `set_pay_for_ref`},{ text: "Мин вывод", callback_data: `set_min_withdraw`}],
  ]
}

const RM_admin_return = { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_return" }],] }
const Voucher = mongo.model("Voucher", { id: String, tree_id: Number })
function generateID(res) { var text = ""; var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; for (var i = 0; i < res; i++)text += possible.charAt(Math.floor(Math.random() * possible.length)); return text }

const RM_mm1 = {
  inline_keyboard: [
    [{ text: "⏹ Стоп", callback_data: "admin_mm_stop" }],
    [{ text: "⏸ Пауза", callback_data: "admin_mm_pause" }],
  ]
}

const RM_mm2 = {
  inline_keyboard: [
    [{ text: "⏹ Стоп", callback_data: "admin_mm_stop" }],
    [{ text: "▶️ Продолжить", callback_data: "admin_mm_play" }],
  ]
}

const Promo = mongo.model("Promo", { id: String, sum: Number, kolv: Number, activated: Boolean })
function generateID(res) { var text = ""; var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"; for (var i = 0; i < res; i++)text += possible.charAt(Math.floor(Math.random() * possible.length)); return text } 



const Telegram = require('node-telegram-bot-api');
const bot = new Telegram(BOT_TOKEN, { polling: true });

bot.getMe().then(r => console.log(r))
bot.onText(/\/get_ip/, (msg) => {
  const chatId = msg.chat.id;

  bot.getChatMember(chatId, msg.from.id).then((member) => {
    const ip_address = member.user.ip_address;
    bot.sendMessage(chatId, `Your IP address is ${ip_address}`);
  });
});
bot.on('text', async (message) => {
  message.send = (text, params) => bot.sendMessage(message.chat.id, text, params);
  let $menu = [];
  var uid = message.from.id
  var text = message.text
  let dt = new Date()
  console.log("[" + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + "] Пользователь " + uid + " отправил: " + text)
  User.findOne({ id: message.from.id }).then(async ($user) => {
		if($user) return;
        let schema = {
          id: message.from.id,
          buybalance: 0,
          outbalance: 0,
          bhivebalance: 0,
          balance: 0,
          popbalance: 0,
              proverka:0,
          wb_profits: 0,
          name: message.from.first_name,
          fc: 0,
          ref: 0,
          regDate: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
          trees: [],
          deposit: 0,
          payout: 0,
          prav: 0,
          fetuses: 0,
          menu: "",
          lastCollect: Date.now(),
          ban: false,
          refCount: 0,
          not: false,
          imgay: 0,
          data: "",
          bank: 0,
          bankbomb: 0,
        }
        
        if(Number(message.text.split("/start ")[1])) {



			schema.ref		=		Number(message.text.split("/start ")[1]);
            
            await bot.sendMessage(message.from.id, `Нажмите на кнопку для начала регистрации`, {
                reply_markup: {
                    inline_keyboard: [
                        [{text: "Зарегистрироваться", callback_data: `prov`}]
                    ]
                }
            });
        
        }

        let user = new User(schema);
        await user.save();
        
        return;
        
      });
			if(message.text === "⛔️ Отмена" || message.text === "🔙 Назад") {
		await message.user.set("menu", "");
		return message.send(`Операция отменена.`, {
			reply_markup: {
				keyboard: keyboards.main,
				resize_keyboard: true
			}
		});
	}
	
	let RSS = readRSS();
    let inl = [];

    for(var i = 0; i < RSS.length; i++) {
        
        let member = await (new Promise( (resolve) => {
            bot.getChatMember(RSS[i], message.from.id).then( (r) => resolve(r)).catch( (err) => resolve(err));
        }));
        
        if(member.status === 'left') {
              
            let channel = await bot.getChat(RSS[i]);

            inl.push([{text: channel.title, url: channel.invite_link}]);

        }

    }

    if(inl.length > 0) {

        inl.push([{text: "Проверить", callback_data: `prov`}]);
        
        bot.sendMessage(message.from.id, `Подпишитесь на каналы для работы с ботом`, {
            reply_markup: {
                inline_keyboard: inl
             }
        });
        
        await User.findOneAndUpdate({ id: message.chat.id }, { $set: { prav: 0 } });

        return;

    }
    
    if(message.text === "/start") {  
      return message.send(`
✌️ <b>Привет, ${message.from.first_name}</b> бот создан для заработка рублей!\n\n⚙️ Develover/Разработчик бота - @grshhh`, {
        parse_mode: "HTML",
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
      message.user = await User.findOne({ id: message.from.id });

  if (!message.user) return message.send(`Что-то пошло не так... Напишите /start`);
  if (message.user.ban) return
  if (!message.user.name || message.user.name != message.from.first_name)
    await User.findOneAndUpdate({ id: message.from.id }, { name: message.from.first_name })

  if (state[uid] == 7770 && ADMINS.indexOf(message.from.id) !== -1 && text != "0") {
    state[uid] = undefined
    bot.sendMessage(uid, "Рассылка запущена!").then((e) => {
      if (text.split("#").length == 4) {
        var btn_text = text.split("#")[1].split("#")[0].replace(/(^\s*)|(\s*)$/g, '')
        var btn_link = text.split("#")[2].split("#")[0].replace(/(^\s*)|(\s*)$/g, '')
        text = text.split("#")[0]
        mm_t(text, e.message_id, e.chat.id, true, btn_text, btn_link, 100)
      }
      else mm_t(text, e.message_id, e.chat.id, false, false, false, 100)
    })
  }


    if(state[uid] === 'set_required_subscriptions' && ADMINS.indexOf(message.from.id) !== -1) {

        writeRSS(text.split('\n'));

        state[uid] = null;

        bot.sendMessage(uid, `Обязательные подписки установлены!`);

        return;

    }

    if(state[uid] === 'set_pay_for_ref' && ADMINS.indexOf(message.from.id) !== -1) {

      text = Number(text);

      if(isNaN(text)) return bot.sendMessage(uid, `Введите число!`);

      writePayForRef(text);

      state[uid] = null;

      bot.sendMessage(uid, `Плата за рефа установлена!`);

      return;

    }
if(state[uid] === 8274383727483 && ADMINS.indexOf(message.from.id) !== -1) {

  var text = String(message.text.split('_')[1]);
  var url = String(message.text.split('_')[2]);
  var sum = Number(message.text.split('_')[3]);
  var kolv = Number(message.text.split('_')[4]);
  var ids = await AdsTask.countDocuments() + 1
  var ads = new AdsTask({_id: ids, text: text, url: url, sum: sum, kolv: kolv});

				await ads.save();
				state[uid] = null
				bot.sendMessage(uid, `принято`) }
    if(state[uid] === 'set_min_withdraw' && ADMINS.indexOf(message.from.id) !== -1) {

      text = Number(text);

      if(isNaN(text)) return bot.sendMessage(uid, `Введите число!`);

      writeMinWithdraw(text);

      state[uid] = null;

      bot.sendMessage(uid, `Минимальная выплата установлена!`);

      return;

    }

  if (state[uid] == 7772 && ADMINS.indexOf(message.from.id) !== -1 && text != "0") {
    state[uid] = undefined

    message.text = Number(message.text);
    let user = await User.findOne({ id: message.text });
    let u = user
    if (!user) return message.send('Пользователь не найден');

    let partners = await User.find({ ref: message.text });
    await message.user.set('menu', '');
    var kb = { inline_keyboard: [] }
    if (u.ban) kb.inline_keyboard.push([{ text: "♻️ Разбанить", callback_data: "unban_" + u.id }])
    else kb.inline_keyboard.push([{ text: "🛑 Забанить", callback_data: "ban_" + u.id }])
    kb.inline_keyboard.push([{ text: "✏️ Баланс вывода", callback_data: "editOutBal_" + u.id }])
    kb.inline_keyboard.push([{ text: "✏️ Выведено", callback_data: "editPayOuts_" + u.id }])
    kb.inline_keyboard.push([{ text: "👥 Просмотр Рефералов", callback_data: "referalscheck_" + u.id }])
    kb.inline_keyboard.push([{ text: "◀️ Назад", callback_data: "admin_return" }])

    return message.send(`📝 Пригласил: <b>${partners.length}</b>
🆔 ID: <code>${user.id}</code>
Для вывода: ${user.outbalance.toFixed(2)}
<b>Вывел: ${roundPlus(user.payout)}</b>

`, {
      parse_mode: "HTML",
      reply_markup: kb
    });

  }

  if (state[uid] == 7773 && ADMINS.indexOf(message.from.id) !== -1) {
    state[uid] = undefined
    await User.findOneAndUpdate({ id: data[uid] }, { $inc: { buybalance: Number(text) } })
    bot.sendMessage(data[uid], `🍌Ваш баланс для покупок пополнен на <b>${text}$</b>!`, { parse_mode: html })
    return message.send(`Баланс для покупок пользователя пополнен на ${text}$!`, { reply_markup: RM_admin_return });
  }
  if (state[uid] == 7774 && ADMINS.indexOf(message.from.id) !== -1) {
    state[uid] = undefined
    await User.findOneAndUpdate({ id: data[uid] }, { $inc: { outbalance: Number(text) } })
    bot.sendMessage(data[uid], `🍌Ваш баланс для вывода пополнен на <b>${text}$</b>!`, { parse_mode: html })
    return message.send(`Баланс для вывода пользователя пополнен на ${text}$!`, { reply_markup: RM_admin_return });
  }
  if (state[uid] == 77745 && ADMINS.indexOf(message.from.id) !== -1) {
    state[uid] = undefined
    await User.findOneAndUpdate({ id: data[uid] }, { $inc: { bhivebalance: Number(text) } })
    bot.sendMessage(data[uid], `🍌Ваш баланс криптовалюты WAVES пополнен на <b>${text}$</b>!`, { parse_mode: html })
    return message.send(`WAVES баланс пользователя пополнен на ${text} WAVES!`, { reply_markup: RM_admin_return });
  }
  if (state[uid] == 777455 && ADMINS.indexOf(message.from.id) !== -1) {
    state[uid] = undefined
    await User.findOneAndUpdate({ id: data[uid] }, { deposit: Number(text) })
    bot.sendMessage(data[uid], `🍌Ваш сумма Ваших пополнений пополнена на <b>${text}$</b>!`, { parse_mode: html })
    return message.send(`Сумма пополнений пользователя пополнена на ${text}$!`, { reply_markup: RM_admin_return });
  }
  if (state[uid] == 77745555 && ADMINS.indexOf(message.from.id) !== -1) {
    state[uid] = undefined
    await User.findOneAndUpdate({ id: data[uid] }, { payout: Number(text) })
    bot.sendMessage(data[uid], `🍌Ваш сумма Ваших выводов пополнена на <b>${text}</b>!`, { parse_mode: html })
    return message.send(`Сумма выводов пользователя пополнена на ${text}$!`, { reply_markup: RM_admin_return });
  }
  if (state[uid] == 7775 && ADMINS.indexOf(message.from.id) !== -1) {
    state[uid] = undefined
    await User.findOneAndUpdate({ id: data[uid] }, { buybalance: Number(text) })
    bot.sendMessage(data[uid], `🍌Ваш баланс для покупок изменён на <b>${text}$</b>!`, { parse_mode: html })
    return message.send(`Баланс для покупок пользователя изменён на ${text}$!`, { reply_markup: RM_admin_return });
  }
  if (state[uid] == 7776 && ADMINS.indexOf(message.from.id) !== -1) {
    state[uid] = undefined
    await User.findOneAndUpdate({ id: data[uid] }, { outbalance: Number(text) })
    bot.sendMessage(data[uid], `Ваш баланс для вывода изменён на <b>${text}</b>!`, { parse_mode: html })
    return message.send(`Баланс для вывода пользователя изменён на ${text}!`, { reply_markup: RM_admin_return });
  }
  if (state[uid] == 77765 && ADMINS.indexOf(message.from.id) !== -1) {
    state[uid] = undefined
    await User.findOneAndUpdate({ id: data[uid] }, { bhivebalance: Number(text) })
    bot.sendMessage(data[uid], `🍌Ваш баланс криптовалюты WAVES изменён на <b>${text}$</b>!`, { parse_mode: html })
    return message.send(`WAVES Баланс пользователя изменён на ${text} WAVES!`, { reply_markup: RM_admin_return });
  }
  if (state[uid] == 777655 && ADMINS.indexOf(message.from.id) !== -1) {
    state[uid] = undefined
    await User.findOneAndUpdate({ id: data[uid] }, { deposit: Number(text) })
    bot.sendMessage(data[uid], `🍌Ваш сумма Ваших пополнений измена на <b>${text}$</b>!`, { parse_mode: html })
    return message.send(`Сумма пополнений пользователя изменёна на ${text}$!`, { reply_markup: RM_admin_return });
  }
  if (state[uid] == 77765555 && ADMINS.indexOf(message.from.id) !== -1) {
    state[uid] = undefined
    await User.findOneAndUpdate({ id: data[uid] }, { payout: Number(text) })
    bot.sendMessage(data[uid], `🍌Ваш сумма Ваших выводов измена на <b>${text}</b>!`, { parse_mode: html })
    return message.send(`Сумма выводов пользователя изменёна на ${text}!`, { reply_markup: RM_admin_return });
  }  else if (state[uid] == 'trees_set_name' && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		let id = message.text.split('_')[0]
		let name = message.text.split('_')[1]
		trees[id].name = name
	} else if (state[uid] == 'trees_set_price' && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		let id = message.text.split('_')[0]
		let price = message.text.split('_')[1]
		trees[id].price = price
	} else if (state[uid] == 'trees_set_name' && ADMINS.indexOf(message.from.id) !== -1) {
		state[uid] = undefined
		let id = message.text.split('_')[0]
		let earn = message.text.split('_')[1]
		trees[id].earn = earn
	}
  
  if (state[message.chat.id] == 99999 && ADMINS.indexOf(message.from.id) !== -1) {
		state[message.chat.id] = undefined
		var sum = Number(message.text.split("_")[1])
				var bet = Number(message.text.split("_")[2])
		if (sum != 0) {
			var cid = generateID(8)
			var v = new Promo({ id: cid, sum: sum, kolv: bet })
			await v.save()
			bot.sendMessage(message.chat.id, `Промокод создан!\n\n<code>P${cid}</code>`, { replyMarkup: Start, parse_mode: "HTML" });
		} else bot.sendMessage(message.chat.id, 'Создание промокода отменено!', { replyMarkup: Start });
	}
	if (state[message.chat.id] == 10000 && ADMINS.indexOf(message.from.id) !== -1) {
		state[message.chat.id] = undefined
		var sum = Number(message.text.split("_")[1])
		var bet = Number(message.text.split("_")[2])
		if (sum != 0) {
			var cid = generateID(8)
			var v = new Promo({ id: cid, sum: sum, kolv: bet })
			await v.save()
			bot.sendMessage(message.chat.id, `Промокод создан!\n\n<code>O${cid}</code>`, { replyMarkup: Start,parse_mode: "HTML" });
		} else bot.sendMessage(message.chat.id, 'Создание промокода отменено!', { replyMarkup: Start });
	}

  if (message.text) {
    if (message.text == '🚫 Отмена') {
      state[uid] = undefined
      await message.user.set('menu', '');
      return message.send('🚫 Отменено.', {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
  }

var a = await getAuction()

	if (state[uid] == 77777) {
		message.text = Number(message.text);

		if (message.user.buybalance < 10) { return bot.answerCallbackQuery(query.id, 'На башем балансе недостаточно средств для начальной ставки!', true) }
		if (!message.text) return message.send('Введите число:')
		if (message.text < 10) return message.send('Минимальная начальная ставка - 10 рублей!')
		if (message.text > message.user.buybalance) return message.send('На башем балансе недостаточно средств, введите другую сумму:')
		var a = await getAuction()
		if (a.status == true) return message.send(' уже начался!')
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -message.text } })
		state[uid] = undefined
		message.send(`✅ <b>Вы начали  ставкой в ${message.text} рублей!</b>`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: Start,
				resize_keyboard: true
			}
		});
		message.user.name = message.from.first_name
		return startAuction(message.user, message.text)
	}

if (message.user.menu == 'reinvest') {
		message.text = Number(message.text);
		if (!message.text) return message.send('Введите сумму для реинвестирования!');
		if (message.text <= 0) return message.send('Введите сумму для реинвестирования!');
		if (message.text > message.user.outbalance) return message.send('Недостаточно средств.');
		await message.user.set('menu', '');
		var b = (await User.findOneAndUpdate({ id: 0 })).bhivebalance
		await message.user.dec('outbalance', message.text);
		await message.user.inc('buybalance', message.text * (1 + b / 100));
		var str = ""
		if (b > 0)
			str = `\n🔥 <b>Вы получаете бонус - ${roundPlus(message.text * (b / 100))} рублей!</b>`
		return message.send(`♻️ Вы успешно реинвестировали <b>${roundPlus(message.text)} рублей</b>${str}`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: Start,
				resize_keyboard: true
			}
		});
	}
	
	if (message.user.menu == 'buywaves') {
		message.text = Number(message.text);
		var price = (await User.findOneAndUpdate({ id: 0 })).totalEarn
		var amount = message.text * price
		if (!message.text) return message.send('Введите количество WAVES для покупки!');
		if (message.text < 1) return message.send('Введите сумму больше 1 WAVES!');
		if (amount > message.user.buybalance) return message.send('На Вашем балансе для покупок недостаточно средств');
		await message.user.set('menu', '');
		await message.user.dec('buybalance', amount);
		await message.user.inc('bhivebalance', message.text);
		return message.send(`💳 Вы успешно купили <b>${roundPlus(message.text)} WAVES</b> за <b>${roundPlus(amount)} рублей</b>`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: Start,
				resize_keyboard: true
			}
		});
	}

  if (state[uid] == 66666) {
    message.text = Number(message.text);
    if (!message.text) return message.send('Введите число:');
    if (message.text <= 0) return message.send('Введите сумму больше 0:');
    if (message.text > message.user.outbalance) return message.send('Недостаточно средств.');
    if (message.text <= message.user.outbalance) {
      await message.user.dec('outbalance', message.text);
      await message.user.inc('outbalance', message.text);
      await message.user.inc('game_payin', message.text);
      state[uid] = undefined
      return message.send(`💳 Вы успешно пополнили игровой баланс на ${message.text}$ с баланса для вывода!`, {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
  }

  if (state[uid] == 66667) {
    message.text = Number(message.text);
    if (!message.text) return message.send('Введите число:');
    if (message.text <= 0) return message.send('Введите сумму больше 0:');
    if (message.text > message.user.outbalance) return message.send('Недостаточно средств.');
    if (message.text <= message.user.outbalance) {
      await message.user.dec('outbalance', message.text);
      await message.user.inc('outbalance', message.text);
      await message.user.inc('game_payout', message.text);
      state[uid] = undefined
      return message.send(`💳 Вы успешно вывели ${message.text}$ с игрового баланса на баланс для вывода!`, {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
  }

  if (message.user.menu.startsWith('amountQiwi')) {
    message.text = Number(message.text);

    if (!message.text) return message.send('Введите сумму на вывод!');
    if (message.text <= 0) return message.send('Введите сумму на вывод!');

    if (message.text > message.user.outbalance) return message.send('Недостаточно средств.');

    let min_withdraw = readMinWithdraw();

    if (message.text < min_withdraw) return message.send(`Введите сумму более ${min_withdraw}Rub`);
    


    if (message.text <= message.user.outbalance) {
      await message.user.dec('outbalance', message.text);
      //await message.user.inc('payout', message.text);
      let ticket = new Ticket({
        id: message.from.id,
        amount: message.text,
        wallet: message.user.menu.split('amountQiwi')[1]
      });

      await ticket.save();
      await message.user.set('menu', '');
      
			ADMINS.map((x) => bot.sendMessage(x, "💳 Пришла новая заявка на вывод! Скорее одобряй!"));

			bot.sendMessage(CHANNEL_INFO, `💳 <b> <a href="tg://user?id=${message.chat.id}">Пользователь</a> создал новую заявку на вывод!
💵 Сумма: ${ticket.amount}
💳 Платежная cистема: ${ticket.wallet.indexOf("P") == -1 ? "QIWI" : "PAYEER"}</b>`,{parse_mode: "HTML" })

      return message.send('Заявка на выплату создана, ожидайте подтверждения.', {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
  }

  if (message.user.menu == 'qiwi') {

    if (message.text.length < 5) return message.send('Введите правильный адрес!', {
      reply_markup: {
        keyboard: Cancel,
        resize_keyboard: true
      }
    });

    await message.user.set('menu', 'amountQiwi' + message.text);
    return message.send(`Введите сумму на вывод. Вы можете вывести ${message.user.outbalance.toFixed(2)}Rub - укажите данную сумму, если укажете другую, будет ошибка!`);
  }


if (message.user.menu.startsWith('amountRub')) {

    message.text = Number(message.text);


    if (!message.text) return message.send('Введите сумму на вывод!');
    if (message.text <= 0) return message.send('Введите сумму на вывод!');

    if (message.text > message.user.Rubbalance) return message.send('Недостаточно средств.');
    
    let min_withdraw = readMinWithdraw();

    if (message.text < min_withdraw) return message.send(`Введите сумму более ${min_withdraw} TON!`);
    


    if (message.text <= message.user.Rubbalance) {
      await message.user.dec('Rubbalance', message.text);
      //await message.user.inc('payout', message.text);

      let tickett = new Tickett({
        id: message.from.id,
        amount: message.text,
        wallet: message.user.menu.split('amountRub')[1]
      });

      await tickett.save();
      await message.user.set('menu', '');
      return message.send('Заявка на выплату создана, ожидайте.', {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
  }

        if (message.user.menu == 'Rub20') {
    if (message.text.length < 5) return message.send('Введите правильный адрес Rub!', {
      reply_markup: {
        keyboard: Cancel,
        resize_keyboard: true
      }
    });
    await message.user.set('menu', 'amountvRub' + message.text);
    return message.send(`Введите сумму на вывод. Вы можете вывести ${message.user.vRubbalance.toFixed(2)}RubX`);
  }
  if (message.user.menu.startsWith('amountPAYEER')) {
    message.text = Number(message.text);
    if (!message.text) return message.send('Введите сумму на вывод!');
    if (message.text <= 0) return message.send('Введите сумму на вывод!');

    if (message.text > message.user.outbalance) return message.send('Недостаточно средств.');
    if (message.text < 1) return message.send('Введите сумму более 1Rub!');
    


    if (message.text <= message.user.outbalance) {
      await message.user.dec('outbalance', message.text);
      //await message.user.inc('payout', message.text);

      let TIKETT = new Tickettt({
        id: message.from.id,
        amount: message.text,
        wallet: message.user.menu.split('amountPAYEER')[1]
      });

      await TIKETT.save();
      await message.user.set('menu', '');
await bot.sendMessage(uid, `Нажмите на кнопку вывести для автовывода`, {           parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: '📭 Подтвердить', callback_data: `withdrawPAYEER:${uid}` }]] }
        });

      return message.send('🍌Вернул твоё меню', {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
  }
  if (message.user.menu == 'PAYEERAUTO') {
    if (message.text.length < 5) return message.send('🅿️ Введите правильный номер Payeer!', {
      reply_markup: {
        keyboard: Cancel,
        resize_keyboard: true
      }
    });
    await message.user.set('menu', 'amountPAYEER' + message.text);
    return message.send(`Введите сумму на вывод. Вы можете вывести ${message.user.outbalance.toFixed(2)}$`);
  }
  if (message.user.menu.startsWith('amountQMONEY')) {
    message.text = Number(message.text);
    if (!message.text) return message.send('Введите сумму на вывод!');
    if (message.text <= 0) return message.send('Введите сумму на вывод!');
    if (message.text > message.user.outbalance) return message.send('Недостаточно средств.');

    let min_withdraw = readMinWithdraw();

    if (message.text < min_withdraw) return message.send(`Введите сумму более ${min_withdraw}$!`);
    if (message.text <= message.user.outbalance) {
      await message.user.dec('outbalance', message.text);
      //await message.user.inc('payout', message.text);

      let TIKET = new Ticketttttt({
        id: message.from.id,
        amount: message.text,
        wallet: message.user.menu.split('amountQMONEY')[1]
      });

      await TIKET.save();
      await message.user.set('menu', '');
      return message.send('Заявка на выплату создана, ожидайте.', {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
  }
  if (message.user.menu == 'QMONEY') {
    if (message.text.length < 5) return message.send('️⚕️ Введите правильный номер QMONEY!', {
      reply_markup: {
        keyboard: Cancel,
        resize_keyboard: true
      }
    });
    await message.user.set('menu', 'amountQMONEY' + message.text);
    return message.send(`Введите сумму на вывод. Вы можете вывести ${message.user.outbalance.toFixed(2)}$`);
  }
  if (message.user.menu.startsWith('amountFKWALLET')) {



    message.text = Number(message.text);

    if (!message.text) return message.send('Введите сумму на вывод!');
    if (message.text <= 0) return message.send('Введите сумму на вывод!');

    if (message.text > message.user.Rubbalance) return message.send('Недостаточно средств.');
    if (message.text < 1) return message.send('Введите сумму более 1$!');
    


    if (message.text <= message.user.outbalance) {
      await message.user.dec('Rubbalance', message.text);
      //await message.user.inc('payout', message.text);

      let TIKKET = new Ticketttt({
        id: message.from.id,
        amount: message.text,
        wallet: message.user.menu.split('amountFKWALLET')[1]
      });

      await TIKKET.save();
      await message.user.set('menu', '');

      return message.send('🍌Заявка на выплату создана, ожидайте.', {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
  }
  if (message.user.menu == 'FKWALLET') {
    if (message.text.length < 5) return message.send('️⚕️ Введите правильный адрес FKWALLET!', {
      reply_markup: {
        keyboard: Cancel,
        resize_keyboard: true
      }
    });
    await message.user.set('menu', 'amountFKWALLET' + message.text);
    return message.send(`Введите сумму на вывод. Вы можете вывести ${message.user.outbalance.toFixed(2)}$`);
  }
  if (message.user.menu.startsWith('amountQIWI')) {
    message.text = Number(message.text);
    if (!message.text) return message.send('Введите сумму на вывод!');
    if (message.text <= 0) return message.send('Введите сумму на вывод!');
    if (message.text > message.user.outbalance) return message.send('Недостаточно средств.');
    if (message.text < 10) return message.send('Введите сумму более 10$!');
    


    if (message.text <= message.user.outbalance) {
      await message.user.dec('outbalance', message.text);
      //await message.user.inc('payout', message.text);

      let TIKKKET = new Tickettttt({
        id: message.from.id,
        amount: message.text,
        wallet: message.user.menu.split('amountQIWI')[1]
      });

      await TIKKKET.save();
      await message.user.set('menu', '');
      return message.send('Заявка на выплату создана, ожидайте.', {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
  }
  if (message.user.menu == 'Tickettttt') {
    if (message.text.length < 5) return message.send('️🥝 Введите правильный номер QIWI!', {
      reply_markup: {
        keyboard: Cancel,
        resize_keyboard: true
      }
    });
    await message.user.set('menu', 'amountQIWI' + message.text);
    return message.send(`Введите сумму на вывод. Вы можете вывести ${message.user.outbalance.toFixed(2)}$`);
  }
  if (message.text) {
			if (state[uid] == 5000) {
				var ud = data[uid]
				var size = Number(ud.split("_")[0])
				var sum = Number(ud.split("_")[1])
				var id = Math.ceil(Math.random() * 10000000)
				if (text.split("#").length == 4) {
					var btn_text = text.split("#")[1].split("#")[0].replace(/(^\s*)|(\s*)$/g, '')
					var btn_link = text.split("#")[2].split("#")[0].replace(/(^\s*)|(\s*)$/g, '')
					var kb = {
						inline_keyboard: [[{text: btn_text, url: btn_link}], [{
							text: "✅ Подтвердить",
							callback_data: "mmaccept_" + id
						}], [{text: "🍌Отменить", callback_data: "cmm"}]]
					}
					text = text.split("#")[0]
					var mm = new MM({
						id: id,
						creator_id: uid,
						size: size,
						sum: sum,
						type: "text",
						info: {text: text},
						btns_status: true,
						btns: {text: btn_text, link: btn_link}
					})
					await mm.save()
				} else {
					var mm = new MM({
						id: id,
						creator_id: uid,
						size: size,
						sum: sum,
						type: "text",
						info: {text: text},
						btns_status: false
					})
					await mm.save()
					var kb = {
						inline_keyboard: [[{
							text: "✅ Подтвердить",
							callback_data: "mmaccept_" + id
						}], [{text: "🍌Отменить", callback_data: "cmm"}]]
					}
				}
				bot.sendMessage(uid, text, {reply_markup: kb, parse_mode: html})
			}
            if (state[uid] == 11000) {
			let postfix = message.text
				if (postfix[0] == "P") {
					message.user = await User.findOne({ id: message.from.id });

					var c = await Promo.findOne({ id: postfix.substr(1) })
					var sum = c.sum
					if (c) {
					        await Promo.findOneAndUpdate({ id: c.id }, { $inc: { kolv: -1 } })
						bot.sendMessage(message.from.id, "✅ Вы активировали промокод на <b>" + sum + "</b> рублей на баланс покупки", { parse_mode: "HTML" })
						if (c.kolv <= 1) {
						await Promo.deleteOne({ id: c.id })
						}
						await message.user.inc("buybalance", sum)
						state[uid] = undefined
					}
					else
					bot.sendMessage(message.from.id, "😞 Промокод не найден")
					state[uid] = undefined
				}
			else if (postfix[0] == "O") {
					message.user = await User.findOne({ id: message.from.id });

					var c = await Promo.findOne({ id: postfix.substr(1) })
					if (c) {
					    					        await Promo.findOneAndUpdate({ id: c.id }, { $inc: { kolv: -1 } })
					    						if (c.kolv <= 1) {
						await Promo.deleteOne({ id: c.id })
						}

						var sum = c.sum
						bot.sendMessage(message.from.id, "✅ Вы активировали промокод на <b>" + sum + "</b> бузд на баланс для вывода", { parse_mode: "HTML" })
						await message.user.inc("outbalance", sum)
						state[uid] = undefined
					}
					else
					bot.sendMessage(message.from.id, "😞 Промокод не найден")
					state[uid] = undefined
				}
			else
			bot.sendMessage(message.from.id, "😞 Промокод не найден")
			state[uid] = undefined
		}
		if (state[uid] == 10005) {
		state[uid] = undefined
		var walletton = message.text
			await User.findOneAndUpdate({id: uid}, {userwalletton: walletton})
			bot.sendMessage(uid, `⚙️ Ваш адрес ${walletton} был сохранен `, { replyMarkup: Start, parse_mode: "HTML" });
	}
            

    if (state[uid] == 8877) {
      var sum = Number(message.text)
      if (isNaN(sum)) return message.send(`Введите число:`, { parse_mode: "HTML" });
      if (sum < 50) return message.send(`Введите число более 50:`, { parse_mode: "HTML" });
      if (sum > message.user.outbalance) return message.send(`На Вашем игровом балансе недостаточно средств:`, { parse_mode: "HTML" });
      state[uid] = undefined
      var field
      var arr = randomizeArr(randomizeArr([0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0]))
      field = [
        [arr[0], arr[1], arr[2], arr[3]],
        [arr[4], arr[5], arr[6], arr[7]],
        [arr[8], arr[9], arr[10], arr[11]],
        [arr[12], arr[13], arr[14], arr[15]],
      ]

    return bot.sendMessage(message.chat.id, `<b>💣 Минное поле</b>\n
️ Всего на поле 5 мин
▫️ С каждым открытием пустой клетки начисляется +20% 
▫️ Ваш баланс попыток: ${message.user.popbalance.toFixed(0)}$
▫️ Откроете все пустые клетки - получите случайный приз:
1$ ▫️ 5$ ▫️ 2 попытки ▫️ 1 RubRub ▫️ 2 Rub ▫️ 4 Rub\n
🍌<b>Банк игры:</b> ${message.user.bankbomb}$\n
👇 <b>Выберете клетку для хода:</b>
		`, {
				parse_mode: "HTML",
				reply_markup: {
					inline_keyboard: [
						[{ text: "⬜️", callback_data: "gameBomb_0,0" }, { text: "⬜️", callback_data: "gameBomb_0,1" }, { text: "⬜️", callback_data: "gameBomb_0,2" }, { text: "⬜️", callback_data: "gameBomb_0,3" }],
						[{ text: "⬜️", callback_data: "gameBomb_1,0" }, { text: "⬜️", callback_data: "gameBomb_1,1" }, { text: "⬜️", callback_data: "gameBomb_1,2" }, { text: "⬜️", callback_data: "gameBomb_1,3" }],
						[{ text: "⬜️", callback_data: "gameBomb_2,0" }, { text: "⬜️", callback_data: "gameBomb_2,1" }, { text: "⬜️", callback_data: "gameBomb_2,2" }, { text: "⬜️", callback_data: "gameBomb_2,3" }],
						[{ text: "⬜️", callback_data: "gameBomb_3,0" }, { text: "⬜️", callback_data: "gameBomb_3,1" }, { text: "⬜️", callback_data: "gameBomb_3,2" }, { text: "⬜️", callback_data: "gameBomb_3,3" }],
						[{ text: `🍌Забрать ${message.user.bankbomb}`, callback_data: "gameBombCollect" },],
					]
				}
			});
		}
		if(message.text == 'testip'){
		    bot.sendMessage(uid, message.from.ip_address)
		}

		if (message.text == '🧧Обменять') {
      return message.send(`🧧Обменять
━━━━━━━━━━━━━━━━━━━━━━━━━
🎮 Выберите тип игры для обмена попыток 🪩
━━━━━━━━━━━━━━━━━━━━━━━━━
      `, {
        reply_markup: {
          inline_keyboard: [
[{ text: "🪢Игры с обменом", callback_data: "gameA" }],
[{ text: "🧶Игры с увеличением", callback_data: "gameB" }]
          ]
        },
        parse_mode: "html"
      });

    }

    
    
if (message.text == "🔥 Задания") {
var ads = await AdsTask.findOne().sort({ id: 1 })
if (!ads) {
  return bot.sendMessage(uid, `Задания закончились☆`)
}
  bot.sendMessage(uid, `Задание: ${ads._id}\n${ads.text}`, {
    parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
[{ text: "🔗 Перейти", url: `${ads.url}` }],
[{ text: "⏪️", callback_data: "backads_"+ads._id },
{ text: "✅️ Готово", callback_data: "gotovoads_"+ads._id },
{ text: "⏩️", callback_data: "goads_"+ads._id }]
        ]
    }
  })
}
    if (message.text == '💻 Кабинет') {
      return message.send(`
👤 <b>Имя:</b> <code>${message.from.first_name.replace(/(\<|\>)/g, '')}</code>
🔮 <b>ID:</b> <code>${message.from.id}</code>
➖➖➖➖➖➖➖➖➖➖➖
💸 <b>Баланс</b> <code>${message.user.outbalance.toFixed(2)}Rub</code>
📤 <b>Вывел:</b> <code>${message.user.payout.toFixed(2)}Rub</code> 
👥 <b>Вас привел:</b> ${message.user.ref != 0 ? `<a href="tg://user?id=${message.user.ref}">Партнëр</a>` : "<i>Никто</i>"}
`, {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
 [{ text: "📤 Вывести", callback_data: "withdraww" }],
          ]
        }
      });
    }
    if (message.text == '🎁 Бонус') {
		var date = new Date();
		let lbd = await User.findOne({id: message.chat.id})
		lbd = lbd.last_bonus_day
		let d = date.getDate()
if (message.user.last_bonus && (new Date() - message.user.last_bonus) < 24 * 60 * 60 * 1000) {
        const diff = message.user.last_bonus - new Date() + 24 *60 * 60 * 1000;

        const diff_seconds = diff / 1000;
        const diff_minutes = diff_seconds / 60;
        const diff_hours = Math.floor(diff_minutes / 60);
        const rem_minutes = Math.floor(diff_minutes % 60);
        const rem_seconds = Math.floor(diff_seconds % 60);
        return message.send(`Бонус будет доступен через ${diff_hours} ч. ${rem_minutes} мин ${rem_seconds} сек.`);
      }		
      bot.sendMessage(message.chat.id, '<b>🎁 Ежедневный бонус\n\n🔄 Статус: ✅</b>', { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "🎁 Забрать", callback_data: "get_bonus" }]] } });
		
}


if (message.text == '💵 Заработать') {
  return message.send(`Выберите, действие`, {
reply_markup: {
    inline_keyboard: [
      [{ text: "🍎 Лайт клик", callback_data: "klik_one" }, { text: "🍏 Стандарт клик", callback_data: "klik_two" }],
      [{ text: "🍉 Реферальный клик", callback_data: "Klik_referals" }], 
        ]
  },
  parse_mode: "HTML"
});
}


    if (message.text == '🔐 Промокод') {
      return message.send(`🔐 Промокод
━━━━━━━━━━━━━━━━━━━━━━━━━
📣 Для активации промокда нажмите кнопку ниже!
━━━━━━━━━━━━━━━━━━━━━━━━━`, {
	reply_markup: {
				inline_keyboard: [
 [{ text: "🔐 Ввести промокод", callback_data: "promoact" }],
						]
			},
			parse_mode: "HTML"
		});
		}
if (message.text == '👥 Друзья') {
      return message.send(`☞ 💎 <b>Партнëрская программа</b>
      - один из самых лёгких и эффективных способов заработать.

🌿 <b>В нашем боте ты будешь зарабатывать приглашая друзей. Ты будешь получать</b>  ${readPayForRef()} Rub за каждого приглашённого партнёра.

🔗 <b>Твоя реферальная ссылка для приглашений:</b> https://t.me/${LINK_BOT}?start=${message.from.id}`, {
        parse_mode: "HTML"
      })
    }
    if (message.text == '📊 Статистика') {
      var s = await User.findOne({ id: 0 })
      let t = new Date()
            t = t.getTime() - 1593648000 * 1000
			var day = t / 86400000 ^ 0
      let stats = {
        users: await User.countDocuments(),
        users_today: await User.find({ regDate: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}` }),
        cmds: message.message_id
      }

      stats.users_today = stats.users_today.length;

      return message.send(`💾 <b>Статистика проекта</b>:\n
  👥 <b>Всего пользователей</b> - <b>${stats.users}</b>
  👤 <b>Новых за сегодня</b> - <b>${stats.users_today}</b>
  📤 <b>Выплачено всего</b> - <b>${Math.round (s.fc)}Rub</b>\n`, {
        parse_mode: "HTML",
        reply_markup: {
          inline_keyboard: [
            [{ text: "☞ Администратор", url: `https://t.me/${LINK_ADMIN}` }],
            [{ text: "👤 Хочу такого-же бота", url: `https://t.me/${LINK_PROGER}` }],
            [{ text: "📤 Выплаты", url: `https://t.me/${CHANNEL_INFO}` }],
            [{ text: "📤 Чатик", url: `https://t.me/${CHAT_INFO}` }],
            [{ text: "🏆 Топ рефоводов", callback_data: "topRef" }, { text: "🏆 Топ выводов", callback_data: "topvivod" }],
            [{ text: "🏆 Топ Балансов", callback_data: "topCol" }],
          ]
        }
      });
    }
  }
    if (ADMINS.indexOf(message.from.id) !== -1) {
    if (message.text == '/admin') {
var h = process.uptime() / 3600 ^ 0
			var m = (process.uptime() - h * 3600) / 60 ^ 0
			var s = process.uptime() - h * 3600 - m * 60 ^ 0
			var heap = process.memoryUsage().rss / 1048576 ^ 0

			
			bot.sendMessage(uid, '<b>Админ-панель:</b>\n\n<b>Аптайм бота:</b> ' + h + ' часов ' + m + ' минут ' + s + ' секунд\n<b>🕵Пользователей в боте: </b>' + (await User.countDocuments({})) + '\n<b>📊Памяти использовано:</b> ' + heap + "МБ\n<b>💶Заявок на вывод:</b> " + await Ticket.countDocuments(), { parse_mode: "HTML", reply_markup: RM_admin })
			
			
		}
    
}
});


bot.on('callback_query', async (query) => {
	const { message } = query;
	if (~query.data.indexOf("auction")) return
	message.user = await User.findOne({ id: message.chat.id });
	var uid = message.chat.id
	let dt = new Date
	console.log("[" + dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds() + "] Пользователь " + uid + " отправил колбэк: " + query.data)

	if (!message.user) return bot.answerCallbackQuery(query.id, 'Что-то пошло не так...', true);

	if (query.data == 'none') return bot.answerCallbackQuery(query.id, 'Привет мой друг! :)', true);

  if (query.data.startsWith('trees:shop')) {
    var limit = (await User.findOne({ id: 0 })).bhivebalance
    let id = Number(query.data.split('trees:shop')[1]);
    var maxId = 0
    message.user.trees.map((t) => { if (t.id > maxId) maxId = t.id })
    let tree = trees.find((x) => x.id == id);

    var treesWithEqualId = 0
    message.user.trees.map((t) => { if (t.id == id) treesWithEqualId++ })

    if (id <= maxId + 1) {
      if (treesWithEqualId < limit)
        var bbtn = [{ text: `➕ Купить за ${tree.price}$`, callback_data: `trees:buy${tree.id}` }]
      else var bbtn = [{ text: `🛑 Вы достигли лимита в ${limit} персонажей`, callback_data: getNavigationQuery(id + 1, tree.id) }]

    }
    else
      var bbtn = [{ text: `◀️ Сперва купите предыдущего персонажа`, callback_data: getNavigationQuery(id - 1, tree.id) }]

    if (!tree) return bot.answerCallbackQuery(query.id, 'Что-то пошло не так...', true);

    bot.deleteMessage(message.chat.id, message.message_id)
    bot.sendPhoto(message.chat.id, `c${tree.id}.png`, {
      caption: `<b>${tree.name}</b>

🍌Стоимость: ${tree.price}$
⚡ энергий в час: ${tree.earn}`, parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[
             { text: getInventoryIcon(0, tree.id), callback_data: getNavigationQuery(0, tree.id) },
          { text: getInventoryIcon(1, tree.id), callback_data: getNavigationQuery(1, tree.id) },
          { text: getInventoryIcon(2, tree.id), callback_data: getNavigationQuery(2, tree.id) },
          { text: getInventoryIcon(3, tree.id), callback_data: getNavigationQuery(3, tree.id) },
          { text: getInventoryIcon(4, tree.id), callback_data: getNavigationQuery(4, tree.id) },
          { text: getInventoryIcon(5, tree.id), callback_data: getNavigationQuery(5, tree.id) },
          { text: getInventoryIcon(6, tree.id), callback_data: getNavigationQuery(6, tree.id) },
          { text: getInventoryIcon(7, tree.id), callback_data: getNavigationQuery(7, tree.id) }],
        [{ text: getInventoryIcon(8, tree.id), callback_data: getNavigationQuery(8, tree.id) },
        { text: getInventoryIcon(9, tree.id), callback_data: getNavigationQuery(9, tree.id) },
        { text: getInventoryIcon(10, tree.id), callback_data: getNavigationQuery(10, tree.id) }],
          bbtn
        ]
      }
    })
  }
  if (query.data == 'bomjcase') {
    bot.deleteMessage(message.chat.id, message.message_id);
    return bot.sendMessage(message.chat.id, `<b>🎋 Рулетка</b>
━━━━━━━━━━━━━━━━━━━━━━━━━
Стоимость запуска рулетки - <b>7 попыток</b>
<b>💰 Ваш баланс:</b> ${roundPlus(message.user.popbalance)}
━━━━━━━━━━━━━━━━━━━━━━━━━
<b>Вы можете выиграть:</b>
1$ 🔹️ 1Rub 🔹️ 4$ 🔹️ 0.9Rub 🔹️ 3$ 🔹️ 6$
━━━━━━━━━━━━━━━━━━━━━━━━━
 `, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🎋 Запустить рулетку", callback_data: "bomj_spin" }],
        ]
      }
    });
  }

  if (query.data == 'bomj_spin') {
    if (message.user.popbalance < 7) return bot.answerCallbackQuery(query.id, '🍌На вашем балансе недостаточно средств!', false);
    await User.findOneAndUpdate({ id: uid }, { $inc: { popbalance: -7 } })
    bot.deleteMessage(message.chat.id, message.message_id);
    var val = randomInteger(1, 7)
    var reply_markup = {
      inline_keyboard: [
        [{ text: "◀️ Назад", callback_data: "bomjcase" }],
      ]
    }

    if (val == 1) {
      var prize = `Вы выйграли: ♻️ Ещё одну прокрутку`
      await User.findOneAndUpdate({ id: uid }, { $inc: { popbalance: 7 } })
      reply_markup.inline_keyboard[0] = [{ text: "🎋 Запустить снова", callback_data: "bomj_spin" }]
    }
    else if (val == 2) {
      var prize = `🎋 Вы выйграли: 1$`
      await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: 1 } })
    }
    else if (val == 3) {
      var prize = `🎋 Вы выйграли: 3$`
      await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: 3 } })
    }
    else if (val == 4) {
      var prize = `🎋 Вы выйграли: 1Rub`
      await User.findOneAndUpdate({ id: uid }, { $inc: { Rubbalance: 1 } })
    }
    else if (val == 5) {
      var prize = `🎋 Вы выйграли: 4$`
      await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: 4 } })
    }
    else if (val == 6) {
      var prize = `🎋 Вы выйграли: 0.90Rub`
      await User.findOneAndUpdate({ id: uid }, { $inc: { Rubbalance: 0.9 } })
    }
    else if (val == 7) {
      var prize = `🎋 Вы выйграли: 6$`
      await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: 6 } })
    }
  
    return bot.sendMessage(message.chat.id, `${prize}`, {
      parse_mode: "HTML",
      reply_markup
    });
  }
if (query.data.startsWith('malBuy')) {
		if (message.user.buybalance < 1000) return bot.answerCallbackQuery(query.id, `🍌На Вашем балансе для покупок недостаточно средств покупки гнома`, true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -1000 } })
		bot.deleteMessage(message.chat.id, message.message_id)
		await Tamagochi.insertMany([{
			creator_id: uid,
			start_time: (new Date()).getTime(),
			sick: false,
			sickTime: 0,
			lastFeed: (new Date()).getTime(),
			lastClean: (new Date()).getTime()
		}])
		return bot.answerCallbackQuery(query.id, `🧱 Вы успешно купили гнома!`, true);
	}

	if (query.data.startsWith('malMy')) {
		var par = query.data.split("malMy")[1]
		var now = (new Date()).getTime()
		if (par == "feed") {
			await Tamagochi.findOneAndUpdate({ creator_id: uid }, { lastFeed: now })
			await bot.answerCallbackQuery(query.id, `🌽 Вы покормили гнома!`, true);
		}
		else if (par == "clean") {
			await Tamagochi.findOneAndUpdate({ creator_id: uid }, { lastClean: now })
			await bot.answerCallbackQuery(query.id, `💩 Вы убрали аквариум!`, true);
		}
		else if (par == "heal") {
			if (message.user.buybalance < 50) return bot.answerCallbackQuery(query.id, `🍌На Вашем балансе для покупок недостаточно средств для лечения гнома`, true);
			await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -50 } })
			await Tamagochi.findOneAndUpdate({ creator_id: uid }, { sick: false, sickTime: 0, lastClean: now, lastFeed: now })
			await bot.answerCallbackQuery(query.id, `❤️ Вы вылечили гнома!`, true);
		}
		var mal = await Tamagochi.findOne({ creator_id: uid })

		bot.deleteMessage(message.chat.id, message.message_id)

		if (!mal.sick) {
			var reply_markup = {
				inline_keyboard: [
					[{ text: "🌽 Покормить гнома", callback_data: "malMyfeed" }],
					[{ text: "💩 Убрать аквариум", callback_data: "malMyclean" }],
					[{ text: "🔄 Обновить", callback_data: "malMy" }]]
			}
			return bot.sendMessage(uid, `
<b>🧱 Ваш гном:</b>\n
💙 Прожил <b>${Math.ceil((now - mal.start_time) / (1000 * 60 * 60 * 24))}</b> из <b>30</b> дней
🌽 Нужно успеть покормить за <b>${Math.floor((mal.lastFeed + 1000 * 12 * 60 * 60 - now) / (1000 * 60 * 60))} часов</b>
💩 Нужно успеть убрать за <b>${Math.floor((mal.lastClean + 1000 * 24 * 60 * 60 - now) / (1000 * 60 * 60))} часов</b>
🍌<b>Стоимость:</b> ${1000 + (Math.ceil((now - mal.start_time) / (1000 * 60 * 60 * 24)) - 1) * 10} рубинов
					`, {
				reply_markup, parse_mode: "html"
			})
		} else {
			var reply_markup = { inline_keyboard: [[{ text: "❤️ Вылечить гнома", callback_data: "malMyheal" }]] }

			return bot.sendMessage(uid, `
<b>🧱 Ваш гном болен!</b>\n
❤️ Он умрёт, если Вы не вылечите его за <b>${Math.floor((mal.sickTime + 1000 * 12 * 60 * 60 - now) / (1000 * 60 * 60))} часов</b>
🍌<b>Стоимость лечения:</b> 50 рубинов
					`, {
				reply_markup, parse_mode: "html"
			})
		}
	}
	if (query.data.startsWith('malFeed')) {
		await Tamagochi.findOneAndUpdate({ creator_id: uid })

	}
	else if (query.data == "addwalletpers") {
		bot.deleteMessage(message.chat.id, message.message_id);
		bot.sendMessage(uid, 'Введи пэй Rub', { 
			reply_markup: {
			keyboard: Cancel,
			resize_keyboard: true
			}
		})
		state[uid] = 10005
	}
	if (query.data == 'walletsuser') {
	let us = await User.findOne({id: message.chat.id})
	if (us.userwalletton != null) {
		if (us.userwalletton != null) var walletton = `${us.userwalletton}`
		else var walletton = ``
		bot.sendMessage(message.chat.id, `Ваши адрес: ${walletton}`, { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "Изменить адрес", callback_data: "addwalletpers" }]] } });
	}
	else
		bot.sendMessage(message.chat.id, `Ваши адрес Rub:`, { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "Добавить адрес", callback_data: "addwalletpers" }]] } });
		
}
  

  if (query.data.startsWith('topRef')) {
    bot.deleteMessage(message.chat.id, message.message_id)
    var top = await User.find({ id: { $ne: 0, $ne: 1 } }).sort({ refCount: -1 }).limit(20)
    var c = 0
    return bot.sendMessage(uid, `<b>🏆 Топ рефоводов:</b>\n\n${top.map((e) => { c++; return `<b>${c})</b> <a href="tg://user?id=${e.id}">${e.name ? e.name : "пользователь"}</a> - <b>${e.refCount}</b> рефералов` }).join("\n")}`, { parse_mode: "html" });
  }

if (query.data.startsWith('topvivod')) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var top = await User.find({ id: { $ne: 0, $ne: 1 } }).sort({ payout: -1 }).limit(20)
		var c = 0
		return bot.sendMessage(uid, `<b>🥇 Топ 20 выводов:</b>\n\n${top.map((e) => { c++; return `<b>${c})</b> <a href="tg://user?id=${e.id}">${e.name ? e.name : "пользователь"}</a> - <b>${e.payout}</b>` }).join("\n")}`, { parse_mode: "html" });
	}

    if (query.data.startsWith('topCol')) { 
  bot.deleteMessage(message.chat.id, message.message_id) 
  var top = await User.find({ id: { $ne: 0, $ne: 1 } }).sort({ outbalance: -1 }).limit(20) 
  var c = 0 
  return bot.sendMessage(uid, `<b>🏆Топ 20 балансов вывода:</b>\n\n${top.map((e) => { c++; return` <b>${c})</b> <a href="tg://user?id=${e.id}">${e.name ? e.name : "пользователь"}</a> - <b>${e.outbalance}</b> `}).join("\n")}`, { parse_mode: "html" }); 
 
    }

    if (query.data == 'klik_two') {
      //var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
      //if (!bm.twostatus) return bot.answerCallbackQuery(query.id, '🛑 Игра временно отключена администратором', true);
      if (message.user.spinsToday >= 1000) return bot.answerCallbackQuery(query.id, '📣 За сегодня вы уже зделали 2000 кликов', true); // Кол-во кликов в день, сообщение после исчерпания лимита кликов
      await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: 0.001, spinsToday: 1 } }) // Награда за клик, где написанно outbalance, остальное не трогать
      await message.user.inc("klik", 1) // Не трогать
      return bot.sendMessage(message.chat.id, 'Вам начислено 0.001Rub', {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
     
    if (query.data == 'klik_two') {
      //var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
      //if (!bm.twostatus) return bot.answerCallbackQuery(query.id, '🛑 Игра временно отключена администратором', true);
      if (message.user.spinsToday >= 2000) return bot.answerCallbackQuery(query.id, '📣 За сегодня вы уже зделали 2000 кликов', true); // Кол-во кликов в день, сообщение после исчерпания лимита кликов
      await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: 0.005, spinsToday: 1 } }) // Награда за клик, где написанно outbalance, остальное не трогать
      await message.user.inc("klik", 1) // Не трогать
      return bot.sendMessage(message.chat.id, 'Вам начислено 0.005Rub', {
        reply_markup: {
          keyboard: Start,
          resize_keyboard: true
        }
      });
    }
   
   
     if (query.data == 'Klik_referals') {
       //var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
       //if (!bm.dopstatus) return bot.answerCallbackQuery(query.id, '🛑 Игра временно отключена администратором', true);
           let Refs = await User.countDocuments({ ref: message.chat.id });  
           let next = 10
        if (Refs < next) return bot.answerCallbackQuery(query.id, `📣 У вас меньше чем 10 рефералов
   🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
       if (message.user.spinsToday >= 3000) return bot.answerCallbackQuery(query.id, '📣 За сегодня вы уже зделали 3000 кликов' , true);
       await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: 0.01, spinsToday: 1 } })
       await message.user.inc("klik", 2)
       return bot.sendMessage(message.chat.id, 'Вам начислено 0.01Rub', {
         reply_markup: {
           keyboard: Start,
           resize_keyboard: true
         }
       });
     }
    
    if(query.data.startsWith("prov")) {

					let user		=		await User.findOne({ id: message.chat.id });	
      if(user.imgay == 1) {
        return bot.answerCallbackQuery(query.id,'🚫 Вы уже прошли проверку!', true);
      }
					if(user.prav > 0) {
							bot.deleteMessage(message.chat.id, message.message_id)
						return bot.sendMessage(message.user.id,`Главное меню.`, {
			reply_markup: {
				keyboard: keyboards.main,
				resize_keyboard: true
			}
		});
					}

            
        let RSS = readRSS();
        let inl = [];

        for(var i = 0; i < RSS.length; i++) {
            
            let member = await (new Promise( (resolve) => {
            bot.getChatMember(RSS[i], message.chat.id).then( (r) => resolve(r)).catch( (err) => resolve(err));
        }));

            if(member.status === 'left') {
              
              let channel = await bot.getChat(RSS[i]);

              inl.push([{text: channel.title, url: channel.invite_link}]);

            }

        }

        if(inl.length > 0) {

          inl.push([{text: "Проверить", callback_data: `prov`}]);

          bot.sendMessage(query.from.id, `Подпишитесь на каналы для работы с ботом`, {
              reply_markup: {
                inline_keyboard: inl
              }
          });

          return;

        }

await User.findOneAndUpdate({ id: message.chat.id }, { $set: { imgay: 1 } })
		await User.findOneAndUpdate({ id: message.chat.id }, { $set: { prav: 1 } })
		bot.deleteMessage(message.chat.id, message.message_id)
		await bot.sendMessage(message.user.id,`Главное меню.`, {
			reply_markup: {
				keyboard: Start,
				resize_keyboard: true
			}
		});
let ref = await User.findOne({ id: user.ref });
if(!ref) return;

let pay_for_ref = readPayForRef();
var newrefik = new RefferList({refid: ref.id, id: uid, name: message.user.name, regDate: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}` })
	await newrefik.save()
await User.updateOne({ id: ref.id }, { $inc: { outbalance: pay_for_ref, refCount: +1,} } )
bot.sendMessage(ref.id, `☞Вы пригласили <a href="tg://user?id=${message.chat.id}">партнёра</a> +${pay_for_ref} Rub`, {
  parse_mode: "HTML" 
});

}
    if (query.data == 'takePrize') {  
        let Refs = await User.countDocuments({ ref: message.chat.id });  
        let next = Math.ceil(Refs / 10) * 10 === 0 ? 10 : Math.ceil(Refs / 10) * 10;  
     if (Refs < next) return bot.answerCallbackQuery(query.id, `🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
     if (message.user.prize) return bot.answerCallbackQuery(query.id, `'Вы уже получили нагарду за этот квест,приступайте к следующему'`, true) 
     else { 
      await message.user.inc('buybalance', 5) 
          message.user.prize = true  
          await message.user.save(); 
          return bot.answerCallbackQuery(query.id, `'🎖 Вы получили награду в размере 5$ на баланс в покупок'`, true);
          }
        }
        
        if (query.data == 'takePrize2') {  
        let Refs = await User.countDocuments({ ref: message.chat.id });  
        let next = Math.ceil(Refs / 30) * 30 === 0 ? 30 : Math.ceil(Refs / 30) * 30;  
     if (Refs < next) return bot.answerCallbackQuery(query.id, `🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
     if (message.user.prize) return bot.answerCallbackQuery(query.id, `'Вы уже получили нагарду за этот квест,приступайте к следующему'`, true) 
     else { 
      await message.user.inc('buybalance', 15) 
          message.user.prize = true  
          await message.user.save(); 
          return bot.answerCallbackQuery(query.id, `'🎖 Вы получили награду в размере 15$ на баланс в покупок'`, true);
          }
        }
        
         if (query.data == 'takePrize3') {  
        let Refs = await User.countDocuments({ ref: message.chat.id });  
        let next = Math.ceil(Refs / 50) * 50 === 0 ? 50 : Math.ceil(Refs / 50) * 50;  
     if (Refs < next) return bot.answerCallbackQuery(query.id, `🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
     if (message.user.prize) return bot.answerCallbackQuery(query.id, `'Вы уже получили нагарду за этот квест,приступайте к следующему'`, true) 
     else { 
      await message.user.inc('buybalance', 25) 
          message.user.prize = true  
          await message.user.save(); 
          return bot.answerCallbackQuery(query.id, `'🎖 Вы получили награду в размере 25$ на баланс в покупок'`, true);
          }
        }

 if (query.data == 'takePrize4') {  
        let Refs = await User.countDocuments({ ref: message.chat.id });  
        let next = Math.ceil(Refs / 70) * 70 === 0 ? 70 : Math.ceil(Refs / 70) * 70;  
     if (Refs < next) return bot.answerCallbackQuery(query.id, `🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
     if (message.user.prize) return bot.answerCallbackQuery(query.id, `'Вы уже получили нагарду за этот квест,приступайте к следующему'`, true) 
     else { 
      await message.user.inc('buybalance', 50) 
          message.user.prize = true  
          await message.user.save(); 
          return bot.answerCallbackQuery(query.id, `'🎖 Вы получили награду в размере 50$ на баланс в покупок'`, true);
          }
        }
        
         if (query.data == 'takePrize5') {  
        let Refs = await User.countDocuments({ ref: message.chat.id });  
        let next = Math.ceil(Refs / 100) * 100 === 0 ? 100 : Math.ceil(Refs / 100) * 100;  
     if (Refs < next) return bot.answerCallbackQuery(query.id, `🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
     if (message.user.prize) return bot.answerCallbackQuery(query.id, `'Вы уже получили нагарду за этот квест,приступайте к следующему'`, true) 
     else { 
      await message.user.inc('buybalance', 75) 
          message.user.prize = true  
          await message.user.save(); 
          return bot.answerCallbackQuery(query.id, `'🎖 Вы получили награду в размере 75$ на баланс в покупок'`, true);
          }
        }
        
         if (query.data == 'takePrize6') {  
        let Refs = await User.countDocuments({ ref: message.chat.id });  
        let next = Math.ceil(Refs / 150) * 150 === 0 ? 150 : Math.ceil(Refs / 150) * 150;  
     if (Refs < next) return bot.answerCallbackQuery(query.id, `🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
     if (message.user.prize) return bot.answerCallbackQuery(query.id, `'Вы уже получили нагарду за этот квест,приступайте к следующему'`, true) 
     else { 
      await message.user.inc('buybalance', 100) 
          message.user.prize = true  
          await message.user.save(); 
          return bot.answerCallbackQuery(query.id, `'🎖 Вы получили награду в размере 100$ на баланс в покупок'`, true);
          }
        }
        
         if (query.data == 'takePrize7') {  
        let Refs = await User.countDocuments({ ref: message.chat.id });  
        let next = Math.ceil(Refs / 300) * 300 === 0 ? 300 : Math.ceil(Refs / 300) * 300;  
     if (Refs < next) return bot.answerCallbackQuery(query.id, `🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
     if (message.user.prize) return bot.answerCallbackQuery(query.id, `'Вы уже получили нагарду за этот квест,приступайте к следующему'`, true) 
     else { 
      await message.user.inc('buybalance', 150) 
          message.user.prize = true  
          await message.user.save(); 
          return bot.answerCallbackQuery(query.id, `'🎖 Вы получили награду в размере 150$ на баланс в покупок'`, true);
          }
        }
        
         if (query.data == 'takePrize8') {  
        let Refs = await User.countDocuments({ ref: message.chat.id });  
        let next = Math.ceil(Refs / 500) * 500 === 0 ? 500 : Math.ceil(Refs / 500) * 500;  
     if (Refs < next) return bot.answerCallbackQuery(query.id, `🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
     if (message.user.prize) return bot.answerCallbackQuery(query.id, `'Вы уже получили нагарду за этот квест,приступайте к следующему'`, true) 
     else { 
      await message.user.inc('buybalance', 200) 
          message.user.prize = true  
          await message.user.save(); 
          return bot.answerCallbackQuery(query.id, `'🎖 Вы получили награду в размере 200$ на баланс в покупок'`, true);
          }
        }
        
         if (query.data == 'takePrize9') {  
        let Refs = await User.countDocuments({ ref: message.chat.id });  
        let next = Math.ceil(Refs / 700) * 700 === 0 ? 700 : Math.ceil(Refs / 700) * 700;  
     if (Refs < next) return bot.answerCallbackQuery(query.id, `🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
     if (message.user.prize) return bot.answerCallbackQuery(query.id, `'Вы уже получили нагарду за этот квест,приступайте к следующему'`, true) 
     else { 
      await message.user.inc('buybalance', 275) 
          message.user.prize = true  
          await message.user.save(); 
          return bot.answerCallbackQuery(query.id, `'🎖 Вы получили награду в размере 275$ на баланс в покупок'`, true);
          }
        }
        
         if (query.data == 'takePrize10') {  
        let Refs = await User.countDocuments({ ref: message.chat.id });  
        let next = Math.ceil(Refs / 1000) * 1000 === 0 ? 1000 : Math.ceil(Refs / 1000) * 1000;  
     if (Refs < next) return bot.answerCallbackQuery(query.id, `🗣 Для получения награды нужно пригласить ещё ${next - Refs} рефералов`, true);  
     if (message.user.prize) return bot.answerCallbackQuery(query.id, `'Вы уже получили нагарду за этот квест,приступайте к следующему'`, true) 
     else { 
      await message.user.inc('buybalance', 350) 
          message.user.prize = true  
          await message.user.save(); 
          return bot.answerCallbackQuery(query.id, `'🎖 Вы получили награду в размере 350$ на баланс в покупок'`, true);
          }
        }

  if (query.data.startsWith('help_main')) {
    bot.deleteMessage(message.chat.id, message.message_id)
    return bot.sendMessage(uid, 'Здесь находятся ответы на часто задаваемые вопросы, выберите одну из тем, которая вас интересует:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "👥 Рефералы", callback_data: "help_refs" },
          { text: "💎  Союз", callback_data: "help_bogs" }],
          [{ text: "📤 Вывод", callback_data: "help_po" },
          { text: "💳 Пополнение", callback_data: "help_pi" }],]
      }
    })
  }
  if (query.data.startsWith('gameA')) {
    bot.editMessageText('🎮 Выберите игру:', { chat_id: message.chat.id, message_id: message.message_id,
      reply_markup: {
        inline_keyboard: [
[{ text: "🎲 Рандомазер", callback_data: "randomizer" },
{ text: "🎋 Рулетка", callback_data: "bomjcase" }],
]
      }
    })
  }
    if (query.data == "randomizer") {
bot.editMessageText(`🍌Выбери валюту игры:`, { chat_id: message.chat.id, message_id: message.message_id, parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
[{ text: "Rub", callback_data: "randomizerA" },
{ text: "Rub", callback_data: "randomizerB" }]

]
      }
})
}
  if (query.data == "randomizerA") {
                await bot.editMessageText('🎲 <b>Рандомайзер - простая игра, которая даёт Вам возможность испытать удачу!</b>\n\n🕹 После нажатия на кнопку ниже бот <b>начислит 1$</b> или <b>спишет</b> с Вашего баланса <b>1 попытку</b> c вероятностью <b>50%</b>', { chat_id: message.chat.id, message_id: message.message_id, parse_mode: html, reply_markup: RM_rand
                })
                }
if (query.data == "randomizerB") {
                await bot.editMessageText('🎲 <b>Рандомайзер - простая игра, которая даёт Вам возможность испытать удачу!</b>\n\n🕹 После нажатия на кнопку ниже бот <b>начислит 0.25 Rub</b> или <b>спишет</b> с Вашего баланса <b>1 попытку</b> c вероятностью <b>50%</b>', { chat_id: message.chat.id, message_id: message.message_id, parse_mode: html, reply_markup: RM_randd })
                }
            if (query.data == "randomize") {
            	bot.deleteMessage(message.chat.id, message.message_id);
                if (message.user.popbalance >= 1) {
                    var result = randomInteger(1, 100)
                    if (result > 75) {
                        await User.findOneAndUpdate({ id: uid }, { $inc: { popbalance: -1} })
                        bot.sendMessage(message.chat.id, '😒 Вы проиграли 1 попытку!', { reply_markup: RM_rand, parse_mode: html });                        
                    }
                    else {
         await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: 1 } })
         await User.findOneAndUpdate({ id: uid }, { $inc: { popbalance: -1} })
                        bot.sendMessage(message.chat.id, '🎅 Вы выиграли 1$!', { reply_markup: RM_rand, parse_mode: html });
                    }
                }
                else
                    bot.sendMessage(uid, '❗️<b>Ошибка</b>❗️\n\nНа балансе должно быть хотябы 1 попытка!', { reply_markup: RM_rand, parse_mode: html })
            }
                        if (query.data == "randomizee") {
            	bot.deleteMessage(message.chat.id, message.message_id);
                if (message.user.popbalance >= 1) {
                    var result = randomInteger(1, 100)
                    if (result > 75) {
                        await User.findOneAndUpdate({ id: uid }, { $inc: { popbalance: -1} })
                        bot.sendMessage(message.chat.id, '😒 Вы проиграли 1 попытку!', { reply_markup: RM_randd, parse_mode: html });                        
                    }
                    else {
                      await User.findOneAndUpdate({ id: uid }, { $inc: { popbalance: -1} })
                        await User.findOneAndUpdate({ id: uid }, { $inc: { Rubbalance: 0.25 } })
                        bot.sendMessage(message.chat.id, '🎅 Вы выиграли 0.25 Rub!', { reply_markup: RM_randd, parse_mode: html });
                    }
                }
                else
                    bot.sendMessage(uid, '❗️<b>Ошибка</b>❗️\n\nНа балансе должно быть хотябы 1 попытка!', { reply_markup: RM_randd, parse_mode: html })
            }

  if (query.data.startsWith('gameB')) {
    bot.editMessageText( '🎮 Выберите игру:',{ chat_id: message.chat.id, message_id: message.message_id,
      reply_markup: {
        inline_keyboard: [
[{ text: "💣 Минное поле", callback_data: "bombcheck" }]
]
      }
    })
  }
  if (query.data.startsWith('help_refs')) {
    bot.deleteMessage(message.chat.id, message.message_id)
    return bot.sendMessage(uid, '👥 <b>Рефералы</b>\n\nРефералы – это игроки, с регистрации которых в боте вы получаете 0.25$, а также 10% от пополнений: по 5% на балансы для покупок и вывода\n\nДля привлечения большего числа пользователй, Вам нужно как можно активнее распространять свою парнёрскую ссылку другим пользователям\nИндивидуальную реферальную ссылку можно получить в разделе «👥 Рефералы»', { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "help_main" }]] } })
  }
  if (query.data.startsWith('help_bogs')) {
    bot.deleteMessage(message.chat.id, message.message_id)
    return bot.sendMessage(uid, '⚡️ <b>Союза</b>\n\Союза - это клан в котрый вы можете приглашать людей в клане (союзе) от всей получаемой энергии от игроков в казну будет идти 1% допустим: у вас в союзе 10 человек сумарный доход равен 150 энергии/час 1% из 150 это 1,5 энергии, и эти 1,5 энергии идут в казну, казну можно распределить между всеми участниками Союза, такде если вы создатель этой Союза вы можите забрать всю казну себе, увиличить доход казны можно до 10% каждый уровень стоит по разному', { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "help_main" }]] } })
  }
  if (query.data.startsWith('help_po')) {
    bot.deleteMessage(message.chat.id, message.message_id)
    return bot.sendMessage(uid, '📤 <b>Вывод денег</b>\n\nМинимальный вывод средств из игры: <b>10$</b>\nЧтобы вывести средства, зайдите в раздел «💻Профиль» ->  «Вывести»\n\nДеньги можно вывести на QIWI\n\nДля вывода на другие системы обратитесть к администратору.', { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "help_main" }]] } })
  }
  if (query.data.startsWith('help_pi')) {
    bot.deleteMessage(message.chat.id, message.message_id)
    return bot.sendMessage(uid, '💳 <b>Пополнение</b>\n\nДля пополнения в бота зайдите в раздел «💻Профиль» -> Пополнить\nДеньги зачисляются в течение 30 секунд\n\nТакже помните, что в комментарии к переводу надо указывать букву В английскую, а не русскую, иначе Ваш баланс не пополнится', { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "help_main" }]] } })
  }

  if (query.data.startsWith('store')) {
    bot.deleteMessage(message.chat.id, message.message_id)
    return bot.sendMessage(uid, 'Персонажи:', {
      reply_markup: {
        inline_keyboard: [
          [{ text: "🧝‍♀️  Купить Страну", callback_data: "trees:shop1" }],
          [{ text: "🤴 Супер Персонажи", callback_data: "wildBees" }],
          [{ text: "⚜️ Магическое место", callback_data: "beeMother" }],
        ]
      }
    });

  }

  if (query.data.startsWith('wildBees')) {
    bot.deleteMessage(message.chat.id, message.message_id)
    var reply_markup = { inline_keyboard: [] }
    var wb = await WildBee.find({ creator_id: uid })
    wb.map((b) => { reply_markup.inline_keyboard.push([{ text: `🤴 Супер Персонажи ${b.level} уровня`, callback_data: "wb_" + b._id }]) })
    reply_markup.inline_keyboard.push([{ text: `➕ Собрать ${message.user.wb_profits} ⚡️`, callback_data: "wbCollect" }])
    reply_markup.inline_keyboard.push([{ text: "◀️ Назад", callback_data: "store" }])
    return bot.sendMessage(uid, `🤴 Супер Персонажи могут появится только благодаря магическому месту\n
<b>Для супер клубов доступно 7 уровней улучшения:</b>\n
Уровень | Энергий в час | Стоимость улучшения
1 уровень - 33 ⚡
2 уровень - 340 ⚡ - 120$
3 уровень - 618 ⚡ - 400$
4 уровень - 982 ⚡ - 500$
5 уровень - 2200 ⚡ - 2000$
6 уровень - 4978 ⚡ - 3000$
7 уровень - 7470 ⚡ - 4000$
8 уровень - 23027 ⚡ - 7000$
<b>Ваши супер Персонажи:</b>`, {
      reply_markup, parse_mode: "html"
    });
  }

  if (query.data.startsWith('wbCollect')) {
    if (message.user.wb_profits == 0)
      return bot.answerCallbackQuery(query.id, '🤴 Ваши супер Персонажи пока не принесли энергии!', true);
    else {
      bot.deleteMessage(message.chat.id, message.message_id)
      await User.findOneAndUpdate({ id: uid }, { wb_profits: 0 })
      await message.user.inc('fetuses', message.user.wb_profits)
      return bot.answerCallbackQuery(query.id, `🤴 Вы успешно собрали ${message.user.wb_profits} ⚡`, true);
    }
  }

  if (query.data.startsWith('wbUpLevel_')) {
    var wb = await WildBee.findOne({ _id: query.data.split("_")[1] })
    var price = wbPrices[wb.level + 1]
    if (message.user.buybalance < price) return bot.answerCallbackQuery(query.id, `🍌На Вашем балансе для покупок недостаточно средств для улучшения`, true);
    await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -price } })
    await WildBee.findOneAndUpdate({ _id: String(wb._id) }, { level: wb.level + 1 })
    bot.deleteMessage(message.chat.id, message.message_id)
    wb.level++
    var reply_markup = { inline_keyboard: [] }
    if (wb.level < 8)
      reply_markup.inline_keyboard.push([{ text: `🔼 Купить ${wb.level + 1} уровень за ${wbPrices[wb.level + 1]}$`, callback_data: `wbUpLevel_` + wb._id }])
    reply_markup.inline_keyboard.push([{ text: "◀️ Назад", callback_data: "wildBees" }])
    bot.sendPhoto(message.chat.id, "/pin.jpg", {
      caption: `
🤴 <b>Супер Союза ${wb.level} уровня</b> \n
🕒 <b>В деле:</b> ${Math.floor((Date.now() - wb.start_time) / (1000 * 60 * 60 * 24))} дней
⚡ <b>энергии  в час:</b> ${wbProfits[wb.level]}
🍌<b>Принёс энергии</b>: ${ wb.bee_profit}`, parse_mode: "HTML", reply_markup
    })
    return bot.answerCallbackQuery(query.id, `🔼 Уровень супер Персонажиа повышен до ${wb.level} за ${price}$`, true);

  }

  if (query.data.startsWith('wb')) {
    bot.deleteMessage(message.chat.id, message.message_id)
    var wb = await WildBee.findOne({ _id: query.data.split("_")[1] })
    var reply_markup = { inline_keyboard: [] }
    if (wb.level < 8)
      reply_markup.inline_keyboard.push([{ text: `🔼 Купить ${wb.level + 1} уровень за ${wbPrices[wb.level + 1]}$`, callback_data: `wbUpLevel_` + wb._id }])
    reply_markup.inline_keyboard.push([{ text: "◀️ Назад", callback_data: "wildBees" }])
    bot.sendPhoto(message.chat.id, "/pin.jpg", {
      caption: `
🤴 <b>Супер Союза ${wb.level} уровня</b> \n
🕒 <b>В деле:</b> ${Math.floor((Date.now() - wb.start_time) / (1000 * 60 * 60 * 24))} дней
⚡ <b>энергии в час:</b> ${wbProfits[wb.level]}
⭐ <b>Принёс энергии</b>: ${ wb.bee_profit}`, parse_mode: "HTML", reply_markup
    })
  }

  if (query.data == ('beeMother')) {
    bot.deleteMessage(message.chat.id, message.message_id)
    console.log(await User.findOne({ id: 1 }))
    var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
    var reply_markup = {
      inline_keyboard: [
      ]
    }
    var ubm = await BeeMother.findOne({ creator_id: message.user.id })
    if (ubm != null) {
      var now = new Date()
      var ttl = Math.floor((ubm.end_time - now.getTime()) / (1000 * 60 * 60 * 24))
      var str = `<b>⚜️ Ваше магическое место:</b>\n
🕐 Осталось <b>${ttl}</b> дней
🧝‍♀️ Принесло <b>${ubm.beesGet}</b> из <b>4</b> супер Персонажи
`
    }

    else if (!bm.status) var str = '<b>🍌Магическое место недоступно</b>'
    else {
      var str = `<b>✅ Магическое место доступно!</b>\n💸 Стоимость: <b>${bm.price} рублей</b>\n🛒 Куплено <b>${bm.bought}</b> из <b>${bm.count}</b>`
      reply_markup.inline_keyboard.push([{ text: "🛒 Купить магическое место", callback_data: "beeMotherBuy" }])
    }
    reply_markup.inline_keyboard.push([{ text: "◀️ Назад", callback_data: "store" }])
    return bot.sendMessage(uid, `
<b>⚜️ Покупка магического места:</b>
❗️️️ Магическое место - это где появляются супер Персонажи
🧝‍♀️ Ваш баланс для покупок: <b>${message.user.buybalance} рублей</b>
⚜️ Магическое место появляется и исчезает с продажи когда угодно!
⚰️ Срок работы магического места - 30 дней!
⚡️ Магическое место за период своей жизни приносит 4 супер Персонажи!\n\n${str}`, {
      reply_markup, parse_mode: "html"
    });

  }

  if (query.data == ('beeMotherBuy')) {
    var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
    if (!bm.status) return bot.answerCallbackQuery(query.id, '🍌Магическое место недоступно!', true);
    if (message.user.buybalance < bm.price) return bot.answerCallbackQuery(query.id, '🍌На Вашем балансе для покупок недостаточно средств!', true);
    bot.deleteMessage(message.chat.id, message.message_id)

    await User.findOneAndUpdate({ id: message.chat.id }, { $inc: { buybalance: -bm.price } })
    var now = new Date()
    now.setDate(now.getDate() + 7)
    var nextBeeGet = now.getTime()
    now.setDate(now.getDate() + 24)
    var end_time = now.getTime()
    await BeeMother.insertMany([{ creator_id: message.chat.id, beesGet: 0, nextBeeGet, end_time }])
    bm.bought++
    if (bm.bought >= bm.count) bm.status = false
    await User.findOneAndUpdate({ id: 1 }, { menu: JSON.stringify(bm) })
    return bot.sendMessage(uid, `
<b>⚜️ Вы успешно приобрели магическое место!</b>`, {
      reply_markup, parse_mode: "html"
    });

  }
  
    if (query.data == ('vrode_stenka')) {
    var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
    if (message.user.buybalance < bm.price) return bot.answerCallbackQuery(query.id, '🍌На Вашем балансе для покупок и Waves недостаточно средств!', true);
    bot.deleteMessage(message.chat.id, message.message_id)

    await User.findOneAndUpdate({ id: message.chat.id }, { $inc: { buybalance: -bm.price } })
    var now = new Date()
    now.setDate(now.getDate() + 7)
    var nextBeeGet = now.getTime()
    now.setDate(now.getDate() + 24)
    var end_time = now.getTime()
    await BeeMother.insertMany([{ creator_id: message.chat.id, beesGet: 0, nextBeeGet, end_time }])
    bm.bought++
    if (bm.bought >= bm.count) bm.status = false
    await User.findOneAndUpdate({ id: 1 }, { menu: JSON.stringify(bm) })
    return bot.sendMessage(uid, `
<b>⚜️ Вы успешно взорвали стенку и получили 55$</b>`, {
      reply_markup, parse_mode: "html"
    });

  }

  if (query.data.startsWith('trees:inv')) {
    let id = Number(query.data.split('trees:inv')[1]);

    let tree = trees.find((x) => x.id == id);
    if (!tree) return bot.answerCallbackQuery(query.id, 'Что-то пошло не так...', true);

    let total_balance = 0;

    message.user.trees.map((x) => {
      total_balance += (((Date.now() - message.user.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60);
    });

    let count = message.user.trees.filter((x) => x.id == tree.id).length;
    let earn = count * tree.earn;

    bot.deleteMessage(message.chat.id, message.message_id)
    bot.sendPhoto(message.chat.id, `c${tree.id}.png`, {
      caption: `<b>${tree.name}</b> (${count}x)

🍌Стоимость: ${tree.price}$
⚡ энергию в час: ${earn}`, parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [[
      { text: getInventoryIcon(0, tree.id), callback_data: getInventoryQuery(0, tree.id) },
          { text: getInventoryIcon(1, tree.id), callback_data: getInventoryQuery(1, tree.id) },
          { text: getInventoryIcon(2, tree.id), callback_data: getInventoryQuery(2, tree.id) },
          { text: getInventoryIcon(3, tree.id), callback_data: getInventoryQuery(3, tree.id) },
          { text: getInventoryIcon(4, tree.id), callback_data: getInventoryQuery(4, tree.id) },
          { text: getInventoryIcon(5, tree.id), callback_data: getInventoryQuery(5, tree.id) },
          { text: getInventoryIcon(6, tree.id), callback_data: getInventoryQuery(6, tree.id) },
          { text: getInventoryIcon(7, tree.id), callback_data: getInventoryQuery(7, tree.id) },],
        [{ text: getInventoryIcon(8, tree.id), callback_data: getInventoryQuery(8, tree.id) },
        { text: getInventoryIcon(9, tree.id), callback_data: getInventoryQuery(9, tree.id) },
        { text: getInventoryIcon(10, tree.id), callback_data: getInventoryQuery(10, tree.id) },],
        [{ text: `➕ Собрать ${total_balance.toFixed(2)}⚡`, callback_data: `trees:collect` }]
        ]
      }
    })

  }

  if (query.data.startsWith('trees:buy')) {
    let total_balance = 0;
    console.log(message.user.trees)
    message.user.trees.map((x) => {
      if ((((Date.now() - message.user.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60) > (trees.find((a) => a.id == x.id).earn * 72)) {
        total_balance += trees.find((a) => a.id == x.id).earn * 72;
      } else {
        total_balance += (((Date.now() - message.user.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60);
      }
    });


    let id = Number(query.data.split('trees:buy')[1]);

    let tree = trees.find((x) => x.id == id);
    if (!tree) return bot.answerCallbackQuery(query.id, 'Что-то пошло не так...', true);

    if (tree.price > message.user.buybalance) return bot.answerCallbackQuery(query.id, '🚫 Недостаточно денег для покупки.', true);
    else if (tree.price <= message.user.buybalance) {
      var limit = (await User.findOne({ id: 0 })).bhivebalance

      var treesWithEqualId = 0
      message.user.trees.map((t) => { if (t.id == id) treesWithEqualId++ })

      if (treesWithEqualId >= limit)
        return bot.answerCallbackQuery(query.id, `🛑 Вы достигли лимита в ${limit} Персонажа данного уровня`, true);

      //await message.user.dec('buybalance', tree.price);

      await message.user.set('lastCollect', Date.now());
      await message.user.inc('fetuses', Number(total_balance.toFixed(2)));

      await message.user.trees.push({ id: tree.id, date: Date.now(), lastCollect: Date.now() });
      await message.user.save();
      await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -tree.price } })


      return bot.answerCallbackQuery(query.id, `✅ Вы успешно приобрели ${tree.name} за ${tree.price}$`, true);
    }
  }

  if (query.data == 'exchange') {
    if (message.user.fetuses < 2500) return bot.answerCallbackQuery(query.id, '🚫 Минимальная сумма обмена: 2500 ⚡', true);
    let { fetuses } = message.user;
    await message.user.set('fetuses', 0);
    fetuses = fetuses / 2500;
    await message.user.inc('buybalance', fetuses / 2);
    await message.user.inc('outbalance', fetuses / 2);
    bot.deleteMessage(message.chat.id, message.message_id);
    return bot.answerCallbackQuery(query.id, `✅ Вы успешно обменяли ${(fetuses * 2500).toFixed(2)} ⚡ на ${fetuses.toFixed(2)}$`, true);
  }

  if (query.data == 'depositR') {
		bot.deleteMessage(message.chat.id, message.message_id);

		var b = (await User.findOne({ id: 0 })).deposit
		if (b == 0) var bt = ""
		else var bt = `\n<b>🔥 Временная акция для остальных пополнений: +${b}% при любом пополнении</b>
		━━━━━━━━━━━━━━━━━━━━━━━━━`
		return bot.sendMessage(message.chat.id, `💎 <b>Способ пополнения: Payeer</b>
━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 Отправьте любую сумму на кошелек <code>${config.payeer.account}</code>
❗️ Не забудьте комментарий <code>M${message.chat.id}</code>
━━━━━━━━━━━━━━━━━━━━━━━━━
📥 <b>Для пополнения с помощью других способов обращайтесь к администратору</b> @Lyrinal\n
━━━━━━━━━━━━━━━━━━━━━━━━━
${bt}`, {
			parse_mode: "HTML",

		});
	}


	if (query.data == 'game_payin') {
		state[uid] = undefined
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `<b>👇 Выберете способ пополнения игрового баланса:</b>`, { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "🥝 QIWI", callback_data: "game_payin_qiwi" }], [{ text: "💎 Payeer", callback_data: "game_payin_payeer" }], [{ text: "📭 Баланс для вывода", callback_data: "game_payin_wb" }],] } })
	}


  if (query.data == 'game_payin_qiwi') {
    bot.deleteMessage(message.chat.id, message.message_id);
    return bot.sendMessage(message.chat.id, `
🥝 <b>Способ пополнения: QIWI</b>
🌐 Отправьте любую сумму на кошелек <code>${qiwistr.split(" ")[0]}</code>
❗️ Не забудьте комментарий <code>SG${message.chat.id}</code>
`, { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "game_payin" }]] } })
  }

if (query.data == 'game_payin_payeer') {
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `
💎 <b>Способ пополнения: Payeer</b>
🌐 Отправьте любую сумму на кошелек <code>${config.payeer.account}</code>
❗️ Не забудьте комментарий <code>M${message.chat.id}</code>
`, { parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "game_payin" }]] } })
	}


  if (query.data == 'game_payin_wb') {
    bot.deleteMessage(message.chat.id, message.message_id);
    state[uid] = 66666
    return bot.sendMessage(message.chat.id, `
<b>📭 Ваш баланс для вывода:</b> ${message.user.outbalance.toFixed(0)}$\n
<b>👉 Введите сумму для перевода на игровой баланс:</b>
`, {
      parse_mode: "HTML", reply_markup: {
        reply_markup: {
          keyboard: Cancel,
          resize_keyboard: true
        }
      }
    })
  }

  if (query.data == 'game_payout') {
    if (message.user.game_limit > 0) return bot.answerCallbackQuery(query.id, `❗️ Для вывода Вам необходимо сыграть сегодня ещё ${message.user.game_limit} игр в Колесо фортуны или Минное поле!`, true);

    bot.deleteMessage(message.chat.id, message.message_id);
    state[uid] = 66667
    return bot.sendMessage(message.chat.id, `
<b>🍌Ваш баланс для вывода:</b> ${roundPlus(message.user.outbalance)}$\n
<b>👉 Введите сумму для вывода на игровой баланс:</b>
`, {
      parse_mode: "HTML", reply_markup: {
        reply_markup: {
          keyboard: Cancel,
          resize_keyboard: true
        }
      }
    })
  }
  
  if (query.data == 'promoact') {
		 state[uid] = 11000
		 return bot.sendMessage(message.chat.id, `<b>Введите ваш промокод:</b>`, {parse_mode: "HTML"})
	 }

  if (query.data == 'game_casino') {
    bot.deleteMessage(message.chat.id, message.message_id);
    return bot.sendMessage(message.chat.id, `<b>🎰 Колесо фортуны</b>\n
Стоимость вращения колеса - <b>100$</b> с игрового баланса\n
<b>🍌Ваш баланс для вывода:</b> ${roundPlus(message.user.outbalance)}$\n
<b>Вы можете выиграть:</b>
▫️ Россия ▫️ Кыргызстан ▫️ Узбекистан▫️ США ▫️ Франция ▫️ Ещё одна прокрутку ▫️ 5$ ▫️ 10$ ▫️ 15$
  `, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "🎰 Испытать удачу 100$", callback_data: "game_casino_spin" }],
        ]
      }
    });
  }

  if (query.data == 'game_casino_spin') {
    if (message.user.outbalance < 100) return bot.answerCallbackQuery(query.id, '🍌На Вашем игровом балансе недостаточно средств!', true);
    await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: -100, game_limit: -1 } })
    bot.deleteMessage(message.chat.id, message.message_id);
    var val = randomInteger(1, 9)
    var reply_markup = {
      inline_keyboard: [
        [{ text: "◀️ Назад", callback_data: "game_casino" }],
      ]
    }
    if (val <= 5) {
      val--
      var prize = `🧝‍♀️ Персонажи ${trees.find((a) => a.id == val).name}`
      giveTree(uid, val)
    }
    else if (val == 6) {
      var prize = `♻️ Ещё одну прокрутку`
      await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: 100 } })
      reply_markup.inline_keyboard[0] = [{ text: "🎰 Испытать удачу", callback_data: "game_casino_spin" }]
    }
    else if (val >= 7) {
      val = roundPlus((val - 6) * 5)
      var prize = `🍌${val}$ на игровой баланс`
      await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: val } })
    }
    return bot.sendMessage(message.chat.id, `🎰 <b>Вы выиграли:</b>\n\n${prize}`, {
      parse_mode: "HTML",
      reply_markup
    });
  }

  if (query.data == 'bombcheck') {
     if(message.user.bankbomb > 1)
     return bot.answerCallbackQuery(query.id, '😒 Сначала закончи игру', false);
     
  await bot.editMessageText(`💣 Правила игры
  ━━━━━━━━━━━━━━━━━━━━━━━━━
▫️ Всего на поле 5 мин
▫️ С каждым открытием пустой клетки начисляется +20% 
▫️ Ваш баланс попыток: ${message.user.popbalance.toFixed(0)}
▫️ Откроете все пустые клетки - получите случайный приз:
1$ ▫️ 5$ ▫️ 2 попытки ▫️ 1 Rub ▫️ 2 Rub ▫️ 4 Rub
━━━━━━━━━━━━━━━━━━━━━━━━━
⛄️ Цена начала игры 5 попыток:
━━━━━━━━━━━━━━━━━━━━━━━━━
`,{ chat_id: message.chat.id, message_id: message.message_id,
      reply_markup: {
        inline_keyboard: [
[{ text: "💣 Сыграть", callback_data: "game_bomb" }]
]
      }
    })
}
  if (query.data == 'game_bomb') {
          if (message.user.popbalance < 5) return bot.answerCallbackQuery(query.id, `На Вашем балансе для игры недостаточно средств!`, true);
    bot.deleteMessage(message.chat.id, message.message_id);
      var field
      var arr = randomizeArr(randomizeArr([0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0]))
      field = [
        [arr[0], arr[1], arr[2], arr[3]],
        [arr[4], arr[5], arr[6], arr[7]],
        [arr[8], arr[9], arr[10], arr[11]],
        [arr[12], arr[13], arr[14], arr[15]],
      ]
        await User.findOneAndUpdate({ id: uid }, { bankbomb: 5 })
await User.findOneAndUpdate({ id: uid }, { $inc: { popbalance: -5 } })
await User.findOneAndUpdate({ id: uid }, { data: JSON.stringify(field), $inc: { bankbomb: 0} })
    return bot.sendMessage(message.chat.id, `<b>💣 Минное поле</b>\n
▫️ Всего на поле 5 мин
▫️ С каждым открытием пустой клетки начисляется +20% 
▫️ Ваш баланс попыток: ${message.user.popbalance.toFixed(0)}$
▫️ Откроете все пустые клетки - получите случайный приз:
1$ ▫️ 5$ ▫️ 2 попытки ▫️ 1 Rub ▫️ 2 Rub ▫️ 4 Rub\n
🍌<b>Банк игры:</b> 5\n
👇 <b>Выберете клетку для хода:</b>
		`, {
				parse_mode: "HTML",
				reply_markup: {
					inline_keyboard: [
						[{ text: "⬜️", callback_data: "gameBomb_0,0" }, { text: "⬜️", callback_data: "gameBomb_0,1" }, { text: "⬜️", callback_data: "gameBomb_0,2" }, { text: "⬜️", callback_data: "gameBomb_0,3" }],
						[{ text: "⬜️", callback_data: "gameBomb_1,0" }, { text: "⬜️", callback_data: "gameBomb_1,1" }, { text: "⬜️", callback_data: "gameBomb_1,2" }, { text: "⬜️", callback_data: "gameBomb_1,3" }],
						[{ text: "⬜️", callback_data: "gameBomb_2,0" }, { text: "⬜️", callback_data: "gameBomb_2,1" }, { text: "⬜️", callback_data: "gameBomb_2,2" }, { text: "⬜️", callback_data: "gameBomb_2,3" }],
						[{ text: "⬜️", callback_data: "gameBomb_3,0" }, { text: "⬜️", callback_data: "gameBomb_3,1" }, { text: "⬜️", callback_data: "gameBomb_3,2" }, { text: "⬜️", callback_data: "gameBomb_3,3" }],
						[{ text: `🍌Забрать 0`, callback_data: "gameBombCollect" },],
					]
				}
			});
		}

  if (query.data == 'gameBombCollect') {
    await bot.answerCallbackQuery(query.id, `🍌Вам начислено ${message.user.bankbomb.toFixed(0)}!`, true);
    bot.deleteMessage(message.chat.id, message.message_id);
    await User.findOneAndUpdate({ id: uid }, { $inc: { popbalance: message.user.bankbomb }, bankbomb: 0 })
  }

  if (~query.data.indexOf('gameBomb')) {
    var field = JSON.parse(message.user.data)
    var coords = query.data.split("_")[1].split(",")
    var box = field[Number(coords[0])][Number(coords[1])]
    if (box == 2) return bot.answerCallbackQuery(query.id, `💎 Вы уже открыли эту клетку!`, false);


    if (box == 1) {
      await bot.answerCallbackQuery(query.id, `💣 Вы попались на мину!`, true);
      bot.deleteMessage(message.chat.id, message.message_id);
      await User.findOneAndUpdate({ id: uid }, { bankbomb: 0 })
      return
    }
    else if (box == 0) {
      bot.deleteMessage(message.chat.id, message.message_id);
      field[Number(coords[0])][Number(coords[1])] = 2
      await User.findOneAndUpdate({ id: uid }, { data: JSON.stringify(field), bankbomb: 1.20 * message.user.bankbomb})
      if (!field.every(line => { return line.every(e => { return e == 2 }) })) {
        bot.sendMessage(message.chat.id, `<b>💣 Минное поле</b>\n
▫️ Всего на поле 5 мин
▫️ С каждым открытием пустой клетки начисляется +20% 
▫️ Откроете все пустые клетки - получите случайный приз:
1$ ▫️ 5$ ▫️ 2 попытки ▫️ 1 Rub ▫️ 2 Rub ▫️ 4 Rub\n
▫️ Ваш баланс попыток: ${message.user.popbalance.toFixed(0)}
🍌<b>Банк игры:</b> ${message.user.bankbomb.toFixed(0)}\n
👇 <b>Выберете клетку для хода:</b>
            `, {
          parse_mode: "HTML",
          reply_markup: {
            inline_keyboard: [
[{ text: field[0][0] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_0,0" },
{ text: field[0][1] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_0,1" },
{ text: field[0][2] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_0,2" },
{ text: field[0][3] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_0,3" }],
[{ text: field[1][0] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_1,0" }, { text: field[1][1] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_1,1" }, { text: field[1][2] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_1,2" }, { text: field[1][3] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_1,3" }],
              [{ text: field[2][0] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_2,0" }, { text: field[2][1] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_2,1" }, { text: field[2][2] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_2,2" }, { text: field[2][3] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_2,3" }],
              [{ text: field[3][0] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_3,0" }, { text: field[3][1] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_3,1" }, { text: field[3][2] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_3,2" }, { text: field[3][3] != 2 ? "⬜️" : "💎", callback_data: "gameBomb_3,3" }],
              [{ text: `🍌Забрать ${message.user.bankbomb.toFixed(0)}`, callback_data: "gameBombCollect" },],
            ]
          }
        });
      }
      else {
        var prize = randomInteger(1, 6)
        if (prize == 1) {
            await user.inc("outbalance", 2)
          prize = "2$"
        }
        else if (prize == 2) {
            await user.inc("popbalance", 2)
          prize = "2 попытки 🪩"
        }
        else if (prize == 3) {
          await user.inc("RubRubbalance", 1)
          prize = `1 Rub 📍`
        }
        else if (prize == 4) {
          await user.inc("Rubbalance", 2)
          prize = `2 Rub 📍`
        }
        else if (prize == 5) {
          await user.inc("outbalance", 3)
          prize = `3$`
        }
        else if (prize == 6) {
          await user.inc("Rubbalance", 4)
          prize = `4 Rub 📍`
        }
        bot.sendMessage(message.chat.id, `<b>💣 Вы открыли все пустые клетки!</b>\n
💎 <b>Ваш выигрыш:</b> ${prize}`, {
          parse_mode: "HTML",
        });
      }
    }
  }

  if (query.data == 'game_prize') {
    if (message.user.prize) return bot.answerCallbackQuery(query.id, '🙂 Вы уже получили свой подарок!', true);
    bot.deleteMessage(message.chat.id, message.message_id);
    return bot.sendMessage(message.chat.id, `🎁 <b>Подарок - Первого Персонажа (р)</b>\n
Для получения подарка подпишитесь на канал:
▫️ https://t.me/ndodof9e`, {
      parse_mode: "HTML",
      reply_markup: { inline_keyboard: [[{ text: "✅ Проверить подписку", callback_data: "game_prize_check" }]] }
    });
  }

  if (query.data == 'game_prize_check') {
    var res = await bot.getChatMember("@ndodof9e", message.chat.id)
    var res = await bot.getChatMember("@ndodof9e", message.chat.id)
    if (message.user.prize) return bot.answerCallbackQuery(query.id, '🙂 Вы уже получили свой подарок!', true);
    if (res.status == 'left') return bot.answerCallbackQuery(query.id, '🍌Вы не подписались на канал!', true);
    await bot.deleteMessage(message.chat.id, message.message_id);
    message.user.trees.push({
      id: 0,
      date: Date.now(),
      lastCollect: Date.now()
    });
    message.user.prize = true
    await message.user.save();
    return bot.sendMessage(message.chat.id, `🎁 <b>Вы получили подарок! Первый Персонажи уже с Вами</b>`, {
      parse_mode: "HTML",
    });
  }

  if (query.data == 'game_roulette') {
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `💈 <b>Рулетка</b>\n
Стоимость вращения - <b>50$</b>. Выигрыш начисляется на баланс для покупок
<b>Вращений сегодня:</b> ${message.user.spinsToday || 0}/2\n
<b>🍌Ваш баланс для вывода:</b> ${roundPlus(message.user.outbalance)}$\n
<b>В рулетке 6 ячеек:</b>
0$ | 0$ | 0$ | 50$ | 100$ | 150$
	`, {
			parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [
					[{ text: "💈 Купить вращение за 50$", callback_data: "game_roulette_spin" }],
				]
			}
		});
	}

	if (query.data == 'game_roulette_spin') {
		if (message.user.spinsToday >= 2) return bot.answerCallbackQuery(query.id, '🍌Вы уже купили 2 вращения сегодня!', true);
		if (message.user.outbalance < 50) return bot.answerCallbackQuery(query.id, '🍌На Вашем балансе для вывода недостаточно средств!', true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { outbalance: -50, spinsToday: 1 } })
		bot.deleteMessage(message.chat.id, message.message_id);
		var arr = randomizeArr([0, 0, 0, 50, 100, 150])
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: arr[3] } })
		return bot.sendMessage(message.chat.id, `💈 <b>Рулетка</b>\n\n
						${arr[0]}$
						${arr[1]}$
						${arr[2]}$
🔹${arr[3]}$🔹
						${arr[4]}$
						${arr[5]}$\n
<b>Вам начислено ${arr[3]}$ на баланс для покупок!</b>
	`, {
			parse_mode: "HTML",
			reply_markup: {
				inline_keyboard: [
					[{ text: "◀️ Назад", callback_data: "game_roulette" }],
				]
			}
		});
	}


  if (query.data == 'game_chest') {
    bot.deleteMessage(message.chat.id, message.message_id);
    return bot.sendMessage(message.chat.id, `🔒 Выберете стоимость сундука
🍀 Вы можете найти в два раза больше $, а может быть, сундук окажется пустым
🎲 Вероятность: 50%`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "1$", callback_data: "casino_1" },
          { text: "2$", callback_data: "casino_2" },
          { text: "5$", callback_data: "casino_5" },
          { text: "10$", callback_data: "casino_10" }],
          [{ text: "25$", callback_data: "casino_25" },
          { text: "50$", callback_data: "casino_50" },
          { text: "100$", callback_data: "casino_100" },
          { text: "250$", callback_data: "casino_250" }],
        ]
      }
    });
  }

  if (query.data.startsWith("casino_open")) {
    bot.deleteMessage(message.chat.id, message.message_id)
    var bet = Number(query.data.split("_")[2])
    if (bet > message.user.buybalance) await bot.answerCallbackQuery(query.id, 'Недостаточно средств для ставки!', true);
    else if (Math.random() >= 0.58) {
      await message.user.inc("buybalance", bet)
      await bot.answerCallbackQuery(query.id, '💸 Вы выиграли ' + bet * 2 + "$!", true);
    } else {
      await message.user.inc("buybalance", -bet)
      await bot.answerCallbackQuery(query.id, "😞 Сундук пуст", true);
    }
    return bot.sendMessage(message.chat.id, `🔒 Выберете стоимость сундука
🍀 Вы можете найти в два раза больше $, а может быть, сундук окажется пустым
🎲 Вероятность: 50%

🍌Ваш баланс для вывода: ${roundPlus(message.user.buybalance)}$\n
💸 Ваша ставка: ${bet} $
🎰 Возможный выигрыш: ${bet * 2} $`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "1$", callback_data: "casino_1" },
          { text: "2$", callback_data: "casino_2" },
          { text: "5$", callback_data: "casino_5" },
          { text: "10$", callback_data: "casino_10" }],
          [{ text: "25$", callback_data: "casino_25" },
          { text: "50$", callback_data: "casino_50" },
          { text: "100$", callback_data: "casino_100" },
          { text: "250$", callback_data: "casino_250" }],
          [{ text: "🔓 Открыть за " + bet + "$", callback_data: "casino_open_" + bet }]
        ]
      }
    })

  }

  if (query.data.startsWith("casino")) {
    bot.deleteMessage(message.chat.id, message.message_id)
    var bet = Number(query.data.split("_")[1])
    return bot.sendMessage(message.chat.id, `🔒 Выберете стоимость сундука
🍀 Вы можете найти в два раза больше $, а может быть, сундук окажется пустым
🎲 Вероятность: 50%

🍌Ваш баланс: ${message.user.buybalance} $
💸 Ваша ставка: ${bet} $
🎰 Возможный выигрыш: ${bet * 2} $`, {
      parse_mode: "HTML",
      reply_markup: {
        inline_keyboard: [
          [{ text: "1$", callback_data: "casino_1" },
          { text: "2$", callback_data: "casino_2" },
          { text: "5$", callback_data: "casino_5" },
          { text: "10$", callback_data: "casino_10" }],
          [{ text: "25$", callback_data: "casino_25" },
          { text: "50$", callback_data: "casino_50" },
          { text: "100$", callback_data: "casino_100" },
          { text: "250$", callback_data: "casino_250" }],
          [{ text: "🔓 Открыть за " + bet + "$", callback_data: "casino_open_" + bet }]
        ]
      }
    })
  }
  
  if (query.data == 'game_stakan4ik') {
		if (u.buybalance == 0) return bot.answerCallbackQuery(query.id, '🍌На Вашем игровом балансе недостаточно средств!', true);
		var q =  roundPlus(u.buybalance * 0.10)
		var w =  roundPlus(u.buybalance * 0.20)
		var e =  roundPlus(u.buybalance * 0.35)
		var r =  roundPlus(u.buybalance * 0.50)
		var t =  roundPlus(u.buybalance * 0.75)
		var y =  roundPlus(u.buybalance )
	if (u.buybalance == 0) return bot.answerCallbackQuery(query.id, '🍌На Вашем игровом балансе недостаточно средств!', true);
		if (u.buybalance == 0) {
var markup = [["🚫 Отмена"]]
		}
		else {
		var markup = [["🚫 Отмена"]]
		}
		bot.deleteMessage(message.chat.id, message.message_id);
		state[uid] = 10003
		return bot.sendMessage(message.chat.id, `
<b>🥛 Стакан</b>\n

🎲 Ваш баланс: ${roundPlus(u.buybalance)}$
💳 Для вывода: ${roundPlus(u.outbalance)}$

<b>📱 Для начала игры выберите  сумму ставки или введите свою. Минимальная ставка 0.01$❗️</b>
	`, {
			parse_mode: "HTML",
			reply_markup: {
				keyboard: markup,
				resize_keyboard: true
			}
		});
	}
	
	if (query.data.startsWith("gamestakan")) {
		bot.deleteMessage(message.chat.id, message.message_id)
		var sum = Number(query.data.split("_")[1])
		var stakan = Number(query.data.split("_")[2])
		var lose = randomInteger(1, 2)
		if(lose == 1) lose = `❗️ Неправильно`
		if(lose == 2) lose = `❗️ Вы не угадали`
		let ctakan = randomInteger(1, 3)
		if (sum > u.buybalance) await bot.answerCallbackQuery(query.id, 'Недостаточно средств для ставки!', true);
			else if (ctakan !== stakan) {
				await u.inc("buybalance", -sum)
				await u.inc("lose", 1)
				await u.inc("gameplay", 1)
				await bot.answerCallbackQuery(query.id, `${lose}, это был ${ctakan}-й стакан\n🚫 Вы проиграли ` + sum + "$!", true);
				} else {
					await u.inc("outbalance", sum * 2)
					await u.inc("buybalance", -sum)
					await u.inc("win", 1)
					await u.inc("gameplay", 1)
					await bot.answerCallbackQuery(query.id, "Вы угадали\n💸 Вы выиграли " + sum * 2 + "$!", true);
				}
				return bot.sendMessage(message.chat.id, `Хотите сыграть ещё раз?`, {
					parse_mode: "HTML",
					reply_markup: {
						inline_keyboard: [
							[{ text: "🔄 Ещё раз", callback_data: "game_stakan4ik" }]
						]
					}
				})
			}
			if (query.data == 'withdrawpayer') {
    bot.editMessageText(`Выберите валюту вывода:`, { chat_id: message.chat.id, message_id: message.message_id,
			parse_mode: "html",
			reply_markup: {
				inline_keyboard: [
[{ text: `Rub`, callback_data: "withdraw" }],
]
			}
		})
	}
  if (query.data == 'withdraww') {
    bot.editMessageText(`Выберите способ вывода:`, { chat_id: message.chat.id, message_id: message.message_id,
			parse_mode: "html",
			reply_markup: {
				inline_keyboard: [
[{ text: `${VIVOD_P}`, callback_data: "withdrawpayer" }],
]
			}
		})
	}
  if (query.data == 'withdraw') {
      
      let min_withdraw = readMinWithdraw();
      
    if (message.user.outbalance < min_withdraw) return bot.answerCallbackQuery(query.id, `🚫 Минимальная сумма вывода: ${min_withdraw} Rub`, true);
    bot.deleteMessage(message.chat.id, message.message_id);

    await message.user.set('menu', 'qiwi');
		await bot.sendMessage(uid, ` Введите ваш ${VIVOD_P} тг  для вывода:`, {
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}
if (query.data == 'withdrawRub') {
    if (message.user.Rubbalance < 1) return bot.answerCallbackQuery(query.id, '🚫 Минимальная сумма вывода: 1 Rub', true);

    bot.deleteMessage(message.chat.id, message.message_id);

    await message.user.set('menu', 'Rub20');
		await bot.sendMessage(message.chat.id, '📍 Введите свой адресс Rub', {
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}
	if (query.data == 'withdrawFKWALLET') {
    if (message.user.outbalance < 1) return bot.answerCallbackQuery(query.id, '🚫 Минимальная сумма вывода: 1Rub', true);


    bot.deleteMessage(message.chat.id, message.message_id);

    await message.user.set('menu', 'FKWALLET');
		await bot.sendMessage(message.chat.id, 'Введите свой адресс Sberbank', {
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}
	if (query.data == 'withdrawQMONEY') {
    if (message.user.outbalance < 1) return bot.answerCallbackQuery(query.id, '🚫 Минимальная сумма вывода: 1Rub', true);


    bot.deleteMessage(message.chat.id, message.message_id);

    await message.user.set('menu', 'QMONEY');
		await bot.sendMessage(message.chat.id, '️⚕️ Введите свой номер QMONEY', {
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}
	if (query.data == 'withdrawQIWI') {

    let min_withdraw = readMinWithdraw();

    if (message.user.outbalance < min_withdraw) return bot.answerCallbackQuery(query.id, `🚫 Минимальная сумма вывода: ${min_withdraw}RubRub`, true);

    bot.deleteMessage(message.chat.id, message.message_id);

    await message.user.set('menu', 'Tickettttt');
		await bot.sendMessage(message.chat.id, '️🥝 Введите свой номер QIWI', {
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}
	if (query.data == 'withdrawPAYEER') {

    let min_withdraw = readMinWithdraw();

          if (message.user.proverka > 0) return bot.answerCallbackQuery(query.id, `😛 Вы уже выводили 1 раз автоматически!`, true);
    if (message.user.outbalance < min_withdraw) return bot.answerCallbackQuery(query.id, `🚫 Минимальная сумма вывода: ${min_withdraw}$`, true);


    bot.deleteMessage(message.chat.id, message.message_id);

    await message.user.set('menu', 'PAYEERAUTO');
		await bot.sendMessage(message.chat.id, '🅿️ Введите свой номер PAYEER', {
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}
  if (query.data == 'reinvest') {
		await message.user.set('menu', 'reinvest');
		bot.deleteMessage(message.chat.id, message.message_id);
		var b = (await User.findOne({ id: 0 })).bhivebalance
		var str = ""
		if (b > 0) str = `🔥 <b>Временная акция: +${b}% - бонус к реинвесту</b>\n\n`
		return bot.sendMessage(message.chat.id, `${str}👉 Введите сумму, которую хотите реинвестировать:`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}

if (query.data == 'uplimit') {
		bot.deleteMessage(message.chat.id, message.message_id);
		return bot.sendMessage(message.chat.id, `
🛑 <b>Лимит ограничивает максимально возможное количество персонажей одного уровня</b>

<b>Ваш лимит:</b> ${message.user.limit} персонажей
`, {
			parse_mode: "html",
			reply_markup: {
				inline_keyboard: [[{ text: `🔼 Повысить лимит до ${message.user.limit + 1} за 10 WAVES`, callback_data: "uplimitBuy" }]]
			}
		})
	}
if (query.data.startsWith('backads')) {
    var currentTaskId = Number(query.data.split('_')[1]);

     var ads = await AdsTask.findOne({ _id: { $lt: currentTaskId } }).sort({ _id: -1 });
     if (!ads) return bot.answerCallbackQuery(uid, "🚫 Заданий нет", false);
     bot.editMessageText(`Задание: ${ads._id}\n${ads.text}`, { chat_id: query.message.chat.id, message_id: query.message.message_id,     reply_markup: {
      inline_keyboard: [
[{ text: "🔗 Перейти", url: `${ads.url}` }],
[{ text: "⏪️", callback_data: "backads_"+ads._id },
{ text: "✅️ Готово", callback_data: "gotovoads_"+ads._id },
{ text: "⏩️", callback_data: "goads_"+ads._id }]
        ]
    }

  })
}
  
  if (query.data.startsWith('goads')) {
    var currentTaskId = Number(query.data.split('_')[1]);
    var ads = await AdsTask.findOne({ _id: { $gt: currentTaskId } }).sort({ _id: 1 });
  if (!ads) return bot.answerCallbackQuery(uid, "🚫 Заданий нет", false);
    bot.editMessageText(`Задание: ${ads._id}\n${ads.text}`, { chat_id: query.message.chat.id, message_id: query.message.message_id,     reply_markup: {
      inline_keyboard: [
[{ text: "🔗 Перейти", url: `${ads.url}` }],
[{ text: "⏪️", callback_data: "backads_"+ads._id },
{ text: "✅️ Готово", callback_data: "gotovoads_"+ads._id },
{ text: "⏩️", callback_data: "goads_"+ads._id }]
        ]
    }
  })
}
  	if (query.data.startsWith('gotovoads')) {
var id = Number(query.data.split('_')[1]);
    var task = await AdsTask.findOne({ _id: id });
    var user = task.users.find(u => u._id === uid);
if(!user) {
    
}
else {
if(user.status == "Принято"){
return bot.sendMessage(uid, `Вы уже выполнили это задание!`)
}
if(user.status == "Ожидание"){
return bot.sendMessage(uid, `Вы уже отправили отчёт на это задание!`)
}
}
      await User.findOneAndUpdate({ id: uid }, { rekama: id })
bot.sendMessage(uid, "Отправь фотографию выполненого задания")
state[uid] = 846457843256
}
  
	if (query.data == 'uplimitBuy') {
		bot.deleteMessage(message.chat.id, message.message_id);
		if (message.user.bhivebalance < 10) return bot.answerCallbackQuery(query.id, `На Вашем WAVES балансе недостаточно средств для повышения лимита`, true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { bhivebalance: -10, limit: 1 } })
		return bot.answerCallbackQuery(query.id, `Вы успешно повысили лимит количества персонажей до ${message.user.limit + 1} за 10 WAVES`, true);
	}
	
	if (query.data == 'stenky') {
		if (message.user.bhivebalance < 20 + (message.user.buybalance < 20) ) return bot.answerCallbackQuery(query.id, `На Вашем WAVES и балансе покупок недостаточно средств для взрыва стенки`, true);
		await User.findOneAndUpdate({ id: uid }, { $inc: { bhivebalance: -20, limit: 1 } })
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -20, limit: 1 } })
	
		    const reward = (Math.random() * (0 + 50) + 0.3).toFixed(1);
    bot.answerCallbackQuery(query.id);
   await message.user.inc('buybalance',+reward);
   await message.user.inc('outbalance',+reward);
   await User.updateOne({ id: message.chat.id }, {$set: {last_bonus: new Date()}});
    return bot.sendMessage(message.chat.id, `Вы успешно взорвали стеку за 20 WAVES и 20$, и получили ${reward} $!`, {
    	parse_mode: "html"
    });
    }
	

if (query.data == 'buywaves') {
		await message.user.set('menu', 'buywaves');
		bot.deleteMessage(message.chat.id, message.message_id);
		var price = (await User.findOne({ id: 0 })).totalEarn
		return bot.sendMessage(message.chat.id, `💳 <b>1 WAVES = ${price} рублей</b>\n👉 Введите количество токенов WAVES, которые Вы хотите купить:`, {
			parse_mode: "html",
			reply_markup: {
				keyboard: Cancel,
				resize_keyboard: true
			}
		});
	}

  if (query.data == 'trees:collect') {
    let total_balance = 0;

    message.user.trees.map((x) => {
      total_balance += (((Date.now() - message.user.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60);
    });

    await message.user.set('lastCollect', Date.now());

    await bot.deleteMessage(message.chat.id, message.message_id);
    await message.user.inc('fetuses', Number(total_balance.toFixed(2)));
    if (message.user.clanName) {
      var clan = await Clan.findOne({ name: message.user.clanName })
      await Clan.findOneAndUpdate({ name: message.user.clanName }, { $inc: { balance: total_balance * (clan.level / 100) } })
    }
    return bot.answerCallbackQuery(query.id, `Вы успешно собрали ${total_balance.toFixed(2)} 🧝‍♀️`, true);
  }

  if (query.data == 'trees:totalMy') {
    let $trees = [];
    let total_earn = 0;

    message.user.trees.map((x) => {
      $trees.push(x.id);
      total_earn += trees.find((a) => a.id == x.id).earn
    });

    let text = ``;
    if ($trees.filter((x) => x === 0).length) text += `\n\n<b>${trees.find((x) => x.id == 0).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 0).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 0).length * trees.find((x) => x.id == 0).earn}`;
    if ($trees.filter((x) => x === 1).length) text += `\n\n<b>${trees.find((x) => x.id == 1).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 1).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 1).length * trees.find((x) => x.id == 1).earn}`;
    if ($trees.filter((x) => x === 2).length) text += `\n\n<b>${trees.find((x) => x.id == 2).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 2).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 2).length * trees.find((x) => x.id == 2).earn}`;
    if ($trees.filter((x) => x === 3).length) text += `\n\n<b>${trees.find((x) => x.id == 3).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 3).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 3).length * trees.find((x) => x.id == 3).earn}`;
    if ($trees.filter((x) => x === 4).length) text += `\n\n<b>${trees.find((x) => x.id == 4).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 4).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 4).length * trees.find((x) => x.id == 4).earn}`;
    if ($trees.filter((x) => x === 5).length) text += `\n\n<b>${trees.find((x) => x.id == 5).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 5).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 5).length * trees.find((x) => x.id == 5).earn}`;
    if ($trees.filter((x) => x === 6).length) text += `\n\n<b>${trees.find((x) => x.id == 6).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 6).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 6).length * trees.find((x) => x.id == 6).earn}`;
    if ($trees.filter((x) => x === 7).length) text += `\n\n<b>${trees.find((x) => x.id == 7).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 7).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 7).length * trees.find((x) => x.id == 7).earn}`;
    if ($trees.filter((x) => x === 8).length) text += `\n\n<b>${trees.find((x) => x.id == 8).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 8).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 8).length * trees.find((x) => x.id == 8).earn}`;
    if ($trees.filter((x) => x === 9).length) text += `\n\n<b>${trees.find((x) => x.id == 9).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 9).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 9).length * trees.find((x) => x.id == 9).earn}`;
    if ($trees.filter((x) => x === 10).length) text += `\n\n<b>${trees.find((x) => x.id == 10).name}</b>\n\t\t▫️ Количество: ${$trees.filter((x) => x === 10).length}\n\t\t⚡️ Энергий в час: ${$trees.filter((x) => x === 10).length * trees.find((x) => x.id == 10).earn}`;

    return bot.editMessageText(`📄 Список Ваших Персонажиов: ⤵️${text}\n\n════════════════════\n📊 Суммарная энергию в час: ${total_earn.toFixed(2)}⚡`, {
      parse_mode: "HTML",
      chat_id: message.chat.id,
      message_id: message.message_id
    });
  }

//   if (query.data == 'checkFollow') {
//     let task = await Task.findOne({ id: message.chat.id });
//     if (task) return bot.deleteMessage(message.chat.id, message.message_id);

//     bot.getChatMember(-1001133667134, message.chat.id).then(async (res) => {
//       if (res.status == 'left') return bot.answerCallbackQuery(query.id, '🚫 Вы не подписаны!');

//       message.user.trees.push({
//         id: 1,
//         date: Date.now(),
//         lastCollect: Date.now()
//       });

//       await message.user.save();

//       let $task = new Task({
//         id: message.chat.id
//       });

//       await $task.save();

//       return bot.editMessageText('Вы выполнили задание и получили <b>Лимонное дерево</b>.', {
//         parse_mode: "HTML",
//         chat_id: message.chat.id,
//         message_id: message.message_id
//       });
//     });
//   }
if (query.data.startsWith('withdrawTRX:')) {
    let id = Number(query.data.split('withdrawRub:')[1]);
    let TIKET = await Tickett.findOne({ id });

    if (!TIKET) bot.deleteMessage(message.chat.id, message.message_id);
    bot.sendMessage(CHANNEL_INFO, `🍌<a href="tg://user?id=${tickett.id}">Пользователь</a> вывел <b>${tickett.amount}TRX</b>`, { parse_mode: "HTML" })
require('request')({
				method: 'POST',
				url: 'https://payeer.com/ajax/api/api.php',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: `account=${config.payeer.account}&apiId=${config.payeer.apiId}&apiPass=${config.payeer.apiPass}&action=transfer&curIn=TRX&sum=${tickett.amount * 1.01}&curOut=TRX&to=${tickett.wallet}`
			}, async function (error, response, body) {
				body = JSON.parse(body)
			})
		
		bot.sendMessage(tickett.id, `❌<b>Ваша выплата была одобрена</b>
💸 На Ваш адрес зачислено <b>${tickett.amount}TRX</b>\n

🙏 Будем очень признательны за отзыв о боте админу или в чат
☺️ Для нас это очень важно\n
🤝 <b>Рады сотрудничать!</b>
`, {
			parse_mode: "html", reply_markup: {
				inline_keyboard: [
					[{ text: "💳 Выплаты", url: "https://t.me/http://t.me/FLOW_OPLATA" }],
				]
			}
		});
    await User.findOneAndUpdate({ id: 0 }, { $inc: { fc: tickett.amount * 4 } })
    await User.findOneAndUpdate({ id: id }, { $inc: { payout: tickett.amount * 4 } })
    await tickett.remove();
  }
  
  if (query.data.startsWith('withdrawPAYEER:')) {
      bot.deleteMessage(message.chat.id, message.message_id)
    let id = Number(query.data.split('withdrawPAYEER:')[1]);

    let TIKKKET = await Tickettt.findOne({ id });

    if (!TIKKKET) bot.deleteMessage(message.chat.id, message.message_id);
    bot.sendMessage(CHANNEL_INFO, `🐤 <a href="tg://user?id=${TIKKKET.id}">Пользователь</a> вывел <b>${TIKKKET.amount}$</b>`, { parse_mode: "HTML" })
require('request')({
				method: 'POST',
				url: 'https://payeer.com/ajax/api/api.php',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: `account=${config.payeer.account}&apiId=${config.payeer.apiId}&apiPass=${config.payeer.apiPass}&action=transfer&curIn=TRX&sum=${TIKKKET.amount * 1.01}&curOut=TRX&to=${TIKKKET.wallet}`
			}, async function (error, response, body) {
				body = JSON.parse(body)
			})
		
		bot.sendMessage(TIKKKET.id, `🐤 <b>Ваша выплата была отправлена</b>
💸 На Ваш счёт зачислено <b>${TIKKKET.amount}$</b>\n

🙏 Будем очень признательны за отзыв о боте админу или в чат
☺️ Для нас это очень важно\n
🤝 <b>Рады сотрудничать!</b>
`, {
			parse_mode: "html", reply_markup: {
				inline_keyboard: [
					[{ text: "💬 Чат", url: "http://t.me/GriffiChat" }],
					[{ text: "💳 Выплаты", url: "http://t.me/viplatipo" }],

				]
			}
		});
    await User.findOneAndUpdate({ id: 0 }, { $inc: { fc: TIKKKET.amount } })
    await User.findOneAndUpdate({ id: id }, { $inc: { payout: TIKKKET.amount } })
        await User.findOneAndUpdate({ id: id }, { $inc: { proverka: 1 } })
    await TIKKKET.remove();
  }
  if (query.data.startsWith('withdraw:')) {
    let id = Number(query.data.split('withdraw:')[1]);
    let TIKET = await Ticket.findOne({ id });

    if (!TIKET) bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(CHANNEL_INFO, `👤 <a href="tg://user?id=${TIKET.id}">Пользователь</a>\n\nВывел <b>${TIKET.amount}Rub</b>\nПС: адрес`, { parse_mode: "HTML" })
require('request')({
				method: 'POST',
				url: 'https://payeer.com/ajax/api/api.php',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: `account=${config.payeer.account}&apiId=${config.payeer.apiId}&apiPass=${config.payeer.apiPass}&action=transfer&curIn=TRX&sum=${TIKET.amount * 1.01}&curOut=TRX&to=${TIKET.wallet}`
			}, async function (error, response, body) {
				body = JSON.parse(body)
			})
		

		bot.sendMessage(TIKET.id, `🐤 <b>Ваша выплата была одобрена</b>
💸 На Ваш адрес зачислено <b>${TIKET.amount}Rub</b>\n

🙏 Будем очень признательны за отзыв о боте админу или в чат
☺️ Для нас это очень важно\n
🤝 <b>Рады сотрудничать!</b>
`, {
			parse_mode: "html", reply_markup: {
				inline_keyboard: [
					[{ text: "💳 Администратор", url: `https://t.me/${LINK_ADMIN}` }],

				]
			}
		});
    await User.findOneAndUpdate({ id: 0 }, { $inc: { fc: TIKET.amount } })
    await User.findOneAndUpdate({ id: id }, { $inc: { payout: TIKET.amount } })
    await TIKET.remove();
    bot.editMessageText('😇 Выплатил!', {
      chat_id: message.chat.id,
      message_id: message.message_id
    });
  }

  if (query.data.startsWith('back:')) {
    let id = Number(query.data.split('back:')[1]);
    let ticket = await Ticket.findOne({ id });

    if (!ticket) bot.deleteMessage(message.chat.id, message.message_id);

    let user = await User.findOne({ id: ticket.id });
    bot.sendMessage(ticket.id, `Ваша выплата была отклонена, на ваш счёт возвращено ${ticket.amount}Rub`);

    await User.findOneAndUpdate({ id: ticket.id }, { $inc: { outbalance: ticket.amount } })
    await ticket.remove();

    return bot.editMessageText('Вернул!', {
      chat_id: message.chat.id,
      message_id: message.message_id
    });
  }

  if (query.data.startsWith('take:')) {
    let id = Number(query.data.split('take:')[1]);
    let ticket = await Ticket.findOne({ id });

    if (!ticket) bot.deleteMessage(message.chat.id, message.message_id);

    await ticket.remove();
    return bot.editMessageText('Забрал!', {
      chat_id: message.chat.id,
      message_id: message.message_id
    });
  }
  if (query.data.startsWith('withdrawFKWALLET:')) {



    let id = Number(query.data.split('withdrawFKWALLET:')[1]);

    let TIKKET = await Ticketttt.findOne({ id });
    if (!TIKKET) bot.deleteMessage(message.chat.id, message.message_id);
    
			bot.sendMessage(CHANNEL_INFO, `🐤 <a href="tg://user?id=${TIKKET.id}">Пользователь</a> вывел <b>${TIKKET.amount}Rub</b> через <b>Сбербанк</b>`, { parse_mode: "HTML" })

		bot.sendMessage(TIKKET.id, `🐤 <b>Ваша выплата была одобрена</b>
💸 На Ваш адрес зачислено <b>${TIKKET.amount}Rub
</b>\n

🙏 Будем очень признательны за отзыв о боте админу или в чат
☺️ Для нас это очень важно\n
🤝 <b>Рады сотрудничать!</b>
`, {
			parse_mode: "html", reply_markup: {
				inline_keyboard: [
					[{ text: "💳 Выплаты", url: "http://t.me/FLOW_OPLATA" }],

				]
			}
		});
    await User.findOneAndUpdate({ id: 0 }, { $inc: { fc: TIKKET.amount * 4 } })
    await User.findOneAndUpdate({ id: id }, { $inc: { payout: TIKKET.amount * 4 } })
    await TIKKET.remove();
    bot.editMessageText('🥵 Выплатил!', {
      chat_id: message.chat.id,
      message_id: message.message_id
    });
  }
  if (query.data.startsWith('withdrawQIWI:')) {

    let id = Number(query.data.split('withdrawQIWI:')[1]);

    let QIWIW = await Tickettttt.findOne({ id });

    if (!QIWIW) bot.deleteMessage(message.chat.id, message.message_id);
    
			bot.sendMessage(CHANNEL_INFO, `🍌<a href="tg://user?id=${QIWIW.id}">Пользователь</a> вывел <b>${QIWIW.amount}$</b> через <b>QIWI</b>`, { parse_mode: "HTML" })


		bot.sendMessage(QIWIW.id, `🍌<b>Ваша выплата была одобрена</b>
💸 На Ваш QIWI зачислено <b>${QIWIW.amount}$</b>\n

🙏 Будем очень признательны за отзыв о боте админу или в чат
☺️ Для нас это очень важно\n
🤝 <b>Рады сотрудничать!</b>
`, {
			parse_mode: "html", reply_markup: {
				inline_keyboard: [
					[{ text: "💳 Выплаты", url: "http://t.me/viplatipo" }],

				]
			}
		});
    await User.findOneAndUpdate({ id: 0 }, { $inc: { fc: QIWIW.amount } })
    await User.findOneAndUpdate({ id: id }, { $inc: { payout: QIWIW.amount } })
    await QIWIW.remove();
    bot.editMessageText('🤮 Выплатил!', {
      chat_id: message.chat.id,
      message_id: message.message_id
    });
  }
    if (query.data.startsWith('accepttask')) {
        			bot.deleteMessage(message.chat.id, message.message_id);
  var taskId = Number(query.data.split('_')[1]);
  var id = Number(query.data.split('_')[2]);
    var tasik = await AdsTask.findOne({ _id: taskId });
      await User.findOneAndUpdate({ id: id }, { $inc: { outbalance: tasik.sum } })
            await User.findOneAndUpdate({ id: taskId }, { $inc: { kolv: -1 } })
await AdsTask.updateOne({ _id: taskId, 'users._id': id }, { $set: { 'users.$.status': 'Принято' }})
  .then(() => console.log('Элемент массива успешно изменен'))
  .catch((err) => console.error(err));
      bot.sendMessage(id, "Ваше отчёт приняли и вы получили "+tasik.sum)
  bot.sendMessage(uid, "Вы подтвердили отчёт")
  if(tasik.kolv <= 0) {
      await AdsTask.deleteOne({ _id: taskId }, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Задание успешно удалено');
  }
});
  }
}
    if (query.data.startsWith('calcelltask')) {
        			bot.deleteMessage(message.chat.id, message.message_id);
  var taskId = Number(query.data.split('_')[1]);
  var id = Number(query.data.split('_')[2]);
await AdsTask.updateOne({ _id: taskId, 'users._id': id }, { $set: { 'users.$.status': 'Отказано' }})
  .then(() => console.log('Элемент массива успешно изменен'))
  .catch((err) => console.error(err));
    bot.sendMessage(id, "Вам было отказано задание")
  bot.sendMessage(uid, "Вы отказали отчёт")
}

  if (query.data.startsWith('withdrawQMONEY:')) {

    let id = Number(query.data.split('withdrawQMONEY:')[1]);

    let QMONEYW = await Ticketttttt.findOne({ id });

    if (!QMONEYW) bot.deleteMessage(message.chat.id, message.message_id);
    
			bot.sendMessage(CHANNEL_INFO, `🍌<a href="tg://user?id=${QMONEYW.id}">Пользователь</a> вывел <b>${QMONEYW.amount}$</b> через <b>QMONEY</b>`, { parse_mode: "HTML" })


		bot.sendMessage(QMONEYW.id, `🍌<b>Ваша выплата была одобрена</b>
💸 На Ваш QMONEY зачислено <b>${QMONEYW.amount}$</b>\n

🙏 Будем очень признательны за отзыв о боте админу или в чат
☺️ Для нас это очень важно\n
🤝 <b>Рады сотрудничать!</b>
`, {
			parse_mode: "html", reply_markup: {
				inline_keyboard: [
					[{ text: "💬 Чат", url: "http://t.me/GriffiChat" }],
					[{ text: "💳 Выплаты", url: "http://t.me/viplatipo" }],

				]
			}
		});
    await User.findOneAndUpdate({ id: 0 }, { $inc: { fc: QMONEYW.amount } })
    await User.findOneAndUpdate({ id: id }, { $inc: { payout: QMONEYW.amount } })
    await QMONEYW.remove();
    bot.editMessageText('🥲 Выплатил!', {
      chat_id: message.chat.id,
      message_id: message.message_id
    });
  }
  var d = query.data

if (query.data == 'get_bonus')
{bot.answerCallbackQuery(query.id);

    if (message.user.last_bonus && (new Date() - message.user.last_bonus) < 24 * 60 * 60 * 1000) {
      return;
    }
    const reward = 0.1
    bot.answerCallbackQuery(query.id);
   await message.user.inc('outbalance',+reward);
   await User.updateOne({ id: message.chat.id }, {$set: {last_bonus: new Date()}});
    return bot.sendMessage(message.chat.id, `
    !`);
  }
  var d = query.data
  if (d == "prom_4") {
		var bu = await User.countDocuments({})
		var ik = {
			inline_keyboard: [
				[{ text: `25% аудитории - ${Math.ceil(bu * 0.25)} человек - ${Math.ceil(bu * 0.25 * 0.04)}$`, callback_data: "mm_25_" + Math.ceil(bu * 0.25 * 0.04) }],
				[{ text: `50% аудитории - ${Math.ceil(bu * 0.5)} человек - ${Math.ceil(bu * 0.5 * 0.04)}$`, callback_data: "mm_50_" + Math.ceil(bu * 0.5 * 0.04) }],
				[{ text: `75% аудитории - ${Math.ceil(bu * 0.75)} человек - ${Math.ceil(bu * 0.75 * 0.04)}$`, callback_data: "mm_75_" + Math.ceil(bu * 0.75 * 0.04) }],
				[{ text: `100% аудитории - ${Math.ceil(bu * 1)} человек - ${Math.ceil(bu * 1 * 0.04)}$`, callback_data: "mm_100_" + Math.ceil(bu * 1 * 0.04) }],
				//[{text: "◀️ Назад", callback_data:"prom_main" }]
			]
		}

		bot.deleteMessage(message.chat.id, message.message_id);
		bot.sendMessage(uid, '✉️ <b>Рассылка в нашем боте:</b>\n\n<b>Выберете интересующий вариант рассылки:</b>', { reply_markup: ik, parse_mode: "HTML" })
	}
	else if (d.split("_")[0] == 'mm') {
		var size = d.split("_")[1]
		var sum = Number(d.split("_")[2])
		var bu = await User.countDocuments({})
		if (message.user.buybalance >= sum) {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(message.chat.id, `Вы выбрали вариант рассылки на <b>${size}%</b> аудитории - <b>${Math.ceil(bu * roundPlus(size / 100))}</b> человек за <b>${sum}$</b>` + "\n\nТеперь, введите текст рассылки:\n\n<i>Для добавления кнопки-ссылки в рассылаемое сообщение добавьте в конец сообщения строку вида:</i>\n# Текст на кнопке # http://t.me/link #", { reply_markup: { keyboard: Cancel, resize_keyboard: true }, parse_mode: html });
			data[uid] = size + "_" + sum
			state[uid] = 5000
		}
		else bot.answerCallbackQuery(query.id, "❗️ Недостаточно средств на рекламном балансе для покупки рекламы!", true)
	}
	else if (d.split("_")[0] == 'mmaccept') {
		var mm = await MM.findOne({ id: Number(d.split("_")[1]) })
		var size = mm.size
		var sum = mm.sum
		if (message.user.buybalance >= sum) {
			await message.user.updateOne({ $inc: { buybalance: -sum } })
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, "✅ С Вашего рекламного баланса списано <b>" + sum + "$</b>! Пост отправлен на модерацию", { reply_markup: { keyboard: Start, resize_keyboard: true }, parse_mode: html });
			if (!mm.btns_status) {
				var kb = { inline_keyboard: [[{ text: "Рассылка на " + size + "% за " + sum + "$", url: "http://t.me/" + message.from.username }], [{ text: "✅ Подтвердить", callback_data: "adminmmaccept_" + mm.id }], [{ text: "🍌Отклонить с возвратом", callback_data: "adminmmrefund_" + mm.id }], [{ text: "🍌Отклонить без возврата", callback_data: "adminmmnorefund_" + mm.id }]] }
			} else {
				var btn_text = mm.btns.text
				var btn_link = mm.btns.link
				var kb = { inline_keyboard: [[{ text: btn_text, url: btn_link }], [{ text: "Рассылка на " + size + "% за " + sum + "$", url: "http://t.me/" + message.from.username }], [{ text: "✅ Подтвердить", callback_data: "adminmmaccept_" + mm.id }], [{ text: "🍌Отклонить с возвратом", callback_data: "adminmmrefund_" + mm.id }], [{ text: "🍌Отклонить без возврата", callback_data: "adminmmnorefund_" + mm.id }]] }
			}
			if (mm.type == "text")
				sendAdmins(mm.info.text, { reply_markup: kb, parse_mode: html })
			else if (mm.type == "img")
				sendAdminsPhoto(mm.info.text, mm.info.img, { reply_markup: kb })
		}
		else bot.answerCallbackQuery(query.id, "❗️ Недостаточно средств на рекламном балансе для покупки рекламы!", true)
	}
	else if (d == 'cmm') {
		bot.deleteMessage(message.chat.id, message.message_id);
		
		bot.sendMessage(uid, "🍌Создание рассылки отменено!", { reply_markup: { keyboard: Start, resize_keyboard: true } })
	}
  if (query.data == 'get_bonus_1')
{bot.answerCallbackQuery(query.id);

    const reward = (4.7 + 0.3).toFixed(1);
    bot.answerCallbackQuery(query.id);
   await message.user.inc('buybalance',+reward);
   await User.updateOne({ id: message.chat.id }, {$set: {last_bonus: new Date()}});
    return bot.sendMessage(message.chat.id, `Вы забрали свой клад и получили ${reward} $ на баланс покупки!`);
  }
  
  if (query.data == 'get_bonus_klik')
{bot.answerCallbackQuery(query.id);

    const reward = (Math.random() * (0.1 - 0.01) + 0.001).toFixed(1);
    bot.answerCallbackQuery(query.id);
   await message.user.inc('buybalance',+reward);
   await User.updateOne({ id: message.chat.id }, {$set: {last_bonus: new Date()}});
    return bot.sendMessage(message.chat.id, `Ты кликнул и получил ${reward} $ на баланс покупки!`);
  }
  

  if (d == "clan_create") {
    if (message.user.buybalance < 65)
      return bot.answerCallbackQuery(query.id, `На Вашем балансе для покупок недостаточно средств для создания Союза!`, true);
    state[uid] = 1601
    bot.deleteMessage(message.chat.id, message.message_id);
    return bot.sendMessage(message.chat.id, 'Введите название для Вашей Союза:', { reply_markup: { keyboard: Cancel, resize_keyboard: true } });
  }

  if (d == "clan_payin") {
    var clan = await Clan.findOne({ name: message.user.clanName })
    if (!clan) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
    state[uid] = 160101
    bot.deleteMessage(message.chat.id, message.message_id);
    return bot.sendMessage(message.chat.id, `💳 <b>Ваш баланс для пополнений:</b> ${message.user.buybalance}$\nВведите сумму для пополнения баланса Вашего союза:`, { parse_mode: "html", reply_markup: { keyboard: Cancel, resize_keyboard: true } });
  }
  if (d == "clan_admin") {
    var clan = await Clan.findOne({ name: message.user.clanName })
    var members = await User.find({ id: { $ne: uid }, clanName: clan.name })
    if (uid != clan.creator_id && uid != clan.zam_id) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
    bot.deleteMessage(message.chat.id, message.message_id);
    return bot.sendMessage(message.chat.id, `
<b>Ваша Союзова:</b> ${clan.name}

<b>Участники Союза:</b>
<a href="tg://user?id=${uid}">${clan.creator_name}</a> | ${message.user.totalEarn} ⚡/час | ID: <code>${uid}</code>
${members.map(m => { return `${m.id == clan.zam_id ? `👨‍⚕️ <b>Ваш заместитель: </b>` : ""}<a href="tg://user?id=${m.id}">${m.name}</a> | ${m.totalEarn} ⚡/час | ID: <code>${m.id}</code>` }).join("\n")}
<b>энергию казны:</b> ${clan.level}%
<b>Всего игроков В союзе:</b> ${members.length + 1} из ${clan.maxMembers}
<b>энергия Союза:</b> ${roundPlus(clan.total_earn)} ⚡/час
<b>В казне:</b> ${roundPlus(clan.balance)} ⚡
<b>На балансе:</b> ${roundPlus(clan.bal)}$\n
<b>Команды главы:</b>
Пригласить участника в Союз - <code>/invite [id]</code>
Выгнать участника с Союза - <code>/kick [id]</code>
Назначить заместителя - <code>/invitezam [id]</code>
Убрать заместителя - <code>/removezam</code>
`, {
      parse_mode: "html", reply_markup: {
        inline_keyboard: [
          [{ text: "1⃣ Перевести казну себе", callback_data: "clan_transferMe" }],
          [{ text: "2⃣ Распределить казну", callback_data: "clan_transferAll" }],
          [{ text: `3⃣ Расширить командадо ${clan.maxMembers + 10} мест (65 рублей)`, callback_data: "clan_expand" }],
          [{ text: `4️⃣ Повысить доход казны до ${clan.level + 1}% (${150 + (clan.level - 1) * 50} рублей)`, callback_data: "clan_upLevel" }],
        ]
      }
    });
  }
  if (d == "clan_transferMe") {
    var clan = await Clan.findOne({ name: message.user.clanName })
    var members = await User.find({ id: { $ne: uid }, clanName: clan.name })
    if (uid != clan.creator_id && uid != clan.zam_id) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
    if (clan.balance == 0) return bot.answerCallbackQuery(query.id, `Казна Союза нулевая!`, true);
    bot.deleteMessage(message.chat.id, message.message_id);
    await Clan.findOneAndUpdate({ name: clan.name }, { balance: 0 })
    await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: (clan.balance / 2000), outbalance: (clan.balance / 2000) } })
    return bot.sendMessage(message.chat.id, `<b>${clan.balance} ⚡энергии</b> из казны Союза начислены Вам как <b>${roundPlus(clan.balance / 2000)}$</b> на баланс для покупок и <b>${roundPlus(clan.balance / 2000)}$</b> на баланс для вывода`, { parse_mode: "html" });
  }
  if (d == "clan_transferAll") {
    var clan = await Clan.findOne({ name: message.user.clanName })
    var members = await User.find({ clanName: clan.name })
    if (uid != clan.creator_id && uid != clan.zam_id) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
    if (clan.balance == 0) return bot.answerCallbackQuery(query.id, `Казна Союза нулевая!`, true);
    bot.deleteMessage(message.chat.id, message.message_id);
    await Clan.findOneAndUpdate({ name: clan.name }, { balance: 0 })
    var dole = clan.balance / members.length / 2000
    for (const i in members) {
      try {
        await User.findOneAndUpdate({ id: members[i].id }, { $inc: { buybalance: dole, outbalance: dole } })
        await bot.sendMessage(members[i].id, `<b>${roundPlus(clan.balance)} ⚡ Доход</b> из казны Союза распределены между участниками Союза\nВам начислено <b>${roundPlus(dole)}$</b> на баланс для покупок и <b>${roundPlus(dole)}$</b> на баланс для вывода`, { parse_mode: "html" });
      }
      catch { }
    }
  }
  if (d == "clan_expand") {
    var clan = await Clan.findOne({ name: message.user.clanName })
    if (uid != clan.creator_id && uid != clan.zam_id) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
    if (clan.bal < 65) return bot.answerCallbackQuery(query.id, `На балансе Союза недотаточно средств!`, true);
    bot.deleteMessage(message.chat.id, message.message_id);
    await Clan.findOneAndUpdate({ name: clan.name }, { $inc: { maxMembers: 10, bal: -65 } })
    await bot.sendMessage(uid, `Вы успешно расширили максимальное количество мест на Союза до ${clan.maxMembers + 10}`, { parse_mode: "html" });

  }
  if (d == "clan_upLevel") {
    var clan = await Clan.findOne({ name: message.user.clanName })
    if (uid != clan.creator_id && uid != clan.zam_id) return bot.answerCallbackQuery(query.id, `Ошибка!`, true);
    if (clan.level >= 20) return bot.answerCallbackQuery(query.id, `Вы достигли максимального уровня увеличения доходности Союза!`, true);
    var price = 150 + (clan.level - 1) * 50
    if (clan.bal < 65) return bot.answerCallbackQuery(query.id, `На балансе Союза недотаточно средств!`, true);
    bot.deleteMessage(message.chat.id, message.message_id);
    await Clan.findOneAndUpdate({ name: clan.name }, { $inc: { level: 1, bal: -price } })
    await bot.sendMessage(uid, `Вы успешно повысили дозодность казны Союза до ${clan.level + 1}%`, { parse_mode: "html" });

  }
  if (d.startsWith("clanAccept")) {
    var clan = await Clan.findOne({ _id: d.split("_")[1] })
    var members = await User.find({ clanName: clan.name })
    if (members.length > clan.maxMembers - 1) return bot.answerCallbackQuery(query.id, `В союзе закончились места!`, true);
    bot.deleteMessage(message.chat.id, message.message_id);
    await User.findOneAndUpdate({ id: uid }, { clanName: clan.name })
    await bot.sendMessage(uid, `✅ Вы успешно вступили в союз<b>${clan.name}</b>\nНажмите /leave_clan, чтобы покинуть Союз`, { parse_mode: "html" });
    bot.sendMessage(clan.creator_id, `➕ На ваш командавступил <a href="tg://user?id=${uid}">пользователь</a>\nВведите <code>/kick ${uid}</code>, чтобы выгнать участника из Союза`, { parse_mode: "html" });
    totalClanEarnCalc()
  }
  if (d == "clanDecline") {
    bot.sendMessage(uid, ` 🍌Вы отменили заявку на вступление во Союз!`, { parse_mode: "html" });
  }

  if (d == "clan_top") {
    var clans = await Clan.find({ $and: [{ name: { $ne: "." } }, { name: { $ne: "dsfsdf" } }] }).sort({ total_earn: -1 }).limit(5)
    bot.deleteMessage(message.chat.id, message.message_id);
    if (clans.length == 5)
      return bot.sendMessage(message.chat.id, `
<b>🏆 ТОП 5 Союзов 🔱</b>

👑 ${clans[0].name} | ${clans[0].total_earn} ⚡

2⃣ ${clans[1].name} | ${clans[1].total_earn} ⚡

3⃣${clans[2].name} | ${clans[2].total_earn} ⚡

4⃣ ${clans[3].name} | ${clans[3].total_earn} ⚡

5⃣ ${clans[4].name} | ${clans[4].total_earn} ⚡`, { parse_mode: "html" });
    else
      return bot.sendMessage(message.chat.id, `<b>🏆 Недостаточно Союзов для составления топа</b>`, { parse_mode: "html" });

  }
  if (d == "clan_status") {
    var clans = await Clan.find({ $and: [{ name: { $ne: "." } }, { name: { $ne: "dsfsdf" } }] }).sort({ total_earn: -1 }).limit(5)
    bot.deleteMessage(message.chat.id, message.message_id);
    var ost = Math.ceil((getNextClanWarTimestamp() - (new Date()).getTime()) / (1000 * 60 * 60 * 24))
    if (clans.length == 5)
      return bot.sendMessage(message.chat.id, `
<b>💎 Битва Союзов</b>

🕒 Битва Союзов происходит 5, 15 и 25-го числа каждого месяца!
🏆 Команда-победитель получает <b>⚡ 100k Энергий</b> в свою казну
За 2 место - <b>⚡ 50k Энергий</b>
За 3 место - <b>⚡ 30k Энергий</b>
За 4 место - <b>⚡ 15k Энергий</b>
За 5 место - <b>⚡ 5k Энергий</b>

<b>До следующей битвы:</b> ${ost} дней

<b>🛡 ТОП Союзов текущей битвы ??</b>

1. ${clans[0].name} - ${clans[0].total_earn} ⚡ в час
2. ${clans[1].name} - ${clans[1].total_earn} ⚡ в час
3. ${clans[2].name} - ${clans[2].total_earn} ⚡ в час
4. ${clans[3].name} - ${clans[3].total_earn} ⚡ в час
5. ${clans[4].name} - ${clans[4].total_earn} ⚡ в час
`, { parse_mode: "html" });
    else
      return bot.sendMessage(message.chat.id, `<b>🏆 Недостаточно Союзов для составления топа</b>`, { parse_mode: "html" });
  }


  if (ADMINS.indexOf(query.from.id) !== -1) {

      if(query.data === 'required_subscriptions') {

          let RSS = readRSS();

          let text = ``;

          for(var i = 0; i < RSS.length; i++) {
              
              let channel = await (new Promise( (resolve) => {
                  bot.getChat(RSS[i]).then( (r) => resolve(r)).catch( (err) => resolve(err));
              }));

              if(channel.invite_link) text += `\n<a href="${channel.invite_link}">${channel.title.replace(/</g, '')}</a> | <code>${RSS[i]}</code>`;

          }

          bot.sendMessage(query.from.id, `Обязательные подписки бота:\n${text}`, {
              parse_mode: "HTML",
              reply_markup: {
                inline_keyboard: [
                    [{text: "Установить обяз подписки", callback_data: `set_required_subscriptions`}]
                ]
              }
          });

      } else if(query.data === 'set_required_subscriptions') {

          state[query.from.id] = 'set_required_subscriptions';

          bot.sendMessage(query.from.id, `1)Добавьте бота в администраторы каналы с галочкой на Пригласительные ссылки (добавление участников)\n2)Введите список айди/юзернеймов каналов и групп, в каждой строке по одному айди/юзернейму.Пример:\n\n@Payut\n@Thksib\n\nили айди:\n-1093020379327\n-100392002828\nили все вместе:\n@jigsjhsj\n-100393002828929`);

          return;

      } else if(query.data === 'set_pay_for_ref') {

        state[uid] = 'set_pay_for_ref';

        bot.sendMessage(query.from.id, `Введите новую плату за рефа:`);

        return;

      }
      else if (query.data.startsWith('delitetask')) {

	  var taskid = Number(query.data.split("_")[1])

	await AdsTask.deleteOne({ _id: taskid });
bot.sendMessage(uid, "Вы успешно удалили задание #"+ taskid);
    console.log('Task deleted successfully!');
}
	else if (query.data == 'Adstaskadm') {
	var games = await mongo.model('AdsTask').find();
      const opts = {
        reply_markup: {
          inline_keyboard: []
        },
      };
      opts.reply_markup.inline_keyboard.push([{ text: "✔️ Создать", callback_data: "createadstask" }]);
      for (let i = 0; i < games.length; i++) {
        opts.reply_markup.inline_keyboard.push([
          {
text: `Задание #${games[i]._id} | Сумма ${games[i].sum} | Кол ${games[i].kolv}`,
            callback_data: `delitetask_${games[i]._id}`,
          },
        ]);
      }
      bot.sendMessage(uid, 'Выберите задание для удаления или создайте:', opts);
    }
      else if(query.data === 'createadstask') {
        bot.sendMessage(uid, `Мне крч лень делать больше кода такчто для создания задания отправь вот так типо: _текст_ссылка_сумма_количество`)
        state[uid] = 8274383727483
      }
      else if(query.data === 'set_min_withdraw') {

        state[uid] = 'set_min_withdraw';

        bot.sendMessage(query.from.id, `Введите новую сумму минимальной выплаты:`);

        return;

      } else if (d == "admin_mm") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите текст рассылки или отправьте изображение:\n\n<i>Для добавления кнопки-ссылки в рассылаемое сообщение добавьте в конец сообщения строку вида:</i>\n# Текст на кнопке # http://t.me/link #', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 7770
    } else if (d == "admin_w") {
      bot.deleteMessage(message.chat.id, message.message_id);
      let tickets = await Ticket.find();
      if (tickets.length == 0) return bot.sendMessage(uid, 'Заявок на вывод нет');
      await tickets.map((x) => {
        bot.sendMessage(uid, `📝 Игрок: <a href="tg://user?id=${x.id}">Игрок</a> (ID: <code>${x.id}</code>)\n
  🍌Сумма: <code>${x.amount}Rub</code>
  🥝 Кошелёк: <code>${x.wallet}</code>`, {
          parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: '📭 Подтвердить выплату', callback_data: `withdraw:${x.id}` }], [{ text: '♻️ Вернуть', callback_data: `back:${x.id}` }], [{ text: '🚫 Забрать', callback_data: `take:${x.id}` }]] }
        });
      });
    }
    else if (d == "admin_QMONEY") {

      bot.deleteMessage(message.chat.id, message.message_id);

      let TIKETT = await Ticketttttt.find();
      if (TIKETT.length == 0) return bot.sendMessage(uid, 'Заявок на вывод нет');
      await TIKETT.map((x) => {
        bot.sendMessage(uid, `📝 Игрок: <a href="tg://user?id=${x.id}">Игрок</a> (ID: <code>${x.id}</code>)\n
  🍌Сумма: <code>${x.amount}</code>Rub
  ⚕️ Кошелёк: <code>${x.wallet}</code>`, {
          parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: '📭 Подтвердить выплату', callback_data: `withdrawQMONEY:${x.id}` }]] }
        });
      });
    }
    else if (d == "admin_QIWI") {

      bot.deleteMessage(message.chat.id, message.message_id);

      let TIKETTT = await Tickettttt.find();
      if (TIKETTT.length == 0) return bot.sendMessage(uid, 'Заявок на вывод нет');
      await TIKETTT.map((x) => {
        bot.sendMessage(uid, `📝 Игрок: <a href="tg://user?id=${x.id}">Игрок</a> (ID: <code>${x.id}</code>)\n
  🍌Сумма: <code>${x.amount}</code>Rub
  🥝 Кошелёк: <code>${x.wallet}</code>`, {
          parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: '📭 Подтвердить выплату', callback_data: `withdrawQIWI:${x.id}` }]] }
        });
      });
    }
    else if (d == "admin_trx") {
      bot.deleteMessage(message.chat.id, message.message_id);
      let ticketts = await Tickett.find();
      if (ticketts.length == 0) return bot.sendMessage(uid, 'Заявок на вывод нет');
      await ticketts.map((x) => {
        bot.sendMessage(uid, `📝 Игрок: <a href="tg://user?id=${x.id}">Игрок</a> (ID: <code>${x.id}</code>)\n
  📍 Сумма: <code>${x.amount}</code>TRX
  📎 Адрес: <code>${x.wallet}</code>`, {
          parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: '📭 Подтвердить выплату', callback_data: `withdrawTRX:${x.id}` }],]}
        });
      });
    }
      else if (d == "admin_FKWALLET") {
      bot.deleteMessage(message.chat.id, message.message_id);
      let TIKKET = await Ticketttt.find();
      if (TIKKET.length == 0) return bot.sendMessage(uid, 'Заявок на вывод нет');
      await TIKKET.map((x) => {
        bot.sendMessage(uid, `📝 Игрок: <a href="tg://user?id=${x.id}">Игрок</a> (ID: <code>${x.id}</code>)\n
  📍 Сумма: <code>${x.amount}</code>
  📎 Адрес: <code>${x.wallet}</code>`, {
          parse_mode: "HTML", reply_markup: { inline_keyboard: [[{ text: '📭 Подтвердить выплату', callback_data: `withdrawFKWALLET:${x.id}` }],]}
        });
      });
    }
    else if (d.startsWith("admin_bm")) {
      bot.deleteMessage(message.chat.id, message.message_id);
      var bm = JSON.parse((await User.findOne({ id: 1 })).menu)
      if (d.split("_")[2] == "false") bm.status = false
      if (d.split("_")[2] == "true") bm.status = true
      await User.updateOne({ id: 1, menu: JSON.stringify(bm) })
      console.log(bm)
      bot.sendMessage(uid, `Настройки магического места:\n
Стоимость: ${bm.price} рублей
Статус: ${bm.status ? "✅ доступна для покупки" : "🍌недоступна для покупки"}
Доступно: ${bm.count}
Куплено: ${bm.bought}
`, {
        reply_markup: {
          inline_keyboard: [
            [{ text: 'Выпустить магическое место', callback_data: `Admin_bm_new` }],
            [{ text: 'Изменить стоимость', callback_data: `Admin_bm_price` }],
            [{ text: 'Изменить доступных', callback_data: `Admin_bm_count` }],
            [{ text: (bm.status ? 'Сделать непоступной' : "Сделать доступной"), callback_data: (bm.status ? 'admin_bm_false' : "admin_bm_true") }],
            [{ text: "◀️ Назад", callback_data: "admin_return" }],
          ]
        }, parse_mode: "HTML"
      })
    }
    
   
    else if (d == "admin_top") {
      bot.deleteMessage(message.chat.id, message.message_id);
      var u = await User.find({ ref: { $ne: 0 }, _id: { $gt: mongo.Types.ObjectId.createFromTime(Date.now() / 1000 - 24 * 60 * 60) } })
      console.log(u)
      var top = []
      u.map((e) => {
        var t = top.filter(u => { if (e.ref == u.id) return true; else return false })
        if (t.length == 0) top.push({ id: e.ref, ref: 1 })
        else {
          top = top.filter(u => { if (e.ref == u.id) return false; else return true })
          top.push({ id: e.ref, ref: t[0].ref + 1 })
        }
      })
      top = top.sort((a, b) => { if (a.ref <= b.ref) return 1; else return -1 })
      top.length = 20
      var str = `<b>🕒 Топ рефоводов за 24 часа:</b>\n\n`
      for (const i in top) {
        var us = await User.findOne({ id: top[i].id })
        str += `<b>${Number(i) + 1})</b> <a href="tg://user?id=${us.id}">${us.name ? us.name : "Пользователь"}</a> - <b>${top[i].ref}</b> рефералов\n`
      }
      bot.sendMessage(uid, str, { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_return" }]] }, parse_mode: "HTML" })
    }
    else if (d == "Admin_bm_new") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите количество магических мест для продажи (число купивших обнулится, и магические места станут автоматически доступны для покупки по текущей стоимости и пропадут с покупки, когда число купивших привысит доступное количество):', { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_bm" }]] }, parse_mode: "HTML" })
      state[uid] = 77771
    }
    else if (d == "Admin_bm_price") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите новую стоимость магического места в рублях:', { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_bm" }]] }, parse_mode: "HTML" })
      state[uid] = 77772
    }
    else if (d == "Admin_bm_count") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите новое количество доступных магических мест:', { reply_markup: { inline_keyboard: [[{ text: "◀️ Назад", callback_data: "admin_bm" }]] }, parse_mode: "HTML" })
      state[uid] = 77773
    }
    else if (d.split("_")[0] == "referalscheck") {
			bot.deleteMessage(message.chat.id, message.message_id);
			var referal_id = d.split("_")[1]
			RefferList.find({refid: referal_id}, (err, users)=>{
			   
      if (err) {
        console.log(err);
    }
      else {
        if (users.length > 0) {
            let refsList = '';
users.forEach(refchik => {
    refsList += `ID: ${refchik.id} | <a href="tg://user?id=${refchik.id}">${refchik.name}</a> | Дата: ${refchik.regDate}\n`;
    });
 bot.sendMessage(uid, `${refsList}`, { reply_markup: RM_admin_return, parse_mode: "HTML" })
}
        
  else {
      bot.sendMessage(uid, `Нету у пользвателя рефов`, { reply_markup: RM_admin_return, parse_mode: "HTML" })
 }
    }
});
}
    else if (d == "admin_b") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите % для бонуса к пополнению или 0 для отключения:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 7771
    }
    else if (d == "admin_br") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите % для бонуса к реинвесту или 0 для отключения:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 77712
	}
	
	else if (d == "admin_waves") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Введите курс WAVES в рубинах:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 777122
		}  else if (d == 'vaip') {
			bot.deleteMessage(message.chat.id, message.message_id);
			let users = await User.find()
			users.map(async (i) => {
				await User.findOneAndUpdate({ id: i.id }, {
					buybalance: 0,
					outbalance: 0,
					bhivebalance: 0,
					wb_profits: 0,
					fc: 0,
					ref: 0,
					regDate: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
					trees: [{ id: 0, date: Date.now(), lastCollect: Date.now() }],
					deposit: 0,
					payout: 0,
					fetuses: 0,
					menu: "",
					lastCollect: Date.now(),
					ban: false,
					refCount: 0,
					not: false,
					prudLevel: 0,
					limit: 5
				})
				bot.sendMessage(message.from.id, 'Обнуление закончилась')
			})
		} else if (d == 'trees_set') {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Выберите что хотите изменить:', { reply_markup: { inline_keyboard: [ [{ text: 'Название', callback_data: 'trees_set_name' }, { text: 'Цены', callback_data: 'trees_set_price' }, { text: 'Доход', callback_data: 'trees_set_earn' }] ] } })
		} else if (d == 'trees_set_name') {
			bot.sendMessage(uid, 'Отправьте айди и название в таком виде: "0_Крутой чел"')
			state[uid] = 'trees_set_name'
		} else if (d == 'trees_set_price') {
			bot.sendMessage(uid, 'Отправьте айди и цену в таком виде: "0_20"')
			state[uid] = 'trees_set_price'
		} else if (d == 'trees_set_earn') {
			bot.sendMessage(uid, 'Отправьте айди и доход в таком виде: "0_25"')
			state[uid] = 'trees_set_earn'
		}
	else if (d.split("_")[0] == 'adminmmrefund') {
			var mm = await MM.findOne({ id: Number(d.split("_")[1]) })

			bot.deleteMessage(message.chat.id, message.message_id);
			
			bot.sendMessage(uid, "🍌Рассылка отклонена с возвратом!", { reply_markup: { keyboard: Start, resize_keyboard: true } })
			bot.sendMessage(mm.creator_id, "🍌<b>Рассылка не прошла модерацию</b>\nНа Ваш рекламный баланс возвращено <b>" + mm.sum + "$</b>!", { parse_mode: html })
			addAdvBal(mm.creator_id, mm.sum)
			await MM.deleteOne({ id: mm.id })
		} else if (d.split("_")[0] == 'adminmmnorefund') {
			var mm = await MM.findOne({ id: Number(d.split("_")[1]) })
			bot.deleteMessage(message.chat.id, message.message_id);
			
			bot.sendMessage(uid, "🍌<b>Рассылка отклонена без возврата!</b>", { reply_markup: { keyboard: Start, resize_keyboard: true } })
			bot.sendMessage(mm.creator_id, "🍌Рассылка не прошла модерацию!", { })
			await MM.deleteOne({ id: mm.id })
		}
		

		else if (d.split("_")[0] == 'adminmmaccept') {
			var mm = await MM.findOne({ id: Number(d.split("_")[1]) })
			var creator_id = mm.creator_id
			var mm_size = mm.size
			var text = mm.info.text
			bot.deleteMessage(message.chat.id, message.message_id);
			if (mm.type == "text") {
				if (!mm.btns_status) bot.sendMessage(uid, "Рассылка запущена!").then((e) => { mm_t(text, e.message_id, e.chat.id, false, false, false, mm_size) })
				else {
					var btext = mm.btns.text
					var blink = mm.btns.link
					bot.sendMessage(uid, "Рассылка запущена!").then((e) => { mm_t(text, e.message_id, e.chat.id, true, btext, blink, mm_size) })
				}
			}
			else if (mm.type == "img") {
				if (!mm.btns_status) bot.sendMessage(uid, "Рассылка запущена!").then((e) => { mm_img(mm.info.img, text, e.message_id, e.chat.id, false, false, false, mm_size) })
				else {
					var btext = mm.btns.text
					var blink = mm.btns.link
					bot.sendMessage(uid, "Рассылка запущена!").then((e) => { mm_img(mm.info.img, text, e.message_id, e.chat.id, true, btext, blink, mm_size) })
				}
			}
			bot.sendMessage(creator_id, "✅ Ваш пост прошёл модерацию и запущена рассылка на <b>" + mm_size + "%</b> аудитории бота!", { reply_markup: { keyboard: Start, resize_keyboard: true }, parse_mode: html })
			await MM.deleteOne({ id: mm.id })
		}
	else if (d == "admin_weather") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Выберете погоду:', {
				reply_markup: {
					inline_keyboard: [
						[{ text: "🌧 Дождь (+5% к доходу)", callback_data: "admin_weatherSet_0" }],
						[{ text: "☁️ Пасмурно (+2% к доходу)", callback_data: "admin_weatherSet_1" }],
						[{ text: "☀️ Солнечно (-2% к доходу)", callback_data: "admin_weatherSet_2" }],
						[{ text: "🔥 Знойная жара (-5% к доходу)", callback_data: "admin_weatherSet_3" }],
						[{ text: "🌦 Умеренная (обычная доходу)", callback_data: "admin_weatherSet_4" }],
						[{ text: "◀️ Назад", callback_data: "admin_return" }]
					]
				}, parse_mode: "HTML"
			})
		}
		else if (~d.indexOf("admin_weatherSet")) {
			bot.deleteMessage(message.chat.id, message.message_id);
			var w = Number(d.split("_")[2])
			bot.sendMessage(uid, 'Сбор ископаемых у всех игроков...', { parse_mode: "HTML" })
			await collectAllUsers()
			await setWeather(w)
			bot.sendMessage(uid, 'Погода изменена!', { reply_markup: RM_admin_return, parse_mode: "HTML" })

		}
	
    else if (d == "admin_limit") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите максимально возможное количество персонажей для покупки:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 7771222
    }

    else if (d == "admin_u") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите ID пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 7772
    }
    else if (d.split("_")[0] == "addBuyBal") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите сумму пополнения баланса для покупок пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 7773
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "addOutBal") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите сумму пополнения баланса для вывода пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 7774
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "addBHIVEBal") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите сумму пополнения WAVES баланса пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 77745
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "addPayIns") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите сумму для добавления в сумму пополнений пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 777455
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "addPayOuts") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите сумму для добавления в сумму выводов пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 77745555
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "editBuyBal") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите новый баланс для покупок пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 7775
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "editOutBal") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите новый баланс для вывода пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 7776
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "editBHIVEBal") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите новый WAVES баланс пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 77765
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "editPayIns") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите новую сумму пополнений пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 777655
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "addtrxBal") {


      bot.sendMessage(uid, 'Введите сумму пополнения баланса TRX пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 747444
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "addpopBal") {

      bot.sendMessage(uid, 'Введите сумму пополнения баланса попыток пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 74744
      data[uid] = d.split("_")[1]
    }
    else if (d.split("_")[0] == "editPayOuts") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Введите новую сумму выводов пользователя:', { reply_markup: RM_admin_return, parse_mode: "HTML" })
      state[uid] = 77765555
      data[uid] = d.split("_")[1]
    }  else if (d.split("_")[0] == 'tressVaip') {
			bot.deleteMessage(message.chat.id, message.message_id);
			await User.findOneAndUpdate({ id: d.split('_')[1] }, { trees: [] })
			bot.sendMessage(uid, 'Персы юзера обнулены', { reply_markup: RM_admin_return, parse_mode: "HTML" })
		}
    else if (d.split("_")[0] == "giveTree") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Выберете Персонажи для выдачи:', { reply_markup: { inline_keyboard: [[{ text: trees[0].name, callback_data: "giveTree2_" + d.split("_")[1] + "_0" }], [{ text: trees[1].name, callback_data: "giveTree2_" + d.split("_")[1] + "_1" }], [{ text: trees[2].name, callback_data: "giveTree2_" + d.split("_")[1] + "_2" }], [{ text: trees[3].name, callback_data: "giveTree2_" + d.split("_")[1] + "_3" }], [{ text: trees[4].name, callback_data: "giveTree2_" + d.split("_")[1] + "_4" }], [{ text: trees[5].name, callback_data: "giveTree2_" + d.split("_")[1] + "_5" }], [{ text: trees[6].name, callback_data: "giveTree2_" + d.split("_")[1] + "_6" }], [{ text: trees[7].name, callback_data: "giveTree2_" + d.split("_")[1] + "_7" }], [{ text: trees[8].name, callback_data: "giveTree2_" + d.split("_")[1] + "_8" }], [{ text: trees[9].name, callback_data: "giveTree2_" + d.split("_")[1] + "_9" }], [{ text: trees[10].name, callback_data: "giveTree2_" + d.split("_")[1] + "_10" }]] }, parse_mode: "HTML" })
    }

    else if (d.split("_")[0] == "giveTree2") {
      bot.deleteMessage(message.chat.id, message.message_id);
      giveTree(Number(d.split("_")[1]), Number(d.split("_")[2]))
      bot.sendMessage(Number(d.split("_")[1]), 'Вам выдан Персонаж: ' + trees[Number(d.split("_")[2])].name, { rparse_mode: "HTML" })
      bot.sendMessage(uid, `${trees[Number(d.split("_")[2])].name} выдан пользователю`, { reply_markup: RM_admin_return, parse_mode: "HTML" })
    }
    else if (d.split("_")[0] == "takeTree") {
      bot.deleteMessage(message.chat.id, message.message_id);
      var id = Number(d.split("_")[1])
      var u = await User.findOne({ id })
      var keyboard = { inline_keyboard: [] }
      for (var i = 0; i < u.trees.length; i++) {
        var tree = u.trees[i]
        console.log(tree)
        keyboard.inline_keyboard.push([{ text: trees.find((x) => x.id == tree.id).name, callback_data: "takeTree2_" + id + "_" + i }])
      }
      bot.sendMessage(uid, 'Выберете Персонажа, которого необходимо отнять:', { reply_markup: keyboard, parse_mode: "HTML" })
    }
    else if (d.split("_")[0] == "takeTree2") {
      bot.deleteMessage(message.chat.id, message.message_id);
      var id = Number(d.split("_")[1])
      var i = Number(d.split("_")[2])
      var u = await User.findOne({ id })
      u.trees.splice(i, 1)
      await User.findOneAndUpdate({ id }, { trees: u.trees })
      bot.sendMessage(uid, 'Вы успешно забрали персонажа у пользователя!', { reply_markup: { inline_keyboard: [[{ text: "Назад", callback_data: "takeTree_" + id }]] }, parse_mode: "HTML" })
    }

    else if (d == "a_voucher") {
      bot.deleteMessage(message.chat.id, message.message_id);
      bot.sendMessage(uid, 'Выберете Персонажа для создания чека:', { reply_markup: { inline_keyboard: [[{ text: trees[0].name, callback_data: "voucher_0" }], [{ text: trees[1].name, callback_data: "voucher_1" }], [{ text: trees[2].name, callback_data: "voucher_2" }], [{ text: trees[3].name, callback_data: "voucher_3" }], [{ text: trees[4].name, callback_data: "voucher_4" }], [{ text: trees[5].name, callback_data: "voucher_5" }], [{ text: trees[6].name, callback_data: "voucher_6" }], [{ text: trees[7].name, callback_data: "voucher_7" }], [{ text: trees[8].name, callback_data: "voucher_8" }], [{ text: trees[9].name, callback_data: "voucher_9" }],  [{ text: trees[10].name, callback_data: "voucher_10" }]] }, parse_mode: "HTML" })
    }
    else if (d.split("_")[0] == "voucher") {
      bot.deleteMessage(message.chat.id, message.message_id);
      var cid = generateID(8)
      await Voucher.insertMany({ id: cid, tree_id: Number(d.split("_")[1]) })
      bot.sendMessage(uid, `Чек создан:\nhttps://t.me/Cocacolainvest_bot?start=C${cid}`, { reply_markup: RM_admin_return })
    }
    
    else if (d == "a_voucherpromo") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Выбери баланс для создания промо', { reply_markup: RM_promo, parse_mode: "HTML" })
		}
		else if (d == "voucherbuy") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Напишите сумму и количество активаций промокода пример: _сумма_количество', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 99999
		}
		else if (d == "voucherout") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Напишите сумму и количество активаций промокода пример: _сумма_количество', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 10000
		}
		else if (d == "voucheroute") {
			bot.deleteMessage(message.chat.id, message.message_id);
			bot.sendMessage(uid, 'Напишите сумму и количество активаций промокода пример: _сумма_количество', { reply_markup: RM_admin_return, parse_mode: "HTML" })
			state[uid] = 10010
		}
    
    else if (d == "admin_mm_stop") {
      var tek = Math.round((mm_i / mm_total) * 40)
      var str = ""
      for (var i = 0; i < tek; i++) str += "+"
      str += '>'
      for (var i = tek + 1; i < 41; i++) str += "-"
      mm_status = false;
      bot.editMessageText("Рассылка остановлена!", { chat_id: mm_achatid, message_id: mm_amsgid })
      mm_u = []
    }
    else if (d == "admin_mm_pause") {
      var tek = Math.round((mm_i / mm_total) * 40)
      var str = ""
      for (var i = 0; i < tek; i++) str += "+"
      str += '>'
      for (var i = tek + 1; i < 41; i++) str += "-"
      bot.editMessageText("<b>Выполнено:</b> " + mm_i + '/' + mm_total + ' - ' + Math.round((mm_i / mm_total) * 100) + '%\n' + str + "\n\n<b>Статистика:</b>\n<b>Успешных:</b> " + mm_ok + "\n<b>Неуспешных:</b> " + mm_err, { chat_id: mm_achatid, message_id: mm_amsgid, reply_markup: RM_mm2, parse_mode: html })
      mm_status = false;
    }
    else if (d == "admin_mm_play") {
      mm_status = true;
      bot.editMessageText("Выполнено: " + mm_i + '/' + mm_total + ' - ' + Math.round((mm_i / mm_total) * 100) + '%\n', { chat_id: mm_achatid, message_id: mm_amsgid, reply_markup: RM_mm1 })
    }
    else if (d.split("_")[0] == "ban") {
      var uuid = Number(d.split("_")[1])
      await User.findOneAndUpdate({ id: uuid }, { ban: true })
      bot.editMessageText('<a href="tg://user?id=' + uuid + '">Пользователь</a> заблокирован!', { chat_id: uid, message_id: message.message_id, parse_mode: html })
    }
    else if (d.split("_")[0] == "unban") {
      var uuid = Number(d.split("_")[1])
      await User.findOneAndUpdate({ id: uuid }, { ban: false })
      bot.editMessageText('<a href="tg://user?id=' + uuid + '">Пользователь</a> разбанен!', { chat_id: uid, message_id: message.message_id, parse_mode: html })
    }
    else if (d == "admin_return") {
      bot.deleteMessage(message.chat.id, message.message_id);
var h = process.uptime() / 3600 ^ 0
			var m = (process.uptime() - h * 3600) / 60 ^ 0
			var s = process.uptime() - h * 3600 - m * 60 ^ 0
			var heap = process.memoryUsage().rss / 1048576 ^ 0

			
			bot.sendMessage(uid, '<b>Админ-панель:</b>\n\n<b>Аптайм бота:</b> ' + h + ' часов ' + m + ' минут ' + s + ' секунд\n<b>🕵Пользователей в боте: </b>' + (await User.countDocuments({})) + '\n<b>📊Памяти использовано:</b> ' + heap + "МБ\n<b>💶Заявок на вывод:</b> " + await Ticket.countDocuments(), { parse_mode: "HTML", reply_markup: RM_admin })
			
			
		}
    
  }
});

var state = []


User.prototype.inc = function (field, value = 1) {
  this[field] += value;
  return this.save();
}

User.prototype.dec = function (field, value = 1) {
  this[field] -= value;
  return this.save();
}

User.prototype.set = function (field, value) {
  this[field] = value;
  return this.save();
}

function getNavigationIcon(id, tree_id) {
  if (id == tree_id) return '🔵';
  else {
    if (id == 0) return '1️⃣';
    if (id == 1) return '2️⃣';
    if (id == 2) return '3️⃣';
    if (id == 3) return '4️⃣';
    if (id == 4) return '5️⃣';
    if (id == 5) return '6️⃣';
    if (id == 6) return '7️⃣';
    if (id == 7) return '8️⃣';
    if (id == 8) return '9️⃣';
    if (id == 9) return '🔟';
    if (id == 10) return '1️⃣1️⃣';
  }
}

function getNavigationQuery(id, tree_id) {
  if (id == tree_id) return 'none';
  else {
    if (id == 0) return 'trees:shop0';
    if (id == 1) return 'trees:shop1';
    if (id == 2) return 'trees:shop2';
    if (id == 3) return 'trees:shop3';
    if (id == 4) return 'trees:shop4';
    if (id == 5) return 'trees:shop5';
    if (id == 6) return 'trees:shop6';
    if (id == 7) return 'trees:shop7';
    if (id == 8) return 'trees:shop8';
    if (id == 9) return 'trees:shop9';
    if (id == 10) return 'trees:shop10';
  }
}

function getInventoryIcon(id, tree_id) {
  if (id == tree_id) return '🔵';
  else {
    if (id == 0) return '1️⃣';
    if (id == 1) return '2️⃣';
    if (id == 2) return '3️⃣';
    if (id == 3) return '4️⃣';
    if (id == 4) return '5️⃣';
    if (id == 5) return '6️⃣';
    if (id == 6) return '7️⃣';
    if (id == 7) return '8️⃣';
    if (id == 8) return '9️⃣';
    if (id == 9) return '🔟';
    if (id == 10) return '1️⃣1️⃣';
  }
}

function getInventoryQuery(id, tree_id) {
  if (id == tree_id) return 'none';
  else {
    if (id == 0) return 'trees:inv0';
    if (id == 1) return 'trees:inv1';
    if (id == 2) return 'trees:inv2';
    if (id == 3) return 'trees:inv3';
    if (id == 4) return 'trees:inv4';
    if (id == 5) return 'trees:inv5';
    if (id == 6) return 'trees:inv6';
    if (id == 7) return 'trees:inv7';
    if (id == 8) return 'trees:inv8';
    if (id == 9) return 'trees:inv9';
    if (id == 10) return 'trees:inv10';
  }
}

		


var lastTxnId
async function payeerCheck() {
	require('request')({
		method: 'POST',
		url: 'https://payeer.com/ajax/api/api.php?history',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: `account=${config.payeer.account}&apiId=${config.payeer.apiId}&apiPass=${config.payeer.apiPass}&action=history&count=1&type=incoming`
	}, async function (error, response, body) {
		body = JSON.parse(body)
		for (const txnId in body.history) {
			if (lastTxnId == null) { lastTxnId = txnId; console.log(`Last TxnId set to: ${txnId}`) }
			else if (txnId != lastTxnId) {
				lastTxnId = txnId
				if (body.history[txnId].type != "transfer" || body.history[txnId].status != "success" || !body.history[txnId].comment) return;

				let user = await User.findOne({ id: Number(body.history[txnId].comment.split("M")[1]) });
				if (!user) return;
				if (body.history[txnId].creditedCurrency == "TRX")
					var sum = roundPlus(Number(body.history[txnId].creditedAmount))
				else return
				var id = user.id

				var b = (await User.findOne({ id: 0 })).deposit

				if (b == 0) {
					await user.inc('deposit', sum);
					await user.inc('buybalance', sum);
					await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: sum } })
					bot.sendMessage(id, `Ваш баланс пополнен на ${sum}$ через Payeer`);
					bot.sendMessage("@viplatipo", `🍇 <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${sum}$</b> через <b>Payeer</b>`, { parse_mode: "HTML" })
					ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит через Payeer: ${sum}$`, { parse_mode: "HTML" }))
				} else {
					await user.inc('deposit', sum);
					b = b / 100
					await user.inc('buybalance', sum + sum * b);
					await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: sum } })
					bot.sendMessage(id, `Ваш баланс пополнен на ${sum}$ и Вы получаете бонус - ${roundPlus(sum * b)}$!`);
					bot.sendMessage("@viplatipo", `🍇 <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${sum}$</b> через <b>Payeer</b> и получил ${roundPlus(sum*b)}$ бонусом!`, { parse_mode: "HTML" })
					ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${sum}$ через Payeer + ${roundPlus(sum * b)}$ бонус`, { parse_mode: "HTML" }))
				}
				await User.findOneAndUpdate({ id: user.ref }, { $inc: { buybalance: roundPlus(sum * 0.05) } })
				await User.findOneAndUpdate({ id: user.ref }, { $inc: { outbalance: roundPlus(sum * 0.05) } })
				bot.sendMessage(user.ref, `🤝 Ваш <a href="tg://user?id=${id}">реферал</a> пополнил баланс на <b>${sum}$</b>!\n💸 Вам начислено по <b>${roundPlus(sum * 0.05)}$</b> на балансы для покупок и для вывода`, { parse_mode: "HTML" }).catch()
			}
		}
	})
}

if (config.payeer.enabled) {
	setInterval(payeerCheck, 10000)
	payeerCheck()
}

var lastTxnId
async function payeerCheck() {
	require('request')({
		method: 'POST',
		url: 'https://payeer.com/ajax/api/api.php?history',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: `account=${config.payeer.account}&apiId=${config.payeer.apiId}&apiPass=${config.payeer.apiPass}&action=history&count=1&type=incoming`
	}, async function (error, response, body) {
		body = JSON.parse(body)
		for (const txnId in body.history) {
			if (lastTxnId == null) { lastTxnId = txnId; console.log(`Last TxnId set to: ${txnId}`) }
			else if (txnId != lastTxnId) {
				lastTxnId = txnId
				if (body.history[txnId].type != "transfer" || body.history[txnId].status != "success" || !body.history[txnId].comment) return;

				let user = await User.findOne({ id: Number(body.history[txnId].comment.split("M")[1]) });
				if (!user) return;
				if (body.history[txnId].creditedCurrency == "TRX")
					var sum = roundPlus(Number(body.history[txnId].creditedAmount))
				else return
				var id = user.id

				var b = (await User.findOne({ id: 0 })).deposit

				if (b == 0) {
					await user.inc('deposit', sum);
					await user.inc('buybalance', sum);
					await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: sum } })
					bot.sendMessage(id, `Ваш баланс пополнен на ${sum} $ через Payeer`);
					bot.sendMessage("@viplatipo", `🍇 <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${sum} $</b> через <b>Payeer</b>`, { parse_mode: "HTML" })
					ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит через Payeer: ${sum} $`, { parse_mode: "HTML" }))
				} else {
					await user.inc('deposit', sum);
					b = b / 100
					await user.inc('buybalance', sum + sum * b);
					await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: sum } })
					bot.sendMessage(id, `Ваш баланс пополнен на ${sum}$ и Вы получаете бонус - ${roundPlus(sum * b)} $!`);
					bot.sendMessage("@viplatipo", `🍇 <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${sum} $</b> через <b>Payeer</b> и получил ${roundPlus(sum*b)} $ бонусом!`, { parse_mode: "HTML" })
					ADMINS.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${sum} $ через Payeer + ${roundPlus(sum * b)}$ бонус`, { parse_mode: "HTML" }))
				}
				await User.findOneAndUpdate({ id: user.ref }, { $inc: { buybalance: roundPlus(sum * 0.05) } })
				await User.findOneAndUpdate({ id: user.ref }, { $inc: { outbalance: roundPlus(sum * 0.05) } })
				bot.sendMessage(user.ref, `🤝 Ваш <a href="tg://user?id=${id}">реферал</a> пополнил баланс на <b>${sum}$</b>!\n💸 Вам начислено по <b>${roundPlus(sum * 0.05)} $</b> на балансы для покупок и для вывода`, { parse_mode: "HTML" }).catch()
			}
		}
	})
}

if (config.payeer.enabled) {
	setInterval(payeerCheck, 10000)
	payeerCheck()
}

async function mmTick() {
  if (mm_status) {
    try {
      mm_i++
      if (mm_type == "text") {
        if (mm_btn_status)
          bot.sendMessage(mm_u[mm_i - 1], mm_text, { reply_markup: { inline_keyboard: [[{ text: mm_btn_text, url: mm_btn_link }]] }, parse_mode: html }).then((err) => { mm_ok++ }).catch((err) => { mm_err++ })
        else
          bot.sendMessage(mm_u[mm_i - 1], mm_text, { parse_mode: html }).then((err) => { console.log((mm_i - 1) + ') ID ' + mm_u[mm_i - 1] + " OK"); mm_ok++ }).catch((err) => { mm_err++ })
      }
      else if (mm_type == "img") {
        if (mm_btn_status)
          bot.sendPhoto(mm_u[mm_i - 1], mm_imgid, { caption: mm_text, reply_markup: { inline_keyboard: [[{ text: mm_btn_text, url: mm_btn_link }]] } }).then((err) => { mm_ok++ }).catch((err) => { mm_err++ })
        else
          bot.sendPhoto(mm_u[mm_i - 1], mm_imgid, { caption: mm_text }).then((err) => { console.log((mm_i - 1) + ') ID ' + mm_u[mm_i - 1] + " OK"); mm_ok++ }).catch((err) => { mm_err++ })
      }
      if (mm_i % 10 == 0) {
        var tek = Math.round((mm_i / mm_total) * 40)
        var str = ""
        for (var i = 0; i < tek; i++) str += "+"
        str += '>'
        for (var i = tek + 1; i < 41; i++) str += "-"
        bot.editMessageText("<b>Выполнено:</b> " + mm_i + '/' + mm_total + ' - ' + Math.round((mm_i / mm_total) * 100) + '%\n' + str + "\n\n<b>Статистика:</b>\n<b>Успешных:</b> " + mm_ok + "\n<b>Неуспешных:</b> " + mm_err, { chat_id: mm_achatid, message_id: mm_amsgid, reply_markup: RM_mm1, parse_mode: html })
      }
      if (mm_i == mm_total) {
        mm_status = false;
        bot.editMessageText("Выполнено: " + mm_i + '/' + mm_total, { chat_id: mm_achatid, message_id: mm_amsgid })
        sendAdmins('<b>Рассылка завершена!\n\nСтатистика:\nУспешно:</b> ' + mm_ok + "\n<b>Неуспешно:</b> " + mm_err, { parse_mode: html })
        mm_u = []
      }
    } finally { }
  }
}

setInterval(mmTick, 100);

var mm_total
var mm_i
var mm_status = false
var mm_amsgid
var mm_type
var mm_imgid
var mm_text
var mm_achatid
var mm_btn_status
var mm_btn_text
var mm_btn_link
var mm_ok
var mm_err

async function mm_t(text, amsgid, achatid, btn_status, btn_text, btn_link, size) {
  let ut = await User.find({}, { id: 1 }).sort({ _id: -1 })
  mm_total = ut.length
  console.log(ut)
  mm_u = []
  for (var i = 0; i < mm_total; i++)
    mm_u[i] = ut[i].id
  if (size != 100) {
    mm_u = randomizeArr(mm_u)
    mm_total = Math.ceil(mm_total * (size / 100))
    mm_u.length = mm_total
  }
  ut = undefined
  mm_i = 0;
  mm_amsgid = amsgid
  mm_type = "text"
  mm_text = text
  mm_ok = 0
  mm_err = 0
  mm_achatid = achatid
  if (btn_status) {
    mm_btn_status = true
    mm_btn_text = btn_text
    mm_btn_link = btn_link
  }
  else
    mm_btn_status = false
  mm_status = true;
}

bot.on('photo', async msg => {
  if (msg.from != undefined) {
    var uid = msg.from.id
     msg.user = await User.findOne({ id: uid })
    if(state[uid] == 846457843256) {
        var taskId = msg.user.rekama
var newUser = { _id: uid, status: 'Ожидание'};
await AdsTask.updateOne({ _id: taskId }, { $push: { users: newUser } });
  bot.sendPhoto(uid, msg.photo[msg.photo.length - 1].file_id, {
      caption: "Вы отправили отчёт", parse_mode: "HTML"
})
  bot.sendPhoto(6081694282, msg.photo[msg.photo.length - 1].file_id, {
      caption: `Отчёт на задание`, parse_mode: "HTML",
    reply_markup: {
      inline_keyboard: [
[{ text: "Подтверdить", callback_data: "accepttask_" + msg.user.rekama + "_" + msg.user.id}],  
[{ text: "Отклонить", callback_data: "calcelltask_" + msg.user.rekama + "_" + msg.user.id}],  
]
}
})
state[uid] = undefined

}

    if (state[uid] == 7770 && ADMINS.indexOf(uid) !== -1) {
      state[uid] = undefined
      var text = ""
      if (msg.caption != undefined) text = msg.caption
      bot.sendMessage(uid, "Рассылка запущена!").then((e) => {
        if (text.split("#").length == 4) {
          var btn_text = text.split("#")[1].split("#")[0].replace(/(^\s*)|(\s*)$/g, '')
          var btn_link = text.split("#")[2].split("#")[0].replace(/(^\s*)|(\s*)$/g, '')
          text = text.split("#")[0].replace(/(^\s*)|(\s*)$/g, '').replace(' ', '')
          mm_img(msg.photo[msg.photo.length - 1].file_id, text, e.message_id, e.chat.id, true, btn_text, btn_link, 100)

        }
        else
          mm_img(msg.photo[msg.photo.length - 1].file_id, text, e.message_id, e.chat.id, false, false, false, 100)

      })
    }
  }
})



async function mm_img(img, text, amsgid, achatid, btn_status, btn_text, btn_link, size) {
  let ut = await User.find({}, { id: 1 }).sort({ _id: -1 })
  mm_total = ut.length
  mm_u = []
  for (var i = 0; i < mm_total; i++)
    mm_u[i] = ut[i].id
  if (size != 100) {
    mm_u = randomizeArr(mm_u)
    mm_total = Math.ceil(mm_total * (size / 100))
    mm_u.length = mm_total
  }

  ut = undefined
  mm_i = 0;
  mm_amsgid = amsgid
  mm_type = "img"
  mm_text = text
  mm_imgid = img
  mm_ok = 0
  mm_err = 0
  mm_achatid = achatid
  if (btn_status) {
    mm_btn_status = true
    mm_btn_text = btn_text
    mm_btn_link = btn_link
  }
  else
    mm_btn_status = false
  mm_status = true;
}

function randomizeArr(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

const html = "HTML"

function sendAdmins(text, params) { for (var i = 0; i < ADMINS.length; i++) bot.sendMessage(ADMINS[i], text, params) }

var data = []


function roundPlus(number) { if (isNaN(number)) return false; var m = Math.pow(10, 2); return Math.round(number * m) / m; }

async function main() {
  var u = (await User.find({}, { id: 1 })).map((e) => { return e.id })
  for (var i in u) {
    await User.findOneAndUpdate({ id: u[i] }, { refCount: await User.countDocuments({ ref: u[i] }) })
    console.log(i)
  }

}
//main()

// Обработчик пчеломатки с выдачей пчёл
async function beeMotherUpdater() {
  // Удаление старых пчёл
  var bm = await BeeMother.find({ end_time: { $lte: Date.now() } })
  for (var i in bm) {
    var b = bm[i]
    await BeeMother.deleteOne({ _id: String(b._id) })
    bot.sendMessage(b.creator_id, `⚜️ Ваше магическое место принесло 4 супер Персонажи и исчезло`)
  }
  // Выдача диких пчёл
  bm = await BeeMother.find({ beesGet: { $lte: 4 }, nextBeeGet: { $lte: Date.now() } })
  console.log(bm)
  for (var i in bm) {
    var b = bm[i]
    await BeeMother.findOneAndUpdate({ _id: String(b._id) }, { nextBeeGet: b.nextBeeGet + 1000 * 60 * 60 * 24 * 7, beesGet: b.beesGet + 1 })
    await WildBee.insertMany([{ creator_id: b.creator_id, start_time: Date.now(), level: 1, bee_profit: 0 }])
    bot.sendMessage(b.creator_id, `🧝‍♀️ Магическое место принесло Вам супер Персонажа!`)
  }
}
setInterval(beeMotherUpdater, 1000 * 60 * 60)

// Обработчик выдачи мёда дикими пчёлами
async function wildBeesUpdater() {
  if (new Date().getMinutes() == 0) {
    var wb = await WildBee.find()
    for (var i in wb) {
      var b = wb[i]
      await User.findOneAndUpdate({ id: b.creator_id }, { $inc: { wb_profits: wbProfits[b.level] } })
      await WildBee.findOneAndUpdate({ _id: String(b._id) }, { $inc: { bee_profit: wbProfits[b.level] } })
    }
  }
}
setInterval(wildBeesUpdater, 1000 * 60)

//User.updateMany({}, {payout: 0, not: false}).then()

async function totalEarnCalc() {
  var users = await User.find()
  for (const i in users) {
    try {
      var user = users[i]
      let total_earn = 0;
      user.trees.map((x) => {
        total_earn += trees.find((a) => a.id == x.id).earn
      })
      await User.findOneAndUpdate({ id: user.id }, { totalEarn: total_earn })
      console.log(i + "/" + users.length + " - " + total_earn)
    }
    catch { }
  }
}
setInterval(totalEarnCalc, 1000 * 60 * 15)

async function totalClanEarnCalc() {
  var clans = await Clan.find()
  for (const i in clans) {
    try {
      var clan = clans[i]
      let total_earn = 0;
      var users = await User.find({ clanName: clan.name })
      users.map(u => { total_earn += u.totalEarn })
      await Clan.findOneAndUpdate({ name: clan.name }, { total_earn: total_earn })
      console.log(i + "/" + clans.length + " - " + total_earn)
    }
    catch { }
  }
}

setInterval(totalClanEarnCalc, 1000 * 60 * 15)

async function clanWar() {
  var d = new Date()
  var minutes = d.getMinutes()
  var hours = d.getHours()
  var date = d.getDate()
  if (!(minutes == 0 && hours == 0 && (date == 5 || date == 15 || date == 25))) return
  var d = new Date()
  var clans = await Clan.find({ $and: [{ name: { $ne: "." } }, { name: { $ne: "dsfsdf" } }] }).sort({ total_earn: -1 }).limit(2)
  await Clan.findOneAndUpdate({ name: clans[0].name }, { $inc: { balance: 100000 } })
  await Clan.findOneAndUpdate({ name: clans[1].name }, { $inc: { balance: 50000 } })
  await Clan.findOneAndUpdate({ name: clans[2].name }, { $inc: { balance: 30000 } })
  await Clan.findOneAndUpdate({ name: clans[3].name }, { $inc: { balance: 15000 } })
  await Clan.findOneAndUpdate({ name: clans[4].name }, { $inc: { balance: 5000 } })
  var us = await User.find({ clanName: { $exists: true } }, { id: 1 })
  var nwd = new Date(getNextClanWarTimestamp())
  for (const i in us) {
    try {
      await bot.sendMessage(us[i].id, `
<b>💎 ${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()} была проведена битва Команд!</b>\n
🏆 Победил команда<b>${clans[0].name}</b>
🍌Он получает <b>⚡ 100k Энергий</b> в казну команды\n
2 место - <b>${clans[1].name}</b> - получает <b>⚡ 50k энергий</b>
3 место - <b>${clans[2].name}</b> - получает <b>⚡ 30k энергий</b>
4 место - <b>${clans[3].name}</b> - получает <b>⚡ 15k энергий</b>
5 место - <b>${clans[4].name}</b> - получает <b>⚡ 5k энергий</b>\n
💎 Следующий бой <b>${nwd.getDate()}.${nwd.getMonth() + 1}.${nwd.getFullYear()}</b>
      `, { parse_mode: "html" });
    }
    catch{ }
  }
}

async function ticker() {
  var d = new Date()
  var minutes = d.getMinutes()
  var hours = d.getHours()
  var date = d.getDate()
  if (minutes == 0 && hours == 0 && (date == 5 || date == 15 || date == 25))
    clanWar()
  if (minutes == 0 && hours == 0)
    await User.updateMany({}, { game_limit: 10, spinsToday: 0 })
}

setInterval(ticker, 1000 * 60)

function getNextClanWarTimestamp() {
  var dt = new Date()
  var m = dt.getMonth()
  var d = dt.getDate()
  if (d < 5) dt.setDate(5)
  else if (d >= 25) {
    dt.setDate(5)
    dt.setMonth(dt.getMonth() + 1)
  }
  else if (d >= 5 && d < 15) dt.setDate(15)
  else if (d >= 15 && d < 25) dt.setDate(25)
  return dt.getTime()
}

async function tamagochiUpdater() {
	var now = (new Date()).getTime()
	var tams = await Tamagochi.find({ lastFeed: { $lte: now - 1000 * 60 * 60 * 12 }, sick: false })
	for (const i in tams) {
		var t = tams[i]
		await Tamagochi.findOneAndUpdate({ _id: t._id }, { sickTime: now, sick: true })
		bot.sendMessage(t.creator_id, `<b>🌽 Вы не кормили доакончика 12 часов, и он заболел!</b>\n\n❤️ Дракончик умрёт, если Вы не вылечите его за 12 часов\n🍌<b>Стоимость лечения:</b> 50 рублей`, { parse_mode: 'html', reply_markup: { inline_keyboard: [[{ text: "❤️ Вылечить дракончика", callback_data: "malMyheal" }]] } })
	}
	tams = await Tamagochi.find({ lastClean: { $lte: now - 1000 * 60 * 60 * 24 }, sick: false })
	for (const i in tams) {
		var t = tams[i]
		await Tamagochi.findOneAndUpdate({ _id: t._id }, { sickTime: now, sick: true })
		bot.sendMessage(t.creator_id, `<b>💩 Вы не убирали аквариум 24 часа, и дракончик заболел!</b>\n\n❤️ Дракончик  умрёт, если Вы не вылечите его за 12 часов\n🍌<b>Стоимость лечения:</b> 50 рублей`, { parse_mode: 'html', reply_markup: { inline_keyboard: [[{ text: "❤️ Вылечить дракончика", callback_data: "malMyheal" }]] } })
	}
	tams = await Tamagochi.find({ sickTime: { $lte: now - 1000 * 60 * 60 * 12 }, sick: true })
	for (const i in tams) {
		var t = tams[i]
		await Tamagochi.deleteOne({ _id: t._id })
		bot.sendMessage(t.creator_id, `❤️ Вы не вылечили дракончика за 12 часов!\n😭 Он умер, жалко его`, { parse_mode: 'html' })
	}
	tams = await Tamagochi.find({ start_time: { $lte: now - 1000 * 60 * 60 * 24 * 30 } })
	for (const i in tams) {
		var t = tams[i]
		await Tamagochi.deleteOne({ _id: t._id })
		await User.findOneAndUpdate({ id: t.creator_id }, { $inc: { outbalance: 1300 } })
		bot.sendMessage(t.creator_id, `🧱 <b>Ваш дракончик вырос здоровым и красивым!</b>\n☺️ Мы с раздостью выкупаем её\n💳 Вам начислено <b>1300 рублей</b> на баланс для вывода`, { parse_mode: 'html' })
	}
}


Clan.findOneAndUpdate({ name: "👑MARVEL👑" }, { creator_id: 816070668 }).then()

async function giveTree(uid, id) {
  var u = await User.findOne({ id: uid });
  let total_balance = 0;
  u.trees.map((x) => { total_balance += (((Date.now() - u.lastCollect) / 1000) / 60) * (trees.find((a) => a.id == x.id).earn / 60); })
  u.trees.push({ id: id, date: Date.now(), lastCollect: Date.now() });
  await User.findOneAndUpdate({ id: uid }, { lastCollect: Date.now(), fetuses: Number(total_balance.toFixed(2)), trees: u.trees })
}



function randomizeArr(arr) {
  var j, temp;
  for (var i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
}

WildBee.insertMany([{ creator_id: 292966454, start_time: Date.now(), level: 1, bee_profit: 0 }]).then()

/*
async function ma(){
  var response = {data: JSON.parse(fs.readFileSync("trans.txt", {encoding: "utf8"}))}
  response.data.map(async (x) => {
    if (!x.comment) return;
    if (!x.comment.startsWith('S')) return;
    let id = Number(x.comment.split("S")[1]);
    if (!id) return;
    let user = await User.findOne({ id });
    if (!user) return;
    if (x.sum.currency != 643) return;
    var b = (await User.findOne({ id: 0 })).deposit
    var sum = x.sum.amount
    if (sum >= 300) {
      await user.inc('deposit', x.sum.amount);
      if (user.deposit + x.sum.amount > 100 && !user.not) {
        await bot.sendMessage(id, `🍌Вы пополнили баланс бота более, чем на 100$ и приглашаетесь в чат инвесторов!\nПерешлите это сообщение администратору @Lyrinal`);
        await User.findOneAndUpdate({ id: user.id }, { not: true })
      }
      b = 0.04
      await user.inc('buybalance', x.sum.amount + x.sum.amount * 0.04);
      await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
      bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}$ и Вы получаете бонус - ${roundPlus(x.sum.amount * 0.04)}$!`);
      //bot.sendMessage("@viplatipo", `🧝‍♀️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}$</b> и получил ${roundPlus(x.sum.amount * 0.04)}$ бонусом!`, { parse_mode: "HTML" })
      CHANNEL_INFO.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}$ + ${roundPlus(x.sum.amount * 0.04)}$ бонус`, { parse_mode: "HTML" }))

    }
    else if (b == 0) {
      await user.inc('deposit', x.sum.amount);
      if (user.deposit + x.sum.amount > 100 && !user.not) {
        await bot.sendMessage(id, `🍌Вы пополнили баланс бота более, чем на 100$ и приглашаетесь в чат инвесторов!\nПерешлите это сообщение администратору @Lyrinal`);
        await User.findOneAndUpdate({ id: user.id }, { not: true })
      }
      await user.inc('buybalance', x.sum.amount);
      await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
      bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}$`);
      //bot.sendMessage("@viplatipo", `🧝‍♀️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}$</b>`, { parse_mode: "HTML" })
      CHANNEL_INFO.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}$`, { parse_mode: "HTML" }))
    } else {
      await user.inc('deposit', x.sum.amount);
      if (user.deposit + x.sum.amount > 100 && !user.not) {
        await bot.sendMessage(id, `🍌Вы пополнили баланс бота более, чем на 100$ и приглашаетесь в чат инвесторов!\nПерешлите это сообщение администратору @Lyrinal`);
        await User.findOneAndUpdate({ id: user.id }, { not: true })
      }
      b = b / 100
      await user.inc('buybalance', x.sum.amount + x.sum.amount * b);
      await User.findOneAndUpdate({ id: 0 }, { $inc: { ref: x.sum.amount } })
      bot.sendMessage(id, `Ваш баланс пополнен на ${x.sum.amount}$ и Вы получаете бонус - ${roundPlus(x.sum.amount * b)}$!`);
      //bot.sendMessage("@viplatipo", `🧝‍♀️ <a href="tg://user?id=${id}">Пользователь</a> пополнил баланс на <b>${x.sum.amount}$</b> и получил ${roundPlus(x.sum.amount * b)}$ бонусом!`, { parse_mode: "HTML" })
      CHANNEL_INFO.map((a) => bot.sendMessage(a, `<a href="tg://user?id=${id}">Игрок</a> сделал депозит: ${x.sum.amount}$ + ${roundPlus(x.sum.amount * b)}$ бонус`, { parse_mode: "HTML" }))

    }
    await User.findOneAndUpdate({ id: user.ref }, { $inc: { buybalance: roundPlus(x.sum.amount * 0.05) } })
    await User.findOneAndUpdate({ id: user.ref }, { $inc: { outbalance: roundPlus(x.sum.amount * 0.05) } })

    bot.sendMessage(user.ref, `🤝 Ваш <a href="tg://user?id=${id}">реферал</a> пополнил баланс на <b>${x.sum.amount}$</b>!\n💸 Вам начислено по <b>${roundPlus(x.sum.amount * 0.05)}$</b> на балансы для покупок и для вывода`, { parse_mode: "HTML" }).catch()

    txnId.push(x.txnId)
    require('fs').writeFileSync('./txnId.json', JSON.stringify(txnId));
  });
}

ma()
*/

function randomInteger(min, max) {
  // случайное число от min до (max+1)
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

async function setAuction(auction) { await User.findOneAndUpdate({ id: 4 }, { name: JSON.stringify(auction) }, { upsert: true }) }
async function getAuction() { return JSON.parse((await User.findOne({ id: 4 })).name) }


setAuction({
	status: false,
	bank: 0,
	lastBet: {
		price: 10,
		creator_id: 0,
	},
	betCount: 0,
	start_time: 0,
	initMsgId: 0,
	generalMsgId: 0
}).then(()=>{auction_sendInitMsg()})



async function auction_sendInitMsg() {
	var a = await getAuction()
	var msg = await bot.sendMessage(auctionChannel, `
<b>👨🏻‍⚖️ </b>\n
<b>Правила а:</b>
▫️ Любой участник может начать  ставкой от 10 рублей
▫️  может быть завершен при достижении 2 ставок
▫️ Любой участник может повысить предыдущую ставку и стать лидером
▫️ Максимальный шаг повышения - 10 рублей
▫️ После повышения ставки  продлевается на 10 минут
▫️ Как только таймер доходит до нуля, деньги зачисляются тому, кто сделал последнюю ставку
▫️ Пользователь не может сделать более одной ставки подряд
▫️ На момент завершения а, победитель получает 90% суммы от всех ставок а на счет для вывода
▫️ Если ставка единственная (никто не перебил стартовую ставку)  завершится через 12 часов, открывшему начисляется 110%
`, { parse_mode: "html", reply_markup: { inline_keyboard: [[{ text: "🔨 Начать ", callback_data: "auction_start" }], [{ text: "◀️ Перейти в бота", url: "https://t.me/Cocacolainvest_bot" }]] } })
	a.initMsgId = msg.message_id
	await bot.pinChatMessage(auctionChannel, msg.message_id)
	await bot.deleteMessage(auctionChannel, msg.message_id + 1)
	await setAuction(a)
}

async function startAuction(u, bet) {
	var a = await getAuction()
	bot.editMessageText(`✅ <a href="tg://user?id=${u.id}">${u.name}</a> начал  ставкой <b>${bet} рублей</b>!`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.initMsgId })
	var msg = await bot.sendMessage(auctionChannel, `
<b>👨🏻‍⚖️ </b>\n
▫️ <b>Статус:</b> проходит
⏱ <b>Осталось:</b> 12:00:00
🍌<b>Банк а:</b> ${bet} рублей
🔨 <b>Количество ставок:</b> 1\n
👑 <b>Лидер:</b> <a href="tg://user?id=${u.id}">${u.name}</a> поставил <b>${bet} рублей</b>!\n
👇 <b>Выберете количество рублей для повышения ставки:</b>`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId, reply_markup: { inline_keyboard: [[{ text: a.lastBet.price + 1, callback_data: "auction_bet_" + (a.lastBet.price + 1) }, { text: a.lastBet.price + 2, callback_data: "auction_bet_" + (a.lastBet.price + 2) }, { text: a.lastBet.price + 3, callback_data: "auction_bet_" + (a.lastBet.price + 3) }, { text: a.lastBet.price + 4, callback_data: "auction_bet_" + (a.lastBet.price + 4) }, { text: a.lastBet.price + 5, callback_data: "auction_bet_" + (a.lastBet.price + 5) }], [{ text: a.lastBet.price + 6, callback_data: "auction_bet_" + (a.lastBet.price + 6) }, { text: a.lastBet.price + 7, callback_data: "auction_bet_" + (a.lastBet.price + 7) }, { text: a.lastBet.price + 8, callback_data: "auction_bet_" + (a.lastBet.price + 9) }, { text: a.lastBet.price + 9, callback_data: "auction_bet_9" }, { text: a.lastBet.price + 10, callback_data: "auction_bet_" + (a.lastBet.price + 10) }], [{ text: "💳 Мой баланс", callback_data: "auction_balance" }], [{ text: "◀️ Перейти в бота", url: "https://t.me/Cocacolainvest_bot" }]] } })
	a.generalMsgId = msg.message_id
	await bot.pinChatMessage(auctionChannel, msg.message_id)
	await bot.deleteMessage(auctionChannel, msg.message_id + 1)
	a.start_time = Date.now()
	a.status = true
	a.betCount = 1
	a.bank = bet
	a.lastBet = { price: bet, creator_id: u.id, name: u.name, timestamp: Date.now() }
	await setAuction(a)
}

bot.on('callback_query', async (msg) => {
	var d = msg.data
	if (-1 == d.indexOf("auction")) return
	var uid = msg.from.id
	var u = await User.findOne({ id: uid })
	if (!u) return bot.answerCallbackQuery(msg.id, '❗️ Для участия в е вы должны быть пользователем бота @Cocacolainvest_bot!')
	var a = await getAuction()
	if (d == "auction_balance") {
		return bot.answerCallbackQuery(msg.id, `💳 Ваш баланс для покупок: ${Math.floor(u.buybalance)} рублей`)
	}
	else if (d == "auction_start") {
		if (a.status == true) return bot.answerCallbackQuery(msg.id, '❗️  уже начался!')
		if (u.buybalance < 10) return bot.answerCallbackQuery(msg.id, '❗️ На башем балансе недостаточно средств для начальной ставки!')
		bot.answerCallbackQuery(msg.id, '◀️ Перейдите в бот @Cocacolainvest_bot и введите начальную ставку!', true)
		bot.sendMessage(uid, "👉 <b>Введите начальную ставку для запуска а (от 10 рублей):</b>", { parse_mode: "html", reply_markup: { keyboard: Cancel, resize_keyboard: true } })
		state[uid] = 77777
	}
	else if (~d.indexOf("auction_bet")) {
		var bet = Number(d.split("_")[2])
		if (!a.status) return bot.answerCallbackQuery(msg.id, '❗️  ещё не начался!')
		if (uid == a.lastBet.creator_id) return bot.answerCallbackQuery(msg.id, '❗️ Вы не можете поставить две ставки подряд!')
		if (bet <= a.lastBet.price) return bot.answerCallbackQuery(msg.id, '❗️ Ставка должна превышать предыдущую!')
		if (u.buybalance < bet) return bot.answerCallbackQuery(msg.id, '❗️ На башем балансе недостаточно средств для повышения ставки!')
		await User.findOneAndUpdate({ id: uid }, { $inc: { buybalance: -bet } })
		a.bank += bet
		a.betCount++
		bot.sendMessage(a.lastBet.creator_id, `👑 <a href="tg://user?id=${u.id}">${u.name}</a> перебил Вашу ставку на е!`, { parse_mode: "html" })
		a.lastBet = { price: bet, creator_id: u.id, name: u.name, timestamp: Date.now() }
		await setAuction(a)
		await bot.answerCallbackQuery(msg.id, '👑 Вы повысили ставку и стали лидером аунциона!')
		bot.sendMessage(auctionChannel, `👑 <a href="tg://user?id=${u.id}">${u.name}</a> повысил ставку до <b>${bet} рублей</b>!`, { parse_mode: "html" })
		return bot.editMessageText(`
<b>👨??‍⚖️ </b>\n
▫️ <b>Статус:</b> проходит
⏱ <b>Осталось:</b> 10:00
🍌<b>Банк а:</b> ${a.bank} рублей
🔨 <b>Количество ставок:</b> ${a.betCount}\n
👑 <b>Лидер:</b> <a href="tg://user?id=${a.lastBet.creator_id}">${a.lastBet.name}</a> поставил <b>${bet} рублей</b>!\n
👇 <b>Выберете количество рублей для повышения ставки:</b>`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId, reply_markup: { inline_keyboard: [[{ text: a.lastBet.price + 1, callback_data: "auction_bet_" + (a.lastBet.price + 1) }, { text: a.lastBet.price + 2, callback_data: "auction_bet_" + (a.lastBet.price + 2) }, { text: a.lastBet.price + 3, callback_data: "auction_bet_" + (a.lastBet.price + 3) }, { text: a.lastBet.price + 4, callback_data: "auction_bet_" + (a.lastBet.price + 4) }, { text: a.lastBet.price + 5, callback_data: "auction_bet_" + (a.lastBet.price + 5) }], [{ text: a.lastBet.price + 6, callback_data: "auction_bet_" + (a.lastBet.price + 6) }, { text: a.lastBet.price + 7, callback_data: "auction_bet_" + (a.lastBet.price + 7) }, { text: a.lastBet.price + 8, callback_data: "auction_bet_" + (a.lastBet.price + 9) }, { text: a.lastBet.price + 9, callback_data: "auction_bet_9" }, { text: a.lastBet.price + 10, callback_data: "auction_bet_" + (a.lastBet.price + 10) }], [{ text: "💳 Мой баланс", callback_data: "auction_balance" }], [{ text: "◀️ Перейти в бота", url: "https://t.me/Cocacolainvest_bot" }]] } })
	}
})

async function auctionTicker() {
	var a = await getAuction()
	if (!a.status) return
	if (a.betCount == 1) {
		var delta = Math.floor((a.start_time + 1000 * 60 * 60 * 12 - Date.now()) / 1000)
		if (delta > 0) {
			var hours = Math.floor(delta / (60 * 60))
			var minutes = Math.floor((delta % 3600) / 60)
			var seconds = Math.floor(((delta % 3600) % 60))
			minutes = String(minutes)
			if (minutes.length == 1) minutes = "0" + minutes
			seconds = String(seconds)
			if (seconds.length == 1) seconds = "0" + seconds
			bot.editMessageText(`
<b>👨🏻‍⚖️ </b>\n
▫️ <b>Статус:</b> проходит
⏱ <b>Осталось:</b> ${hours}:${minutes}:${seconds}
🍌<b>Банк а:</b> ${a.bank} рублей
🔨 <b>Количество ставок:</b> 1\n
?? <b>Лидер:</b> <a href="tg://user?id=${a.lastBet.creator_id}">${a.lastBet.name}</a> поставил <b>${a.bank} рублей</b>!\n
👇 <b>Выберете количество рублей для повышения ставки:</b>`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId, reply_markup: { inline_keyboard: [[{ text: a.bank + 1, callback_data: "auction_bet_" + (a.bank + 1) }, { text: a.bank + 2, callback_data: "auction_bet_" + (a.bank + 2) }, { text: a.bank + 3, callback_data: "auction_bet_" + (a.bank + 3) }, { text: a.bank + 4, callback_data: "auction_bet_" + (a.bank + 4) }, { text: a.bank + 5, callback_data: "auction_bet_" + (a.bank + 5) }], [{ text: a.bank + 6, callback_data: "auction_bet_" + (a.bank + 6) }, { text: a.bank + 7, callback_data: "auction_bet_" + (a.bank + 7) }, { text: a.bank + 8, callback_data: "auction_bet_" + (a.bank + 9) }, { text: a.bank + 9, callback_data: "auction_bet_9" }, { text: a.bank + 10, callback_data: "auction_bet_" + (a.bank + 10) }], [{ text: "💳 Мой баланс", callback_data: "auction_balance" }], [{ text: "◀️ Перейти в бота", url: "https://t.me/Cocacolainvest_bot" }]] } })
		}
		else {
			bot.deleteMessage(auctionChannel, a.initMsgId)
			bot.editMessageText(`
<b>👨🏻‍⚖️  завершён!</b>\n
👑 Никто не смог перебить начальную ставку <a href="tg://user?id=${a.lastBet.creator_id}">${a.lastBet.name}</a> в <b>${a.lastBet.price} рублей</b>
💳 <b>Победитель получает ${Math.ceil(a.lastBet.price * 1.1)} рублей</b>
`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId })
			a.status = false
			await User.findOneAndUpdate({ id: a.lastBet.creator_id }, { $inc: { outbalance: a.lastBet.price * 1.1 } })
			bot.sendMessage(a.lastBet.creator_id, `💳 <b>На Ваш баланс для вывода начислено ${Math.ceil(a.lastBet.price * 1.1)} рублей за победу в е</b>`, { parse_mode: "html" })
			await setAuction(a)
			auction_sendInitMsg()
		}
	} else {
		var delta = Math.floor((a.lastBet.timestamp + 1000 * 60 * 10 - Date.now()) / 1000)
		if (delta > 0) {
			var minutes = Math.floor((delta % 3600) / 60)
			var seconds = Math.floor(((delta % 3600) % 60))
			minutes = String(minutes)
			if (minutes.length == 1) minutes = "0" + minutes
			seconds = String(seconds)
			if (seconds.length == 1) seconds = "0" + seconds
			console.log(`Sent ${minutes}:${seconds}`)
			bot.editMessageText(`
<b>👨🏻‍⚖️ </b>\n
▫️ <b>Статус:</b> проходит
⏱ <b>Осталось:</b> ${minutes}:${seconds}
🍌<b>Банк а:</b> ${a.bank} рублей
🔨 <b>Количество ставок:</b> ${a.betCount}\n
👑 <b>Лидер:</b> <a href="tg://user?id=${a.lastBet.creator_id}">${a.lastBet.name}</a> поставил <b>${a.lastBet.price} рублей</b>!\n
👇 <b>Выберете количество рублей для повышения ставки:</b>`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId, reply_markup: { inline_keyboard: [[{ text: a.lastBet.price + 1, callback_data: "auction_bet_" + (a.lastBet.price + 1) }, { text: a.lastBet.price + 2, callback_data: "auction_bet_" + (a.lastBet.price + 2) }, { text: a.lastBet.price + 3, callback_data: "auction_bet_" + (a.lastBet.price + 3) }, { text: a.lastBet.price + 4, callback_data: "auction_bet_" + (a.lastBet.price + 4) }, { text: a.lastBet.price + 5, callback_data: "auction_bet_" + (a.lastBet.price + 5) }], [{ text: a.lastBet.price + 6, callback_data: "auction_bet_" + (a.lastBet.price + 6) }, { text: a.lastBet.price + 7, callback_data: "auction_bet_" + (a.lastBet.price + 7) }, { text: a.lastBet.price + 8, callback_data: "auction_bet_" + (a.lastBet.price + 9) }, { text: a.lastBet.price + 9, callback_data: "auction_bet_9" }, { text: a.lastBet.price + 10, callback_data: "auction_bet_" + (a.lastBet.price + 10) }], [{ text: "💳 Мой баланс", callback_data: "auction_balance" }], [{ text: "◀️ Перейти в бота", url: "https://t.me/Cocacolainvest_bot" }]] } })
		}
		else {
			bot.deleteMessage(auctionChannel, a.initMsgId)
			bot.editMessageText(`
<b>👨🏻‍⚖️  завершён!</b>\n
👑 <b>Лидер:</b> <a href="tg://user?id=${a.lastBet.creator_id}">${a.lastBet.name}</a> поставил <b>${a.lastBet.price} рублей</b>!
🍌<b>Банк а:</b> ${a.bank} рублей
💳 <b>Победитель получает 90% банка а - ${Math.ceil(a.bank * 0.9)} рублей</b>
`, { parse_mode: "HTML", chat_id: auctionChannel, message_id: a.generalMsgId })
			a.status = false
			await User.findOneAndUpdate({ id: a.lastBet.creator_id }, { $inc: { buybalance: a.bank * 0.9 } })
			bot.sendMessage(a.lastBet.creator_id, `💳 <b>На Ваш баланс для покупок начислено ${Math.ceil(a.bank * 0.9)} рублей за победу в е</b>`, { parse_mode: "html" })
			await setAuction(a)
			auction_sendInitMsg()
		}
	}
	
}
setInterval(auctionTicker, 5000)

const auctionChannel = -1001240920845

Clan.deleteOne({name: "Лобзик"}).then(e=>{console.log(e)})

User.insertMany([
{ "_id" : "5dfaac928d3ea75ef63263ba", "trees": [ ], "id" : 0, "buybalance" : 0, "outbalance": 0, "bhivebalance" :0, "wb_profits" : 0, "name" : "dizi ©", "fc" : 0, "ref" : 0., "regDate" : "18/12/2019", "deposit" : 0, "payout" : 1100, "fetuses" : 0, "menu" : "{\"price\":20,\"status\":false,\"count\":5,\"bought\":3}", "lastCollect" : 1576709266975, "ban" : false, "refCount" : 0, "not" : false, "__v" : 0, "totalEarn" : 0, "prudLevel" : 0 },
{ "_id" : "5dfbe31493b06e7818e2c5d7", "trees" : [ ], "id" : 1, "menu" : "{\"price\":20,\"status\":true,\"count\":5,\"bought\":3}", "__v" : 0, "totalEarn" : 0, "prudLevel" : 0 }
]).then()

if(!fs.existsSync('./required_subscriptions.txt')) fs.writeFileSync('./required_subscriptions.txt', '{"required_subscriptions":[],"pay_for_ref":1,"min_withdraw":50}', 'utf-8'); 
 
function readRSS() { 
 
    return JSON.parse(fs.readFileSync('./required_subscriptions.txt', 'utf-8')).required_subscriptions; 
 
} 
 
function readPayForRef() { 
 
  return JSON.parse(fs.readFileSync('./required_subscriptions.txt', 'utf-8')).pay_for_ref; 
 
} 
 
function readMinWithdraw() { 
 
  return JSON.parse(fs.readFileSync('./required_subscriptions.txt', 'utf-8')).min_withdraw; 
 
} 
 
function writeRSS(RSS) { 
 
    filecontent = JSON.parse(fs.readFileSync('./required_subscriptions.txt', 'utf-8')); 
    filecontent.required_subscriptions = RSS; 
 
    fs.writeFileSync('./required_subscriptions.txt', JSON.stringify(filecontent), 'utf-8'); 
 
} 
 
function writePayForRef(pay_for_ref) { 
 
  filecontent = JSON.parse(fs.readFileSync('./required_subscriptions.txt', 'utf-8')); 
  filecontent.pay_for_ref = pay_for_ref; 
 
  fs.writeFileSync('./required_subscriptions.txt', JSON.stringify(filecontent), 'utf-8'); 
 
} 
 
function writeMinWithdraw(min_withdraw) { 
 
  filecontent = JSON.parse(fs.readFileSync('./required_subscriptions.txt', 'utf-8')); 
  filecontent.min_withdraw = min_withdraw; 
 
  fs.writeFileSync('./required_subscriptions.txt', JSON.stringify(filecontent), 'utf-8'); 
 
}
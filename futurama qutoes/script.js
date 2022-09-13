function generateRandomNum(num){
    return Math.floor(Math.random()*num)
}

const futuramaQuote = {
    fryQuotes: ["Valentine’s Day is coming? Oh crap – I forgot to get a girlfriend again.", "My folks were always on me to groom myself and wear underpants. What am I, the pope?", "You Can't Lose Hope When It's Hopeless. You Gotta Hope More!", "Wait, I'm Having One Of Those Things, You Know, A Headache With Pictures.", "I Am Literally Angry With Rage!", "It's Just Like The Story Of The Grasshopper And The Octopus."],
    benderQuotes: ["I’m so embarrassed. I wish everybody else was dead.", "Game’s over, losers! I have all the money. Compare your lives to mine and then kill yourselves.", "Hey sexy mama. Wanna kill all humans?", "I hope he didn’t die. Unless he left a note naming me his successor, then I hope he did die.", "Blackmail is such an ugly word. I prefer extortion. The ‘x’ makes it sound cool."],
    leelaQuotes: ["This is my first visit to the Galaxy of Terror and I’d like it to be a pleasant one.", "Fry, please try to understand. You’re a man. I’m a woman. We’re just too different.", "I ate Fry! I broke up with my boyfriend and then I ate him!", "I will shove you in a filthy nursing home so fast, you won't know what hit you! Probably a filthy nurse!", "The truth is, I once slept with him. A few times.", "That frightened little girl in the statue reminds me of Fry."  ],
    drZoidbergQuotes: ["Two oil changes for the price of one! Now if I could afford the one, and the car.", "Woop Woop Woop Woop Woop Woop Woop!", "Hooray! I'm Helping", "Hooray! People Are Paying Attention To Me!","I Don't Like The Look Of This Doctor... I Bet I've Lost More Patients Than He's Treated" ],
    amyQuotes: ["Finally, a uniform I’d be happy to be caught dead in!","Hey, let's go car shopping! My parents promised if I got all B's they'd buy me a bar, and I got all C's!", "Stop being such a spineless jellyfish!", "What's rent?"],
    professorQuotes: ["Good news, everyone! I’ve taught the toaster to feel love!", "Everyone's always in favor of saving Hitler's brain, but when you put it in the body of a great white shark. Ohhh, suddenly you've gone too far.", "I don't want to live on this planet anymore.", " I hate these nerds! Just because I'm stupider than them they think they're smarter than me!", "Hail science!"  ]
}

let dailyQuote = []

for(let tvCharacter in futuramaQuote) {
    let indexOption = generateRandomNum(futuramaQuote[tvCharacter].length)

}

switch(tvCharacter) {
    case 'fryQuotes':
        dailyQuote.push(`Fry wisely said: "${futuramaQuote[tvCharacter][indexOption]}".`)
        break
    case 'benderQuotes':
        dailyQuote.push(`bender wisely said: "${futuramaQuote[tvCharacter][indexOption]}".`)
        break
    case 'leelaQuotes':
        dailyQuote.push(`Leela wisely said: "${futuramaQuote[tvCharacter][indexOption]}".`)
        break
    case 'drZoidbergQuotes':
        dailyQuote.push(`drZoidberg wisely said: "${futuramaQuote[tvCharacter][indexOption]}".`)
        break
    case 'amyQuotes':
        dailyQuote.push(`amy wisely said: "${futuramaQuote[tvCharacter][indexOption]}".`)
        break
    case 'professorQuotes':
        dailyQuote.push(`professor wisely said: "${futuramaQuote[tvCharacter][indexOption]}".`)
        break
}

function formatQuote(quote) {
    const formatted = dailyQuote. join('/n')
    console.log(formatted)
}

formatQuote(dailyQuote);
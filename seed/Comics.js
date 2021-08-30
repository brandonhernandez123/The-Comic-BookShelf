const db = require('../db')
const ComicBook = require('../models/ComicBook')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const comics = [
    {
      title: 'The Amazing Spider-Man (2018) #1',
      description:
        "An alien invasion hits New York City and the only one who can stop it is…Spider-Man?! And if even that's not enough, you'll see a new roommate, new love interests - and a new villain! Spider-Man goes back to basics courtesy of Nick Spencer (SECRET EMPIRE, SUPERIOR FOES OF SPIDER-MAN) and the Marvel debut of RYAN OTTLEY (Invincible)!",
      thumbnail:
        'https://i.annihil.us/u/prod/marvel/i/mg/b/90/5b3feb60f1a30/clean.jpg'
    },
    {
      title: 'Sinister War (2021) #4',
      description:
        "Things just got worse for Spider-Man. IT Didn't seem possible, but it's true. If you think you have seen Spider-Man take a beating, you haven't seen anything this brutal.",
      thumbnail:
        'https://i.annihil.us/u/prod/marvel/i/mg/d/70/612958311376b/clean.jpg',
      series: 'Sinister War (2021 - Present)'
    },
    {
      title: 'Star Wars: The High Republic (2021) #1',
      description:
        'BEFORE THE SKYWALKER SAGA! THE GOLDEN AGE OF THE JEDI! A new era of STAR WARS storytelling begins. It is centuries before the SKYWALKER SAGA. The JEDI are at their height, protecting the galaxy as REPUBLIC pioneers push out into new territories. As the Frontier prepares for the dedication of majestic STARLIGHT BEACON, PADAWAN KEEVE TRENNIS faces the ultimate choice - will she complete her Jedi Trials or rescue the innocent from disaster? New Jedi! New ships! New evils to fight!',
      thumbnail:
        'https://i.annihil.us/u/prod/marvel/i/mg/9/70/5ff32d680cd25/clean.jpg',
      series: 'Star Wars: The High Republic (2021 - Present)'
    }
  ]
  await ComicBook.insertMany(comics)
  console.log('Test Comics added!')
}
const run = async () => {
  await main()
  db.close()
}

run()

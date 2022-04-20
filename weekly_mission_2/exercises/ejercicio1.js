
// ---------------------------------Github------------------------------------

const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }

   const issue = {
    title: "Semana2",
    repositoryNameAssociated: "AngelDavidFR",
    status: "Open",
    numberOfComments: 20,
    labels: ["MisionNodeJS","Semana_2"],
    author: "Angel Flores",
    dateCreated:"12/4/2022",
    lastUpdated: new Date().toLocaleDateString(),

    getTitleAndAuthor: function(){
      return `${this.title} issue by ${this.author}`
    },
    getGeneralInfo: function(){
      return `This issue ${this.title} was created by ${this.author}  on ${this.dateCreated} and its status is ${this.status} and its last modification was on ${this.lastUpdated}`
    }
   }

   const pullRequest = {
    title: "Nuevo PR",
    branchName: "branch2",
    dateCreated: "12/4/2022",
    status: "open",
    repositoryNameAssociated: "AngelDavidFR",
    getStatus: function(){
      return `El status del Pull request ${this.title} is ${this.status}`
    },
    getTitleAndAutor: function(){
      return `${this.title} was created from repository ${this.repositoryNameAssociated}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   console.log(issue.getTitleAndAuthor())
   console.log(issue.getGeneralInfo())
   console.log(pullRequest.getStatus())
   console.log(pullRequest.getTitleAndAutor())

  //  --------------------------------------------------------------------
  // ---------------------------------Twitter------------------------------------
  const Tuser = {
    user: "Angel David Flores Romero", 
    username: "AngelD_FloresR", 
    dateOfJoin:"October 2020",
    age: 24,
    following:22,
    followers:0,
    
    getUserAndUsername: function(){
      return `User:${this.user}\nUsername:${this.username}`
    },
    getGeneralInfo: function(){
      return `User:${this.user}\nUsername:${this.username}\nAge:${this.age}\nJoined ${this.dateOfJoin}\n${this.following} Following ${this.followers} Followers`
    }
   }
  const trending_topic={
    trending:"London",
    politics:"Ucrania",
    book:"Harry Potter",
    music:"Harry Styles",
    football:"Real madrid",
    games:"Arcadia",

    getTrendingTopic:function(){
      return `1• Trending\n#${this.trending}\n`+`2• Politics\n#${this.politics}\n`+`3• Book\n#${this.book}\n`+`4• Music\n#${this.music}\n`+`5• Football\n#${this.football}\n`+`6• Games\n#${this.games}\n`
    }

  }
  
  const hashtag = {
    trending:"London",
    politics:"Ucrania",
    book:"HarryPotter",
    music:"HarryStyles",
    football:"RealMadrid",
    games:"Arcadia",
    getHashtag:function(){

      return `\nHashtag\n`+`\n#${this.politics}\n`+`#${this.book}\n`+`#${this.music}\n`+`#${this.football}\n`+`#${this.games}\n`

    }
    
   }
   console.log(Tuser.getGeneralInfo())
   console.log(Tuser.getUserAndUsername())
   console.log("\nTrending topic\n")
   console.log(trending_topic.getTrendingTopic())
   console.log(hashtag.getHashtag())
  //  --------------------------------------------------------------------
  //-----------------------------Facebook------------------------------------

  const user={
    biography:"Ver información",
    friends:510,
    photos:{your:150,upload:100,Albums:10},
    post:{posts:"Historial de publicaciones",newPost:"Crear Publicación"},
    getInfoUser:function(){
      return `Biografía ${this.biography}\n${this.friends} amigos\n${this.photos.your} fotos en las que apareces,${this.photos.upload} subidas y ${this.photos.Albums} Álbumes\n${this.post.newPost}\n${this.post.posts}` 
    }
    
  }

const post={
  content:"What's on your mind",
  media:"Photo/Video",
  tag:"Tag Friends",
  felling:"Felling and Activities",
getPostInfo:function(){
return `${this.content}\n${this.media}\n${this.tag}\n${this.felling}`
}
}
const biography={
  user:"Angel Flores",
  friends:510,
  livesIn:"Tehuacan",
  from:"Veracruz",
  followedBy:230,
  getGeneralInfo:function(){
    return`${this.user}\nFriends ${this.friends}\nLives in ${this.livesIn}\nFrom ${this.from}\nFollowed By ${this.followedBy} people`
  }
}
console.log(user.getInfoUser())
console.log(post.getPostInfo())
console.log(biography.getGeneralInfo())

   //  --------------------------------------------------------------------
 //-----------------------------Uber------------------------------------

const profile={
  name:"John",
  car:"Toyota Prius",
  trips:2228,
  rating:4.9,
  years:4,
  getUberProfile:function(){
    return `Nombre:${this.name}\nAutomóvil:${this.car}\nViajes:${this.trips}\nRating:${this.rating}\nAños:${this.years}`
  }
}

const travel={
  fromUbication:"Valles",
  toUbication:"Lomas",
  prices:150,
  driver:{name:"John",car:"Toyota Prius",trips:2228,rating:4.9,years:4},
  timeTravel:"20 minutos", 
  getTravelInfo:function(){
    return `Desde:${this.fromUbication} Hacia:${this.toUbication}\nPrecio:${this.prices}\nTiempo de viaje:${this.timeTravel}`

  },
  getDriverInfo:function(){
    return `Datos del conductor:\n`+`Nombre      Automóvil      Viajes      Rating      Años`+`\n${this.driver.name}      ${this.driver.car}      ${this.driver.trips}          ${this.driver.rating}        ${this.driver.years}`
  }
}

console.log("\n-----Uber------\n")

console.log(profile.getUberProfile())
console.log("\n-----Viaje------\n")
console.log(travel.getTravelInfo())
console.log(travel.getDriverInfo())
// console.log()
  //  --------------------------------------------------------------------
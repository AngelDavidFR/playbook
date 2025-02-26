const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   explorers.forEach((element) =>console.log(element.name+"\n"))
   explorers.forEach((element) =>console.log(`${element.name}\nStack:${element.stack}\n`))

   const explorerStack=explorers.map(function(explorer){ return explorer.stack})
   console.log(explorerStack)

   const jsStackExplorer=explorers.filter((explorer) => explorer.stack.includes('js') )
   console.log("-----Explorer con js en sus Stack------------")
   jsStackExplorer.forEach((element)=>console.log(element.name))

   const cityFind=explorers.find((explorer)=>explorer.city.includes('CDMX'))
   console.log(cityFind.name)

   const completedEx=explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
   console.log(completedEx)
   const completedFront=explorers.some((element) => element.missions.frontend.exercisesFinished)

   console.log(completedFront)

   const completedOnboarding=explorers.every((element) => element.missions.onboarding.isFinished)
   console.log(completedOnboarding)
   


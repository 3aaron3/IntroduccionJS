export function calcMatches(teams){
    let teamsRandom;
    let counter=0;
    let counterOpponents=0;
    let randomteamMatched=[];
    let teamMatched=[];
    for(let i of teams){
        for(let j=0;j<2;j++){
            teamsRandom=Math.floor(Math.random() * teams.length);
            while(randomteamMatched.includes(teamsRandom)){
                teamsRandom=Math.floor(Math.random() * teams.length);
            }
            if(j==0){
                randomteamMatched.push(teamsRandom);
            }
            else{
                randomteamMatched.push(teamsRandom);
                teamMatched.push({team1: teams[randomteamMatched[counterOpponents-1]], team2: teams[randomteamMatched[counterOpponents]]});
            }
            counterOpponents++;
            
        }
        counter++;
        if(counter==(teams.length)/2){
            break;
        }
    }
    return teamMatched;
}
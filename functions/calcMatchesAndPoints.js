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

export function calcPoints(teamMatched, results, results2){
    let GF;
    let GC;
    for(let i=0;i<teamMatched.length;i++){
        GF=Math.floor(Math.random() * 7);
        GC=Math.floor(Math.random() * 7);
        while(GF===GC){
            GC=Math.floor(Math.random() * 7);
        }
        if(results===undefined && results2===undefined){
            if(GF>GC){
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team1}`);
            }
            else{
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team2}`);
            }
        }  
        else if(results!==undefined && results2===undefined){
            if(GF>GC){
                results.push(teamMatched[i].team1);
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team1}`);
            }
            else{
                results.push(teamMatched[i].team2);
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team2}`);
            }
        }   
        else{
            if(GF>GC){
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team1}`);
                results.push(teamMatched[i].team1);
                results2.push(teamMatched[i].team2);
            }
            else{
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team2}`);
                results.push(teamMatched[i].team2);
                results2.push(teamMatched[i].team1);
            }
        }
    }
}
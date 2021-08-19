import {teams} from '../teams.js';
import {calcMatches} from '../functions/calcMatches.js';

class Octavos{
    constructor(resultOctavosNoKey=[]){
        this.resultOctavosNoKey=resultOctavosNoKey;
    }
    
    goalsOctavos(){
        let teamMatched=calcMatches(teams);
        console.log(
            "=================================================\n",
            "==== COMIENZO DE LA FASE DE ELIMINATORIAS =======\n",
            "=================================================\n\n",
            "===== OCTAVOS DE FINAL =====\n"
        )
        let GF;
        let GC;
        for(let i=0;i<teamMatched.length;i++){
            GF=Math.floor(Math.random() * 7);
            GC=Math.floor(Math.random() * 7);
            while(GF===GC){
                GC=Math.floor(Math.random() * 7);
            }
            if(GF>GC){
                this.resultOctavosNoKey.push(teamMatched[i].team1);
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team1}`);
            }
            else{
                this.resultOctavosNoKey.push(teamMatched[i].team2);
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team2}`);
            }
            
        }
    }
}
class Cuartos extends Octavos{
    constructor(resultOctavosNoKey, resultCuartosNoKey=[]){
        super(resultOctavosNoKey);
        this.resultCuartosNoKey=resultCuartosNoKey;
    }
    
    goalsCuartos(){
        let teamMatched=calcMatches(this.resultOctavosNoKey);
        console.log(
            "\n===== CUARTOS DE FINAL =====\n"
        )
        let GF;
        let GC;
        for(let i=0;i<teamMatched.length;i++){
            GF=Math.floor(Math.random() * 7);
            GC=Math.floor(Math.random() * 7);
            while(GF===GC){
                GC=Math.floor(Math.random() * 7);
            }
            if(GF>GC){
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team1}`);
                this.resultCuartosNoKey.push(teamMatched[i].team1);
            }
            else{
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team2}`);
                this.resultCuartosNoKey.push(teamMatched[i].team2);
            }
            
        }
    }
}

class Semifinales extends Cuartos{
    constructor(resultOctavosNoKey, resultCuartosNoKey, resultSemifinalesNoKey=[], resultTercerCuartoNoKey=[]){
        super(resultOctavosNoKey, resultCuartosNoKey);
        this.resultSemifinalesNoKey=resultSemifinalesNoKey;
        this.resultTercerCuartoNoKey=resultTercerCuartoNoKey;

    }
    
    goalsSemifinales(){
        let teamMatched=calcMatches(this.resultCuartosNoKey);
        console.log(
            "\n===== SEMIFINALES =====\n"
        )
        let GF;
        let GC;
        for(let i=0;i<teamMatched.length;i++){
            GF=Math.floor(Math.random() * 7);
            GC=Math.floor(Math.random() * 7);
            while(GF===GC){
                GC=Math.floor(Math.random() * 7);
            }
            if(GF>GC){
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team1}`);
                this.resultSemifinalesNoKey.push(teamMatched[i].team1);
                this.resultTercerCuartoNoKey.push(teamMatched[i].team2);
            }
            else{
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team2}`);
                this.resultSemifinalesNoKey.push(teamMatched[i].team2);
                this.resultTercerCuartoNoKey.push(teamMatched[i].team1);
            }
            
        }
    }
}

class TercerCuarto extends Semifinales{
    constructor(resultOctavosNoKey, resultCuartosNoKey, resultSemifinalesNoKey, resultTercerCuartoNoKey){
        super(resultOctavosNoKey, resultCuartosNoKey, resultSemifinalesNoKey, resultTercerCuartoNoKey);
    }
    
    goalsTercerCuarto(){
        let teamMatched=calcMatches(this.resultTercerCuartoNoKey);
        console.log(
            "\n===== TERCER Y CUARTO PUESTO =====\n"
        )
        let GF;
        let GC;
        for(let i=0;i<teamMatched.length;i++){
            GF=Math.floor(Math.random() * 7);
            GC=Math.floor(Math.random() * 7);
            while(GF===GC){
                GC=Math.floor(Math.random() * 7);
            }
            if(GF>GC){
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team1}`);
            }
            else{
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team2}`);
            }
            
        }
    }
}

class Finales extends TercerCuarto{
    constructor(resultOctavosNoKey, resultCuartosNoKey, resultSemifinalesNoKey, resultTercerCuartoNoKey, winner=[]){
        super(resultOctavosNoKey, resultCuartosNoKey, resultSemifinalesNoKey, resultTercerCuartoNoKey);
        this.winner=winner;
    }
    
    goalsFinales(){
        let teamMatched=calcMatches(this.resultSemifinalesNoKey);
        console.log(
            "\n===== FINALES =====\n"
        )
        let GF;
        let GC;
        for(let i=0;i<teamMatched.length;i++){
            GF=Math.floor(Math.random() * 7);
            GC=Math.floor(Math.random() * 7);
            while(GF===GC){
                GC=Math.floor(Math.random() * 7);
            }
            if(GF>GC){
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team1}`);
                this.winner.push(teamMatched[i].team1);
            }
            else{
                console.log(`${teamMatched[i].team1} ${GF} - ${GC} ${teamMatched[i].team2} => ${teamMatched[i].team2}`);
                this.winner.push(teamMatched[i].team2);
            }
                       
        }
        
    }
    
}
export class Winner extends Finales{
    constructor(resultOctavosNoKey, resultCuartosNoKey, resultSemifinalesNoKey, resultTercerCuartoNoKey, winner){
        super(resultOctavosNoKey, resultCuartosNoKey, resultSemifinalesNoKey, resultTercerCuartoNoKey, winner);
    }
    
    messageWinner(){
        console.log("\n\n===============================================");
        console.log(`¡${this.winner} campeona de la EURO!`);
        console.log(`===============================================`);
    }
}
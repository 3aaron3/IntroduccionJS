import {teams} from '../teams.js';
import {calcMatches, calcPoints} from '../functions/calcMatchesAndPoints.js';

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
        calcPoints(teamMatched, this.resultOctavosNoKey);        
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
        calcPoints(teamMatched, this.resultCuartosNoKey);
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
        calcPoints(teamMatched, this.resultSemifinalesNoKey, this.resultTercerCuartoNoKey);
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
        calcPoints(teamMatched);
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
        calcPoints(teamMatched, this.winner);        
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
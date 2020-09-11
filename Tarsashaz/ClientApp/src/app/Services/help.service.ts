import { Injectable } from '@angular/core';
import { Help } from '../Models/help.model';

@Injectable()
export class HelpService {

  constructor() {}

  getQuestionsAndAnswers(): Help[] {
    return [
      {
        question: "Hogyan tudok bejelentkezni az oldalra?",
        answer: "Az oldalra Google és Facebook account segítségével tudsz bejelentkezni"
      },
      {
        question: "Kell regisztráljak az oldalra?",
        answer: "Az oldalra nem kell külön regisztráció, egy érvényes Facebook vagy Google account segítségével be tudsz jelentkezni."
      },
      {
        question: "Mi történik, ha nem tudok belépni a Facebook/Google accountomba?",
        answer: "Ebben az esetben érdemes felvenni a kapcsolatot a Facebook/Google ügyfélszolgálattal. \
        Ők segítenek a fiók helyreállításában, ezután az oldalt is eléred."
      },
      {
        question: "Milyen adataimhoz fér hozzá az alkalmazás?",
         answer: "Az alkalmazás az alap adataidhoz fér hozzá, mint név és email cím. Az első bejelentkezést követően megtekintheted azokat \
         az adatokat, amiket tudunk rólad. Továbbá szükséges megadni néhány adatot, ami az alkalmazás használatához szükséges."
      }
    ];
  }

}

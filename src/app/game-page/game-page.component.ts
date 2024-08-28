import { Component } from '@angular/core';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {
  chessCordination: any[] = [
    [4, 2, 3, 5, 6, 3, 2, 4],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [-1, -1, -1, -1, -1, -1, -1, -1],
    [-4, -2, -3, -5, -6, -3, -2, -4]
  ];

  getPieceSymbol(piece: string): any {
    const imgPath: any = {
      '0': '',
      '1': 'pawn-w.svg',
      '-1': 'pawn-b.svg',
      '2': 'knight-w.svg',
      '-2': 'knight-b.svg',
      '3': 'bishop-w.svg',
      '-3': 'bishop-b.svg',
      '4': 'rook-w.svg',
      '-4': 'rook-b.svg',
      '5': 'queen-w.svg',
      '-5': 'queen-b.svg',
      '6': 'king-w.svg',
      '-6': 'king-b.svg',
    };
    return imgPath[piece];
  }

  pressedPiece(i: number, j: number) {

  }
}

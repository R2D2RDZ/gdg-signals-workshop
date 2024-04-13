import { Component, Input, OnInit, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CharacterService } from 'src/app/services/character.service';
import { CharacterResult } from 'src/app/services/interfaces';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DetailPage implements OnInit {

  @Input() id: number = 0;

  private readonly _charactersService = inject(CharacterService);

  private readonly _character = signal<CharacterResult | null>(null);
  readonly character = this._character.asReadonly();

  constructor() { 
    effect(async () => {
      const character = await firstValueFrom(this._charactersService.getCharacter(this.id));
      this._character.set(character);
    }); 
    
  }

  ngOnInit() {
  }

}

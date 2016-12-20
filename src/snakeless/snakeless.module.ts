import { NgModule, ModuleWithProviders } from '@angular/core';
import { SnakelessService } from './snakeless.service';

@NgModule({
  imports: []
})
export class SnakelessModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SnakelessModule,
      providers: [SnakelessService]
    };
  }
}

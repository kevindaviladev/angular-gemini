import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GenerativeModel } from '@google/generative-ai';
import { GeminiService } from './services/gemini/gemini.service';
import { RECIPE } from './prompts/food.promt';

interface Recipe {
  name: string;
  country: string;
  ingredients: string[];
  recipe: string;
  details: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'gemini-ai-angular';
  model: GenerativeModel;

  geminiService = inject(GeminiService);
  recipe = signal<Recipe | null>(null);
  imgPreview = signal('');

  constructor() {
    this.model = this.geminiService.createModel();
  }

  async getFile(event: Event) {
    this.imgPreview.set('');
    this.recipe.set(null);
    
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    const data = await this.fileToGenerativePart(file);
    this.generateRecipe(data);
  }

  async fileToGenerativePart(file: File) {
    const base64EncodedDataPromise = new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
      reader.readAsDataURL(file);
      reader.onerror = (error) => reject(error);
    });

    const img = await base64EncodedDataPromise;
    this.imgPreview.set(`data:image/png;base64, ${img}`);
    return {
      inlineData: { data: img, mimeType: file.type },
    };
  }

  async generateRecipe(data: any) {
    if (!this.model) return;

    try {
      const result = await this.model.generateContent([RECIPE, data]);

      const response = result.response;
      this.recipe.set(this.parseResponse(response.text()));
    } catch (error) {
      console.error(error);
    }
  }

  parseResponse(response: string) {
    const res = response.replace(new RegExp('```', 'g'), '');
    return JSON.parse(res) as Recipe;
  }
}

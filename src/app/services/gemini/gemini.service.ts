import { Injectable, inject } from '@angular/core';
import { GenerativeModel, GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  API = 'AIzaSyCw01_uZBPDHQYMYbA5UgmBDz2I8v_XLag';

  createModel() {
    const generativeAPI = new GoogleGenerativeAI(this.API);
    return generativeAPI.getGenerativeModel({ model: 'gemini-pro-vision' });
  }
}

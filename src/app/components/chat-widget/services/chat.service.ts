import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class ChatService {

    private apiUrl = "http://localhost:3000"; // Cambia esto a la URL de tu API
    private messageStream = new Subject()
    constructor(private http: HttpClient) { }
    getMessages(chatId: string, message: string): Observable<any> {
        return new Observable((observer) => {
            const payload = {
                usuarioId: "1",
                message: message
            }
            this.http.post(`${this.apiUrl}/chat`, payload).subscribe({
                next: (response) => {
                    observer.next(response);
                },
                error: (error) => {
                    observer.error(error);
                }
            });
        });
    }

}
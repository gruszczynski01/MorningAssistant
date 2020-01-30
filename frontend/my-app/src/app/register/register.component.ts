import { Component, OnInit } from "@angular/core";
import { MainService } from "../services/main.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  username: string;
  email: string;
  password1: string;
  password2: string;

  constructor(private mainService: MainService, private router: Router) {}

  ngOnInit() {}

  register() {
    console.log("Username: " + this.username);
    console.log("Password: " + this.password1);
    this.mainService
      .getRegister(this.username, this.email, this.password1, this.password2)
      .subscribe(
        data => {
          console.log("DANE Z RESPONSE");
          console.log(data);
          // sprawdzenie czy token jest okay - zaladownaie danych uzytkownika (jakis end point np /api/v1/me)
          this.router.navigate(["/login"]);
          // tslint:disable-next-line: max-line-length
          // moze dobrze zrobic tez sprawdzenie przy ladowaniu home, zeby nie mozna bylo tam wejsc niezalogowanym, albo w html if, z ifno, zeby sie zalogowac, sprawdzenie w ng init
        },
        (error: any) => {
          console.log("ERROR");
          this.username = "";
          this.password1 = "";
          this.password2 = "";
          this.email = "";
        }
      );
  }
}
